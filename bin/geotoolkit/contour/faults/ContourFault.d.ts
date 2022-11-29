/**
 * Stores points (in model coordinates) and other data for fault.
 */
export class ContourFault {
    /**
     * Stores points (in model coordinates) and other data for fault.
     * @param px array of x-coordinates.
     * @param py array of y-coordinates.
     * @param pl array of left values.
     * @param pr array of right values.
     * @param closed 
     */
    constructor(px: Float64Array, py: Float64Array, pl?: Float64Array | boolean, pr?: Float64Array | null, closed?: boolean | null);
    /**
     * Gets the fault size
     */
    getSize(): number;
    /**
     * Gets the fault implicit status
     */
    getIsImplicit(): boolean;
    /**
     * Returns true if fault is closed or false if fault is open.
     */
    getClosed(): boolean;
    /**
     * Gets a copy left values.
     */
    getLeft(): Float64Array;
    /**
     * Gets a copy left values.
     */
    getRight(): Float64Array;
    /**
     * Gets a copy of the X values.
     */
    getX(): Float64Array;
    /**
     * Gets a copy of the Y values.
     */
    getY(): Float64Array;
}
