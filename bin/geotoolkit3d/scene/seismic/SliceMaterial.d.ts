import {EventDispatcher} from '../../../geotoolkit/util/EventDispatcher';
import {SeismicReader} from '../../../geotoolkit/seismic/data/SeismicReader';
import {Rect} from '../../../geotoolkit/util/Rect';
import {Group} from '../../../geotoolkit/scene/Group';
import {SeismicPipeline} from '../../../geotoolkit/seismic/pipeline/SeismicPipeline';

/**
 * A seismic slice material.<br>
 * <br>
 * The seismic slice material is supposed to be used in conjunction with {@link @int/geotoolkit3d/scene/seismic/Slice.Slice}.<br>
 * It is responsible for creating and managing the textures required to render a seismic crossection.<br>
 * <br>
 * To do so, it will create a {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline.SeismicPipeline} using the given
 * {@link @int/geotoolkit/seismic/data/SeismicReader.SeismicReader}.<br>
 * <br>
 * As rasterization process is delegated to the SeismicPipeline, it supports any pipeline configuration (Colormap, interpolation, etc).<br>
 * At initialization time using 'options.pipeline.options'.<br>
 * And at runtime using getPipeline().setOptions().<br>
 * <br>
 * Default pipeline configuration is:<br>
 * <pre>
 * {
 *  'normalization': {
 *      'type': geotoolkit.seismic.pipeline.NormalizationType.RMS,
 *      'scale': 1
 *  },
 *  'plot': {
 *      'type': {
 *          'Wiggle': false,
 *          'InterpolatedDensity': true
 *      },
 *      'decimationSpacing': 5
 *  },
 *  'colors': {
 *      'colorMap': geotoolkit.seismic.util.SeismicColors.getDefault().createNamedColorMap("WhiteBlack", 320)
 *  }
 * }
 * </pre>
 * <br>
 * This material also supports an 'overlay' feature that lets you provide a {@link @int/geotoolkit/scene/Group.Group group} containing 2D shapes.<br>
 * The content of this group will be rendered on top of the seismic.<br>
 * This group modellimits and bounds will be automatically set to the correct values.<br>
 * The group's content should use coordinates in trace/sample domain.<br>
 * Note that this group will be rasterized in a way similar to how the seismic is rasterized itself.<br>
 * <br>
 */
export class SliceMaterial extends EventDispatcher {
    /**
     * A seismic slice material.<br>
     * <br>
     * The seismic slice material is supposed to be used in conjunction with {@link @int/geotoolkit3d/scene/seismic/Slice.Slice}.<br>
     * It is responsible for creating and managing the textures required to render a seismic crossection.<br>
     * <br>
     * To do so, it will create a {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline.SeismicPipeline} using the given
     * {@link @int/geotoolkit/seismic/data/SeismicReader.SeismicReader}.<br>
     * <br>
     * As rasterization process is delegated to the SeismicPipeline, it supports any pipeline configuration (Colormap, interpolation, etc).<br>
     * At initialization time using 'options.pipeline.options'.<br>
     * And at runtime using getPipeline().setOptions().<br>
     * <br>
     * Default pipeline configuration is:<br>
     * <pre>
     * {
     *  'normalization': {
     *      'type': geotoolkit.seismic.pipeline.NormalizationType.RMS,
     *      'scale': 1
     *  },
     *  'plot': {
     *      'type': {
     *          'Wiggle': false,
     *          'InterpolatedDensity': true
     *      },
     *      'decimationSpacing': 5
     *  },
     *  'colors': {
     *      'colorMap': geotoolkit.seismic.util.SeismicColors.getDefault().createNamedColorMap("WhiteBlack", 320)
     *  }
     * }
     * </pre>
     * <br>
     * This material also supports an 'overlay' feature that lets you provide a {@link @int/geotoolkit/scene/Group.Group group} containing 2D shapes.<br>
     * The content of this group will be rendered on top of the seismic.<br>
     * This group modellimits and bounds will be automatically set to the correct values.<br>
     * The group's content should use coordinates in trace/sample domain.<br>
     * Note that this group will be rasterized in a way similar to how the seismic is rasterized itself.<br>
     * <br>
     * @param options The options
     * @param options.data The options related to the data
     * @param options.data.reader The seismic reader that will be used to retrieve the traces
     * @param options.data.limits The subpart of the seismic to read
     * @param options.pipeline The options for the pipeline. See {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline.SeismicPipeline} for complete documentation
     * @param options.tilesize Tile size in pixels. Based on the defined size, this material might be using several textures,
     * this defines the size of a tile-texture. By default, the default tile size will be to 4096 (or lower depending on device capabilities).
     * @param options.maxpixelsx Max number of pixels to create in the X Direction. Number of tiles (X direction) *
     * tilesize (X direction) will be reduced to fit this maximum value
     * @param options.maxpixelsy Max number of pixels to create in the Y Direction. Number of tiles (Y direction) *
     * tilesize (Y direction) will be reduced to fit this maximum value
     * @param options.horizontalresolution The amount of texture pixels for an horizontal unit (ie a trace's width in pixels)
     * @param options.verticalresolution The amount of texture pixels for an vertical unit (ie a sample's height in pixels)
     * @param options.oninvalidate The function to call whenever this material has been invalidated
     * @param options.loadingcolor Material color while loading seismic (css format)
     * @param options.overlay A group that will be used to render 2D shapes on top of the slice as 'overlay'. The
     *     coordinates of those shapes should be in traces/samples
     * @param options.autodecimate automatically decimate the pipeline to the amount of pixels of the texture
     * @param options.pixelrenderthreshold the amount of pixels that will stop the rendering of seismic onto the texture
     * @param options.clearpipeline will clear the pipeline after the slice is rendered
     * @param options.disposesurface will remove the surface from heap after its been moved to the GPU
     * @param options.materialoptions options of material, and opacity and transparent can be set. See THREE.MeshBasicMaterial
     * @param options.numberofparalleltasks number of tiles to be processed in a parallel
     * @param options.lod true for using LOD (level of details). It works only if autodecimate is true
     * @param options.initialtexturesize initial texture size if lod isn't used (use tilesize if not defined by user).
     * @param options.readertracedecimation use trace decimation by reader if it is supported
     */
    constructor(options: object | { data: object | { reader: SeismicReader; limits?: Rect; } ; pipeline?: object; tilesize?: number; maxpixelsx?: number; maxpixelsy?: number; horizontalresolution?: number; verticalresolution?: number; oninvalidate?: Function; loadingcolor?: string; overlay?: Group; autodecimate?: boolean; pixelrenderthreshold?: number; clearpipeline?: boolean; disposesurface?: boolean; materialoptions?: object; numberofparalleltasks?: number; lod?: boolean; initialtexturesize?: number; readertracedecimation?: boolean; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.data The data options
     * @param options.data.reader The seismic reader that will be used to retrieve the
     *     traces, null to empty the slice
     * @param options.data.limits The subpart of the seismic to read
     * @param options.pipeline The options for the pipeline. See {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline.SeismicPipeline} for complete documentation
     * @param options.loadingcolor Material color while loading seismic (css format)
     * @param options.pixelrenderthreshold the amount of pixels that will stop the rendering of seismic onto the texture
     * @param options.autodecimate automatically decimate the pipeline to the amount of pixels of the texture
     * @param options.clearpipeline will clear the pipeline after the slice is rendered
     * @param options.disposesurface will remove the surface from heap after its been moved to the GPU
     * @param options.horizontalresolution The amount of texture pixels for an horizontal unit (ie a trace's width in pixels)
     * @param options.verticalresolution The amount of texture pixels for an vertical unit (ie a sample's height in pixels)
     * @param options.numberofparalleltasks number of tiles to be processed in a parallel
     * @param options.maxpixelsx Max number of pixels to create in the X Direction. Number of tiles (X direction) *
     * tilesize (X direction) will be reduced to fit this maximum value
     * @param options.maxpixelsy Max number of pixels to create in the Y Direction. Number of tiles (Y direction) *
     * tilesize (Y direction) will be reduced to fit this maximum value
     * @param options.tilesize Tile size in pixels. Based on the defined size, this material might be using several textures,
     * this defines the size of a tile-texture. By default, the default tile size will be to 4096 (or lower depending on device capabilities).
     * @param options.materialoptions options of material, and opacity and transparent can be set. See THREE.MeshBasicMaterial
     * @param options.lod true for using LOD
     * @param options.readertracedecimation use trace decimation by reader if it is supported
     */
    setOptions(options: object | { data?: object | { reader?: SeismicReader | any; limits?: Rect; } ; pipeline?: object; loadingcolor?: string; pixelrenderthreshold?: number; autodecimate?: boolean; clearpipeline?: boolean; disposesurface?: boolean; horizontalresolution?: number; verticalresolution?: number; numberofparalleltasks?: number; maxpixelsx?: number; maxpixelsy?: number; tilesize?: number; materialoptions?: object; lod?: boolean; readertracedecimation?: boolean; } ): this;
    /**
     * Get options
     * (see {@link @int/geotoolkit3d/scene/seismic/SliceMaterial.SliceMaterial#setOptions} for more info)
     */
    getOptions(): object | any;
    /**
     * Set opacity property of the slice.<br>
     * @param value the value of the opacity property
     */
    setOpacity(value?: number): void;
    /**
     * Get the opacity
     */
    getOpacity(): number;
    /**
     * Returns a group that can be used to render 2D shapes on top of the seismic slice.<br>
     * The coordinate system of the group is in trace/samples.
     */
    getOverlay(): Group;
    /**
     * Get the internal pipeline
     */
    getPipeline(): SeismicPipeline;
    /**
     * Dispose method for SliceMaterial. Specifically for disposing of pipeline memory reference
     */
    dispose(): void;
    /**
     * Sets level of details if it is enabled
     * @param lod level of details. if level is less then
     * current level the current is used
     * @param minLod minimum level of details
     * @param maxLod maximum level of details
     */
    setLOD(lod: number, minLod?: number, maxLod?: number): Promise<any>;
}
