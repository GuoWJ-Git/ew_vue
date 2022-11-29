import {ColorProvider, KnownScales} from './ColorProvider';
import {RgbaColor} from './RgbaColor';

/**
 * This class is the default implementation of a colorprovider.<br>
 * <br>
 * It uses a map of sorted values and colors.<br>
 * When retrieving the Color for a specified value, if the value is not found in the collection it gets the minimum and maximum value relative to the specified value.<br>
 * Then it gets the colors corresponding to these values, interpolates the colors and returns the color according to the relative position of the value between the minimum and maximum values.<br>
 * @example
 * ```javascript
 * // 1). Default Color Provider allows for linear gradient with stops
 * const colorprovider = new DefaultColorProvider({
 *    'values' : [  -2  ,   -1  ,     0   ,   1  ,     2    ],
 *    'colors' : ['orange', 'yellow', 'blue', 'green', 'gray']
 * });
 * // 2). To use 'JET' colormap like in MATLAB you can use the following code to create color provider for specified min and max values.
 *  const min = -100, max = 100;
 *  const colors = ['#00007F','#0000FF','#007FFF','#00FFFF','#7FFF7F','#FFFF00','#FF7F00','#FF0000','#7F0000'];
 *  const values = [];
 *  const delta = (max-min) / (colors.length-1);
 *  for (let i = 0; i < colors.length; ++i) {
 *      values.push(min + i * delta);
 *  }
 *  const colorprovider = new DefaultColorProvider({
 *      'values': values,
 *      'colors': colors
 *  });
 * ```
 */
export class DefaultColorProvider extends ColorProvider {
    /**
     * This class is the default implementation of a colorprovider.<br>
     * <br>
     * It uses a map of sorted values and colors.<br>
     * When retrieving the Color for a specified value, if the value is not found in the collection it gets the minimum and maximum value relative to the specified value.<br>
     * Then it gets the colors corresponding to these values, interpolates the colors and returns the color according to the relative position of the value between the minimum and maximum values.<br>
     * @param values The values or a json
     * @param values.values The values
     * @param values.colors The colors
     * @param values.reversed boolean to define the sorting direction
     * @param values.scale A predefined set of colors
     * @param values.min Start value for the scale
     * @param values.max End value for the scale
     * @param colors The colors
     */
    constructor(values?: number[] | object | { values?: number[]; colors?: (string | RgbaColor)[]; reversed?: boolean; scale?: KnownScales; min?: number; max?: number; } , colors?: RgbaColor[]);
    /**
     * Add color to the collection
     * Compatibility: old JSON format {'value': 0, 'red': 255, 'green': 255, 'blue': 255, 'alpha': 1} is supported,
     * but new parameter list is recommended
     * @param value index of this color on the colorbar
     * @param color CSS color string or RgbaColor object
     */
    addColor(value: number, color: string | RgbaColor): this;
    /**
     * Replace all colors in the collection by this set
     * @param values new values or properties object
     * @param values.values new values
     * @param values.colors new colors
     * @param colors new colors
     */
    setColors(values: number[] | object | { values?: number[]; colors?: (string | RgbaColor)[]; } , colors?: (string | RgbaColor)[]): this;
    /**
     * Replace all colors in the collection by this scale
     * @param scale Scale to use
     * @param start Start value to use
     * @param end End value to use
     */
    setScale(scale: KnownScales, start?: number, end?: number): this;
    /**
     */
    getScale(): KnownScales;
    /**
     * Remove color from the collection
     * @param value value to remove color
     */
    removeColor(value: number): this;
    /**
     * Returns minimum value set in the collection
     */
    getMinValue(): number;
    /**
     * Returns the maximum value set in this collection
     */
    getMaxValue(): number;
    /**
     * Always return a reference to sorted array of values.
     * Don't change this array.
     */
    getValues(): number[];
    /**
     */
    getColors(): RgbaColor[];
    /**
     * reverse the axis
     */
    reverse(): this;
    /**
     * return true if the min / max is reversed
     */
    isReversed(): boolean;
    /**
     * set the min/max of the color provider, interpolating all values on the way.
     * @param start Start value to use
     * @param end End value to use
     */
    scaleTo(start: number, end: number): this;
    /**
     */
    getStopPoints(): object[];
    /**
     * get Properties
     */
    getProperties(): {values: number[]; colors: string[]; scale: KnownScales; min: number; max: number; reversed: boolean} | any;
    /**
     * set Properties
     * @param properties Json object with properties
     * @param properties.values new values
     * @param properties.colors new colors
     * @param properties.scale color scale for provider to use
     * @param properties.min min value to use
     * @param properties.max max value to use
     * @param properties.reversed reversed flag
     */
    setProperties(properties: object | { values?: number[]; colors?: (string | RgbaColor)[]; scale?: KnownScales; min?: number; max?: number; reversed?: boolean; } ): this;
    /**
     * Invalidate Default ColorProvider and notify visuals for update
     */
    invalidate(): this;
    /**
     * Enable / disable notification
     * @param enable enable or disable notifications
     * @param force true if parent should be invalidated immediately
     */
    setNotification(enable: boolean, force?: boolean): this;
    /**
     * Return state of notification
     */
    isNotificationEnabled(): boolean;
    /**
     * Returns the minimum data value set in this collection
     */
    protected getDataMinValue(): number;
    /**
     * Returns the maximum data value set in this collection
     */
    protected getDataMaxValue(): number;
    /**
     * Returns colors and values to be serialized
     */
    protected getColorsProperties(): {colors: string[]; values: number[]} | object;
    /**
     * Create or get DefaultColorProvider from an object
     * @param object to get provider from
     */
    static fromObject(object: any): DefaultColorProvider;
}
/**
 * Style Events enumerator
 */
export type Events = any;

