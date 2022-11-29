import {ProxyEventArgs} from '../ProxyEventArgs';
import {EventArgs} from '../EventArgs';
import {Point} from '../../../util/Point';

/**
 * Hover event args for table view
 */
export class HoverEventArgs extends ProxyEventArgs {
    /**
     * Hover event args for table view
     * @param eventArgs info about arguments of the event
     * @param row rows
     * @param column columns
     * @param mousePosition 
     */
    constructor(eventArgs: EventArgs, row: number, column: number, mousePosition: Point);
    /**
     * Return row
     */
    getRowNumber(): number;
    /**
     * Return column
     */
    getColumnNumber(): number;
    /**
     * Return mouse position in cell coordinate
     */
    getMousePosition(): Point;
}
