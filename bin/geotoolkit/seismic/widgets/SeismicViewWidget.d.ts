import {BaseWidget} from '../../widgets/BaseWidget';
import {IExportable} from '../../scene/exports/IExportable';
import {SeismicPipeline} from '../pipeline/SeismicPipeline';
import {TextStyle} from '../../attributes/TextStyle';
import {AnchorType} from '../../util/AnchorType';
import {AnnotationLocation} from '../../layout/AnnotationLocation';
import {SpaceStyle} from '../../attributes/SpaceStyle';
import {ColorBarLocation} from '../../controls/shapes/ColorBarLocation';
import {LineStyle} from '../../attributes/LineStyle';
import {Axis} from '../../axis/Axis';
import {Direction} from '../../layout/VerticalBoxLayout';
import {Orientation} from '../../util/Orientation';
import {AbstractUnit} from '../../util/AbstractUnit';
import {FieldDesc} from '../data/FieldDesc';
import {Text} from '../../scene/shapes/Text';
import {Group} from '../../scene/Group';
import {Rect} from '../../util/Rect';
import {Transformation} from '../../util/Transformation';
import {SeismicImage} from '../image/SeismicImage';
import {Layer} from '../../scene/Layer';
import {AbstractCompositeTool} from '../../controls/tools/AbstractCompositeTool';
import {NormalizationType} from '../pipeline/NormalizationType';
import {Range} from '../../util/Range';
import {ClippingMode} from '../pipeline/ClippingMode';
import {SeismicColors} from '../util/SeismicColors';
import {AbstractDocumentElement} from '../../scene/exports/AbstractDocumentElement';
import {HeaderComponent} from '../../scene/exports/HeaderComponent';
import {FooterComponent} from '../../scene/exports/FooterComponent';
import {ImageCompression} from '../../pdf/ImageCompression';
import {SpeedCompression} from '../../pdf/SpeedCompression';
import {IWritable} from '../../util/stream/IWritable';
import {EmbededFont} from '../../pdf/PdfExport';

/**
 * SeismicViewWidget is essentially a base widget specialized for seismic data display. Internally it uses classes like {@link @int/geotoolkit/seismic/image/SeismicImage.SeismicImage} and {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline.SeismicPipeline} from Seismic toolkit.<br>
 * The SeismicViewWidget handles the synchronization of the model limits and display units while zooming and scrolling. The horizontal and vertical scroll bars will be displayed by default and its properties can be easily modified. <br>
 * The scaling functionality from seismic image is utilized by calling get/setScaleOptions().<br>
 * The widget utilizes the {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline.SeismicPipeline} to manipulate the properties like Interpolation, Normalization etc.<br>
 * It can display a colorbar and also change its location as needed. The widget has default tools like Crosshair but it also supports tools like: <br>
 * <ul>
 * <li> panning </li>
 * <li> selection </li>
 * <li> rubberzoom </li>
 * <li> pinchzoom </li>
 * </ul>
 * @example
 * ```javascript
 * // following code shows how to create a seismic view widget using a pipeline. The {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline.SeismicPipeline} is created earlier using a seismic reader.
 * import {SeismicViewWidget} from '@int/geotoolkit/seismic/widgets/SeismicViewWidget';
 * const widget = new SeismicViewWidget(
 *  {
 *           'pipeline': pipeline,
 *           'layouttype': 'inside',
 *           'statusbar': {
 *               'visible': false
 *           }
 *  })
 *  .setScaleOptions({
 *           'tracescale': 10,
 *           'samplescale': 50,
 *           'deviceunit': 'in',
 *           'sampleunit': 'ms'
 *       });
 * ```
 * @example
 * ```javascript
 * // change default scrollbars
 * const widget = new SeismicViewWidget({
 *   'pipeline': pipeline,
 *   'scroll': {
 *       'horizontal': {
 *           'visible': true,
 *           'cssclass': 'horizontal-scroll',
 *           'type': 'geotoolkit.controls.tools.scroll.HorizontalScroll'
 *       },
 *       'vertical': {
 *           'visible': true,
 *           'cssclass': 'vertical-scroll',
 *           'type': 'geotoolkit.controls.tools.scroll.VerticalScroll'
 *       }
 *   }});
 * ```
 * @example
 * ```javascript
 * //hide default axis ( headers)
 * widget.setTraceHeaderVisible('TraceNumber', false);
 * // or
 * widget.setOptions({
 *   'axes': {
 *      'headers': {
 *           'fields': [
 *               {
 *                   'name': 'TraceNumber',
 *                   'title': 'Trace Number',
 *                   'visible': false
 *               }]
 *       }
 *   }
 * });
 * ```
 * @example
 * ```javascript
 * How to capture visible limits changed if user scrolls or scale content
 *  import {Events as NodeEvents} from '@int/geotoolkit/scene/Node';
 *  seismicWidget.on(NodeEvents.VisibleLimitsChanged, (event, sender, args) => {
 *  // args[‘visibleModelLimits’]
 *  // args[‘visibleDeviceLimits’]
 *  });
 * ```
 */
export class SeismicViewWidget extends BaseWidget implements IExportable {
    /**
     * SeismicViewWidget is essentially a base widget specialized for seismic data display. Internally it uses classes like {@link @int/geotoolkit/seismic/image/SeismicImage.SeismicImage} and {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline.SeismicPipeline} from Seismic toolkit.<br>
     * The SeismicViewWidget handles the synchronization of the model limits and display units while zooming and scrolling. The horizontal and vertical scroll bars will be displayed by default and its properties can be easily modified. <br>
     * The scaling functionality from seismic image is utilized by calling get/setScaleOptions().<br>
     * The widget utilizes the {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline.SeismicPipeline} to manipulate the properties like Interpolation, Normalization etc.<br>
     * It can display a colorbar and also change its location as needed. The widget has default tools like Crosshair but it also supports tools like: <br>
     * <ul>
     * <li> panning </li>
     * <li> selection </li>
     * <li> rubberzoom </li>
     * <li> pinchzoom </li>
     * </ul>
     * @param options options or seismic pipeline
     * @param options.layouttype type of layout 'default' or 'inside'
     * @param options.title defines title options of widget
     * @param options.title.text defines title of widget
     * @param options.title.visible defines title visibility
     * @param options.title.textstyle text style
     * @param options.title.size size of the title in pixels
     * @param options.title.alignment alignment
     * @param options.title.location defines title location
     * @param options.title.cssclass CSS style of the title
     * @param options.colorbar json defining color bar
     * @param options.colorbar.margin defines colorbar margin
     * @param options.colorbar.visible defines visibility of colorbar
     * @param options.colorbar.location defines location of colorbar
     * @param options.colorbar.linestyle line style
     * @param options.colorbar.title color bar title
     * @param options.colorbar.title.size title area desired size
     * @param options.colorbar.title.visible title visibility
     * @param options.colorbar.title.text title text
     * @param options.colorbar.title.textstyle title textstyle
     * @param options.colorbar.axis colorbar axis
     * @param options.colorbar.axis.size axis area desired size
     * @param options.colorbar.axis.visible axis visibility
     * @param options.colorbar.axis.autolabelrotation axis auto label rotation flag
     * @param options.colorbar.colorbox color box attributes
     * @param options.colorbar.colorbox.size colorbox area desired size
     * @param options.colorbar.colorbox.linestyle colorbox outline rectangle linestyle
     * @param options.colorbar.namedcolors named colors options
     * @param options.colorbar.namedcolors.size named colors desired size
     * @param options.colorbar.maxheight maximun height of color bar. by default it is unlimited
     * @param options.colorbar.pipeline seismic pipeline to properties for colorbar if it is null then default pipeline is used
     * @param options.axes specify set of axes
     * @param options.axes.samples specify properties of vertical axis
     * @param options.axes.samples.visible defines visibility of sample axis
     * @param options.axes.samples.cssclass defines cssclass of samples axis
     * @param options.axes.samples.location defines location of sample axis
     * @param options.axes.samples.instance defines instance of sample axis
     * @param options.axes.samples.size defines size in pixels of samples axis
     * @param options.axes.samples.title defines title options of sample axis
     * @param options.axes.samples.title.text defines title of sample axis
     * @param options.axes.samples.title.visible defines title visibility of sample axis
     * @param options.axes.samples.title.textstyle defines title text style of sample axis
     * @param options.axes.samples.ticks objects which defines ticks options of the axis. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setOptions} for details
     * @param options.axes.headers seismic headers axes options
     * @param options.axes.headers.fields array of trace headers axes, should contains JSON object with 'name', 'visible', 'title' and 'minimumSpan' properties
     * @param options.axes.headers.options default options for all axes
     * @param options.axes.headers.options.minimumSpan minimum span for header tick generator
     * @param options.axes.headers.options.location default axes location, can be 'north' or 'south'
     * @param options.axes.headers.options.direction default axes direction, can be 'toptobottom' or 'bottomtotop'
     * @param options.axes.headers.options.size default axis size
     * @param options.scroll specify scroll bar properties
     * @param options.scroll.horizontal specify horizontal scroll bar properties
     * @param options.scroll.horizontal.visible specify horizontal scroll bar visibility
     * @param options.scroll.horizontal.cssclass specify horizontal scroll bar cssclass name
     * @param options.scroll.vertical specify vertical scroll bar properties
     * @param options.scroll.vertical.visible specify vertical scroll bar visibility
     * @param options.scroll.vertical.cssclass specify vertical scroll bar cssclass name
     * @param options.annotationssizes JSON to hold (width or height) of the annotation
     * @param options.annotationssizes.east JSON to hold east annotation size
     * @param options.annotationssizes.south JSON to hold south annotation size
     * @param options.annotationssizes.west JSON to hold west annotation size
     * @param options.annotationssizes.north JSON to hold north annotation size
     * @param options.autoseismiclimits sets model limits of the center group based on the pipeline limits. If limits sets to false
     * @param options.tools tools options. See {@link @int/geotoolkit/seismic/widgets/SeismicViewWidget.SeismicViewWidget#setToolsOptions} for details
     * @param options.scale scale options. See {@link @int/geotoolkit/seismic/widgets/SeismicViewWidget.SeismicViewWidget#setScaleOptions} for details}
     * @param options.freezeupdate freeze updating widget until new seismic data is loaded and rendered for visible area
     * @param options.orientation seismic trace orientation
     * @param options.pipeline seismic pipeline
     * @param properties deprecated since 2021.1 (3.3), use first argument instead
     */
    constructor(options?: SeismicPipeline | object | { layouttype?: string; title?: object | { text?: string; visible?: boolean; textstyle?: TextStyle | any; size?: number; alignment?: AnchorType; location?: AnnotationLocation; cssclass?: string; } ; colorbar?: object | { margin?: string | number | any | SpaceStyle; visible?: boolean; location?: ColorBarLocation; linestyle?: LineStyle | any; title?: object | { size?: number; visible?: boolean; text?: string; textstyle?: TextStyle | any; } ; axis?: object | { size?: number; visible?: boolean; autolabelrotation?: boolean; } ; colorbox?: object | { size?: number; linestyle?: LineStyle | any; } ; namedcolors?: object | { size?: number; } ; maxheight?: number; pipeline?: SeismicPipeline; } ; axes?: object | { samples?: object | { visible?: boolean; cssclass?: string; location?: AnnotationLocation; instance?: Axis; size?: number; title?: object | { text?: string; visible?: boolean; textstyle?: TextStyle | any; } ; ticks?: any; } ; headers?: object | { fields?: any[]; options?: object | { minimumSpan?: number; location?: string; direction?: Direction; size?: number; } ; } ; } ; scroll?: object | { horizontal?: object | { visible?: boolean; cssclass?: string; } ; vertical?: object | { visible?: boolean; cssclass?: string; } ; } ; annotationssizes?: object | { east?: any; south?: any; west?: any; north?: any; } ; autoseismiclimits?: boolean; tools?: any; scale?: any; freezeupdate?: boolean; orientation?: Orientation; pipeline?: SeismicPipeline; } , properties?: any);
    /**
     * Returns seismic trace orientation
     */
    getOrientation(): Orientation;
    /**
     * Set seismic trace orientation
     * @param orientation seismic orientation
     * @param keepVisibleModelLimits keep visible model limits
     */
    setOrientation(orientation: Orientation, keepVisibleModelLimits?: boolean): this;
    /**
     */
    protected onOrientationChanged(): this;
    /**
     * Set widget options
     * @param options options see {@link @int/geotoolkit/seismic/widgets/SeismicViewWidget.SeismicViewWidget#setProperties}
     */
    setOptions(options?: any): this;
    /**
     * Set widget title
     * @param title title
     * @param title.text title text
     * @param title.visible visibility
     * @param title.textstyle text style
     * @param title.size size of the title in pixels
     * @param title.alignment alignment
     * @param title.location defines location
     * @param title.cssclass CSS style of the title
     */
    setTitle(title: string | object | { text?: string; visible?: boolean; textstyle?: TextStyle | string | object; size?: number; alignment?: AnchorType; location?: AnnotationLocation; cssclass?: string; } ): this;
    /**
     * Gets widget title
     */
    getTitle(): {title: string; visible: boolean; textstyle: TextStyle | object; size: number; alignment: AnchorType} | object;
    /**
     * Set samples title
     * @param title title
     * @param title.title title
     * @param title.visible visibility
     * @param title.textstyle text style
     * @param title.alignment alignment
     */
    setSamplesTitle(title: string | object | { title?: string; visible?: boolean; textstyle?: TextStyle | string | object; alignment?: AnchorType; } ): this;
    /**
     * Set tools options
     * @param options tools options
     * @param options.colorbar tools options. See {@link @int/geotoolkit/seismic/widgets/tools/FloatingColorBar.FloatingColorBar#setOptions} for details
     */
    setToolsOptions(options: object | { colorbar?: any; } ): this;
    /**
     * function call in the constructor to initialize tools in the widget
     * @param options tools options
     */
    protected initializeTools(options?: any): this;
    /**
     * Returns scale options.
     */
    getScaleOptions(): {deviceunit: AbstractUnit; sampleunit: AbstractUnit | null; tracescale: number; samplescale: number} | object;
    /**
     * Sets scale options. If setScaleOption() is not set, the SeismicImage assumes a default .
     * @param scaleOptions scale options
     * @param scaleOptions.deviceunit physical device unit
     * @param scaleOptions.sampleunit sample unit, sample unit from pipeline will be used if not specified
     * @param scaleOptions.tracescale in traces per device unit (e.g traces per inch)
     * @param scaleOptions.samplescale in z unit per device unit if depth data (e.g feet per inch), or in device unit per z unit (e.g inches per second)
     * @param saveViewPoint if true, scale relative to the center visible limits
     */
    setScaleOptions(scaleOptions: object | { deviceunit?: AbstractUnit | string; sampleunit?: AbstractUnit | string; tracescale?: number; samplescale?: number; } , saveViewPoint?: boolean): this;
    /**
     * Returns the array of available headers
     */
    getTraceHeaders(): string[];
    /**
     * Returns header description, if header exists
     * @param headerName header name
     */
    getTraceHeader(headerName: string): FieldDesc | null;
    /**
     * Returns information about shapes like axis and labels associated with the header
     * @param headerField header field description, accept only 'TraceNumber' as a string
     */
    getTraceHeaderAxis(headerField: FieldDesc | string): {axis: Axis | null; label: Text | null} | object;
    /**
     * Check if the trace header is visible
     * @param headerField field to check visibility, accept only 'TraceNumber' as a string
     */
    getTraceHeaderVisible(headerField: FieldDesc | string): boolean;
    /**
     * This method shows or hides the header
     * @param headerField field, accept only 'TraceNumber' as a string
     * @param visible header visibility
     */
    setTraceHeaderVisible(headerField: FieldDesc | string, visible: boolean): {axis: Axis | null; label: Text | null} | object;
    /**
     * This method updates the layout of the seismic widget and all its child components with new/modified settings.
     */
    updateLayout(): this;
    /**
     * Returns the seismic model node
     */
    getModel(): Group;
    /**
     * Returns the group, which contains seismic images
     */
    getSeismicModel(): Group;
    /**
     * return seismic model limits
     */
    getSeismicModelLimits(): Rect;
    /**
     * Sets seismic model limits if auto seismic model limits is off
     * @param limits model limits
     */
    setSeismicModelLimits(limits: Rect): this;
    /**
     * return seismic model limits
     */
    getVisibleSeismicDeviceLimits(): Rect;
    /**
     * Returns seismic visible model limits
     * @param ignoreModelLimits flag defines whether to ignore model limits or not. By default this option is false and
     * visible limits will be intersected with model limits of the seismic
     */
    getVisibleSeismicModelLimits(ignoreModelLimits?: boolean): Rect;
    /**
     * Returns active manipulator type
     */
    getManipulatorType(): ManipulatorType;
    /**
     * Set active manipulator type
     * @param manipulatorType enum of  of Manipulator type. Panning tool, RubberBand tool, magnifier tool and picking tool.
     * @param active state
     */
    setManipulatorType(manipulatorType: ManipulatorType, active: boolean): this;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bound of the node in the parent coordinates
     */
    setBounds(bounds: Rect | object): this;
    /**
     * Fit content to bounds
     * @param silent optional parameter to synchronize limits
     */
    fitToBounds(silent?: boolean): this;
    /**
     * translate seismic model
     * @param dX offset x
     * @param dY offset y
     * @param silent update view
     */
    translate(dX: number, dY: number, silent?: boolean): this;
    /**
     * scale seismic model
     * @param scaleX scale factor by horizontal axis
     * @param scaleY scale factor by vertical axis
     * @param silent update view
     */
    scale(scaleX: number, scaleY: number, silent?: boolean): this;
    /**
     * Zoom in
     */
    zoomIn(): this;
    /**
     * Zoom out
     */
    zoomOut(): this;
    /**
     * Reset zoom
     */
    resetZoom(): this;
    /**
     * set visible model limits
     * @param visibleModelLimits visible model limits
     * @param silent notification to listener on or not
     */
    setVisibleSeismicModelLimits(visibleModelLimits: Rect, silent: boolean): this;
    /**
     * Attempts to set local transformation for the seismic model.
     * @param transformation transformation to set
     */
    setSeismicModelTransformation(transformation: Transformation): this;
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     */
    dispose(): void;
    /**
     * returns active pipeline
     */
    getPipeline(): SeismicPipeline | null;
    /**
     * Set pipeline for image, colorbar and other components
     * @param pipeline Seismic Pipeline
     * @param resetTransformation reset transformation
     */
    setPipeline(pipeline: SeismicPipeline | null, resetTransformation?: boolean): this;
    /**
     * return active seismic image
     */
    getSeismicImage(): SeismicImage;
    /**
     * Set pipeline to set colorbar parameters. if it is null then getPipeline is used
     * @example
     * ```javascript
     * // How to set up a new pipeline for colorbar different from main pipeline
     * widget.setColorBarPipeline(secondPipeline);
     * ```
     * @param pipeline Seismic Pipeline
     */
    setColorBarPipeline(pipeline: SeismicPipeline | null): this;
    /**
     * Return pipeline to be used for colorbar
     */
    getColorBarPipeline(): SeismicPipeline | null;
    /**
     * Invalidate node
     */
    notifyStateChanged(): void;
    /**
     * Return manipulator layer
     */
    getManipulatorLayer(): Layer;
    /**
     * Return widgets tool
     */
    getWidgetTools(): AbstractCompositeTool;
    /**
     * Remove invalidate handler
     * @param handler handler to be notified about invalidation
     */
    removeStateChangedHandler(handler: Function): void;
    /**
     */
    loadTemplate(): void;
    /**
     * Get widget options
     * @param getDataOptions optional parameter to specify addtional request to get colormap
     */
    getData(getDataOptions?: object): {pipeline: {version: string; interpolation: {type: string}; normalization: {type: NormalizationType; limits: Range; scale: number}; plot: {type: string; clippingFactor: string; decimationSpacing: string}; colors: {colorMap: string | SeismicColors}; clippingmode: ClippingMode}; scale: {tracePerInch: number; inchesPerSecond: number; feetPerInch: number; unit: string}} | object;
    /**
     * Sets options and/or data
     * @param options options
     * @param options.pipeline pipeline options
     * @param options.pipeline.version version
     * @param options.pipeline.interpolation interpolation options
     * @param options.pipeline.interpolation.type type of interpolation
     * @param options.pipeline.normalization normalization options
     * @param options.pipeline.normalization.type normalization type
     * @param options.pipeline.normalization.limits normalization limits
     * @param options.pipeline.normalization.scale normalization params
     * @param options.pipeline.plot plot options
     * @param options.pipeline.plot.type plot type
     * @param options.pipeline.plot.clippingFactor factor used while clipping
     * @param options.pipeline.plot.decimationSpacing decimation spacing
     * @param options.pipeline.colors color options
     * @param options.pipeline.colors.colorMap color map
     * @param options.pipeline.clippingmode clipping mode
     * @param options.scale scale options
     * @param options.scale.deviceunit physical device unit
     * @param options.scale.sampleunit sample unit, sample unit from pipeline will be used if not specified
     * @param options.scale.tracescale in traces per device unit (e.g traces per inch)
     * @param options.scale.samplescale in z unit per device unit if depth data (e.g feet per inch), or in device unit per z unit (e.g inches per second)
     */
    setData(options: object | { pipeline?: object | { version?: string; interpolation?: object | { type?: string; } ; normalization?: object | { type?: NormalizationType; limits?: Range; scale?: number; } ; plot?: object | { type?: string; clippingFactor?: string; decimationSpacing?: string; } ; colors?: object | { colorMap?: string | SeismicColors; } ; clippingmode?: ClippingMode; } ; scale?: object | { deviceunit?: AbstractUnit | string; sampleunit?: AbstractUnit | string; tracescale?: number; samplescale?: number; } ; } ): this;
    /**
     * Return the node at the specific annotation
     * @param location position to return the node for
     */
    getAnnotation(location: AnnotationLocation): Group;
    /**
     * apply size (width or height) to annotation (convenience method)
     * @example
     * ```javascript
     * widget.setAnnotationSize(
     * {
     *   'west' : 50,
     *   'east' : '10%'
     * });
     * ```
     * @param annotationSize JSON to hold (width or height) of the annotation
     * @param annotationSize.east JSON to hold east annotation size
     * @param annotationSize.south JSON to hold south annotation size
     * @param annotationSize.west JSON to hold west annotation size
     * @param annotationSize.north JSON to hold north annotation size
     */
    setAnnotationSize(annotationSize?: object | { east?: string | number; south?: string | number; west?: string | number; north?: string | number; } ): this;
    /**
     * Sets all the properties pertaining to this object
     * @example
     * ```javascript
     * // change size of axes and colorbar
     * import {ColorBarLocation} from '@int/geotoolkit/controls/shapes/ColorBarLocation';
     * import {Direction} from '@int/geotoolkit/layout/VerticalBoxLayout';
     * widget.setOptions({
     *       'colorbar': {
     *           'location': ColorBarLocation.West,
     *           'axis': {
     *               'size': 50
     *           },
     *           'title': {
     *               'size': 50
     *           },
     *           'colorbox': {
     *               'size': 20
     *           }
     *       },
     *       'axes': {
     *          'headers': {
     *              'location': ColorBarLocation.North,
     *              'direction': Direction.TopToBottom,
     *              'size': 30,
     *          },
     *          'samples': {
     *              'size': 50
     *           }
     *       }
     *   });
     * ```
     * @param properties options
     * @param properties.layouttype type of layout 'default' or 'inside'
     * @param properties.title defines title options of widget
     * @param properties.title.text defines title of widget
     * @param properties.title.visible defines title visibility
     * @param properties.title.textstyle text style
     * @param properties.title.size size of the title in pixels
     * @param properties.title.alignment alignment
     * @param properties.title.location defines title location
     * @param properties.title.cssclass CSS style of the title
     * @param properties.colorbar json defining color bar
     * @param properties.colorbar.margin defines colorbar margin
     * @param properties.colorbar.visible defines visibility of colorbar
     * @param properties.colorbar.location defines location of colorbar
     * @param properties.colorbar.linestyle line style
     * @param properties.colorbar.title color bar title
     * @param properties.colorbar.title.size title area desired size
     * @param properties.colorbar.title.visible title visibility
     * @param properties.colorbar.title.text title text
     * @param properties.colorbar.title.textstyle title textstyle
     * @param properties.colorbar.axis colorbar axis
     * @param properties.colorbar.axis.size axis area desired size
     * @param properties.colorbar.axis.visible axis visibility
     * @param properties.colorbar.axis.autolabelrotation axis auto label rotation flag
     * @param properties.colorbar.colorbox color box attributes
     * @param properties.colorbar.colorbox.size colorbox area desired size
     * @param properties.colorbar.colorbox.linestyle colorbox outline rectangle linestyle
     * @param properties.colorbar.namedcolors named colors options
     * @param properties.colorbar.namedcolors.size named colors desired size
     * @param properties.colorbar.maxheight maximun height of color bar. by default it is unlimited
     * @param properties.colorbar.pipeline seismic pipeline to properties for colorbar if it is null then default pipeline is used
     * @param properties.axes specify set of axes
     * @param properties.axes.samples specify properties of vertical axis
     * @param properties.axes.samples.visible defines visibility of sample axis
     * @param properties.axes.samples.cssclass defines cssclass of samples axis
     * @param properties.axes.samples.location defines location of sample axis
     * @param properties.axes.samples.instance defines instance of sample axis
     * @param properties.axes.samples.size defines size in pixels of samples axis
     * @param properties.axes.samples.title defines title options of sample axis
     * @param properties.axes.samples.title.text defines title of sample axis
     * @param properties.axes.samples.title.visible defines title visibility of sample axis
     * @param properties.axes.samples.title.textstyle defines title text style of sample axis
     * @param properties.axes.samples.ticks objects which defines ticks options of the axis. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setOptions} for details
     * @param properties.axes.headers seismic headers axes options
     * @param properties.axes.headers.fields array of trace headers axes, should contains JSON object with 'name', 'visible' and 'minimumSpan' properties
     * @param properties.axes.headers.options default options for all axes
     * @param properties.axes.headers.options.minimumSpan minimum span for header tick generator
     * @param properties.axes.headers.options.location default axes location, can be 'north' or 'south'
     * @param properties.axes.headers.options.direction default axes direction, can be 'toptobottom' or 'bottomtotop'
     * @param properties.axes.headers.options.size default axis size
     * @param properties.scroll specify scroll bar properties
     * @param properties.scroll.horizontal specify horizontal scroll bar properties
     * @param properties.scroll.horizontal.visible specify horizontal scroll bar visibility
     * @param properties.scroll.horizontal.cssclass specify horizontal scroll bar cssclass name
     * @param properties.scroll.vertical specify vertical scroll bar properties
     * @param properties.scroll.vertical.visible specify vertical scroll bar visibility
     * @param properties.scroll.vertical.cssclass specify vertical scroll bar cssclass name
     * @param properties.annotationssizes JSON to hold (width or height) of the annotation
     * @param properties.annotationssizes.east JSON to hold east annotation size
     * @param properties.annotationssizes.south JSON to hold south annotation size
     * @param properties.annotationssizes.west JSON to hold west annotation size
     * @param properties.annotationssizes.north JSON to hold north annotation size
     * @param properties.autoseismiclimits sets model limits of the center group based on the pipeline limits. If limits sets to false
     * @param properties.tools tools options. See {@link @int/geotoolkit/seismic/widgets/SeismicViewWidget.SeismicViewWidget#setToolsOptions} for details
     * @param properties.scale scale options. See {@link @int/geotoolkit/seismic/widgets/SeismicViewWidget.SeismicViewWidget#setScaleOptions} for details}
     * @param properties.freezeupdate freeze updating widget until new seismic data is loaded and rendered for visible area
     * @param properties.orientation seismic trace orientation
     * @param properties.pipeline seismic pipeline
     * then it is necessary to set up manually model limits for model
     */
    setProperties(properties?: object | { layouttype?: string; title?: object | { text?: string; visible?: boolean; textstyle?: TextStyle | any; size?: number; alignment?: AnchorType; location?: AnnotationLocation; cssclass?: string; } ; colorbar?: object | { margin?: string | number | any | SpaceStyle; visible?: boolean; location?: ColorBarLocation; linestyle?: LineStyle | any; title?: object | { size?: number; visible?: boolean; text?: string; textstyle?: TextStyle | any; } ; axis?: object | { size?: number; visible?: boolean; autolabelrotation?: boolean; } ; colorbox?: object | { size?: number; linestyle?: LineStyle | any; } ; namedcolors?: object | { size?: number; } ; maxheight?: number; pipeline?: SeismicPipeline; } ; axes?: object | { samples?: object | { visible?: boolean; cssclass?: string; location?: AnnotationLocation; instance?: Axis; size?: number; title?: object | { text?: string; visible?: boolean; textstyle?: TextStyle | any; } ; ticks?: any; } ; headers?: object | { fields?: any[]; options?: object | { minimumSpan?: number; location?: string; direction?: Direction; size?: number; } ; } ; } ; scroll?: object | { horizontal?: object | { visible?: boolean; cssclass?: string; } ; vertical?: object | { visible?: boolean; cssclass?: string; } ; } ; annotationssizes?: object | { east?: any; south?: any; west?: any; north?: any; } ; autoseismiclimits?: boolean; tools?: any; scale?: any; freezeupdate?: boolean; orientation?: Orientation; pipeline?: SeismicPipeline; } ): this;
    /**
     * Returns all the properties pertaining to this object
     */
    getProperties(): {title: {text: string; visible: boolean; textstyle: TextStyle; size: number; alignment: AnchorType; location: AnnotationLocation; cssclass: string}; colorbar: {visible: boolean; pipeline: SeismicPipeline}; axes: {samples: {visible: boolean; cssclass: string; location: AnnotationLocation; instance: Axis; size: number; title: {text: string; visible: boolean; textstyle: TextStyle}; ticks: any}; headers: {fields: any[]; options: {minimumSpan: number; location: string; direction: Direction; size: number}}}; scroll: {horizontal: {visible: boolean; cssclass: string}; vertical: {visible: boolean; cssclass: string}}; annotationssizes: {east: any; south: any; west: any; north: any}; autoseismiclimits: boolean; scale: any; freezeupdate: boolean; pipeline: SeismicPipeline} | any;
    /**
     * Returns exportable element
     * @param options export options
     */
    getExportElement(options?: any): AbstractDocumentElement;
    /**
     * Used to prepare object before exporting
     * @param options export options
     */
    beginExport(options?: any): this;
    /**
     * Used to restore object's state after exporting
     * @param options export options
     */
    endExport(options?: any): this;
    /**
     * Exports the widget content as a PDF file, user has option to select the scale of track in pdf.
     * @param options option to specify paper parameters and header and footer
     * @param options.header an optional PDF header
     * @param options.footer an optional PDF footer
     * @param options.documentheader an optional document PDF header
     * @param options.documentfooter an optional document PDF footer
     * @param options.output define optional output filename
     * @param options.save flag to save the pdf directly to file or open dialog
     * @param options.printsettings define optional paper and export parameters
     * @param options.printsettings.paperformat define optional paper paper format
     * @param options.printsettings.top define optional top margin
     * @param options.printsettings.bottom define optional bottom margin
     * @param options.printsettings.left define optional left margin
     * @param options.printsettings.right define optional top margin
     * @param options.printsettings.orientation define optional paper orientation
     * @param options.printsettings.scaling define optional scaling mode. Specify ( 'scaling': geotoolkit.scene.exports.ScalingOptions.FitWidth,) to fit all tracks in your page width.
     * @param options.printsettings.keepaspectratio keep aspect ratio
     * @param options.printsettings.continuous continuous printing
     * @param options.limits export depth or time limits
     * @param options.limits.start start limit by default visible limits
     * @param options.limits.end end limit by default visible limits
     * @param options.scale export scale from model index unit to pixels by default as is
     * @param options.deviceunit define how many depth units in one device unit.
     * @param options.imagescalefactor options to specify the image scale factor, right now 8 is maximum, Math.floor(600 / 72)
     * @param options.imagecompression options to specify the image compression
     * @param options.imagecompression.mode image compression method used to exporting pdf.
     * @param options.imagecompression.quality quality range from 0 to 1 that will express the jpeg image compression quality, available for jpeg mode only.
     * @param options.imagecompression.speed speed referring to the png compression speed, available  for png mode only.
     * @param options.streamcompression enable or disable pdf output compression
     * @param options.pdfstream optional user-customized Stream object
     * @param options.embededfonts array of embedded fonts
     * @param options.horizonpickervisible true if horizon picker need to be exported to pdf
     */
    exportToPdf(options?: object | { header?: HeaderComponent; footer?: FooterComponent; documentheader?: HeaderComponent; documentfooter?: FooterComponent; output?: string; save?: boolean; printsettings?: object | { paperformat?: any; top?: number; bottom?: number; left?: number; right?: number; orientation?: string; scaling?: string; keepaspectratio?: boolean; continuous?: boolean; } ; limits?: object | { start?: number; end?: number; } ; scale?: number | null; deviceunit?: string; imagescalefactor?: number; imagecompression?: object | { mode?: ImageCompression; quality?: number; speed?: SpeedCompression; } ; streamcompression?: boolean; pdfstream?: IWritable; embededfonts?: EmbededFont[]; horizonpickervisible?: boolean; } ): Promise<IWritable>;
    /**
     * Sets function
     * @param strategy function should returns geotoolkit.scene.shapes.Shape in this.getModel().getModelLimits() bounds
     */
    setNoDataStrategy(strategy: Function): this;
    /**
     * Sets collect performance information mode enabled
     * @param collectPerformanceInfoEnabled true for collection performance information mode enabled
     */
    setCollectPerformanceInformation(collectPerformanceInfoEnabled: boolean): this;
    /**
     * Gets collect performance information mode enabled
     */
    getCollectPerformanceInformation(): boolean;
    /**
     * Occurs when the new pipeline is set.
     * <p>If options.freezeupdate is set then it
     * will be called after loading tiles for visible area
     * </p>
     * @param oldPipeline old seismic pipeline
     * @param pipeline new seismic pipeline
     */
    protected onPipelineSet(oldPipeline: SeismicPipeline | null, pipeline: SeismicPipeline | null): void;
}
/**
 * Enum of seismic widget manipulator types
 */
export enum ManipulatorType {
    /**
     * Panning tool
     */
    Panning = 0,
    /**
     * RubberBand tool
     */
    RubberBand = 1,
    /**
     * Magnifier tool
     */
    Magnifier = 2,
    /**
     * Picking tool
     */
    Pick = 3
}
