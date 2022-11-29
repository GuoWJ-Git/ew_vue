/**
 * This utility class performs a various line simplification algorithms
 */
export class PolylineOptimizer {
    /**
     * This utility class performs a various line simplification algorithms
     */
    constructor();
    /**
     * Determines what points can be removed without compromising the polyline structure. (Douglas-Peucker algorithm)
     * @param x The x-coordinates of the points
     * @param y The y-coordinates of the points
     * @param size The size of the coordinate arrays to use
     * @param tolerancesArray The tolerance limit
     */
    static reducePoints(x: Float64Array, y: Float64Array, size: number, tolerancesArray: Float64Array | number[]): void;
}
/**
 * Enum of Polygon data types
 */
export enum ResultType {
    /**
     * The resulting tolerances (squared)
     */
    Tolerances = 0,
    /**
     * The resulting x-coordinates.
     */
    XCoordinates = 1,
    /**
     * The resulting y-coordinates
     */
    YCoordinates = 2,
    /**
     * The number of points in the result set
     */
    Cardinality = 3,
    /**
     * Association of input and output indices
     */
    IndexAssociations = 4
}
/**
 * Enum of clipping sides
 */
export enum ClippingSide {
    /**
     * The top side
     */
    Top = 0,
    /**
     * The right side
     */
    Right = 1,
    /**
     * The bottom side
     */
    Bottom = 2,
    /**
     * The left side
     */
    Left = 3
}
