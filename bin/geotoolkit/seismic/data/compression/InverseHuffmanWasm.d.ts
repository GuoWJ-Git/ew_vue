import {DataTransformation} from '../DataTransformation';
import {Dimension} from '../../../util/Dimension';

/**
 * This class performs the inverse huffman transformation with WebAsembly.
 */
export class InverseHuffmanWasm extends DataTransformation {
    /**
     * This class performs the inverse huffman transformation with WebAsembly.
     */
    constructor();
    /**
     * Configures this data transform.
     * @param config The data transform configuration.
     * @param config.length The length of the transform.
     * @param config.frequencies The frequency values.
     * @param config.indices The index values.
     * @param size The index values.
     * @param data The data on which this transform is applied.
     */
    applyConfiguration(config: object | { length?: number; frequencies?: number; indices?: number; } , size: Dimension, data: ArrayBuffer): void;
    /**
     * Performs the transform on the data.
     * @param data The data that will be transformed.
     */
    transform(data: ArrayBuffer): ArrayBuffer;
}
