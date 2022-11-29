import {DataTransformation} from './DataTransformation';

/**
 * Defines a singleton registry for the available data transforms.
 */
export class DataTransformRegistry {
    /**
     * Defines a singleton registry for the available data transforms.
     */
    constructor();
    /**
     * Gets an instance of the data transform registry
     */
    static getInstance(): DataTransformRegistry;
    /**
     * Registers a data transform and associates it with a name.
     * @param dataTransformName The name of the data transform.
     * @param dataTransformClass The class that performs data transformation.
     * @param wasm register wasm version
     */
    register(dataTransformName: string, dataTransformClass: Function, wasm?: boolean): this;
    /**
     * Unregister a data transform that is associated with a given name.
     * @param dataTransformName The name of the compression algorithm.
     */
    unregister(dataTransformName: string): this;
    /**
     * Returns true if registry doesn't have any data transformers
     */
    isEmpty(): boolean;
    /**
     * Gets a new instance of a data transform that is registered with a given name.
     * @param dataTransformName The name of the data transform.
     */
    getDataTransform(dataTransformName: string): DataTransformation | any;
    /**
     * Gets the names of all the registered data transforms.
     */
    getAvailableDataTransforms(): string[];
    /**
     * If true WebAssembly will be used for decompression.
     * @param enable enable flag
     */
    setWasmEnabled(enable: boolean): this;
    /**
     * Returns true if WebAssembly is used for decompression
     */
    getWasmEnabled(): boolean;
    /**
     * Returns promise that will be resolved when data transform is ready
     */
    onReady(): Promise<any>;
    /**
     * Process data before decompression
     * @param data data
     */
    preProcess(data: ArrayBuffer): any;
    /**
     * Process data after decompression
     * @param data data
     */
    postProcess(data: ArrayBuffer): any;
}
