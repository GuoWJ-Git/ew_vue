import {VisualEvent} from './VisualEvent';

/**
 * The fill visual event. This class encapsulates more event types that its superclass.
 */
export class FillVisualEvent extends VisualEvent {
    /**
     * The fill visual event. This class encapsulates more event types that its superclass.
     * @param source Source of event.
     * @param param Parameter of event (reference to shape, for example).
     * @param id Integer value - ID of event
     */
    constructor(source: any, param: any, id: number);
}
/**
 * The EventType enumeration describes what this FillVisualEvent actually is.
 */
export enum EventType {
    /**
     * The visual has been invalidated
     */
    VISUAL_INVALIDATED = 'onFillVisualInvalidated',
    /**
     * The visibility of the visual has changed
     */
    VISIBILITY_CHANGED = 'onFillVisibilityChanged',
    /**
     * The colormap for the visual has changed
     */
    COLORMAP_CHANGED = 'onFillColorMapChanged',
    /**
     * The style of holes has changed
     */
    HOLES_CHANGED = 'onFillHolesChanged'
}
