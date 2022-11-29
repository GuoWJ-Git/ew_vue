import {SortComponents} from './SortComponents';
import {WellBoreData} from '../WellBoreData';
import {Iterator} from '../../../util/iterator';

/**
 * Default sorting algorithm (See: https://jira.int.com/browse/HTML-5565):<br>
 * 1. Top depth (smallest first)<br>
 * 2. Diameter (biggest first)<br>
 * 3. Component length if two overlaps (longest first)
 */
export class SortComponents1 extends SortComponents {
    /**
     * Default sorting algorithm (See: https://jira.int.com/browse/HTML-5565):<br>
     * 1. Top depth (smallest first)<br>
     * 2. Diameter (biggest first)<br>
     * 3. Component length if two overlaps (longest first)
     * @param options options
     * @param options.getpriority function to return priority level based on component name
     * @param options.comparator comparator function(a, b)
     */
    constructor(options: object | { getpriority?: Function; comparator?: Function; } );
    /**
     * Sorts well bore components data
     * @param data well bore components data
     */
    sort(data: WellBoreData | any[]): Iterator;
}
