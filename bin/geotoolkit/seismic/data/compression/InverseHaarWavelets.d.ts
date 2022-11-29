import {DataTransformation} from '../DataTransformation';

/**
 * This class performs the inverse haar wavelet transformation.
 */
export class InverseHaarWavelets extends DataTransformation {
    /**
     * This class performs the inverse haar wavelet transformation.
     * @param multiplier multiplier to multiply sum and differences between values
     */
    constructor(multiplier?: number);
    /**
     * Performs one dimensional haar wavelet inversion.
     * @param values The values
     * @param nbUtil Number of useful values
     */
    reverse1D(values: number[], nbUtil: number): Float32Array;
    /**
     * Gets the the number of iteration to transform all the columns
     */
    getNbIteX(): number;
    /**
     * Gets the number of iteration to transform all the rows
     */
    getNbIteY(): number;
}
