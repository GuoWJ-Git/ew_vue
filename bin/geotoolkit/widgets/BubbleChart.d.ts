import {AnnotatedWidget} from './AnnotatedWidget';
import {FillStyle} from '../attributes/FillStyle';
import {LineStyle} from '../attributes/LineStyle';
import {ColorProvider} from '../util/ColorProvider';
import {Rect} from '../util/Rect';
import {NumericalDataSeries} from '../data/NumericalDataSeries';
import {NumericalDataSeriesView} from '../data/NumericalDataSeriesView';
import {AbstractUnit} from '../util/AbstractUnit';
import {TickGenerator} from '../axis/TickGenerator';
import {Layer} from '../scene/Layer';
import {DataSeries} from '../data/DataSeries';
import {TextStyle} from '../attributes/TextStyle';

/**
 * The bubblechart widget is an annotated widget that is specialized for bubble chart representations.
 * It uses {@link @int/geotoolkit/controls/shapes/BubbleChart.BubbleChart} internally.<br>
 *  <p>
 * The main way to configure and customize the widget is to use the different setData() function that provides a comprehensible way of changing the default look and feel of the widget.
 * </p>
 * <p>
 * It reuses the default tools provided by the AnnotatedWidget and customizes them for bubblechart related operations.
 * It also provides utility functions to highlight points  by index <br>
 * </p>
 * <p>
 * The Bubblechart can represent 4D datasets (X,Y ,color and size) and by default contains only a single dataset.
 * The color of each point can be defined using a colorprovider and the corresponding colorbar can be displayed.
 * </p>
 * @example
 * ```javascript
 * import {BubbleChart} from '@int/geotoolkit/widgets/BubbleChart';
 * import {Rect} from '@int/geotoolkit/util/Rect';
 * const bubblechart = new BubbleChart({
 *     'bounds': new Rect(0, 0, 800, 400),
 *     'tools': {
 *         'horizontalscroll': {'visible': false},
 *         'verticalscroll': {'visible': false}
 *     },
 *     'x': {
 *         'data': [2, 4, 6, 8, 10, 12],
 *         'name': 'Age',
 *         'unit': 'yrs',
 *         'label': {
 *             'text': 'Age of Investments in yrs'
 *         }
 *     },
 *     'y': {
 *         'data': [10, 15, 20, 25, 30, 40],
 *         'name': 'Returns',
 *         'unit': '%',
 *         'label': {
 *             'text': 'Return of investments in %'
 *         }
 *     },
 *     's': {
 *         'data': [7, 13, 21, 25, 29, 32],
 *         'name': 'Size of Investment',
 *         'unit': '$'
 *     }
 * });
 * ```
 * @example
 * ```javascript
 * // To enable other options like Tooltip use the following code.
 * widget.setToolsOptions({
 *      'tooltip': {'enabled': true}
 * });
 * ```
 */
export class BubbleChart extends AnnotatedWidget {
    /**
     * The bubblechart widget is an annotated widget that is specialized for bubble chart representations.
     * It uses {@link @int/geotoolkit/controls/shapes/BubbleChart.BubbleChart} internally.<br>
     *  <p>
     * The main way to configure and customize the widget is to use the different setData() function that provides a comprehensible way of changing the default look and feel of the widget.
     * </p>
     * <p>
     * It reuses the default tools provided by the AnnotatedWidget and customizes them for bubblechart related operations.
     * It also provides utility functions to highlight points  by index <br>
     * </p>
     * <p>
     * The Bubblechart can represent 4D datasets (X,Y ,color and size) and by default contains only a single dataset.
     * The color of each point can be defined using a colorprovider and the corresponding colorbar can be displayed.
     * </p>
     * @param options 
     * @param options.viewcachesize 
     * @param options.viewcachesize.width set tiled cache size.
     * @param options.viewcachesize.height set tiled cache size.
     * @param options.header JSON which defines header area
     * @param options.header.title JSON which defines main title. See {@link geotoolkit.attributes.Text#setProperties} for details.
     * @param options.header.annotationsize height of header
     * @param options.painter JSON which defines painter options
     * @param options.painter.symbol symbol painter style
     * @param options.painter.defaultfillstyle default fillstyle for symbol
     * @param options.painter.defaultlinestyle default linestyle for symbol
     * @param options.colorprovider color provider
     * @param options.trendline JSON which defines trend line options
     * @param options.trendline.model regression model
     * @param options.trendline.interval sample interval(pixel) for drawing the line based on calculated regression function
     * @param options.trendline.order polynomial order only work for polynomial regression
     * @param options.trendline.linestyle the style of trend line
     */
    constructor(options?: object | { viewcachesize?: object | { width?: number; height?: number; } ; header?: object | { title?: any; annotationsize?: number | string; } ; painter?: object | { symbol?: Function; defaultfillstyle?: string | any | FillStyle; defaultlinestyle?: string | any | LineStyle; } ; colorprovider?: ColorProvider; trendline?: object | { model?: object; interval?: number; order?: number; linestyle?: LineStyle; } ; } );
    /**
     * create grid and axes
     */
    createGridAndAxes(): this;
    /**
     * function call in the constructor to initialize tools in the widget <br>
     * This widget adds a selection filter. This filter is used to send a object that contains the bubblechart shape reference and
     * an array of indices that represents selected shapes. Also, this widget adds a hover selection filter for showing tooltip when hovering on the bubble.
     */
    protected initializeTools(): this;
    /**
     * Sets options and/or data
     * @param data options
     * @param data.bounds bounds. See {geotoolkit.util.Rect.setProperties} for details.
     * @param data.header JSON which defines header area
     * @param data.header.title JSON which defines main title. See {geotoolkit.attributes.Text.setProperties} for details.
     * @param data.header.annotationsize height of header
     * @param data.painter JSON which defines painter options
     * @param data.painter.symbol symbol painter style
     * @param data.painter.defaultfillstyle default fillstyle for symbol
     * @param data.painter.defaultlinestyle default linestyle for symbol
     * @param data.colorprovider color provider
     * @param data.x JSON which define the properties of axis X , See {geotoolkit.widgets.BubbleChart.setAxisData} for details.
     * @param data.y JSON which define the properties of axis Y , See {geotoolkit.widgets.BubbleChart.setAxisData} for details.
     * @param data.z JSON which define the properties of axis z , See {geotoolkit.widgets.BubbleChart.setAxisData} for details.
     * @param data.s JSON which define the size of bubble and related properties S , See {geotoolkit.widgets.BubbleChart.setAxisData} for details.
     * @param data.tools JSON which define the tools used in this widgets, See { geotoolkit.widgets.BubbleChart.setToolsOptions} for details.
     * @param data.trendline JSON which defines trend line options
     * @param data.trendline.model regression model
     * @param data.trendline.interval sample interval(pixel) for drawing the line based on calculated regression function
     * @param data.trendline.order polynomial order only work for polynomial regression
     * @param data.trendline.linestyle the style of trend line
     */
    setData(data: object | { bounds?: object | Rect; header?: object | { title?: object; annotationsize?: number; } ; painter?: object | { symbol?: Function; defaultfillstyle?: string | object | FillStyle; defaultlinestyle?: string | object | LineStyle; } ; colorprovider?: ColorProvider; x?: object; y?: object; z?: object; s?: object; tools?: object; trendline?: object | { model?: object; interval?: number; order?: number; linestyle?: LineStyle; } ; } ): this;
    /**
     * get data and options
     * @param ignoreDataOptions when true get all thins excluding data array
     */
    getData(ignoreDataOptions: boolean): any;
    /**
     * Sets visual options
     * @param options bubble chart options see {@link @int/geotoolkit/widgets/BubbleChart.BubbleChart#setProperties}
     */
    setOptions(options: any): this;
    /**
     * gets visual options
     */
    getOptions(): object | any;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {header: {title: any; annotationsize: number | string}; painter: {symbol: Function; defaultfillstyle: FillStyle; defaultlinestyle: LineStyle}; colorprovider: ColorProvider; trendline: {model: object; interval: number; order: number; linestyle: LineStyle}} | any;
    /**
     * Sets bubble chart properties
     * @param properties properties
     * @param properties.viewcachesize viewcachesize
     * @param properties.viewcachesize.width set tiled cache size.
     * @param properties.viewcachesize.height set tiled cache size.
     * @param properties.header JSON which defines header area
     * @param properties.header.title JSON which defines main title. See {@link geotoolkit.attributes.Text#setProperties} for details.
     * @param properties.header.annotationsize height of header
     * @param properties.painter JSON which defines painter properties
     * @param properties.painter.symbol symbol painter style
     * @param properties.painter.defaultfillstyle default fillstyle for symbol
     * @param properties.painter.defaultlinestyle default linestyle for symbol
     * @param properties.colorprovider color provider
     * @param properties.trendline JSON which defines trend line properties
     * @param properties.trendline.model regression model
     * @param properties.trendline.interval sample interval(pixel) for drawing the line based on calculated regression function
     * @param properties.trendline.order polynomial order only work for polynomial regression
     * @param properties.trendline.linestyle the style of trend line
     */
    setProperties(properties?: object | { viewcachesize?: object | { width?: number; height?: number; } ; header?: object | { title?: any; annotationsize?: number | string; } ; painter?: object | { symbol?: Function; defaultfillstyle?: string | any | FillStyle; defaultlinestyle?: string | any | LineStyle; } ; colorprovider?: ColorProvider; trendline?: object | { model?: object; interval?: number; order?: number; linestyle?: LineStyle; } ; } ): this;
    /**
     * return results of analysis
     */
    getRegressionAnalysis(): object;
    /**
     * draw regression line on the chart
     * @param options JSON which defines trend line options, see geotoolkit.controls.shapes.RegressionLine for details
     */
    updateRegressionLine(options?: object): this;
    /**
     * get options of trend line
     */
    getTrendlineOptions(): object;
    /**
     * Get converted label text
     * @param axis axis to apply
     */
    getLabelTextConverter(axis: string): object;
    /**
     * Set Parameters for axis
     * @param axis axis to apply ('x', 'y' , 'z' or 's' )
     * @param data JSON which defines data.
     * @param data.data Array of data
     * @param data.datasource DataSource of data
     * @param data.unit display unit
     * @param data.autominmax are min/max fixed (false) or automatically calculated
     * @param data.neatlimit enable to calculate neat limits based on existing limits
     * @param data.preciselimit enable to calculate precise limits based on existing limits
     * @param data.label JSON which defines label. See {geotoolkit.attributes.Text.setProperties} for details.
     * @param data.annotationsize width or height of annotation
     * @param data.min set the minimum limit to display data.
     * @param data.max set the maximum limit to display data.
     * @param data.reversed Is the Axis reversed.
     * @param data.logarithmic Is the Axis logarithmic.
     * @param data.tickgenerator a custom tickgenerator for this axis
     * @param data.axisticks JSON which defines ticks options of the axis. See {geotoolkit.axis.TickGenerator.setOptions} for details
     * @param data.gridticks JSON which defines horizontal ticks options of the grid (X or Y axis only). See {geotoolkit.axis.TickGenerator.setOptions} for details
     * @param data.legendvisible set legend (colorbar) visibility (Z only)
     * @param chartData JSON which defines bubblechart shape data and options
     */
    setAxisData(axis: string, data?: object | { data?: any[]; datasource?: NumericalDataSeries | NumericalDataSeriesView | any; unit?: AbstractUnit | string | any; autominmax?: boolean; neatlimit?: boolean; preciselimit?: boolean; label?: object; annotationsize?: number; min?: number; max?: number; reversed?: boolean; logarithmic?: boolean; tickgenerator?: TickGenerator; axisticks?: object; gridticks?: object; legendvisible?: boolean; } , chartData?: object): this;
    /**
     * @param axis axis
     * @param ignoreDataOptions when true get all thins excluding data array
     */
    getAxisData(axis: string, ignoreDataOptions: boolean): object;
    /**
     * Highlights the selected symbols
     * @param items object which contain the symbols to be highlighted
     * @param reset un-highlights previously selected symbols
     */
    highlightIndices(items: object, reset: boolean): void;
    /**
     * Get the reference of overlay layer
     * @deprecated since 2020.1 (3.1) use .getOverlayLayer() instead
     */
    getOverLayer(): Layer;
    /**
     * Get the R-squared value for measuring the performance the regression line
     */
    getRsquared(): number;
    /**
     * Gets Highlighted Indices
     */
    getHighlightIndices(): any[];
    /**
     * Set Options for Header
     * @param data JSON which defines header area
     * @param data.title JSON which defines main title. See {geotoolkit.attributes.Text.setProperties} for details.
     * @param data.annotationsize height of header
     */
    setHeaderOptions(data?: object | { title?: object; annotationsize?: number; } ): this;
    /**
     * get header options
     */
    getHeaderOptions(): object;
    /**
     * set labels for bubbles
     * @param data JSON which define properties of labels
     * @param data.data Data series of labels
     * @param data.location The relative location of label to bubble
     * @param data.secondarylocation The relative location of label to bubble when first location is unable to show the label completely
     * @param data.textstyle the text style of labels
     * @param data.padding the padding between labels and bubble or view boundary
     * @param data.visible flag determine the visibility of labels
     * @param chartData JSON which defines bubblechart shape data and options
     */
    setLabels(data?: object | { data?: any[] | DataSeries; location?: string; secondarylocation?: string; textstyle?: TextStyle; padding?: number; visible?: boolean; } , chartData?: object): this;
    /**
     * get properties of labels
     */
    getLabels(): object;
    /**
     * Set painter Options
     * @param data JSON which defines painter options
     * @param data.symbol symbol painter style
     * @param data.defaultfillstyle default fillstyle for symbol
     * @param data.defaultlinestyle default linestyle for symbol
     * @param data.highlightcolor highlight color for symbol
     * @param chartData JSON which defines bubblechart shape data and options
     */
    setPainter(data?: object | { symbol?: Function; defaultfillstyle?: string | object | FillStyle; defaultlinestyle?: string | object | LineStyle; highlightcolor?: string; } , chartData?: object): this;
    /**
     * get painter's properties
     */
    getPainter(): object;
    /**
     * Sets color provider
     * @param cp color provider
     * @param chartData JSON which defines bubblechart shape data and options
     */
    setColorProvider(cp?: ColorProvider, chartData?: object): this;
    /**
     * get color provider
     */
    getColorProvider(): ColorProvider;
    /**
     * set symbol cache size
     * @param options symbol options
     * @param options.width the width of symbol cache
     * @param options.height the height of symbol cache
     * @param chartData JSON which defines bubble chart shape data and options
     */
    setSymbolCache(options: object | { width?: number; height?: number; } , chartData?: object): this;
    /**
     * Set Tools Options
     * @param options which define the tools options
     * @param options.tooltip which define the tooltip options
     * @param options.tooltip.enabled flag to enable tooltip
     * @param options.tooltip.displayprops list define which axis value could be displayed when hovering on the bubble
     * @param options.tooltip.fillstyle fillstyle for tooltip
     * @param options.tooltip.linestyle linestyle for tooltip bounds
     * @param options.tooltip.textstyle textstyle for tooltip item
     * @param options.panning JSON which defines panning.
     * @param options.panning.enabled is panning enabled
     * See {geotoolkit.widgets.AnnotatedWidget.setToolsOptions} for details of other tools
     */
    setToolsOptions(options?: object | { tooltip?: object | { enabled?: boolean; displayprops?: any[]; fillstyle?: FillStyle; linestyle?: LineStyle; textstyle?: TextStyle; } ; panning?: object | { enabled?: boolean; } ; } ): this;
    /**
     */
    dispose(): void;
}
