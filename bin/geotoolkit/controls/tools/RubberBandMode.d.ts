/**
 * Enums of RubberBand Selection Mode
 */
export enum RubberBandMode {
    /**
     * Collision
 will select if the object is touching the section rect
     */
    Collision = 'collision',
    /**
     * Inside
 will only select if the object is completely inside the section rect
     */
    Inside = 'inside'
}
