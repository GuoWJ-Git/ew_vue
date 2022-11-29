import {Event} from './Event';

/**
 * Constructs new visual event object, based on specified values
 */
export class VisualEvent extends Event {
    /**
     * Constructs new visual event object, based on specified values
     * @param source Source of event.
     * @param param Parameter of event (reference to shape, for example).
     * @param id Integer value - ID of event
     */
    constructor(source: any, param: any, id: number);
}
/**
 * The EventType enumeration describes what this VisualEvent actually is.
 */
export enum EventType {
    /**
     * The visual has been invalidated
     */
    VISUAL_INVALIDATED = 'onVisualInvalidated',
    /**
     * The visibility of the visual has changed
     */
    VISIBILITY_CHANGED = 'onVisualVisibilityChanged',
    /**
     * The colormap for the visual has changed
     */
    COLORMAP_CHANGED = 'onVisualColorMapChanged'
}
