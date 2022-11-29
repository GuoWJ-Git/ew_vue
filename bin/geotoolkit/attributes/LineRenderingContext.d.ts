import {RenderingContext} from '../renderer/RenderingContext';
import {LineStyle} from './LineStyle';
import {Rect} from '../util/Rect';

/**
 * Represents context to render line
 */
export class LineRenderingContext {
    /**
     * Represents context to render line
     * @param context rendering context
     */
    constructor(context: RenderingContext);
    /**
     * Set line style
     * @param style a line style
     * @param area area to apply fill property of line style
     */
    setLineStyle(style: LineStyle, area?: Rect): void;
    /**
     * Draw line
     * @param x1 x-position of start point
     * @param y1 y-position of start point
     * @param x2 x-position of end point
     * @param y2 y-position of end point
     */
    drawLine(x1: number, y1: number, x2: number, y2: number): void;
}
