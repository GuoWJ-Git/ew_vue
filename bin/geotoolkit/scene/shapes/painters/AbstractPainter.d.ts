import {SymbolShape} from '../SymbolShape';
import {Rect} from '../../../util/Rect';
import {RenderingContext} from '../../../renderer/RenderingContext';

/**
 * Abstract Painter class
 * @param symbol the parent symbol, used to set properties
 * @param bbox bounding box this symbolPainter should paint within
 * @param context Rendering Context
 */
export function AbstractPainter(symbol: SymbolShape, bbox: Rect, context: RenderingContext): void;
