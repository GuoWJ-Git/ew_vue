import {EventDispatcher} from '../../util/EventDispatcher';
import {Orientation} from '../../util/Orientation';

/**
 * Define base class for all synchronization operations.
 */
export class SyncOperation {
    /**
     * Define base class for all synchronization operations.
     * @param name name of the operations
     */
    constructor(name: string);
    /**
     * Return a name of operation
     */
    getName(): string;
    /**
     * Connect events to item
     * @param events events to connect
     * @param item item to connect events
     * @param listener listener to be connected
     */
    connect(events: string[], item: EventDispatcher, listener: Function): void;
    /**
     * Disconnect events from item
     * @param events events to disconnect
     * @param item item to disconnect events
     * @param listener listener to be disconnected
     */
    disconnect(events: string[], item: EventDispatcher, listener: Function): void;
    /**
     * Gets data for the current operation
     * @param item item to get data
     * @param direction direction
     * @param options additional options
     */
    getData(item: object, direction: Orientation, options: object): object | any;
    /**
     * Sets data for the current operation
     * @param item item to set data
     * @param data data to set
     * @param direction direction
     * @param options options
     */
    setData(item: object, data: object, direction: Orientation, options: object): object;
}
