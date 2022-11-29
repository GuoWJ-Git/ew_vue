import {Point} from './Point';
import {Iterator} from '../../util/iterator';

/**
 * Point map feature implementation.
 */
export class Aggregation extends Point {
    /**
     * Point map feature implementation.
     * @param options options
     * @param options.aggregation iterator through aggregated features
     */
    constructor(options: object | { aggregation?: Iterator; } );
    /**
     * Returns iterator through aggregated features
     */
    getAggregation(): Iterator;
    /**
     * Sets expanded mode
     * @param expanded true, if expanded, else false
     */
    setExpanded(expanded: boolean): this;
}
