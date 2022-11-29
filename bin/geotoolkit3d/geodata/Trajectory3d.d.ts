import {EventDispatcher} from '../../geotoolkit/util/EventDispatcher';
import {Vector3} from '../THREE';
import {TrajectoryValue} from './TrajectoryValue';

/**
 * Class Trajectory3d is used to define trajectory and it provides coordinates of each point along the planned well path.
 * Trajectory contains MD- (measured depth), X- and Y-coordinates along itself.<br>
 * If measured depth is not provided it is calculated from 0 along the path.
 */
export class Trajectory3d extends EventDispatcher {
    /**
     * Class Trajectory3d is used to define trajectory and it provides coordinates of each point along the planned well path.
     * Trajectory contains MD- (measured depth), X- and Y-coordinates along itself.<br>
     * If measured depth is not provided it is calculated from 0 along the path.
     * @param x x-coordinate of the transformed stations
     * @param y y-coordinate of the transformed stations
     * @param z z-coordinate of the transformed stations
     * @param origin if xyz coordinates are in deviation from origin
     * @param d d-measured depths array for each station will linear calculate estimated depths if not supplied
     * @param values values that are associated with this trajectory
     */
    constructor(x: number[], y: number[], z: number[], origin?: Vector3, d?: number[], values?: TrajectoryValue[]);
    /**
     * Gets x-value at specified position
     * @param index index of the station
     */
    getX(index: number): number;
    /**
     * Gets y-value at specified position
     * @param index index of the station
     */
    getY(index: number): number;
    /**
     * Gets z-value at specified position
     * @param index index of the station
     */
    getZ(index: number): number;
    /**
     * Gets MD-value at specified position
     * @param index index of the station
     */
    getDepth(index: number): number;
    /**
     * Gets number of stations in the trajectory
     */
    count(): number;
    /**
     * Gets calculated minimal MD
     */
    minDepth(): number;
    /**
     * Gets calculated maximal MD
     */
    maxDepth(): number;
    /**
     * Gets calculated minimal x-value (convenience method)
     */
    getMinX(): number;
    /**
     * Gets calculated minimal y-value (convenience method)
     */
    getMinY(): number;
    /**
     * Gets calculated maximal x-value (convenience method)
     */
    getMaxX(): number;
    /**
     * Gets calculated maximal y-value (convenience method)
     */
    getMaxY(): number;
    /**
     * Gets calculated minimal Z-value (convenience method)
     */
    getMinZ(): number;
    /**
     * Gets calculated maximal Z-value (convenience method)
     */
    getMaxZ(): number;
    /**
     * Gets calculated minimal Depth (convenience method)
     */
    getMinDepth(): number;
    /**
     * Gets calculated maximal Depth (convenience method)
     */
    getMaxDepth(): number;
    /**
     * Gets origin
     */
    getOrigin(): Vector3;
    /**
     * Gets the points from start to end depths - will return all depths if no parameters passed
     * @param start depth to start if returns everything before end
     * @param end depth to end
     * @param radii radii for generating on depths (depths from start to end)
     */
    getCoordinatesForDepths(start?: number, end?: number, radii?: {radius: number, depth: number}[]): {x: number[]; y: number[]; z: number[]; widths: number[] | null; heights: number[] | null} | object;
    /**
     * gets the direction of the trajectory at the requested depth
     * @param location depth to start if returns everything before end
     * @param preferForward in the case where a depth is on a real position, prefers the forward direction
     */
    getDirectionAtDepth(location?: number, preferForward?: boolean): Vector3;
    /**
     * Gets the interpolated position at the requested depth
     * @param location depth for position
     */
    getCoordinateForDepth(location?: number): Vector3;
    /**
     * Gets the points from start to end depths - will return all depths if no parameters passed
     * @param valueName name of the value to get
     * @param start depth to start if returns everything before end
     * @param end depth to end
     * @param radii radii for generating on depths (depths from start to end)
     */
    getValuesForDepths(valueName?: number, start?: number, end?: number, radii?: {radius: number, depth: number}[]): number[];
}
