import {IFilter} from '../../renderer/IFilter';
import {Node} from '../Node';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * Define a composite filter to apply a several filters
 */
export class Composite implements IFilter {
    /**
     * Define a composite filter to apply a several filters
     * @param filters an array of filters
     */
    constructor(filters?: IFilter[]);
    /**
     * Add filter to be applied
     * @param filter filter to add
     */
    addFilter(filter: IFilter): this;
    /**
     * Remove an instance of the filter
     * @param filter filter to remove
     */
    removeFilter(filter: IFilter): this;
    /**
     * Filters node based on an array of filters
     * @param node to apply filter to
     * @param context rendering context
     */
    filter(node: Node, context?: RenderingContext): boolean;
    /**
     * Begin filtering
     * @param context rendering context
     */
    begin(context?: RenderingContext): this;
    /**
     * End filtering
     * @param context rendering context
     */
    end(context?: RenderingContext): this;
}
