/**
 * Enum of Interpolation strategy
 */
export enum Strategy {
    /**
     * Interpolate zero for missing values
     */
    InterpolateZero = 0,
    /**
     * Interpolate null for missing values
     */
    InterpolateNull = 1,
    /**
     * Interpolate missing values using linear interpolation
     */
    InterpolateMissingValues = 2
}
