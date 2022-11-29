import {AbstractCursor} from './AbstractCursor';
import {LineStyle} from '../../../geotoolkit/attributes/LineStyle';
import {Vector3} from '../../THREE';

/**
 * A small 3D cross representation of the cursor
 */
export class CrossCursor extends AbstractCursor {
    /**
     * A small 3D cross representation of the cursor
     * @param options See geotoolkit3d.scene.Object3D for inherited options
     * @param options.linestyle The linestyle for the cursor
     * @param options.cursorsize The cursor size in device
     */
    constructor(options: object | { linestyle?: LineStyle; cursorsize?: number; } );
    /**
     * Set the cursor position in world coordinates
     * @param position The new cursor position
     */
    setCursorPosition(position: Vector3): this;
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.linestyle The linestyle for the cursor
     * @param options.cursorsize The cursor size in device
     */
    setOptions(options?: object | { linestyle?: LineStyle; cursorsize?: number; } ): this;
    /**
     * Get cross cursor options
     * (see {@link @int/geotoolkit3d/tool/cursor/CrossCursor.CrossCursor#setOptions} for more info)
     */
    getOptions(): object | any;
}
