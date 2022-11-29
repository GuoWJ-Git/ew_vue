/**
 * Defines a base class for various discrete fourier transforms
 * Ported from the Saddleback Geosolution's Java implementation
 */
export class AbstractFFT {
    /**
     * Defines a base class for various discrete fourier transforms
     * Ported from the Saddleback Geosolution's Java implementation
     * @param real The real component of the signal
     * @param imag The imaginary component of th signal
     * @param sampleRate The data sampling rate in milliseconds
     * @param length The desired length of the transform, must be a power of 2
     */
    constructor(real: Float32Array, imag: Float32Array, sampleRate: number, length: number);
    /**
     * Sets the real and imaginary result array
     * @param real The real component of the signal
     * @param imag The imaginary component of the signal
     * @param sampleRate The data sampling rate in milliseconds
     * @param length The desired length of the transform, must be a power of 2
     */
    setData(real: Float32Array, imag: Float32Array, sampleRate: number, length: number): this;
    /**
     * Sets the real and imaginary arrays directly
     * @param real The imaginary component of the signal
     * @param imag The real component of the signal
     */
    setDataUnsafe(real: Float32Array, imag: Float32Array): this;
    /**
     * Performs the transform
     */
    transform(): void;
    /**
     * Performs the inverse transform
     */
    inverseTransform(): void;
    /**
     * Gets the real signal component
     * @param getReference If true then the reference to signal will be returned.
     */
    getRealComponents(getReference: boolean): Float32Array;
    /**
     * Gets the imaginary signal component
     * @param getReference If true then the reference to signal will be returned.
     */
    getImaginaryComponents(getReference: boolean): Float32Array;
    /**
     * Returns the length of the calculated FFT (power-of-2).
     */
    getLength(): number;
    /**
     * Returns the number of non zero samples that were input inot the last FFT.
     * This is the number of live samples (less than or equal to a power-of-2);
     */
    getNumberNonZeroSamples(): number;
    /**
     * Returns half of the length of the calcualted FFT (power-of-2)
     */
    getHalfLength(): number;
    /**
     * Returns the base 2 logarithm of the transform length
     */
    getLog2Length(): number;
    /**
     * Returns the nyquist frequency for the input signal.
     * This is the calculated nyquist frequency based on the supplied sample rate.
     * This is also known as the folding frequency
     */
    getNyquist(): number;
    /**
     * Returns the sample number of frequency that equals nyquist frequency.
     */
    getNyquistLength(): number;
    /**
     * Returns the input sample rate of the signal in Milliseconds.
     * This is the sample rate set before calculation.
     */
    getSampleRate(): number;
    /**
     * Sets the input sample rate of the signal in Milliseconds.
     * @param sampleRate Sample rate of input signal in milliseconds (ms)
     */
    setSampleRate(sampleRate: number): this;
    /**
     * Returns the Frequency Domain sample rate. This is the frequency domain sample spacing.
     */
    getFDSampleRate(): number;
}
