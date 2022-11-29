import {TickGenerator, labelFormatHandler} from './TickGenerator';
import {NumberFormat} from '../util/NumberFormat';
import {Locale} from '../util/Locale';

/**
 * Define an abstract class for numeric tick generators
 */
export class NumericTickGenerator extends TickGenerator {
    /**
     * Define an abstract class for numeric tick generators
     * @param options An object containing the properties to set
     * @param options.labelformat label format, label format to be applied to all grades
     * @param options.major An object containing major grade properties
     * @param options.major.labelformat major label format
     * @param options.minor An object containing minor grade properties
     * @param options.minor.labelformat minor label format
     * @param options.edge An object containing edge grade properties
     * @param options.edge.labelformat edge label format
     * @param options.intermediate An object containing intermediate grade properties
     * @param options.intermediate.labelformat intermediate label format
     * @param options.formatlabeleventhandler formatlebeleventhandler
     * @param options.maxlabeleventhandler maxlabeleventhandler
     */
    constructor(options?: object | { labelformat?: any | NumberFormat; major?: object | { labelformat?: any | NumberFormat; } ; minor?: object | { labelformat?: any | NumberFormat; } ; edge?: object | { labelformat?: any | NumberFormat; } ; intermediate?: object | { labelformat?: any | NumberFormat; } ; formatlabeleventhandler?: Function; maxlabeleventhandler?: Function; } );
    /**
     * Sets label format
     * @example
     * ```javascript
     * // to set the precision of the tickGenerator labels use the following
     * import {NumberFormat} from '@int/geotoolkit/util/NumberFormat';
     * ...
     * axis.getTickGenerator().setLabelFormat('major', new NumberFormat({'maximumfractiondigits':2}));
     * ```
     * @param tickGrade grade to set format: "major", "minor", "edge"
     * @param format number format for label
     */
    setLabelFormat(tickGrade: string, format: NumberFormat): this;
    /**
     * Returns label format
     * @param tickGrade grade to get format: "major", "minor", "edge"
     */
    getLabelFormat(tickGrade: string): NumberFormat | null;
    /**
     * Sets locale
     * @param locale locale
     */
    setLocale(locale: Locale | string): this;
    /**
     * Return the current locale
     */
    getLocale(): Locale | string;
    /**
     * Format label
     * @param tickType "edge" or "major" or "minor"
     * @param modelValue model coordinate position
     */
    protected formatLabelInternal(tickType: string, modelValue: number): string | null;
    /**
     * Sets format label handler
     * @param handler handler is called to specify format of the label
     */
    setFormatLabelHandler(handler: Function | labelFormatHandler): this;
    /**
     * Sets handler to return max label values
     * @example
     * ```javascript
     * Return text
     * tickGenerator.setMaxLabelHandler((axis, tickInfo, orient, fromValue, toValue, array) => {
     *   return [{'type': 'major', 'value': 'Buffalo Gap'}];
     * });
     * ```
     * @example
     * ```javascript
     * Return number
     * tickGenerator.setMaxLabelHandler((axis, tickInfo, orient, fromValue, toValue, array) => {
     *   return [{'type': 'major', 'value': 1000}];
     * });
     * ```
     * @param handler handler is called to specify max label
     */
    setMaxLabelHandler(handler: Function): this;
    /**
     * Gets handler to return max label position
     */
    getMaxLabelHandler(): Function | any;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {labelformat: NumberFormat; major: {labelformat: NumberFormat}; minor: {labelformat: NumberFormat}; edge: {labelformat: NumberFormat}; intermediate: {labelformat: NumberFormat}; formatlabeleventhandler: Function; maxlabeleventhandler: Function} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.labelformat label format, label format to be applied to all grades
     * @param properties.major An object containing major grade properties
     * @param properties.major.labelformat major label format
     * @param properties.minor An object containing minor grade properties
     * @param properties.minor.labelformat minor label format
     * @param properties.edge An object containing edge grade properties
     * @param properties.edge.labelformat edge label format
     * @param properties.intermediate An object containing intermediate grade properties
     * @param properties.intermediate.labelformat intermediate label format
     * @param properties.formatlabeleventhandler formatlebeleventhandler
     * @param properties.maxlabeleventhandler maxlabeleventhandler
     */
    setProperties(properties: object | { labelformat?: any | NumberFormat; major?: object | { labelformat?: any | NumberFormat; } ; minor?: object | { labelformat?: any | NumberFormat; } ; edge?: object | { labelformat?: any | NumberFormat; } ; intermediate?: object | { labelformat?: any | NumberFormat; } ; formatlabeleventhandler?: Function; maxlabeleventhandler?: Function; } ): this;
}
