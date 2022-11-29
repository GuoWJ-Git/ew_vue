import {CompositeNode} from './CompositeNode';
import {Rect} from '../util/Rect';

/**
 * Abstraction to calculate auto model limits
 */
export class ModelLimitsStrategy {
    /**
     * Abstraction to calculate auto model limits
     */
    constructor();
    /**
     * Adjusts model limits
     * @param model model
     * @param modelLimits model limits
     */
    adjustModelLimits(model: CompositeNode, modelLimits: Rect): Rect;
}
