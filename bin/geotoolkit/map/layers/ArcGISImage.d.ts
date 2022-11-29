import {Image} from './Image';

/**
 * This shape connects to an Esri Map Server and displays a single dynamic layer from that server. Supports ArcGIS version 9.3 and higher.
 */
export class ArcGISImage extends Image {
    /**
     * This shape connects to an Esri Map Server and displays a single dynamic layer from that server. Supports ArcGIS version 9.3 and higher.
     * @param options options
     * @param options.token authorization token for ArcGIS data server (if needed)
     */
    constructor(options?: object | { token?: string; } );
    /**
     * Queries layer legend data.
     * WARNING! Only ArcGIS version 10.0 and higher supports this operation.
     * @param callback callback to call when the legend data is loaded
     */
    queryLegend(callback?: Function): this;
    /**
     * Returns the tooltip formatter or format function to use (null if tooltips are not visible)
     */
    getTooltipFormatter(): object | Function;
}
