import {DataTransformation} from '../DataTransformation';
import {Dimension} from '../../../util/Dimension';

/**
 * This class performs the inverse AGC transformation.
 */
export class InverseAGC extends DataTransformation {
    /**
     * This class performs the inverse AGC transformation.
     */
    constructor();
    /**
     * Configures this data transform.
     * @param config The data transform configuration.
     * @param config.enabled True if this transform should be applied.
     * @param config.compress The decompression strategy.
     * @param config.min The quantization minimum data.
     * @param config.max The quantization maximum data.
     * @param config.multiplier The multiplier if no compression is used.
     * @param config.compressedMultiplier The quantization multiplier.
     * @param config.firstNullValues The first null values array.
     * @param config.curve The curve value.
     * @param size The size of the data transform.
     * @param data The data on which this transform is applied.
     */
    applyConfiguration(config: object | { enabled?: string; compress?: DecompressionStrategy; min?: Float32Array; max?: Float32Array; multiplier?: Int8Array; compressedMultiplier?: Int8Array; firstNullValues?: Int16Array; curve?: number; } , size: Dimension, data: ArrayBuffer): void;
    /**
     * Performs decompression
     * @param metaData The decompression data
     */
    decompress(metaData: Int8Array): Float32Array;
    /**
     * Performs run length encoding decompression
     * @param compressed The compressed data.
     */
    decompressRLE(compressed: Float32Array): Int8Array;
    /**
     * Sets the min value
     * @param min The min value.
     */
    setMin(min: Float32Array): this;
    /**
     * Gets the min value
     */
    getMin(): Float32Array;
    /**
     * Sets the max value
     * @param max The max value.
     */
    setMax(max: Float32Array): this;
    /**
     * Gets the max value
     */
    getMax(): Float32Array;
    /**
     * Sets the curve value.
     * @param curve The curve value.
     */
    setCurve(curve: number): this;
    /**
     * Gets the curve value.
     */
    getCurve(): number;
    /**
     * Sets the enabled flag
     * @param enabled True will enabled AGC and false will disable AGC.
     */
    setEnabled(enabled: boolean): this;
    /**
     * Gets the enabled flag
     */
    getEnabled(): boolean;
    /**
     * Sets the decompression strategy
     * @param strategy The decompression strategy.
     */
    setDecompressStrategy(strategy: DecompressionStrategy): this;
    /**
     * Gets the decompression strategy
     */
    getDecompressStrategy(): DecompressionStrategy;
    /**
     * Sets the compressed multiplier
     * @param compressedMultiplier The compressed multiplier array.
     */
    setCompressedMultiplier(compressedMultiplier: Int8Array): this;
    /**
     * Gets the compressed multiplier.
     */
    getDecompressMultiplier(): Int8Array;
    /**
     * Sets the multiplier array
     * @param multiplier The multiplier array.
     */
    setMultiplier(multiplier: Float32Array): this;
    /**
     * Gets the multiplier array
     */
    getMultiplier(): Float32Array;
    /**
     * Sets the first null values array
     * @param firstNullValues The first null values array.
     */
    setFirstNullValues(firstNullValues: Int16Array): void;
    /**
     * Gets the first null values array
     */
    getFirstNullValues(): Int16Array;
}
/**
 * Enum of Decompression strategies for inverse AGC transform.
 */
export enum DecompressionStrategy {
    /**
     * No decompression, No quantization, use multiplier.
     */
    WithoutDecompressionAndQuantization = 0,
    /**
     * No decompression, Has quantization, use multiplier.
     */
    WithoutDecompressionButWithQuantization = 1,
    /**
     * Has decompression, Has quantization. use compressedMultiplier
     */
    WithDecompressionAndQuantization = 2
}
