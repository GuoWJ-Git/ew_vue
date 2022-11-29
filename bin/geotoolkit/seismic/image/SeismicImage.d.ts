import {TiledShape} from '../../scene/shapes/tiledshape/TiledShape';
import {SeismicPipeline} from '../pipeline/SeismicPipeline';
import {Rect} from '../../util/Rect';
import {CacheMode} from '../../scene/Cache';
import {Transformation} from '../../util/Transformation';
import {AbstractUnit} from '../../util/AbstractUnit';

/**
 * Defines seismic shape implementation as a rectangular shape to render data from seismic pipeline.<br>
 * This shape can render seismic as a simple rectangular shape by using the {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline.SeismicPipeline}.
 * It can be added to any plot/group as a shape. <br>
 * It will delegate rasterization to the pipeline itself so any configuration relative to the seismic rendering (Like Colormap,Interpolation, etc) should be done directly on the pipeline.<br>
 * Seismic Map Image tutorial demonstrates the use of seismic image in the toolkit.
 */
export class SeismicImage extends TiledShape {
    /**
     * Defines seismic shape implementation as a rectangular shape to render data from seismic pipeline.<br>
     * This shape can render seismic as a simple rectangular shape by using the {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline.SeismicPipeline}.
     * It can be added to any plot/group as a shape. <br>
     * It will delegate rasterization to the pipeline itself so any configuration relative to the seismic rendering (Like Colormap,Interpolation, etc) should be done directly on the pipeline.<br>
     * Seismic Map Image tutorial demonstrates the use of seismic image in the toolkit.
     * @param options pipeline or options object
     * @param options.pipeline represents seismic data
     * @param options.timetowaitchanges time (ms) to wait changes of position or scale of seismic image. If position and scale remain the same, seismic image will request new tiles.
     * @param x1 model coordinate in the parent object or rectangle of model coordinates.
     * @param y1 model coordinate in the parent object.
     * @param x2 model coordinate in the parent object.
     * @param y2 model coordinate in the parent object.
     * @param mode deprecated (since 2020.1 (3.1)). not used. Shared cache mode by default
     */
    constructor(options?: SeismicPipeline | object | { pipeline?: SeismicPipeline; timetowaitchanges?: number; } , x1?: number | Rect, y1?: number, x2?: number, y2?: number, mode?: CacheMode);
    /**
     * Sets properties
     * @param properties properties
     * @param properties.pipeline represents seismic data
     * @param properties.timetowaitchanges time (ms) to wait changes of position or scale of seismic image. If position and scale remain the same, seismic image will request new tiles.
     */
    setProperties(properties?: object | { pipeline?: SeismicPipeline; timetowaitchanges?: number; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {pipeline: SeismicPipeline; timetowaitchanges: number} | any;
    /**
     * Copy constructor
     * @param src seismic image src
     */
    protected copyConstructor(src: SeismicImage): this;
    /**
     * Sets pipeline
     * @param pipeline the Seismic Pipeline
     */
    setPipeline(pipeline: SeismicPipeline): this;
    /**
     * Returns pipeline
     */
    getPipeline(): SeismicPipeline | null;
    /**
     * Sets time to wait changes
     * @param timeToWaitChanges time to wait changes
     */
    setTimeToWaitChanges(timeToWaitChanges: number): this;
    /**
     * Gets time to wait changes
     */
    getTimeToWaitChanges(): number;
    /**
     * Sets model limits
     * @param limits limits of the pipeline
     */
    setModelLimits(limits: Rect): this;
    /**
     * Returns model limits
     */
    getModelLimits(): Rect | null;
    /**
     * Returns model visible limits
     */
    getVisibleModelLimits(): Rect | null;
    /**
     * Returns transformation
     */
    getContentsTransform(): Transformation | null;
    /**
     * Returns scale options.
     */
    getScaleOptions(): {deviceunit: AbstractUnit; sampleunit: AbstractUnit | null; tracescale: number; samplescale: number} | object;
    /**
     * Sets scale options.
     * @param scaleOptions scale options
     * @param scaleOptions.deviceunit physical device unit
     * @param scaleOptions.sampleunit sample unit, sample unit from pipeline will be used if not specified
     * @param scaleOptions.tracescale in traces per device unit (e.g traces per inch)
     * @param scaleOptions.samplescale in z unit per device unit if depth data (e.g feet per inch), or in device unit per z unit (e.g inches per second)
     */
    setScaleOptions(scaleOptions: object | { deviceunit?: AbstractUnit | string; sampleunit?: AbstractUnit | string; tracescale?: number; samplescale?: number; } ): this;
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     */
    dispose(): void;
}
