import {AbstractTool} from '../AbstractTool';
import {TableView} from '../../shapes/tableview/TableView';
import {LineStyle} from '../../../attributes/LineStyle';
import {RgbaColor} from '../../../util/RgbaColor';
import {FillStyle} from '../../../attributes/FillStyle';
import {GradientStyle} from '../../../attributes/GradientStyle';
import {Pattern} from '../../../attributes/Pattern';
import {Plot} from '../../../plot/Plot';
import {Point} from '../../../util/Point';

/**
 * Defines Splitter tool for Table View shape
 * Tool name: 'Splitter'
 */
export class Splitter extends AbstractTool {
    /**
     * Defines Splitter tool for Table View shape
     * Tool name: 'Splitter'
     * @param options table view shape or tool options
     * @param options.tableview table view shape
     * @param options.ignorezerosize True to ignore any row height or column width less than 0, false otherwise
     * @param ignoreZeroSize True to ignore any row height or column width less than 0, false otherwise
     */
    constructor(options?: TableView | object | { tableview?: TableView; ignorezerosize?: boolean; } , ignoreZeroSize?: boolean);
    /**
     * Returns splitter mode
     */
    getSplitterMode(): SplitterMode;
    /**
     * Set splitter mode
     * @param splitterMode splitter mode
     */
    setSplitterMode(splitterMode: SplitterMode): this;
    /**
     */
    protected onActiveStateChanged(): void;
    /**
     * return splitter size
     */
    getSize(): number;
    /**
     * set splitter size
     * @param size splitter size
     */
    setSize(size: number): this;
    /**
     * Sets line style
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * Return line style
     */
    getLineStyle(): LineStyle;
    /**
     * Sets fill style
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle | GradientStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; } , merge?: boolean): this;
    /**
     * Return fill style
     */
    getFillStyle(): FillStyle;
    /**
     * Fires onHover events
     * @param plot plot
     * @param position position
     */
    applyMouseMove(plot: Plot, position: Point): this;
    /**
     * Ignore zero column width or row height
     * @param ignoreZeroSize True to ignore zero column width and row height, false otherwise
     */
    setIgnoreZeroSize(ignoreZeroSize: boolean): this;
}
/**
 * Events
 */
export enum Events {
    /**
     * onResize
     */
    onResize = 'onResize'
}
/**
 * SplitterMode
 */
export enum SplitterMode {
    /**
     * Vertical
     */
    Vertical = 'vertical',
    /**
     * Horizontal
     */
    Horizontal = 'horizontal',
    /**
     * Horizontal
     */
    Both = 'both'
}
