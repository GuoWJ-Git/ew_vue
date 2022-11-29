/**
 * This utility class contains functions to compute survey stations angles (Inclination, Azimuth, MD) from North, East and TVD values.<br>
 */
export class Direction {
    /**
     * This utility class contains functions to compute survey stations angles (Inclination, Azimuth, MD) from North, East and TVD values.<br>
     */
    constructor();
    /**
     * Computes the direction values using specified method.<br>
     * <br>
     * This function can use one of the built-in algorithms to compute inclination (degrees), azimuth (degrees), md values from x, y and tvd.<br>
     * The returned object contains the trajectory's directions.<br>
     * 'x' stands for East, 'y' for North and 'tvd' the depth.<br>
     * @param options The method options used for computing the deviation
     * @param options.mode The method to use to compute the direction values
     * @param options.tolerance Epsilon used ot determine if a segment is a straight line
     * @param input The input values
     * @param input.tvd The true vertical depth values
     * @param input.x The x values
     * @param input.y The y values
     * @param start Initial direction point, will not be used as an input for the method but as the reference direction.
     * @param start.inclination Initial inclination in radians
     * @param start.azimuth Initial azimuth in radians
     * @param start.md Initial measured depth value
     */
    static computeDirection(options: object | { mode?: Method; tolerance?: number; } , input: object | { tvd: number[]; x?: number[]; y?: number[]; } , start?: object | { inclination?: number; azimuth?: number; md?: number; } ): object;
}
/**
 * Built-in algorithms to compute direction values from cartesian coordinates.<br>
 * These methods compute the inclination-azimuth-md values from the north, east and tvd values.<br>
 * Based on the inverse transformation of the corresponding DeviationUtil.Method algorithm.
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
