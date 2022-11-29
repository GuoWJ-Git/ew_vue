import {AbstractFFTSpectra} from './AbstractFFTSpectra';

/**
 * Defines a class capable of computing the forward and backward Discrete Fourier Transform
 * Ported from the Saddleback Geosolution's Java implementation of the DFT
 * This implementation uses only radix-2 butterflies.
 */
export class SimpleFFT extends AbstractFFTSpectra {
    /**
     * Defines a class capable of computing the forward and backward Discrete Fourier Transform
     * Ported from the Saddleback Geosolution's Java implementation of the DFT
     * This implementation uses only radix-2 butterflies.
     * @param real The real component of the signal
     * @param imag The imaginary component of th signal
     * @param sampleRate The data sampling rate in milliseconds
     * @param length The desired length of the transform, must be a power of 2
     */
    constructor(real: Float32Array, imag: Float32Array, sampleRate: number, length: number);
    /**
     * Performs the forward FFT
     */
    transform(): void;
    /**
     * Performs the inverse FFT
     */
    inverseTransform(): void;
}
