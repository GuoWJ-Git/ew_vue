import {Object3D} from '../../scene/Object3D';
import {Vector3} from '../../THREE';

/**
 * Abstract class for 3D cursor shapes.<br>
 * <br>
 * Subclasses are responsible of implementing the actual rendering by adding a Mesh/Line to this object3d.<br>
 * The setCursorPosition will be called whenever the cursor is moved by the user.<br>
 * <br>
 */
export class AbstractCursor extends Object3D {
    /**
     * Abstract class for 3D cursor shapes.<br>
     * <br>
     * Subclasses are responsible of implementing the actual rendering by adding a Mesh/Line to this object3d.<br>
     * The setCursorPosition will be called whenever the cursor is moved by the user.<br>
     * <br>
     */
    constructor();
    /**
     * Sets the cursor position in world coordinates.<br>
     * This can be called manually to move the cursor programmatically.<br>
     * @param position The new cursor position
     */
    setCursorPosition(position: Vector3): this;
}
