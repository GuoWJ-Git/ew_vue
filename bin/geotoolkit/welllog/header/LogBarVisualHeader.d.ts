import {LogVisualHeader} from './LogVisualHeader';
import {LogBarVisual} from '../LogBarVisual';
import {NumberFormat} from '../../util/NumberFormat';

/**
 * Define visual to render curve header
 */
export class LogBarVisualHeader extends LogVisualHeader {
    /**
     * Define visual to render curve header
     * @param options visual for the header or properties object
     * @param options.minvalueformat number format for min value
     * @param options.maxvalueformat number format for max value
     */
    constructor(options?: LogBarVisual | object | { minvalueformat?: NumberFormat; maxvalueformat?: NumberFormat; } );
    /**
     * Returns the number formatter for the min value
     */
    getMinValueFormat(): NumberFormat;
    /**
     * Returns the number formatter for the max value
     */
    getMaxValueFormat(): NumberFormat;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {minvalueformat: NumberFormat; maxvalueformat: NumberFormat} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.minvalueformat number format for min value
     * @param properties.maxvalueformat number format for max value
     */
    setProperties(properties: object | { minvalueformat?: NumberFormat; maxvalueformat?: NumberFormat; } ): this;
}
