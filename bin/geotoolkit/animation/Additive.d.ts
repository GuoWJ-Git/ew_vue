/**
 * Controls whether or not the animation is additive.
 * For more information see {@link http://www.w3.org/TR/2001/REC-smil-animation-20010904/#AdditiveAnim}.
 */
export enum Additive {
    /**
     * Specifies that the animation will override the underlying value of the attribute and other lower priority animations.
This is the default, however the behavior is also affected by the animation value attributes by
and to, as described in {@link http://www.w3.org/TR/2001/REC-smil-animation-20010904/#FromToByAndAdditive} SMIL Animation: How from, to and by attributes affect additive behavior</a>.
     */
    Replace = 'Replace',
    /**
     * Specifies that the animation will add to the underlying value of the attribute and other lower priority animations.
     */
    Sum = 'Sum'
}
