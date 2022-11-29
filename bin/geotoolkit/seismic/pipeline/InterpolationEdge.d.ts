/**
 * Enum of interpolation edge behavior, specify how interpolation will handle edges (beginning and end) of data
 */
export enum InterpolationEdge {
    /**
     * Use a value of 0 when interpolation needs value beyond the edge of the data
     */
    Zero = 0,
    /**
     * Duplicate the nearest value when interpolation needs value beyond the edge of the data
     */
    Duplicate = 1
}
