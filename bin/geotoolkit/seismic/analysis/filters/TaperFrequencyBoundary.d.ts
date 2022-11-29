/**
 * This class encapsulates the frequencies of the taper for class cgTyperFilter.
 * The frequencies should always satisfy the requirement that f1&lt;f2&lt;f3&lt;f4
 */
export class TaperFrequencyBoundary {
    /**
     * This class encapsulates the frequencies of the taper for class cgTyperFilter.
     * The frequencies should always satisfy the requirement that f1&lt;f2&lt;f3&lt;f4
     * @param f1 1st frequency (hrz) or another TaperFrequencyBoundary
     * @param f2 2nd frequency (hrz)
     * @param f3 3rd frequency (hrz)
     * @param f4 4th frequency (hrz)
     */
    constructor(f1: number | TaperFrequencyBoundary, f2: number, f3: number, f4: number);
    /**
     * Sets frequency boundary
     * @param f1 1st frequency (hrz) or another TaperFrequencyBoundary
     * @param f2 2-nd frequency (hrz)
     * @param f3 3-rd frequency (hrz)
     * @param f4 4-th frequency (hrz)
     */
    setFrequencyBoundary(f1: number | TaperFrequencyBoundary, f2: number, f3: number, f4: number): this;
    /**
     * Determines whether the boundary frequencies are valid
     */
    isValid(): boolean;
    /**
     * Determines whether this frequency boundary equals another frequency boundary
     * @param frequencyBoundary The frequency boundary
     */
    equals(frequencyBoundary: TaperFrequencyBoundary): boolean;
    /**
     * Gets the 1st frequency (hrz)
     */
    getF1(): number;
    /**
     * Sets the 1st frequency (hrz)
     * @param f1 1st frequency (hrz)
     */
    setF1(f1: number): this;
    /**
     * Gets the 2nd frequency (hrz)
     */
    getF2(): number;
    /**
     * Sets the 2nd frequency (hrz)
     * @param f2 2nd frequency (hrz)
     */
    setF2(f2: number): this;
    /**
     * Gets the 3rd frequency (hrz)
     */
    getF3(): number;
    /**
     * Sets the 3rd frequency (hrz)
     * @param f3 3rd frequency (hrz)
     */
    setF3(f3: number): this;
    /**
     * Gets the 4th frequency (hrz)
     */
    getF4(): number;
    /**
     * Sets the 4th frequency (hrz)
     * @param f4 4nd frequency (hrz)
     */
    setF4(f4: number): this;
}
