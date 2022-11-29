import {ProxyEventArgs} from './ProxyEventArgs';
import {EventArgs} from './EventArgs';

/**
 * @deprecated since 2021.1 (3.3) use geotoolkit.controls.tools.PolygonSelectionEventArgs instead
 */
export class PolygonToolEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs contains info about the event
     * @param coordinates painted shape's coordinates
     */
    constructor(eventArgs: EventArgs, coordinates: any);
    /**
     * Gets painted shape's coordinates in model coordinates
     */
    getCoordinates(): any;
}
