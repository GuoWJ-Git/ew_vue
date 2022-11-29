import {AbstractSystem} from './AbstractSystem';
import {Point} from '../../util/Point';

/**
 * Based on Geographic/UTM (Universal Transverse Mercator) Coordinate Converter
 * @example
 * ```javascript
 * // To calculate a line n(x,y) meter away from particular latitude and longitude…..where x is distance towards east west, y is distance towards north south
 * import {UTM} from '@int/geotoolkit/map/coordinatesystems/UTM';
 * import {Polygon} from '@int/geotoolkit/scene/shapes/Polygon';
 * const system = new UTM(15, false); // 15 UTM zone, north hemisphere ('true' for southern)
 * const origin = system.transform(-95.388718, 29.716131); // your lat/lon origin, Houston coordinates here
 * const coordsX = [100, -200, 300]; // your coordinates in meters from the 'origin' lat/long point
 * const newX = coordsX.map((x) => x + origin.getX());  // shifting relative to the initial point
 * ... // same for the Y coordinates
 * const polygon = new Polygon({ // Your polygon to draw
 *   'x': newX,
 *   'y': newY
 * });
 * ```
 * @example
 * ```javascript
 * // To find the distance between the two lat/long points only by transforming them to UTM:
 * import {UTM} from '@int/geotoolkit/map/coordinatesystems/UTM';
 * import {Point} from '@int/geotoolkit/util/Point';
 * const system = new UTM(18, false);
 * const point1 = system.transform(-77.009003, 38.889931); // Washington
 * const point2 = system.transform(-75.165222, 39.952583); // Philadelphia
 * Point.getDistance(point1, point2); // 197744 meters
 * // You can also use the 'system' property in map layers for automatic conversion from one coordinate system to another
 *  
 * ```
 * @example
 * ```javascript
 * // To calculate the UTM zone dynamically:
 * const lat = 29.761993, lon = -95.366302; // your latitude/longitude for the origin point
 * const zone = Math.floor((lon + 180) / 6) % 60 + 1; // formula for UTM zone
 * const southern = (lat < 0); // calculate hemishere
 * const system = new UTM(zone, southern); // create system for the point
 * const point1 = system.transform(lon, lat); // transform point to UTM
 * const point2 = new Point(point1.x + dx, point1.y + dy); // dx, dy - distance between point1 & point2 in meters
 * system.inverseTransform(point2.x, point2.y, point2); // transform 'point2' back to lat/long coordinate system
 * ```
 */
export class UTM extends AbstractSystem {
    /**
     * Based on Geographic/UTM (Universal Transverse Mercator) Coordinate Converter
     * @param zone The UTM zone in which the point lies.
     * @param southhemi True if the point is in the southern hemisphere; false otherwise.
     */
    constructor(zone: number | object, southhemi: boolean);
    /**
     * Transforms the specified coordinate to projection from lat / lon
     * @param lon long
     * @param lat lat
     * @param dst optional destination point
     */
    transform(lon: number, lat: number, dst?: Point): Point;
    /**
     */
    getZone(): number;
    /**
     * Sets the current zone
     * @param zone current zone
     */
    setZone(zone: number): this;
    /**
     * Set southern or northern hemisphere
     * @param southhemi true if southern
     */
    setSouthernHemisphere(southhemi: boolean): this;
    /**
     * Return true if it is southern hemisphere
     */
    isSouthernHemisphere(): boolean;
    /**
     * Return transformed point to lat / lng from projection
     * @param x x coordinate
     * @param y y coordinate
     * @param dst optional destination point
     */
    inverseTransform(x: number, y: number, dst?: Point): Point;
}
