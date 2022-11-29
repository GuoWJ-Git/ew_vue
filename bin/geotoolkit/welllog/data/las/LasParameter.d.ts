/**
 * A single parameter line of LAS data
 */
export class LasParameter {
    /**
     * A single parameter line of LAS data
     * @param mnemonic curve mnemonic or properties object
     * @param mnemonic.mnemonic mnemonic
     * @param mnemonic.value value
     * @param mnemonic.unit unit
     * @param mnemonic.description description
     * @param unit data unit
     * @param value value of parameter
     * @param description description field
     */
    constructor(mnemonic: string | object | { mnemonic?: string; value?: string; unit?: string; description?: string; } , unit: string, value: string, description: string);
    /**
     * Parameter name
     */
    getName(): string;
    /**
     * Mnemonic field
     */
    getMnemonic(): string;
    /**
     * Return unit
     */
    getUnit(): string;
    /**
     * @param value value
     */
    setUnit(value: string): this;
    /**
     * Returns value of parameter
     */
    getValue(): string;
    /**
     * @param value value
     */
    setValue(value: string): this;
    /**
     * Return description field
     */
    getDescription(): string;
    /**
     * @param value value
     */
    setDescription(value: string): this;
    /**
     * Return object properties
     */
    getProperties(): {mnemonic: string; value: string; unit: string; description: string} | any;
    /**
     * Return object properties
     * @param properties properties object
     * @param properties.mnemonic mnemonic
     * @param properties.value value
     * @param properties.unit unit
     * @param properties.description description
     */
    setProperties(properties: object | { mnemonic?: string; value?: string; unit?: string; description?: string; } ): this;
}
