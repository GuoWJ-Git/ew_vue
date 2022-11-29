import {AbstractSystem} from './AbstractSystem';
import {Point} from '../../util/Point';

/**
 * This class specifies the Geographic (lat/lon) coordinate system with datum WGS84 where longitude is x-axis and latitude is y-axis
 */
export class LatLon extends AbstractSystem {
    /**
     * This class specifies the Geographic (lat/lon) coordinate system with datum WGS84 where longitude is x-axis and latitude is y-axis
     * @param epsg epsg epsg
     */
    constructor(epsg?: number);
    /**
     * Transforms the specified coordinate to projection from lat / lng
     * @param lon long
     * @param lat lat
     * @param dst optional destination point
     * @param clamp if set to true, lat be limited by [-90, 90], lon: [-180, 180]
     */
    transform(lon: number, lat: number, dst?: Point, clamp?: boolean): Point;
    /**
     * Return transformed point to lat / lng from projection
     * @param x x coordinate
     * @param y y coordinate
     * @param dst optional destination point
     */
    inverseTransform(x: number, y: number, dst?: Point): Point;
}
