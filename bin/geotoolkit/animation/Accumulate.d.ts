/**
 * Controls whether or not the animation is cumulative.
 * For more information {@link http://www.w3.org/TR/2001/REC-smil-animation-20010904/#AccumulateAttribute}.
 */
export enum Accumulate {
    /**
     * Specifies that repeat iterations are not cumulative. This is the default.
     */
    None = 'None',
    /**
     * Specifies that each repeat iteration after the first builds upon the last value of the previous iteration.
     */
    Sum = 'Sum'
}
