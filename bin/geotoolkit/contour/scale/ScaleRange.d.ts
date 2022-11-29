import {Range} from '../../util/Range';

/**
 * The ScaleRange class is used to store the range of values represented by a particular contour index.
 *  This is used by ContourScale to return these intervals.
 * @deprecated since 2021 (3.2), use geotoolkit.util.Range instead
 */
export class ScaleRange extends Range {
    /**
     * The ScaleRange class is used to store the range of values represented by a particular contour index.
     *  This is used by ContourScale to return these intervals.
     * @param low The minimum of the scale range.
     * @param high The maximum of the scale range.
     */
    constructor(low?: number | object, high?: number);
}
