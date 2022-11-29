import {DataTransformation} from '../DataTransformation';

/**
 * This class performs the inverse quantization transformation.
 */
export class InverseQuantization extends DataTransformation {
    /**
     * This class performs the inverse quantization transformation.
     */
    constructor();
    /**
     * Sets the indices
     * @param indices The indices.
     */
    setIndices(indices: number[]): this;
    /**
     * Sets the sample value
     * @param sampleValue The sample value
     */
    setSampleValue(sampleValue: number): this;
    /**
     * Sets te number of values.
     * @param numValues The number of values.
     */
    setNumValues(numValues: number): this;
    /**
     * Performs denormalization
     */
    denormalize(): void;
    /**
     * Performs the transform on the data.
     * @param data The data that will be transformed.
     */
    transform(data: ArrayBuffer): ArrayBuffer;
}
