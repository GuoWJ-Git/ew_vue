import {Object3D as Geotoolkit3dObject3D, Scene, Camera, WebGLRenderer} from '../THREE';
import {Event} from '../Event';
import {Plot} from '../Plot';

/**
 * Base class of Carnac3D objects.<br>
 * <br>
 * This class extends THREE.Object3D to expose some useful functions and add some new features.<br>
 * It is similar to a CarnacJS Group (has children and holds a transformation that applies to its children).<br>
 * <br>
 * To change the location/size/orientation of an Object3D, refer to THREEJS documentation
 */
export class Object3D extends Geotoolkit3dObject3D {
    /**
     * Base class of Carnac3D objects.<br>
     * <br>
     * This class extends THREE.Object3D to expose some useful functions and add some new features.<br>
     * It is similar to a CarnacJS Group (has children and holds a transformation that applies to its children).<br>
     * <br>
     * To change the location/size/orientation of an Object3D, refer to THREEJS documentation
     */
    constructor();
    /**
     * Visibility of Object3D
     */
    visible: boolean;
    /**
     * Returns the instance class name, see {@link @int/geotoolkit/base.setClassName}
     */
    getClassName(): string;
    /**
     * Notifies this object and its parent that this object has been invalidated.<br>
     * If this object is in a Plot, it will be marked as dirty and will trigger a rendering cycle.<br>
     * @param event The event to fire
     */
    invalidateObject(event?: Event): this;
    /**
     * This function is called prior to rendering and can update this object's content.<br>
     * <br>
     * It should not trigger any invalidateObject though.<br>
     * Note that it is not necessary nor recommended to explicitly call updateObject on this object's children as updateObject will be called on all nodes present in the scene.<br>
     * <br>
     * This will be executed before the transformations simplification.<br>
     * <br>
     * @param scene The scene
     * @param camera The camera
     */
    updateObject(scene: Scene, camera: Camera): this;
    /**
     * This function is called prior to rendering and can update this object's content.<br>
     * <br>
     * It should not trigger any invalidateObject though.<br>
     * Note that it is not necessary nor recommended to explicitly call beforeRender on this object's children as beforeRender will be called on all nodes present in the scene.<br>
     * <br>
     * This will be executed after the transformations simplification.<br>
     * <br>
     * @param scene The scene
     * @param camera The camera used for this render phase.
     * @param plot The 3D plot
     * @param renderer The renderer
     */
    beforeRender(scene: Scene, camera: Camera, plot: Plot, renderer: WebGLRenderer): this;
    /**
     * This function is called after rendering and can update this object's content.<br>
     * <br>
     * It should not trigger any invalidateObject though.<br>
     * Note that it is not necessary nor recommended to explicitly call afterRender on this object's children as beforeRender will be called on all nodes present in the scene.<br>
     * <br>
     * This will be executed after the transformations simplification.<br>
     * <br>
     * @param scene The scene
     * @param camera The camera used for this render phase.
     * @param plot The 3D plot
     * @param renderer The renderer
     */
    afterRender(scene: Scene, camera: Camera, plot: Plot, renderer: WebGLRenderer): this;
    /**
     * Adds object as child of this object.
     * @param object object
     */
    add(object: Geotoolkit3dObject3D | Geotoolkit3dObject3D[]): this;
    /**
     * Removes object as child of this object.
     * @param object object
     */
    remove(object: Geotoolkit3dObject3D | Geotoolkit3dObject3D[]): this;
    /**
     * Register object for special processing through a callback function<br>
     * @example
     * ```javascript
     * geotoolkit3d.util.ObjectProcessor.getDefaultInstance().registerObject(this.getClassName(), callback);
     * ```
     */
    static register(): void;
    /**
     * Dispose object
     */
    dispose(): void;
    /**
     * Returns whether this object has been disposed
     */
    isDisposed(): boolean;
    /**
     * Set options
     * @param options options object
     * @param options.visible true to make object visible
     */
    setOptions(options?: object | { visible?: boolean; } ): this;
    /**
     * Get options
     */
    getOptions(): object | any;
    /**
     * Set visible
     * @param visible true, if object is visible
     */
    setVisible(visible: boolean): this;
    /**
     * Get visible
     */
    getVisible(): boolean;
    /**
     * Return if this object can be picked/selected (see RendererPicking).<br>
     */
    isSelectable(): boolean;
    /**
     * Set if this object can be picked/selected (see RendererPicking).<br>
     * @param selectable if can be selected
     */
    setSelectable(selectable: boolean): void;
}
