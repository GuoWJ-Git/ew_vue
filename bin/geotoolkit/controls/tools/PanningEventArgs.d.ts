import {ProxyEventArgs} from './ProxyEventArgs';
import {EventArgs} from './EventArgs';

/**
 */
export class PanningEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs contains info about the event
     * @param direction direction of the object
     * @param direction.x direction x of the panning
     * @param direction.y direction y of the panning
     * @param wheel is eventArgs is wheel event args
     */
    constructor(eventArgs: EventArgs, direction?: object | { x?: number; y?: number; } , wheel?: boolean);
    /**
     * Return wheel flag
     */
    isWheel(): boolean;
    /**
     * Return direction object for e.g.: {'x': 0 ,'y': -10} will go
     */
    getDirection(): object | null;
}
