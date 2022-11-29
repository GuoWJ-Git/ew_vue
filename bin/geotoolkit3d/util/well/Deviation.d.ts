/**
 * This utility class contains functions to compute survey stations positions (North, East and TVD) from Inclination, Azimuth, MD.<br>
 */
export class Deviation {
    /**
     * This utility class contains functions to compute survey stations positions (North, East and TVD) from Inclination, Azimuth, MD.<br>
     */
    constructor();
    /**
     * Computes trajectory deviation using specified method.<br>
     * <br>
     * This function can use one of the built-in algorithms to compute x, y, tvd values from inclination, azimuth and measure depth.<br>
     * The returned object contains the trajectory's deviation.<br>
     * 'x' stands for East, 'y' for North and 'tvd' the depth.<br>
     * @param options The method options used for computing the deviation
     * @param options.mode The method to use to compute the deviation values
     * @param options.tolerance Epsilon used ot determine if a segment is a straight line
     * @param input The input values
     * @param input.md The measured depth values
     * @param input.inclination The inclination values in degrees
     * @param input.azimuth The azimuth values in degrees
     * @param start Initial deviation point, will not be used as an input for the method but as the starting point.
     * @param start.x Initial deviation x value
     * @param start.y Initial deviation y value
     * @param start.tvd Initial deviation tvd value
     */
    static computeDeviation(options: object | { mode?: Method; tolerance?: number; } , input: object | { md: number[]; inclination: number[]; azimuth: number[]; } , start?: object | { x?: number; y?: number; tvd?: number; } ): object;
}
/**
 * Built-in algorithms to compute cartesian coordinates from direction values.<br>
 * These methods compute north, east and tvd values using the inclination-azimuth-md values.<br>
 * The methods implemented use different approach to create a trajectory using the given parameters.
 */
export class Method extends Function {
    /**
     * Minimum curvature method computes the path between input points using the DogLeg Severity to calculate displacements.
     */
    static readonly MinimumCurvature: Method;
    /**
     * Radius of curvature method generates a circular arc to connect input points.
     */
    static readonly CurvatureRadius: Method;
    /**
     * Average Angle is a simple approach that uses basic trigonometric function to compute the well path
     */
    static readonly AverageAngle: Method;
    /**
     * Balanced tangential is an improved version of the Tangential method.
     */
    static readonly BalancedTangential: Method;
}
