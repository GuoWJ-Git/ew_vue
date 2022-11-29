import {DefaultColorProvider} from './DefaultColorProvider';
import {RgbaColor} from './RgbaColor';
import {KnownScales} from './ColorProvider';

/**
 * Creates a representation of Log color provider
 * @example
 * ```javascript
 * //Log Color Provider emulates logarithmic behavior
 * const logCP = new DefaultLogColorProvider({
 *    'values' : [  1  ,    10  ,   100   ,  300 ,    1000  ],
 *    'colors' : ['orange', 'yellow', 'blue', 'green', 'gray']
 * });
 * ```
 */
export class DefaultLogColorProvider extends DefaultColorProvider {
    /**
     * Creates a representation of Log color provider
     * @param values list of values
     * @param values.colors list of colors
     * @param values.style Enum of display style
     * @param colors list of colors
     */
    constructor(values?: number[] | object | { colors?: RgbaColor[]; style?: DisplayStyle; } , colors?: RgbaColor[]);
    /**
     * Replace all colors in the collection by this set
     * @param values new values
     * @param colors new colors
     */
    setColors(values: number[], colors: (string | RgbaColor)[]): this;
    /**
     * Method used to set graphical representation of DefaultLogColorProvider in a fillStyle
     * @param style display style
     */
    setDisplayStyle(style: DisplayStyle): this;
    /**
     */
    getDisplayStyle(): DisplayStyle;
    /**
     */
    getStopPoints(): object[];
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
     * get Properties
     */
    getProperties(): {style: DisplayStyle} | any;
    /**
     * set Properties of the object
     * @param properties Json with properties to set
     * @param properties.style Enum of display style
     */
    setProperties(properties: object | { style?: DisplayStyle; } ): this;
    /**
     * Returns colors and values to be serialized
     */
    protected getColorsProperties(): {colors: string[]; values: number[]} | object;
    /**
     * Create or get DefaultLogColorProvider from an object
     * @param object to get provider from
     */
    static fromObject(object: any): DefaultLogColorProvider;
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
