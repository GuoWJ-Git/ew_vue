/**
 * The base class for all contour events.
 *  Constructs new event object, based on specified values
 */
export class Event {
    /**
     * The base class for all contour events.
     *  Constructs new event object, based on specified values
     * @param source Source of event.
     * @param param Parameter of event (reference to shape, for example).
     * @param id Integer value - ID of event
     */
    constructor(source: any, param: any, id: number);
    /**
     * Obtains the source object of this event.
     */
    getSource(): any;
    /**
     * Gets the parameter object associated with this event.
     */
    getParameter(): any;
    /**
     * Retrieves the ID of this event.
     */
    getID(): number;
}
