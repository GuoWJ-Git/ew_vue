import {AnnotatedWidget} from './AnnotatedWidget';
import {NumericalDataSeries} from '../data/NumericalDataSeries';
import {NumericalDataSeriesView} from '../data/NumericalDataSeriesView';
import {FillStyle} from '../attributes/FillStyle';
import {LineStyle} from '../attributes/LineStyle';
import {FrequencyType, Histogram as ShapesHistogram} from '../controls/shapes/Histogram';
import {TickGenerator} from '../axis/TickGenerator';
import {Orientation} from '../util/Orientation';
import {DataSeries} from '../data/DataSeries';
import {Point} from '../util/Point';
import {Range} from '../util/Range';
import {Registry} from '../persistence/Registry';

/**
 * The Histogram widget  is  an annotated widget that is specialized for histogram representations.It uses {@link @int/geotoolkit/controls/shapes/Histogram.Histogram} internally.
 * <p>
 * A histogram is a graphical display of tabulated frequencies, shown as bars. It shows what proportion of cases fall into each of several categories.
 * The categories are usually specified as non-overlapping intervals of some variable. The categories are adjacent. The intervals (or bands) should ideally be of the same size
 * </p>
 * <p>
 * </p>
 * <p>
 * The main way to configure and customize the widget is to use the different setOptions() function that provides a comprehensible way of changing the default look and feel of the widget.
 * This widget by default, allows horizontally zoom only.
 * </p>
 * <p>
 * It reuses the default tools provided by the AnnotatedWidget and customize them for histogram related operations.
 * <ul>
 * <li> rubberzoom: limits the zoom direction to horizontal only.</li>
 * <li> selection: Selects only histogram shapes but provides selected bin index </li>
 * </ul>
 * It also provides utility functions to highlight bin in a given range (or by index). The histogram widget can display and manage several histograms at once, overlapping them.
 * It also provides an 'accumulative' curve feature and can generate statistics.
 * </p>
 * @example
 * ```javascript
 * // Create the widget
 * const widget = new Histogram({
 *     'bounds': new Rect(0, 0, 800, 400),
 *     'tools': {
 *         'horizontalscroll': {'visible': false},
 *         'verticalscroll': {'visible': false}
 *     },
 *     'header': {
 *         'title': {'visible': false}
 *     },
 *     'autogradient': false,
 *     'linestyle': {
 *         'color': 'transparent',
 *         'width': 0
 *     }
 * });
 * ```
 * @example
 * ```javascript
 * // Set the data for the widget.
 *   widget.setData({
 *          'data': [1000, 1100, 1800, 2000, 2200, 2300, 2210, 2200, 2400, 2100, 2200, 2000, 3000,
 *              3500, 3100, 3150, 3090, 4100, 4000, 4500, 4125, 4400, 4500, 4600, 4650, 4300, 5000,
 *              5555, 5100, 5125, 5200, 6100, 6000, 6500, 7000, 7400, 7900, 8000, 9000, 9500],
 *          'x': {
 *              'label': {
 *                  'text': 'Depth(ft)'
 *              },
 *              'min': 1000,
 *              'max': 10000,
 *              'neatlimits': false
 *          },
 *          'y': {
 *              'label': {
 *                  'text': 'Number of Wells'
 *              },
 *              'min': 0,
 *              'max': 10,
 *              'neatlimits': false
 *          },
 *          'bins': 10,
 *          'binspacing': 95
 *      });
 * ```
 * @example
 * ```javascript
 * // CSS rules can be applied to the Histogram widget in order to customize it.
 *  import {CssStyle} from '@int/geotoolkit/css/CssStyle';
 *  const css = [
 *          ' .Histogram { ',
 *          ' x-axisticks-major-labelstyle-font: 11px Roboto; ',
 *          ' y-axisticks-major-labelstyle-font: 11px Roboto; ',
 *          ' x-axisticks-major-labelstyle-color: rgba(128,128,128,.7); ',
 *          ' y-axisticks-major-labelstyle-color: rgba(128,128,128,.7); ',
 *          ' fillstyle-color:  #5b9bd5;',
 *          ' header-annotationsize: 0;',
 *          ' backgroundfillstyle-color: #2d353c;',
 *          '}'
 *  ].join('\n');
 *  widget.setCss(new CssStyle({'css': css}));
 * ```
 */
export class Histogram extends AnnotatedWidget {
    /**
     * The Histogram widget  is  an annotated widget that is specialized for histogram representations.It uses {@link @int/geotoolkit/controls/shapes/Histogram.Histogram} internally.
     * <p>
     * A histogram is a graphical display of tabulated frequencies, shown as bars. It shows what proportion of cases fall into each of several categories.
     * The categories are usually specified as non-overlapping intervals of some variable. The categories are adjacent. The intervals (or bands) should ideally be of the same size
     * </p>
     * <p>
     * </p>
     * <p>
     * The main way to configure and customize the widget is to use the different setOptions() function that provides a comprehensible way of changing the default look and feel of the widget.
     * This widget by default, allows horizontally zoom only.
     * </p>
     * <p>
     * It reuses the default tools provided by the AnnotatedWidget and customize them for histogram related operations.
     * <ul>
     * <li> rubberzoom: limits the zoom direction to horizontal only.</li>
     * <li> selection: Selects only histogram shapes but provides selected bin index </li>
     * </ul>
     * It also provides utility functions to highlight bin in a given range (or by index). The histogram widget can display and manage several histograms at once, overlapping them.
     * It also provides an 'accumulative' curve feature and can generate statistics.
     * </p>
     * @param options 
     * @param options.header JSON which defines header area
     * @param options.header.title JSON which defines main title properties see {@link @int/geotoolkit/scene/shapes/Text.Text#setProperties}
     * @param options.header.annotationsize height of header
     * @param options.datasource DataSource
     * @param options.autominmax are X min/max fixed (false) or given by datasource (true). DataSource has to exist
     * @param options.data Array of data
     * @param options.bins Number of bins
     * @param options.binspacing bin spacing in percentage
     * @param options.fillstyle Bins FillStyle. See {@link @int/geotoolkit/attributes/FillStyle.FillStyle#setProperties} for details.
     * @param options.autogradient FillStyle autogradient
     * @param options.linestyle Bins LineStyle. See {@link @int/geotoolkit/attributes/LineStyle.LineStyle} for details.
     * @param options.frequencytype Frequency Type
     * @param options.highlightcolor Color used to highlight bins
     * @param options.accumulation JSON for accumulation curve.
     * @param options.accumulation.visible Visibility of accumulation curve.
     * @param options.accumulation.linestyle JSON for accumulation curve.
     * @param options.x JSON which defines X-data.
     * @param options.x.label JSON which defines X-label.
     * @param options.x.label.text label text
     * @param options.x.annotationsize height of X-annotation
     * @param options.x.min Minimum X-Value to display X-data. If never set, will be min of [options.x.data]
     * @param options.x.max Maximum X-Value to display X-data. If never set, will be max of [options.x.data]
     * @param options.x.reversed Is the X-Axis reversed. If never set, will be true if [options.x.max]<[options.x.min]
     * @param options.x.axisticks JSON which defines ticks data of the X-axis. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setProperties} for details
     * @param options.x.gridticks JSON which defines vertical ticks data of the grid. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setProperties} for details
     * @param options.x.tickgenerator deprecated (since 2020 (3.0)) a custom tick generator
     * @param options.x.axistickgenerator a custom axis tick generator
     * @param options.x.gridtickgenerator a custom grid tick generator
     * @param options.x.preciselimits x axis precise limits
     * @param options.y JSON which defines Y-data.
     * @param options.y.label JSON which defines Y-label.
     * @param options.y.label.text label text
     * @param options.y.annotationsize width of Y-annotation
     * @param options.y.annotationside specifies which side should have axes. By default 'both' means from left and right
     * @param options.y.min Minimum Y-Value to display Y-data. If never set, will be min of [options.y.data]
     * @param options.y.max Maximum Y-Value to display Y-data. If never set, will be max of [options.y.data]
     * @param options.y.reversed Is the Y-Axis reversed. If never set, will be true if [options.y.max]>[options.y.min]
     * @param options.y.axisticks JSON which defines ticks data of the Y-axis.
     * @param options.y.gridticks JSON which defines horizontal ticks data of the grid.
     * @param options.y.tickgenerator deprecated (since 2020 (3.0)) a custom tick generator
     * @param options.y.axistickgenerator a custom axis tick generator
     * @param options.y.gridtickgenerator a custom grid tick generator
     * @param options.y.preciselimits y axis precise limits
     * @param options.tools JSON which defines tools data. See {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget#setToolsOptions} for details
     */
    constructor(options?: object | { header?: object | { title?: any; annotationsize?: number; } ; datasource?: NumericalDataSeries | NumericalDataSeriesView; autominmax?: boolean; data?: number[]; bins?: number; binspacing?: number; fillstyle?: any | FillStyle; autogradient?: boolean; linestyle?: any | LineStyle; frequencytype?: FrequencyType | string; highlightcolor?: string; accumulation?: object | { visible?: boolean; linestyle?: LineStyle | string | any; } ; x?: object | { label?: object | { text?: string; } ; annotationsize?: number; min?: number; max?: number; reversed?: boolean; axisticks?: any; gridticks?: any; tickgenerator?: TickGenerator; axistickgenerator?: TickGenerator; gridtickgenerator?: TickGenerator; preciselimits?: boolean; } ; y?: object | { label?: object | { text?: string; } ; annotationsize?: number; annotationside?: string; min?: number; max?: number; reversed?: boolean; axisticks?: any; gridticks?: any; tickgenerator?: TickGenerator; axistickgenerator?: TickGenerator; gridtickgenerator?: TickGenerator; preciselimits?: boolean; } ; tools?: any; } );
    /**
     */
    dispose(): void;
    /**
     * Add a new histogram
     */
    protected addHistogram(): ShapesHistogram;
    /**
     * @param index index of the histogram or active index.
     */
    protected getHistogram(index?: number | any): ShapesHistogram;
    /**
     * Initialize tools
     */
    protected initializeTools(): this;
    /**
     * update tools according to the orientation of widget
     */
    updateTools(): void;
    /**
     * Returns the bins values of the current histogram in the following array format
     * Array [{ 'minvalue' : number, 'maxvalue' : number, 'binnumber' : number, 'frequency' : number }, ...]
     */
    getBins(): any[];
    /**
     * get orientation
     */
    getOrientation(): Orientation;
    /**
     * set orientation
     * @param orientation orientation
     */
    setOrientation(orientation: Orientation): this;
    /**
     * Sets options and/or data
     * @param data data
     * @param data.header JSON which defines header area
     * @param data.header.title JSON which defines main title.
     * @param data.header.annotationsize height of header
     * @param data.datasource DataSource
     * @param data.autominmax are X min/max fixed (false) or given by datasource (true). DataSource has to exist
     * @param data.data Array of data
     * @param data.bins Number of bins
     * @param data.binspacing bin spacing in percentage
     * @param data.fillstyle Bins FillStyle. See {@link @int/geotoolkit/attributes/FillStyle.FillStyle#setProperties} for details.
     * @param data.autogradient FillStyle autogradient
     * @param data.linestyle Bins LineStyle. See {@link @int/geotoolkit/attributes/LineStyle.LineStyle} for details.
     * @param data.frequencytype Frequency Type
     * @param data.highlightcolor Color used to highlight bins
     * @param data.accumulation JSON for accumulation curve.
     * @param data.accumulation.visible Visibility of accumulation curve.
     * @param data.accumulation.linestyle JSON for accumulation curve.
     * @param data.x JSON which defines X-data.
     * @param data.x.label JSON which defines X-label.
     * @param data.x.annotationsize height of X-annotation
     * @param data.x.min Minimum X-Value to display X-data. If never set, will be min of [data.x.data]
     * @param data.x.max Maximum X-Value to display X-data. If never set, will be max of [data.x.data]
     * @param data.x.reversed Is the X-Axis reversed. If never set, will be true if [data.x.max]<[data.x.min]
     * @param data.x.axisticks JSON which defines ticks data of the X-axis. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setOptions} for details
     * @param data.x.gridticks JSON which defines vertical ticks data of the grid. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setOptions} for details
     * @param data.x.tickgenerator deprecated (since 2020 (3.0)) a custom tick generator
     * @param data.x.axistickgenerator a custom axis tick generator
     * @param data.x.gridtickgenerator a custom grid tick generator
     * @param data.x.preciselimits x axis precise limits
     * @param data.y JSON which defines Y-data.
     * @param data.y.label JSON which defines Y-label.
     * @param data.y.annotationsize width of Y-annotation
     * @param data.y.annotationside specifies which side should have axes. By default 'both' means from left and right
     * @param data.y.min Minimum Y-Value to display Y-data. If never set, will be min of [data.y.data]
     * @param data.y.max Maximum Y-Value to display Y-data. If never set, will be max of [data.y.data]
     * @param data.y.reversed Is the Y-Axis reversed. If never set, will be true if [data.y.max]>[data.y.min]
     * @param data.y.axisticks JSON which defines ticks data of the Y-axis.
     * @param data.y.gridticks JSON which defines horizontal ticks data of the grid.
     * @param data.y.tickgenerator deprecated (since 2020 (3.0)) a custom tick generator
     * @param data.y.axistickgenerator a custom axis tick generator
     * @param data.y.gridtickgenerator a custom grid tick generator
     * @param data.y.preciselimits y axis precise limits
     * @param data.tools JSON which defines tools data. See {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget#setToolsOptions} for details
     */
    setData(data?: object | { header?: object | { title?: object; annotationsize?: number; } ; datasource?: NumericalDataSeries | NumericalDataSeriesView; autominmax?: boolean; data?: number[]; bins?: number; binspacing?: number; fillstyle?: object | FillStyle; autogradient?: boolean; linestyle?: object | LineStyle; frequencytype?: FrequencyType | string; highlightcolor?: string; accumulation?: object | { visible?: boolean; linestyle?: object; } ; x?: object | { label?: object; annotationsize?: number; min?: number; max?: number; reversed?: boolean; axisticks?: object; gridticks?: object; tickgenerator?: TickGenerator; axistickgenerator?: TickGenerator; gridtickgenerator?: TickGenerator; preciselimits?: boolean; } ; y?: object | { label?: object; annotationsize?: number; annotationside?: string; min?: number; max?: number; reversed?: boolean; axisticks?: object; gridticks?: object; tickgenerator?: TickGenerator; axistickgenerator?: TickGenerator; gridtickgenerator?: TickGenerator; preciselimits?: boolean; } ; tools?: object; } ): this;
    /**
     * get options
     * @param getDataOptions how to extract data, null by default
     * @param getDataOptions.no-data in case of you will not get Array of X-data and Y-data
     */
    getData(getDataOptions: any | object | { "no-data"?: boolean; } ): object;
    /**
     * Returns properties
     */
    getProperties(): {header: {title: any; annotationsize: number}; datasource: NumericalDataSeries | NumericalDataSeriesView; autominmax: boolean; bins: number; binspacing: number; fillstyle: any | FillStyle; autogradient: boolean; linestyle: any | LineStyle; frequencytype: FrequencyType | string; highlightcolor: string; accumulation: {visible: boolean; linestyle: LineStyle | string | any}; x: {label: {text: string}; annotationsize: number; min: number; max: number; reversed: boolean; axisticks: any; gridticks: any; tickgenerator: TickGenerator; axistickgenerator: TickGenerator; gridtickgenerator: TickGenerator; preciselimits: boolean}; y: {label: {text: string}; annotationsize: number; annotationside: string; min: number; max: number; reversed: boolean; axisticks: any; gridticks: any; tickgenerator: TickGenerator; axistickgenerator: TickGenerator; gridtickgenerator: TickGenerator; preciselimits: boolean}} | any;
    /**
     * Set Options for Header
     * @param data JSON which defines header area
     * @param data.title JSON which defines main title.
     * @param data.annotationsize height of header
     */
    setHeaderOptions(data?: object | { title?: object; annotationsize?: number; } ): this;
    /**
     * Returns calculated statistics of values
     * - Data samples count
     * - min sample value
     * - max sample value
     * - average value
     * - variance value
     * - average deviation value
     * - standard deviation value
     * - skewness value
     * - standard kurtosis value
     * - Theoretical P10 value (centile)
     * - Theoretical P50 value (centile)
     * - Theoretical P90 value (centile)
     */
    getStatistics(): any[];
    /**
     * Maximum frequency
     */
    getMaxFrequency(): number;
    /**
     * Get lowest value
     */
    getMinValue(): number;
    /**
     * Get highest data value
     */
    getMaxValue(): number;
    /**
     * Get Options for Header
     */
    getHeaderOptions(): {title: object; annotationsize: number} | object;
    /**
     * Set Parameters for axis
     * @param axis axis to apply ('x' or 'y')
     * @param data JSON which defines data.
     * @param data.label JSON which defines label.
     * @param data.annotationsize width or height of annotation
     * @param data.min Minimum Value to display data. If never set, will be min of [options.data]
     * @param data.max Maximum Value to display data. If never set, will be max of [options.data]
     * @param data.neatlimits Calculate smart limits
     * @param data.neatlimitscenteredonzero Center the smart limits on zero
     * @param data.reversed Is the Axis reversed.
     * @param data.axisticks JSON which defines ticks options of the axis. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setOptions} for details
     * @param data.gridticks JSON which defines horizontal ticks options of the grid. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setOptions} for details
     * @param data.preciselimits precise limits
     */
    setAxisDataOptions(axis: string, data?: object | { label?: object; annotationsize?: number; min?: number; max?: number; neatlimits?: boolean; neatlimitscenteredonzero?: boolean; reversed?: boolean; axisticks?: object; gridticks?: object; preciselimits?: boolean; } ): this;
    /**
     * get axis options
     * @param axis The name of the axis
     * @param getDataOptions how to extract data, null by default
     * @param getDataOptions.no-data in case of you will not get Array of X-data and Y-data
     */
    getAxisDataOptions(axis: string, getDataOptions: object | { "no-data"?: boolean; } ): object;
    /**
     * on DataSource Axis change listener
     * @param event DataObject event
     * @param src data series
     * @param data data
     */
    onAxisChanged(event: string, src: DataSeries, data: object): this;
    /**
     * Gets Highlighted Bins
     */
    getHighlightedBins(): number[];
    /**
     * Highlights the selected area
     * @param rect area
     * @param reset un-highlights previously selected indices
     */
    highlightRange(rect: Point | Range, reset: boolean): void;
    /**
     * Highlights the selected indices
     * @param indices to be highlighted
     * @param reset un-highlights previously selected indices
     */
    highlightBins(indices: number[], reset: boolean): this;
    /**
     * Set Tools Options
     * See {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget#setToolsOptions} for details
     * @param options options
     */
    setToolsOptions(options?: object): this;
    /**
     * Load template
     * @param template template to be applied to the widget
     * @param registry registry
     */
    loadTemplate(template: string, registry?: Registry): void;
    /**
     * Save template
     * @param registry registry
     */
    saveTemplate(registry?: Registry): string;
    /**
     * Sets all the properties pertaining to this object
     * @param properties properties
     * @param properties.header JSON which defines header area
     * @param properties.header.title JSON which defines main title properties see {@link @int/geotoolkit/scene/shapes/Text.Text#setProperties}
     * @param properties.header.annotationsize height of header
     * @param properties.datasource DataSource
     * @param properties.autominmax are X min/max fixed (false) or given by datasource (true). DataSource has to exist
     * @param properties.data Array of data
     * @param properties.bins Number of bins
     * @param properties.binspacing bin spacing in percentage
     * @param properties.fillstyle Bins FillStyle. See {@link @int/geotoolkit/attributes/FillStyle.FillStyle#setProperties} for details.
     * @param properties.autogradient FillStyle autogradient
     * @param properties.linestyle Bins LineStyle. See {@link @int/geotoolkit/attributes/LineStyle.LineStyle} for details.
     * @param properties.frequencytype Frequency Type
     * @param properties.highlightcolor Color used to highlight bins
     * @param properties.accumulation JSON for accumulation curve.
     * @param properties.accumulation.visible Visibility of accumulation curve.
     * @param properties.accumulation.linestyle JSON for accumulation curve.
     * @param properties.x JSON which defines X-data.
     * @param properties.x.label JSON which defines X-label.
     * @param properties.x.label.text label text
     * @param properties.x.annotationsize height of X-annotation
     * @param properties.x.min Minimum X-Value to display X-data. If never set, will be min of [properties.x.data]
     * @param properties.x.max Maximum X-Value to display X-data. If never set, will be max of [properties.x.data]
     * @param properties.x.reversed Is the X-Axis reversed. If never set, will be true if [properties.x.max]<[properties.x.min]
     * @param properties.x.axisticks JSON which defines ticks data of the X-axis. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setProperties} for details
     * @param properties.x.gridticks JSON which defines vertical ticks data of the grid. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setProperties} for details
     * @param properties.x.tickgenerator deprecated (since 2020 (3.0)) a custom tick generator
     * @param properties.x.axistickgenerator a custom axis tick generator
     * @param properties.x.gridtickgenerator a custom grid tick generator
     * @param properties.x.preciselimits x axis precise limits
     * @param properties.y JSON which defines Y-data.
     * @param properties.y.label JSON which defines Y-label.
     * @param properties.y.label.text label text
     * @param properties.y.annotationsize width of Y-annotation
     * @param properties.y.annotationside specifies which side should have axes. By default 'both' means from left and right
     * @param properties.y.min Minimum Y-Value to display Y-data. If never set, will be min of [properties.y.data]
     * @param properties.y.max Maximum Y-Value to display Y-data. If never set, will be max of [properties.y.data]
     * @param properties.y.reversed Is the Y-Axis reversed. If never set, will be true if [properties.y.max]>[properties.y.min]
     * @param properties.y.axisticks JSON which defines ticks data of the Y-axis.
     * @param properties.y.gridticks JSON which defines horizontal ticks data of the grid.
     * @param properties.y.tickgenerator deprecated (since 2020 (3.0)) a custom tick generator
     * @param properties.y.axistickgenerator a custom axis tick generator
     * @param properties.y.gridtickgenerator a custom grid tick generator
     * @param properties.y.preciselimits y axis precise limits
     * @param properties.tools JSON which defines tools data. See {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget#setToolsOptions} for details
     */
    setProperties(properties?: object | { header?: object | { title?: any; annotationsize?: number; } ; datasource?: NumericalDataSeries | NumericalDataSeriesView; autominmax?: boolean; data?: number[]; bins?: number; binspacing?: number; fillstyle?: any | FillStyle; autogradient?: boolean; linestyle?: any | LineStyle; frequencytype?: FrequencyType | string; highlightcolor?: string; accumulation?: object | { visible?: boolean; linestyle?: LineStyle | string | any; } ; x?: object | { label?: object | { text?: string; } ; annotationsize?: number; min?: number; max?: number; reversed?: boolean; axisticks?: any; gridticks?: any; tickgenerator?: TickGenerator; axistickgenerator?: TickGenerator; gridtickgenerator?: TickGenerator; preciselimits?: boolean; } ; y?: object | { label?: object | { text?: string; } ; annotationsize?: number; annotationside?: string; min?: number; max?: number; reversed?: boolean; axisticks?: any; gridticks?: any; tickgenerator?: TickGenerator; axistickgenerator?: TickGenerator; gridtickgenerator?: TickGenerator; preciselimits?: boolean; } ; tools?: any; } ): this;
}
/**
 * Histogram Widget's Events enumerator
 */
export enum Events {
    /**
     * Event type fired when this models data has been updated
     */
    DataUpdated = 'dataUpdated'
}
