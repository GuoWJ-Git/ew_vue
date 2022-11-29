import {AbstractTool} from '../../../controls/tools/AbstractTool';
import {MultiWellWidget} from '../MultiWellWidget';
import {LineStyle} from '../../../attributes/LineStyle';
import {RgbaColor} from '../../../util/RgbaColor';

/**
 * Creates a CorrelationCursor tool. The tool supports events shown below. It provides built-in functions to customize the styles for the tool.
 */
export class CorrelationCursor extends AbstractTool {
    /**
     * Creates a CorrelationCursor tool. The tool supports events shown below. It provides built-in functions to customize the styles for the tool.
     * @param multiwell JSON containing cursor options OR multi-well widget
     * @param multiwell.multiwell multi-well widget
     * @param multiwell.name name of the tool
     * @param multiwell.linestyle cursor line style
     * @param multiwell.drawonlyexistingdepth if true, draws only existing depth
     * @param name name of the tool
     */
    constructor(multiwell?: object | { multiwell?: MultiWellWidget; name?: string; linestyle?: LineStyle; drawonlyexistingdepth?: boolean; }  | MultiWellWidget, name?: string);
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
     * return line style
     */
    getLineStyle(): LineStyle;
    /**
     * return visible state
     */
    isVisible(): boolean;
    /**
     * Sets visible
     * @param visible visible attribute set or not
     */
    setVisible(visible: boolean): this;
    /**
     * The current well depth of the cursor
     */
    getDepth(): number;
    /**
     * Update position of cursor for the last mouse position. This code can be used
     * if content is scrolled to display the position of the cursor in the last mouse position
     */
    updateCursorPosition(): this;
    /**
     * Place the cursor at the specified well depth
     * @param depth well depth
     * @param silent notification enabled or not
     */
    setDepth(depth: number, silent?: boolean): this;
    /**
     * Sets draw only existing depth mode
     * @param drawOnlyExistingDepth if true, draws only existing depth
     */
    setDrawOnlyExistingDepth(drawOnlyExistingDepth: boolean): this;
    /**
     * Gets draw only existing depth mode
     */
    getDrawOnlyExistingDepth(): boolean;
}
/**
 * CorrelationCursor Events
 */
export enum Events {
    /**
     * onPositionChanged
     */
    onPositionChanged = 'onPositionChanged',
    /**
     * onPointerUp
     */
    onPointerUp = 'onPointerUp'
}
