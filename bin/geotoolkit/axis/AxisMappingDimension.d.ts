import {AxisDimension} from './AxisDimension';
import {Transformation} from '../util/Transformation';

/**
 * Define axis model dimension. This is experimental api
 */
export class AxisMappingDimension extends AxisDimension {
    /**
     * Define axis model dimension. This is experimental api
     * @param options The options
     * @param options.name name of the dimension
     * @param options.minspan desired minimum distance between ticks in pixels
     * @param options.desiredmodelstep desired model step
     * @param options.preciselimits enable keeping the precise limits and calculate only step
     * @param options.spacing desired model spacing
     * @param options.logarithmic true for logarithmic axis
     */
    constructor(options?: object | { name?: string; minspan?: number; desiredmodelstep?: number; preciselimits?: boolean; spacing?: number; logarithmic?: boolean; } );
    /**
     * Return desired model spacing
     */
    getSpacing(): number;
    /**
     * Return mode to support precise limits
     */
    getPreciseLimits(): boolean;
    /**
     * Return origin value
     */
    getOrigin(): number;
    /**
     * Sets mode for precise limits support for neat limits.
     * This mode works only with neat limits mode
     * @param enable enable keeping the precise limits and calculate only step
     */
    setPreciseLimits(enable: boolean): this;
    /**
     * Gets logarithmic mode
     */
    getLogarithmic(): boolean;
    /**
     * Sets logarithmic mode.
     * @param enable enable logarithmic mode
     */
    setLogarithmic(enable: boolean): this;
    /**
     * Get nice limits
     * @param min minimum value
     * @param max maximum value
     * @param desiredModelStep desired model space between ticks
     */
    getNiceLimits(min: number, max: number, desiredModelStep: number): {min: number; max: number; spacing: number; count: number} | object;
    /**
     * Get nice limits by count
     * @param min minimum value
     * @param max maximum value
     * @param maxNumberOfTicks maximum number of ticks
     */
    getNiceLimitsByCount(min: number, max: number, maxNumberOfTicks: number): {min: number; max: number; spacing: number; count: number} | object;
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
