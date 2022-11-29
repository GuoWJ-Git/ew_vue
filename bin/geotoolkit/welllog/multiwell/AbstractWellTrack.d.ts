import {Group} from '../../scene/Group';
import {IBaseWellTrack} from './IBaseWellTrack';
import {Range} from '../../util/Range';
import {AbstractUnit} from '../../util/AbstractUnit';

/**
 * Define abstract well track
 */
export class AbstractWellTrack extends Group implements IBaseWellTrack {
    /**
     * Define abstract well track
     * @param options addition options
     */
    constructor(options?: object);
    /**
     * Sets well title
     * @param title well title
     */
    setTitle(title: string): this;
    /**
     * Return title
     */
    getTitle(): string;
    /**
     * Sets visible depth limits
     * By default it tries to fit depth based on the current visible limits of the well. If container limits
     * should be used then specify the last parameter to true
     * @example
     * ```javascript
     * Set visible limits to fit visible area of container
     * well.setVisibleDepthLimits(limits, true);
     * ```
     * @param fromIndex start depth or depth range
     * @param toIndex end range or option to fit to container visible limits
     * @param fitHeight option to fit to container visible limits
     */
    setVisibleDepthLimits(fromIndex: number | Range, toIndex?: number | boolean, fitHeight?: boolean): this;
    /**
     * Sets a depth scale factor.
     * @example
     * ```javascript
     * //  To set depth scale range as a ratio, you can use units as follows
     * const unitFactory = geotoolkit.util.UnitFactory.getInstance();
     * well.setDepthScale(30, unitFactory.getUnit("feet"), unitFactory.getUnit("inch")); //1 inch == 30 feet
     * ```
     * @param scale A number of depth units in device unit.
     * @param scaleUnit scale unit of the display. if it is not specified then it takes from track container
     * @param deviceUnit device unit of the display. if it is not specified then it takes from track container
     */
    setDepthScale(scale: number, scaleUnit?: AbstractUnit, deviceUnit?: AbstractUnit): this;
    /**
     * Converts depth to position inside of the bounds
     * @param depth depth
     */
    protected convertDepthToBounds(depth: number): number;
    /**
     * Return a depth range, which is visible now
     */
    getVisibleDepthLimits(): Range;
    /**
     * Return scale to device. How many scale units in one device unit.
     * @example
     * ```javascript
     * //  to get the current depth scale of well.
     * var uf = geotoolkit.util.UnitFactory.getInstance();
     * well.getDepthScale(uf.getUnit("cm"), uf.getUnit("cm"));
     * ```
     * @param scaleUnit scale unit of the display. if it is not specified then it takes from track container
     * @param deviceUnit device unit of the display. if it is not specified then it takes from track container
     */
    getDepthScale(scaleUnit?: AbstractUnit | string, deviceUnit?: AbstractUnit | string): number;
    /**
     * Returns depth or time range
     */
    getDepthLimits(): Range;
}
