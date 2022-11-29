import {DataHeader} from './DataHeader';
import {BinaryField} from './BinaryField';
import {ByteOrder} from './ByteOrder';

/**
 * Creates Binary Header.
 */
export class BinaryHeader extends DataHeader {
    /**
     * Creates Binary Header.
     * @param size byte size of header in data source
     * @param headerType type of trace header
     */
    constructor(size: number, headerType: string);
    /**
     * Add field to fields array
     * @param field Binary field inside header
     */
    addField(field: BinaryField): void;
    /**
     * Set byte order.
     * True if order === "BIG_ENDIAN"
     * @param order the byte order
     */
    setByteOrder(order: ByteOrder | string): this;
    /**
     * Returns byte order.
     * "BIG_ENDIAN" or LITTLE_ENDIAN"
     */
    getByteOrder(): string | ByteOrder;
    /**
     * Returns true if fieldType exists in fields array
     * @param fieldType type of the field in the array
     */
    containsField(fieldType: string): boolean;
    /**
     * Returns true if fieldName exists in fields array
     * @param fieldName name that gives information about the field
     */
    containsFieldByName(fieldName: string): boolean;
    /**
     * Returns field for corresponding index
     * @param index index for the array of field data
     */
    getFieldByIndex(index: number): BinaryField;
    /**
     * Returns field with correct fieldType
     * @param fieldType type of the binary field
     */
    getField(fieldType: string): BinaryField;
    /**
     * Returns field with correct fieldName
     * @param fieldName name that gives information about the field
     */
    getFieldByName(fieldName: string): BinaryField;
    /**
     * Returns an array of the fields
     */
    getFields(): BinaryField[];
    /**
     * Returns an array of the fields
     * @param binary binary data
     */
    parse(binary: ArrayBuffer): any;
    /**
     * Parse a specific header
     * @param uint8binary array of 8-bit unsigned integers.
     * @param field the BinaryField
     */
    parseField(uint8binary: Uint8Array, field: BinaryField): number;
    /**
     * Returns field for a specific identifier
     * @param identifier unique name for field
     */
    getFieldByIdentifier(identifier: string): BinaryField;
    /**
     * Returns field value for a specific type
     * @param data data
     * @param headerFieldType unique name of the header field.
     */
    getFieldValue(data: any, headerFieldType: string): any[] | null;
}
