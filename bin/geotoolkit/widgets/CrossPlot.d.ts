import {AnnotatedWidget} from './AnnotatedWidget';
import {ColorProvider} from '../util/ColorProvider';
import {Rect} from '../util/Rect';
import {NumericalDataSeries} from '../data/NumericalDataSeries';
import {NumericalDataSeriesView} from '../data/NumericalDataSeriesView';
import {FillStyle} from '../attributes/FillStyle';
import {LineStyle} from '../attributes/LineStyle';
import {AbstractUnit} from '../util/AbstractUnit';
import {AnnotationLocation} from '../layout/AnnotationLocation';
import {TickGenerator} from '../axis/TickGenerator';
import {Point} from '../util/Point';
import {SymbolAlignment} from '../controls/tools/ColorBarCursorTool';
import {SymbolShape} from '../scene/shapes/SymbolShape';
import {CrossPlot as ShapesCrossPlot} from '../controls/shapes/CrossPlot';

/**
 * The crossplot widget is an annotated widget that is specialized for cross plot representations.
 * <p>
 * Cross plot is a two dimensional chart, that uses horizontal and vertical axes to plot the data points. <br/>
 * Cross plot shows how much one variable is affected by another. The relationship between two variables is called their correlation. </br>
 * Cross plots usually consist of a large body of data. <br>
 * </p>
 * <p>
 * It uses {@link @int/geotoolkit/controls/shapes/CrossPlot.CrossPlot} internally.
 * setOptions() API can be used to configure and customize the widget. It provides a comprehensible way of changing the default look and feel of the widget.
 * </p>
 * <p>
 * It reuses the default <b>tools</b> provided by the {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget} and customizes them for crossplot related operations.
 * It also provides utility functions to highlight points in a given area (or by index)<br>
 * Selection function not only selects crossplot shapes but also provides selected point index.
 * </p>
 * <p>
 * The crossplot can represent 3 dimesions: X, Y, and color of datasets.
 * By default, crossplot can contain only a single dataset.
 * Another dataset could also be added on top of it as long as its modellimits and bounds are also managed independently.
 * The color of each point can be defined using a {@link @int/geotoolkit/util/ColorProvider.ColorProvider} (refer to the example in setData() method)
 * and the corresponding {@link @int/geotoolkit/controls/shapes/ColorBar.ColorBar} can be displayed.
 * </p>
 * @example
 * ```javascript
 * import {CirclePainter} from '@int/geotoolkit/scene/shapes/painters/CirclePainter';
 * import {DiscreteGradientColorProvider} from '@int/geotoolkit/util/DiscreteGradientColorProvider';
 * import {CrossPlot} from '@int/geotoolkit/widgets/CrossPlot';
 * import {KnownScales} from '@int/geotoolkit/util/ColorProvider';
 * const widget = new CrossPlot({
 *     'name': 'Crossplot',
 *     'tools': {
 *         'horizontalscroll': {
 *             'visible': false
 *         },
 *         'verticalscroll': {
 *             'visible': false
 *         }
 *     },
 *     'x': {
 *         'label': {
 *             'text': 'x axis'
 *         },
 *         'annotationsize': 40
 *     },
 *     'y': {
 *         'label': {
 *             'text': 'y axis'
 *         },
 *         'annotationsize': 50
 *     },
 *     'z': {
 *         'annotationsize': 20
 *     }
 * });
 * widget.setData({
 *     'header': {
 *         'title': {
 *             'visible': false
 *         },
 *         'annotationsize': 20
 *     },
 *     'x': {
 *         'data': [1.8, 3, 4.4, 5, 6.8, 5.5, 6.7, 6, 3.8, 4, 2.8, 6.5, 6, 7.5, 8, 8.5, 8, 6.2, 9, 2, 6.5, 6.9, 6.2,
 *             6, 4.7, 4, 5.3, 5.4, 5, 4.4, 5, 4.2, 7.6, 8, 9, 3, 2, 3.6, 7, 8, 9.5, 9.2, 9],
 *         'unit': 'ft',
 *         'label': {
 *             'text': 'X axis'
 *         },
 *         'neatlimits': true
 *     },
 *     'y': {
 *         'data': [3, 5, 7, 6.8, 6.4, 7.6, 7, 5, 4, 8, 8.7, 7.4, 5.5, 5, 6, 7, 3, 1.6, 3, 6.5, 4, 5, 6, 8,
 *             7, 6.7, 5, 6.5, 3, 4.5, 7.9, 7, 2, 3, 6.8, 8, 5, 8.4, 4, 6, 2, 4, 8],
 *         'unit': 'ft',
 *         'label': {
 *             'text': 'Y axis'
 *         },
 *         'neatlimits': true
 *     },
 *     'z': {
 *         'data': [1, 3, 1, 2, 6, 4.5, 5, 2, 4, 7, 3, 6, 1, 2, 4, 2, 6, 2, 4, 5, 3, 9, 8, 7, 2, 3,
 *             4, 2, 6, 3, 2, 3, 6, 7, 9, 3, 5, 5, 1, 2, 1, 1, 3, 6, 10],
 *         'unit': 'ft',
 *         'min': 0,
 *         'max': 10,
 *         'label': {
 *             'text': 'Z color'
 *         },
 *         'legendvisible': true,
 *         'annotationsize': 85
 *     },
 *     'colorprovider': new DiscreteGradientColorProvider({'bins': 255}).setScale(KnownScales.Orange, 1, 10),
 *     'marker': {
 *         'size': 8,
 *         'painter': CirclePainter
 *     }
 * });
 * ```
 */
export class CrossPlot extends AnnotatedWidget {
    /**
     * The crossplot widget is an annotated widget that is specialized for cross plot representations.
     * <p>
     * Cross plot is a two dimensional chart, that uses horizontal and vertical axes to plot the data points. <br/>
     * Cross plot shows how much one variable is affected by another. The relationship between two variables is called their correlation. </br>
     * Cross plots usually consist of a large body of data. <br>
     * </p>
     * <p>
     * It uses {@link @int/geotoolkit/controls/shapes/CrossPlot.CrossPlot} internally.
     * setOptions() API can be used to configure and customize the widget. It provides a comprehensible way of changing the default look and feel of the widget.
     * </p>
     * <p>
     * It reuses the default <b>tools</b> provided by the {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget} and customizes them for crossplot related operations.
     * It also provides utility functions to highlight points in a given area (or by index)<br>
     * Selection function not only selects crossplot shapes but also provides selected point index.
     * </p>
     * <p>
     * The crossplot can represent 3 dimesions: X, Y, and color of datasets.
     * By default, crossplot can contain only a single dataset.
     * Another dataset could also be added on top of it as long as its modellimits and bounds are also managed independently.
     * The color of each point can be defined using a {@link @int/geotoolkit/util/ColorProvider.ColorProvider} (refer to the example in setData() method)
     * and the corresponding {@link @int/geotoolkit/controls/shapes/ColorBar.ColorBar} can be displayed.
     * </p>
     * @param options options to initialize crossplot
     * @param options.viewcachesize viewcachesize
     * @param options.viewcachesize.width set tiled cache size.
     * @param options.viewcachesize.height set tiled cache size.
     * @param options.header JSON which defines header area
     * @param options.header.title JSON which defines main title. See {@link @int/geotoolkit/attributes/TextStyle.TextStyle.setProperties} for details.
     * @param options.header.annotationsize height of header
     * @param options.marker JSON which defines marker options
     * @param options.marker.painter painter style
     * @param options.marker.size marker size
     * @param options.marker.defaultcolor default color
     * @param options.marker.defaultlinecolor default line color
     * @param options.marker.highlightcolor highlight color
     * @param options.marker.highlightsize size of the highlighted markers
     * @param options.colorprovider defines the color provider for the markers.
     * @param options.x x-data. See {@link @int/geotoolkit/widgets/CrossPlot.CrossPlot.setData} for details.
     * @param options.y y-data. See {@link @int/geotoolkit/widgets/CrossPlot.CrossPlot.setData} for details.
     * @param options.z z-data. See {@link @int/geotoolkit/widgets/CrossPlot.CrossPlot.setData} for details.
     */
    constructor(options?: object | { viewcachesize?: object | { width?: number; height?: number; } ; header?: object | { title?: any; annotationsize?: number; } ; marker?: object | { painter?: Function; size?: number; defaultcolor?: string; defaultlinecolor?: string; highlightcolor?: string; highlightsize?: string; } ; colorprovider?: ColorProvider; x?: any; y?: any; z?: any; } );
    /**
     */
    dispose(): void;
    /**
     * Refresh layout of inner components of the widget
     */
    refreshLayout(): this;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bound of the node in the parent coordinates
     */
    setBounds(bounds: Rect | object): this;
    /**
     * function call in the constructor to initialize tools in the widget <br>
     * This widget adds a selection filter. This filter is used to send a object that contains the crossplot shape reference and
     * an array of indices that represents selected shapes.
     */
    protected initializeTools(): this;
    /**
     * Sets data options (for non-data parameters use CrossPlot.prototype.setOptions)
     * @example
     * ```javascript
     * // To add colors according to the scale, specify necessary ranges and then provide an instance of the color provider like shown below.
     * import {RangeColorProvider} from '@int/geotoolkit/util/RangeColorProvider';
     * import {Range} from '@int/geotoolkit/util/Range';
     * const colorProvider = new RangeColorProvider({
     *      'values': [
     *          new Range(0, 50),
     *          new Range(50, 100),
     *          new Range(100, 150)
     *       ],
     *      'colors': ['blue', 'red', 'green']
     * });
     * widget.setData({
     *     ...
     *     'colorprovider': colorProvider
     * });
     * ```
     * @param data options and data
     * @param data.bounds bounds. See {@link @int/geotoolkit/util/Rect.Rect.setProperties} for details.
     * @param data.header JSON which defines header area
     * @param data.header.title JSON which defines main title. See {@link @int/geotoolkit/attributes/TextStyle.TextStyle.setProperties} for details.
     * @param data.header.annotationsize height of header
     * @param data.colorprovider ColorProvider used to color the data
     * @param data.x JSON which defines X-data.
     * @param data.x.datasource DataSource of X-data
     * @param data.x.autominmax are X min/max fixed (false) or given by datasource (true). X DataSource has to exist
     * @param data.x.data Array of X-data
     * @param data.x.label JSON which defines X-label. See {@link @int/geotoolkit/attributes/TextStyle.TextStyle.setProperties} for details.
     * @param data.x.annotationsize height of X-annotation
     * @param data.x.min Minimum X-Value to display X-data. If never set, will be min of [data.x.data]
     * @param data.x.max Maximum X-Value to display X-data. If never set, will be max of [data.x.data]
     * @param data.x.reversed Is the X-Axis reversed. If never set, will be true if [data.x.max]<[data.x.min]
     * @param data.x.logarithmic Is the X-Axis logarithmic. default is false
     * @param data.x.neatlimits Calculate smart limits for linear mode. For logarithmic mode it is disabled
     * @param data.x.preciselimits option for neat limits calculates only step and hide edge ticks. It is applied only if neatlimits is set
     * @param data.x.minspan axis min span for smart limits. It works if neatlimits is true
     * @param data.x.axisticks JSON which defines ticks options of the X-axis. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.setProperties} for details
     * @param data.x.gridticks JSON which defines vertical ticks options of the grid. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.setProperties} for details
     * @param data.x.histogram JSON which defines histogram properties
     * @param data.x.histogram.visible Is the histogram visible (default is false)
     * @param data.x.histogram.fillstyle fill style to be used
     * @param data.x.histogram.linestyle line style to be used
     * @param data.x.histogram.bins number of bins to be used (default is 25)
     * @param data.y JSON which defines Y-data.
     * @param data.y.datasource DataSource of Y-data
     * @param data.y.autominmax are Y min/max fixed (false) or given by datasource (true). Y DataSource has to exist
     * @param data.y.data Array of Y-data
     * @param data.y.label JSON which defines Y-label. See {@link @int/geotoolkit/scene/shapes/Text.Text.setProperties} for details.
     * @param data.y.annotationsize width of Y-annotation
     * @param data.y.min Minimum Y-Value to display Y-data. If never set, will be min of [data.y.data]
     * @param data.y.max Maximum Y-Value to display Y-data. If never set, will be max of [data.y.data]
     * @param data.y.reversed Is the Y-Axis reversed. If never set, will be true if [data.y.max]>[data.y.min]
     * @param data.y.logarithmic Is the Y-Axis logarithmic. default is false
     * @param data.y.neatlimits Calculate smart limits for linear mode. For logarithmic mode it is disabled
     * @param data.y.preciselimits option for neat limits calculates only step and hide edge ticks. It is neabled only if neatlimits is set
     * @param data.y.minspan axis min span for smart limits. It works if neatlimits is true
     * @param data.y.axisticks JSON which defines ticks options of the Y-axis. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.setProperties} for details
     * @param data.y.gridticks JSON which defines horizontal ticks options of the grid. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.setProperties} for details
     * @param data.y.histogram JSON which defines histogram properties
     * @param data.y.histogram.visible Is the histogram visible (default is false)
     * @param data.y.histogram.fillstyle fill style to be used
     * @param data.y.histogram.linestyle line style to be used
     * @param data.y.histogram.bins number of bins to be used (default is 25)
     * @param data.z JSON which defines Z-data.
     * @param data.z.datasource DataSource of Z-data
     * @param data.z.autominmax are Z min/max fixed (false) or given by datasource (true). Z DataSource has to exist
     * @param data.z.data Array of Z-data
     * @param data.z.label JSON which defines Z-label. See {@link @int/geotoolkit/scene/shapes/Text.Text.setProperties} for details.
     * @param data.z.annotationsize width of Z-annotation
     * @param data.z.min Minimum Z-Value of Z-data colorbox. If never set, will be min of [data.z.data]
     * @param data.z.max Maximum Z-Value of Z-data colorbox. If never set, will be max of [data.z.data]
     * @param data.z.reversed Is the Z-Axis reversed. If never set, will be true if [data.z.max]>[data.z.min]
     * @param data.z.logarithmic Is the Z-Axis colorbox logarithmic. default is false
     * @param data.z.neatlimits Calculate smart limits for linear mode. For logarithmic mode it is disabled
     * @param data.z.preciselimits option for neat limits calculates only step and hide edge ticks. It is neabled only if neatlimits is set
     * @param data.z.minspan axis min span for smart limits. It works if neatlimits is true
     * @param data.z.axisticks JSON which defines ticks options of the Z-axis. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.setProperties} for details
     * @param data.z.legendvisible legend visibility
     * @param data.z.histogram JSON which defines histogram properties
     * @param data.z.histogram.visible Is the histogram visible (default is false)
     * @param data.z.histogram.fillstyle fill style to be used
     * @param data.z.histogram.linestyle line style to be used
     * @param data.z.histogram.bins number of bins to be used (default is 25)
     * @param data.marker JSON which defines marker options
     * @param data.marker.painter painter style
     * @param data.marker.size marker size
     * @param data.marker.defaultcolor default color
     * @param data.marker.defaultlinecolor default line color
     * @param data.marker.highlightcolor highlight color
     * @param data.marker.highlightsize size of the highlighted markers
     * @param data.tools JSON which defines tools options. See {@link @int/geotoolkit/widgets/CrossPlot.CrossPlot.setToolsOptions} for details
     */
    setData(data?: object | { bounds?: object | Rect; header?: object | { title?: object; annotationsize?: number; } ; colorprovider?: ColorProvider; x?: object | { datasource?: NumericalDataSeries | NumericalDataSeriesView; autominmax?: boolean; data?: number[]; label?: object; annotationsize?: number; min?: number; max?: number; reversed?: boolean; logarithmic?: boolean; neatlimits?: boolean; preciselimits?: boolean; minspan?: boolean; axisticks?: object; gridticks?: object; histogram?: object | { visible?: boolean; fillstyle?: FillStyle | object; linestyle?: LineStyle | object; bins?: number; } ; } ; y?: object | { datasource?: NumericalDataSeries | NumericalDataSeriesView; autominmax?: boolean; data?: number[]; label?: object; annotationsize?: number; min?: number; max?: number; reversed?: boolean; logarithmic?: boolean; neatlimits?: boolean; preciselimits?: boolean; minspan?: boolean; axisticks?: object; gridticks?: object; histogram?: object | { visible?: boolean; fillstyle?: FillStyle | object; linestyle?: LineStyle | object; bins?: number; } ; } ; z?: object | { datasource?: NumericalDataSeries | NumericalDataSeriesView; autominmax?: boolean; data?: number[]; label?: object; annotationsize?: number; min?: number; max?: number; reversed?: boolean; logarithmic?: boolean; neatlimits?: boolean; preciselimits?: boolean; minspan?: boolean; axisticks?: object; legendvisible?: boolean; histogram?: object | { visible?: boolean; fillstyle?: FillStyle | object; linestyle?: LineStyle | object; bins?: number; } ; } ; marker?: object | { painter?: Function; size?: number; defaultcolor?: string; defaultlinecolor?: string; highlightcolor?: string; highlightsize?: string; } ; tools?: object; } ): this;
    /**
     * get options
     * @param getDataOptions how to extract data, null by default
     * @param getDataOptions.no-data in case of you will not get Array of X, Y and Z-data
     */
    getData(getDataOptions: any | object | { "no-data"?: boolean; } ): object;
    /**
     * Sets specific non-data properties for the visuals like header, marker color etc.
     */
    getProperties(): {header: {title: any; annotationsize: number}; marker: {painter: Function; size: number; defaultcolor: string; defaultlinecolor: string; highlightcolor: string; highlightsize: string}; x: any; y: any; z: any; colorprovider: ColorProvider} | any;
    /**
     * Sets specific non-data properties for the visuals like header, marker color etc.
     * @param properties properties to apply
     * @param properties.viewcachesize viewcachesize
     * @param properties.viewcachesize.width set tiled cache size.
     * @param properties.viewcachesize.height set tiled cache size.
     * @param properties.header JSON which defines header area
     * @param properties.header.title JSON which defines main title. See {@link @int/geotoolkit/attributes/TextStyle.TextStyle.setProperties} for details.
     * @param properties.header.annotationsize height of header
     * @param properties.marker JSON which defines marker options
     * @param properties.marker.painter painter style
     * @param properties.marker.size marker size
     * @param properties.marker.defaultcolor default color
     * @param properties.marker.defaultlinecolor default line color
     * @param properties.marker.highlightcolor highlight color
     * @param properties.marker.highlightsize size of the highlighted markers
     * @param properties.colorprovider defines the color provider for the markers.
     * @param properties.x x axis data properties. See {@link @int/geotoolkit/widgets/CrossPlot.CrossPlot.setAxisDataOptions} for details.
     * @param properties.y y axis data properties. See {@link @int/geotoolkit/widgets/CrossPlot.CrossPlot.setAxisDataOptions} for details.
     * @param properties.z z axis data properties. See {@link @int/geotoolkit/widgets/CrossPlot.CrossPlot.setAxisDataOptions} for details.
     */
    setProperties(properties?: object | { viewcachesize?: object | { width?: number; height?: number; } ; header?: object | { title?: any; annotationsize?: number; } ; marker?: object | { painter?: Function; size?: number; defaultcolor?: string; defaultlinecolor?: string; highlightcolor?: string; highlightsize?: string; } ; colorprovider?: ColorProvider; x?: any; y?: any; z?: any; } ): this;
    /**
     * Sets specific non-data options for the visuals like header, marker color etc.
     * @example
     * ```javascript
     * import {DiscreteGradientColorProvider} from '@int/geotoolkit/util/DiscreteGradientColorProvider';
     * import {KnownScales} from '@int/geotoolkit/util/ColorProvider';
     * crossplotwidget.setOptions({
     *    'colorprovider': new DiscreteGradientColorProvider({'bins': 255}).setScale(KnownScales.Winter, 1, 7)
     * });
     * ```
     * @param data options to apply see {@link @int/geotoolkit/widgets/CrossPlot.CrossPlot#setProperties}
     */
    setOptions(data?: any): this;
    /**
     * Gets visual options
     */
    getOptions(): {header: {title: object; annotationsize: number}; colorprovider: ColorProvider; marker: {painter: Function; size: number; defaultcolor: string; defaultlinecolor: string; highlightcolor: string; highlightsize: string}; tools: object} | any;
    /**
     * Set marker Options
     * @param data JSON which defines marker options
     * @param data.painter painter style
     * @param data.size marker size
     * @param data.defaultcolor default color
     * @param data.defaultlinecolor default line color
     * @param data.highlightcolor highlight color
     * @param data.highlightsize highlight symbol size. it equals to symbols size by default
     */
    setMarkerOptions(data?: object | { painter?: Function; size?: number; defaultcolor?: string; defaultlinecolor?: string; highlightcolor?: string; highlightsize?: string; } ): this;
    /**
     * Get marker Options
     */
    getMarkerOptions(): {painter: Function | string; size: number; defaultcolor: string; defaultlinecolor: string; highlightsize: number} | object;
    /**
     * Set Options for Header
     * @param options JSON which defines header area
     * @param options.title JSON which defines main title. See {@link @int/geotoolkit/attributes/TextStyle.TextStyle.setProperties} for details.
     * @param options.annotationsize height of header
     */
    setHeaderOptions(options?: object | { title?: object; annotationsize?: number; } ): this;
    /**
     * Get Options for Header
     */
    getHeaderOptions(): {title: object; annotationsize: number} | object;
    /**
     * Set Parameters for axis
     * @param axis axis to apply ('x', 'y' or 'z')
     * @param data JSON which defines data.
     * @param data.data Array of data
     * @param data.datasource DataSource of data
     * @param data.unit display unit
     * @param data.autominmax are min/max fixed (false) or given by datasource (true). DataSource has to exist
     * @param data.location location of
     * @param data.label JSON which defines label. See {@link @int/geotoolkit/attributes/TextStyle.TextStyle.setProperties} for details.
     * @param data.annotationsize width or height of annotation
     * @param data.min Minimum Value to display data. If never set, will be min of [options.data]
     * @param data.max Maximum Value to display data. If never set, will be max of [options.data]
     * @param data.neatlimits Calculate smart limits for linear mode. For logarithmic mode it is disabled
     * @param data.preciselimits option for neat limits calculates only step and hide edge ticks. It is neabled only if neatlimits is set
     * @param data.minspan axis min span for smart limits. It works if neatlimits is true
     * @param data.reversed Is the Axis reversed.
     * @param data.logarithmic Is the Axis logarithmic. default is false
     * @param data.tickgenerator a custom tickgenerator for this axis
     * @param data.axisticks JSON which defines ticks options of the axis. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.setProperties} for details
     * @param data.gridticks JSON which defines horizontal ticks options of the grid (X or Y axis only). See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.setProperties} for details
     * @param data.legendvisible legend visibility (Z only)
     * @param data.histogram JSON which defines histogram properties
     * @param data.histogram.visible Is the histogram visible (default is false)
     * @param data.histogram.fillstyle fillstyle to be used
     * @param data.histogram.linestyle linestyle to be used
     * @param data.histogram.bins number of bins to be used (default is 25)
     * @param xplotData optional data
     */
    setAxisDataOptions(axis: string, data?: object | { data?: number[]; datasource?: NumericalDataSeries | NumericalDataSeriesView | any; unit?: AbstractUnit | string | any; autominmax?: boolean; location?: AnnotationLocation; label?: object; annotationsize?: number; min?: number; max?: number; neatlimits?: boolean; preciselimits?: boolean; minspan?: boolean; reversed?: boolean; logarithmic?: boolean; tickgenerator?: TickGenerator; axisticks?: object; gridticks?: object; legendvisible?: boolean; histogram?: object | { visible?: boolean; fillstyle?: FillStyle | object; linestyle?: LineStyle | object; bins?: number; } ; } , xplotData?: any): this;
    /**
     * Get axis options
     * @param axis axis to get options
     * @param getDataOptions how to extract data, null by default
     * @param getDataOptions.no-data in case of you will not get Array of X, Y and Z-data
     */
    getAxisDataOptions(axis: string, getDataOptions: any | object | { "no-data"?: boolean; } ): {data: number[]; datasource: NumericalDataSeries | NumericalDataSeriesView | any; unit: AbstractUnit | string | any; autominmax: boolean; location: AnnotationLocation; label: object; annotationsize: number; min: number; max: number; logarithmic: boolean; neatlimits: boolean; preciselimits: boolean; minspan: boolean; reversed: boolean; histogram: {visible: boolean; bins: number}; axisticks: any; gridticks: any} | object;
    /**
     * Sets color provider
     * @param cp color provider
     */
    setColorProvider(cp?: ColorProvider | null): this;
    /**
     * Returns color provider
     */
    getColorProvider(): ColorProvider | null;
    /**
     * Gets Highlighted Indices
     * @param name name of the selection
     */
    getHighlightedIndices(name?: string | null): number[];
    /**
     * Return names of highlighted selections
     */
    getHighlightSelectionNames(): string[];
    /**
     * Return highlight options
     * @param name highlight selection name
     */
    getHighlightedOptions(name: string | null): {highlighted: object; options: {defaultcolor: string; highlightcolor: string}} | object;
    /**
     * Highlights the selected area
     * @param rect search area
     * @param reset un-highlights previously selected indices
     */
    highlightArea(rect: Point | Rect, reset: boolean): void;
    /**
     * Highlights the selected indices
     * @param indices to be highlighted
     * @param indices.name name of the highlighted index group
     * @param indices.indices indices to be highlighted
     * @param indices.options highlight options
     * @param indices.options.defaultcolor default color
     * @param indices.options.highlightcolor highlight color
     * @param reset un-highlights previously selected indices
     */
    highlightIndices(indices: number[] | object | { name?: string; indices?: number[]; options?: object | { defaultcolor?: string; highlightcolor?: string; } ; } , reset: boolean): this;
    /**
     * Return indices in search area
     * @param rect search area
     */
    getIndicesAt(rect: Rect): number[];
    /**
     * Set Tools Options
     * See {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget.setToolsOptions} for details
     * @param options tools options
     */
    setToolsOptions(options: object): this;
    /**
     * Switch on {@link @int/geotoolkit/controls/tools/ColorBarCursorTool.ColorBarCursorTool} ColorBarCursorTool
     * @param symbolAlignment direction of symbol
     * @param offset offset
     * @param symbol symbol for colorbar cursor
     */
    switchOnCursorTool(symbolAlignment?: SymbolAlignment, offset?: number, symbol?: SymbolShape): this;
    /**
     * Switch off {@link @int/geotoolkit/controls/tools/ColorBarCursorTool.ColorBarCursorTool} ColorBarCursorTool
     */
    switchOffCursorTool(): this;
    /**
     * Return inner crossplot shape
     */
    protected getCrossPlotShape(): ShapesCrossPlot;
    /**
     * apply size (width or height) to annotation (convenience method)
     * @param annotationSize JSON to hold (width or height) of the annotation
     * @param annotationSize.east preferred width of east annotation size
     * @param annotationSize.south preferred height of south annotation size
     * @param annotationSize.west preferred width of west annotation size
     * @param annotationSize.north preferred height of north annotation size
     * @param silent true for not updating crossplot information about sizes
     */
    setAnnotationSize(annotationSize?: object | { east?: object | string | number; south?: object | string | number; west?: object | string | number; north?: object | string | number; } , silent?: boolean): this;
}
