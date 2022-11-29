import {Node} from '../scene/Node';
import {RenderingContext} from './RenderingContext';

/**
 * Define an interface that controls whether or not to render a particular nodes
 */
export abstract class IFilter {
    /**
     * Checks if the node should be drawn.
     * <p>
     * All children nodes will be given
     * the chance to render or not to render.
     * </p>
     * @param node node to check
     * @param context rendering context
     */
    abstract filter(node: Node, context?: RenderingContext): boolean;
    /**
     * Begin filtering. If a filter should be applied to children nodes it needs to
     * be added to context and removed in the method end
     * @example
     * ```javascript
     * // Implementation of the filter to be applied for children
     * MyFilter.prototype.begin = function(context) {
     *   context.addFilter(this);
     * };
     * ```
     * @param context rendering context
     */
    abstract begin(context?: RenderingContext): this;
    /**
     * End filtering. If a filter should be applied to children nodes it needs to
     * be added to context and removed in the method end
     * @example
     * ```javascript
     * // Implementation of the filter to be applied for children
     * MyFilter.prototype.end = function(context) {
     *   context.removeFilter(this);
     * };
     * ```
     * @param context rendering context
     */
    abstract end(context?: RenderingContext): this;
}
