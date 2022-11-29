/**
 * Abstract class for Projections (eg. LatLongProjection)
 */
export class AbstractProjection {
    /**
     * Abstract class for Projections (eg. LatLongProjection)
     */
    constructor();
    /**
     * Gets the inverse projection for this projection.
     */
    getReverse(): AbstractProjection;
    /**
     * Gets the string identifier for this projection
     */
    getId(): string;
    /**
     * Projects a single 3D point. This method allocates and
     * returns the array of projected coordinates in x, y order.
     * @param x The x-coordinate
     * @param y The y-coordinate
     */
    projectPoint(x: number, y: number): Float64Array;
    /**
     * Projects a set of points in 3D space. This method replaces
     * the data in the source arrays with projected data and doesn't
     * allocate any memory.
     * @param x The array of x-coordinates
     * @param y The array of y-coordinates
     * @param number The number of coordinates in the x and y arrays.
     */
    projectPoints(x: Float64Array, y: Float64Array, number: number): void;
    /**
     * Projects a set of points in 3D space. This method allocates and returns the
     * 2d array with projected data. The first index corresponds to x ordinate.
     * The second index corresponds to the index of the point.
     * @param x The array of x-coordinates
     * @param y The array of y-coordinates
     * @param number The number of coordinates in the x and y arrays.
     */
    projectPath(x: Float64Array, y: Float64Array, number: number): Float64Array[];
    /**
     * Gets the projection properties
     */
    getProperties(): object | any;
    /**
     * Sets the projection properties
     * @param properties projection properties
     */
    setProperties(properties: object): this;
}
