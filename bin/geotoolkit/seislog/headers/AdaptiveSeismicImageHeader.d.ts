import {AdaptiveLogVisualHeader} from '../../welllog/header/AdaptiveLogVisualHeader';
import {SeismicImage} from '../../seismic/image/SeismicImage';
import {NumberFormat} from '../../util/NumberFormat';

/**
 */
export class AdaptiveSeismicImageHeader extends AdaptiveLogVisualHeader {
    /**
     * @param options options
     */
    constructor(options?: SeismicImage | object);
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: AdaptiveSeismicImageHeader): this;
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
}
