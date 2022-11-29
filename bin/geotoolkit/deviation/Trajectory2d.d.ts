import {AbstractUnit} from '../util/AbstractUnit';
import {Point} from '../util/Point';

/**
 * Class Trajectory2d is used to define trajectory and it provides coordinates of each point along the planned well path.
 * Trajectory contains MD- (measured depth), X- and Y-coordinates along itself.<br>
 * If measured depth is not provided it is calculated from 0 along the path.
 */
export class Trajectory2d {
    /**
     * Class Trajectory2d is used to define trajectory and it provides coordinates of each point along the planned well path.
     * Trajectory contains MD- (measured depth), X- and Y-coordinates along itself.<br>
     * If measured depth is not provided it is calculated from 0 along the path.
     * @param x x-coordinate of the transformed stations or object containing data and options
     * @param x.data data section
     * @param x.data.x x-coordinate of the transformed stations or object containing data and options
     * @param x.data.y y-coordinate of the transformed stations
     * @param x.data.d d-measured depths array for each station
     * @param x.options options section
     * @param x.options.approximate flag set to enable approximation of the trajectory along the path
     * @param x.options.depthinterval threshold depth interval
     * @param x.options.units units options section
     * @param x.options.units.distance distance (vertical and horizontal) unit
     * @param x.options.units.x horizontal unit
     * (use if units for "x" and "y" are different)
     * @param x.options.units.y vertical unit
     * (use if units for "x" and "y" are different)
     * @param y y-coordinate of the transformed stations
     * @param d d-measured depths array for each station
     * @param minDepth deprecated (since 2020 (3.0)). calculated minimal MD
     * @param maxDepth deprecated (since 2020 (3.0)). calculated maximal MD
     * @param approximate deprecated (since 2021.1 (3.3)). flag set to enable approximation of the trajectory along the path
     */
    constructor(x: number[] | object | { data?: object | { x?: number[]; y?: number[]; d?: number[]; } ; options?: object | { approximate?: boolean; depthinterval?: number; units?: object | { distance?: string | AbstractUnit; x?: string | AbstractUnit; y?: string | AbstractUnit; } ; } ; } , y?: number[], d?: number[], minDepth?: number, maxDepth?: number, approximate?: boolean);
    /**
     * Creates or gets geotoolkit.deviation.Trajectory2d instance from object
     * @param object object can be in format of constructor
     * @param object.x x-ordinates
     * @param object.y y-ordinates
     * @param object.id trajectory 'id'
     */
    static fromObject(object?: object | { x?: any[]; y?: any[]; id?: number; }  | Trajectory2d | null): Trajectory2d | null;
    /**
     * Interpolates {x;y}-point at MD-value
     * @param md MD-value
     * @param pt point to put {x;y} in
     */
    interpolateXY(md: number, pt?: Point): Point | null;
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
     * Creates trajectory from arrays of measured depths,inclinations and azimuths.
     * @param md an array of the measured depth or object containing data and options
     * @param md.data data section
     * @param md.data.md md-values array
     * @param md.data.inclination inclination-values array
     * @param md.options options section
     * @param md.options.rightDeviation rightDeviation means trajectory goes from north-west to south-east with
     * positive inclination angle
     * @param md.options.start start index
     * @param md.options.filter if true, perform filtering of redundant points.
     * @param md.options.approximate flag set to enable approximation of the trajectory along the path
     * @param md.options.depthinterval threshold depth interval
     * @param md.options.units units options section
     * @param md.options.units.distance distance (TVD and horizontal) unit
     * @param md.options.units.angle angle unit
     * @param inclination an array of the inclinations
     * @param azimuth an array of azimuths. (not used now)
     * @param rightDeviation rightDeviation means trjajectory goes from north-west to south-east with
     * positive inclination angle
     * @param start start index
     * @param filter if true, perform filtering of redundant points.
     * Removes any points, which could be removed safely, keeping the trajectory geometry and measured depth binding:<br>
     * 1. If two points have the same coordinates, it keeps the second point only <br>
     * 2. If two points have the same MD value, it keeps the second point only <br>
     * 3. If three points belong to a same line in a natural order (i.e. second point positioned between 1st and 3rd),<br>
     * and MD value of middle point corresponds to the point position, it removes the middle point<br>
     * NOTE: The rules are applied recursively
     * @param approximate flag set to enable approximation of the trajectory along the path
     */
    static createTrajectory(md: number[] | object | { data: object | { md: number[]; inclination: number[]; } ; options?: object | { rightDeviation?: boolean; start?: number; filter?: boolean; approximate?: boolean; depthinterval?: number; units?: object | { distance?: string | AbstractUnit; angle?: string | AbstractUnit; } ; } ; } , inclination: number[], azimuth: number[], rightDeviation?: boolean, start?: number, filter?: boolean, approximate?: boolean): Trajectory2d;
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
     * Checks for trajectories equality
     * @param trajectory other trajectory
     */
    equals(trajectory: Trajectory2d): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {options: {approximate: boolean; depthinterval: number; units: {distance: string | AbstractUnit; x: string | AbstractUnit; y: string | AbstractUnit}}} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param props JSON containing properties
     * @param props.data data section
     * @param props.data.x x-coordinate of the transformed stations or object containing data and options
     * @param props.data.y y-coordinate of the transformed stations
     * @param props.data.d d-measured depths array for each station
     * @param props.options options
     * @param props.options.approximate flag set to enable approximation of the trajectory along the path
     * @param props.options.depthinterval threshold depth interval
     * @param props.options.units units options section
     * @param props.options.units.distance distance (vertical and horizontal) unit
     * @param props.options.units.x horizontal unit
     * (use if units for "x" and "y" are different)
     * @param props.options.units.y vertical unit
     * (use if units for "x" and "y" are different)
     */
    setProperties(props: object | { data?: object | { x?: number[]; y?: number[]; d?: number[]; } ; options?: object | { approximate?: boolean; depthinterval?: number; units?: object | { distance?: string | AbstractUnit; x?: string | AbstractUnit; y?: string | AbstractUnit; } ; } ; } ): this;
}
