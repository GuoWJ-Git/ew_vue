/**
 * Defines effect's interpolation mode.
 * For more information see {@link http://www.w3.org/TR/2001/REC-smil-animation-20010904/#AnimFuncCalcMode}.
 */
export enum CalcMode {
    /**
     * This specifies that the animation function will jump from one value to the next without any interpolation.
     */
    Discrete = 'Discrete',
    /**
     * Simple linear interpolation between values is used to calculate the animation function. This is the default CalcMode.
     */
    Linear = 'Linear',
    /**
     * Defines interpolation to produce an even pace of change across the animation. This is only
supported for values that define a linear numeric range, and for which some notion of "distance"
between points can be calculated (e.g. position, width, height, etc.). If "paced" is specified, any
keyTimes or keySplines will be ignored.
     */
    Paced = 'Paced',
    /**
     * Interpolates from one value in the values list to the next according to a time function defined
by a cubic Bezier spline. The points of the spline are defined in the keyTimes attribute, and the
control points for each interval are defined in the keySplines attribute.
     */
    Spline = 'Spline'
}
