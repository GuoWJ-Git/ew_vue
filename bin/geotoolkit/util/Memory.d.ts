/**
 * Defined functions to work with memory
 * @deprecated since 3.2 use Typed Arrays instead
 */
export class Memory {
    /**
     * Defined functions to work with memory
     */
    constructor();
    /**
     * Creates an array that contains 32 Bit float values. If browser doesn't support it
     * then it returns Array
     * @deprecated since 3.2 use Float32Array instead
     * @param number of the elements
     */
    static createFloat32Array(number: number): any[] | Float32Array;
    /**
     * Tries to create and then return a 64 bit float array.
     * If browser supports 32 bit float arrays but not 64 bit float arrays a 32 bit float array is returned.
     * If browser does not support both 32 bit float arrays and 64 bit float arrays a regular array is returned.
     * @deprecated since 3.2 use Float64Array instead
     * @param size Another array or desired array size.
     */
    static createFloat64Array(size: any[] | ArrayBuffer | number): any[] | Float32Array | Float64Array;
    /**
     * Tries to create and then return a 32 bit int array.
     * If browser does not support 32 bit int array a regular array is returned.
     * @deprecated since 3.2 use Int32Array instead
     * @param size Another array or desired array size.
     */
    static createInt32Array(size: any[] | ArrayBuffer | number): any[] | Int32Array;
}
