import {DefaultColorProvider} from './DefaultColorProvider';
import {RgbaColor} from './RgbaColor';
import {KnownScales} from './ColorProvider';

/**
 * This class implements a colorprovider that use discretization to emulate a gradient.<br>
 * It's main purpose is to simplify a gradient by reducing the amount of possible colors (mostly for performance reasons).<br>
 * <br>
 * The discretization process can be controlled through the given 'bins' parameter that defines how many discrete colors will be used.<br>
 * @example
 * ```javascript
 * // Discrete Gradient Color Provider allows for limited number of bins
 * const discreteCP = new DiscreteGradientColorProvider({
 *    'values' : [  -2  ,   -1  ,     0   ,   1  ,     2    ],
 *    'colors' : ['orange', 'yellow', 'blue', 'green', 'gray']
 *    'bins': 16
 * });
 * ```
 */
export class DiscreteGradientColorProvider extends DefaultColorProvider {
    /**
     * This class implements a colorprovider that use discretization to emulate a gradient.<br>
     * It's main purpose is to simplify a gradient by reducing the amount of possible colors (mostly for performance reasons).<br>
     * <br>
     * The discretization process can be controlled through the given 'bins' parameter that defines how many discrete colors will be used.<br>
     * @param values list of values
     * @param values.bins number of bins
     * @param values.colors list of colors
     * @param colors list of colors
     * @param bins number of bins
     */
    constructor(values?: number[] | object | { bins?: number; colors?: RgbaColor[]; } , colors?: RgbaColor[], bins?: number);
    /**
     * Sets how many colors can be provided
     * @param colorNumber number of colors that can be provided
     */
    setColorNumber(colorNumber: number): this;
    /**
     * Returns how many colors can be provided
     */
    getColorNumber(): number;
    /**
     */
    getStopPoints(): object[];
    /**
     * @param values new values
     * @param colors new colors
     */
    setColors(values: number[], colors: (string | RgbaColor)[]): this;
    /**
     * Replace all colors in the collection by this scale
     * @param scale Scale to use
     * @param min Minimum to use
     * @param max Maximum to use
     */
    setScale(scale: KnownScales, min: number, max: number): this;
    /**
     * reverse the axis
     */
    reverse(): this;
    /**
     * get Properties
     */
    getProperties(): {bins: number} | any;
    /**
     * set Properties of the object
     * @param properties color provider properties
     * @param properties.bins number of bins.
     */
    setProperties(properties: object | { bins?: number; } ): this;
    /**
     * Create or get DiscreteGradientColorProvider from an object
     * @param object gradient provider properties or instance
     */
    static fromObject(object: DiscreteGradientColorProvider | object): DiscreteGradientColorProvider;
}
