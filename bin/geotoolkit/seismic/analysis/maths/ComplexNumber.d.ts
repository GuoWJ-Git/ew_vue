/**
 * A complex number, C, has the form C = A + B*j, where A and B are both real.
 * We refer to A as the 'real part' of C, and B as the 'imaginary part' of C
 * where both A and B can be represented by double precision values.
 * Ported from the Saddleback Geosolution's Java implementation
 */
export class ComplexNumber {
    /**
     * A complex number, C, has the form C = A + B*j, where A and B are both real.
     * We refer to A as the 'real part' of C, and B as the 'imaginary part' of C
     * where both A and B can be represented by double precision values.
     * Ported from the Saddleback Geosolution's Java implementation
     * @param real Real part of the complex value denoted by A in the expression C = A + B*j
     * @param imag The imaginary component Imaginary part of the complex value denoted by B in the expression C = A + B*j
     */
    constructor(real: number | ComplexNumber, imag: number);
    /**
     * Gets the real value of the complex number.
     */
    getReal(): number;
    /**
     * Sets the real value of the complex number.
     * @param real The real component
     */
    setReal(real: number): this;
    /**
     * Gets the imaginary value of the complex number.
     */
    getImag(): number;
    /**
     * Sets the imaginary value of the complex number.
     * @param imag The imaginary component.
     */
    setImag(imag: number): this;
    /**
     * Gets the string representation of this complex number.
     */
    toString(): string;
}
