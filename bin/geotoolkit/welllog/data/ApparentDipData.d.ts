import {Range} from '../../util/Range';

/**
 * Define data object for apparent dip data
 */
export class ApparentDipData {
    /**
     * Define data object for apparent dip data
     * @param options sample
     * @param options.depth centered depth of the apparent dip
     * @param options.azimuth azimuth of apparent dip
     * @param options.height height of apparent dip
     * @param options.angles angle range
     */
    constructor(options?: object | { depth?: number; azimuth?: number; height?: number; angles?: Range; } );
    /**
     * Get depth
     */
    getDepth(): number;
    /**
     * Get azimuth
     */
    getAzimuth(): number;
    /**
     * Get height
     */
    getHeight(): number;
    /**
     * Get angles range
     */
    getAngles(): Range;
    /**
     * Set properties
     * @param properties properties
     * @param properties.depth centered depth of the apparent dip
     * @param properties.azimuth azimuth of apparent dip
     * @param properties.height height of apparent dip
     * @param properties.angles angle range
     */
    setProperties(properties?: object | { depth?: number; azimuth?: number; height?: number; angles?: Range; } ): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {depth: number; azimuth: number; height: number; angles: Range} | any;
}
