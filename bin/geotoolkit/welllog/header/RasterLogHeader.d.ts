import {AdaptiveLogVisualHeader} from './AdaptiveLogVisualHeader';
import {LogAbstractVisual} from '../LogAbstractVisual';

/**
 * Define default header for geotoolkit.welllog.RasterLog
 */
export class RasterLogHeader extends AdaptiveLogVisualHeader {
    /**
     * Define default header for geotoolkit.welllog.RasterLog
     * @param options visual for the header or properties object
     * @param options.visual visual for the header
     */
    constructor(options?: LogAbstractVisual | object | { visual?: LogAbstractVisual; } );
}
