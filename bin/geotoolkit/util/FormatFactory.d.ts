import {Format} from './Format';
import {NumberFormat} from './NumberFormat';
import {DateTimeFormat} from './DateTimeFormat';

/**
 * Defines abstract class for formatting numbers, dates and time
 */
export class FormatFactory {
    /**
     * Defines abstract class for formatting numbers, dates and time
     */
    constructor();
    /**
     * Create or get fill style from object
     * @param object object can be in format of constructor geotoolkit.util.Format
     */
    static createFromObject(object?: object | Format): NumberFormat | DateTimeFormat | null;
}
