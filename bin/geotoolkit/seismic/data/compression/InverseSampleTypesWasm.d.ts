import {DataTransformation} from '../DataTransformation';
import {Dimension} from '../../../util/Dimension';

/**
 * This class performs processing of sample types table and restore original data
 * according to it with WebAssembly
 */
export class InverseSampleTypesWasm extends DataTransformation {
    /**
     * This class performs processing of sample types table and restore original data
     * according to it with WebAssembly
     */
    constructor();
    /**
     * Configures this data transform.
     * @param config The data transform configuration.
     * @param config.sampleTypes base64 sample types
     * @param size The size of the data transform.
     * @param data The data on which this transform is applied.
     */
    applyConfiguration(config: object | { sampleTypes: string; } , size: Dimension, data: ArrayBuffer): void;
    /**
     * Performs the transform on the data.
     * @param data The data that will be transformed.
     */
    transform(data: ArrayBuffer): ArrayBuffer;
}
