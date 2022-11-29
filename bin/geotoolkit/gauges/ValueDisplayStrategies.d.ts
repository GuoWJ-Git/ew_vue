/**
 * Different modes that define how the value and name texts fit the regions they are rendered in.
 */
export enum ValueDisplayStrategies {
    /**
     * Resize the text to fit the bounds of its container
     */
    ResizeToFit = 'resizetofit',
    /**
     * Keep the text font, but apply ellipsis if doesn't fit the container
     */
    FromFont = 'fromfont',
    /**
     * Text is calculated in model limits. Shrinks and expands with container. Unproportional.
     */
    ShrinkExpand = 'shrinkexpand',
    /**
     * If the width of the text is smaller than the width of the container, text will rotate clockwise.
     */
    RotateClockwise = 'rotateclockwise',
    /**
     * If the width of the text is smaller than the width of the container, text will rotate counterclockwise.
     */
    RotateCounterClockwise = 'rotatecounterclockwise',
    /**
     * Text fits the height of the region bounds. Ellipsis will be applied if does not fit the width.
     */
    FitToHeight = 'fittoheight',
    /**
     * Adds line breaks to fit region bounds.
     */
    WrappedText = 'wrappedtext',
    /**
     * Adds line breaks between words to fit region bounds.
     */
    WrappedWords = 'wrappedwords'
}
