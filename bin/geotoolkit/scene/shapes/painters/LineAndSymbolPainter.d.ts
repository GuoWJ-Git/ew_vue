import {EventDispatcher} from '../../../util/EventDispatcher';
import {LineStyle} from '../../../attributes/LineStyle';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {SymbolShape} from '../SymbolShape';
import {Rect} from '../../../util/Rect';

/**
 * Draws line and symbol defined by painter
 */
export class LineAndSymbolPainter extends EventDispatcher {
    /**
     * Draws line and symbol defined by painter
     * @param painter Painter to be displayed with Horizontal line painter or properties object
     * @param painter.painter Painter to be displayed with Horizontal line painter
     * @param painter.linestyle style for the line (if it should be different with the symbol)
     */
    constructor(painter?: Function | object | { painter?: Function; linestyle?: LineStyle; } );
    /**
     * Gets all the properties pertaining to the line and symbol painter
     */
    getProperties(): {painter: Function; linestyle: LineStyle} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param props line and symbol painter properties
     * @param props.painter Painter to be displayed with Horizontal line painter
     * @param props.linestyle style for the line (if it should be different with the symbol)
     */
    setProperties(props: object | { painter?: Function; linestyle?: LineStyle; } ): this;
    /**
     * Sets symbol painter for Line Chart
     * @param painter Painter to be displayed with Horizontal line painter
     */
    setPainter(painter?: Function): this;
    /**
     * Returns symbol painter
     */
    getPainter(): any | Function;
    /**
     * Sets style for the line (if it should be different with the symbol)
     * @param style style for the line (if it should be different with the symbol)
     */
    setLineStyle(style: LineStyle | any): this;
    /**
     * Draw text on context
     * @param context rendering context
     * @param symbol symbol, which uses this painter
     * @param bbox bounding box
     */
    render(context: RenderingContext, symbol: SymbolShape, bbox: Rect): void;
}
