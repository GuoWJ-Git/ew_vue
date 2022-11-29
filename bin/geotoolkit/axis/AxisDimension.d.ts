import {EventDispatcher} from '../util/EventDispatcher';
import {Orientation} from '../util/Orientation';
import {Transformation} from '../util/Transformation';

/**
 * Define axis model dimension. This is experimental api
 */
export class AxisDimension extends EventDispatcher {
    /**
     * Define axis model dimension. This is experimental api
     * @param options The options
     * @param options.name name of the dimension
     * @param options.orientation axis orientation
     * @param options.min minimum value
     * @param options.max maximum value
     */
    constructor(options?: object | { name?: string; orientation?: Orientation; min?: number; max?: number; } );
    /**
     * Sets axis orientation
     * @param orientation axis orientation
     */
    setOrientation(orientation: Orientation): this;
    /**
     * Gets axis orientation
     */
    getOrientation(): Orientation;
    /**
     * Return minimum value
     */
    getMin(): number;
    /**
     * Sets options
     * @param options data
     */
    setOptions(options: any): this;
    /**
     * Enable / disable neat limits
     * @param enable enable or disable neat limits
     */
    setNeatLimits(enable: boolean): this;
    /**
     * Returns true if neat limits is enabled.
     */
    getNeatLimits(): boolean;
    /**
     * Return options
     */
    getOptions(): any;
    /**
     * Return maximum value
     */
    getMax(): number;
    /**
     * Return origin value
     */
    getOrigin(): number;
    /**
     * Update limits
     * @param min minimum value
     * @param max maximum value
     * @param options from model range to device or addition properties
     * @param options.transformation transformation from model range to device
     * @param options.size axis size in device
     * @param options.span optional device span between ticks
     */
    updateLimits(min: number, max: number, options?: Transformation | object | { transformation?: number; size?: number; span?: number; } ): void;
}
/**
 * Dimension Events enumerator
 */
export enum Events {
    /**
     * Changed
     */
    Changed = 'Changed'
}
