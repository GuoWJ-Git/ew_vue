import {NumericTickGenerator} from './NumericTickGenerator';
import {Orientation} from '../util/Orientation';

/**
 * Logarithmic tick generator with automatic spacing of ticks and labels.
 */
export class AdaptiveLogTickGenerator extends NumericTickGenerator {
    /**
     * Logarithmic tick generator with automatic spacing of ticks and labels.
     * @param options options
     * @param options.rounded specify how to use powers of ten
     * @param options.orientation orientation
     */
    constructor(options?: object | { rounded?: boolean; orientation?: Orientation | string; }  | boolean);
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {orientation: Orientation; rounded: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.orientation orientation
     * @param properties.rounded rounded
     */
    setProperties(properties: object | { orientation?: Orientation | string; rounded?: boolean; } ): this;
}
