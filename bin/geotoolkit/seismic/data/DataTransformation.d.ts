import {Dimension} from '../../util/Dimension';

/**
 * The base class for data transformations.
 */
export class DataTransformation {
    /**
     * The base class for data transformations.
     */
    constructor();
    /**
     * Configures this data transform.
     * @param config The data transform configuration.
     * @param size The size of the data transform.
     * @param data The data on which this transform is applied.
     */
    applyConfiguration(config: any, size: Dimension, data: ArrayBuffer): void;
    /**
     * Loads binary data into this transform.
     * @param config The data transform configuration
     * @param data The data that has to be loaded.
     */
    loadBinaryData(config: any, data: ArrayBuffer): void;
    /**
     * Gets the name of this data transform.
     */
    getName(): string;
    /**
     * Gets the name of this data transform's inverse.
     */
    getInverseName(): string;
    /**
     * Gets the version of this transform
     */
    getVersion(): string;
    /**
     * Performs the transform on the data.
     * @param data The data that will be transformed.
     */
    transform(data: ArrayBuffer | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array): ArrayBuffer | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
    /**
     * Gets the size of the transform.
     */
    getSize(): Dimension;
    /**
     * Sets the size of the transform.
     * @param size The size of the transform.
     */
    setSize(size: Dimension): this;
    /**
     * Dispose.
     */
    dispose(): void;
}
