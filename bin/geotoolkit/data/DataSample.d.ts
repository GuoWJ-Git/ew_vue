/**
 * Represent a processed data sample
 */
export class DataSample {
    /**
     * Represent a processed data sample
     * @param position position or properties object
     * @param position.position position
     * @param position.value value
     * @param position.level level
     * @param position.valid valid or not
     * @param position.index source index
     * @param value value
     * @param level level
     * @param valid valid or not
     * @param srcIndex source index
     */
    constructor(position: number | object | { position?: number; value?: number; level?: number; valid?: boolean; index?: number; } , value: number, level?: number, valid?: boolean, srcIndex?: number);
    /**
     * Check if sample is null
     */
    isNull(): boolean;
    /**
     * Sets position
     * @param position position
     */
    setPosition(position: number): this;
    /**
     * Return position
     */
    getPosition(): number;
    /**
     * Returns original value of the sample
     */
    getOriginalValue(): number;
    /**
     * Sets value of the sample
     * @param value value
     */
    setValue(value: number): this;
    /**
     * Returns value of the sample
     */
    getValue(): number;
    /**
     * Sets wrap level
     * @param level level
     */
    setLevel(level: number): this;
    /**
     * Return level of the wrap
     */
    getLevel(): number;
    /**
     * Sets status of the sample
     * @param valid valid
     */
    setValid(valid: boolean): this;
    /**
     * Return sample status
     */
    getValid(): boolean;
    /**
     * Sets original index
     * @param srcIndex src index
     */
    setOriginalIndex(srcIndex: number): this;
    /**
     * Get original index in the data set
     */
    getOriginalIndex(): number;
    /**
     * Create clone
     */
    clone(): DataSample;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {position: number; value: number; level: number; valid: boolean; index: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.position position
     * @param properties.value value
     * @param properties.level level
     * @param properties.valid valid
     * @param properties.index src index
     */
    setProperties(properties: object | { position?: number; value?: number; level?: number; valid?: boolean; index?: number; } ): this;
}
