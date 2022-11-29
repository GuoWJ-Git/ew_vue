import {FieldDesc} from './FieldDesc';

/**
 * Creates binary header
 */
export class BinaryField extends FieldDesc {
    /**
     * Creates binary header
     * @param options options or offset
     * @param options.offset offset of the header
     * @param options.datatype type of the data
     * @param dataType type of the data
     * @param fieldType identifier (type) deprecated
     * @param name name of the identifier
     */
    constructor(options?: object | { offset?: number; datatype?: number; }  | number, dataType?: number, fieldType?: string, name?: string);
    /**
     * Sets properties
     * @param properties properties
     * @param properties.offset offset of the header
     * @param properties.datatype type of the data
     */
    setProperties(properties?: object | { offset?: number; datatype?: number; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {offset: number; datatype: number} | any;
    /**
     * Returns offset
     */
    getOffset(): number;
    /**
     * Returns data type
     */
    getDataType(): number;
}
