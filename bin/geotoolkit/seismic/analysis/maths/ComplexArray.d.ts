import {ComplexNumber} from './ComplexNumber';

/**
 * <p>An array of complex numbers.</p>
 * <p>A complex number, C, has the form C = A + B*j, where A and B are both real.
 * We refer to A as the 'real part' of C, and B as the 'imaginary part' of C
 * where both A and B can be represented by double precision values. </p>
 * This is a wrapper class that can hold two double arrays, one of which is
 * interpreted as containing the real values, the other the imaginary values
 * of the complex numbers.
 * Ported from the Saddleback Geosolution's Java implementation
 */
export class ComplexArray {
    /**
     * <p>An array of complex numbers.</p>
     * <p>A complex number, C, has the form C = A + B*j, where A and B are both real.
     * We refer to A as the 'real part' of C, and B as the 'imaginary part' of C
     * where both A and B can be represented by double precision values. </p>
     * This is a wrapper class that can hold two double arrays, one of which is
     * interpreted as containing the real values, the other the imaginary values
     * of the complex numbers.
     * Ported from the Saddleback Geosolution's Java implementation
     * @param real Real part of the complex array.
     * @param imag The imaginary part of the complex array.
     */
    constructor(real: ComplexArray | number, imag: ComplexArray | number);
    /**
     * Gets a new ComplexNumber from the ComplexArray at a specified index
     * @param index The index location at which to get the complex number.
     */
    get(index: number): ComplexNumber;
    /**
     * Set the value of ComplexArray at a specified index with the ComplexNumber complexNumber.
     * @param complexNumber The complex number.
     * @param index The index at which the complex number will be set.
     */
    set(complexNumber: ComplexNumber, index: number): this;
    /**
     * Gets the array of real components.
     */
    getRealArray(): Float32Array;
    /**
     * Gets the array of imaginary components.
     */
    getImagArray(): Float32Array;
    /**
     * Gets the length of the complex array.
     */
    getLength(): number;
}
