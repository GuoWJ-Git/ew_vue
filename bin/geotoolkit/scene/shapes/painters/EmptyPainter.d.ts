import {SymbolShape} from '../SymbolShape';
import {Rect} from '../../../util/Rect';
import {RenderingContext} from '../../../renderer/RenderingContext';

/**
 * Draws nothing. The class is implemented to keep current behavior
 * of {geotoolkit.scene.shapes.SymbolShape} rendering in case its painter is set to "null".
 * @param symbol the parent symbol, used to set properties
 * @param bbox bounding box this symbolPainter should paint within
 * @param context Rendering Context
 */
export function EmptyPainter(symbol: SymbolShape, bbox: Rect, context: RenderingContext): void;
