import {Object3D} from '../Object3D';
import {SliceMaterial} from './SliceMaterial';
import {IndexCoordinates} from '../../transformation/IndexCoordinates';
import {Vector3} from '../../THREE';
import {SeismicReader} from '../../../geotoolkit/seismic/data/SeismicReader';
import {Group} from '../../../geotoolkit/scene/Group';

/**
 * A seismic slice object.<br>
 * <br>
 * A seismic slice is a 2D seismic cross-section following one dimension of a seismic volume (inline, xline or time/depth slice).<br>
 * The actual seismic to be displayed is provided by the given {@link @int/geotoolkit3d/scene/seismic/SliceMaterial.SliceMaterial}.<br>
 * <br>
 * The resulting shape is a 2D plane displaying seismic.<br>
 * It is generally added to a {@link @int/geotoolkit3d/scene/seismic/Volume.Volume} that will handle the IJ-to-XY conversion.<br>
 */
export class Slice extends Object3D {
    /**
     * A seismic slice object.<br>
     * <br>
     * A seismic slice is a 2D seismic cross-section following one dimension of a seismic volume (inline, xline or time/depth slice).<br>
     * The actual seismic to be displayed is provided by the given {@link @int/geotoolkit3d/scene/seismic/SliceMaterial.SliceMaterial}.<br>
     * <br>
     * The resulting shape is a 2D plane displaying seismic.<br>
     * It is generally added to a {@link @int/geotoolkit3d/scene/seismic/Volume.Volume} that will handle the IJ-to-XY conversion.<br>
     * @param options The options
     * @param options.material The slice's material containing the seismic textures
     * @param options.index The index coordinates
     * @param options.slicelocation The slice location in I, J or Z
     * @param options.slicelocation.i The inline number of the section
     * @param options.slicelocation.j The xline number of the section
     * @param options.slicelocation.z The sample <b>index</b> of the horizontal slice
     * @param options.xstart The slice first trace number
     * @param options.ystart The slice first sample number
     * @param options.width The slice width (in traces), by default computes the size of the section
     * @param options.height The slice height (in samples), by default computes the size of the section
     * @param options.minlod the lowest level of resolution equals to log2(minTextureSize). The default minimum texture is 512
     * @param options.maxlod the highest level of resolution to log2(maxTextureSize). The default maximum texture size is gl_max_texture_size / 2
     * @param options.points Array of points for definition of plane
     */
    constructor(options: object | { material: SliceMaterial; index: IndexCoordinates; slicelocation: object | { i?: number; j?: number; z?: number; } ; xstart?: number; ystart?: number; width?: number; height?: number; minlod?: number; maxlod?: number; points?: Vector3[]; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.data The data options
     * @param options.data.reader The seismic reader that will be used to retrieve the traces, null to empty the slice
     * @param options.pipeline The options for the pipeline. See {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline.SeismicPipeline} for complete documentation
     * @param options.loadingcolor Material color while loading seismic (css format)
     * @param options.slicelocation The slice location in I or J or Z
     * @param options.slicelocation.i The inline number of the section
     * @param options.slicelocation.j The xline number of the section
     * @param options.slicelocation.z The sample <b>index</b> of the horizontal slice
     * @param options.xstart The slice first trace number
     * @param options.ystart The slice first sample number
     * @param options.width The slice width (in traces), by default computes the size of the selected section
     * @param options.height The slice height (in samples), by default computes the size of the selected section
     * @param options.minlod the lowest level of resolution equals to log2(minTextureSize)
     * @param options.maxlod the highest level of resolution to log2(maxTextureSize)
     * @param options.points Array of points for definition of plane
     */
    setOptions(options?: object | { data?: object | { reader?: SeismicReader | any; } ; pipeline?: object; loadingcolor?: string; slicelocation?: object | { i?: number; j?: number; z?: number; } ; xstart?: number; ystart?: number; width?: number; height?: number; minlod?: number; maxlod?: number; points?: Vector3[]; } ): this;
    /**
     * Get options
     * (see {@link @int/geotoolkit3d/scene/seismic/Slice.Slice#setOptions} for more info)
     */
    getOptions(): object | any;
    /**
     * Get the slice's material
     */
    getSliceMaterial(): SliceMaterial;
    /**
     * Get the slice location in I, J or Z
     */
    getSliceLocation(): object;
    /**
     * Get the overlay of this slice
     */
    getOverlay(): Group;
    /**
     * Get the index coordinates
     */
    getIndexCoordinates(): IndexCoordinates;
    /**
     * Dispose method for Slice material
     */
    dispose(): void;
}
