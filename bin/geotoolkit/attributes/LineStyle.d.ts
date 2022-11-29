import {ColoredStyle} from './ColoredStyle';
import {RgbaColor} from '../util/RgbaColor';
import {FillStyle} from './FillStyle';
import {AbstractUnit} from '../util/AbstractUnit';
import {Node} from '../scene/Node';

/**
 * Defines properties of outline. It contains line color, line width, and
 * pattern. Patterns can be passed in using LineStyle.Pattern.Dot etc.
 */
export class LineStyle extends ColoredStyle {
    /**
     * Defines properties of outline. It contains line color, line width, and
     * pattern. Patterns can be passed in using LineStyle.Pattern.Dot etc.
     * @param color The line color or a JSON with properties
     * @param color.width The line thickness
     * @param color.pattern The line pattern
     * @param color.linejoin The line join style
     * @param color.linecap The line cap style
     * @param color.fill optional fill style to be used to fill lines generated with this style.
     * @param color.unit optional unit for the width
     * @param color.pixelsnapmode pixelSnapMode JSON with x and y attributes with booleans default({'x': false, 'y': false})
     * @param color.pixelsnapmode.x snap by x
     * @param color.pixelsnapmode.y snap by y
     * @param width The line thickness
     * @param pattern The line pattern
     */
    constructor(color?: string | RgbaColor | object | { width?: number; pattern?: Patterns | number[]; linejoin?: JoinStyle | string; linecap?: CapStyle | string; fill?: FillStyle; unit?: AbstractUnit | string; pixelsnapmode?: object | { x?: boolean; y?: boolean; } ; } , width?: number, pattern?: number[] | Patterns);
    /**
     * return Pixel Snap Mode
     */
    getPixelSnapMode(): object;
    /**
     * Set Pixel Snap Mode
     * @param pixelSnapMode JSON with x and y attributes with booleans
     * @param pixelSnapMode.x snap by x
     * @param pixelSnapMode.y snap by y
     */
    setPixelSnapMode(pixelSnapMode?: object | { x?: boolean; y?: boolean; }  | boolean): this;
    /**
     * Sets fill style to fill line content. if fill is set line color is ignored
     * @param fill fill style to to be used to fill line.
     */
    setFillStyle(fill: FillStyle | string | object): this;
    /**
     * Returns fill style
     */
    getFillStyle(): FillStyle;
    /**
     * Line join style, passes through to the underlying html5 canvas renderer.
     * @param lineJoin style, can be 'miter', 'round' and 'bevel'
     */
    setJoinStyle(lineJoin: JoinStyle | string): this;
    /**
     * Get current lineJoin style
     */
    getJoinStyle(): JoinStyle | string;
    /**
     * Line cap style, passes through to canvas directly
     * @param capStyle can be 'butt', 'square', or 'round'
     */
    setCapStyle(capStyle: CapStyle | string): this;
    /**
     * Get current line cap style
     */
    getCapStyle(): CapStyle | string;
    /**
     * Returns unit of the measure for the width
     */
    getUnit(): AbstractUnit;
    /**
     * Sets unit of the measure for the width
     * @param unit a scale unit or string symbol
     */
    setUnit(unit: AbstractUnit | string): this;
    /**
     * Sets line width
     * @param width line width
     */
    setWidth(width: number): this;
    /**
     * Return line width
     */
    getWidth(): number;
    /**
     * Return line pattern
     */
    getPattern(): Patterns | number[];
    /**
     * Sets line pattern
     * @param pattern line pattern
     */
    setPattern(pattern: Patterns | number[]): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {width: number; pattern: Patterns | number[]; linejoin: JoinStyle | string; linecap: CapStyle | string; fill: FillStyle; unit: AbstractUnit | string; pixelsnapmode: {x: boolean; y: boolean}} | any;
    /**
     * Sets all the properties pertaining to this object
     * <br>
     * <br>
     * <h5>CSS Descriptions:</h5>
     * <table class="params">
     *     <thead>
     *          <tr>
     *              <th>Property</th><th>Description</th><th>Example</th>
     *          </tr>
     *      </thead>
     *      <tbody>
     *          <tr>
     *              <td>linestyle-color</td><td>Change line style color</td><td>{  linestyle-color:  #000; }</td>
     *          </tr>
     *          <tr>
     *              <td>linestyle-width</td><td>Change line style width </td><td>{ linestyle-width: 2 ;}</td>
     *          </tr>
     *      <tbody>
     *  </table>
     * <br>
     * @param properties An object containing the properties to set
     * @param properties.width line thickness
     * @param properties.pattern line pattern
     * @param properties.linejoin The line join style
     * @param properties.linecap The line cap style
     * @param properties.fill optional fill style to be used to fill lines generated with this style.
     * @param properties.unit optional unit for the width
     * @param properties.pixelsnapmode pixel SnapMode JSON
     * @param properties.pixelsnapmode.x snap by x
     * @param properties.pixelsnapmode.y snap by y
     */
    setProperties(properties?: object | { width?: number; pattern?: Patterns | number[]; linejoin?: JoinStyle | string; linecap?: CapStyle | string; fill?: FillStyle; unit?: AbstractUnit | string; pixelsnapmode?: object | { x?: boolean; y?: boolean; } ; } ): this;
    /**
     * Create or get line style from object
     * @param object object can be in format of constructor of geotoolkit.attributes.LineStyle
     */
    static fromObject(object?: object | LineStyle): LineStyle | null;
    /**
     * Merge css linestyle object with existing instance
     * @example
     * ```javascript
     * import {Shape} from '@int/geotoolkit/scene/shapes/Shape';
     *   import {LineStyle} from '@int/geotoolkit/attributes/LineStyle';
     *     class CustomSymbol extends Shape {
     *       ...
     *       setLineStyle(lineStyle, merge) {
     *           lineStyle = LineStyle.mergeFromObject(this, this.getLineStyle(), lineStyle, merge);
     *           return Shape.prototype.setLineStyle.call(this, lineStyle);
     *        }
     *       ...
     *      }
     *   const symbol = new CustomSymbol(new Rect(50, 50, 150, 150))
     *     .setLineStyle({
     *          'color': KnownColors.Orange
     *      })
     *     .setLineStyle({
     *          'width': 13
     *   }, true);
     * ```
     * @param node node
     * @param lineStyle instance of node property
     * @param object contains line style
     * @param merge merge flag
     * @param invalidateMethod invalidate method
     */
    static mergeFromObject(node: Node | null, lineStyle: LineStyle | null, object: LineStyle | string | object, merge?: boolean, invalidateMethod?: Function): LineStyle;
    /**
     * Empty style
     */
    static Empty: LineStyle;
}
/**
 * Enum of line style patterns
 */
export class Patterns extends Array<number> {
    /**
     * Solid line
     */
    static readonly Solid: Patterns;
    /**
     * Line with long dashes
     */
    static readonly Dash: Patterns;
    /**
     * Small dots continuously
     */
    static readonly Dot: Patterns;
    /**
     * Dash followed by dot
     */
    static readonly DashDot: Patterns;
    /**
     * Short Dashes
     */
    static readonly ShortDash: Patterns;
    /**
     * Very long dashes
     */
    static readonly LongDash: Patterns;
    /**
     * Dash followed by two dots
     */
    static readonly DashDotDot: Patterns;
    /**
     * Dash followed by long dash
     */
    static readonly DashLongDash: Patterns;
}
/**
 * Enum of line join
 */
export enum JoinStyle {
    /**
     * Angular
     */
    Miter = 'miter',
    /**
     * Rounded
     */
    Round = 'round',
    /**
     * Bevelled
     */
    Bevel = 'bevel'
}
/**
 * Enum of line join
 */
export enum CapStyle {
    /**
     * Short Angular
     */
    Butt = 'butt',
    /**
     * Rounded
     */
    Round = 'round',
    /**
     * Long Angular
     */
    Square = 'square'
}
