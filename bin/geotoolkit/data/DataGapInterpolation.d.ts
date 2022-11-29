import {DataInterpolation} from './DataInterpolation';

/**
 * The DataGapInterpolation interface adds NaN values for a depth in the data greater than to a specified gap size.
 */
export class DataGapInterpolation extends DataInterpolation {
    /**
     * The DataGapInterpolation interface adds NaN values for a depth in the data greater than to a specified gap size.
     * @param gap gap
     */
    constructor(gap: number);
    /**
     * Sets the gap value to show discontinuity of the difference between sample is greater than specified value
     * @param gap gap
     */
    setGapValue(gap: number): this;
    /**
     * Returns the value of gap
     */
    getGapValue(): number;
}
