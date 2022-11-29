/**
 * Enum of highlight strategy
 */
export enum TrackHighlightStrategy {
    /**
     * HighlightOnTop, both border and fill renders on top
     */
    HighlightOnTop = 'top',
    /**
     * HighlightOnTop, fill renders at bottom but border on top
     */
    HighlightSplitted = 'splitted',
    /**
     * HightlightAtBottom, both border and fill renders at bottom
     */
    HighlightAtBottom = 'bottom'
}
