/**
 * A utility class with methods useful for smoothing signal data
 * Ported from the Saddleback Geosolution's Java implementation
 */
export class Smoothing {
    /**
     * A utility class with methods useful for smoothing signal data
     * Ported from the Saddleback Geosolution's Java implementation
     */
    constructor();
    /**
     * Fast boxcar-like smoother (with optional taper) for the ends of the signal
     * @param inputSignal The signal in array representation
     * @param smootherWidth The smoothingWidth
     * @param taperFlag Whether tapering should be applied to signal's endpoints.
     */
    static fastSmooth(inputSignal: number[], smootherWidth: number, taperFlag: boolean): Float32Array;
    /**
     * Smoothes the signal using a boxcar window (fast, but has window issues)
     * The ends of the signal are handled by padding with repeated values.
     * @param inputSignal The input signal
     * @param smootherWidth The width of the smoothing interval
     */
    static boxcarSmooth(inputSignal: Float32Array, smootherWidth: number): Float32Array;
}
