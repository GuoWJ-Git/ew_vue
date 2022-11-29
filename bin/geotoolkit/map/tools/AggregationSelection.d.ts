import {Selection} from '../../controls/tools/Selection';
import {CompositeNode} from '../../scene/CompositeNode';

/**
 * Helper class for aggregation selection
 */
export class AggregationSelection extends Selection {
    /**
     * Helper class for aggregation selection
     * @param options used to display temporary shapes or tool options
     */
    constructor(options?: CompositeNode | object);
    /**
     * Sets enabled
     * @param enabled true, if enabled, else false
     */
    setEnabled(enabled: boolean): this;
}
