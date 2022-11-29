import {Grid, Mode} from '../grid/Grid';
import {IndexCoordinates} from '../../transformation/IndexCoordinates';
import {Vector3} from '../../THREE';
import {LineStyle} from '../../../geotoolkit/attributes/LineStyle';

/**
 * A grid specialized for IJ objects like seismic.<br>
 * <br>
 * For convenience, a specialized version of {@link @int/geotoolkit3d/scene/grid/Grid.Grid} using a {@link @int/geotoolkit3d/transformation/IndexCoordinates.IndexCoordinates}.<br>
 * <br>
 * The grid will set its location and size in IJ automatically.<br>
 * In order to be displayed correctly, this grid should be added to the SeismicVolume.<br>
 * <br>
 */
export class IndexGrid extends Grid {
    /**
     * A grid specialized for IJ objects like seismic.<br>
     * <br>
     * For convenience, a specialized version of {@link @int/geotoolkit3d/scene/grid/Grid.Grid} using a {@link @int/geotoolkit3d/transformation/IndexCoordinates.IndexCoordinates}.<br>
     * <br>
     * The grid will set its location and size in IJ automatically.<br>
     * In order to be displayed correctly, this grid should be added to the SeismicVolume.<br>
     * <br>
     * @param options The options
     * @param options.index The index coordinates
     * @param options.counts The grid tick counts
     * @param options.axis Defines the axis
     * @param options.axis.linestyles Defines the axis linestyles. Note that linestyle.width is not supported by windows-webgl.
     * @param options.axis.linestyles.x The X axis line style
     * @param options.axis.linestyles.y The Y axis line style
     * @param options.axis.linestyles.z The Z axis line style
     * @param options.axis.formatters The functions responsible of formatting the axis values to text
     * @param options.axis.formatters.x The X axis label formatter
     * @param options.axis.formatters.y The Y axis label formatter
     * @param options.axis.formatters.z The Z axis label formatter
     * @param options.title The axis titles
     * @param options.title.texts The axis titles texts
     * @param options.title.texts.x The X axis title
     * @param options.title.texts.y The Y axis title
     * @param options.title.texts.z The Z axis title
     * @param options.grid The grids
     * @param options.grid.linestyles The grid linestyles. Note that linestyle.width is not supported by windows-webgl.
     * @param options.grid.linestyles.x The X grid line style
     * @param options.grid.linestyles.y The Y grid line style
     * @param options.grid.linestyles.z The Z grid line style
     * @param options.mode The display strategy to show/hide grid planes depending on camera position
     */
    constructor(options: object | { index: IndexCoordinates; counts?: Vector3; axis?: object | { linestyles?: object | { x?: LineStyle; y?: LineStyle; z?: LineStyle; } ; formatters?: object | { x?: Function; y?: Function; z?: Function; } ; } ; title?: object | { texts?: object | { x?: string; y?: string; z?: string; } ; } ; grid?: object | { linestyles?: object | { x?: LineStyle; y?: LineStyle; z?: LineStyle; } ; } ; mode?: Mode; } );
}
