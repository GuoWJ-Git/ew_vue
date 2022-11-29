import {EventDispatcher} from '../../../util/EventDispatcher';
import {INodeEnumerable} from '../../INodeEnumerable';
import {Group} from '../../Group';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {SymbolShape} from '../SymbolShape';
import {Rect} from '../../../util/Rect';

/**
 * Draws specified geometry
 */
export class GeometryPainter extends EventDispatcher implements INodeEnumerable {
    /**
     * Draws specified geometry
     * @param options geotoolkit geometry
     * @param options.geometry geotoolkit geometry
     */
    constructor(options: Group | object | { geometry?: Group | null; } );
    /**
     * Returns clone
     */
    clone(): GeometryPainter;
    /**
     * Set geometry
     * @param geometry root geometry
     */
    setGeometry(geometry: Group): this;
    /**
     * Return geometry
     */
    getGeometry(): Group | null;
    /**
     * Renders parsed svg file on provided context
     * @param context Rendering context
     * @param symbol symbol to render
     * @param bbox Bounds of the symbol in context transformation
     */
    render(context: RenderingContext, symbol: SymbolShape, bbox: Rect): void;
    /**
     * Enumerate children nodes
     * @param callback callback
     * @param target target
     */
    enumerateNodes(callback: Function, target: any): void;
}
