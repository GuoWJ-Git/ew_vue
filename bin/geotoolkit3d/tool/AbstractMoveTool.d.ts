import {AbstractGestureTool} from './AbstractGestureTool';
import {Object3D} from '../THREE';

/**
 * A base class to implement custom tools that move objects into the scene.<br>
 */
export class AbstractMoveTool extends AbstractGestureTool {
    /**
     * A base class to implement custom tools that move objects into the scene.<br>
     * @param options See {@link @int/geotoolkit3d/tool/AbstractGestureTool.AbstractGestureTool} for inherited options
     * @param options.object The object to be moved
     * @param options.armingkey The keycode to arm this tool, see {@link @int/geotoolkit3d/tool/AbstractGestureTool.AbstractGestureTool}
     * @param options.pickenabled True if this tool should permit selection of the object to move
     */
    constructor(options: object | { object?: Object3D; armingkey?: number; pickenabled?: boolean; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.object The object to be moved
     * @param options.enabled The status of this tool
     * @param options.pickenabled True if this tool should also handle selection (picking) of theobject to move
     */
    setOptions(options: object | { object?: Object3D; enabled?: boolean; pickenabled?: boolean; }  | any): this;
    /**
     * Get abstract move tool options
     * (see {@link @int/geotoolkit3d/tool/AbstractMoveTool.AbstractMoveTool#setOptions} for more info)
     */
    getOptions(): object | any;
    /**
     * Called when a 'onPick' event has occurred
     * @param event the native event with plot coordinates added
     */
    onPick(event: object): void;
    /**
     * Adds a listener that will be triggered each time this tool 'move' occurs.
     * @param callback The function that will be called
     */
    addMoveListener(callback: Function): this;
    /**
     * Removes a listener
     * @param callback The callback to remove
     */
    removeSelectionListener(callback: Function): this;
    /**
     * Called when a 'onKeyEnd' event has occurred
     * @param event the native event with plot coordinates added
     */
    onKeyEnd(event: object): void;
    /**
     * Called when a 'onDragStart' event has occurred
     * @param event the native event with plot coordinates added
     */
    onDragStart(event: object): void;
    /**
     * Called when a 'onDrag' event has occurred
     * @param event the native event with plot coordinates added
     */
    onDrag(event: object): void;
    /**
     * Called when a 'onDragEnd' event has occurred
     * @param event the native event with plot coordinates added
     */
    onDragEnd(event: object): void;
}
/**
 * Move status enumerator.<br>
 * <br>
 * This enum is used to describe the state of the tool.<br>
 */
export enum Status {
    /**
     * Object selected
     */
    Selected = 'selected',
    /**
     * Move started
     */
    Start = 'movestart',
    /**
     * Move occurred
     */
    Move = 'move',
    /**
     * Move ended
     */
    End = 'moveend'
}
