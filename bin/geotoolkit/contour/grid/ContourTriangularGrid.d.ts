import {ContourAbstractGrid} from './ContourAbstractGrid';
import {Transformation} from '../../util/Transformation';
import {Rect} from '../../util/Rect';
import {Point} from '../../util/Point';
import {GridRange} from './GridRange';

/**
 * Contour grid built on a set of triangles.
 */
export class ContourTriangularGrid extends ContourAbstractGrid {
    /**
     * Contour grid built on a set of triangles.
     */
    constructor();
    /**
     * Adds a value that will serve as an indicator for a hole in data grid.
     * It is assumed that grid data may have more then one hole value.
     * @param holeValue The hole value
     */
    addHoleValue(holeValue: number): void;
    /**
     * Removes all grid data
     */
    clear(): void;
    /**
     * Clears grid data
     */
    clearGrid(): void;
    /**
     * Sets data for grid. This is the more complicated method of two setTriangles
     * but is faster and has more advanced border visualization handling.
     * @param pointsX array of x-coordinates for points.
     * @param pointsY array of y-coordinates for points.
     * @param pointsZ array of altitude values for points.
     * @param nPoints The number of points.
     * @param edgesPoint1 Array of first point index for edges.
     * @param edgesPoint2 Array of second point index for edges.
     * @param nEdges The number of edges.
     * @param trianglesEdgeAB Array of first edge index for triangles.
     * @param trianglesEdgeBC Array of second edge index for triangles.
     * @param trianglesEdgeCA Array of third edge index for triangles.
     * @param nTriangles The number of triangles.
     * @param defaultBorder The default border.
     * @param borderEdges The border edges (can be null).
     * @param nBorderEdges The number of border edges.
     */
    setTrianglesAdvanced(pointsX: Float64Array, pointsY: Float64Array, pointsZ: Float64Array, nPoints: number, edgesPoint1: Int32Array, edgesPoint2: Int32Array, nEdges: number, trianglesEdgeAB: Int32Array, trianglesEdgeBC: Int32Array, trianglesEdgeCA: Int32Array, nTriangles: number, defaultBorder: boolean, borderEdges: Int32Array, nBorderEdges: number): this;
    /**
     * Sets data for grid.
     * @param pointsX array of x-coordinates for points.
     * @param pointsY array of y-coordinates for points.
     * @param pointsZ array of altitude values for points.
     * @param nPoints The number of points.
     * @param trianglesPointsA Array of first point index for triangles.
     * @param trianglesPointsB Array of second point index for triangles.
     * @param trianglesPointsC Array of third point index for triangles.
     * @param nTriangles The number of triangles.
     * @param defaultBorder if true, all edges that belong to
     * only one triangle are included into contour border for visualization
     */
    setTrianglesSimple(pointsX: Float64Array, pointsY: Float64Array, pointsZ: Float64Array, nPoints: number, trianglesPointsA: Int32Array, trianglesPointsB: Int32Array, trianglesPointsC: Int32Array, nTriangles: number, defaultBorder: boolean): this;
    /**
     * Gets the number of points
     */
    getNumberPoints(): number;
    /**
     * Value current altitude values for point
     * @param indexPoint The number value point
     */
    getPointValue(indexPoint: number): number;
    /**
     * Sets the maximum value in the contour grid
     * @param value The new maximum value
     */
    setMaxValue(value: number): this;
    /**
     * Gets the maximum value in the contour grid.
     * If the max value has not been set this method
     * will scan whole grid to find maximum altitude
     * value (but only once, then it will remember it).
     */
    getMaxValue(): number;
    /**
     * Sets the minimum value in the contour grid
     * @param value The new maximum value
     */
    setMinValue(value: number): this;
    /**
     * Gets the minimum value in the contour grid.
     * If the max value has not been set this method
     * will scan whole grid to find maximum altitude
     * value (but only once, then it will remember it).
     */
    getMinValue(): number;
    /**
     * Get grid to model mapping transformation for triangle grid data.
     */
    getTriangleGrid2ModelTransformation(): Transformation;
    /**
     * Gets the model limits of the data
     */
    getModelLimits(): Rect;
    /**
     * Gets the altitude at the give model point location.
     * @param modelPoint The model point
     */
    getValueAtModelPoint(modelPoint: Point): number;
    /**
     * Gets the Grid Range (Reserved. Always returns SetGridRange(0,0,0,0))
     */
    getRange(): GridRange;
    /**
     * Sets the Grid Range (Reserved. Always sets SetGridRange(0,0,0,0))
     * @param gridRange The grid z-value range.
     */
    setRange(gridRange: GridRange): void;
    /**
     * This property gets the duplicates removal mode for the triangular grid.
     * If set to TRUE, then the system will attempt to fix errors in input data.
     * This feature is enabled by default.
     */
    getRemoveDuplicatePoints(): boolean;
    /**
     * This property enables/disables duplicates removal from triangular grid.
     * If set to TRUE, then the system will attempt to fix errors in input data.
     * This feature is enabled by default.
     * @param removeDuplicatePoints If True duplicates will be removed.
     */
    setRemoveDuplicatePoints(removeDuplicatePoints: boolean): this;
    /**
     * Returns grid rebuild state.
     */
    needRebuild(): boolean;
    /**
     * Gets the build range
     * @param netRange The range for the net
     * @param realRange The range for the data
     */
    getBuildRange(netRange: GridRange, realRange: GridRange): void;
    /**
     * Gets the X points.
     */
    getPointsX(): Float64Array;
    /**
     * Gets the Y points.
     */
    getPointsY(): Float64Array;
    /**
     * Gets the Z points.
     */
    getPointsZ(): Float64Array;
}
