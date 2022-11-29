import {Node} from '../../../../scene/Node';

/**
 * Abstract command to store information about actions made by geotoolkit.controls.tools.editors.AbstractEditor
 */
export class AbstractCommand {
    /**
     * Abstract command to store information about actions made by geotoolkit.controls.tools.editors.AbstractEditor
     */
    constructor();
    /**
     * Sets target node for the command
     * @param node node(s) for applying the command
     */
    setNode(node: Node | Node[]): this;
    /**
     * Returns target command node
     */
    getNode(): Node | Node[];
    /**
     * Tries to merge current with another command. If successful, return true and second command won't be stored in history.
     * Returns false otherwise.
     * @param command command to merge
     */
    merge(command: AbstractCommand): boolean;
    /**
     * Returns inverse command
     */
    createInverse(): this;
    /**
     * Sets command to be separate or not (true by default). Not separate commands are ignored by history undo/redo actions
     * and considered as a part of the last separate command.
     * @param isSeparate true if command should be considered as a separate operation (in undo/redo history), false otherwise
     */
    setSeparate(isSeparate: boolean): this;
    /**
     * Returns true if command is separate, false otherwise
     */
    isSeparate(): boolean;
    /**
     * Sets extra options to be stored in command
     * @param options some extra options for the command to store
     */
    setOptions(options: object): this;
    /**
     * Returns command options
     */
    getOptions(): object | null | any;
    /**
     * Returns event to be fired when command is applied
     */
    getEventName(): string | null;
}
