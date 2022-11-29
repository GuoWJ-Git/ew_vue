import {IFilter} from '../../renderer/IFilter';
import {Node} from '../Node';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * Define a simple filter based on array
 */
export class InArray implements IFilter {
    /**
     * Define a simple filter based on array
     * @param array array
     */
    constructor(array?: any[]);
    /**
     * Set array to be used
     * @param array array
     */
    setArray(array: any[]): this;
    /**
     * Get array to be used
     */
    getArray(): any[];
    /**
     * Filters node based on array
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
