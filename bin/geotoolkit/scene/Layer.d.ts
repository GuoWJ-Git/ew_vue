import {CompositeNode} from './CompositeNode';
import {Rect} from '../util/Rect';
import {ModelLimitsStrategy} from './ModelLimitsStrategy';
import {Node} from './Node';
import {Iterator} from '../util/iterator';

/**
 * Define a composite node, which always has the same bounds and model limits as its parent
 */
export class Layer extends CompositeNode {
    /**
     * Define a composite node, which always has the same bounds and model limits as its parent
     * @param options addition options
     * @param options.verticalFlip vertical axis goes from bottom to top
     * @param options.horizontalFlip horizontal axis goes from right to left
     * @param options.modelLimits define inner model coordinates of the group
     * @param options.bounds define position of the group in the parent
     * @param options.automodellimitsstrategy auto model limits strategy
     * @param options.children the child nodes to be added
     */
    constructor(options?: object | { verticalFlip?: boolean; horizontalFlip?: boolean; modelLimits?: Rect | any; bounds?: Rect | any; automodellimitsstrategy?: ModelLimitsStrategy; children?: Node | Node[] | Iterator; } );
    /**
     * Returns infinite flag, flag that indicates infinite limits of the layer
     */
    getIsInfinite(): boolean;
    /**
     * Set infinite flag, this flag indicates that the layer has infinite limits
     * @param infinite infinite flag
     */
    setIsInfinite(infinite?: boolean): this;
    /**
     * Set a strategy for calculating model limits. If it is null, the limits of the parent model are used.
     * @param strategy Model Limits logic strategy to use
     */
    setAutoModelLimitsStrategy(strategy: ModelLimitsStrategy): this;
    /**
     * Get a strategy for calculating model limits
     */
    getAutoModelLimitsStrategy(): ModelLimitsStrategy;
    /**
     * Returns parent bounds
     */
    getBounds(): Rect;
    /**
     * Returns parent model limits
     */
    getModelLimits(): Rect;
    /**
     * Invalidate parent and notify all listeners.
     * @param bounds bounds of the invalid rectangle in the inner node coordinates
     * @param force force invalidate
     */
    invalidateParent(bounds?: Rect, force?: boolean): this;
}
