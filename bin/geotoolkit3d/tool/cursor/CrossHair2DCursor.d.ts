import {AbstractCursor} from './AbstractCursor';
import {LineStyle} from '../../../geotoolkit/attributes/LineStyle';
import {Box3, Vector3} from '../../THREE';
import {Mode} from '../../scene/grid/Grid';

/**
 * A cross hair 2D representation of the cursor
 */
export class CrossHair2DCursor extends AbstractCursor {
    /**
     * A cross hair 2D representation of the cursor
     * @param options See geotoolkit3d.scene.Object3D for inherited options
     * @param options.linestyle The linestyle for the cursor
     * @param options.limits The limiting bounding box for the crosshair, used to compute the line length
     * @param options.mode The display strategy to show/hide lines depending on camera position
     */
    constructor(options: object | { linestyle?: LineStyle; limits: Box3; mode?: Mode; } );
    /**
     * Set the cursor position in world coordinates
     * @param position The new cursor position
     */
    setCursorPosition(position: Vector3): this;
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.limits bounding box for the crosshair
     * @param options.linestyle The linestyle for the cursor
     * @param options.mode The display strategy to show/hide lines depending on camera position
     */
    setOptions(options?: object | { limits?: Box3; linestyle?: LineStyle; mode?: Mode; } ): this;
    /**
     * Get crosshair 2D cursor options
     * (see {@link @int/geotoolkit3d/tool/cursor/CrossHair2DCursor.CrossHair2DCursor#setOptions} for more info)
     */
    getOptions(): object | any;
}
