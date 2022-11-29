import {Object3D} from '../Object3D';
import {IndexCoordinates} from '../../transformation/IndexCoordinates';
import {SeismicReader} from '../../../geotoolkit/seismic/data/SeismicReader';
import {Group} from '../../../geotoolkit/scene/Group';
import {InterpolationType} from '../../../geotoolkit/seismic/pipeline/InterpolationType';
import {InterpolationEdge} from '../../../geotoolkit/seismic/pipeline/InterpolationEdge';
import {SeismicColors} from '../../../geotoolkit/seismic/util/SeismicColors';

/**
 * A seismic fence object that represent the cross section of a seismic volume with an arbitrary line.<br>
 * <br>
 * A seismic fence can be used to display seismic along a user crafted path or a well trajectory for example.<br>
 * The resulting shape will be composed of contiguous seismic panels that form a fence.<br>
 * <br>
 * The given coordinates describes the inflexion points of the path.<br>
 * It's expected to be in IJ coordinates and to match actual existing IJ indices.<br>
 * <br>
 * This shape uses a {@link @int/geotoolkit/seismic/data/SeismicReader.SeismicReader} to fetch the traces and metadata.<br>
 * The reader's metadata should contain the proper 'sections' in order for the fence to display correctly.<br>
 * This Shape is compatible with {@link @int/geotoolkit/seismic/data/RemoteSeismicReader.RemoteSeismicReader RemoteSeismicReader} using INTGeoServer. (version >= 2.18)<br>
 * <br>
 * As the rasterization process is delegated to the SeismicPipeline, all the capabilities of the pipeline are available (colormap, interpolation, etc).<br>
 * It can be configured at initialization time using 'options.pipeline.options'.<br>
 * And/Or at runtime using <br>
 * <pre>
 * setOptions({
 *      pipeline:{
 *          options:{...}
 *      }
 *  })
 *  </pre>
 * <br>
 * This fence also supports an 'overlay' feature that lets you provide a {@link @int/geotoolkit/scene/Group.Group group} containing 2D shapes.<br>
 * The content of this group will be rendered on top of the seismic.<br>
 * This group modellimits and bounds will be automatically set to the correct values.<br>
 * The group's content should use coordinates in trace/sample domain.<br>
 * Note that this group will be rasterized in a way similar to how the seismic is rasterized itself.<br>
 * <br>
 */
export class Fence extends Object3D {
    /**
     * A seismic fence object that represent the cross section of a seismic volume with an arbitrary line.<br>
     * <br>
     * A seismic fence can be used to display seismic along a user crafted path or a well trajectory for example.<br>
     * The resulting shape will be composed of contiguous seismic panels that form a fence.<br>
     * <br>
     * The given coordinates describes the inflexion points of the path.<br>
     * It's expected to be in IJ coordinates and to match actual existing IJ indices.<br>
     * <br>
     * This shape uses a {@link @int/geotoolkit/seismic/data/SeismicReader.SeismicReader} to fetch the traces and metadata.<br>
     * The reader's metadata should contain the proper 'sections' in order for the fence to display correctly.<br>
     * This Shape is compatible with {@link @int/geotoolkit/seismic/data/RemoteSeismicReader.RemoteSeismicReader RemoteSeismicReader} using INTGeoServer. (version >= 2.18)<br>
     * <br>
     * As the rasterization process is delegated to the SeismicPipeline, all the capabilities of the pipeline are available (colormap, interpolation, etc).<br>
     * It can be configured at initialization time using 'options.pipeline.options'.<br>
     * And/Or at runtime using <br>
     * <pre>
     * setOptions({
     *      pipeline:{
     *          options:{...}
     *      }
     *  })
     *  </pre>
     * <br>
     * This fence also supports an 'overlay' feature that lets you provide a {@link @int/geotoolkit/scene/Group.Group group} containing 2D shapes.<br>
     * The content of this group will be rendered on top of the seismic.<br>
     * This group modellimits and bounds will be automatically set to the correct values.<br>
     * The group's content should use coordinates in trace/sample domain.<br>
     * Note that this group will be rasterized in a way similar to how the seismic is rasterized itself.<br>
     * <br>
     * @param options The options
     * @param options.data The options related to the data
     * @param options.data.index index coordinates
     * @param options.data.path The fence coordinates
     * @param options.data.path.i The inline indices of the fence
     * @param options.data.path.j The xline indices of the fence
     * @param options.data.reader The seismic reader that will be used to retrieve the traces
     * @param options.pipeline The options related to pipeline See {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline.SeismicPipeline}
     * @param options.tilesize Tile size in pixels. this material will be using several textures, this defines the size of a tile-texture. Must be a power of 2
     * @param options.horizontalresolution The amount of texture pixels for an horizontal unit (ie a trace's width in pixels)
     * @param options.verticalresolution The amount of texture pixels for an vertical unit (ie a sample's height in pixels)
     * @param options.oninvalidate The function to call whenever this material has been invalidated
     * @param options.loadingcolor The material color while seismic is loading (in css format)
     * @param options.overlay A group that will be used to render 2D shapes on top of the slice as 'overlay'. The coordinates of those shapes should be in traces/samples
     */
    constructor(options: object | { data: object | { index: IndexCoordinates; path: object | { i?: number[]; j?: number[]; } ; reader?: SeismicReader; } ; pipeline?: object; tilesize?: number; horizontalresolution?: number; verticalresolution?: number; oninvalidate?: Function; loadingcolor?: string; overlay?: Group; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.pipeline The options for the pipeline
     * @param options.pipeline.options The options forwarded to the pipeline API. See {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline.SeismicPipeline} for complete documentation
     * @param options.pipeline.interpolation The interpolation options
     * @param options.pipeline.interpolation.type The interpolation mode
     * @param options.pipeline.interpolation.edge The interpolation mode for the edges of the seismic
     * @param options.pipeline.plot The seismic plotting options
     * @param options.pipeline.plot.type The plotting types enabled/disabled
     * @param options.pipeline.plot.type.Wiggle The wiggles rendering flag
     * @param options.pipeline.plot.type.InterpolatedDensity The interpolated density rendering flag
     * @param options.pipeline.plot.clippingFactor The clipping factor for wiggles
     * @param options.pipeline.plot.decimationSpacing The decimation for wiggles
     * @param options.pipeline.colors The coloring options
     * @param options.pipeline.colors.colorMap The color map
     * @param options.loadingcolor Material color while loading seismic (css format)
     */
    setOptions(options?: object | { pipeline?: object | { options?: object; interpolation?: object | { type?: InterpolationType; edge?: InterpolationEdge; } ; plot?: object | { type?: object | { Wiggle?: boolean; InterpolatedDensity?: boolean; } ; clippingFactor?: string; decimationSpacing?: string; } ; colors?: object | { colorMap?: string | SeismicColors; } ; } ; loadingcolor?: string; } ): this;
    /**
     * Get options
     * (see {@link @int/geotoolkit3d/scene/seismic/Fence.Fence#setOptions} for more info)
     */
    getOptions(): object | any;
    /**
     * Returns a group that can be used to render 2D shapes on top of the seismic slice.<br>
     * The coordinate system of the group is in trace/samples.
     */
    getOverlay(): Group;
    /**
     * Get the index coordinates
     */
    getIndexCoordinates(): IndexCoordinates;
}
