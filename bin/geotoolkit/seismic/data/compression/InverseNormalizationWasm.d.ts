import {DataTransformation} from '../DataTransformation';

/**
 * This class performs the inverse normalization transformation.
 */
export class InverseNormalizationWasm extends DataTransformation {
    /**
     * This class performs the inverse normalization transformation.
     */
    constructor();
    /**
     * Performs the transform on the data.
     * @param data The data that will be transformed.
     */
    transform(data: ArrayBuffer): ArrayBuffer;
    /**
     * Gets the max amplitude
     */
    getMaxAmplitude(): number;
    /**
     * Sets the max amplitude
     * @param maxAmplitude The max amplitude
     */
    setMaxAmplitude(maxAmplitude: number): this;
}
