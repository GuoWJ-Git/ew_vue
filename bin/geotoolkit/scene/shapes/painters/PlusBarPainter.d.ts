import {SymbolShape} from '../SymbolShape';
import {Rect} from '../../../util/Rect';
import {RenderingContext} from '../../../renderer/RenderingContext';

/**
 * Draws a plus bar symbol that can be filled in by color
 * @param symbol the parent symbol, used to set properties
 * @param bbox bounding box this symbolPainter should paint within
 * @param context rendering Context
 */
export function PlusBarPainter(symbol: SymbolShape, bbox: Rect, context: RenderingContext): void;
