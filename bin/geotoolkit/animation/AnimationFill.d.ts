/**
 * Defines animation behavior after it just ended.
 * For more information see {@link http://www.w3.org/TR/2001/REC-smil-animation-20010904/#Fill}.
 */
export enum AnimationFill {
    /**
     * The animation effect F(t) is defined to freeze the effect value at the last value of the active
duration. The animation effect is "frozen" for the remainder of the document duration (or until
the animation is restarted - see Restarting Animations).
     */
    Freeze = 'Freeze',
    /**
     * The animation effect is removed (no longer applied) when the active duration of the animation is
over. After the active end AE of the animation, the animation no longer affects the target (unless
the animation is restarted - see Restarting Animations).
This is the default value.
     */
    Remove = 'Remove'
}
