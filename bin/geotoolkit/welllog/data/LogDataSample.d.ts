import {DataSample} from '../../data/DataSample';

/**
 * Represent a processed data sample
 */
export class LogDataSample extends DataSample {
    /**
     * Represent a processed data sample
     * @param depth depth or properties object
     * @param depth.depth depth
     * @param value value
     * @param level level
     * @param valid 
     * @param srcIndex 
     */
    constructor(depth: number | object | { depth?: number; } , value: number, level: number, valid: boolean, srcIndex: number);
    /**
     * Sets depth
     * @param depth depth
     */
    setDepth(depth: number): this;
    /**
     * Return depth
     */
    getDepth(): number;
    /**
     * Create clone
     */
    clone(): LogDataSample;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {depth: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.depth depth
     */
    setProperties(properties: object | { depth?: number; } ): this;
}
