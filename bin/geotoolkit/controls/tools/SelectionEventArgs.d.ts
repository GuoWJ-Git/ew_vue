import {ProxyEventArgs} from './ProxyEventArgs';
import {EventArgs} from './EventArgs';
import {Node} from '../../scene/Node';
import {SelectionMode} from './SelectionMode';

/**
 * SelectionEventArgs
 */
export class SelectionEventArgs extends ProxyEventArgs {
    /**
     * SelectionEventArgs
     * @param eventArgs contains info about the event arguments
     * @param selection array of selected nodes
     * @param selectionMode 
     */
    constructor(eventArgs: EventArgs, selection: Node[], selectionMode: SelectionMode | string);
    /**
     * returns selection mode
     */
    getSelectionMode(): SelectionMode | string;
    /**
     * returns array of selected nodes
     */
    getSelection(): Node[];
    /**
     * set array of selected nodes
     * @param selection array of selected nodes
     */
    setSelection(selection: Node[]): this;
}
