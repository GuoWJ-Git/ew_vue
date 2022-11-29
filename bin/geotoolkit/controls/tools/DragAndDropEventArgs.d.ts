import {ProxyEventArgs} from './ProxyEventArgs';
import {EventArgs} from './EventArgs';
import {Node} from '../../scene/Node';

/**
 */
export class DragAndDropEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs info about the event arguments
     * @param elements active elements
     */
    constructor(eventArgs: EventArgs, elements: Node | (Node | any)[]);
    /**
     * Get active element
     */
    getElements(): Node[] | any[];
}
