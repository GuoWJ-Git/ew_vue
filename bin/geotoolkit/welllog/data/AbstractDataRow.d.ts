/**
 * Define an abstract implementation of a row of Array Log Data set
 */
export class AbstractDataRow {
    /**
     * Define an abstract implementation of a row of Array Log Data set
     */
    constructor();
    /**
     * Return a count of the samples in the row
     */
    getSize(): number;
    /**
     * Return the depth
     */
    getDepth(): number;
    /**
     * Return the values
     * @param values optional buffer to fill values
     */
    getValues(values?: number[]): number[];
    /**
     * Return the angles
     */
    getAngles(): number[];
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): object | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties: object): this;
}
