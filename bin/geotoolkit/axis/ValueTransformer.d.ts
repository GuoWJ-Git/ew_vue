/**
 * Abstraction to formalize an input value transform
 */
export class ValueTransformer {
    /**
     * Abstraction to formalize an input value transform
     */
    constructor();
    /**
     * Transforms input value
     * @param inputValue value to transform
     */
    transform(inputValue: number): number;
}
