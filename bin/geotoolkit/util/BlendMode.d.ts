/**
 * Describes how colors should appear when elements overlaps
 */
export enum BlendMode {
    /**
     * This attribute applies no blending whatsoever
     */
    Normal = 'Normal',
    /**
     * The element is multiplied by the background
and replaces the background color. The resulting
color is always as dark as the background.
     */
    Multiply = 'Multiply'
}
