/**
 * SpeedCompression (used for PNG compression only)
 */
export enum SpeedCompression {
    /**
     * MEDIUM (reference)
     */
    MEDIUM = 'medium',
    /**
     * FAST (avg. 0.13x faster than medium)
     */
    FAST = 'fast',
    /**
     * SLOW (avg. 2.80x slower than medium)
     */
    SLOW = 'slow'
}
