import {EventDispatcher} from '../../util/EventDispatcher';
import {SeismicReader} from '../data/SeismicReader';
import {TraceMapping} from '../data/TraceMapping';
import {NormalizationType} from './NormalizationType';
import {Range} from '../../util/Range';
import {ColorMap} from '../util/ColorMap';
import {RenderingSide} from './RenderingSide';
import {ClippingMode} from './ClippingMode';
import {RasterizationLimitsType} from './RasterizationLimitsType';
import {SeismicTraceProcessor} from './processor/SeismicTraceProcessor';
import {Status} from '../data/Trace';
import {Transformation} from '../../util/Transformation';
import {QueryType} from './QueryType';
import {Rect} from '../../util/Rect';
import {InterpolationType} from './InterpolationType';
import {InterpolationEdge} from './InterpolationEdge';

/**
 * This class is an implementation of the seismic data processing pipeline that handles seismic traces from the data source to the seismic image generation stage.
 * <p>
 * The first operation performed by the SeismicPipeline is to read the seismic traces.
 * The  users can apply one or more filters, perform gain control, scale data,  interpolate the trace samples based on the display scale and finally generate the seismic image (Rasterization process) based on the selected plot type. Moreover, the user may want to
 * create custom operations (filters) and apply them as well.
 * The SeismicPipeline provides a flexible structure for users to insert their own trace processing. The SeismicPipeline is organized as a succession
 * of trace processors working on individual trace data (samples). The output data from one trace process
 * serves as the input data for the next process in pipeline.
 * The base class for the trace processors is <a href="geotoolkit.seismic.pipeline.processor.SeismicTraceProcessor.html">SeismicTraceProcessor</a>. The default trace processes are data normalization, interpolation
 * and rasterization process, which can be configured using the methods provided in this class.
 * </p>
 * <p>The first stage of a SeismicPipeline always needs to be a Seismic Reader (geotoolkit.seismic.data.SeismicReader).
 * The last 3 stages of the pipelines are Data Normalization, Data Interpolation and Rasterization in that order.
 * Any additional processor (such as filtering, AGC or any custom processor) are inserted between the Seismic Reader and Data Normalization and applied in the order which they are inserted.</p>
 * <p><b>Data Normalization</b>: The data normalization stage is used to normalize the seismic amplitudes before scaling and rasterization.
 * The normalization process applies one constant scalar value across the entire trace. The normalization factor can be the same for
 * all the traces in a dataset or can be calculated on the fly for each trace (trace normalization options).
 * The normalization factor can be calculated based on the dataset min and max values, the average or the RMS value.
 * The user can also provide custom limits to make comparison between datasets easier.
 * </p>
 * <p><b>Data Interpolation</b>:
 * The data interpolation stage adjusts the number of samples in the trace to match the height of the display (based on vertical scale settings). This may require interpolation (adding samples) or decimation (removing samples).
 * See methods setSamplesInterpolationType() and setSamplesInterpolationEdge() to control how samples are interpolated.
 * </p>
 * <p><b>Rasterization</b>:
 * The rasterization stage generates the seismic image. Usually seismic data is represented as a density plot (based on a colormap), as wiggles (monochrome or colored) or a combination of both.
 * Use method setPlotType() to control the display type and method setColorMap() to specify a colormap if required.
 * These plot types include both density displays, variable area wiggle fill displays and combinations of both.
 * A list of supported plot types is provided below:
 * </p>
 * <ul>
 * <li>Wiggle  - Wiggle display</li>
 * <li>NegativeFill - Negative monochrome variable area fill</li>
 * <li>PositiveFill -  Positive monochrome variable area fill</li>
 * <li>NegativeColorFill - Negative color variable area fill. Color varies inside the lobe based on the sample amplitude at each sample location.</li>
 * <li>PositiveColorFill -  Positive color variable area fil. Color varies inside the lobe based on the sample amplitude at each sample location. </li>
 * <li>SimpleDensity - Density color fill</li>
 * <li>InterpolatedDensity - Interpolated density color fill (between traces).</li>
 * </ul>
 * <p> The general logic of the pipeline can be presented as:
 * When a seismic image needs to render specific portion of seismic data (range of traces,
 * range of samples) it requests pipeline to provide necessary data trace by trace.
 * Pipeline sends request to the <a href="geotoolkit.seismic.data.SeismicReader.html">geotoolkit.seismic.data.SeismicReader</a>
 * that provides seismic data and forwards loaded traces to each seismic traces processor. The data are modified by every
 * process in pipeline and then forwarded to rasterizer that produces an image the users see on the output device like screen.
 * </p>
 */
export class SeismicPipeline extends EventDispatcher {
    /**
     * This class is an implementation of the seismic data processing pipeline that handles seismic traces from the data source to the seismic image generation stage.
     * <p>
     * The first operation performed by the SeismicPipeline is to read the seismic traces.
     * The  users can apply one or more filters, perform gain control, scale data,  interpolate the trace samples based on the display scale and finally generate the seismic image (Rasterization process) based on the selected plot type. Moreover, the user may want to
     * create custom operations (filters) and apply them as well.
     * The SeismicPipeline provides a flexible structure for users to insert their own trace processing. The SeismicPipeline is organized as a succession
     * of trace processors working on individual trace data (samples). The output data from one trace process
     * serves as the input data for the next process in pipeline.
     * The base class for the trace processors is <a href="geotoolkit.seismic.pipeline.processor.SeismicTraceProcessor.html">SeismicTraceProcessor</a>. The default trace processes are data normalization, interpolation
     * and rasterization process, which can be configured using the methods provided in this class.
     * </p>
     * <p>The first stage of a SeismicPipeline always needs to be a Seismic Reader (geotoolkit.seismic.data.SeismicReader).
     * The last 3 stages of the pipelines are Data Normalization, Data Interpolation and Rasterization in that order.
     * Any additional processor (such as filtering, AGC or any custom processor) are inserted between the Seismic Reader and Data Normalization and applied in the order which they are inserted.</p>
     * <p><b>Data Normalization</b>: The data normalization stage is used to normalize the seismic amplitudes before scaling and rasterization.
     * The normalization process applies one constant scalar value across the entire trace. The normalization factor can be the same for
     * all the traces in a dataset or can be calculated on the fly for each trace (trace normalization options).
     * The normalization factor can be calculated based on the dataset min and max values, the average or the RMS value.
     * The user can also provide custom limits to make comparison between datasets easier.
     * </p>
     * <p><b>Data Interpolation</b>:
     * The data interpolation stage adjusts the number of samples in the trace to match the height of the display (based on vertical scale settings). This may require interpolation (adding samples) or decimation (removing samples).
     * See methods setSamplesInterpolationType() and setSamplesInterpolationEdge() to control how samples are interpolated.
     * </p>
     * <p><b>Rasterization</b>:
     * The rasterization stage generates the seismic image. Usually seismic data is represented as a density plot (based on a colormap), as wiggles (monochrome or colored) or a combination of both.
     * Use method setPlotType() to control the display type and method setColorMap() to specify a colormap if required.
     * These plot types include both density displays, variable area wiggle fill displays and combinations of both.
     * A list of supported plot types is provided below:
     * </p>
     * <ul>
     * <li>Wiggle  - Wiggle display</li>
     * <li>NegativeFill - Negative monochrome variable area fill</li>
     * <li>PositiveFill -  Positive monochrome variable area fill</li>
     * <li>NegativeColorFill - Negative color variable area fill. Color varies inside the lobe based on the sample amplitude at each sample location.</li>
     * <li>PositiveColorFill -  Positive color variable area fil. Color varies inside the lobe based on the sample amplitude at each sample location. </li>
     * <li>SimpleDensity - Density color fill</li>
     * <li>InterpolatedDensity - Interpolated density color fill (between traces).</li>
     * </ul>
     * <p> The general logic of the pipeline can be presented as:
     * When a seismic image needs to render specific portion of seismic data (range of traces,
     * range of samples) it requests pipeline to provide necessary data trace by trace.
     * Pipeline sends request to the <a href="geotoolkit.seismic.data.SeismicReader.html">geotoolkit.seismic.data.SeismicReader</a>
     * that provides seismic data and forwards loaded traces to each seismic traces processor. The data are modified by every
     * process in pipeline and then forwarded to rasterizer that produces an image the users see on the output device like screen.
     * </p>
     * @param options object with all props or pipeline name
     * @param options.name pipeline name
     * @param options.statistics object
     * @param options.statistics.average Average trace value
     * @param options.statistics.min Minimum trace value
     * @param options.statistics.max Maximum trace value
     * @param options.statistics.rms RMS of trace values
     * @param options.reader Instance of the reader that provide the seismic data
     * @param options.maximumTracesPerPixel maximum traces per pixel
     * @param options.tracemapping optional trace mapping
     * @param options.traceoffset optional trace offset
     * @param options.version version
     * @param options.interpolation interpolation options
     * @param options.interpolation.traces options for interpolation between traces
     * @param options.interpolation.traces.type enum of interpolation types
     * @param options.interpolation.traces.edge enum of interpolation edge behavior
     * @param options.interpolation.samples options for interpolation between samples inside trace
     * @param options.interpolation.samples.type enum of interpolation types
     * @param options.interpolation.samples.edge enum of interpolation edge behavior
     * @param options.normalization normalization options
     * @param options.normalization.type normalization type
     * @param options.normalization.limits normalization limits
     * @param options.normalization.scale normalization params
     * @param options.plot plot options
     * @param options.plot.type plot type
     * @param options.plot.type.Wiggle wiggle or not
     * @param options.plot.type.PositiveFill flag to set Positive Fill or not
     * @param options.plot.type.NegativeFill flag to set Negative Fill or not
     * @param options.plot.type.PositiveColorFill flag to set Positive ColorFill or not
     * @param options.plot.type.NegativeColorFill flag to set Negative ColorFill or not
     * @param options.plot.type.LobeColorFill flag to set LobeColorFill or not
     * @param options.plot.type.SimpleDensity flag to set Simple Density or not
     * @param options.plot.type.InterpolatedDensity flag to set Interpolated Density or not
     * @param options.plot.type.Reversed reversed amplitude direction
     * @param options.plot.clippingFactor clipping factor for traces
     * @param options.plot.decimationSpacing decimation for traces
     * @param options.plot.densityDecimation decimation for traces in density mode, default value is undefined it means that it true only if wiggles are display
     * @param options.plot.amplitudeDecimation amplitude decimation options for trace fill and wiggles
     * @param options.plot.amplitudeDecimation.enabled enable amplitude decimation
     * @param options.plot.amplitudeDecimation.sizeInPixels minimum amplitude size in pixels
     * @param options.plot.amplitudeDecimation.nullifyValues false to skip rendering in case if amplitude is less then sizeInPixels, otherwise normalize to 0
     * @param options.colors colors
     * @param options.colors.colorMap color map
     * @param options.colors.reversed reversed current color map or new one
     * @param options.colors.alpha alpha chanel ratio
     * @param options.fetch fetch options
     * @param options.fetch.synchronous synchronous state
     * @param options.fetch.maxfetch maximum amount of active queries
     * @param options.fetch.awaittime time out
     * @param options.fetch.fetchsize maximum amount of traces per request
     * @param options.renderingside rendering side
     * @param options.clippingmode clipping mode
     * @param options.rasterizationlimitstype rasterization limits type
     * @param options.processes data processes
     * @param reader Instance of the reader that provide the seismic data deprecated since 2021.1 (3.3), use first parameter for all options
     * @param statistics object deprecated since 2021.1 (3.3), use first parameter for all options
     * @param statistics.average Average trace value
     * @param statistics.min Minimum trace value
     * @param statistics.max Maximum trace value
     * @param statistics.rms RMS of trace values
     * @param props options deprecated since 2021.1 (3.3), use first parameter for all options
     */
    constructor(options?: string | object | { name?: string; statistics?: object | { average?: number; min?: number; max?: number; rms?: number; } ; reader?: SeismicReader; maximumTracesPerPixel?: number; tracemapping?: TraceMapping; traceoffset?: number; version?: string; interpolation?: object | { traces?: object | { type?: string; edge?: string; } ; samples?: object | { type?: string; edge?: string; } ; } ; normalization?: object | { type?: NormalizationType; limits?: Range; scale?: number; } ; plot?: object | { type?: object | { Wiggle?: boolean; PositiveFill?: boolean; NegativeFill?: boolean; PositiveColorFill?: boolean; NegativeColorFill?: boolean; LobeColorFill?: boolean; SimpleDensity?: boolean; InterpolatedDensity?: boolean; Reversed?: boolean; } ; clippingFactor?: number; decimationSpacing?: number; densityDecimation?: boolean; amplitudeDecimation?: object | { enabled?: boolean; sizeInPixels?: number; nullifyValues?: boolean; } ; } ; colors?: object | { colorMap?: string | ColorMap; reversed?: boolean; alpha?: number; } ; fetch?: object | { synchronous?: boolean; maxfetch?: number; awaittime?: number; fetchsize?: number; } ; renderingside?: RenderingSide; clippingmode?: ClippingMode; rasterizationlimitstype?: RasterizationLimitsType; processes?: SeismicTraceProcessor[]; } , reader?: SeismicReader, statistics?: object | { average?: number; min?: number; max?: number; rms?: number; } , props?: object);
    /**
     * Sets reader
     * @param reader reader
     */
    setReader(reader: SeismicReader): this;
    /**
     * Construct a new seismic pipeline from the specified seismic pipeline.
     * @param src an instance of the seismic pipeline to make a copy.
     */
    protected copyConstructor(src: SeismicPipeline): this;
    /**
     * Gets time stamp
     */
    getTimeStamp(): number;
    /**
     * Update time stamp to indicate that pipeline has been changed.
     * @param silent silent mode. If this parameter equals to true then
     * pipeline doesn't send invalidate event
     */
    updateTimeStamp(silent?: boolean): this;
    /**
     * Creates a clone of the seismic pipeline.
     * All inheritors should implement copy constructor or provide custom implementation for this method.
     */
    clone(): SeismicPipeline;
    /**
     * Sets the trace status by id
     * @param traceId trace id
     * @param status trace status
     */
    setTraceStatus(traceId: number, status: Status): this;
    /**
     * Returns the trace status by id
     * @param traceId trace id
     */
    getTraceStatus(traceId: number): Status;
    /**
     * Returns the seismic reader. The seismic reader is responsible for reading seismic data from various sources and providing it to the seismic pipeline.
     */
    getReader(): SeismicReader;
    /**
     * Returns the current state of trace data fetching process. This method is useful to check if a pipeline is still receiving traces from the data
     * source
     */
    isFetching(): boolean;
    /**
     * Adds a callback method to the trace data fetching process. The callback method is triggered when the seismic pipeline is ready to process the query.
     * @param callback Whenever pipeline is ready to process your query, callback function is triggered.
     */
    await(callback: Function): void;
    /**
     * Returns the number of traces available from the seismic metadata.
     */
    getNumberOfTraces(): number;
    /**
     * Returns the number of samples available from the seismic metadata.
     */
    getNumberOfSamples(): number;
    /**
     * Returns a JSON object that has seismic data statistics, namely 'average', 'min', 'max', 'rms'
     */
    getStatistics(): {average: number; min: number; max: number; rms: number} | object;
    /**
     * Sets a  object that has seismic data statistics,
     * namely 'average', 'min', 'max', 'rms'
     * @param statistics object
     * @param statistics.average Average trace value
     * @param statistics.min Minimum trace value
     * @param statistics.max Maximum trace value
     * @param statistics.rms RMS of trace values
     */
    setStatistics(statistics: object | { average: number; min: number; max: number; rms: number; } ): void;
    /**
     * Returns seismic transformation which determines how many traces and samples per unit is displayed on the screen.
     */
    getTransformation(): Transformation;
    /**
     * Sets trace mapping. If this mapping is set the trace decimation is off.
     * @param mapping a new trace mapping
     */
    setTraceMapping(mapping: TraceMapping): this;
    /**
     * Sets trace decimation factor
     * @param tracesPerPixel traces per pixel
     */
    setTraceDecimation(tracesPerPixel: number): this;
    /**
     * Return trace decimation factor if no decimation it returns Number.NaN
     */
    getTraceDecimation(): number;
    /**
     * returns trace mapping
     */
    getTraceMapping(): TraceMapping;
    /**
     * Returns trace offset
     */
    getTraceOffset(): number;
    /**
     * Set trace offset
     * @param offset trace offset
     */
    setTraceOffset(offset: number): this;
    /**
     * Executes a query with specified condition. This query result will be applied to all the trace processors active in the seismic pipeline.
     * @param condition object Condition to select range of traces based on parameters namely, from and to.
     * @param condition.from Start of the trace or trace location
     * @param condition.to End of the trace or trace location
     * @param condition.traceIndexes optional indices of traces instead of from and to positions
     * @param condition.type type fo the query
     * @param fetchCallback Callback function which is executed when data (query result) has arrived for the selection.
     * @param validationCallback Callback function which is executed before data requested.
     */
    select(condition: object | { from?: number; to?: number; traceIndexes?: number[]; type?: QueryType; } , fetchCallback?: Function, validationCallback?: Function | null): void;
    /**
     * Adds trace processors to the seismic pipeline.
     * The added trace processors should be made active to apply it to the data before rendering to a seismic image.
     * @param processor processor to apply for seismic trace
     * samples
     */
    addTraceProcessor(processor: SeismicTraceProcessor): this;
    /**
     * Removes an existing trace processor from the seismic pipeline.
     * @param processor The Seismic Data Trace Processor
     */
    removeTraceProcessor(processor: SeismicTraceProcessor): this;
    /**
     * Returns the existing trace processor by index.
     * @param index Index of the trace process in the collection or its name
     */
    getTraceProcessor(index: number | string): SeismicTraceProcessor;
    /**
     * Returns a count of SeismicTraceProcessor[s] applied to the seismic pipeline
     */
    getTraceProcessorsCount(): number;
    /**
     * Remove all trace processors
     */
    clearTraceProcessors(): this;
    /**
     * Reset model limits of the seismic pipeline to null.
     */
    resetModelLimits(): this;
    /**
     * Return data limits of traces and samples
     */
    getDataLimits(): Rect;
    /**
     * Returns the current model limits
     */
    getModelLimits(): Rect;
    /**
     * Returns the rasterization plot type
     */
    getPlotType(): {Wiggle: boolean; PositiveFill: boolean; NegativeFill: boolean; PositiveColorFill: boolean; NegativeColorFill: boolean; SimpleDensity: boolean; InterpolatedDensity: boolean; Reversed: boolean} | object;
    /**
     * Sets the rasterization plot type
     * @param plotType JSON object that contains combination of flags that specify how to render seismic
     * @param plotType.Wiggle wiggle or not
     * @param plotType.PositiveFill flag to set Positive Fill or not
     * @param plotType.NegativeFill flag to set Negative Fill or not
     * @param plotType.PositiveColorFill flag to set Positive ColorFill or not
     * @param plotType.NegativeColorFill flag to set Negative ColorFill or not
     * @param plotType.LobeColorFill flag to set LobeColorFill or not
     * @param plotType.SimpleDensity flag to set Simple Density or not
     * @param plotType.InterpolatedDensity flag to set Interpolated Density or not
     * @param plotType.Reversed reversed amplitude direction
     * @param invalidate flag set to notify the listener if pipeline changes
     */
    setPlotType(plotType: object | { Wiggle?: boolean; PositiveFill?: boolean; NegativeFill?: boolean; PositiveColorFill?: boolean; NegativeColorFill?: boolean; LobeColorFill?: boolean; SimpleDensity?: boolean; InterpolatedDensity?: boolean; Reversed?: boolean; } , invalidate?: boolean): this;
    /**
     * Returns the name of the seismic pipeline.
     */
    getName(): string;
    /**
     * Sets color map for rendering the seismic image. if pipeline has option reversed for colors then colormap
     * will be reversed
     * @param colorMap sets the color map
     * @param updateColorMapLimits true to update colormap limits from previous colormap or normalization limits
     */
    setColorMap(colorMap: ColorMap, updateColorMapLimits?: boolean): this;
    /**
     * Returns the color map used to render the seismic image.
     */
    getColorMap(): ColorMap;
    /**
     * Sets interpolation type.
     * @param interpolationType Enum of seismic pipeline interpolation types
     */
    setSamplesInterpolationType(interpolationType: InterpolationType): boolean;
    /**
     * Returns interpolation type defined under geotoolkit.seismic.pipeline.InterpolationType
     */
    getSamplesInterpolationType(): InterpolationType;
    /**
     * Sets the interpolation edge.
     * @param interpolationEdge Specifies how interpolation handles edge (begin and end elements) of data
     */
    setSamplesInterpolationEdge(interpolationEdge: InterpolationEdge): boolean;
    /**
     * Returns interpolation edge
     */
    getSamplesInterpolationEdge(): InterpolationEdge;
    /**
     * Sets interpolation type.
     * @param interpolationType Enum of seismic pipeline interpolation types
     */
    setTracesInterpolationType(interpolationType: InterpolationType): boolean;
    /**
     * Returns interpolation type defined under geotoolkit.seismic.pipeline.InterpolationType
     */
    getTracesInterpolationType(): InterpolationType;
    /**
     * Sets the interpolation edge.
     * @param interpolationEdge Specifies how interpolation handles edge (begin and end elements) of data
     */
    setTracesInterpolationEdge(interpolationEdge: InterpolationEdge): boolean;
    /**
     * Returns interpolation edge
     */
    getTracesInterpolationEdge(): InterpolationEdge;
    /**
     * Sets data normalization parameters on the seismic pipeline.
     * @example
     * ```javascript
     * import {NormalizationType} from '@int/geotoolkit/seismic/pipeline/NormalizationType';
     * pipeline.setNormalization({
     *   'type'   : NormalizationType.Limits,
     *   'limits' : {
     *       'min': -1,
     *       'max': 1
     *   },
     *   'scale'  : 0.4
     * })
     * ```
     * @param normalization normalization options
     * @param normalization.type enum of normalization types
     * @param normalization.limits normalization limits (min,max), which is
     * used for NormalizationType.Limits only
     * @param normalization.limits.min normalization limits minimum value
     * @param normalization.limits.max normalization limits maximum value
     * @param normalization.scale scale factor
     * @param updateColorMapLimits true for update colormap limits from normalization
     */
    setNormalization(normalization: object | { type?: NormalizationType; limits?: Range | object | { min?: number; max?: number; } ; scale?: number; } , updateColorMapLimits?: boolean): this;
    /**
     * Return normalization
     */
    getNormalization(): {type: NormalizationType; limits: Range; scale: number} | object;
    /**
     * Gets normalization scale
     */
    getScaleFactor(): number;
    /**
     * Gets rendering side
     */
    getRenderingSide(): RenderingSide;
    /**
     * Sets rendering side
     * @param renderingSide rendering side
     */
    setRenderingSide(renderingSide: RenderingSide): this;
    /**
     * Get clipping mode
     */
    getClippingMode(): ClippingMode;
    /**
     * Set clipping mode
     * @param clippingMode clipping mode
     */
    setClippingMode(clippingMode: ClippingMode): this;
    /**
     * Returns current pipeline state
     */
    getOptions(): any;
    /**
     * Set pipeline options
     * @param options pipeline options see {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline.SeismicPipeline#setProperties}
     */
    setOptions(options?: any): this;
    /**
     * Render seismic model in to the canvas
     * @param seismicModelBounds seismic source model bounds
     * @param canvas target image
     * @param targetBounds target bounds
     * @param offsetX x position on the canvas
     * @param offsetY y position on the canvas
     * @param fetchCallback Callback function which is executed when data (query result) has arrived for the selection.
     * @param validationCallback Callback function which is executed before data requested.
     */
    exportToImage(seismicModelBounds: Rect, canvas: HTMLCanvasElement, targetBounds?: Rect, offsetX?: number, offsetY?: number, fetchCallback?: Function | null, validationCallback?: Function | null): void;
    /**
     * Returns model to sample transformation
     */
    getModelToSamplesTransformation(): Transformation;
    /**
     * Invalidate node
     * @param params additional invalidate parameters
     */
    invalidate(params?: any): void;
    /**
     * Disposes this pipeline. Once disposed, the pipeline should not be used anymore.<br>
     * Please clear all listeners  and invalidate handlers to avoid memory leaks.<br>
     */
    dispose(): void;
    /**
     * This method invalidates the pipeline and any existing trace processors.
     */
    refresh(): this;
    /**
     * This method clears the pipeline and processors memory allocations
     */
    clear(): this;
    /**
     * Gets the pipeline properties
     */
    getProperties(): {name: string; statistics: {average: number; min: number; max: number; rms: number}; reader: SeismicReader; maximumTracesPerPixel: number; tracemapping: TraceMapping; traceoffset: number; interpolation: {traces: {type: string; edge: string}; samples: {type: string; edge: string}}; normalization: {type: NormalizationType; limits: Range; scale: number}; plot: {type: {Wiggle: boolean; PositiveFill: boolean; NegativeFill: boolean; PositiveColorFill: boolean; NegativeColorFill: boolean; SimpleDensity: boolean; InterpolatedDensity: boolean; Reversed: boolean}; clippingFactor: number; decimationSpacing: number; densityDecimation: boolean; amplitudeDecimation: {enabled: boolean; sizeInPixels: number; nullifyValues: boolean}}; colors: {colorMap: ColorMap; reversed: boolean; alpha: number}; fetch: {synchronous: boolean; maxfetch: number; awaittime: number; fetchsize: number}; renderingside: RenderingSide; clippingmode: ClippingMode; rasterizationlimitstype: RasterizationLimitsType; processes: SeismicTraceProcessor[]} | any;
    /**
     * Sets the pipeline properties
     * @param props object with all props
     * @param props.name pipeline name
     * @param props.statistics object
     * @param props.statistics.average Average trace value
     * @param props.statistics.min Minimum trace value
     * @param props.statistics.max Maximum trace value
     * @param props.statistics.rms RMS of trace values
     * @param props.reader Instance of the reader that provide the seismic data
     * @param props.maximumTracesPerPixel maximum traces per pixel
     * @param props.tracemapping optional trace mapping
     * @param props.traceoffset optional trace offset
     * @param props.version version
     * @param props.interpolation interpolation options
     * @param props.interpolation.traces options for interpolation between traces
     * @param props.interpolation.traces.type enum of interpolation types
     * @param props.interpolation.traces.edge enum of interpolation edge behavior
     * @param props.interpolation.samples options for interpolation between samples inside trace
     * @param props.interpolation.samples.type enum of interpolation types
     * @param props.interpolation.samples.edge enum of interpolation edge behavior
     * @param props.normalization normalization options
     * @param props.normalization.type normalization type
     * @param props.normalization.limits normalization limits
     * @param props.normalization.scale normalization params
     * @param props.plot plot options
     * @param props.plot.type plot type
     * @param props.plot.type.Wiggle wiggle or not
     * @param props.plot.type.PositiveFill flag to set Positive Fill or not
     * @param props.plot.type.NegativeFill flag to set Negative Fill or not
     * @param props.plot.type.PositiveColorFill flag to set Positive ColorFill or not
     * @param props.plot.type.NegativeColorFill flag to set Negative ColorFill or not
     * @param props.plot.type.LobeColorFill flag to set LobeColorFill or not
     * @param props.plot.type.SimpleDensity flag to set Simple Density or not
     * @param props.plot.type.InterpolatedDensity flag to set Interpolated Density or not
     * @param props.plot.type.Reversed reversed amplitude direction
     * @param props.plot.clippingFactor clipping factor for traces
     * @param props.plot.decimationSpacing decimation for traces
     * @param props.plot.densityDecimation decimation for traces in density mode, default value is undefined it means that it true only if wiggles are display
     * @param props.plot.amplitudeDecimation amplitude decimation options for trace fill and wiggles
     * @param props.plot.amplitudeDecimation.enabled enable amplitude decimation
     * @param props.plot.amplitudeDecimation.sizeInPixels minimum amplitude size in pixels
     * @param props.plot.amplitudeDecimation.nullifyValues false to skip rendering in case if amplitude is less then sizeInPixels, otherwise normalize to 0
     * @param props.colors colors
     * @param props.colors.colorMap color map
     * @param props.colors.reversed reversed current color map or new one
     * @param props.colors.alpha alpha chanel ratio
     * @param props.fetch fetch options
     * @param props.fetch.synchronous synchronous state
     * @param props.fetch.maxfetch maximum amount of active queries
     * @param props.fetch.awaittime time out
     * @param props.fetch.fetchsize maximum amount of traces per request
     * @param props.renderingside rendering side
     * @param props.clippingmode clipping mode
     * @param props.rasterizationlimitstype rasterization limits type
     * @param props.processes data processes
     */
    setProperties(props?: object | { name?: string; statistics?: object | { average?: number; min?: number; max?: number; rms?: number; } ; reader?: SeismicReader; maximumTracesPerPixel?: number; tracemapping?: TraceMapping; traceoffset?: number; version?: string; interpolation?: object | { traces?: object | { type?: string; edge?: string; } ; samples?: object | { type?: string; edge?: string; } ; } ; normalization?: object | { type?: NormalizationType; limits?: Range; scale?: number; } ; plot?: object | { type?: object | { Wiggle?: boolean; PositiveFill?: boolean; NegativeFill?: boolean; PositiveColorFill?: boolean; NegativeColorFill?: boolean; LobeColorFill?: boolean; SimpleDensity?: boolean; InterpolatedDensity?: boolean; Reversed?: boolean; } ; clippingFactor?: number; decimationSpacing?: number; densityDecimation?: boolean; amplitudeDecimation?: object | { enabled?: boolean; sizeInPixels?: number; nullifyValues?: boolean; } ; } ; colors?: object | { colorMap?: string | ColorMap; reversed?: boolean; alpha?: number; } ; fetch?: object | { synchronous?: boolean; maxfetch?: number; awaittime?: number; fetchsize?: number; } ; renderingside?: RenderingSide; clippingmode?: ClippingMode; rasterizationlimitstype?: RasterizationLimitsType; processes?: SeismicTraceProcessor[]; } ): this;
    /**
     * Sets rasterization limits type
     * @param rasterizationLimitsType rasterization limits type
     */
    setRasterizationLimitsType(rasterizationLimitsType: RasterizationLimitsType): this;
    /**
     * Gets rasterization limits type
     */
    getRasterizationLimitsType(): RasterizationLimitsType;
}
/**
 * SeismicPipeline's Events enumerator. These events are fired while setting options ( see setOptions()) on the seismic pipeline.
 */
export enum Events {
    /**
     * Event type fired prior to options being set
     */
    BeforeSetOptions = 'BeforeSetOptions',
    /**
     * Event type fired when options are being set
     */
    SetOptions = 'SetOptions',
    /**
     * Event type fired when trace mapping updated
     */
    TraceMappingUpdated = 'TraceMappingUpdated',
    /**
     * Event type fired when a pipeline is modified and requires an update cycle to be done
     */
    Invalidate = 'Invalidate',
    /**
     * Event type fired when server side rendering type is changed
     */
    RenderingSideChanged = 'RenderingSideChanged'
}
/**
 * SeismicPipeline's Invalidation Type Enumerator. This type is optional to describe a reason of pipeline
 * invalidation
 */
export enum InvalidationType {
    /**
     * Event type fired when a pipeline transformation is changed
     */
    Transformation = 'transformation',
    /**
     * Event type fired when a pipeline limits are changed
     */
    Limits = 'limits',
    /**
     * Event type fired when a trace headers are changed
     */
    TraceHeaders = 'traceheaders',
    /**
     * Event type fired when all parameters of pipeline are changed
including statistics and limits
     */
    DataChanged = 'datachanged'
}
