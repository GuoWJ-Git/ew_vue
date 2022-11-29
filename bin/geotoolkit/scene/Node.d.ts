import {EventDispatcher} from '../util/EventDispatcher';
import {Transformation} from '../util/Transformation';
import {Rect} from '../util/Rect';
import {RenderingContext} from '../renderer/RenderingContext';

/**
 * The Node class is the abstract class parent of all geotoolkit shapes.<br>
 * <br>
 * Node implements the functions required by a shape to be inserted in a Plot. (Except the render function which is Geotoolkit abstract method.)<br>
 * Every Node has two <b>transformations</b>: World Transform and the Scene Transform. <br>
 * WorldTransform corresponds to the concatenation of local and contents transforms <br>
 * Scene Transform corresponds to the concatenation of a Node's World Transform with its parent's World Transforms or the ultimate transformation beween the group and the plot.<br>
 * <br>
 * A node handles some of the <b>invalidation</b> mechanism as it forwards (upward) the invalidation event to its parent.<br>
 * One may add an invalidationHandler to be notified when the node has been invalidated, see {@link @int/geotoolkit/scene/Node.Node.addInvalidateHandler}
 * <br>
 * When implementing a new shape, one will have to implement the <b>render()</b>function which allows rendering graphics.<br>
 * Note that shape selection/detection is also using rendering.<br>
 * It is also recommended to implement the <b>checkCollision()</b> function to let the toolkit optimize rendering by checking if the node is in the specified area and needs to be rendered.<br>
 * If it passes the test then only render() function will be called.<br>
 * <br>
 * The node class also introduces the functions <b>getProperties</b> and <b>setProperties</b> that may be used for serialization/deserialization.<br>
 * Therefore, a custom shape should extend those functions to be able to be serialized and deserialized.
 */
export class Node extends EventDispatcher {
    /**
     * The Node class is the abstract class parent of all geotoolkit shapes.<br>
     * <br>
     * Node implements the functions required by a shape to be inserted in a Plot. (Except the render function which is Geotoolkit abstract method.)<br>
     * Every Node has two <b>transformations</b>: World Transform and the Scene Transform. <br>
     * WorldTransform corresponds to the concatenation of local and contents transforms <br>
     * Scene Transform corresponds to the concatenation of a Node's World Transform with its parent's World Transforms or the ultimate transformation beween the group and the plot.<br>
     * <br>
     * A node handles some of the <b>invalidation</b> mechanism as it forwards (upward) the invalidation event to its parent.<br>
     * One may add an invalidationHandler to be notified when the node has been invalidated, see {@link @int/geotoolkit/scene/Node.Node.addInvalidateHandler}
     * <br>
     * When implementing a new shape, one will have to implement the <b>render()</b>function which allows rendering graphics.<br>
     * Note that shape selection/detection is also using rendering.<br>
     * It is also recommended to implement the <b>checkCollision()</b> function to let the toolkit optimize rendering by checking if the node is in the specified area and needs to be rendered.<br>
     * If it passes the test then only render() function will be called.<br>
     * <br>
     * The node class also introduces the functions <b>getProperties</b> and <b>setProperties</b> that may be used for serialization/deserialization.<br>
     * Therefore, a custom shape should extend those functions to be able to be serialized and deserialized.
     * @param options The options
     * @param options.name name of the node. It is often used for debugging purposes or to simplify queries
     * @param options.visible visibility of the node, A boolean to determine if the node should be rendered or not
     * @param options.selectable selectable node A boolean to determine if selection should consider this node
     * @param options.id id of the node , its a unique identifier
     * @param options.tag custom information associated with node. It is a user object which can be used by client code to store information or attach an application object to the shape
     * @param options.cssclass The css class name of this node
     * @param options.dynamicproperties object with every dynamic property set (if has any)
     */
    constructor(options?: object | { name?: string; visible?: boolean; selectable?: boolean; id?: string | number | any; tag?: object; cssclass?: string; dynamicproperties?: any; } );
    /**
     * All subclasses should override copyConstructor or provide custom implementation for this method
     */
    clone(): Node;
    /**
     * Copy constructor function.<br>
     * Function used as part of the cloning mechanism.<br>
     * Implementations should copy the given instance state to this instance.<br>
     * @param src Source to copy from
     * @param deepCopy deep copy
     */
    protected copyConstructor(src: Node, deepCopy?: boolean): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {name: string; visible: boolean; selectable: boolean; id: string | number | any; tag: object; cssclass: string; dynamicproperties: object} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.name name of the node
     * @param properties.visible visibility of the node
     * @param properties.selectable selectable node
     * @param properties.id id of the node
     * @param properties.tag custom information associated with node
     * @param properties.cssclass The css class name of this node
     * @param properties.dynamicproperties custom dynamic properties object
     */
    setProperties(properties?: object | { name?: string; visible?: boolean; selectable?: boolean; id?: string | number | any; tag?: object; cssclass?: string; dynamicproperties?: any; } ): this;
    /**
     * Returns a string representation of this object (generally the classname)
     */
    toString(): string;
    /**
     * Returns true if node can be picked/selected.
     */
    isSelectable(): boolean;
    /**
     * Allows to select node. If node is not selectable then child node is
     * not selectable.
     * @param selectable flag to allow node selection
     */
    setSelectable(selectable: boolean): this;
    /**
     * Returns the node name
     */
    getName(): string;
    /**
     * Sets name of the node
     * @param name The node name
     */
    setName(name: string): this;
    /**
     * Returns css class name to be used to apply CSS style
     */
    getCssClass(): string | any;
    /**
     * Sets css class name of the node to be used to apply CSS style
     * @param name css class name of the node
     */
    setCssClass(name: string): this;
    /**
     * Returns the object associated with the node by user.
     */
    getTag(): any;
    /**
     * Allows the user to associate any arbitrary object with the node.
     * @param tag The object to be associated with the node.
     */
    setTag(tag: any): this;
    /**
     * Returns the associated identifier of the node
     */
    getId(): number | string | any;
    /**
     * Allows the user to associate any identifier
     * @param id object id
     */
    setId(id: number | string | any): this;
    /**
     * This method is called when parent changes. Do not call it directly.
     * @param node node to change parent
     */
    protected onParentChanged(node: Node): this;
    /**
     * Return visibility of the node
     */
    getVisible(): boolean;
    /**
     * Sets visibility of the node.
     * Send event {@link @int/geotoolkit/scene/Node.Events.VisibilityChanged}
     * @param value flag specifying visibility of the node
     */
    setVisible(value: boolean): this;
    /**
     * Return parent node
     */
    getParent(): Node | any;
    /**
     * <code>getWorldTransform</code> retrieves the local transformation
     * of the inner node coordinates to parent coordinates.
     */
    getWorldTransform(): Transformation | any;
    /**
     * Returns transformation from node to root scene
     */
    getSceneTransform(): Transformation | any;
    /**
     * Update state. This methods reset node state and update state for children. this method is useful to
     * refresh a scene graph
     * @param regions optional array to return invalid rectangles in the parent coordinates
     * @param changes optional parameter to specify a reason of changes
     */
    updateState(regions?: Rect[], changes?: StateChanges): this;
    /**
     * Update scene transformation
     */
    updateSceneTransformation(): this;
    /**
     * Returns root node. <br>
     * If node doesn't have parent then it returns itself.
     */
    getRoot(): Node;
    /**
     * Invalidate area of the shape.  This method invalidates parent by default. invalidated from parent to root node.
     * @param bounds bounds of the invalid rectangle in the inner node coordinates
     * @param force true if parent should be invalidated immediately
     * if null is provided then cache (if any will be completely refreshed) otherwise only specified rect or node.bounds will be refreshed
     */
    invalidate(bounds?: Rect | any, force?: boolean): this;
    /**
     * set notification state
     * @param notify flag set to invalidate parent or not
     * @param force true if parent should be invalidated immediately
     */
    setNotification(notify: boolean, force?: boolean): this;
    /**
     * return state of notification
     */
    isNotificationEnabled(): boolean;
    /**
     * Invalidate parent and notify all listeners.
     * @param bounds bounds of the invalid rectangle in the inner node coordinates
     * @param force force rendering
     */
    protected invalidateParent(bounds?: Rect | any, force?: boolean): this;
    /**
     * Add invalidate handler
     * @param handler handler to be notified about invalidation
     */
    addInvalidateHandler(handler: Function): this;
    /**
     * Remove invalidate handler
     * @param handler handler to be notified about invalidation
     */
    removeInvalidateHandler(handler: Function): this;
    /**
     * Check if this node is within the area being rendered by the context
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Renders node
     * @param context The rendering context to be used to draw the node
     */
    render(context: RenderingContext): void;
    /**
     * Render node in asynchronous mode. Default implementation creates call method "render" inside
     * @param context The rendering context to be used to draw the node
     * @param callback callback function
     */
    renderAsync(context: RenderingContext, callback: Function): void;
    /**
     * Executes delegate and return the result.It allows us to keep all initialization calls in one place, <br>
     * and we do not need to scroll up or down in IDE to find how and where it was initialized.
     * @example
     * ```javascript
     * // All setters (.setName() for example) returns reference to the this.
     * // In order to modify inner object like LineStyle or Pattern, to get this object (property) we should call getter to get object reference.
     * // Then modify it as shown below in Option 1 or you can use execute methods shown in Option 2.
     * import {Group} from '@int/geotoolkit/scene/Group';
     * import {Rect} from '@int/geotoolkit/util/Rect';
     * // Option 1
     * const group = new Group()
     *      .setName('MyGroup')
     *      .setBounds(new Rect(0, 0, 42, 16))
     *      .enableClipping(true)
     *      .setTag({'type': 'sometype'});
     * group.getLineStyle().setPattern('pattern');
     * return group;
     * // Options 2 ( using execute method )
     * return group
     *  .execute(function () {
     *     this.getLineStyle()
     *        .setPattern("pattern");
     *   });
     * ```
     * @param delegate Function to execute
     */
    execute(delegate: Function): any;
    /**
     * Enable event propagation from the node hierarchy from bottom to top
     * <p>
     * This option is similar to DOM Event bubbling, which allows
     * to get any event from child node. By default it is disabled
     * for better performance.
     * </p>
     * @example
     * ```javascript
     * import {Group} from '@int/geotoolkit/scene/Group';
     * import {Events as SceneEvents} from '@int/geotoolkit/scene/Node';
     * const parentGroup = new Group()
     *      .setName('ParentGroup')
     *      .enableEventPropagation(true);
     * const childGroup = new Group()
     *      .setName('ChildGroup');
     * parentGroup.addChild(childGroup);
     * parentGroup.on(SceneEvents.Invalidate, (eventName, sender, args) => {
     *    // Got notifications from all children of parent group
     * });
     * childGroup.invalidate();
     * ```
     * @param enable enable
     */
    enableEventPropagation(enable: boolean): this;
    /**
     * Return true if event propagation is enabled from child to parent
     */
    isEventPropagationEnabled(): boolean;
    /**
     * @param event type of event
     * @param source source who called the event
     * @param args event arguments
     */
    protected notify(event: string, source: Node, args?: any): this;
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     */
    dispose(): void;
    /**
     * Connects style.<br>
     * <br>
     * This convenience method subscribes a listener to given style for the specified type.<br>
     * And automatically un-subscribes listener if node is disposed to prevent memory leaks
     * @param style connect style
     * @param type type of event or property
     * @param callback function to be called
     */
    protected connectStyle(style: EventDispatcher, type: string, callback: Function): this;
    /**
     * Disconnect style<br>
     * <br>
     * This convenience method un-subscribes a listener to given style for the specified type.<br>
     * @param style connect style
     * @param type type of event or property
     * @param callback function to be called
     */
    protected disconnectStyle(style: EventDispatcher, type: string, callback: Function): this;
    /**
     * Gets dynamic property by name. These properties can be
     * used as a property bags
     * @param name property name
     */
    getProperty(name: string): any;
    /**
     * Sets dynamic property by name
     * @param name property name
     * @param value property value
     */
    setProperty(name: string, value: any): this;
    /**
     * Enable / disable all notifications
     * @param enabled sets if this object sends notifications
     */
    static enableSceneGraphNotification(enabled: boolean): void;
    /**
     * Return status of the global notification for all nodes.
     */
    static isSceneGraphNotificationEnabled(): boolean;
    /**
     * Gets list of css class names which applied to this node
     */
    getCssClasses(): string[] | any;
    /**
     * Check if node has specified css class
     * @param cssClass css class name
     */
    hasCssClass(cssClass: string): boolean;
    /**
     * Adds new css class to node
     * @param cssclass css class name('s)
     */
    addCssClass(cssclass: string[] | string): this;
    /**
     * Removes css class from node
     * @param cssclass css class name('s)
     */
    removeCssClass(cssclass: string[] | string): this;
    /**
     * This method is called if visibility is changed.  Send event {@link @int/geotoolkit/scene/Node.Events.VisibilityChanged}
     */
    protected onVisibilityChanged(): void;
    /**
     * Find root of the node with specified type
     * @param node node to start search
     * @param classType type of the class to search for or short interface name
     */
    static findParent(node: Node, classType: Function | string): Node | any;
}
/**
 * Node Events enumerator
 */
export enum Events {
    /**
     * Event type fired when a shape is modified and requires a render cycle to be done
     */
    Invalidate = 'Invalidate',
    /**
     * Event type fired when a shape is added as a child to another shape
     */
    ChildAdded = 'ChildAdded',
    /**
     * Event type fired when a shape is removed from another shape children.
     */
    ChildRemoved = 'ChildRemoved',
    /**
     * Event type fired when a shape's modellimits have been changed. For example using setModelLimits()
     */
    ModelLimitsChanged = 'ModelLimitsChanged',
    /**
     * Event type fired when the visible limits have changed
     */
    VisibleLimitsChanged = 'VisibleLimitsChanged',
    /**
     * Event type fired when a node's SceneTransformation has been changed.
     */
    SceneTransformationChanged = 'SceneTransformationChanged',
    /**
     * Event type fired when a node's LocalTransformation has been changed.
     */
    LocalTransformationChanged = 'LocalTransformationChanged',
    /**
     * Event type fired when a node's order has been changed.
     */
    NodeOrderChanged = 'NodeOrderChanged',
    /**
     * Changed
     */
    Changed = 'Changed',
    /**
     * Bounds is changed
     */
    BoundsChanged = 'BoundsChanged',
    /**
     * Orientation is changed
     */
    OrientationChanged = 'OrientationChanged',
    /**
     * Visibility is changed
     */
    VisibilityChanged = 'VisibilityChanged',
    /**
     * Css class is changed
     */
    CssClassChanged = 'CssClassChanged',
    /**
     * Node tree structure changed (children added/removed/order changed)
     */
    NodeTreeChanged = 'NodeTreeChanged'
}
/**
 * Type of state changes
 */
export enum StateChanges {
    /**
     * Window pixel scale is changed
     */
    PixelScaleChanged = 'PixelScaleChanged',
    /**
     * Node is translated
     */
    Translated = 'Translated',
    /**
     * Required to rebuild tree
     */
    Rebuild = 'Rebuild',
    /**
     * Parent state changed
     */
    TransformationChanged = 'TransformationChanged',
    /**
     * UpdateLayout
     */
    UpdateLayout = 'UpdateLayout',
    /**
     * Style Changed
     */
    StyleChanged = 'StyleChanged'
}
