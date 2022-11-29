import {ProxyEventArgs} from '../ProxyEventArgs';
import {EventArgs} from '../EventArgs';
import {Rect} from '../../../util/Rect';

/**
 * ScrollEventArgs
 */
export class ScrollEventArgs extends ProxyEventArgs {
    /**
     * ScrollEventArgs
     * @param eventArgs info about event arguments
     * @param modelLimits visible model limits
     */
    constructor(eventArgs: EventArgs, modelLimits: Rect);
    /**
     * Return visibles limits
     */
    getVisibleModelLimits(): Rect;
}
