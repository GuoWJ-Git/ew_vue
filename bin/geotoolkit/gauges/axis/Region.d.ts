import {LineStyle, CapStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {RgbaColor} from '../../util/RgbaColor';
import {Pattern} from '../../attributes/Pattern';
import {Range} from '../../util/Range';

/**
 * An axis region is a segment within axis range which has to be differentiated from the rest of the axis. Examples are
 * the critical section of the pressure gauge or the red segment of the tachometer in your car.<br>
 * A region can be highlighted by a different fillstyle and/or by a different linestyle than other parts of the gauge.<br>
 * Multiple regions can be added. Not to be used as a value fill, because axes have a different mechanism for that purpose.
 */
export class Region {
    /**
     * An axis region is a segment within axis range which has to be differentiated from the rest of the axis. Examples are
     * the critical section of the pressure gauge or the red segment of the tachometer in your car.<br>
     * A region can be highlighted by a different fillstyle and/or by a different linestyle than other parts of the gauge.<br>
     * Multiple regions can be added. Not to be used as a value fill, because axes have a different mechanism for that purpose.
     * @param low Lower bound or object with parameters
     * @param low.low Maximum value Lower bound of the range
     * @param low.high Upper bound of the range
     * @param low.linestyle Line style of the range
     * @param low.fillstyle Fill style of the range
     * @param low.visible Defines if the range is visible and should be rendered
     * @param low.linecap can be 'butt', 'square', or 'round'
     * @param low.static Defines if the range is static
     * @param low.name Name of the region
     * @param high Upper bound of the range
     * @param lineStyle Line style of the range
     * @param fillStyle Fill style of the range
     */
    constructor(low?: number | object | { low?: number; high?: number; linestyle?: LineStyle; fillstyle?: FillStyle; visible?: boolean; linecap?: CapStyle; static?: boolean; name?: string; } , high?: number, lineStyle?: LineStyle, fillStyle?: FillStyle);
    /**
     * Returns class name for css reference
     */
    getCssClass(): string;
    /**
     * Sets visible flag for the range
     * @param visible Visibility flag
     */
    setVisible(visible: boolean): this;
    /**
     * Gets visibility status
     */
    getVisible(): boolean;
    /**
     * Gets lowest limit of the region
     */
    getLow(): number;
    /**
     * Gets highest limit of the region
     */
    getHigh(): number;
    /**
     * Returns the current name of the region
     */
    getName(): string;
    /**
     * Sets the name of the region
     * @param name New name for the region
     */
    setName(name: string): this;
    /**
     * Sets lowest limit of the region
     * @param low New lower bound
     */
    setLow(low: number): this;
    /**
     * Sets highest limit of the region
     * @param high New upper bound
     */
    setHigh(high: number): this;
    /**
     * Returns fill style set for the region
     */
    getFillStyle(): FillStyle | null;
    /**
     * Sets fill style set for the region
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string, merge?: boolean): this;
    /**
     * Returns line style set for the region
     */
    getLineStyle(): LineStyle | null;
    /**
     * Sets line style set for the region
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * Sets line style set for the region
     * @param color New color of the line
     */
    setLineColor(color: RgbaColor | string): this;
    /**
     * Sets range that defines this region
     */
    getRange(): Range | null;
    /**
     * Sets range that defines this region
     * @param range New range with min and max values
     */
    setRange(range: Range): this;
    /**
     * Returns true if the region is static and visible at all times
     */
    isStatic(): boolean;
    /**
     * Sets a flag defining if the region should be static and visible at all times
     * @param isStatic True
     */
    setStatic(isStatic: boolean): this;
    /**
     * Returns properties pertaining to this object
     */
    getProperties(): {low: number; high: number; linestyle: LineStyle; fillstyle: FillStyle; visible: boolean; linecap: CapStyle; static: boolean; name: string} | any;
    /**
     * Sets properties pertaining to this object
     * @param props JSON with properties
     * @param props.low lower bound
     * @param props.high upper bound
     * @param props.linestyle region linestyle
     * @param props.fillstyle region fillstyle
     * @param props.visible visibility
     * @param props.color in CSS string form or RgbaColor object deprecated (since 2021.1 (3.3))
     * @param props.linecap can be 'butt', 'square', or 'round'
     * @param props.static Defines if the range is static
     * @param props.name Name of the region
     */
    setProperties(props: object | { low?: number; high?: number; linestyle?: LineStyle; fillstyle?: FillStyle; visible?: boolean; color?: string | RgbaColor; linecap?: CapStyle; static?: boolean; name?: string; } ): this;
}
