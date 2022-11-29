/**
 * Base class for event wrappers used by tools and widgets.
 */
export class BaseEventArgs {
    /**
     * Base class for event wrappers used by tools and widgets.
     * @param eventName name of the event
     */
    constructor(eventName: string);
    /**
     * Returns event name
     */
    getEventName(): string;
    /**
     * Stops propagation
     */
    stopPropagation(): this;
    /**
     * Prevents default
     */
    preventDefault(): this;
    /**
     * Returns whether event has been cancelled
     */
    isCanceled(): boolean;
    /**
     * Returns whether event has been prevented default
     */
    isPreventDefault(): boolean;
}
