import {DiscreteGradientColorProvider} from './DiscreteGradientColorProvider';
import {RgbaColor} from './RgbaColor';
import {KnownScales} from './ColorProvider';

/**
 * Creates a representation of Log color provider
 * @example
 * ```javascript
 * // Log Color Provider emulates logarithmic behavior
 * const logCP = new LogColorProvider({
 *    'values' : [  1  ,    10  ,   100   ,  300 ,    1000  ],
 *    'colors' : ['orange', 'yellow', 'blue', 'green', 'gray'],
 *    'bins': 16
 * });
 * ```
 */
export class LogColorProvider extends DiscreteGradientColorProvider {
    /**
     * Creates a representation of Log color provider
     * @param values list of values
     * @param values.bins number of bins
     * @param values.colors list of colors
     * @param values.style display style
     * @param colors list of colors
     * @param bins number of bins
     */
    constructor(values?: number[] | object | { bins?: number; colors?: RgbaColor[]; style?: DisplayStyle; } , colors?: RgbaColor[], bins?: number);
    /**
     * Replace all colors in the collection by this set
     * @param values new values
     * @param colors new colors
     */
    setColors(values: number[], colors: (string | RgbaColor)[]): this;
    /**
     * Method used to set graphical representation of LogColorProvider in a fillStyle
     * @param style display style
     */
    setDisplayStyle(style: DisplayStyle): this;
    /**
     */
    getDisplayStyle(): DisplayStyle;
    /**
     * Replace all colors in the collection by this scale
     * @param scale Scale to Use
     * @param min Minimum to Use
     * @param max Maximum to Use
     * @param logValue apply scale for logarithm of values
     */
    setScale(scale: KnownScales, min: number, max: number, logValue?: boolean): this;
    /**
     * set the min/max of the color provider, interpolating all values on the way.
     * @param start Start value to use
     * @param end End value to use
     * @param logValue apply scale for logarithm of values
     */
    scaleTo(start: number, end: number, logValue?: boolean): this;
    /**
     * convert value v to logarithmic t
     * @param v value
     */
    valToLog(v: number): number;
    /**
     * convert logarithmic t to value v
     * @param t logarithmic value
     */
    logToVal(t: number): number;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {style: DisplayStyle} | any;
    /**
     * set Properties of the object
     * @param properties properties
     * @param properties.style Enum of display style
     */
    setProperties(properties: object | { style?: DisplayStyle; } ): this;
    /**
     * Returns colors and values to be serialized
     */
    protected getColorsProperties(): {colors: string[]; values: number[]} | object;
    /**
     * Create or get LogColorProvider from an object
     * @param object object to create from
     */
    static fromObject(object: any): LogColorProvider;
}
/**
 * Enum of display style
 */
export enum DisplayStyle {
    /**
     * linear
     */
    Linear = 'linear',
    /**
     * logarithmic
     */
    Logarithmic = 'logarithmic'
}
