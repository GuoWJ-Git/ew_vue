import {ColorProvider, KnownColors} from '../../util/ColorProvider';
import {RgbaColor} from '../../util/RgbaColor';
import {FillStyle} from '../../attributes/FillStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {Status} from '../data/Trace';

/**
 * Define a colormap which represents a range of color values which can be mapped to samples based on density.<br>
 * It has reserved values for positive and negative fill color. The toolkit also has several default colormaps available, <br>
 * please refer to  {@link @int/geotoolkit/seismic/util/SeismicColors.SeismicColors} getDefault()
 */
export class ColorMap extends ColorProvider {
    /**
     * Define a colormap which represents a range of color values which can be mapped to samples based on density.<br>
     * It has reserved values for positive and negative fill color. The toolkit also has several default colormaps available, <br>
     * please refer to  {@link @int/geotoolkit/seismic/util/SeismicColors.SeismicColors} getDefault()
     * @param options options object
     * @param options.name color map name
     * @param options.tracecolor deprecated since 3.4 (use options.tracelinestyle instead) trace color
     * @param options.positivefillstyle positive fill style
     * @param options.negativefillstyle positive fill style
     * @param options.positivefillcolor deprecated since 3.4 (use options.positivefillstyle instead) positive fill color
     * @param options.negativefillcolor deprecated since 3.4 (use options.negativefillstyle instead) negative fill color
     * @param options.colors an array of colors
     * @param options.tracelinestyle trace line style
     * @param name color map name
     */
    constructor(options?: object | { name?: string; tracecolor?: any | string | RgbaColor; positivefillstyle?: any | string | FillStyle; negativefillstyle?: any | string | FillStyle; positivefillcolor?: any | string | RgbaColor; negativefillcolor?: any | string | RgbaColor; colors?: RgbaColor[]; tracelinestyle?: object | string | LineStyle; } , name?: string);
    /**
     * Return color for the current value
     * @param value the specified color
     */
    getColor(value: number): RgbaColor;
    /**
     * Return list of used Stop Points
     */
    getStopPoints(): any[];
    /**
     * Return min
     */
    getMinValue(): number;
    /**
     * Return max
     */
    getMaxValue(): number;
    /**
     * Set min and max value
     * @param min min value in the range of colors
     * @param max max value in the range of colors
     */
    setRange(min: number, max: number): this;
    /**
     * Copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: ColorMap): this;
    /**
     * Return clone of the color map
     */
    clone(): ColorMap;
    /**
     * Set color value
     * @example
     * ```javascript
     * import {KnownColors} from '@int/geotoolkit/util/ColorProvider';
     * colorProvider.setNamedColor(KnownColors.NaN, { // set color for NaN sample values
     *   'title': 'absent', // title to use when displaying, e.g. by ColorBar shape
     *   'enabled': true, // enable state (default is not false)
     *   'value': 'gray' // color to use for NaNs sample values
     * });
     * ```
     * @example
     * ```javascript
     * // use semitransparent 'red' color for NaN sample values
     * colorProvider.setNamedColor(KnownColors.NaN, 'rgba(255, 0, 0, 0.5)');
     * ```
     * @param colorName color name
     * @param colorValue color or title/enabled/value settings object
     * only solid fill styles are accepted, no pattern, shadow or gradient fill style are allowed
     */
    setNamedColor(colorName: string | KnownColors, colorValue: object | string | FillStyle): this;
    /**
     * Reverse color map
     */
    reverse(): this;
    /**
     * Set alpha value for all colors
     * @param alpha the alpha value of the color
     */
    setAlpha(alpha: number): this;
    /**
     * Return name
     */
    getName(): string;
    /**
     * Set name
     * @param name the name of the colormap
     */
    setName(name: string): this;
    /**
     * Return size
     */
    getSize(): number;
    /**
     * Set wiggle color
     * @deprecated since 3.4, use setTraceLineStyle instead
     * @param color the RGBA color
     */
    setTraceColor(color: object | RgbaColor | string): this;
    /**
     * Return trace color
     * @deprecated since 3.4, use getTraceLineStyle instead
     */
    getTraceColor(): RgbaColor;
    /**
     * Set trace line style to be used instead of trace color
     * @param style object can be in format of constructor geotoolkit.attributes.LineStyle
     */
    setTraceLineStyle(style: object | string | LineStyle): this;
    /**
     * Return trace line style to be used instead of trace color
     */
    getTraceLineStyle(): LineStyle;
    /**
     * Sets trace color for given status
     * @deprecated since 3.4, use setTraceStatusLineStyle instead
     * @param status trace status
     * @param color color
     */
    setTraceStatusColor(status: Status, color: RgbaColor): this;
    /**
     * Returns trace color for given status or object with all statuses
     * @deprecated since 3.4, use getTraceStatusLineStyle instead
     * @param status trace status
     */
    getTraceStatusColor(status?: Status): RgbaColor | object;
    /**
     * Sets trace line style for given status
     * @param status trace status
     * @param linestyle line style
     */
    setTraceStatusLineStyle(status: Status, linestyle: LineStyle): this;
    /**
     * Returns trace line style for given status or object with all statuses
     * @param status trace status
     */
    getTraceStatusLineStyle(status?: Status): LineStyle | object;
    /**
     * Set positive fill color
     * @deprecated since 3.4, use setPositiveFillStyle instead
     * @param color the RGBA color
     */
    setPositiveFillColor(color: string | any | RgbaColor): this;
    /**
     * Return positive fill color
     * @deprecated since 3.4, use getPositiveFillStyle instead
     */
    getPositiveFillColor(): RgbaColor;
    /**
     * Set positive fill style to be used instead of positive color
     * @param style object can be in format of constructor geotoolkit.attributes.FillStyle
     */
    setPositiveFillStyle(style: object | FillStyle | null): this;
    /**
     * Return positive fill style to be used instead of positive color
     */
    getPositiveFillStyle(): FillStyle;
    /**
     * Set negative fill color
     * @deprecated since 3.4, use setNegativeFillStyle instead
     * @param color the RGBA color
     */
    setNegativeFillColor(color: string | any | RgbaColor): this;
    /**
     * Return negative fill color
     * @deprecated since 3.4, use getNegativeFillStyle instead
     */
    getNegativeFillColor(): RgbaColor;
    /**
     * Set negative fill style to be used instead of negative fill color
     * @param style object can be in format of constructor geotoolkit.attributes.FillStyle
     */
    setNegativeFillStyle(style: object | FillStyle | null): this;
    /**
     * Return negative fill style to be used instead of negative fill style
     */
    getNegativeFillStyle(): FillStyle;
    /**
     * Return color array
     */
    getColors(): any[];
    /**
     * Sets colors
     * @param colors array of colors
     */
    setColors(colors: RgbaColor[]): this;
    /**
     * internal use only
     * @param alpha number from 0 to 1
     * @param rgbaColor array of colors
     */
    compile(alpha?: number, rgbaColor?: RgbaColor | null): number[] | number;
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
     * Returns properties
     */
    getProperties(): {name: string; tracelinestyle: LineStyle; positivefillstyle: FillStyle; negativefillstyle: FillStyle; colors: RgbaColor[]} | any;
    /**
     * Sets properties
     * @param properties Json object with properties
     * @param properties.name colormap name
     * @param properties.tracecolor deprecated since 3.4 (use properties.tracelinestyle instead) trace color
     * @param properties.tracelinestyle trace line style
     * @param properties.positivefillstyle positive fill style
     * @param properties.negativefillstyle positive fill style
     * @param properties.positivefillcolor deprecated since 3.4 (use properties.positivefillstyle instead) positive fill color
     * @param properties.negativefillcolor deprecated since 3.4 (use properties.negativefillstyle instead) negative fill color
     * @param properties.colors an array of colors
     */
    setProperties(properties?: object | { name?: string; tracecolor?: any | string | RgbaColor; tracelinestyle?: object | string | LineStyle; positivefillstyle?: any | string | FillStyle; negativefillstyle?: any | string | FillStyle; positivefillcolor?: any | string | RgbaColor; negativefillcolor?: any | string | RgbaColor; colors?: RgbaColor[]; } ): this;
}
