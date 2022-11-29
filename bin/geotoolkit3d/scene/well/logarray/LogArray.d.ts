import {Object3D} from '../../Object3D';
import {ColorProvider} from '../../../../geotoolkit/util/ColorProvider';
import {Color} from '../../../THREE';
import {ReferenceMode} from '../../../util/well/logarray/LogArrayUtil';

/**
 * A LogArray as a tubular shape.<br>
 * <br>
 * A logarray is the 3D equivalent of {@link @int/geotoolkit/welllog/Log2DVisual.Log2DVisual}, it displays a two dimension welllog.<br>
 * Its representation is a tubular shape where each 'edge' of the tube is a sector that has its own radius and color.<br>
 * <br>
 * The orientation of the sector 0 is configurable using {@link @int/geotoolkit3d/util/well/logarray/LogArrayUtil.ReferenceMode} enum.<br>
 * <br>
 * Note that the logarray allows changing on the fly of the values but also path.<br>
 * However, the amount of data/mds should remain constant.<br>
 * This is intended to implement a sliding window in order to display a subpart of a logarray that would be too big to fit in memory/gpu.<br>
 * <br>
 */
export class LogArray extends Object3D {
    /**
     * A LogArray as a tubular shape.<br>
     * <br>
     * A logarray is the 3D equivalent of {@link @int/geotoolkit/welllog/Log2DVisual.Log2DVisual}, it displays a two dimension welllog.<br>
     * Its representation is a tubular shape where each 'edge' of the tube is a sector that has its own radius and color.<br>
     * <br>
     * The orientation of the sector 0 is configurable using {@link @int/geotoolkit3d/util/well/logarray/LogArrayUtil.ReferenceMode} enum.<br>
     * <br>
     * Note that the logarray allows changing on the fly of the values but also path.<br>
     * However, the amount of data/mds should remain constant.<br>
     * This is intended to implement a sliding window in order to display a subpart of a logarray that would be too big to fit in memory/gpu.<br>
     * <br>
     * @param options The options
     * @param options.data The data options
     * @param options.data.path The path data
     * @param options.data.path.x The x deviation values
     * @param options.data.path.y The y deviation values
     * @param options.data.path.elevation The elevation values
     * @param options.data.logarray The logarray values as a two dimensional array, one row per md.
     * @param options.data.values The attribute values for coloring as a two dimensional array, one row per md.
     * @param options.logarraymin The minimum value of logarray values (for normalization)
     * @param options.logarraymax The maximum value of logarray values (for normalization)
     * @param options.logarraynullvalue The null value for logarray values
     * @param options.valuesnullvalue The null value for color values
     * @param options.radiusmin The minimum radius of the tube (when logarray value is equal to logarraymin)
     * @param options.radiusdelta The delta radius (when logarray value is equal to logarraymax, the radius is equal to "radiusmin + radiusdelta")
     * @param options.colorprovider A color provider or a single color in css format
     * @param options.referencemode The reference mode to determine the sector 0 orientation
     */
    constructor(options: object | { data?: object | { path?: object | { x?: number[]; y?: number[]; elevation?: number[]; } ; logarray?: number[][]; values?: number[][]; } ; logarraymin?: number; logarraymax?: number; logarraynullvalue?: number; valuesnullvalue?: number; radiusmin?: number; radiusdelta?: number; colorprovider?: ColorProvider | string | Color; referencemode?: ReferenceMode; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.data The data options
     * @param options.data.path The path data
     * @param options.data.path.x The x deviation values
     * @param options.data.path.y The y deviation values
     * @param options.data.path.elevation The elevation values
     * @param options.data.logarray The logarray values as a two dimensional array, one row per md.
     * @param options.data.values The color values as a two dimensional array, one row per md.
     * @param options.logarraymin The minimum value of logarray values (for normalization)
     * @param options.logarraymax The maximum value of logarray values (for normalization)
     * @param options.logarraynullvalue The null value for logarray values
     * @param options.valuesnullvalue The null value for color values
     * @param options.radiusmin The minimum radius of the tube (when logarray value is equal to logarraymins)
     * @param options.radiusdelta The delta radius (when logarray value is equal to logarraymax, the radius is equal to "radiusmin + radiusdelta")
     * @param options.colorprovider A color provider or a single color in css format
     * @param options.referencemode The reference mode to determine the sector 0 orientation
     */
    setOptions(options?: object | { data?: object | { path?: object | { x?: number[]; y?: number[]; elevation?: number[]; } ; logarray?: number[][]; values?: number[][]; } ; logarraymin?: number; logarraymax?: number; logarraynullvalue?: number; valuesnullvalue?: number; radiusmin?: number; radiusdelta?: number; colorprovider?: ColorProvider | string | Color; referencemode?: ReferenceMode; } ): this;
    /**
     * Get options
     * (see {@link @int/geotoolkit3d/scene/well/logarray/LogArray.LogArray#setOptions} for more info)
     */
    getOptions(): object | any;
}
