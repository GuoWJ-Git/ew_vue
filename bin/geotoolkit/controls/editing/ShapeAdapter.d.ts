import {EventDispatcher} from '../../util/EventDispatcher';
import {ShapeAdapterRegistry} from './ShapeAdapterRegistry';
import {Transformation} from '../../util/Transformation';
import {Node} from '../../scene/Node';
import {Handle} from './Handle';
import {Point} from '../../util/Point';

/**
 * Defines an abstract adapter to perform operation for shapes<br>
 * This is the parent class for shape adapters responsible of implementing editing capabilities for a shape.
 */
export class ShapeAdapter extends EventDispatcher {
    /**
     * Defines an abstract adapter to perform operation for shapes<br>
     * This is the parent class for shape adapters responsible of implementing editing capabilities for a shape.
     */
    constructor();
    /**
     * Get state of the adapter
     */
    isInitialized(): boolean;
    /**
     * Initialize
     */
    initialize(): boolean;
    /**
     * Sets registry
     * @param registry associated with current shape adapter
     */
    setRegistry(registry: ShapeAdapterRegistry): this;
    /**
     * Return transformation
     */
    getTransformation(): Transformation;
    /**
     * Update
     */
    update(): void;
    /**
     * Return manipulator layer
     */
    getManipulatorLayer(): any;
    /**
     * Sets shape to be modified
     * @param shape shape to be modified
     */
    setShape(shape: Node): this;
    /**
     * Shape
     */
    getShape(): Node;
    /**
     * Activate
     * @param active active state or not
     */
    setActive(active: boolean): this;
    /**
     * Returns active state of this handle
     */
    isActive(): boolean;
    /**
     * Sets active handle
     * @param handle active handle
     */
    setActiveHandle(handle: Handle): this;
    /**
     * Gets active handle
     */
    getActiveHandle(): any;
    /**
     * Sets position
     * @param x x coordinate
     * @param y y coordinate
     */
    setPosition(x?: number, y?: number): this;
    /**
     * Gets position
     */
    getPosition(): Point;
    /**
     * Move adapter and send event {geotoolkit.controls.editing.ShapeAdapter.Moved}
     * @param x x position
     * @param y y position
     */
    move(x: number, y: number): this;
    /**
     * Gets properties pertaining to this handle
     */
    getProperties(): object | any;
    /**
     * Sets properties pertaining to this object
     * @param props An object containing the properties to set
     */
    setProperties(props?: object): this;
    /**
     * OnMove
     * @param x x coordinate
     * @param y y coordinate
     */
    onMove(x: number, y: number): this;
    /**
     * Active state is changed
     * @param active active state or not
     */
    onActiveStateChanged(active: boolean): void;
    /**
     * OnInitialize
     */
    onInitialize(): boolean;
}
/**
 * ShapeAdapter Events enumerator
 */
export enum Events {
    /**
     * Shape adapter is moved
     */
    Moved = 'moved',
    /**
     * Adapter position is changed
     */
    PositionChanged = 'positionChanged',
    /**
     * Active state is changed
     */
    ActiveStateChanged = 'activeStateChanged'
}
