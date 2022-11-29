import {AxisMappingDimension} from './AxisMappingDimension';

/**
 * Define axis model dimension. This is experimental api
 * @deprecated since 3.4, use geotoolkit.axis.AxisMappingDimension instead
 */
export class AxisLinearDimension extends AxisMappingDimension {
    /**
     * Define axis model dimension. This is experimental api
     * @param options The options
     * @param options.name name of the dimension
     * @param options.minspan desired minimum distance between ticks in pixels
     * @param options.desiredmodelstep desired model step
     * @param options.preciselimits enable keeping the precise limits and calculate only step
     */
    constructor(options?: object | { name?: string; minspan?: number; desiredmodelstep?: number; preciselimits?: boolean; } );
}
