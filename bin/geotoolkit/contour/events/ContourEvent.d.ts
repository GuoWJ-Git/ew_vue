import {Event} from './Event';

/**
 * Event is fired by an object to notify other objects about changes that might affect them
 *  Eg. changing a parameter or data, changes the final display
 *  Constructs new event object, based on specified values
 */
export class ContourEvent extends Event {
    /**
     * Event is fired by an object to notify other objects about changes that might affect them
     *  Eg. changing a parameter or data, changes the final display
     *  Constructs new event object, based on specified values
     * @param source Source of event.
     * @param param Parameter of event (reference to shape, for example).
     * @param id Integer value - ID of event
     */
    constructor(source: any, param: any, id: number);
}
/**
 * The EventType enumeration is used to describe the type of event being represented
 *  by the ContourEvent. Typically something has changed, but what exactly?
 */
export enum EventType {
    /**
     * The Contour Scale has changed
     */
    SCALE_CHANGED = 'onContourScaleChanged',
    /**
     * The Contour Grid has changed
     */
    GRID_CHANGED = 'onContourGridChanged',
    /**
     * The Contour Processor has changed
     */
    PROCESSOR_CHANGED = 'onContourProcessorChanged',
    /**
     * The Bounding Box of the Contour Shape has changed
     */
    BBOX_CHANGED = 'onContourBBoxChanged',
    /**
     * A visual has been added to the contour shape
     */
    VISUAL_ADDED = 'onContourVisualAdded',
    /**
     * A visual has been removed from the contour shape
     */
    VISUAL_REMOVED = 'onContourVisualRemoved',
    /**
     * The projection has changed
     */
    PROJECTION_CHANGED = 'onContourProjectionChanged',
    /**
     * The faults have changed
     */
    FAULTS_CHANGED = 'onContourFaultsChanged'
}
