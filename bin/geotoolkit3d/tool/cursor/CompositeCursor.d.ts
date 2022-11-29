import {AbstractCursor} from './AbstractCursor';
import {Vector3} from '../../THREE';

/**
 * A composite cursor that can contain several cursors.<br>
 * <br>
 * The main advantage of using CompositeCursor instead of having several CursorTool is that is avoid doing a Picking operation for each sub cursor.
 */
export class CompositeCursor extends AbstractCursor {
    /**
     * A composite cursor that can contain several cursors.<br>
     * <br>
     * The main advantage of using CompositeCursor instead of having several CursorTool is that is avoid doing a Picking operation for each sub cursor.
     * @param options See geotoolkit3d.scene.Object3D for inherited options
     * @param options.cursors The cursors to add
     */
    constructor(options: object | { cursors: AbstractCursor[]; } );
    /**
     * Set the cursor position in world coordinates
     * @param position The new cursor position
     */
    setCursorPosition(position: Vector3): this;
}
