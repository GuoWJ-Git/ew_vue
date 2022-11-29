import {AdaptiveLogVisualHeader} from './AdaptiveLogVisualHeader';
import {LogDiscreteCurve} from '../LogDiscreteCurve';
import {NumberFormat} from '../../util/NumberFormat';
import {Orientation} from '../../util/Orientation';

/**
 * Adaptive header for LogDiscreteCurve visual
 */
export class AdaptiveLogDiscreteCurveVisualHeader extends AdaptiveLogVisualHeader {
    /**
     * Adaptive header for LogDiscreteCurve visual
     * @param options visual or properties object
     * @param options.minvalueformat min value number format
     * @param options.maxvalueformat max value number format
     * @param options.orientation header orientation
     * @param options.curvenamevisible the curve name visibility flag
     */
    constructor(options: LogDiscreteCurve | object | { minvalueformat?: NumberFormat; maxvalueformat?: NumberFormat; orientation?: Orientation; curvenamevisible?: boolean; } );
    /**
     * Sets header orientation
     * @param orientation header orientation
     */
    setOrientation(orientation: Orientation): this;
    /**
     * Returns header orientation
     */
    getOrientation(): Orientation;
    /**
     * Set the visibility of curve name
     * @param visible The visibility of the curve name
     */
    setCurveNameVisible(visible: boolean): this;
    /**
     * Gets visibility of curve name
     */
    getCurveNameVisible(): boolean;
    /**
     * Returns the number formatter for the min value
     */
    getMinValueFormat(): NumberFormat;
    /**
     * Returns the number formatter for the max value
     */
    getMaxValueFormat(): NumberFormat;
    /**
     * Sets the number formatter for the min value
     * @param format number format
     */
    setMinValueFormat(format: NumberFormat): this;
    /**
     * Sets the number formatter for the max value
     * @param format number format
     */
    setMaxValueFormat(format: NumberFormat): this;
    /**
     * Sets all properties
     * @param properties properties
     * @param properties.minvalueformat min value number format
     * @param properties.maxvalueformat max value number format
     * @param properties.orientation header orientation
     * @param properties.curvenamevisible the curve name visibility flag
     */
    setProperties(properties: object | { minvalueformat?: NumberFormat; maxvalueformat?: NumberFormat; orientation?: Orientation; curvenamevisible?: boolean; } ): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {minvalueformat: NumberFormat; maxvalueformat: NumberFormat; orientation: Orientation; curvenamevisible: boolean} | any;
}
