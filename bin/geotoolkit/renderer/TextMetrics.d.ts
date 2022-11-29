import {Rect} from '../util/Rect';
import {TextStyle} from '../attributes/TextStyle';

/**
 * Defines text metrics
 */
export class TextMetrics {
    /**
     * Defines text metrics
     * @param width width or properties object
     * @param width.width set the width
     * @param width.height set the height
     * @param width.fontmetrics font metrics
     * @param height height
     * @param fontMetrics font metrics
     */
    constructor(width: number | object | { width?: number; height?: number; fontmetrics?: any; } , height: number, fontMetrics?: any);
    /**
     * setMetrics
     * @param width width
     * @param height height
     * @param fontMetrics font metrics
     */
    setMetrics(width: number, height: number, fontMetrics?: any): this;
    /**
     * Return font metrics
     */
    getFontMetrics(): {ascent: number; descent: number; height: number} | object;
    /**
     * return width
     */
    getWidth(): number;
    /**
     * return height
     */
    getHeight(): number;
    /**
     * Return clone object.
     */
    clone(): TextMetrics;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {width: number; height: number; fontmetrics: any} | any;
    /**
     * Convert current instance TextMetrics to geotoolkit.util.Rect
     */
    toRect(): Rect;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.width set the width
     * @param properties.height set the height
     * @param properties.fontmetrics font metrics
     */
    setProperties(properties: object | { width?: number; height?: number; fontmetrics?: any; } ): this;
    /**
     * Parse font weight, size and family based on font string
     * follow w3 recommendation see {@link http://www.w3.org/TR/css3-fonts/}
     * if the font cannot be parsed it will return default font : 12px arial.
     * @param font current font for the text
     */
    static parseFont(font: string | TextStyle): {fontweight: string; fontsize: string; fontfamily: string; fontlineheight: string; fontstyle: string} | object;
    /**
     * Sets the maximum cache limit
     * @param val number of different font metrics that can be implemented
     */
    static setCacheLimit(val: number): void;
    /**
     * clears the current cache
     */
    static clearCache(): void;
    /**
     * Measure text size in device coordinates
     * @param text current text string
     * @param textStyle the text style
     * @param useFontMetrics flag to calculate font metrics
     */
    static measureText(text: string, textStyle?: TextStyle, useFontMetrics?: boolean): TextMetrics;
    /**
     * Sets the strategy to use when measuring text size
     * This function sets the 'MeasureText' function according ot the strategy
     * @param val strategy to measure text
     */
    static setMeasureTextStrategy(val: TextMetricsMeasureStrategy): void;
    /**
     * Returns the current text measure strategy
     */
    static getMeasureTextStrategy(): TextMetricsMeasureStrategy;
}
/**
 * Enum of text measure strategies
 */
export enum TextMetricsMeasureStrategy {
    /**
     * LimitedCache
     */
    LimitedCache = 0,
    /**
     * SymbolCache
     */
    SymbolCache = 1,
    /**
     * CanvasAndLimited
     */
    CanvasAndLimited = 2,
    /**
     * CanvasMRULimited
     */
    CanvasMRULimited = 3,
    /**
     * NodeCanvas
     */
    NodeCanvas = 4
}
