import {Rect} from '../../util/Rect';

/**
 * Stores the x,y grid extents for a contour grid object.
 */
export class GridRange {
    /**
     * Stores the x,y grid extents for a contour grid object.
     * @param left start index for coordinates arrays.
     * @param bottom start index for coordinates arrays.
     * @param right start index for coordinates arrays.
     * @param top start index for coordinates arrays.
     */
    constructor(left?: number | GridRange, bottom?: number, right?: number, top?: number);
    /**
     * The left extent of this grid range
     */
    getLeft(): number;
    /**
     * The right extent of this grid range
     */
    getRight(): number;
    /**
     * The bottom extent of this grid range
     */
    getBottom(): number;
    /**
     * The top extent of this grid range
     */
    getTop(): number;
    /**
     * The width of this grid range
     */
    getWidth(): number;
    /**
     * The height of this grid range
     */
    getHeight(): number;
    /**
     * Sets the range for this grid
     * @param left Left range extent or GridRange
     * @param bottom Bottom range extent
     * @param right Right range extent
     * @param top Top range extent
     */
    setGridRange(left: number | GridRange, bottom: number, right: number, top: number): this;
    /**
     * Checks if the supplied point or range is contained within this one.
     * @param x X-coordinate or gridRange
     * @param y Y-coordinate
     */
    contains(x: number | GridRange, y: number): boolean;
    /**
     * Determines whether this grid range intersects with the supplied grid range.
     * @param range The grid range to check against
     */
    intersects(range: GridRange): boolean;
    /**
     * Computes the intersection between this grid range and the specified grid range.
     * @param range The grid range
     */
    intersection(range: GridRange): GridRange;
    /**
     * Determines if this range is empty
     */
    isEmpty(): boolean;
    /**
     * Resets this grid range to be empty: Sets the size to zero, and the position to (0,0)
     */
    reset(): void;
    /**
     * Grid Range as a cgRect object
     */
    getRect(): Rect;
}
