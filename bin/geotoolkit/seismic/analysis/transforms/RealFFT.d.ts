import {FFT} from './FFT';

/**
 * Defines a class capable of computing the forward and backward Real Fast Fourier Transform
 * This implementation performs a size n real transform using a size n/2 complex transform.
 * For the complex transform the radix 2-4-8 fft algorithm is used.
 * Remarks: In browsers this transform is usually slower than the complex transform.
 */
export class RealFFT extends FFT {
    /**
     * Defines a class capable of computing the forward and backward Real Fast Fourier Transform
     * This implementation performs a size n real transform using a size n/2 complex transform.
     * For the complex transform the radix 2-4-8 fft algorithm is used.
     * Remarks: In browsers this transform is usually slower than the complex transform.
     * @param real The real component of the signal
     * @param imag The imaginary component of th signal
     * @param sampleRate The data sampling rate in milliseconds
     * @param length The desired length of the transform, must be a power of 2
     */
    constructor(real: Float32Array, imag: Float32Array, sampleRate: number, length: number);
    /**
     * Performs the forward Real FFT
     */
    transform(): void;
    /**
     * Performs the inverse Real FFT
     */
    inverseTransform(): void;
}
