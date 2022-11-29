/**
 * Enum for the rendering of the rubber band tool
 */
export enum RubberBandRenderMode {
    /**
     * As is - no modifications to resize area
     */
    Free = 0,
    /**
     * Horizontal resize only
     */
    Horizontal = 1,
    /**
     * Vertical resize only
     */
    Vertical = 2,
    /**
     * Keep aspect ratio resize
     */
    AspectRatio = 3
}
