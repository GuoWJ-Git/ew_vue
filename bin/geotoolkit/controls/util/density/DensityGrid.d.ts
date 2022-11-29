import {EventDispatcher} from '../../../util/EventDispatcher';
import {Dimension} from '../../../util/Dimension';
import {Rect} from '../../../util/Rect';
import {Transformation} from '../../../util/Transformation';

/**
 * Computes contour polygons by applying marching squares to a rectangular array of numeric values.
 * Each node contains a density value.
 * The grid coordinate system is orthogonal. The node indices may be only non-negative
 * (starting from 0). You may think about grid data as of two-dimensional array.
 */
export class DensityGrid extends EventDispatcher {
    /**
     * Computes contour polygons by applying marching squares to a rectangular array of numeric values.
     * Each node contains a density value.
     * The grid coordinate system is orthogonal. The node indices may be only non-negative
     * (starting from 0). You may think about grid data as of two-dimensional array.
     * @param options data
     * @param options.dimension virtual grid dimension
     * @param options.cellsize cell size
     * @param options.bandwidth band width
     * @param options.thresholds thresholds
     * @param options.x raw X values
     * @param options.y raw Y values
     * @param options.modellimits real model limits of X and Y values, by default it is calculated with using min and max values for specified data
     */
    constructor(options?: object | { dimension?: Dimension; cellsize?: number; bandwidth?: number; thresholds?: number | number[] | Function; x?: number[]; y?: number[]; modellimits?: Rect; } );
    /**
     * Return X values
     */
    getX(): number[];
    /**
     * Set X values
     * @param x x values
     */
    setX(x: number[]): this;
    /**
     * Return center of x values
     */
    getCenterX(): number;
    /**
     * Return Y values
     */
    getY(): number[];
    /**
     * Set Y values
     * @param y y values
     */
    setY(y: number[]): this;
    /**
     * Return center of y values
     */
    getCenterY(): number;
    /**
     * Return average distance from center
     */
    getAverageDistance(): number | null;
    /**
     * Set X Y values
     * @param x X values
     * @param y Y values
     */
    setValues(x: number[], y: number[]): this;
    /**
     * Return model limits
     */
    getModelLimits(): Rect;
    /**
     * Set model limits
     * @param modelLimits values model limits
     */
    setModelLimits(modelLimits: Rect | null): this;
    /**
     * Return grid dimension
     */
    getGridDimension(): Dimension;
    /**
     * Set grid dimension
     * @param dimension grid dimension
     */
    setGridDimension(dimension: Dimension): this;
    /**
     * Return grid size
     */
    getGridSize(): Dimension;
    /**
     * Return cell size
     */
    getCellSize(): number;
    /**
     * Set cell size
     * @param cellSize cell size
     */
    setCellSize(cellSize: number): this;
    /**
     * Return thresholds
     */
    getThresholds(): number | number[] | Function;
    /**
     * Set thresholds
     * @param thresholds thresholds
     */
    setThresholds(thresholds: number | number[] | Function): this;
    /**
     * Return band width
     */
    getBandwidth(): number;
    /**
     * Set  band width
     * @param bandwidth band width
     */
    setBandwidth(bandwidth: number): this;
    /**
     * Return grid to model transformation
     */
    getGridToModelTransformation(): Transformation;
    /**
     * Return density values
     */
    getDensityValues(): number[];
    /**
     * Return density grid value at specified n m grid indices
     * @param n n index, horizontal
     * @param m m index, vertical
     */
    getDensityValueAt(n: number, m: number): number;
    /**
     * Return density contours coordinates
     */
    getContours(): number[][] | null;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {dimension: Dimension; cellsize: number; bandwidth: number; thresholds: number; x: number[] | null; y: number[] | null; modellimits: Rect | null} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.dimension virtual grid dimension
     * @param properties.cellsize cell size
     * @param properties.bandwidth band width
     * @param properties.thresholds thresholds
     * @param properties.x raw X values
     * @param properties.y raw Y values
     * @param properties.modellimits real model limits of X and Y values, by default it is calculated with using min and max values for specified data
     */
    setProperties(properties?: object | { dimension?: Dimension; cellsize?: number; bandwidth?: number; thresholds?: number | number[] | Function; x?: number[]; y?: number[]; modellimits?: Rect; } ): this;
}
