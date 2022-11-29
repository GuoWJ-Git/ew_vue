import {ProxyEventArgs} from './ProxyEventArgs';
import {EventArgs} from './EventArgs';
import {Node} from '../../scene/Node';
import {AbstractCommand} from './editors/commands/AbstractCommand';
import {AbstractEditor} from './editors/AbstractEditor';

/**
 */
export class PaintEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs contains info about the event
     * @param options properties object
     * @param options.node node
     * @param options.command 
     * @param options.editor editor
     * @param options.distances distances array
     * @param options.value value
     */
    constructor(eventArgs: EventArgs, options: object | { node?: Node; command?: AbstractCommand; editor?: AbstractEditor; distances?: number[]; value?: number; } );
    /**
     * Gets command
     */
    getCommand(): AbstractCommand;
    /**
     * Gets editor
     */
    getEditor(): AbstractEditor;
    /**
     * Returns distances array
     */
    getDistances(): number[];
    /**
     * Returns value
     */
    getValue(): number;
}
