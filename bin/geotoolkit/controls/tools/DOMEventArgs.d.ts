import {ProxyEventArgs} from './ProxyEventArgs';
import {Node} from '../../scene/Node';
import {Point} from '../../util/Point';
import {EventArgs} from './EventArgs';

/**
 * DOMSupport event arguments
 */
export class DOMEventArgs extends ProxyEventArgs {
    /**
     * DOMSupport event arguments
     * @param selection array of selected nodes
     * @param point mouse position in device coordinates
     * @param eventArgs contains info about the event
     */
    constructor(selection: Node[], point: Point, eventArgs?: EventArgs);
    /**
     * Return mouse position in device coordinates
     */
    getMousePosition(): Point;
    /**
     * Returns array of selected nodes
     */
    getSelection(): Node[];
}
