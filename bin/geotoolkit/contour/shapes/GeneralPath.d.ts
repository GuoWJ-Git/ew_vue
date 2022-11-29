/**
 * Enum of Polygon data types
 */
export enum PolygonDataType {
    /**
     * The polygon x-coordinates.
     */
    xCoordinates = 0,
    /**
     * The polygon y-coordinates
     */
    yCoordinates = 1,
    /**
     * The polygon data limits
     */
    dataLimits = 2,
    /**
     * Whether polygon intersects with visible limits
     */
    isVisible = 3,
    /**
     * The error in model coordinates that results from removing a given point.
     */
    polygonTolerances = 4
}
