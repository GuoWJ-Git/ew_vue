/**
 * The FieldDesc is a base class for seismic trace header's field descriptors. It is common to all field descriptors.
 * A header field descriptor describes the name and identifier of a given header field.
 */
export class FieldDesc {
    /**
     * The FieldDesc is a base class for seismic trace header's field descriptors. It is common to all field descriptors.
     * A header field descriptor describes the name and identifier of a given header field.
     * @param options identifier (type)
     * @param options.fieldid identifier (type)
     * @param options.name name of the field
     * @param options.title title of the field
     * @param name name of the field
     * @param title title of the field
     */
    constructor(options?: string | number | object | { fieldid?: string | number; name?: string; title?: string; } , name?: string, title?: string);
    /**
     * Returns name
     */
    getName(): string;
    /**
     * Returns identifier (type)
     */
    getIdentifier(): string;
    /**
     * Returns title
     */
    getTitle(): string;
    /**
     * Set title
     * @param title title
     */
    setTitle(title: string): this;
    /**
     * Returns clone of the field descriptor
     */
    getClone(): FieldDesc;
    /**
     * Returns string representation
     */
    toString(): string;
    /**
     * Returns true if headers are identical
     * @param header header
     */
    equalsTo(header: FieldDesc): boolean;
    /**
     * Gets the properties
     */
    getProperties(): {fieldid: string; name: string; title: string} | any;
    /**
     * Sets the properties
     * @param props properties
     * @param props.fieldid identifier (type)
     * @param props.name name of the field
     * @param props.title title of the field
     */
    setProperties(props?: object | { fieldid?: string | number; name?: string; title?: string; } ): this;
}
