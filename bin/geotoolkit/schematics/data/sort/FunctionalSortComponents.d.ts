import {SortComponents} from './SortComponents';
import {WellBoreData} from '../WellBoreData';
import {Iterator} from '../../../util/iterator';

/**
 * General sorting class: sorts well bore components according to customer's function
 */
export class FunctionalSortComponents extends SortComponents {
    /**
     * General sorting class: sorts well bore components according to customer's function
     * @param f customer's function
     */
    constructor(f: Function);
    /**
     * Sorts well bore components data
     * @param data well bore components data
     */
    sort(data: WellBoreData | any[]): Iterator;
}
