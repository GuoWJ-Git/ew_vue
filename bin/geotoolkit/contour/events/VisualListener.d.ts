import {VisualEvent} from './VisualEvent';

/**
 * Every object which is interested in receiving events from the visual,
 *  must be derived from this class
 */
export class VisualListener {
    /**
     * Every object which is interested in receiving events from the visual,
     *  must be derived from this class
     */
    constructor();
    /**
     * Notifies us (the listener) that the visual was invalidated
     */
    onVisualInvalidated(): VisualEvent;
}
