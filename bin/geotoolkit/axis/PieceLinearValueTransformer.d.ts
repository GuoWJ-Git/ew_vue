import {ValueTransformer} from './ValueTransformer';

/**
 * ValueTransform implementation for piece-linear case.
 */
export class PieceLinearValueTransformer extends ValueTransformer {
    /**
     * ValueTransform implementation for piece-linear case.
     * @param inputValues array of input values or object with all props
     * @param inputValues.inputvalues array of input values
     * @param inputValues.outputvalues array of output values
     * @param inputValues.extrapolationtype Enum of ExtrapolationType
     * @param outputValues array of output values
     * @param extrapolationType Enum of ExtrapolationType
     */
    constructor(inputValues?: number[] | object | { inputvalues?: number[]; outputvalues?: number[]; extrapolationtype?: ExtrapolationType; } , outputValues?: number[], extrapolationType?: ExtrapolationType);
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {inputvalues: number[]; outputvalues: number[]; extrapolationtype: ExtrapolationType} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.inputvalues array of input values with size not less than 2
     * @param properties.outputvalues array of output values
     * @param properties.extrapolationtype Enum of ExtrapolationType
     */
    setProperties(properties: object | { inputvalues?: number[]; outputvalues?: number[]; extrapolationtype?: ExtrapolationType; } ): this;
    /**
     * Gets extrapolation type (by default: PieceLinearValueTransformer.ExtrapolationType.Boundary)
     */
    getExtrapolationType(): ExtrapolationType;
    /**
     * Sets extrapolation type for out-of-range input values
     * @param extrapolationType Enum of ExtrapolationType
     */
    setExtrapolationType(extrapolationType: ExtrapolationType): this;
    /**
     * Transforms input value
     * @param val inputValue value to transform
     * @param reverse direction of transformation
     */
    transform(val: number, reverse?: boolean): number;
}
/**
 * Enum of extrapolation types (Out-of-range input value's transformed value)
 */
export enum ExtrapolationType {
    /**
     * Transformed value is Number.NaN
     */
    NaN = -1,
    /**
     * Transformed value is equal to corresponding boundary's output value
     */
    Boundary = 0,
    /**
     * Transformed value is an linearly extrapolated value based on corresponding boundary's piece mapping.
     */
    Extrapolated = 1
}
