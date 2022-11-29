import {DiscreteGradientColorProvider} from '../../util/DiscreteGradientColorProvider';

/**
 * Define a colormap
 */
export class ColorMap extends DiscreteGradientColorProvider {
    /**
     * Define a colormap
     * @param bins The number of bins or options object
     * @param bins.name The scale name.
     * @param bins.minvalue The min value to use.
     * @param bins.maxvalue The max value to use.
     * @param name The scale name.
     * @param minValue The min value to use.
     * @param maxValue The max value to use.
     */
    constructor(bins?: number | object | { name?: string; minvalue?: number; maxvalue?: number; } , name?: string, minValue?: number, maxValue?: number);
    /**
     * set Properties of the object
     * @param properties color provider properties
     * @param properties.name The scale name.
     * @param properties.minvalue The min value to use.
     * @param properties.maxvalue The max value to use.
     */
    setProperties(properties: object | { name?: string; minvalue?: number; maxvalue?: number; } ): this;
    /**
     * get properties of the object
     */
    getProperties(): {name: string; minValue: number; maxValue: number} | any;
}
