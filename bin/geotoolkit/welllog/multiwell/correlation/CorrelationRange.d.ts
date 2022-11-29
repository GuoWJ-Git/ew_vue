import {Correlation} from './Correlation';
import {FillStyle} from '../../../attributes/FillStyle';
import {RgbaColor} from '../../../util/RgbaColor';
import {Pattern} from '../../../attributes/Pattern';
import {Range} from '../../../util/Range';

/**
 * Define polygon correlation to connect two ranges of depths on different wells
 */
export class CorrelationRange extends Correlation {
    /**
     * Define polygon correlation to connect two ranges of depths on different wells
     * @param options additional options
     * @param options.fillstyle fill style
     * @param options.leftstartdepth start depth on left well
     * @param options.rightstartdepth start depth on right well
     * @param options.leftenddepth end depth of left well
     * @param options.rightenddepth end depth of right well
     * @param rightStartDepth deprecated since 2021.1 (3.3), start depth on right well
     * @param leftEndDepth deprecated since 2021.1 (3.3), end depth of left well
     * @param rightEndDepth deprecated since 2021.1 (3.3), end depth of right well
     * @param props deprecated since 2021.1 (3.3), use first argument instead
     */
    constructor(options?: number | object | { fillstyle?: FillStyle | object | string; leftstartdepth?: number; rightstartdepth?: number; leftenddepth?: number; rightenddepth?: number; } , rightStartDepth?: number, leftEndDepth?: number, rightEndDepth?: number, props?: any);
    /**
     * Sets correlation fill style to fill range from two set of depths
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string, merge?: boolean): this;
    /**
     * Return the current fill style for correlation
     */
    getFillStyle(): FillStyle;
    /**
     * Set start depth for correlation
     * @param leftDepth depth for left well
     * @param rightDepth depth for right well
     */
    setStartDepth(leftDepth: number, rightDepth: number): this;
    /**
     * Set end depth for correlation
     * @param leftDepth depth for left well
     * @param rightDepth depth for right well
     */
    setEndDepth(leftDepth: number, rightDepth: number): this;
    /**
     * Returns depth range for the left well
     */
    getLeftDepthRange(): Range;
    /**
     * Returns depth range for the right well
     */
    getRightDepthRange(): Range;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {fillstyle: FillStyle; leftstartdepth: number; rightstartdepth: number; leftenddepth: number; rightenddepth: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.fillstyle fill style
     * @param properties.leftstartdepth start depth on left well
     * @param properties.rightstartdepth start depth on right well
     * @param properties.leftenddepth end depth of left well
     * @param properties.rightenddepth end depth of right well
     */
    setProperties(properties: object | { fillstyle?: FillStyle | object | string; leftstartdepth?: number; rightstartdepth?: number; leftenddepth?: number; rightenddepth?: number; } ): this;
}
