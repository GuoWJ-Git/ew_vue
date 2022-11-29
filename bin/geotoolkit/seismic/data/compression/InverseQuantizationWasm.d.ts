import {DataTransformation} from '../DataTransformation';

/**
 * This class performs the inverse quantization transformation with WebAssembly.
 */
export class InverseQuantizationWasm extends DataTransformation {
    /**
     * This class performs the inverse quantization transformation with WebAssembly.
     */
    constructor();
    /**
     * Performs the transform on the data.
     * @param data The data that will be transformed.
     */
    transform(data: ArrayBuffer): ArrayBuffer;
}
