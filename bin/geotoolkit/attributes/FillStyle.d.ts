import {ColoredStyle} from './ColoredStyle';
import {IRasterable} from './IRasterable';
import {RgbaColor} from '../util/RgbaColor';
import {Pattern} from './Pattern';
import {RenderingContext} from '../renderer/RenderingContext';
import {Raster} from './Raster';

/**
 * Defines fill style. This fill style can have a color and a pattern
 */
export class FillStyle extends ColoredStyle implements IRasterable {
    /**
     * Defines fill style. This fill style can have a color and a pattern
     * @param color The fill color or a JSON with fillstyle properties or geotoolkit.attributes.FillStyle
     * @param color.pattern The background pattern
     * @param color.foreground The foreground color of the pattern
     * @param color.evenoddmode The flag indicating whether even-odd fill mode is to be used.
     * @param pattern The background pattern
     * @param foreground The foreground color of the pattern
     * @param evenoddmode The flag indicating whether even-odd fill mode is to be used.
     * @param shadow JSON for displaying shadow
     */
    constructor(color?: string | RgbaColor | FillStyle | object | { pattern?: Pattern; foreground?: string | RgbaColor; evenoddmode?: boolean; } , pattern?: Pattern, foreground?: string | RgbaColor, evenoddmode?: boolean, shadow?: object);
    /**
     * Return fill pattern. Can pass in rendering context to get HTML DOM
     * pattern, or no arguments to get fillPattern object.
     * @param context Rendering Context
     */
    getPattern(context?: RenderingContext): Pattern | null;
    /**
     * Sets fill pattern.
     * @param pattern fill pattern
     */
    setPattern(pattern?: Pattern): this;
    /**
     * Gets type of style this is, STYLE_TYPE_COLOR or STYLE_TYPE_PATTERN
     */
    getStyleType(): string;
    /**
     * Sets foreground color
     * @param color RgbaColor for foreground
     */
    setForegroundColor(color: string | RgbaColor): this;
    /**
     * Gets foreground color
     */
    getForegroundColor(): string;
    /**
     * Gets the even odd fill mode
     */
    getEvenOddMode(): boolean;
    /**
     * Sets the even odd fill mode
     * @param evenOddMode The even odd fill mode flag.
     */
    setEvenOddMode(evenOddMode: boolean): this;
    /**
     * Returns true if fills are identical
     * @param other FillStyle to compare against
     */
    equalsTo(other: FillStyle): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {pattern: Pattern; foreground: string; evenoddmode: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * <br>
     * <h5>CSS Descriptions:</h5>
     * <table class="params">
     *     <thead>
     *          <tr>
     *              <th>Property</th><th>Description</th><th class="last">Example</th>
     *          </tr>
     *      </thead>
     *      <tbody>
     *          <tr>
     *              <td class="name"> fillstyle-color </td><td class="type">Change fill style color</td><td class="description last">{  fillstyle-color:  #000; }</td>
     *          </tr>
     *      </tbody>
     * </table>
     * @param properties An object containing the properties to set
     * @param properties.pattern The background pattern
     * @param properties.foreground The foreground color of the pattern
     * @param properties.evenoddmode The flag indicating whether even-odd fill mode is to be used
     */
    setProperties(properties: object | { pattern?: Pattern; foreground?: string | RgbaColor; evenoddmode?: boolean; } ): this;
    /**
     * Empty style
     */
    static Empty: FillStyle;
    /**
     * Pick style
     */
    static Pick: FillStyle;
    /**
     * Returns a new instance of geotoolkit.attributes.Raster
     * @param xMin x Min position to get color
     * @param yMin y Min position to get color
     * @param xMax x Max position to get color
     * @param yMax y Max position to get color
     */
    getRaster(xMin?: number, yMin?: number, xMax?: number, yMax?: number): Raster;
}
