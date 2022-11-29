/**
 * This class stores data for an attribute,
 * which allows for more efficient passing of data to the GPU. <br>
 */
export class BufferAttribute {
    /**
     * This class stores data for an attribute,
     * which allows for more efficient passing of data to the GPU. <br>
     * @param array typed array
     * @param itemSize the number of values of the array that associated with a particular vertex
     * @param normalized Applies to integer data only.
     *                                     Indicates how the underlying data in the buffer maps to the values in the GLSL code
     * @param dynamic Defines the intended usage pattern of the data store for optimization purposes
     */
    constructor(array: number[], itemSize: number, normalized?: boolean, dynamic?: boolean);
    /**
     * Set name for this attribute
     * @param name the attribute name
     */
    setName(name: string): this;
    /**
     * Whether the buffer is updated dynamically or not.
     * @param dynamic the dynamic flag
     */
    setDynamic(dynamic: boolean): this;
    /**
     * Set a value at given position in array<br>
     * Note that this should not be confused with index of vertex.
     * @param value the value to be set
     * @param offset the offset of array. Note this should not be confused with index of vertices.
     */
    set(value: number, offset: number): this;
    /**
     * Set the typed array in the buffer
     * @param array typed array
     */
    setArray(array: number[]): this;
    /**
     * Return a value at given position in array<br>
     * Note that this should not be confused with index of vertex.
     * @param offset the offset of array
     */
    get(offset: number): number;
    /**
     * Return the typed array in the buffer
     */
    getArray(): number[];
    /**
     * Return attributes for this BufferAttribute
     */
    getAttributes(): {name: string; array: number[]; count: number; itemsize: number; normalized: boolean; dynamic: boolean} | object;
}
