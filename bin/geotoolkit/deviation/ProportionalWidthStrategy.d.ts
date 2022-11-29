import {TrackWidthStrategy} from './TrackWidthStrategy';

/**
 * This class defines strategy how to proportionally scale width according to
 * trajectory length scale in the range from min to max
 */
export class ProportionalWidthStrategy extends TrackWidthStrategy {
    /**
     * This class defines strategy how to proportionally scale width according to
     * trajectory length scale in the range from min to max
     * @param options options
     * @param options.minWidth minimum width of track for scaling on zoom in pixels
     * @param options.maxWidth maximum width of track for scaling on zoom in pixels
     * @param options.widthScale width scale
     */
    constructor(options: object | { minWidth?: number; maxWidth?: number; widthScale?: number; } );
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {minWidth: number; maxWidth: number; widthScale: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.minWidth minimum width of track for scaling on zoom in pixels
     * @param properties.maxWidth maximum width of track for scaling on zoom in pixels
     * @param properties.widthScale width scale
     */
    setProperties(properties: object | { minWidth?: number; maxWidth?: number; widthScale?: number; } ): this;
}
