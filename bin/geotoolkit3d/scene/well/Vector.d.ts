import {Object3D} from '../Object3D';
import {Vector3, Color} from '../../THREE';
import {ColorProvider} from '../../../geotoolkit/util/ColorProvider';

/**
 * A well log as a cylinder like 3D shape.<br>
 * <br>
 * This shapes renders a welllog curve as a cylinder with a varying size and color.<br>
 * The diameter and color of the tube will vary for each log curve sample.<br>
 * <br>
 * Note that this object assumes that the given path and curve values have the same sampling.<br>
 */
export class Vector extends Object3D {
    /**
     * A well log as a cylinder like 3D shape.<br>
     * <br>
     * This shapes renders a welllog curve as a cylinder with a varying size and color.<br>
     * The diameter and color of the tube will vary for each log curve sample.<br>
     * <br>
     * Note that this object assumes that the given path and curve values have the same sampling.<br>
     * @param options The options
     * @param options.data The data options
     * @param options.data.start start point
     * @param options.data.end end point
     * @param options.radius the radius of the vector
     * @param options.color color for the vector
     */
    constructor(options: object | { data: object | { start: Vector3; end: Vector3; } ; radius?: number; color?: ColorProvider | string | Color; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.color A color provider or a single color in css format
     */
    setOptions(options?: object | { color?: ColorProvider | string | Color; } ): this;
    /**
     * Get options
     * (see {@link @int/geotoolkit3d/scene/well/Vector.Vector#setOptions} for more info)
     */
    getOptions(): object | any;
}
