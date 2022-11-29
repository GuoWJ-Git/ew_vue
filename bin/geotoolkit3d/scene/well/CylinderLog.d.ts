import {Object3D} from '../Object3D';
import {ColorProvider} from '../../../geotoolkit/util/ColorProvider';
import {Color} from '../../THREE';

/**
 * A well log as a cylinder like 3D shape.<br>
 * <br>
 * This shapes renders a welllog curve as a cylinder with a varying size and color.<br>
 * The diameter and color of the tube will vary for each log curve sample.<br>
 * <br>
 * Note that this object assumes that the given path and curve values have the same sampling.<br>
 */
export class CylinderLog extends Object3D {
    /**
     * A well log as a cylinder like 3D shape.<br>
     * <br>
     * This shapes renders a welllog curve as a cylinder with a varying size and color.<br>
     * The diameter and color of the tube will vary for each log curve sample.<br>
     * <br>
     * Note that this object assumes that the given path and curve values have the same sampling.<br>
     * @param options The options
     * @param options.data The data options
     * @param options.data.x The x deviation values
     * @param options.data.y The y deviation values
     * @param options.data.elevation The elevation values
     * @param options.data.radius A curve attribute used for the size of the cylinder
     * @param options.data.radiusnullvalue The nullvalue for the radius
     * @param options.data.values A value attribute used for coloring the cylinder (see options.colorprovider)
     * @param options.data.valuesnullvalue A value attribute used for coloring the cylinder (see options.colorprovider)
     * @param options.radiusmin The cylinder minimum radius
     * @param options.radiusmax The cylinder maximum radius
     * @param options.radiuslogmin The radius log minimum value used for clamping the radius value, invert radiuslogmin and radiuslogmax for inverted cylinder
     * @param options.radiuslogmax The radius log maximum value used for clamping the radius value, invert radiuslogmin and radiuslogmax for inverted cylinder
     * @param options.colorprovider A color provider or a single color in css format
     */
    constructor(options?: object | { data?: object | { x?: number[]; y?: number[]; elevation?: number[]; radius?: number[]; radiusnullvalue?: number; values?: number[]; valuesnullvalue?: number; } ; radiusmin?: number; radiusmax?: number; radiuslogmin?: number; radiuslogmax?: number; colorprovider?: ColorProvider | string | Color; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.data Note that specifying the data option object will trigger a geometry update.
     * @param options.data.radius A curve attribute used for the size of the cylinder
     * @param options.data.radiusnullvalue The nullvalue for the radius
     * @param options.data.values A value attribute used for coloring the cylinder (see options.colorprovider)
     * @param options.data.valuesnullvalue A value attribute used for coloring the cylinder (see options.colorprovider)
     * @param options.radiusmin The cylinder minimum radius
     * @param options.radiusmax The cylinder maximum radius
     * @param options.radiuslogmin The radius log minimum value used for clamping the radius value, invert radiuslogmin and radiuslogmax for inverted cylinder.<br> Pass null to reset it to data min
     * @param options.radiuslogmax The radius log maximum value used for clamping the radius value, invert radiuslogmin and radiuslogmax for inverted cylinder.<br> Pass null to reset it to data max
     * @param options.colorprovider A color provider or a single color in css format
     */
    setOptions(options?: object | { data?: object | { radius?: number[]; radiusnullvalue?: number; values?: number[]; valuesnullvalue?: number; } ; radiusmin?: number; radiusmax?: number; radiuslogmin?: number; radiuslogmax?: number; colorprovider?: ColorProvider | string | Color; } ): this;
    /**
     * Get options
     * (see {@link @int/geotoolkit3d/scene/well/CylinderLog.CylinderLog#setOptions} for more info)
     */
    getOptions(): object | any;
}
