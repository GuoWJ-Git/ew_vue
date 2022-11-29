import {Object3D} from '../Object3D';
import {OffsetMode} from '../../util/well/Well';
import {Color} from '../../THREE';
import {ColorProvider} from '../../../geotoolkit/util/ColorProvider';

/**
 * A log fill displayed as a 2D shape along a wellpath.<br>
 * <br>
 * This class will create the required geometry and material to represent a fill going from the given curve to the other curve.<br>
 * Like a regular LogFill, this also supports reference values instead of curves.<br>
 * Note that the resulting geometry may contains extra vertex to deal with curves intersection.<br>
 * This class renders a LogCurve along a trajectory in a similar way of what the WellLogJS toolkit does.<br>
 * In order for the user to see the 2D curve it's always projected toward the camera.<br>
 * Which means that when the user moves the camera the log will try to adapt its representation to be as much visible as possible.<br>
 * However that also means that some camera angles will not be ideal to look at the log.<br>
 * Typically when the camera and the trajectory path are aligned.<br>
 * This algorithm is implemented at the shader level to ensure best performances.<br>
 * <br>
 * Note that curvemin&curvemax options are not supported for dual curve fill (if both values1 and values2 are curves).
 */
export class LogFill2D extends Object3D {
    /**
     * A log fill displayed as a 2D shape along a wellpath.<br>
     * <br>
     * This class will create the required geometry and material to represent a fill going from the given curve to the other curve.<br>
     * Like a regular LogFill, this also supports reference values instead of curves.<br>
     * Note that the resulting geometry may contains extra vertex to deal with curves intersection.<br>
     * This class renders a LogCurve along a trajectory in a similar way of what the WellLogJS toolkit does.<br>
     * In order for the user to see the 2D curve it's always projected toward the camera.<br>
     * Which means that when the user moves the camera the log will try to adapt its representation to be as much visible as possible.<br>
     * However that also means that some camera angles will not be ideal to look at the log.<br>
     * Typically when the camera and the trajectory path are aligned.<br>
     * This algorithm is implemented at the shader level to ensure best performances.<br>
     * <br>
     * Note that curvemin&curvemax options are not supported for dual curve fill (if both values1 and values2 are curves).
     * @param options The options
     * @param options.data The trajectory data
     * @param options.data.x The x deviation values
     * @param options.data.y The y deviation values
     * @param options.data.z The elevation values
     * @param options.data.curvevalues1 The log curve1 values or a reference value in range [0,1]
     * @param options.data.nullvalue1 The curvevalues1's nullvalue
     * @param options.data.curvevalues2 The log curve2 values or a reference value in range [0,1]
     * @param options.data.nullvalue2 The curvevalues2's nullvalue
     * @param options.data.colorvalues Optional attribute used for coloring the trajectory per vertex
     * @param options.data.nullvalue The values's nullvalue
     * @param options.curvemin The lower normalisation limit, any value lesser than this will be clamped
     * @param options.curvemax The upper normalisation limit, any value greater than this will be clamped
     * @param options.radius The radius factor to apply, this will increase the fill amplitude on screen.
     * @param options.offset An offset value to shift the fill location by 'n' times the radius. Use negative value to display the fill on the left of the path
     * @param options.offsetmode Defines the curve behavior when offset is negative. {@link @int/geotoolkit3d/util/well/Well.OffsetMode}
     * @param options.positivecolor The color for positive log curve, if provided
     * @param options.negativecolor The color for negative log curve, if provided
     * @param options.colorprovider A color provider for data.colorvalues
     */
    constructor(options: object | { data: object | { x: number[]; y: number[]; z: number[]; curvevalues1?: number[] | number; nullvalue1?: number[] | number; curvevalues2?: number[] | number; nullvalue2?: number[] | number; colorvalues?: number[] | number; nullvalue?: number[] | number; } ; curvemin?: number; curvemax?: number; radius?: number; offset?: number; offsetmode?: OffsetMode; positivecolor?: Color; negativecolor?: Color; colorprovider?: ColorProvider | string; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.curvemin The lower normalisation limit, any value lesser than this will be clamped
     * @param options.curvemax The upper normalisation limit, any value greater than this will be clamped
     * @param options.radius The radius factor to apply, this will increase the fill amplitude on screen.
     * @param options.offset An offset value to shift the fill location by 'n' times the radius. Use negative value to display the fill on the left of the path
     * @param options.offsetmode Defines the curve behavior when offset is negative. See {@link @int/geotoolkit3d/util/well/Well.OffsetMode}
     * @param options.colorprovider A single color in css format (Used if no positive/negative color is set)
     */
    setOptions(options?: object | { curvemin?: number; curvemax?: number; radius?: number; offset?: number; offsetmode?: OffsetMode; colorprovider?: ColorProvider | string; } ): this;
    /**
     * Get options
     * (see {@link @int/geotoolkit3d/scene/well/LogFill2D.LogFill2D#setOptions} for more info)
     */
    getOptions(): object | any;
}
