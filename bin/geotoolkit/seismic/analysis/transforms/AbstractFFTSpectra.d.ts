import {AbstractFFT} from './AbstractFFT';

/**
 * Defines a class with basic functions to analyze FFT spectra
 */
export class AbstractFFTSpectra extends AbstractFFT {
    /**
     * Defines a class with basic functions to analyze FFT spectra
     * @param real The real component of the signal
     * @param imag The imaginary component of th signal
     * @param sampleRate The data sampling rate in milliseconds
     * @param length The desired length of the transform, must be a power of 2
     */
    constructor(real: Float32Array, imag: Float32Array, sampleRate: number, length: number);
    /**
     * Computes the Amplitude spectrum of the input signal.*
     */
    getFFTAmplitude(): Float32Array | null;
    /**
     * Computes the Amplitude spectrum of the input signal and
     * smoothes the output to hzLength (in frequency).
     * @param hzLength int operator length in hz/samples
     */
    getFFTAmplitudeSmooth(hzLength: number): Float32Array | null;
    /**
     * Computes the phase spectrum of the input signal in degrees.
     */
    getFFTPhaseDegrees(): Float32Array | null;
    /**
     * Computes the phase spectrum in radians of the input signal.<br><br>
     * This is the phase spectrum of the input signal in range of 0 to 2*pi.
     */
    getFFTPhaseRadians(): Float32Array | null;
    /**
     * Computes the phase spectrum in unwrapped degrees in the range(0-&gt;360).
     */
    getFFTPhaseInDegreesUnWrapped(): Float32Array | null;
    /**
     * Computes the phase spectrum in unwrapped radians in the range(-pi to +pi).
     */
    getFFTPhaseInRadiansUnWrapped(): Float32Array | null;
    /**
     * Computes the power spectrum (amplitude squared) of the FFT.
     */
    getFFTPower(): Float32Array | null;
    /**
     * Computes the power spectrum (amplitude squared) of the FFT.
     * This is the the power spectrum in dB-down, based on the maximum power
     * value associated with (0(Zero) db down).
     */
    getFFTPowerInDb(): Float32Array | null;
    /**
     * Computes the normalized power spectrum (amplitude squared) of the FFT.<br><br>
     * This is the the power spectrum in dB-down, based on the reference power
     * value supplied in the parameter nFactor.
     * @param pReference float reference value
     */
    getFFTPowerInDbNormalized(pReference: number): Float32Array | null;
    /**
     * Computes the smoothed &amp; normalized dB power spectrum
     * (amplitude squared) of the FFT.
     * This is the the power spectrum in dB-down, based on the maximum power
     * value associated with (0(Zero) db down).
     * @param hzLength int operator length in hz/samples
     */
    getFFTPowerInDbSmoothed(hzLength: number): Float32Array | null;
    /**
     * Computes the smoothed power spectrum (amplitude squared) of the FFT.
     * @param hzLength int operator length in hz/samples
     */
    getFFTPowerSmoothed(hzLength: number): Float32Array | null;
}
