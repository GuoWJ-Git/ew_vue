import {ProxyEventArgs} from './ProxyEventArgs';
import {EventArgs} from './EventArgs';
import {Rect} from '../../util/Rect';

/**
 */
export class ZoomEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs contains info about the event
     * @param options event options or scaling options
     * @param options.x scaling x
     * @param options.y scaling y
     * @param options.point point of scaling
     * @param options.point.x x point of scaling
     * @param options.point.y y point of scaling
     * @param options.scaling scaling options
     * @param options.visiblemodellimits visible model limits
     */
    constructor(eventArgs: EventArgs, options?: object | { x?: number; y?: number; point?: object | { x?: number; y?: number; } ; scaling?: number; visiblemodellimits?: Rect; } );
    /**
     * Returns scaling options
     */
    getScaling(): object | null;
    /**
     * Returns the visible model limits
     */
    getVisibleModelLimits(): Rect | null;
}
