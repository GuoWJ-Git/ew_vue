/**
 * A utility class with methods useful for removing the DC Component
 * of a signal by subtracting the mean value.
 * Ported from the Saddleback Geosolution's Java implementation
 */
export class ArrayOperations {
    /**
     * A utility class with methods useful for removing the DC Component
     * of a signal by subtracting the mean value.
     * Ported from the Saddleback Geosolution's Java implementation
     */
    constructor();
    /**
     * Copies elements from a source array starting at a specified index to a
     * destination array at a specified index.  The number of components
     * copies is specified in the length argument.
     * @param src Source array
     * @param srcPos Source array start index
     * @param dest Destination array
     * @param destPos Destination stat index
     * @param length The length of the copied data
     */
    static arrayCopy(src: Float32Array, srcPos: number, dest: Float32Array, destPos: number, length: number): void;
    /**
     * Fills the array with specified value at the specified range
     * @param array The array that will be filled
     * @param start The start position
     * @param end The end position
     * @param value The value.
     */
    static fill(array: Float32Array, start: number, end: number, value: number): void;
}
