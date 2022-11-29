import {AbstractCursor} from './AbstractCursor';
import {LineStyle} from '../../../geotoolkit/attributes/LineStyle';
import {Box3, Vector3} from '../../THREE';

/**
 * A crosshair representation of the cursor.
 */
export class CrossHairCursor extends AbstractCursor {
    /**
     * A crosshair representation of the cursor.
     * @param options See geotoolkit3d.scene.Object3D for inherited options
     * @param options.visiblelinestyle The linestyle for the visible part of the cursor
     * @param options.hiddenlinestyle The linestyle for the hidden part of the cursor
     *                                                                                  To turn the part off, set this to false
     * @param options.limits The limiting bounding box for the crosshair, used to compute the line length
     */
    constructor(options: object | { visiblelinestyle?: LineStyle; hiddenlinestyle?: LineStyle | boolean; limits: Box3; } );
    /**
     * Set the cursor position in world coordinates
     * @param position The new cursor position
     */
    setCursorPosition(position: Vector3): this;
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.limits bounding box for the crosshair
     * @param options.visiblelinestyle The linestyle for the visible part of the cursor
     * @param options.hiddenlinestyle The linestyle for the hidden part of the cursor
     */
    setOptions(options?: object | { limits?: Box3; visiblelinestyle?: LineStyle; hiddenlinestyle?: LineStyle; } ): this;
    /**
     * Get crosshair cursor options
     * (see {@link @int/geotoolkit3d/tool/cursor/CrossHairCursor.CrossHairCursor#setOptions} for more info)
     */
    getOptions(): object | any;
}
