import {BaseEventArgs} from '../controls/tools/BaseEventArgs';
import {Range} from '../util/Range';

/**
 * This class holds the details of a visiblerange change event.
 * <br>
 * When such events occur, one could retrieve this from the event object and fetch some information from it.For example the newly visible range.
 */
export class VisibleRangeChangeEventArgs extends BaseEventArgs {
    /**
     * This class holds the details of a visiblerange change event.
     * <br>
     * When such events occur, one could retrieve this from the event object and fetch some information from it.For example the newly visible range.
     * @param eventName information about the events arguments
     * @param range visible limits
     */
    constructor(eventName: string, range: Range);
    /**
     * return visible limits
     */
    getVisibleRange(): Range;
}
