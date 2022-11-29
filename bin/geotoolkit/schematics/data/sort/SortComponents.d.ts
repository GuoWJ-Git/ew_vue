import {WellBoreData} from '../WellBoreData';
import {Iterator} from '../../../util/iterator';

/**
 * Abstract class to sorts well bore components data into rendering order
 */
export class SortComponents {
    /**
     * Abstract class to sorts well bore components data into rendering order
     */
    constructor();
    /**
     * Sorts well bore components data
     * @param well bore components data
     */
    sort(well: WellBoreData | any[]): Iterator;
}
