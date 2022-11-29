import {ProxyEventArgs} from './ProxyEventArgs';
import {EventArgs} from './EventArgs';
import {Point} from '../../util/Point';

/**
 * CrossHairEventArgs
 */
export class CrossHairEventArgs extends ProxyEventArgs {
    /**
     * CrossHairEventArgs
     * @param eventArgs contains info of the event
     * @param position mouse position
     */
    constructor(eventArgs: EventArgs, position: object | Point);
    /**
     * returns cursor position
     */
    getPosition(): Point;
}
