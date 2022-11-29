import {TadPoleSymbol} from './TadPoleSymbol';
import {Rect} from '../util/Rect';
import {RenderingContext} from '../renderer/RenderingContext';

/**
 * <p>Creates tadpole painter. A tadpole is a symbol associated with one or several ticks.</p>
 * <p>The main symbol can be a circle, a square, a triangle or a diamond. You can change its fillStyle and its lineStyle.
 * Each tadpole symbol needs one (depth,dip) value to be displayed.</p>
 * <p>Each tadpole symbol can have one or several ticks.
 * Each tick needs an azimuth (in degrees) and a length value.
 * Each tick can have its own color and pattern.</p>
 * @deprecated since 2021.1 (3.3). Use geotoolkit.welllog.TadPole instead.
 */
export class TadpolePainter {
    /**
     * <p>Creates tadpole painter. A tadpole is a symbol associated with one or several ticks.</p>
     * <p>The main symbol can be a circle, a square, a triangle or a diamond. You can change its fillStyle and its lineStyle.
     * Each tadpole symbol needs one (depth,dip) value to be displayed.</p>
     * <p>Each tadpole symbol can have one or several ticks.
     * Each tick needs an azimuth (in degrees) and a length value.
     * Each tick can have its own color and pattern.</p>
     * @param symbol the parent symbol, used to set properties
     * @param bbox bounding box this symbolPainter should paint within
     * @param context renderingContext
     */
    constructor(symbol: TadPoleSymbol, bbox: Rect, context: RenderingContext);
}
