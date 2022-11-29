import {RenderingContext} from '../../renderer/RenderingContext';
import {FillStyle} from '../../attributes/FillStyle';
import {Rect} from '../../util/Rect';

/**
 * Helper class
 */
export class Util {
    /**
     * Helper class
     */
    constructor();
    /**
     * Symbol size
     */
    static SymbolSize: number;
    /**
     * Default geotoolkit.welllog.header.AdaptiveLogCurveVisualHeader's "rectangle" filling element drawing procedure
     * @param context context
     * @param fillStyle fill style
     * @param x x position of the header area or header area
     * @param y y position of the header area
     * @param w width of the header area
     * @param h height of the header area
     */
    static fillRectangle(context: RenderingContext, fillStyle: FillStyle, x: number | Rect, y?: number | null, w?: number | null, h?: number | null): void;
}
