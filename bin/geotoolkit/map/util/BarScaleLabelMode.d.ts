/**
 * BarScale Labeling Mode defines what axis labels are shown for the BarScale map object
 */
export enum BarScaleLabelMode {
    /**
     * Edge labels are visible (min and max values only)
     */
    Edge = 'Edge',
    /**
     * Max label is visible
     */
    Max = 'Max',
    /**
     * Hide overlapped labels (max value is always visible)
     */
    NoOverlap = 'NoOverlap',
    /**
     * All labels are visible (overlapping allowed)
     */
    All = 'All'
}
