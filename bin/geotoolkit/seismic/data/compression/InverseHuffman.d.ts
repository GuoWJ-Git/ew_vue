import {DataTransformation} from '../DataTransformation';
import {Dimension} from '../../../util/Dimension';

/**
 * This class performs the inverse huffman transformation.
 */
export class InverseHuffman extends DataTransformation {
    /**
     * This class performs the inverse huffman transformation.
     */
    constructor();
    /**
     * Configures this data transform.
     * @param config The data transform configuration.
     * @param config.numvalues The number of values.
     * @param config.length The length of the transform.
     * @param config.frequencies The frequency values.
     * @param config.indices The index values.
     * @param size The size of the data transform.
     * @param data The data on which this transform is applied.
     */
    applyConfiguration(config: object | { numvalues?: number; length?: number; frequencies?: number; indices?: number; } , size: Dimension, data: ArrayBuffer): void;
    /**
     * Performs denormalization
     */
    denormalize(): void;
    /**
     * Performs the transform on the data.
     * @param data The data that will be transformed.
     */
    transform(data: ArrayBuffer): ArrayBuffer;
    /**
     * Sets the frequency
     * @param freq The frequency
     */
    setFreq(freq: Int32Array): this;
    /**
     * Sets the indices
     * @param indices The indices
     */
    setIndices(indices: Int32Array): this;
    /**
     * Sets the number of values.
     * @param numValues The number of values.
     */
    setNumValues(numValues: number): this;
    /**
     * Sets the length
     * @param length The total length.
     */
    setLength(length: number): this;
}
