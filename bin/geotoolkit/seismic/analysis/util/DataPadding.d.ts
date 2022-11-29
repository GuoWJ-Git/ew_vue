/**
 * A utility class with methods useful for removing the DC Component
 * of a signal by subtracting the mean value.
 * Ported from the Saddleback Geosolution's Java implementation
 */
export class DataPadding {
    /**
     * A utility class with methods useful for removing the DC Component
     * of a signal by subtracting the mean value.
     * Ported from the Saddleback Geosolution's Java implementation
     */
    constructor();
    /**
     * Pad a trace out to the length specified by input parameter.
     * @param trace The data trace to be padded
     * @param length The length of padded trace
     */
    static padTrace(trace: Float32Array, length: number): Float32Array | any;
    /**
     * Returns the next-highest power-of-2 to the number supplied.
     * Example 1-&gt;2, 3-&gt;4, 5-&gt;8, 9-&gt;16, 17-&gt;32, etc..
     * @param n The number to be converted to the next power of 2.
     */
    static getNextPowerOf2(n: number): number;
}
