import {AbstractContourDataSource} from './AbstractContourDataSource';

/**
 * This 'interface' class extends abstract definition of contour data, which
 * includes information about model limits and contour grid.
 * This interface can be implemented for ZMAP and TSURF data
 */
export class ContourDataSource extends AbstractContourDataSource {
    /**
     * This 'interface' class extends abstract definition of contour data, which
     * includes information about model limits and contour grid.
     * This interface can be implemented for ZMAP and TSURF data
     */
    constructor();
    /**
     * Sets the object name
     * @param name The name of the object
     */
    setObjectName(name: string): this;
    /**
     * Gets the object name
     */
    getObjectName(): string;
    /**
     * Gets the minimum z-value.
     */
    getMin(): number;
    /**
     * Sets the minimum z-value.
     * @param min The minimum of the data.
     */
    setMin(min: number): this;
    /**
     * Gets the maximum z-value.
     */
    getMax(): number;
    /**
     * Sets the maximum z-value.
     * @param max The maximum of the data
     */
    setMax(max: number): this;
    /**
     * Updates area.
     */
    updateArea(): void;
    /**
     * Gets the type of grid.
     */
    getGridType(): number;
}
/**
 * The type of contour grid.
 */
export enum ContourGridType {
    /**
     * The triangular grid type
     */
    TriangularGrid = 0,
    /**
     * The rectangular grid type
     */
    RectangularGrid = 1,
    /**
     * The unknown grid type
     */
    Unknown = 2
}
