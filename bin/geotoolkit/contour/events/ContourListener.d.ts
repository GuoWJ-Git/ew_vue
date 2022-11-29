import {ContourEvent} from './ContourEvent';

/**
 * Every class which is interested in receiving events from the
 *  contour shape must be derived from this class
 */
export class ContourListener {
    /**
     * Every class which is interested in receiving events from the
     *  contour shape must be derived from this class
     */
    constructor();
    /**
     * Called to notify the listener that the visual was invalidated.
     */
    contourInvalidated(): ContourEvent;
}
