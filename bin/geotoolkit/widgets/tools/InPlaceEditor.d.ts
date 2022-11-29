import {AbstractTool} from '../../controls/tools/AbstractTool';
import {TableView} from '../TableView';
import {Rect} from '../../util/Rect';

/**
 * InPlace Editor
 * Double click to activate InPLace Editor.
 * EscapeKey to exit from editing mode (without submitting new value)
 * EnterKey (or CtrlKey + ArrowKey) to submit value and edit next cell
 * CtrlKey + EnterKey to submit value and exit from editing mode
 */
export class InPlaceEditor extends AbstractTool {
    /**
     * InPlace Editor
     * Double click to activate InPLace Editor.
     * EscapeKey to exit from editing mode (without submitting new value)
     * EnterKey (or CtrlKey + ArrowKey) to submit value and edit next cell
     * CtrlKey + EnterKey to submit value and exit from editing mode
     * @param tableViewWidget 
     * @param options 
     * @param options.highlight True to highlight both row and column at cell position, false to only highlight cell
     * @param options.autosubmit True to automatically submit new value, can still use EscapeKey to dismiss, false otherwise
     * @param options.focustrigger Type of click to make text input area focused
     * @param options.backgroundcolor CSS background color string for text input area
     */
    constructor(tableViewWidget: TableView, options?: object | { highlight?: boolean; autosubmit?: boolean; focustrigger?: FocusTriggerType; backgroundcolor?: string; } );
    /**
     * Return active cell
     */
    getActiveCell(): {row: number; column: number} | object;
    /**
     * set active cell
     * @param cell call coordinates
     * @param cell.row row
     * @param cell.column column
     * @param highlight True to highlight row and column the cell is at, False otherwise
     * @param customCellBounds Select a cell with custom bounds other than calculate from row and column size
     */
    setActiveCell(cell: object | { row?: number; column?: number; } , highlight?: boolean, customCellBounds?: Rect): this;
    /**
     * Get editor input
     */
    getEditorInput(): HTMLElement;
}
/**
 * Events
 */
export enum Events {
    /**
     * onCanEdit
     */
    onCanEdit = 'onCanEdit',
    /**
     * onValueChanged
     */
    onValueChanged = 'onValueChanged'
}
/**
 * Focus trigger type
 */
export enum FocusTriggerType {
    /**
     * Double click to make text input area focused
     */
    DoubleClick = 'doubleclick',
    /**
     * Single click to make text input area focused
     */
    SingleClick = 'singleclick'
}
