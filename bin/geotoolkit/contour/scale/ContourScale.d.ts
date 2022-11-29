import {Range} from '../../util/Range';

/**
 * An abstract base class for the contour scale.
 *  The contour scale provides the information about sections of an altitude axis.
 */
export class ContourScale {
    /**
     * An abstract base class for the contour scale.
     *  The contour scale provides the information about sections of an altitude axis.
     */
    constructor();
    /**
     * Gets the total number of intervals within the scale.
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
    /**
     * Gets the scale properties
     */
    getProperties(): object | any;
    /**
     * Sets the scale properties
     * @param properties scale properties
     */
    setProperties(properties: object): this;
}
