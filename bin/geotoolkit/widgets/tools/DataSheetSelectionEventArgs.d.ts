import {ProxyEventArgs} from '../../controls/tools/ProxyEventArgs';
import {EventArgs} from '../../controls/tools/EventArgs';
import {Point} from '../../util/Point';

/**
 * DataSheetSelectionEventArgs
 */
export class DataSheetSelectionEventArgs extends ProxyEventArgs {
    /**
     * DataSheetSelectionEventArgs
     * @param eventArgs contains info about the event arguments
     * @param firstCell first cell position (top left) in selection rectangle in DataSheet
     * @param lastCell last cell position (bottom right) in selection rectangle in DataSheet
     */
    constructor(eventArgs: EventArgs, firstCell: Point, lastCell: Point);
    /**
     * Get first cell position (top left) in selection rectangle in DataSheet
     */
    getFirstCellPosition(): Point;
    /**
     * Get last cell position (bottom right) in selection rectangle in DataSheet
     */
    getLastCellPosition(): Point;
}
