/**
 * The base class for all the iterators that are used by contour
 */
export class AbstractIterator {
    /**
     * The base class for all the iterators that are used by contour
     */
    constructor();
    /**
     * Gets the current enumerated item
     */
    getCurrent(): any;
    /**
     * Moves the iterator to the next item
     */
    moveNext(): boolean;
    /**
     * Resets the iterator to the first item.
     */
    reset(): void;
}
