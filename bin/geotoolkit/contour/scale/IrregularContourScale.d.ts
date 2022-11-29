import {ContourScale} from './ContourScale';
import {Range} from '../../util/Range';

/**
 * IrregularContourScale implements the ContourScale interface, and stores scale values at arbitrary levels.
 * Compare this to ContourRegularScale where the scale values are spaced at regular intervals.
 * Creates a customised contour scale, using the supplied values.
 */
export class IrregularContourScale extends ContourScale {
    /**
     * IrregularContourScale implements the ContourScale interface, and stores scale values at arbitrary levels.
     * Compare this to ContourRegularScale where the scale values are spaced at regular intervals.
     * Creates a customised contour scale, using the supplied values.
     * @param array Array of contour values. These can be out of order, but will be sorted into order.
     */
    constructor(array: any[] | Float32Array | Float64Array);
    /**
     * Gets the scale array.
     */
    getArray(): number[];
    /**
     * The number of intervals in this scale
     * (=#values + 1:  intervals to +/- infinity are included
     */
    getCount(): number;
    /**
     * Returns the full range of values in the contour scale if called with no argument or
     * returns the range of values represented by the supplied contour index.
     * @param index Optional Parameter. The contour index for which to find the z-value range.
     */
    getRange(index: number): Range;
    /**
     * Finds the contour index representing the supplied z-value.
     * @param zValue z-value for which contour index has to be found
     */
    getIndex(zValue: number): number;
}
