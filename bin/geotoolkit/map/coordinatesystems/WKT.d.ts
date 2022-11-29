import {AbstractSystem} from './AbstractSystem';
import {AbstractUnit} from '../../util/AbstractUnit';
import {AxisDirection} from './AxisDirection';
import {Point} from '../../util/Point';

/**
 * Based on WKT converter, can use parameters spheroid, towgs84, primem
 */
export class WKT extends AbstractSystem {
    /**
     * Based on WKT converter, can use parameters spheroid, towgs84, primem
     * @param options options
     * @param options.spheroid spheroid
     * @param options.towgs84 towgs84
     * @param options.primem prime meridian
     * @param options.spheroidunits spheroid units
     * @param options.axis axis directions
     * @param options.zone UTM zone
     * @param options.southhemi true, if it is south hemisphere, false, if north
     * @param options.standartparallel1 sp1 latitude
     * @param options.standartparallel2 sp2 latitude
     * @param options.latitudeoforigin origin latitude
     * @param options.centralmeridian origin longitude
     * @param options.falseeasting false easting
     * @param options.falsenorthing false northing
     * @param options.scalefactor scale
     */
    constructor(options?: object | { spheroid?: number[]; towgs84?: number[]; primem?: number; spheroidunits?: AbstractUnit | string; axis?: AxisDirection[]; zone?: number; southhemi?: boolean; standartparallel1?: number; standartparallel2?: number; latitudeoforigin?: number; centralmeridian?: number; falseeasting?: number; falsenorthing?: number; scalefactor?: number; }  | string);
    /**
     * Transforms the specified coordinate to projection from lat / lng
     * @param lon long
     * @param lat lat
     * @param dst optional destination point
     */
    transform(lon: number, lat: number, dst?: Point): Point;
    /**
     * Return transformed point to lat / lng from projection
     * @param mercatorX x coordinate
     * @param mercatorY y coordinate
     * @param dst optional destination point
     */
    inverseTransform(mercatorX: number, mercatorY: number, dst?: Point): Point;
    /**
     * Gets spheroid
     */
    getSpheroid(): number[];
    /**
     * Gets toWGS84
     */
    getToWGS84(): number[];
    /**
     * Gets prime meridian
     */
    getPrimeMeridian(): number;
    /**
     * Gets spheroid units
     */
    getSpheroidUnits(): AbstractUnit;
    /**
     * Parses Well-Known text projection representation into WKT coordinate system
     * @param str WKT text
     */
    static parse(str: string): any | WKT;
}
