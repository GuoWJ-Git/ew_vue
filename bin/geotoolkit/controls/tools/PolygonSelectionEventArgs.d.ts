import {ProxyEventArgs} from './ProxyEventArgs';
import {EventArgs} from './EventArgs';
import {Node} from '../../scene/Node';

/**
 */
export class PolygonSelectionEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs contains info about the event
     * @param selection array of selected nodes
     * @param coordinates 
     * @param coordinates.x x coordinate
     * @param coordinates.y y coordinate
     */
    constructor(eventArgs: EventArgs, selection: Node[], coordinates: object | { x: number[]; y: number[]; } );
    /**
     * Gets painted shape's coordinates in model coordinates
     */
    getCoordinates(): any;
    /**
     * gets array of selected nodes
     */
    getSelection(): Node[];
    /**
     * set selection
     * @param selection array of selected nodes
     */
    setSelection(selection: Node[]): this;
}
