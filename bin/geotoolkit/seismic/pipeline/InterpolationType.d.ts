/**
 * Enum of seismic pipeline interpolation types
 */
export enum InterpolationType {
    /**
     * Linear
     */
    Linear = 1,
    /**
     * Quadratic
     */
    Quadratic = 2,
    /**
     * Step interpolation
     */
    Step = 3,
    /**
     * Centered Step interpolation
     */
    CenteredStep = 4,
    /**
     * Cubic spline interpolation
     */
    Cubic = 5,
    /**
     * Logarithmic interpolation
     */
    Logarithmic = 6
}
