import {DataTransformation} from '../DataTransformation';

/**
 * This class performs the inverse haar wavelet transformation with WebAssembly.
 */
export class InverseHaarWaveletsWasm extends DataTransformation {
    /**
     * This class performs the inverse haar wavelet transformation with WebAssembly.
     */
    constructor();
    /**
     * Performs the transform on the data.
     * @param data The data that will be transformed.
     */
    transform(data: ArrayBuffer): ArrayBuffer;
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
}
