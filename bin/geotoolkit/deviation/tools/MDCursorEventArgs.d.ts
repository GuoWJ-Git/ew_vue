import {ProxyEventArgs} from '../../controls/tools/ProxyEventArgs';
import {EventArgs} from '../../controls/tools/EventArgs';
import {Point} from '../../util/Point';

/**
 * MDCursorEventArgs
 */
export class MDCursorEventArgs extends ProxyEventArgs {
    /**
     * MDCursorEventArgs
     * @param eventArgs information about the event arguments
     * @param position inner model position ("null" when undefined)
     */
    constructor(eventArgs: EventArgs, position: Point | null);
    /**
     * Gets inner model position
     */
    getPosition(): Point | null;
}
