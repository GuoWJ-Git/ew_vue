import {FieldDesc} from './FieldDesc';

/**
 * DataHeader is an 'interface/abstract' class responsible for holding the seismic trace header. Inheriting classes would provide the actual implementation.
 * Headers are organized as set of 'fields' and 'values'.
 */
export class DataHeader {
    /**
     * DataHeader is an 'interface/abstract' class responsible for holding the seismic trace header. Inheriting classes would provide the actual implementation.
     * Headers are organized as set of 'fields' and 'values'.
     * @param size number of bytes
     * @param headerType type of traceheader
     */
    constructor(size: number, headerType: string);
    /**
     * Return size
     */
    getSize(): number;
    /**
     * Return identifer (type)
     */
    getHeaderType(): string;
    /**
     * Return trace header value by identifier
     * @param binary binary data
     */
    parse(binary: ArrayBuffer): any;
    /**
     * Returns true if contains field type
     * @param fieldType type of the field in the array.
     */
    containsField(fieldType: string): boolean;
    /**
     * Returns true if array contains field type
     * @param data which contains the parse data
     * @param headerFieldType unique name of the header field
     */
    getFieldValue(data: any, headerFieldType: string): any;
    /**
     * Get a field by its identifier
     * @param identifier unique header number
     */
    getFieldByIdentifier(identifier: string): FieldDesc;
}
