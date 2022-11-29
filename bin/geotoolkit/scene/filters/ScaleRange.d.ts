import {IFilter} from '../../renderer/IFilter';
import {Node} from '../Node';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * Filter nodes based on range of scale factor
 */
export class ScaleRange implements IFilter {
    /**
     * Filter nodes based on range of scale factor
     * @param options options
     * @param options.minscale minimal scale
     * @param options.maxscale maximal scale
     * @param options.minscaleinclusive minimal scale is inclusive
     * @param options.maxscaleinclusive maximal scale is inclusive
     */
    constructor(options?: object | { minscale?: number; maxscale?: number; minscaleinclusive?: number; maxscaleinclusive?: number; } );
    /**
     * Filters node based on scale range provided
     * @param node to apply filter to
     * @param context rendering context
     */
    filter(node: Node, context?: RenderingContext): boolean;
    /**
     * Gets options
     */
    getOptions(): object | any;
    /**
     * Sets options
     * @param options options
     * @param options.minscale minimal scale
     * @param options.maxscale maximal scale
     */
    setOptions(options?: object | { minscale?: number; maxscale?: number; } ): this;
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
