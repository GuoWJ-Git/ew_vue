import {DataConversion} from './DataConversion';

/**
 */
export class NormalizeDataConversion extends DataConversion {
    /**
     * @param min lower source limit or properties object
     * @param min.min lower source limit
     * @param min.max higher source limit
     * @param max higher source limit
     */
    constructor(min: number | object | { min?: number; max?: number; } , max?: number);
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {min: number; max: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.min lower source limit
     * @param properties.max higher source limit
     */
    setProperties(properties: object | { min?: number; max?: number; } ): this;
}
