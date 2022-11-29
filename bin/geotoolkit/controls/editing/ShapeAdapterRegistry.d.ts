import {EventDispatcher} from '../../util/EventDispatcher';
import {Plot} from '../../plot/Plot';
import {CompositeNode} from '../../scene/CompositeNode';
import {ShapeAdapter} from './ShapeAdapter';
import {Transformation} from '../../util/Transformation';

/**
 * Defines a registry of shape adapters to edit shapes
 */
export class ShapeAdapterRegistry extends EventDispatcher {
    /**
     * Defines a registry of shape adapters to edit shapes
     * @param plot plot which renders node
     * @param manipulatorLayer layer to put temporary shapes in
     */
    constructor(plot: Plot, manipulatorLayer: CompositeNode);
    /**
     * Update plot
     */
    update(): void;
    /**
     * Return manipulator layer
     */
    getManipulatorLayer(): CompositeNode;
    /**
     * Register shape adapter
     * @param classType class name of shape
     * @param shapeAdapter instance of shape adapter
     */
    register(classType: string, shapeAdapter: ShapeAdapter): this;
    /**
     * Return adapter for the specified shape
     * @param shape current shape
     */
    getAdapter(shape: any | string): any | null;
    /**
     * Gets a list of all shape classes, previously registered using register method
     */
    getRegisteredClasses(): string[];
    /**
     * Sets transformation
     * @param transformation transformation
     */
    setTransformation(transformation: Transformation): this;
    /**
     * Gets transformation
     */
    getTransformation(): Transformation;
    /**
     * Sets active adapter and send events
     * @param adapter instance of shape adapter
     */
    setActiveAdapter(adapter?: ShapeAdapter): this;
    /**
     * Return adapter
     */
    getActiveAdapter(): ShapeAdapter;
}
/**
 * ShapeAdapterRegistry's Events enumerator
 */
export enum Events {
    /**
     * Event type fired when an adapter is deactivated
     */
    Deactivated = 'deactivated',
    /**
     * Event type fired when an adapter is activated
     */
    Activated = 'activated'
}
