/**
 * Wrap mode
 */
export enum WrapMode {
    /**
     * Adds line breaks between words
to fit it into a user defined width Will not Split words that are larger than Width
*WARNING* This is an expensive operation and using it for very large pieces of texts
is not advised If you know your width and font and will not be changing these it is
better to manually split the line yourself
     */
    Wrap = 'wrap',
    /**
     * Calculates text size based only on font
     */
    Cut = 'cut'
}
