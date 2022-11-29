import {Object3D} from '../Object3D';
import {OffsetMode} from '../../util/well/Well';
import {Color} from '../../THREE';
import {ColorProvider} from '../../../geotoolkit/util/ColorProvider';

/**
 * A LogCurve object representing a well curve along a path as a 2D shape.<br>
 * <br>
 * This class renders a LogCurve along a trajectory in a similar way of what the WellLogJS toolkit does.<br>
 * In order for the user to see the 2D curve it's always projected toward the camera.<br>
 * Which means that when the user moves the camera the log will try to adapt its representation to be as mush visible as possible.<br>
 * However that also means that some camera angles will not be ideal to look at the log.<br>
 * Typically when the camera and the trajectory path are aligned.<br>
 * This algorithm is implemented at the shader level to ensure best performances.<br>
 * <br>
 */
export class LogCurve2D extends Object3D {
    /**
     * A LogCurve object representing a well curve along a path as a 2D shape.<br>
     * <br>
     * This class renders a LogCurve along a trajectory in a similar way of what the WellLogJS toolkit does.<br>
     * In order for the user to see the 2D curve it's always projected toward the camera.<br>
     * Which means that when the user moves the camera the log will try to adapt its representation to be as mush visible as possible.<br>
     * However that also means that some camera angles will not be ideal to look at the log.<br>
     * Typically when the camera and the trajectory path are aligned.<br>
     * This algorithm is implemented at the shader level to ensure best performances.<br>
     * <br>
     * @param options The options
     * @param options.data The trajectory data
     * @param options.data.x The x deviation values
     * @param options.data.y The y deviation values
     * @param options.data.z The elevation values
     * @param options.data.values The values of the welllog curve
     * @param options.data.nullvalue The log curve nullvalue, note that NaN will always be considered as nullvalue
     * @param options.curvemin The lower normalisation limit, any value lesser than this will be clamped
     * @param options.curvemax The upper normalisation limit, any value greater than this will be clamped
     * @param options.radius The radius factor to apply, this will increase the curve amplitude on screen.
     * @param options.offset An offset value to shift the curve location by 'n' times the radius. Use negative value to display the log on the left of the path
     * @param options.offsetmode Defines the curve behavior when offset is negative. See geotoolkit3d.util.well.Well.OffsetMode
     * @param options.color The color or null to enable per vertex color
     * @param options.colorprovider A color provider or a single color in css format (Used if no color is set)
     */
    constructor(options: object | { data: object | { x: number[]; y: number[]; z: number[]; values?: number[]; nullvalue?: number; } ; curvemin?: number; curvemax?: number; radius?: number; offset?: number; offsetmode?: OffsetMode; color?: Color | string | any; colorprovider?: ColorProvider | string; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.curvemin The lower normalisation limit, any value lesser than this will be clamped
     * @param options.curvemax The upper normalisation limit, any value greater than this will be clamped
     * @param options.radius The radius factor to apply
     * @param options.offset An offset factor for the curve location relative to the path. Use negative value to display the log on the left of the path
     * @param options.offsetmode Defines the curve behavior when offset is negative. See geotoolkit3d.util.well.Well.OffsetMode
     * @param options.color A single color in css format
     * @param options.colorprovider A color provider or a single color in css format (Used if no color is set)
     */
    setOptions(options?: object | { curvemin?: number; curvemax?: number; radius?: number; offset?: number; offsetmode?: OffsetMode; color?: Color | string; colorprovider?: ColorProvider | string; } ): this;
    /**
     * Get options
     * (see {@link @int/geotoolkit3d/scene/well/LogCurve2D.LogCurve2D#setOptions} for more info)
     */
    getOptions(): object | any;
}
