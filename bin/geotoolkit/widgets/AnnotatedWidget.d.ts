import {BaseWidget} from './BaseWidget';
import {IExportable} from '../scene/exports/IExportable';
import {Group} from '../scene/Group';
import {LineStyle} from '../attributes/LineStyle';
import {RgbaColor} from '../util/RgbaColor';
import {Node} from '../scene/Node';
import {Rect} from '../util/Rect';
import {Transformation} from '../util/Transformation';
import {AnnotationLocation} from '../layout/AnnotationLocation';
import {TextStyle} from '../attributes/TextStyle';
import {Axis} from '../axis/Axis';
import {Orientation} from '../util/Orientation';
import {ScaleScrollStrategy} from '../scene/ScaleScrollStrategy';
import {Layer} from '../scene/Layer';
import {HeaderComponent} from '../scene/exports/HeaderComponent';
import {FooterComponent} from '../scene/exports/FooterComponent';
import {AbstractPaperFormat} from '../scene/exports/AbstractPaperFormat';
import {ImageCompression} from '../pdf/ImageCompression';
import {SpeedCompression} from '../pdf/SpeedCompression';
import {EmbededFont} from '../pdf/PdfExport';
import {IWritable} from '../util/stream/IWritable';
import {AbstractDocumentElement} from '../scene/exports/AbstractDocumentElement';
import {ColorBar} from '../controls/shapes/ColorBar';

/**
 * The AnnotatedWidget widget extends the BaseWidget using an AnnotatedNode. It has a center model {@link @int/geotoolkit/scene/Group.Group} and a set of eight annotations on each side to display axes, titles, or legends.
 * It has settings to specify sizes of the annotations and create axis. It also provides scrollbars and capabilities to zoom for the center element. <br>
 * A connect function is used to synchronize the object with a model. It propagates limits and scroll position, so while scrolling the connect function synchronizes scale coefficients.
 * <p>
 * The main way to configure and customize the widget is to use the setOptions() function that provides a comprehensible way of changing the default look and feel of the widget.<br>
 * The constructor calls the functions geotoolkit.widgets.AnnotatedWidget.prototype.initializeLayout() and geotoolkit.widgets.AnnotatedWidget.prototype.initializeTools().<br>
 * See {@link @int/geotoolkit/scene/AnnotatedNode.AnnotatedNode} for more details on the annotation layout and features.
 * </p>
 * <p> It also includes some default tools:
 * <ul>
 * <li> cross-hair {@link @int/geotoolkit/controls/tools/CrossHair.CrossHair} </li>
 * <li> panning {@link @int/geotoolkit/controls/tools/Panning.Panning} </li>
 * <li> zoom {@link @int/geotoolkit/controls/tools/Zoom.Zoom} </li>
 * <li> pick {@link @int/geotoolkit/controls/tools/Selection.Selection} </li>
 * <li> rubberband {@link @int/geotoolkit/controls/tools/RubberBand.RubberBand} </li>
 * <li> horizontalscroll {@link @int/geotoolkit/controls/tools/scroll/HorizontalScroll.HorizontalScroll} </li>
 * <li> verticalscroll {@link @int/geotoolkit/controls/tools/scroll/VerticalScroll.VerticalScroll}</li>
 * </ul>
 * The widget also provides builtin export to PDF, please refer to the example below<br>
 * </p>
 * @example
 * ```javascript
 * import {AnnotatedWidget} from '@int/geotoolkit/widgets/AnnotatedWidget';
 * import {AnnotationLocation} from '@int/geotoolkit/layout/AnnotationLocation';
 * import {Axis} from '@int/geotoolkit/axis/Axis';
 * import {TickPosition, LabelPosition} from '@int/geotoolkit/axis/TickInfo';
 * import {Orientation} from '@int/geotoolkit/util/Orientation';
 * import {AnchorType} from '@int/geotoolkit/util/AnchorType';
 * import {AdaptiveTickGenerator} from '@int/geotoolkit/axis/AdaptiveTickGenerator';
 * new AnnotatedWidget({
 *     'model': model, // instance of @int/geotoolkit/scene/Group
 *     'annotationssizes': {
 *         'north': 5, 'south': 60, 'east': 12, 'west': 80
 *     },
 *     'north': [],
 *     'south': [new Axis({
 *         'tickposition': TickPosition.Top,
 *         'orientation': Orientation.Horizontal,
 *         'labelposition': LabelPosition.Top,
 *         'title': {
 *             'text': 'Day',
 *             'visible': true,
 *             'textstyle': {
 *                 'color': '#757575'
 *             },
 *             'alignment': AnchorType.Center
 *         },
 *         'tickgenerator': new AdaptiveTickGenerator()
 *     })],
 *     'west': [new Axis({
 *         'tickposition': TickPosition.Right,
 *         'labelposition': LabelPosition.Right,
 *         'orientation': Orientation.Vertical,
 *         'title': {
 *             'text': 'Volume (gal)',
 *             'visible': true,
 *             'textstyle': {
 *                 'color': '#757575'
 *             },
 *             'alignment': AnchorType.Center
 *         },
 *         'tickgenerator': new AdaptiveTickGenerator()
 *     })],
 *     'east': [],
 *     'tools': {
 *         'horizontalscroll': {
 *             'visible': false
 *         },
 *         'verticalscroll': {
 *             'visible': false
 *         }
 *     }
 * });
 * ```
 * @example
 * ```javascript
 * // Exporting to a PDF with virtual model limits. This will print the canvas in its entirety, regardless of the zoom state. Please refer to the Export tutorials for more export options.
 * import {ScalingOptions} from '@int/geotoolkit/scene/exports/ScalingOptions'
 * ...
 * const pdfOptions = {
 *          'printsettings': {'scaling': ScalingOptions.FitWidth},
 *          'modellimits': widget.getModel().getModelLimits()
 * };
 * widget.exportToPdf(pdfOptions);
 * ```
 * @example
 * ```javascript
 * // AnnotatedWidget has an optional border and accepts color or line style json
 * import {Group} from '@int/geotoolkit/scene/Group';
 * new AnnotatedWidget({
 *   'model': new Group(),
 *   'border': {
 *      'color': 'red'
 *   }
 * });
 * ```
 * @example
 * ```javascript
 * // This example shows how to attach a listener to the axis, and listen to hover events pertaining to the axis object. This can help if you want to zoom only x-axis or only y-axis
 * import {PointerMode} from '@int/geotoolkit/controls/tools/PointerMode';
 * const widget = new AnnotatedWidget({
 *      ...
 *      'south': [axisSouth],
 *      ...
 * });
 * axisSouth.on(PointerMode.Hover, (type, node, args) => {
 *      // fired when mouse hovers over axisSouth
 * });
 * ```
 */
export class AnnotatedWidget extends BaseWidget implements IExportable {
    /**
     * The AnnotatedWidget widget extends the BaseWidget using an AnnotatedNode. It has a center model {@link @int/geotoolkit/scene/Group.Group} and a set of eight annotations on each side to display axes, titles, or legends.
     * It has settings to specify sizes of the annotations and create axis. It also provides scrollbars and capabilities to zoom for the center element. <br>
     * A connect function is used to synchronize the object with a model. It propagates limits and scroll position, so while scrolling the connect function synchronizes scale coefficients.
     * <p>
     * The main way to configure and customize the widget is to use the setOptions() function that provides a comprehensible way of changing the default look and feel of the widget.<br>
     * The constructor calls the functions geotoolkit.widgets.AnnotatedWidget.prototype.initializeLayout() and geotoolkit.widgets.AnnotatedWidget.prototype.initializeTools().<br>
     * See {@link @int/geotoolkit/scene/AnnotatedNode.AnnotatedNode} for more details on the annotation layout and features.
     * </p>
     * <p> It also includes some default tools:
     * <ul>
     * <li> cross-hair {@link @int/geotoolkit/controls/tools/CrossHair.CrossHair} </li>
     * <li> panning {@link @int/geotoolkit/controls/tools/Panning.Panning} </li>
     * <li> zoom {@link @int/geotoolkit/controls/tools/Zoom.Zoom} </li>
     * <li> pick {@link @int/geotoolkit/controls/tools/Selection.Selection} </li>
     * <li> rubberband {@link @int/geotoolkit/controls/tools/RubberBand.RubberBand} </li>
     * <li> horizontalscroll {@link @int/geotoolkit/controls/tools/scroll/HorizontalScroll.HorizontalScroll} </li>
     * <li> verticalscroll {@link @int/geotoolkit/controls/tools/scroll/VerticalScroll.VerticalScroll}</li>
     * </ul>
     * The widget also provides builtin export to PDF, please refer to the example below<br>
     * </p>
     * @param options The widget options see initializeLayout() for details
     * @param options.model model to represent a center area of the widget
     * @param options.north JSON to hold north annotation options
     * @param options.north.size north annotation desired size (width for horizontal; height for vertical)
     * @param options.north.title north annotation title options (see {@link @int/geotoolkit/scene/shapes/Text.Text}'s "setProperties" description for details)
     * @param options.north.axis north annotation axis options (see {@link @int/geotoolkit/axis/Axis.Axis}'s "setProperties" description for details)
     * @param options.east JSON to hold east annotation options
     * @param options.east.size east annotation desired size (width for horizontal; height for vertical)
     * @param options.east.title east annotation title options
     * @param options.east.axis east annotation axis options
     * @param options.south JSON to hold south annotation options
     * @param options.south.size south annotation desired size (width for horizontal; height for vertical)
     * @param options.south.title south annotation title options
     * @param options.south.axis south annotation axis options
     * @param options.west JSON to hold west annotation options
     * @param options.west.size west annotation desired size (width for horizontal; height for vertical)
     * @param options.west.title west annotation title options
     * @param options.west.axis west annotation axis options
     * @param options.annotationitemswrap true if you want to wrap annotation items in constructor with a new group with zero to one limits
     * @param options.annotationssizes JSON to hold (width or height) of the annotation {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget.setAnnotationSize}
     * @param options.annotationssizes.east preferred width of east annotation size
     * @param options.annotationssizes.south preferred height of south annotation size
     * @param options.annotationssizes.west preferred width of west annotation size
     * @param options.annotationssizes.north preferred height of north annotation size
     * @param options.tools see {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget.setToolsOptions}
     * @param options.border defines properties for widget model area outer border {@link @int/geotoolkit/attributes/LineStyle.LineStyle}
     */
    constructor(options?: object | { model?: Group; north?: object | { size?: number | string; title?: any; axis?: any; } ; east?: object | { size?: number | string; title?: any; axis?: any; } ; south?: object | { size?: number | string; title?: any; axis?: any; } ; west?: object | { size?: number | string; title?: any; axis?: any; } ; annotationitemswrap?: boolean; annotationssizes?: object | { east?: number | string; south?: number | string; west?: number | string; north?: number | string; } ; tools?: any; border?: LineStyle | object | string; } );
    /**
     * @param settings define widgets settings
     * @param settings.model model or group
     * @param settings.border defines properties for widget outer border
     * @param settings.border.color color of border border
     * @param settings.annotationssizes defines annotations sizes
     * @param settings.annotationssizes.north JSON to hold (width or height) of the annotation
     * @param settings.annotationssizes.south JSON to hold east annotation size
     * @param settings.annotationssizes.west JSON to hold west annotation size
     * @param settings.annotationssizes.east JSON to hold east annotation size
     * @param settings.north the Array of geotoolkit.scene.Node to display on top of the model
     * @param settings.north.title north annotation title options (see {@link @int/geotoolkit/scene/shapes/Text.Text}'s "setProperties" description for details)
     * @param settings.north.axis north annotation axis options (see {@link @int/geotoolkit/axis/Axis.Axis}'s "setProperties" description for details)
     * @param settings.south the Array of geotoolkit.scene.Node to display on top of the model
     * @param settings.south.title south annotation title options (see {@link @int/geotoolkit/scene/shapes/Text.Text}'s "setProperties" description for details)
     * @param settings.south.axis south annotation axis options (see {@link @int/geotoolkit/axis/Axis.Axis}'s "setProperties" description for details)
     * @param settings.west the Array of geotoolkit.scene.Node to display on top of the model
     * @param settings.west.title west annotation title options (see {@link @int/geotoolkit/scene/shapes/Text.Text}'s "setProperties" description for details)
     * @param settings.west.axis west annotation axis options (see {@link @int/geotoolkit/axis/Axis.Axis}'s "setProperties" description for details)
     * @param settings.east the Array of geotoolkit.scene.Node to display on top of the model
     * @param settings.east.title east annotation title options (see {@link @int/geotoolkit/scene/shapes/Text.Text}'s "setProperties" description for details)
     * @param settings.east.axis east annotation axis options (see {@link @int/geotoolkit/axis/Axis.Axis}'s "setProperties" description for details)
     * @param settings.applicationId id object id
     */
    initializeLayout(settings: object | { model?: Group; border?: object | { color?: string | RgbaColor; } ; annotationssizes?: object | { north?: string | number; south?: string | number; west?: string | number; east?: string | number; } ; north?: Node[] | Node | object | { title?: object; axis?: object; } ; south?: Node[] | Node | object | { title?: object; axis?: object; } ; west?: Node[] | Node | object | { title?: object; axis?: object; } ; east?: Node[] | Node | object | { title?: object; axis?: object; } ; applicationId?: number | string; } ): Group;
    /**
     * Sets visible model limits
     * @remarks fires {@link @int/geotoolkit/widgets/AnnotatedWidget~Events~ModelVisibleLimitsChanged}
     * @param limits the visible model limits
     */
    zoomToRect(limits?: Rect): void;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bound of the node in the parent coordinates
     */
    setBounds(bounds: Rect | object): this;
    /**
     * Refresh layout of inner components of the widget
     */
    refreshLayout(): this;
    /**
     * Attempts to set local transformation for the model.
     * NOTE: the local transformation set may not be equal
     * to transformation passed - it depends on current
     * ScaleScrollStrategy set on the node.
     * @param transformation transformation to set
     */
    setModelTransformation(transformation: Transformation): this;
    /**
     * function call in the constructor to initialize tools in the widget<br>
     * This widget contains by default :<br>
     * - geotoolkit.controls.tools.CrossHair tool <br>
     * - geotoolkit.controls.tools.RubberBand tool <br>
     * - geotoolkit.controls.tools.Panning tool <br>
     * - geotoolkit.controls.tools.scroll.HorizontalScroll <br>
     * - geotoolkit.controls.tools.scroll.VerticalScroll <br>
     * @param options tools options
     */
    protected initializeTools(options?: any): this;
    /**
     * Attempts to set model's visible limits to specified limits.
     * NOTE: the limits set may not be equal
     * to the limit passed - it depends on current
     * ScaleScrollStrategy set on the node.
     * @param newVisibleModelLimits limits to set
     */
    setVisibleModelLimits(newVisibleModelLimits: Rect): this;
    /**
     * Translates widget's contents.
     * @remarks fires {@link @int/geotoolkit/widgets/AnnotatedWidget~Events~ModelVisibleLimitsChanged}
     * @param tx x translation
     * @param ty y translation
     */
    translateModel(tx: number, ty: number): this;
    /**
     * Scale node's contents.
     * @remarks fires {@link @int/geotoolkit/widgets/AnnotatedWidget~Events~ModelVisibleLimitsChanged}
     * @param xx x scale factor
     * @param yy y scale factor
     * @param posX x position to scale from (in pxl)
     * @param posY y position to scale from (in pxl)
     */
    scaleModel(xx: number, yy: number, posX?: number, posY?: number): this;
    /**
     * Set the model limits of center model
     * @example
     * ```javascript
     * //artificially expand the widget model limits
     * import {Rect} from '@int/geotoolkit/util/Rect';
     * const newLimits = new Rect(0,0,10,10);
     * widget.setCenterModelLimits(newLimits);
     * ```
     * @remarks fires {@link @int/geotoolkit/widgets/AnnotatedWidget~Events~ModelVisibleLimitsChanged}
     * @param modellimits model limits
     */
    setCenterModelLimits(modellimits: Rect): this;
    /**
     * Return model limits
     */
    getCenterModelLimits(): Rect | any;
    /**
     * Returns visible model limits of the center model
     * @param ignoreModelLimits flag defines whether to ignore model limits or not. By default this option is false and
     * visible limits will be intersected with center model limits
     */
    getVisibleCenterModelLimits(ignoreModelLimits?: boolean): Rect | any;
    /**
     * Attempts to set model's visible limits to specified limits.
     * NOTE: the limits set may not be equal
     * to the limit passed - it depends on current
     * ScaleScrollStrategy set on the node.
     * @remarks fires {@link @int/geotoolkit/widgets/AnnotatedWidget~Events~ModelVisibleLimitsChanged}
     * @param newVisibleModelLimits limits to set
     */
    setVisibleCenterModelLimits(newVisibleModelLimits: Rect): this;
    /**
     */
    protected synchronizeViewLimits(): this;
    /**
     * apply size (width or height) to annotation (convenience method)
     * @example
     * ```javascript
     * {
     *   west : 50,
     *   east : '10%',
     *   south: 'auto'
     * }
     * ```
     * @param annotationSize JSON to hold (width or height) of the annotation
     * @param annotationSize.east preferred width of east annotation size
     * @param annotationSize.south preferred height of south annotation size
     * @param annotationSize.west preferred width of west annotation size
     * @param annotationSize.north preferred height of north annotation size
     */
    setAnnotationSize(annotationSize?: object | { east?: object | string | number; south?: object | string | number; west?: object | string | number; north?: object | string | number; } ): this;
    /**
     * Return size of all annotations
     */
    getAnnotationSize(): {west: number; east: number; north: number; south: number} | object;
    /**
     * Sets annotations' options. currently setAnnotationOptions can only modify existing annotation, while the constructor for the widget can create new ones.
     * @param options JSON to hold annotations' options
     * @param options.north JSON to hold north annotation options
     * @param options.north.size north annotation desired size (width for horizontal; height for vertical)
     * @param options.north.title north annotation title options (see {@link @int/geotoolkit/scene/shapes/Text.Text}'s "setProperties" description for details)
     * @param options.north.axis north annotation axis options (see {@link @int/geotoolkit/axis/Axis.Axis}'s "setProperties" description for details)
     * @param options.east JSON to hold east annotation options
     * @param options.south JSON to hold south annotation options
     * @param options.west JSON to hold west annotation options
     */
    setAnnotationsOptions(options: object | { north?: object | { size?: number | string; title?: object; axis?: object; } ; east?: object; south?: object; west?: object; } ): this;
    /**
     * Add title to annotation
     * @param location of the title
     * @param options title options
     * @param options.text text to display in title
     * @param options.textstyle textstyle of title
     */
    addTitle(location: AnnotationLocation, options: object | { text?: string; textstyle?: object | TextStyle; } ): void;
    /**
     * set options for title
     * @param location of the title
     * @param options title options
     * @param options.text text to display in title
     * @param options.textstyle textstyle of title
     */
    setTitleOptions(location: AnnotationLocation, options: object | { text?: string; textstyle?: object | TextStyle; } ): this;
    /**
     * remove title in the location
     * @param location of the title
     */
    removeTitle(location: AnnotationLocation): void;
    /**
     * add new axis and connect with object
     * @param axis new axis instance or options
     * @param location location of annotation for adding new axis
     * @param connectedObject connected object of axis*
     */
    addAxis(axis: Axis | object, location: AnnotationLocation, connectedObject?: Node): {axis: Axis; group: Group} | object;
    /**
     * remove axis
     * @param axis axis to be removed
     */
    removeAxis(axis: Axis): void;
    /**
     * Synchronizes object with a model
     * @param object object to be synchronized
     * @param model source model
     * @param orientation horizontal or vertical
     * @param autoSize true if object and model share the same device size in the orientation, true by default if not specified
     */
    connect(object: Group | Axis, model: Group, orientation?: Orientation, autoSize?: boolean): this;
    /**
     * Disconnect an object from its source model
     * @param object object to disconnect
     */
    disconnect(object: Group | Axis): this;
    /**
     * zoom in, with default factor = 5/4
     */
    zoomIn(): this;
    /**
     * zoom out, with default factor = 5/4
     */
    zoomOut(): this;
    /**
     * get model node
     */
    getModel(): Group;
    /**
     * fit bounds to model limits
     * @remarks fires {@link @int/geotoolkit/widgets/AnnotatedWidget~Events~ModelVisibleLimitsChanged}
     */
    fitToBounds(): this;
    /**
     * attempts to translate the model using the specific x, y translation
     * @remarks fires {@link @int/geotoolkit/widgets/AnnotatedWidget~Events~ModelVisibleLimitsChanged}
     * @param dx relative horizontal change
     * @param dy relative vertical change
     */
    pan(dx: number, dy: number): this;
    /**
     * set the scale scroll strategy to apply to the widget
     * @param delegate scaleScrollStrategy to set
     */
    setScaleScrollStrategy(delegate: ScaleScrollStrategy | Function): this;
    /**
     * Gets ScaleScrollStrategy ("undefined" by default)
     */
    getScaleScrollStrategy(): ScaleScrollStrategy | Function;
    /**
     * return the node at the specific annotation
     * @param location position to return the node for
     */
    getAnnotation(location: AnnotationLocation): Group;
    /**
     * return manipulator layer
     */
    getManipulatorLayer(): Layer;
    /**
     * Export a part of the container to PDF
     * <p>This method sets automatically export scale and limits based on input parameters and current model scale and limits</p>
     * @param options option to specify paper parameters and header and footer
     * @param options.header define optional header
     * @param options.footer define optional header
     * @param options.output the name of the file to be created
     * @param options.printsettings define optional paper and export parameters
     * @param options.printsettings.paperformat define optional paper paper format
     * @param options.printsettings.top define optional top margin
     * @param options.printsettings.bottom define optional bottom margin
     * @param options.printsettings.left define optional left margin
     * @param options.printsettings.right define optional top margin
     * @param options.printsettings.orientation define optional paper orientation
     * @param options.printsettings.scaling define optional scaling mode
     * @param options.printsettings.keepaspectratio keep aspect ratio
     * @param options.printsettings.continuous continuous printing
     * @param options.modellimits model limits that should be exported. By default the virtual limits
     * @param options.scale export scale  by default as is
     * @param options.scale.x export scale by x
     * @param options.scale.y export scale by y
     * @param options.imagecompression options to specify the image compression
     * @param options.imagecompression.mode image compression method used to exporting pdf.
     * @param options.imagecompression.quality quality range from 0 to 1 that will express the jpeg image compression quality, available for jpeg mode only.
     * @param options.imagecompression.speed speed referring to the png compression speed, available  for png mode only.
     * @param options.streamcompression enable or disable pdf output compression
     * @param options.save flag to save the stream directly to file or open dialog
     * @param options.embededfonts array of embedded fonts
     * @param options.pdfstream optional user-customized Stream object
     */
    exportToPdf(options?: object | { header?: HeaderComponent; footer?: FooterComponent; output?: string; printsettings?: object | { paperformat?: AbstractPaperFormat | string; top?: number; bottom?: number; left?: number; right?: number; orientation?: string; scaling?: string; keepaspectratio?: boolean; continuous?: boolean; } ; modellimits?: Rect; scale?: object | { x?: number; y?: number; } ; imagecompression?: object | { mode?: ImageCompression; quality?: number; speed?: SpeedCompression; } ; streamcompression?: boolean; save?: boolean; embededfonts?: EmbededFont[]; pdfstream?: IWritable; } ): Promise<IWritable>;
    /**
     * Return export limits
     */
    getExportLimits(): Rect;
    /**
     * Sets export limits
     * @param limits export limits
     */
    setExportLimits(limits: Rect): this;
    /**
     * Gets export scale. By default scale is nto ste and equal to screen scale
     */
    getExportScale(): {x: number; y: number} | object;
    /**
     * Sets export scale. By default scale is nto ste and equal to screen scale
     * @param scale scale
     * @param scale.x scale by x form model to device
     * @param scale.y scale by y form model to device
     */
    setExportScale(scale: object | { x: number; y: number; }  | null): this;
    /**
     * Prepares object before exporting and saving state
     */
    beginExport(): this;
    /**
     * Restores object's state after exporting
     */
    endExport(): void;
    /**
     * Returns exportable element
     * @param options options
     * @param options.documentheader an optional document PDF header
     * @param options.documentfooter an optional document PDF footer
     */
    getExportElement(options?: object | { documentheader?: FooterComponent; documentfooter?: FooterComponent; } ): AbstractDocumentElement;
    /**
     * Gets Tools Options
     */
    getToolsOptions(): {verticalscroll: {type: string; visible: boolean}; horizontalscroll: {type: string; visible: boolean}; panning: {enabled: boolean}; zoom: {enabled: boolean}} | object;
    /**
     * Set Tools Options
     * @example
     * ```javascript
     * //To prevent the selection tool from deselecting the previously selected points, for example  user can do the following:
     * annotatedWidget.setToolsOptions({
     *     'selection': {
     *         'resetselection': false
     *     }
     * });
     * ```
     * @param options JSON which defines tools options
     * @param options.verticalscroll JSON which defines vertical scroll bar
     * @param options.verticalscroll.type vertical scroll bar type
     * @param options.verticalscroll.visible vertical scroll bar visibility
     * @param options.horizontalscroll JSON which defines horizontal scroll bar
     * @param options.horizontalscroll.type horizontal scroll bar type
     * @param options.horizontalscroll.visible horizontal scroll bar visibility
     * @param options.crosshair JSON which defines crosshair cursor. See {geotoolkit.controls.tools.CrossHair.setProperties} for details
     * @param options.panning JSON which defines panning.
     * @param options.panning.enabled is panning enabled
     * @param options.zoom JSON which defines zoom
     * @param options.zoom.enabled is zoom enabled
     * @param options.rubberbandzoom JSON which defines rubber band zoom. See {geotoolkit.controls.tools.RubberBand.setSettings} for details
     * @param options.selection JSON which defines selection. See {geotoolkit.controls.tools.Selection.setSettings} for details
     * @param options.selection.resetselection does the selection resets between two picks
     */
    setToolsOptions(options?: object | { verticalscroll?: object | { type?: string; visible?: boolean; } ; horizontalscroll?: object | { type?: string; visible?: boolean; } ; crosshair?: object; panning?: object | { enabled?: boolean; } ; zoom?: object | { enabled?: boolean; } ; rubberbandzoom?: object; selection?: object | { resetselection?: boolean; } ; } ): this;
    /**
     * Returns Colorbar
     * @deprecated since 4.0
     */
    getColorBar(): ColorBar | any;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {annotationitemswrap: boolean; annotationssizes: {east: number; south: number; west: number; north: number}; tools: any; border: LineStyle} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing properties
     * @param properties.north JSON to hold north annotation options
     * @param properties.north.size north annotation desired size (width for horizontal; height for vertical)
     * @param properties.north.title north annotation title options (see {@link @int/geotoolkit/scene/shapes/Text.Text}'s "setProperties" description for details)
     * @param properties.north.axis north annotation axis options (see {@link @int/geotoolkit/axis/Axis.Axis}'s "setProperties" description for details)
     * @param properties.east JSON to hold east annotation options
     * @param properties.east.size east annotation desired size (width for horizontal; height for vertical)
     * @param properties.east.title east annotation title options
     * @param properties.east.axis east annotation axis options
     * @param properties.south JSON to hold south annotation options
     * @param properties.south.size south annotation desired size (width for horizontal; height for vertical)
     * @param properties.south.title south annotation title options
     * @param properties.south.axis south annotation axis options
     * @param properties.west JSON to hold west annotation options
     * @param properties.west.size west annotation desired size (width for horizontal; height for vertical)
     * @param properties.west.title west annotation title options
     * @param properties.west.axis west annotation axis options
     * @param properties.annotationitemswrap true if you want to wrap annotation items in constructor with a new group with zero to one limits
     * @param properties.annotationssizes JSON to hold (width or height) of the annotation
     * @param properties.annotationssizes.east preferred width of east annotation size
     * @param properties.annotationssizes.south preferred height of south annotation size
     * @param properties.annotationssizes.west preferred width of west annotation size
     * @param properties.annotationssizes.north preferred height of north annotation size
     * @param properties.tools see {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget#setToolsOptions}
     * @param properties.border line style for border
     */
    setProperties(properties?: object | { north?: object | { size?: number | string; title?: any; axis?: any; } ; east?: object | { size?: number | string; title?: any; axis?: any; } ; south?: object | { size?: number | string; title?: any; axis?: any; } ; west?: object | { size?: number | string; title?: any; axis?: any; } ; annotationitemswrap?: boolean; annotationssizes?: object | { east?: number | string; south?: number | string; west?: number | string; north?: number | string; } ; tools?: any; border?: LineStyle | object | string; } ): this;
    /**
     * get options
     * @deprecated since 2020.1 (3.1) Use AnnotatedWidget.prototype.getToolsOptions instead
     * @param getDataOptions how to extract data, by default undefined
     */
    getData(getDataOptions?: object | boolean): object | null;
    /**
     * Sets data
     * @deprecated since 2020.1 (3.1) Use AnnotatedWidget.prototype.setToolsOptions instead
     * @param data data and widget properties
     */
    setData(data: any): this;
    /**
     * Saves tools state
     */
    saveToolsState(): this;
}
/**
 * Annotated Widget Events enumerator
 */
export enum Events {
    /**
     * Event type fired when the models visible limits could have changed
     */
    ModelVisibleLimitsChanged = 'ModelVisibleLimitsChanged'
}
