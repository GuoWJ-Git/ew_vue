import {EventDispatcher} from '../geotoolkit/util/EventDispatcher';
import {Vector3, Box3, Color, Object3D, WebGLRenderer, PerspectiveCamera, OrthographicCamera} from './THREE';
import {AnimationManager} from './scene/animation/AnimationManager';
import {Compass} from './scene/compass/Compass';
import {AbstractPass} from './postprocessing/AbstractPass';
import {Dimension} from '../geotoolkit/util/Dimension';
import {AbstractTool} from './tool/AbstractTool';
import {Event} from './Event';
import {AnchoredShape} from '../geotoolkit/scene/shapes/AnchoredShape';

/**
 * A Plot with 3D capabilities.<br>
 * Unlike a geotoolkit 2D plot, this plot requires a DIV element to be passed and not a canvas.<br>
 * <br>
 * The plot is internally structured as a SceneGraph using THREE.Scene.<br>
 * It uses a camera system to represent user's eye location in 3D space.<br>
 * This camera position can be moved anywhere in the plot and can look in any direction (although controller are encouraged to limit this freedom to ensure meaningful displays)<br>
 * The camera type and option can be configured at creation or on the fly using setOptions().<br>
 * <br>
 * To increase rendering accuracy the plot will try to compute ideal near/far planes positions and simplify transformation matrices.<br>
 * This mechanism relies on the fact that the plot can compute its own modellimits and that those limits are reasonably small.<br>
 * The rendering accuracy might suffer if modellimits are too big because of GPU floating point computing accuracy.<br>
 * <br>
 * To render its content to the plot a render cycle made is of the following steps:<br>
 * <ul>
 * <li>Call updateObject on <b>all</b> nodes: Offers a chance to each node to update its status before rendering occurs. This should not trigger any invalidation event though.</li>
 * <li>Call prepareRender: Simplifies transformation matrices, move near/far planes to increase accuracy.</li>
 * <li>Call beforeRender on <b>visible</b> nodes. This can be used to update nodes 'on the fly' in the render pass. However be careful when overriding this function as it heavily impacts the rendering logic.</li>
 * <li>Render: The WebGLRenderer traverses the scene, rendering node using WebGL (all GL operations occur at this stage).</li>
 * <li>Call finishRender: Restores the matrices, revert near/far planes.</li>
 * </ul>
 * <br>
 * The updateObject phase differs from beforeRender as it is executed before the plot's matrices/transformation have been simplified&optimized.<br>
 * Which means that its implementation modifies a transformation that will be taken into account during this render pass for the simplification step.<br>
 * However beforeRender is executed after the simplification,  any modification done in this function will be rendered but will not be used for simplification.<br>
 * Also, beforeRender expose a bit more of the internal plot logic and usage of those elements that are not part of the public API should be done with caution.<br>
 * Generally, updateObject is used to implement application level changes.<br>
 * And beforeRender is generally used to execute low level operations like GPU resource loading and management.<br>
 * <br>
 * The plot also exposes some rendering options like anti-aliasing, clear-color or preferred GPU precision.<br>
 * Some of them cannot be changed on the fly though like the transparency of the background.<br>
 * <br>
 * A notification system using EventDispatcher exposes the events occurring in the plot (object added, removed, invalidate, camera changes, etc).<br>
 * One could listen to events occurring on any node of the plot by listening to the Plot's events.<br>
 * Note that you can also send custom events from your nodes to implement your application's logic.<br>
 * See geotoolkit3d.Event.Type for the builtin events.<br>
 * <br>
 * When an event is fired and caught by the plot, it marks itself as dirty.<br>
 * Whenever the next renderCycle occurs (based on requestanimationframe), this flag will be checked.<br>
 * If it's true then a render cycle will occur, otherwise the plot will hibernate until the next requestanimationframe lands.<br>
 * That's why one may need to manually call invalidateObject() on a node after modifying it through direct access (like position, scale, rotation, etc).<br>
 * It will flag the plot as dirty (through the event notification system), resulting in a render.<br>
 * Note that because the rendering is asynchronous, during invalidate several time in a row will trigger only one render.<br>
 * <br>
 * The plot also offers some useful features like builtin lighting (ambient light and camera headlight) and global scale.<br>
 * Those options can be enabled/disabled and configured through the setOptions().<br>
 * <br>
 * Like a geotoolkit widget, the plot uses a Tool system to catch, process and dispatch user input. (See {@link @int/geotoolkit3d/tool/AbstractTool.AbstractTool}).<br>
 * One of those tools is the controller, it's a special tool that allow the user to manipulate the camera using an input device (mouse, touch screen, ...).<br>
 * <br>
 * The plot will also have a compass added to it (as an overlay).<br>
 * This compass can be configured/changed and also replaced by a custom one.<br>
 * <br>
 * The plot provides postprocessing effects like anti-aliasing and outline highlighting.
 * Since post processing is enabled by default, an EffectComposer will be created and will replace WebGLRenderer in animation loop.<br>
 * It renders scene into a 2D image on a render target, and applies some passes to the result before drawing it to the canvas.<br>
 */
export class Plot extends EventDispatcher {
    /**
     * A Plot with 3D capabilities.<br>
     * Unlike a geotoolkit 2D plot, this plot requires a DIV element to be passed and not a canvas.<br>
     * <br>
     * The plot is internally structured as a SceneGraph using THREE.Scene.<br>
     * It uses a camera system to represent user's eye location in 3D space.<br>
     * This camera position can be moved anywhere in the plot and can look in any direction (although controller are encouraged to limit this freedom to ensure meaningful displays)<br>
     * The camera type and option can be configured at creation or on the fly using setOptions().<br>
     * <br>
     * To increase rendering accuracy the plot will try to compute ideal near/far planes positions and simplify transformation matrices.<br>
     * This mechanism relies on the fact that the plot can compute its own modellimits and that those limits are reasonably small.<br>
     * The rendering accuracy might suffer if modellimits are too big because of GPU floating point computing accuracy.<br>
     * <br>
     * To render its content to the plot a render cycle made is of the following steps:<br>
     * <ul>
     * <li>Call updateObject on <b>all</b> nodes: Offers a chance to each node to update its status before rendering occurs. This should not trigger any invalidation event though.</li>
     * <li>Call prepareRender: Simplifies transformation matrices, move near/far planes to increase accuracy.</li>
     * <li>Call beforeRender on <b>visible</b> nodes. This can be used to update nodes 'on the fly' in the render pass. However be careful when overriding this function as it heavily impacts the rendering logic.</li>
     * <li>Render: The WebGLRenderer traverses the scene, rendering node using WebGL (all GL operations occur at this stage).</li>
     * <li>Call finishRender: Restores the matrices, revert near/far planes.</li>
     * </ul>
     * <br>
     * The updateObject phase differs from beforeRender as it is executed before the plot's matrices/transformation have been simplified&optimized.<br>
     * Which means that its implementation modifies a transformation that will be taken into account during this render pass for the simplification step.<br>
     * However beforeRender is executed after the simplification,  any modification done in this function will be rendered but will not be used for simplification.<br>
     * Also, beforeRender expose a bit more of the internal plot logic and usage of those elements that are not part of the public API should be done with caution.<br>
     * Generally, updateObject is used to implement application level changes.<br>
     * And beforeRender is generally used to execute low level operations like GPU resource loading and management.<br>
     * <br>
     * The plot also exposes some rendering options like anti-aliasing, clear-color or preferred GPU precision.<br>
     * Some of them cannot be changed on the fly though like the transparency of the background.<br>
     * <br>
     * A notification system using EventDispatcher exposes the events occurring in the plot (object added, removed, invalidate, camera changes, etc).<br>
     * One could listen to events occurring on any node of the plot by listening to the Plot's events.<br>
     * Note that you can also send custom events from your nodes to implement your application's logic.<br>
     * See geotoolkit3d.Event.Type for the builtin events.<br>
     * <br>
     * When an event is fired and caught by the plot, it marks itself as dirty.<br>
     * Whenever the next renderCycle occurs (based on requestanimationframe), this flag will be checked.<br>
     * If it's true then a render cycle will occur, otherwise the plot will hibernate until the next requestanimationframe lands.<br>
     * That's why one may need to manually call invalidateObject() on a node after modifying it through direct access (like position, scale, rotation, etc).<br>
     * It will flag the plot as dirty (through the event notification system), resulting in a render.<br>
     * Note that because the rendering is asynchronous, during invalidate several time in a row will trigger only one render.<br>
     * <br>
     * The plot also offers some useful features like builtin lighting (ambient light and camera headlight) and global scale.<br>
     * Those options can be enabled/disabled and configured through the setOptions().<br>
     * <br>
     * Like a geotoolkit widget, the plot uses a Tool system to catch, process and dispatch user input. (See {@link @int/geotoolkit3d/tool/AbstractTool.AbstractTool}).<br>
     * One of those tools is the controller, it's a special tool that allow the user to manipulate the camera using an input device (mouse, touch screen, ...).<br>
     * <br>
     * The plot will also have a compass added to it (as an overlay).<br>
     * This compass can be configured/changed and also replaced by a custom one.<br>
     * <br>
     * The plot provides postprocessing effects like anti-aliasing and outline highlighting.
     * Since post processing is enabled by default, an EffectComposer will be created and will replace WebGLRenderer in animation loop.<br>
     * It renders scene into a 2D image on a render target, and applies some passes to the result before drawing it to the canvas.<br>
     * @param options The plot options
     * @param options.container The div element in which the canvas will be created and added (this or options.canvas need to be set)
     * @param options.canvas Canvas for the plot to render to (this or options.container need to be set)
     * @param options.translation This position becomes the effective origin for the scene for scaling purposes.
     * @param options.autoupdate If true, the plot will automatically update when a node is invalidated
     * @param options.autoupdateinterval Auto update time interval. window.requestAnimationFrame will be used if available and autoUpdateInterval not specified
     * @param options.autoupdatemodellimits True to let the plot update the modellimits when an object is inserted/removed into the scene. If an object is moved outside of the current modellimits you can manually call plot.updateModelLimits()
     * @param options.modellimits The modellimits mandatory if autoupdatemodellimits is not enabled. Must contain the whole scene and it's center should be close to the area of interest
     * @param options.applyorigintranslation Apply a translation to the root and camera for higher precision. The side effect is it temporarily changes camera's position, i.e. during beforeRender().
     * @param options.scale The global scale to be applied to the scene graph
     * @param options.stats flag for performance tools (frame rate and memory)
     * @param options.renderer The renderer configuration
     * @param options.renderer.parameters The renderer configuration. See ThreeJS documentation. (Note: you can set logarithmicDepthBuffer false to improve performance, but there may be some artifacts)
     * @param options.renderer.clearcolor The renderer clearcolor color
     * @param options.renderer.clearcoloralpha The renderer clearcolor alpha value (0,1)
     * @param options.camera The camera options
     * @param options.camera.type The camera type
     * @param options.camera.position The location of the camera in the scene
     * @param options.camera.lookat The coordinates of the point the camera will look at
     * @param options.camera.fov The field-of-view angle in degrees (applies only to perspective camera)
     * @param options.camera.near The frustum near clipping plane, the 'auto' mode let the plot compute the ideal planes that fit the current modellimits and provide the best accuracy
     * @param options.camera.far The frustum near clipping plane, the 'auto' mode let the plot compute the ideal planes that fit the current modellimits and provide the best accuracy
     * @param options.camera.minnear when set to Auto clipping planes, this is the minimum value that will be set on the near plane
     * @param options.camera.minfar when set to Auto clipping planes, this is the minimum value that will be set on the far plane
     * @param options.camera.nearfarscale this will adjust the near plane to stay within this scale of the far (0 to disable)
     * @param options.camera.orthoresize The way a plot handles resize when in Orthographic mode
     * @param options.camera.movewithscale moves the camera in world coordinates to maintain its location in user coordinates when a scale is applied to the plot
     * @param options.camera.controller The camera controller configuration
     * @param options.camera.controller.type The controller to be used to change the camera location.
     * @param options.camera.controller.autorotate Set to true to automatically rotate around object. (only supports OrbitController)
     * @param options.ambientlighting Ambient lighting options
     * @param options.ambientlighting.enabled Determines if the ambient light is enabled
     * @param options.ambientlighting.color The color of the ambient light.
     * @param options.cameralighting The camera lighting options
     * @param options.cameralighting.enabled Set to true to enable camera lighting.
     * @param options.cameralighting.color The color of the camera light.
     * @param options.cameralighting.intensity The intensity of the camera light.
     * @param options.compass The default compass options.
     * @param options.compass.container An optional container for the default compass, if not specified one will be created. Note that in order to be correctly positioned, this container requires the given container to have a 'position' set.
     * @param options.compass.canvas An optional canvas to render the compass to
     * @param options.compass.enabled flag to create the compass canvas.
     * @param options.postprocessing the postprocessing options
     * @param options.postprocessing.enabled enable postprocessing
     * @param options.postprocessing.depthpeeling the depth peeling renderer options.
     * @param options.postprocessing.depthpeeling.enabled enable the depth peeling rendering for correct transparency.
     * @param options.postprocessing.depthpeeling.peelinglevel the number of depth peeling pass (min 2), more passes means more transparent objects can overlap with correct transparency.
     * @param options.postprocessing.antialias the antialias options
     * @param options.postprocessing.antialias.enabled enable postprocessing anti-aliasing
     * @param options.postprocessing.antialias.mode the mode of anti-aliasing
     * @param options.postprocessing.highlight the highlight options
     * @param options.postprocessing.highlight.enabled flag to enable highlight
     * @param options.postprocessing.highlight.edgestrength Factor for edge strength
     * @param options.postprocessing.highlight.edgeglow Factor for glow effect
     * @param options.postprocessing.highlight.edgethickness The edge thickness
     * @param options.postprocessing.highlight.pulseperiod The time interval of a pulse effect
     * @param options.postprocessing.highlight.visiblecolor The color for visiable edge
     * @param options.postprocessing.highlight.hiddencolor The color for hidden edge
     * @param options.postprocessing.highlight.hiddenline If true, show hidden outline in area that other objects clipped the selected object
     * @param options.postprocessing.highlight.highlightedges True if need to highlight edges of meshes
     * @param options.postprocessing.mode Click or hover mode for highlight
     */
    constructor(options: object | { container?: HTMLElement; canvas?: object; translation?: Vector3; autoupdate?: boolean; autoupdateinterval?: number; autoupdatemodellimits?: boolean; modellimits?: Box3; applyorigintranslation?: boolean; scale?: Vector3; stats?: boolean; renderer?: object | { parameters?: object; clearcolor?: Color | string; clearcoloralpha?: number; } ; camera?: object | { type?: CameraType; position?: Vector3; lookat?: Vector3; fov?: number; near?: number; far?: number; minnear?: number; minfar?: number; nearfarscale?: number; orthoresize?: OrthographicResizeMode; movewithscale?: boolean; controller?: object | { type?: CameraControllerType | Function; autorotate?: boolean; } ; } ; ambientlighting?: object | { enabled?: boolean; color?: string; } ; cameralighting?: object | { enabled?: boolean; color?: string; intensity?: string; } ; compass?: object | { container?: object; canvas?: object; enabled?: boolean; } ; postprocessing?: object | { enabled?: boolean; depthpeeling?: object | { enabled?: object; peelinglevel?: object; } ; antialias?: object | { enabled?: boolean; mode?: string; } ; highlight?: object | { enabled?: boolean; edgestrength?: number; edgeglow?: number; edgethickness?: number; pulseperiod?: number; visiblecolor?: Color; hiddencolor?: Color; hiddenline?: boolean; highlightedges?: boolean; } ; mode?: HighlightType; } ; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options options to set on this object
     * @param options.modellimits The modellimits, necessary if autoupdatemodellimits is not enabled. Should be the boundingbox of the scene.
     * @param options.translation This position becomes the effective origin for the scene for scaling purposes.
     * @param options.camera The camera options
     * @param options.camera.type The camera type, note that changing the camera type will not preserve the current display.
     * @param options.camera.fov The field-of-view angle in degrees (applies only to perspective camera)
     * @param options.camera.near The frustum near clipping plane
     * @param options.camera.far The frustum far clipping plane
     * @param options.camera.minnear the minimum value for auto clipping planes
     * @param options.camera.minfar the minimum value for auto clipping planes
     * @param options.camera.orthoresize the way the plot will resize when in orthographic mode
     * @param options.camera.position The camera position, note that this internally use moveCamera() and is here for convenience
     * @param options.camera.lookat The camera lookat, note that this internally use moveCamera() and is here for convenience
     * @param options.camera.movewithscale moves the camera in world coordinates to maintain its location in user coordinates when a scale is applied to the plot
     * @param options.camera.controller The camera controller configuration
     * @param options.camera.controller.type The controller to be used to change the camera location.
     * @param options.camera.controller.autorotate Set to true to automatically rotate around object. (only supports OrbitController)
     * @param options.renderer The renderer configuration
     * @param options.renderer.clearcolor The renderer clearcolor color
     * @param options.renderer.clearcoloralpha The renderer clearcolor alpha value (0,1).<br>Note that plot must have been created with a clearcoloralpha lesser than 1 to support alpha.
     * @param options.scale The global scale to be applied to the scene graph. This change the relation between user coordinates and world coordinates
     * @param options.ambientlighting Ambient lighting options
     * @param options.ambientlighting.enabled Determines if the ambient light is enabled
     * @param options.ambientlighting.color The color of the ambient light.
     * @param options.cameralighting The camera lighting options
     * @param options.cameralighting.enabled Set to true to enable camera lighting.
     * @param options.cameralighting.color The color of the camera light.
     * @param options.cameralighting.intensity The intensity of the camera light.
     * @param options.postprocessing the postprocessing options
     * @param options.postprocessing.depthpeeling the depth peeling renderer options.
     * @param options.postprocessing.depthpeeling.enabled enable the depth peeling rendering for correct transparency.
     * @param options.postprocessing.depthpeeling.peelinglevel the number of depth peeling pass (min 2), more passes means more transparent objects can overlap with correct transparency.
     * @param options.postprocessing.antialias the antialias options
     * @param options.postprocessing.antialias.enabled enable postprocessing anti-aliasing
     * @param options.postprocessing.antialias.mode the mode of anti-aliasing
     * @param options.postprocessing.highlight the highlight options
     * @param options.postprocessing.highlight.enabled flag to enable highlight
     * @param options.postprocessing.highlight.edgestrength Factor for edge strength
     * @param options.postprocessing.highlight.edgeglow Factor for glow effect
     * @param options.postprocessing.highlight.edgethickness The edge thickness
     * @param options.postprocessing.highlight.pulseperiod The time interval of a pulse effect
     * @param options.postprocessing.highlight.visiblecolor The color for visiable edge
     * @param options.postprocessing.highlight.hiddencolor The color for hidden edge
     * @param options.postprocessing.highlight.highlightedges True if need to highlight edges of meshes
     */
    setOptions(options: object | { modellimits?: Box3; translation?: Vector3; camera?: object | { type?: CameraType; fov?: number; near?: number; far?: number; minnear?: number; minfar?: number; orthoresize?: OrthographicResizeMode; position?: Vector3; lookat?: Vector3; movewithscale?: boolean; controller?: object | { type?: CameraControllerType | object; autorotate?: boolean; } ; } ; renderer?: object | { clearcolor?: Color | string; clearcoloralpha?: number; } ; scale?: Vector3; ambientlighting?: object | { enabled?: boolean; color?: string; } ; cameralighting?: object | { enabled?: boolean; color?: string; intensity?: string; } ; postprocessing?: object | { depthpeeling?: object | { enabled?: object; peelinglevel?: object; } ; antialias?: object | { enabled?: boolean; mode?: string; } ; highlight?: object | { enabled?: boolean; edgestrength?: number; edgeglow?: number; edgethickness?: number; pulseperiod?: number; visiblecolor?: Color; hiddencolor?: Color; highlightedges?: boolean; } ; } ; } ): this;
    /**
     * Get plot options
     * (see {@link @int/geotoolkit3d/Plot.Plot#setOptions} for more info)
     */
    getOptions(): object | any;
    /**
     * Converts user coordinates to world coordinates in place (modifies the given object).<br>
     * <br>
     * User coordinates are world coordinates without global scaling applies.<br>
     * Use #setOptions({ scale: ... } to change the global scaling.<br>
     * <br>
     * @param vector3 Source AND target vector3
     */
    rootScale(vector3: Vector3): Vector3;
    /**
     * Converts world coordinates to user coordinates in place (modifies the given object).<br>
     * <br>
     * User coordinates are world coordinates without global scaling applies.<br>
     * Use #setOptions({ scale: ... } to change the global scaling.<br>
     * <br>
     * @param vector3 Source AND target vector3
     */
    rootScaleInv(vector3: Vector3): Vector3;
    /**
     * Returns camera location in user coordinates.<br>
     * @param target Optional target vector
     */
    getCameraLocation(target?: Vector3): Vector3;
    /**
     * Returns the camera lookat point in user coordinates IF such information is available (depends on the controller used).<br>
     * Otherwise returns camera.location + camera.direction.<br>
     * @param target Optional target vector
     */
    getCameraLookAt(target?: Vector3): Vector3;
    /**
     * This function will try to reset the camera position along the y axis so most of the scene fits into the view.<br>
     * It will also change the camera anchor point to the scene center.<br>
     * If the there is no visible geometry in the scene this will silently fail.
     * @param animate Animate the camera change
     * @param animationDuration Duration of the animation in milliseconds
     */
    resetCamera(animate?: boolean, animationDuration?: number): this;
    /**
     * This function will try to adjust the camera position along the direction axis so that most of the scene fits into the view. It
     * will also change the camera anchor point to the scene center.
     * If the there is no visible geometry in the scene this function will silently fail.
     * @param direction Direction to move the camera in, will use scene center to camera if null. This should be a
     * unit vector
     * @param animate Animate the camera change
     * @param animationDuration Duration of the animation in milliseconds
     * @param distanceFactor Distance factor when fitting the camera. Greater than 1 means further from scene center.
     */
    fitCamera(direction?: Vector3, animate?: boolean, animationDuration?: number, distanceFactor?: number): this;
    /**
     * Sets camera location in user coordinates.<br>
     * It is recommended to use #moveCamera() instead as it handles both the location and the direction of the camera.<br>
     * @param position The position to move to (in USER coordinates)
     * @param animate Animate the camera change
     * @param animationDuration Duration of the animation in milliseconds
     */
    setCameraLocation(position: Vector3, animate?: boolean, animationDuration?: number): this;
    /**
     * Sets camera target in user coordinates.<br>
     * It is recommended to use #moveCamera() instead as it handles both the location and the direction of the camera.<br>
     * @param lookat The point to look at (in USER coordinates)
     * @param animate Animate the camera change
     * @param animationDuration Duration of the animation in milliseconds
     */
    setCameraLookAt(lookat: Vector3, animate?: boolean, animationDuration?: number): this;
    /**
     * Moves the camera to the given position and rotate it to look at the given lookat.<br>
     * Note that the given points should be in user coordinates (world coordinates without global scaling).<br>
     * @param position The position to move to in USER coordinates
     * @param lookAt The point to look at (in USER coordinates)
     * @param animate Animate the camera change
     * @param animationDuration Duration of the animation in milliseconds
     */
    moveCamera(position?: Vector3, lookAt?: Vector3, animate?: boolean, animationDuration?: number): this;
    /**
     * Returns the scene graph root.<br>
     * One should use it to append nodes to the scene using the add() function.<br>
     */
    getRoot(): Object3D;
    /**
     * Returns the scene graph animation manager.<br>
     * This manager should be used to perform smooth animations in the plot.<br>
     * See {@link @int/geotoolkit3d/scene/animation/AnimationManager.AnimationManager} for more details.<br>
     */
    getAnimationManager(): AnimationManager;
    /**
     * Returns the compass object.<br>
     * The returned compass can be configured/modified.<br>
     * See {@link @int/geotoolkit3d/scene/compass/Compass.Compass} for more details.<br>
     */
    getCompass(): Compass;
    /**
     * Set size of the Plot.<br>
     * This increase the rendering-area size (canvas) to the given dimension.<br>
     * It also notifies the WebGl renderer.<br>
     * The given pixelDeviceRatio can be used to take into account the current Browser zoom level.<br>
     * @param width The new width that should be set
     * @param height The new height that should be set
     * @param pixelDeviceRatio The pixel device ratio, if unset, will use the value provided by the window if available.
     */
    setSize(width: number, height: number, pixelDeviceRatio?: number): this;
    /**
     * Add postprocessing pass to the renderer.<br>
     * The last pass needs to be rendered to screen (set to true using setOptions). <br>
     * The pass to be added must inherit {@link @int/geotoolkit3d/postprocessing/AbstractPass.AbstractPass}. <br>
     * The order of passes affects the final output, please use getMultipass and setOptions for ordering.
     * @param pass the postprocessing pass
     */
    addMultipass(pass: AbstractPass): void;
    /**
     * Get current postprocessing multipass as an array
     */
    getMultipass(): AbstractPass[];
    /**
     * Returns the 'virtual device' size of the plot.<br>
     * <br>
     * This returns the raw size given at initialization or through the setSize function.<br>
     * Ignoring any pixelRatio that could have been set on the WebGL renderer.<br>
     * @param target optional object to store the dimensions
     */
    getSize(target?: Dimension): Dimension;
    /**
     * Returns a copy of the model origin in world coordinates.<br>
     * The model origin is the center of the modellimits.<br>
     */
    getModelOrigin(): Vector3;
    /**
     * Returns a copy of the modellimits in world coordinates.<br>
     * The returned limits are either the one provided through the setOptions() or the one automatically computed by the plot.<br>
     * @param viewModelLimits gets the modelLimits that includes grid sprites and children of objects with a getWorldBoundingBox
     * @param filter that gets applied to the compute the model limits
     */
    getModelLimits(viewModelLimits?: boolean, filter?: Function): Box3;
    /**
     * Project the given (world) point to virtual screen space in place.<br>
     * @param point The point to project in world coordinates.<br>
     */
    project(point: Vector3): Vector3;
    /**
     * Adds and initializes the given tool.<br>
     * The tool will be notified it has been added and it will attach its system-event listeners.<br>
     * @param tool The tool to initialize and add.
     */
    addTool(tool: AbstractTool): this;
    /**
     * Finds the tool matching the given name.<br>
     * If several tool match this name, the 'first' is returned.<br>
     * @param name The name of the tool to look for
     */
    getToolByName(name: string): AbstractTool;
    /**
     * Removes a tool (and disposes it).<br>
     * The given tool will be disposed only if it does belong to this plot.<br>
     * @param tool The tool to remove and dispose
     */
    removeTool(tool: AbstractTool): this;
    /**
     * List all tools in the plot
     */
    listTool(): object[];
    /**
     * Set the plot as 'dirty' so it gets redrawn during the next render phase.<br>
     * This also propagates an event notifying the plot's listeners that an invalidation has occurred.<br>
     * <br>
     * See {@link @int/geotoolkit3d/Event.Type} for built-in events, custom event types can also be used.<br>
     * @param event The event that should be propagated as the reason of the invalidate
     */
    invalidateObject(event?: Event): this;
    /**
     * Updates the model limits of the Plot by computing it using the current scene state.<br>
     * <br>
     * If 'automodellimits' is enabled, this should be called automatically when some operations occur (adding, removing a node, etc).<br>
     * <br>
     * However it should be called manually if an object in the scene is moved outside of the current modellimits manually.<br>
     * For example by changing its position attribute.<br>
     * <br>
     * The modellimits are used internally to improves accuracy of rendering & picking.<br>
     * Note: this method can have side effects if non standard filter was used.
     * @param filter gets applied to the compute of model limits
     * @param alwaysTraverseChildren Forces the calculation to traverse children to get the extents of the whole view
     */
    updateModelLimits(filter?: Function, alwaysTraverseChildren?: boolean): this;
    /**
     * Gets the WebGLRenderer
     */
    getRenderer(): WebGLRenderer;
    /**
     * Returns usage statistics like WebGl calls per frame or amount of vertices rendered per frame.
     */
    getUsageStatistics(): object;
    /**
     * Disposes the plot and all its resources.<br>
     * To do so, all objects contained in the scene will be disposed.<br>
     * The tools registered on this plot will also be disposed.<br>
     */
    dispose(): void;
    /**
     * Gets camera
     */
    getCamera(): PerspectiveCamera | OrthographicCamera;
    /**
     * Gets container
     */
    getContainer(): HTMLElement;
    /**
     * Set watermark to draw over plot 3d
     * @param watermark watermark
     */
    setWatermark(watermark: AnchoredShape): this;
}
/**
 * Enum of builtin camera types.<br>
 * Each Camera has its own projection algorithm.<br>
 */
export enum CameraType {
    /**
     * Camera will be using a perspective projection
     */
    Perspective = 'perspective',
    /**
     * Camera will be using an orthographic projection
     */
    Orthographic = 'orthographic'
}
/**
 * Enum of ways to have the orthographic camera resize<br>
 */
export enum OrthographicResizeMode {
    /**
     * Cameras view port will not be modified <br>
     */
    None = 'None',
    /**
     * Cameras view port will try to maintain the current view scale<br>
scene will keep the view but cut off space to maintain view scale.
     */
    MaintainScale = 'MaintainScale'
}
/**
 * Enum of builtin controller types.<br>
 * To provide your own controller simply pass the constructor function/class to the setOption instead of one of the enum value.<br>
 * <br>
 * This constructor will be called with this json:<br>
 * <pre>
 * {
 *  'camera': The camera object,
 *  'plot': This plot,
 *  'position': The initial/current position,
 *  'lookat': The initial/current lookat
 * }</pre>
 */
export enum CameraControllerType {
    /**
     * Moves the camera so that it revolves around a given point.
     */
    Orbit = 'orbit',
    /**
     * Behaves like a trackball, the 3D scene being the ball.
     */
    TrackBall = 'trackball',
    /**
     * Moves like a first person camera - commonly referred to as FPS controllers
     */
    FirstPerson = 'firstperson',
    /**
     * No interactive controller.
     */
    None = 'none'
}
/**
 * HighlightType
 */
export enum HighlightType {
    /**
     * 3D object gets highlighted when hovering
     */
    Hover = 'hover',
    /**
     * 3D object gets highlighted when clicking
     */
    Click = 'click'
}
/**
 * Default Tool Names
 */
export enum DefaultTool {
    /**
     * Highlight Tool
     */
    HighlightTool = 'HighlightTool'
}
