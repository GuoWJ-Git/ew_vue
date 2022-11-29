/**
 * This class has methods for calculating various frequency properties.
 * Ported from the Saddleback Geosolution's Java implementation
 */
export class SpectraCalculator {
    /**
     * This class has methods for calculating various frequency properties.
     * Ported from the Saddleback Geosolution's Java implementation
     */
    constructor();
    /**
     * Calculates the power components of the complex signal
     * @param xre Real signal
     * @param xim Imaginary signal
     * @param nonzero Length of the signal
     * @param nyquistLen The nyquist length
     */
    static calcPower(xre: Float32Array, xim: Float32Array, nonzero: number, nyquistLen: number): Float32Array;
    /**
     * Calculates the amplitude components of the complex signal
     * @param xre Real signal
     * @param xim Imaginary signal
     * @param nonzero Length of the signal
     * @param nyquistLen The nyquist length
     */
    static calcAmplitude(xre: Float32Array, xim: Float32Array, nonzero: number, nyquistLen: number): Float32Array;
    /**
     * Calculates the amplitude components of a complex signal and smoothes the result.
     * @param xre Real signal
     * @param xim Imaginary signal
     * @param sampleRate The sample rate
     * @param nonzero Length of the signal
     * @param hzLength The length of each oscillation
     */
    static calcAmplitudeSmoothed(xre: Float32Array, xim: Float32Array, sampleRate: number, nonzero: number, hzLength: number): Float32Array;
    /**
     * Smoothes the spectrum components of the signal
     * @param spectrum The signal
     * @param windowWidth The window width
     */
    static smoothSpectrum(spectrum: Float32Array, windowWidth: number): Float32Array;
    /**
     * Calculates the phase components of a complex signal in radians.
     * @param xre Real signal
     * @param xim Imaginary signal
     * @param nyquistLen The nyquist length
     */
    static calcPhaseInRadians(xre: Float32Array, xim: Float32Array, nyquistLen?: number): Float32Array;
    /**
     * Calculates the phase components of a complex signal in degrees.
     * @param xre Real signal
     * @param xim Imaginary signal
     * @param nyquistLen The nyquist length
     */
    static calcPhaseInDegrees(xre: Float32Array, xim: Float32Array, nyquistLen?: number): Float32Array;
    /**
     * Unwraps the phase components of a complex signal in degrees.
     * @param xre Real signal
     * @param xim Imaginary signal
     * @param nyquistLen The nyquist length
     */
    static calcUnWrappedPhaseInDegrees(xre: Float32Array, xim: Float32Array, nyquistLen?: number): Float32Array;
    /**
     * Unwraps the radian phase components of the signal and then converts to degrees
     * @param phaseSpec The phase spectrum
     */
    static phaseUnwrapRadToDeg(phaseSpec: number): Float32Array;
    /**
     * Unwraps the radian phase components of the signal
     * ( Makes phases take values between -PI and +PI )
     * @param phaseSpec The phase spectrum
     */
    static phaseUnwrapRadians(phaseSpec: number): Float32Array;
    /**
     * Unwraps the degree phase components of the signal
     * @param phaseSpec The phase spectrum
     */
    static phaseUnwrapDegrees(phaseSpec: number): Float32Array;
    /**
     * Computes the power of the signal in decibels
     * @param xre Real signal
     * @param xim Imaginary signal
     * @param nonzero Length of the signal
     * @param nyquistlen The nyquist length
     */
    static calcPowerDb(xre: Float32Array, xim: Float32Array, nonzero: number, nyquistlen: number): Float32Array;
    /**
     * Computes the normalized power of the signal in decibels
     * @param xre Real signal
     * @param xim Imaginary signal
     * @param nonzero Length of the signal
     * @param nyquistLen The nyquist length
     * @param nFactor the normalization factor
     */
    static calcPowerDbNormalized(xre: Float32Array, xim: Float32Array, nonzero: number, nyquistLen: number, nFactor: number): Float32Array;
}
