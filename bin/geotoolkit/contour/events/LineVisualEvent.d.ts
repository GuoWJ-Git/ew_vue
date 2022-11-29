import {VisualEvent} from './VisualEvent';

/**
 * Constructs new visual event object, based on specified values
 */
export class LineVisualEvent extends VisualEvent {
    /**
     * Constructs new visual event object, based on specified values
     * @param source Source of event.
     * @param param Parameter of event (reference to shape, for example).
     * @param id Integer value - ID of event
     */
    constructor(source: any, param: any, id: number);
}
/**
 * The EventType enumeration describes what this LineVisualEvent actually represents
 */
export enum EventType {
    /**
     * The visual has been invalidated
     */
    VISUAL_INVALIDATED = 'onLineVisualInvalidated',
    /**
     * The visibility of the visual has changed
     */
    VISIBILITY_CHANGED = 'onLineVisibilityChanged',
    /**
     * The colormap for the visual has changed
     */
    COLORMAP_CHANGED = 'onLineColorMapChanged',
    /**
     * The line or label style has changed
     */
    STYLE_CHANGED = 'onLineStyleChanged',
    /**
     * The index stepping for the isolines has changed
     */
    STEP_CHANGED = 'onLineStepChanged',
    /**
     * The format for the label text has changed
     */
    FORMAT_CHANGED = 'onLineFormatChanged',
    /**
     * The size of the margins around the labels, has changed
     */
    MARGIN_CHANGED = 'onLineMarginChanged',
    /**
     * The spacing of labels along the isolines, has changed
     */
    SPACING_CHANGED = 'onLineSpacingChanged'
}
