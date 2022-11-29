/**
 * The DataConversion interface class defines the base conversion operations
 * that must be implemented by all conversion objects. Conversion
 * objects are used to modify the values before being sent to the rendering system.
 * Conversion objects simply modify
 * the flow of data values from their current coordinate system to a new
 * coordinate system. This destination coordinate system may be another linear
 * coordinate system or a non-linear mapping like logarithmic. Conversion
 * objects are only associated with the value component of data
 * source. The position component of data source is never modified.
 */
export class DataConversion {
    /**
     * The DataConversion interface class defines the base conversion operations
     * that must be implemented by all conversion objects. Conversion
     * objects are used to modify the values before being sent to the rendering system.
     * Conversion objects simply modify
     * the flow of data values from their current coordinate system to a new
     * coordinate system. This destination coordinate system may be another linear
     * coordinate system or a non-linear mapping like logarithmic. Conversion
     * objects are only associated with the value component of data
     * source. The position component of data source is never modified.
     */
    constructor();
    /**
     * Direct convert
     * @param v value to convert
     */
    direct(v: number): number;
    /**
     * Reverse convert
     * @param v value to convert
     */
    reverse(v: number): number;
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
