import {DataTransformation} from '../DataTransformation';
import {Dimension} from '../../../util/Dimension';

/**
 * This class performs the inverse AGC transformation.
 */
export class InverseAGCWasm extends DataTransformation {
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
     * @param config.compressedMultiplier The quantization multiplier.3
     * @param config.firstNullValues The first null values array.
     * @param config.curve The curve value.
     * @param size The size of the data transform.
     * @param data The data on which this transform is applied.
     */
    applyConfiguration(config: object | { enabled?: string; compress?: DecompressionStrategy; min?: Float32Array; max?: Float32Array; multiplier?: Int8Array; compressedMultiplier?: Int8Array; firstNullValues?: Int16Array; curve?: number; } , size: Dimension, data: ArrayBuffer): void;
    /**
     * Performs decompression
     * @param config The data transform configuration.
     * @param config.min The quantization minimum data.
     * @param config.max The quantization maximum data.
     * @param size The size of the data transform.
     * @param data Multipliers compressed
     */
    decompress(config: object | { min?: Float32Array; max?: Float32Array; } , size: Dimension, data: ArrayBuffer): any;
    /**
     * Performs run length encoding decompression
     * @param dimension The size of the data transform.
     * @param multiplierView View to multipliers
     * @param data The quantization multiplier.
     */
    decompressRLE(dimension: any, multiplierView: any, data: Int8Array): any;
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
