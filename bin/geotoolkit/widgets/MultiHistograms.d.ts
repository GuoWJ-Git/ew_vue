import {AnnotatedWidget} from './AnnotatedWidget';
import {FillStyle} from '../attributes/FillStyle';
import {Group} from '../scene/Group';
import {Axis} from '../axis/Axis';
import {Histogram} from '../controls/shapes/Histogram';
import {AnnotationLocation} from '../layout/AnnotationLocation';
import {TextStyle} from '../attributes/TextStyle';
import {Text} from '../scene/shapes/Text';
import {Node} from '../scene/Node';
import {DataSource} from '../data/DataSource';
import {DataBinding} from '../data/DataBinding';
import {Rect} from '../util/Rect';

/**
 * The multihistograms widget is a container to wrap multiple histograms into one widget
 * and mange axes, selection and model limits for different histograms.
 * see more details about initialization of  widget in constructor of geotoolkit.widgets.AnnotatedWidget
 * @example
 * ```javascript
 * import {MultiHistograms} from '@int/geotoolkit/widgets/MultiHistograms';
 * import {Rect} from '@int/geotoolkit/util/Rect';
 * import {KnownColors} from '@int/geotoolkit/util/ColorUtil';
 * import {FrequencyType, HistogramMode} from '@int/geotoolkit/controls/shapes/Histogram';
 * function newHistogramShapeOptions (color, binNumber, name) {
 *     return {
 *         'name': name,
 *         'bins': binNumber,
 *         'frequencytype': FrequencyType.Absolute,
 *         'histogrammode': HistogramMode.Linear,
 *         'fillstyle': color,
 *         'linestyle': KnownColors.Gray,
 *         'binspacing': 100,
 *         'unit': 'ft'
 *     };
 * }
 * const widget = new MultiHistograms({
 *     'bounds': new Rect(0, 0, 800, 400),
 *     'viewcache': true,
 *     'annotationssizes': {
 *         'north': 20
 *     },
 *     'tools': {
 *         'verticalscroll': {
 *             'visible': false
 *         },
 *         'horizontalscroll': {
 *             'visible': false
 *         }
 *     },
 *     'autoannotationsize': true
 * });
 * const hist1Options = newHistogramShapeOptions(KnownColors.Blue, 20, 'series 1');
 * const hist2Options = newHistogramShapeOptions(KnownColors.Green, 25, 'series 2');
 * const hist1 = widget.addHistogram(hist1Options)
 *   .setData(datasource1);
 * const hist2 = widget.addHistogram(hist2Options)
 *   .setData(datasource2);
 * ```
 */
export class MultiHistograms extends AnnotatedWidget {
    /**
     * The multihistograms widget is a container to wrap multiple histograms into one widget
     * and mange axes, selection and model limits for different histograms.
     * see more details about initialization of  widget in constructor of geotoolkit.widgets.AnnotatedWidget
     * @param options 
     * @param options.header options for setting header of widget
     * @param options.header.title object to describe the properties for header text
     * @param options.axiswidth default width when adding new vertical axis
     * @param options.axisheight default height when adding new horizontal axis
     * @param options.annotationsgaps options for setting gaps between annotations and center model
     * @param options.annotationsgaps.south desired height for axis in south annotation
     * @param options.annotationsgaps.west desired width for axis in west annotation
     * @param options.annotationsgaps.east desired width for axis in east annotation
     * @param options.autoannotationsize auto modify the size of annotation based on the total size of component in the annotation
     * @param options.tools options for tools setting, see details in setToolsOptions method
     * @param options.tools.axisselection axis selection options
     * @param options.tools.axisselection.enabled flag to enable axis selection
     * @param options.tools.axisselection.highlightstyle fillstyle for background of axis
     * @param options.tools.southscroll south scroll bar options
     * @param options.tools.southscroll.size height for horizontal scroll bar or width for vertical scroll bar
     * @param options.tools.southscroll.visible flag to set visibility of scroll bar
     * @param options.tools.southscroll.options properties for setting scroll bar
     * @param options.viewcache if set veiwcache for the widget
     * @param options.viewcachesize viewcache size
     * @param options.viewcachesize.width set tiled cache size.
     * @param options.viewcachesize.height set tiled cache size.
     */
    constructor(options?: object | { header?: object | { title?: any; } ; axiswidth?: number; axisheight?: number; annotationsgaps?: object | { south?: number; west?: number; east?: number; } ; autoannotationsize?: boolean; tools?: object | { axisselection?: object | { enabled?: boolean; highlightstyle?: FillStyle | string | object; } ; southscroll?: object | { size?: number; visible?: boolean; options?: any; } ; } ; viewcache?: boolean; viewcachesize?: object | { width?: number; height?: number; } ; } );
    /**
     * return underlay layer for add new visual under histograms
     */
    getUnderlayLayer(): Group;
    /**
     * create a new histogram with axes
     * @param options options to set up histogram shape
     * @param axes axes options
     * @param axes.xaxis x axis for histogram, by default add axis with AdaptivetickGenerator, null means not add x axis
     * @param axes.yaxis y axis for histogram, by default add axis with HistogramTickGenerator, null means not add y axis
     * @param id id for identifying histogram and axis
     */
    addHistogram(options: object, axes?: object | { xaxis?: Axis | any; yaxis?: Axis | any; } , id?: string): Histogram;
    /**
     * remove histograms from widget
     * @param shapes array of histograms
     */
    removeHistograms(shapes: Histogram[] | string[] | Histogram | string): this;
    /**
     * set if histograms can be highlighted
     * @param shapes array of histograms
     * @param highlightable if histograms are available for selection
     */
    setHighlightableHistograms(shapes: Histogram[] | string[] | Histogram | string, highlightable: boolean): this;
    /**
     * get highlightable histograms
     */
    getHighlightableHistograms(): Histogram[];
    /**
     * get selected bins in highlightable histograms
     * @param shapes of histograms id or instance
     */
    getHighlightedBins(shapes: Histogram[] | string[] | Histogram | string): number[][];
    /**
     * get all histograms
     * @param returnId instead return histograms instance, return Ids of histograms
     */
    getHistograms(returnId: boolean): Histogram[] | number[];
    /**
     * get all limits groupId
     */
    getGroupsId(): number[];
    /**
     * add title to annotation
     * @param location location of the axis
     * @param options options
     * @param options.text text to display in title
     * @param options.textstyle style
     * @param options.length width or height of title group
     */
    addTitle(location: AnnotationLocation, options: object | { text?: string; textstyle?: object | TextStyle; length?: number; } ): {text: Text; group: Group} | object;
    /**
     * create new axis with options, adding and connect it with object
     * @param location location of annotation for adding new axis
     * @param options options
     * @param options.length width or height of axis component
     * @param options.flip set if flip the axis
     * @param options.accumulative set if the axis serve for showing accumulative value in histogram accumulative mode
     * See geotoolkit.scene.AnnotatedNode.createAxis for other properties' definition.
     * @param connectedObject connected object of axis
     */
    addAxisTo(location: AnnotationLocation, options: object | { length?: number; flip?: boolean; accumulative?: boolean; } , connectedObject?: Node | Histogram | string): void;
    /**
     * internal method, remove axis instance from widget
     * @param axisRef id or reference to identify axis
     */
    internalRemoveAxis(axisRef: Axis | string): this;
    /**
     * refer to axis based on histogram or group and remove the axis from widget
     * @param ref id or reference to identify histogram or group related to the axis
     * @param location location of axis
     */
    removeAxisFrom(ref: Histogram | string | object, location: AnnotationLocation): this | any;
    /**
     */
    dispose(): void;
    /**
     * event handler for bin number updating of histogram
     * @param event event
     * @param src src
     * @param data data
     */
    onBinsUpdated(event: string, src: object, data: object): void;
    /**
     * add histograms to an existing group as new members
     * @param shapes array of histograms or their id
     * @param groupRef id string or object that contain groupid property
     */
    addHistogramsToGroup(shapes: Histogram[] | string[] | Histogram | string, groupRef: object | string): this | any;
    /**
     * remove histograms from all existing limits group
     * @param shapes array of histograms or their id
     */
    removeHistogramsFromAllGroup(shapes: Histogram[] | string[] | Histogram | string): this;
    /**
     * remove histograms from an existing group
     * @param shapes array of histograms or their id
     * @param groupRef id string or object that contain groupid property
     */
    removeHistogramsFromGroup(shapes: Histogram[] | string[] | Histogram | string, groupRef: object | string): this | any;
    /**
     * create group in certain annotation(along certain axis) based on histograms
     * @param shapes array of histograms
     * @param location location of annotation that containing axis for limits group
     * @param axisOptions options to set up new axis. The default value of options would be the options get from the axis of one histogram in the group.
     * For details, see the internalAddAxis method.
     * @param gid group id
     */
    createGroup(shapes: Histogram[] | string[], location: AnnotationLocation, axisOptions?: object, gid?: string | any): {groupid: string} | object;
    /**
     * set properties for widget
     * @param props object properties
     * @param props.header options for setting header of widget
     * @param props.header.title object to describe the properties for header text
     * @param props.axiswidth default width when adding new vertical axis
     * @param props.axisheight default height when adding new horizontal axis
     * @param props.annotationsgaps options for setting gaps between annotations and center model
     * @param props.annotationsgaps.south desired height for axis in south annotation
     * @param props.annotationsgaps.west desired width for axis in west annotation
     * @param props.annotationsgaps.east desired width for axis in east annotation
     * @param props.autoannotationsize auto modify the size of annotation based on the total size of component in the annotation
     * @param props.tools options for tools setting, see details in setToolsOptions method
     * @param props.tools.axisselection axis selection options
     * @param props.tools.axisselection.enabled flag to enable axis selection
     * @param props.tools.axisselection.highlightstyle fillstyle for background of axis
     * @param props.tools.southscroll south scroll bar options
     * @param props.tools.southscroll.size height for horizontal scroll bar or width for vertical scroll bar
     * @param props.tools.southscroll.visible flag to set visibility of scroll bar
     * @param props.tools.southscroll.options properties for setting scroll bar
     * @param props.viewcache if set veiwcache for the widget
     * @param props.viewcachesize viewcache size
     * @param props.viewcachesize.width set tiled cache size.
     * @param props.viewcachesize.height set tiled cache size.
     */
    setProperties(props: object | { header?: object | { title?: any; } ; axiswidth?: number; axisheight?: number; annotationsgaps?: object | { south?: number; west?: number; east?: number; } ; autoannotationsize?: boolean; tools?: object | { axisselection?: object | { enabled?: boolean; highlightstyle?: FillStyle | string | object; } ; southscroll?: object | { size?: number; visible?: boolean; options?: any; } ; } ; viewcache?: boolean; viewcachesize?: object | { width?: number; height?: number; } ; } ): this;
    /**
     * set options for widget
     * @param options options
     * @param options.header options for setting header of widget, see {@link @int/geotoolkit/widgets/MultiHistograms.MultiHistograms#setHeaderOptions}
     * @param options.axiswidth default width when adding new vertical axis
     * @param options.axisheight default height when adding new horizontal axis
     * @param options.annotationsgaps options for setting gaps between annotations and center model, see details in setGaps method
     * @param options.autoannotationsize auto modify the size of annotation based on the total size of component in the annotation
     * @param options.tools options for tools setting, see details in setToolsOptions method
     */
    setOptions(options: object | { header?: object; axiswidth?: number; axisheight?: number; annotationsgaps?: object; autoannotationsize?: boolean; tools?: object; } ): this;
    /**
     * get axis and related group options
     * @param ref shape histogram reference or group reference for identifying the axis
     * @param location location of the axis
     */
    getAxisOptions(ref: Histogram | string | object, location: AnnotationLocation): {length: number; flip: boolean; accumulative: boolean} | object;
    /**
     * set options of axis
     * @param ref shape histogram reference or group reference for identifying the axis
     * @param location location of the axis
     * @param options axis options
     * @param options.tickgenerator tickgenOptions options to configure tickgenerator of axis, see setProperties method of related tickgenerator for details
     * @param options.length width of vertical axis or height of horizontal axis
     * @param options.flip check if flip the axis other params could be seen in the definition of axis setOptions methods
     */
    setAxisOptions(ref: Histogram | string | object, location: AnnotationLocation, options: object | { tickgenerator?: object; length?: number; flip?: boolean; }  | any): this;
    /**
     * get properties of widget
     */
    getProperties(): {header: {title: any}; axiswidth: number; axisheight: number; autoannotationsize: boolean; tools: {axisselection: {enabled: boolean; highlightstyle: FillStyle}; southscroll: {size: number; visible: boolean; options: any}}} | any;
    /**
     * set header options for widget
     * @param options options
     * @param options.title object to describe the properties for header text.For details, see setProperties method of geotoolkit.scene.shapes.Text object
     */
    setHeaderOptions(options?: object | { title?: object; } ): this;
    /**
     * get header options
     */
    getHeaderOptions(): {title: object} | object;
    /**
     * set desired length for the axis
     * @param axisRef id or reference to identify axis
     * @param length desired width or height for the axis
     */
    setAxisWidthOrHeight(axisRef: Axis | string, length: number): this;
    /**
     * set up tools options
     * @param options options
     * @param options.axisselection options for set up selection on axis, see details in setAxisSelection method
     * @param options.southscroll options for set up vertical scroll bar for south annotation, see details in setAnnotationsScrollBar method
     * @param options.panning JSON which defines panning.
     * @param options.panning.enabled is panning enabled
     */
    setToolsOptions(options: object | { axisselection?: object; southscroll?: object; panning?: object | { enabled?: boolean; } ; } ): this;
    /**
     * get tools options
     */
    getToolsOptions(): {axisselection: object; southscroll: object; panning: {enabled: boolean}} | object;
    /**
     * set up options for axis selection
     * @param options options
     * @param options.enabled flag to enable axis selection
     * @param options.highlightstyle fillstyle for background of axis
     */
    setAxisSelection(options: object | { enabled?: boolean; highlightstyle?: FillStyle | string | object; } ): this;
    /**
     * get axis selection options
     */
    getAxisSelectionOptions(): {enabled: boolean; highlightstyle: object} | object;
    /**
     * set up options for annotation scroll bar
     * @param options options
     * @param options.size height for horizontal scroll bar or width for vertical scroll bar
     * @param options.visible flag to set visibility of scroll bar
     * @param options.options properties for setting scroll bar
     * @param location location of annotation that containing axis for the group
     */
    setAnnotationsScrollBar(options: object | { size?: number; visible?: boolean; options?: object; } , location: AnnotationLocation): this;
    /**
     * get scroll bar options
     */
    getAnnotationScrollBarOptions(): object;
    /**
     * set up gaps for annotations
     * @param options options
     * @param options.south desired height for axis in south annotation
     * @param options.west desired width for axis in west annotation
     * @param options.east desired width for axis in east annotation
     */
    setGaps(options: object | { south?: number; west?: number; east?: number; } ): this;
    /**
     * remove group
     * @param groupRef id string or object that contain groupid property
     */
    removeGroup(groupRef: object | string): this;
    /**
     * set visibility of histograms and related axis
     * @param shapes array of histograms
     * @param visible set the visibility of histogram and related axis
     */
    setHistogramsVisible(shapes: Histogram[] | string[] | Histogram | string, visible: boolean): this;
    /**
     * unbind all group in certain location or all locations
     * @param location location of annotation that containing axis for limits group
     */
    removeAllGroup(location: AnnotationLocation): this;
    /**
     * bring the shape in front of all other shapes and activate it
     * @param shape the histogram need to be show on the top
     */
    setInFrontHistogram(shape: Histogram): this;
    /**
     * bring the group and the top shape in the group in front of all shapes and then activate it
     * @param groupRef id string or object that contain groupid property
     */
    setInFrontGroup(groupRef: object | string): this;
    /**
     * Sets a new data model
     * @param data data model set
     */
    setData(data: DataSource): this;
    /**
     * returns data source
     */
    getData(): DataSource;
    /**
     * Sets the data binding
     * @param binding data binding
     * @param silent silent mode to forbid
     */
    setDataBinding(binding: DataBinding, silent?: boolean): this;
    /**
     * Return the data binding
     */
    getDataBinding(): DataBinding;
    /**
     * get histograms from bind group
     * @param groupRef id string or object that contain groupid property
     * @param returnVisibleModel the flag to determine if only return visible models
     * @param returnId set if only return id of histogram instead of histogram instance
     */
    getRelatedHistogramsByGroup(groupRef: object | string, returnVisibleModel: boolean, returnId: boolean): Histogram[] | any;
    /**
     * get location of limits group
     * @param groupRef id string or object that contain groupid property
     */
    getLocationOfGroup(groupRef: object | string): AnnotationLocation;
    /**
     * get the id of groups which histogram belong to
     * @param shape the histogram in the group
     */
    getGroupIdByHistogram(shape: Histogram): object;
    /**
     * return visual(could be not real limit get from shape's getModelLimits method) model limits of histogram in widget
     * @param shape histogram reference
     */
    getHistogramModelLimits(shape: Histogram | string): Rect | any;
    /**
     * get the shared model limits of limits group
     * @param groupRef id string or object that contain groupid property
     */
    getGroupModelLimits(groupRef: object | string): Rect | any;
}
/**
 * enum for Events triggered by the Widget.
 */
export enum Events {
    /**
     * fired when histograms are selected
     */
    HistogramsSelected = 'histogramsselected',
    /**
     * fired when bins of highlightable histograms are selected
     */
    BinsSelected = 'binsselected',
    /**
     * fired when axis is selected
     */
    AxisSelected = 'axisselected',
    /**
     * fired when Data source updated
     */
    DataUpdated = 'dataupdated'
}
