import {AbstractGestureTool} from '../AbstractGestureTool';
import {AbstractCursor} from './AbstractCursor';
import {Vector3} from '../../THREE';

/**
 * A tool providing cursor representation in 3D.<br>
 * This tool will listen to cursor events and notify the internal cursor representation.<br>
 */
export class CursorTool extends AbstractGestureTool {
    /**
     * A tool providing cursor representation in 3D.<br>
     * This tool will listen to cursor events and notify the internal cursor representation.<br>
     * @param options See geotoolkit3d.tool.AbstractGestureTool for inherited options
     * @param options.cursor The cursor to update on mouse move
     * @param options.name tool name
     */
    constructor(options: object | { cursor?: AbstractCursor; name?: string; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.enabled The status of this tool
     * @param options.cursor The cursor to update on mouse move
     */
    setOptions(options: object | { enabled?: boolean; cursor?: AbstractCursor; } ): this;
    /**
     * Get cursor tool options
     * (see {@link @int/geotoolkit3d/tool/cursor/CursorTool.CursorTool#setOptions} for more info)
     */
    getOptions(): object | any;
    /**
     * Moves the cursor at the given position.<br>
     * This does not fire an event.<br>
     * @param position The new position or null to hide the cursor
     */
    moveCursor(position: Vector3 | any): void;
    /**
     * Adds a listener that will be triggered each time this tool 'move' occurs.
     * @param callback The function that will be called
     */
    addMoveListener(callback: Function): this;
    /**
     * Removes a listener
     * @param callback The listener callback
     */
    removeMoveListener(callback: Function): this;
}
