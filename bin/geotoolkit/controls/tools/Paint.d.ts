import {AbstractTool} from './AbstractTool';
import {PaintMode} from './PaintMode';
import {EditMode} from './EditMode';
import {History} from './editors/History';
import {EventArgs} from './EventArgs';
import {Node} from '../../scene/Node';
import {AbstractEditor} from './editors/AbstractEditor';
import {EditEvents} from './EditEvents';
import {AbstractCommand} from './editors/commands/AbstractCommand';

/**
 * Paint tool is used to create/modify nodes, using geotoolkit.controls.tools.editors.AbstractEditor's
 */
export class Paint extends AbstractTool {
    /**
     * Paint tool is used to create/modify nodes, using geotoolkit.controls.tools.editors.AbstractEditor's
     * @param options tool options
     * @param options.name tool name
     * @param options.mode paint mode to determine which shape is currently creating
     * @param options.editmode paint editor editing mode to determine which elements/features are allowed
     * @param options.history history to store commands (use for shared history)
     */
    constructor(options?: object | { name?: string; mode?: PaintMode; editmode?: EditMode; history?: History; } );
    /**
     * @param eventArgs event args
     */
    protected onMouseDown(eventArgs: EventArgs): void;
    /**
     * @param eventArgs event args
     */
    protected onMouseMove(eventArgs: EventArgs): void;
    /**
     * @param eventArgs event args
     */
    protected onMouseUp(eventArgs: EventArgs): void;
    /**
     * Forces editing shapes and handles to be updated
     */
    update(): this;
    /**
     * Sets painting mode
     * @param mode painting mode
     */
    setMode(mode: PaintMode): this;
    /**
     * Returns current painting mode
     */
    getMode(): PaintMode;
    /**
     * Sets paint tool properties (mode, styles, etc.)
     * @param props tool props
     * @param props.name tool name
     * @param props.mode paint mode to determine which shape is currently creating
     * @param props.editmode paint editor editing mode to determine which elements/features are allowed
     * @param props.history history to store commands (use for shared history)
     */
    setProperties(props?: object | { name?: string; mode?: PaintMode; editmode?: EditMode; history?: History; } ): this;
    /**
     * Returns all properties
     */
    getProperties(): {mode: PaintMode; editmode: EditMode; history: History} | any;
    /**
     */
    undo(): this;
    /**
     */
    canUndo(): boolean;
    /**
     */
    canRedo(): boolean;
    /**
     */
    redo(): this;
    /**
     * Sets tool edit mode (for nodes with node manipulators)
     * @param mode edit mode
     */
    setEditMode(mode: EditMode): this;
    /**
     * Returns tool current edit mode
     */
    getEditMode(): EditMode;
    /**
     * Returns the origin of currently edited shape (if exists, null otherwise).
     */
    getShape(): any | Node;
    /**
     * Starts editing the node provided
     * @param node node to edit
     */
    editNode(node: Node | Node[] | any): this;
    /**
     * For internal use
     * @param editor editor to use
     */
    protected setEditor(editor: AbstractEditor | any): this;
    /**
     * Returns current editor tool (if exists)
     */
    getEditor(): AbstractEditor | any;
    /**
     * Clears scene from all the painting elements
     */
    clear(): this;
    /**
     * Node created handler
     * @param editor editor that created node
     * @param eventArgs event args
     */
    protected onNodeCreated(editor: AbstractEditor, eventArgs: EventArgs): void;
    /**
     * @param eventName event name
     * @param editor active editor
     * @param command command applied
     */
    protected onCommandApplied(eventName: EditEvents, editor: AbstractEditor, command: AbstractCommand): void;
    /**
     * Returns current history
     */
    getHistory(): History;
}
