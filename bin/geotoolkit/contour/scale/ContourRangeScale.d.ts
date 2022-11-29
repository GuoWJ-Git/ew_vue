import {RegularContourScale} from './RegularContourScale';
import {Range} from '../../util/Range';

/**
 * Extends RegularContourScale, adds the ability to show a single additional user specified level
 */
export class ContourRangeScale extends RegularContourScale {
    /**
     * Extends RegularContourScale, adds the ability to show a single additional user specified level
     * @param range The data range or another scale.
     * @param step The data range step.
     * @param showSingleLevel Whether the single level should be shown.
     * @param singleLevelValue The value of the single level.
     */
    constructor(range: Range | ContourRangeScale, step?: number, showSingleLevel?: boolean, singleLevelValue?: number);
    /**
     * Gets the step value.
     */
    getStep(): number;
    /**
     * Gets the single level value.
     */
    getSingleLevelValue(): number;
    /**
     * Gets the single level index.
     */
    getSingleLevelIndex(): number;
    /**
     * Gets the flag for the single label visibility
     */
    getShowSingleLevel(): boolean;
    /**
     * Gets the flag indicating whether to separate the single level.
     */
    getSeparateSingleLevel(): boolean;
    /**
     * Gets the factor which is used to calculate if single level will be separate
     */
    getSeparateSingleLevelFactor(): number;
    /**
     * Sets the factor which is used to calculate if single level will be separate
     * @param factor factor
     */
    setSeparateSingleLevelFactor(factor: number): this;
    /**
     * Gets the scale array.
     */
    getArray(): number[];
    /**
     * Gets the total number of intervals within the scale.
     */
    getCount(): number;
    /**
     * Returns the full range of values in the contour scale if called with no argument or
     * returns the range of values represented by the supplied contour index.
     * @param index Optional Parameter. The contour index for which to find the z-value range.
     */
    getRange(index?: number): Range;
    /**
     * Finds the contour index representing the supplied z-value.
     * @param zValue z-value for which contour index has to be found
     */
    getIndex(zValue: number): number;
}
