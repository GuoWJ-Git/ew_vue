import {AbstractTool} from '../AbstractTool';
import {Node} from '../../../scene/Node';
import {History} from './History';
import {EditMode} from '../EditMode';
import {Path} from '../../../scene/shapes/Path';
import {EventArgs} from '../EventArgs';
import {Rect} from '../../../util/Rect';
import {Transformation} from '../../../util/Transformation';

/**
 * Abstract tool to edit/create geotoolkit.scene.Node. Can be used both separately or in geotoolkit.controls.tools.Paint
 * tool to emulate the standard editors behavior.
 */
export class AbstractEditor extends AbstractTool {
    /**
     * Abstract tool to edit/create geotoolkit.scene.Node. Can be used both separately or in geotoolkit.controls.tools.Paint
     * tool to emulate the standard editors behavior.
     * @param options editor options
     * @param options.node node to create/edit
     * @param options.history history to store commands (use for shared history)
     * @param options.editmode node edit mode
     * @param options.bbox bounding box path to draw bounding rectangle
     * @param options.handles handles properties
     * @param options.handles.bbox bbox resize handles properties (see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties})
     * @param options.handles.rotation rotation handle properties (see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties})
     */
    constructor(options?: object | { node?: Node; history?: History; editmode?: EditMode; bbox?: Path; handles?: object | { bbox?: any; rotation?: any; } ; } );
    /**
     * @param options options
     */
    protected initialize(options: object): void;
    /**
     * Checks if editor supports the options provided
     * @param options editor options
     */
    protected isSupported(options: any): boolean;
    /**
     * Handles mouse down event
     * @param eventArgs event args
     */
    protected onMouseDown(eventArgs: EventArgs): void;
    /**
     * Handles mouse move event
     * @param eventArgs event args
     */
    protected onMouseMove(eventArgs: EventArgs): void;
    /**
     * Handles mouse up event
     * @param eventArgs event args
     */
    protected onMouseUp(eventArgs: EventArgs): void;
    /**
     * Handles mouse leave event
     * @param eventArgs event args
     */
    protected onLeave(eventArgs: EventArgs): void;
    /**
     * Handles key down event
     * @param eventArgs event args
     */
    protected onKeyDown(eventArgs: EventArgs): void;
    /**
     * Resets current node to the initial state before all the changes were made
     * @param unlink true, for remove node from parent, else false
     */
    protected resetNode(unlink?: boolean): this;
    /**
     * Applies command to the current node
     * @param command command to apply
     */
    protected apply(command: any): this;
    /**
     * Cancels last command in history (if possible)
     */
    undo(): this;
    /**
     * Reapplies last canceled command in history (if possible)
     */
    redo(): this;
    /**
     * Checks if there is command in history to undo
     */
    canUndo(): boolean;
    /**
     * Checks if there is command in history to redo
     */
    canRedo(): boolean;
    /**
     * Returns current history
     */
    getHistory(): History;
    /**
     * Forces editing shapes and handles to be updated
     */
    update(): this;
    /**
     * @param eventArgs event args
     * @param cursor browser cursor to set
     */
    protected updateBrowserCursor(eventArgs: EventArgs, cursor?: string): void;
    /**
     * Pushes command to the history after applying it and firing the corresponding event
     * @param command command to add to the history
     */
    protected push(command: object): this;
    /**
     * Sets edit mode to determine operations that can be applied to the current node. Use bitwise operations for the
     * full customization.
     * @param mode mode to edit
     */
    setEditMode(mode: EditMode): this;
    /**
     * Returns current edit mode
     */
    getEditMode(): EditMode;
    /**
     * Returns current node
     */
    getNode(): Node;
    /**
     * Sets node to edit
     * @param node node to edit
     */
    protected setNode(node: Node): this;
    /**
     * Sets properties to the editing elements
     * @param properties editor properties
     * @param properties.node current node properties to set (see {@link @int/geotoolkit/scene/Node.Node#setProperties})
     * @param properties.bbox bbox path properties to set (see {@link @int/geotoolkit/scene/shapes/Path.Path#setProperties})
     * @param properties.editmode node edit mode
     * @param properties.handles handles properties
     * @param properties.handles.bbox bbox resize handles properties (see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties})
     * @param properties.handles.rotation rotation handle properties (see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties})
     */
    setProperties(properties: object | { node?: any; bbox?: any; editmode?: EditMode; handles?: object | { bbox?: any; rotation?: any; } ; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {node: any; bbox: any; editmode: EditMode; handles: {bbox: any; rotation: any}} | any;
    /**
     * Returns bounds for the bounding box elements
     */
    getBounds(): Rect | null;
    /**
     * Returns current bounding box handle if no arguments provided, or bounding box element index that is currently
     * under mouse event, null if nothing is
     * @param eventArgs event args
     */
    protected getBboxHandle(eventArgs?: EventArgs): number | any;
    /**
     * Returns current node local transformation
     */
    protected getLocalTransform(): Transformation;
    /**
     * Ends current node creation, fires the corresponding event and clones new empty node for the new creation
     * @param eventArgs event args
     */
    protected end(eventArgs: EventArgs): void;
    /**
     */
    protected getVisible(): boolean;
}
