/**
 * Defines abstract class for formatting numbers, dates and time
 */
export class Format {
    /**
     * Defines abstract class for formatting numbers, dates and time
     */
    constructor();
    /**
     * Formats object to string
     * @param num number or object
     */
    format(num: number | object): string;
    /**
     * @param src Source to copy from
     */
    protected copyConstructor(src: Format): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): object | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: object): this;
}
