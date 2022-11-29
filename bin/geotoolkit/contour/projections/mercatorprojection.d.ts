import {AbstractProjection} from './AbstractProjection';

/**
 * The projection class that projects latitude and longitude to mercator coordinates.
 */
export class MercatorProjection extends AbstractProjection {
    /**
     * The projection class that projects latitude and longitude to mercator coordinates.
     * @param minLatitude The minimum latitude.
     * @param maxLatitude The maximum latitude.
     */
    constructor(minLatitude?: number, maxLatitude?: number);
}
/**
 * The projection class that projects mercator coordinates to latitude and longitude.
 */
export class InverseMercatorProjection extends AbstractProjection {
    /**
     * The projection class that projects mercator coordinates to latitude and longitude.
     * @param minMercatorY The minimum mercator Y.
     * @param maxMercatorY The maximum mercator Y.
     */
    constructor(minMercatorY: number, maxMercatorY: number);
}
