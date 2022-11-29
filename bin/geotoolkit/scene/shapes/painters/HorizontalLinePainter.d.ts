import {SymbolShape} from '../SymbolShape';
import {Rect} from '../../../util/Rect';
import {RenderingContext} from '../../../renderer/RenderingContext';

/**
 * Draws a horizontal line
 * @param symbol the parent symbol, used to set properties
 * @param bbox bounding box this symbolPainter should paint within
 * @param context Rendering Context
 */
export function HorizontalLinePainter(symbol: SymbolShape, bbox: Rect, context: RenderingContext): void;
