import {ProxyEventArgs} from './ProxyEventArgs';
import {EventArgs} from './EventArgs';
import {Rect} from '../../util/Rect';

/**
 */
export class RubberBandEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs contains info about the event
     * @param area selected area in the model coordinates
     */
    constructor(eventArgs: EventArgs, area: Rect);
    /**
     * Return a selected area in the model coordinates
     */
    getArea(): Rect;
}
