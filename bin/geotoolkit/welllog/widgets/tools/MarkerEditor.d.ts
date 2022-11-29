import {AbstractLogVisualEditingTool} from './AbstractLogVisualEditingTool';
import {Group} from '../../../scene/Group';
import {Layer} from '../../../scene/Layer';
import {Node} from '../../../scene/Node';

/**
 * <p>
 * Implements a tool which edits log markers (tops), or allows to visually create them.
 * </p>
 * <p>
 * This tool does not edit the actual marker visual. Instead it fires events which contain all the information
 * which is needed to manipulate or create a log marker. The tool can work in two modes: Edit and Insert.
 * </p>
 * <h4>
 * Edit Mode:
 * </h4>
 * <p>
 * Draws handles on top of a log marker which has been associated with the tool. When handles are clicked and
 * dragged, either draws a ghost in the dragged position, or drags the actual handle. In ghost mode, no events
 * are fired until the handles are released (by releasing the mouse button). In ghost mode set to false, fires dragging
 * events every time a move occurs.
 * </p>
 * <ul>
 * <li>When a mouse down occurs, "dragstart" event is fired with parameters:
 * <ul>
 * <li>depth: The depth (y) in track model limits representing the position of the pointer</li>
 * <li>shape: The log visual which is being manipulated
 * </ul>
 * </li>
 * <li>When a mouse up occurs, "dragend" event is fired with parameters:
 * <ul>
 * <li>depth: The depth (y) in track model limits representing the position of handles</li>
 * <li>shape: The log visual which is being manipulated
 * </ul>
 * </li>
 * <li>If a mouse move occurs, "dragging" event is fired (When ghost mode is set to false) with parameters:
 * <ul>
 * <li>depth: the new depth (y) of the handles, resultant from the dragging action</li>
 * <li>shape: The log visual which is being manipulated
 * </ul>
 * </li>
 * </ul>
 * <h4>Insert Mode:</h4>
 * <p>
 * Fires an "insert" event when a mouse down on the track occurs.
 * </p>
 * <ul>
 * <li>When a mouse down occurs, "insert" event is fired with following arguments:
 * <ul>
 * <li>depth: The depth (y) of the mouse pointer in the model of the track where a log marker should be inserted</li>
 * <li>shape: The log track where to insert the marker
 * </ul>
 * </li>
 * </ul>
 * </br>
 * <h3>Working With Marker Editor</h3>
 * <p>
 *     For Marker Editor to work, it always needs a reference to either the marker which is being manipulated, or to the
 *     track where a marker will be inserted. To start operating the tool enable it through setEnabled() and  pass the
 *     appropriate shape to the tool through setShape(). To disassociate the Marker Editor and hide the handles without
 *     disabling the tool call setShape with a null argument.
 * </p>
 */
export class MarkerEditor extends AbstractLogVisualEditingTool {
    /**
     * <p>
     * Implements a tool which edits log markers (tops), or allows to visually create them.
     * </p>
     * <p>
     * This tool does not edit the actual marker visual. Instead it fires events which contain all the information
     * which is needed to manipulate or create a log marker. The tool can work in two modes: Edit and Insert.
     * </p>
     * <h4>
     * Edit Mode:
     * </h4>
     * <p>
     * Draws handles on top of a log marker which has been associated with the tool. When handles are clicked and
     * dragged, either draws a ghost in the dragged position, or drags the actual handle. In ghost mode, no events
     * are fired until the handles are released (by releasing the mouse button). In ghost mode set to false, fires dragging
     * events every time a move occurs.
     * </p>
     * <ul>
     * <li>When a mouse down occurs, "dragstart" event is fired with parameters:
     * <ul>
     * <li>depth: The depth (y) in track model limits representing the position of the pointer</li>
     * <li>shape: The log visual which is being manipulated
     * </ul>
     * </li>
     * <li>When a mouse up occurs, "dragend" event is fired with parameters:
     * <ul>
     * <li>depth: The depth (y) in track model limits representing the position of handles</li>
     * <li>shape: The log visual which is being manipulated
     * </ul>
     * </li>
     * <li>If a mouse move occurs, "dragging" event is fired (When ghost mode is set to false) with parameters:
     * <ul>
     * <li>depth: the new depth (y) of the handles, resultant from the dragging action</li>
     * <li>shape: The log visual which is being manipulated
     * </ul>
     * </li>
     * </ul>
     * <h4>Insert Mode:</h4>
     * <p>
     * Fires an "insert" event when a mouse down on the track occurs.
     * </p>
     * <ul>
     * <li>When a mouse down occurs, "insert" event is fired with following arguments:
     * <ul>
     * <li>depth: The depth (y) of the mouse pointer in the model of the track where a log marker should be inserted</li>
     * <li>shape: The log track where to insert the marker
     * </ul>
     * </li>
     * </ul>
     * </br>
     * <h3>Working With Marker Editor</h3>
     * <p>
     *     For Marker Editor to work, it always needs a reference to either the marker which is being manipulated, or to the
     *     track where a marker will be inserted. To start operating the tool enable it through setEnabled() and  pass the
     *     appropriate shape to the tool through setShape(). To disassociate the Marker Editor and hide the handles without
     *     disabling the tool call setShape with a null argument.
     * </p>
     * @param options layer to which handles will be added or tool options
     * @param options.mode mode in which this tool will work
     */
    constructor(options?: Group | Layer | object | { mode?: Modes; } );
    /**
     * Implements the logic of mouse move event handler
     * If in editing mode and a handle has been locked in for mouse move, moves that handle.
     * If in insert mode, updates the position of the handle to represent where a marker will be inserted (by pointer position)
     * Stops propagation of mouse down event
     * @param eventArgs Native event arguments received from EventDispatcher
     */
    onMouseMove(eventArgs: any): this;
    /**
     * Creates three handles which are used to edit or create a marker:
     * Two bubbles on the ends of the marker line, and one line handle connecting them
     */
    protected createHandles(): void;
    /**
     * Updates the state of this tool. Recalculates handle positions, updates the styles, and
     * hides/shows handles based on the current state
     */
    update(): this;
    /**
     * Sets the type of manipulations which this tool should do.
     * Edit mode will draw handles on an existing marker and fire events when the position of those has been changed
     * Insert mode will draw handles to follow the mouse pointer and will fire an insert event at the position of
     * the pointer when a mouse down happens
     * @param mode The mode to set on the tool
     */
    setMode(mode: string | Modes): this;
    /**
     * Sets the shape which this tool has to edit. In insert mode sets the track to which a LogMarker should be inserted
     * @param shape The marker to edit, or the
     * track to which a marker should be added
     */
    setShape(shape: Node | any): this;
    /**
     * Returns the mode in which this tool is currently working. See setMode
     */
    getMode(): string | Modes;
    /**
     * Iterates through handles and sets the provided visibility.
     * Ghosts are hidden always, even if the visibility is set to true
     * @param visible Visibility flag for handles
     */
    protected setHandlesVisible(visible: boolean): this;
}
/**
 * Defines the editing mode supported by this tool
 */
export enum Modes {
    /**
     * The mode when an existing marker can be edited to change depth
     */
    Edit = 'edit',
    /**
     * The mode when a new marked can be added
     */
    Insert = 'insert'
}
