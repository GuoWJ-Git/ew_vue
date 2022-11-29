import {RenderingContext} from '../renderer/RenderingContext';
import {LineRenderingContext} from './LineRenderingContext';
import {LineStyle} from './LineStyle';

/**
 * Define an interface to create line decoration
 */
export abstract class ILineDecoration {
    /**
     * Return line decoration strategy name
     */
    abstract getName(): string;
    /**
     * Create line decoration rendering context
     * @param context rendering context
     */
    abstract createLineRenderingContext(context: RenderingContext): LineRenderingContext;
    /**
     * Return line style width
     * @param lineStyle line style
     */
    abstract getLineWidth(lineStyle: LineStyle): number;
}
