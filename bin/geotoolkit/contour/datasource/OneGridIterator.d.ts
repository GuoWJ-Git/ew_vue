import {AbstractIterator} from './AbstractIterator';

/**
 * The iterator for the one grid datasource
 */
export class OneGridIterator extends AbstractIterator {
    /**
     * The iterator for the one grid datasource
     */
    constructor();
    /**
     * Gets the current enumerated item
     */
    getCurrent(): any;
    /**
     * Checks if the iterator can move to next item
     */
    hasNext(): boolean;
    /**
     * Moves the iterator to the next item
     */
    moveNext(): boolean;
    /**
     * Resets the iterator to the first item.
     */
    reset(): void;
}
