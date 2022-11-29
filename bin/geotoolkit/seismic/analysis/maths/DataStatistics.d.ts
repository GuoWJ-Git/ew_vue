/**
 * A utility class with useful methods for statistics operations
 * Ported from the Saddleback Geosolution's Java implementation
 */
export class DataStatistics {
    /**
     * A utility class with useful methods for statistics operations
     * Ported from the Saddleback Geosolution's Java implementation
     */
    constructor();
    /**
     * Find the maximum value of the array
     * @param inputData The input data
     * @param minIndex minimum data index
     * @param maxIndex maximum data index
     */
    static max(inputData: Float32Array | any[], minIndex: number, maxIndex: number): number;
    /**
     * Find the minimum value of the array
     * @param inputData The input data
     * @param minIndex minimum data index
     * @param maxIndex maximum data index
     */
    static min(inputData: Float32Array | any[], minIndex: number, maxIndex: number): number;
    /**
     * Find the sum of all the array values
     * @param inputData The input data
     * @param minIndex minimum data index
     * @param maxIndex maximum data index
     */
    static sum(inputData: Float32Array | any[], minIndex: number, maxIndex: number): number;
    /**
     * Find the sum of absolute values of all array values
     * @param inputData The input data
     * @param minIndex minimum data index
     * @param maxIndex maximum data index
     */
    static mean(inputData: Float32Array | any[], minIndex: number, maxIndex: number): number;
    /**
     * Find the sum of absolute values of all array values
     * @param inputData The input data
     * @param minIndex minimum data index
     * @param maxIndex maximum data index
     */
    static sumAbs(inputData: Float32Array | any[], minIndex: number, maxIndex: number): number;
    /**
     * Find the closest whole number (towards zero) to the number specified
     * @param value The value to be fixed
     */
    static fix(value: number): number;
}
