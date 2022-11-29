import {AnnotatedWidget} from './AnnotatedWidget';
import {LineStyle} from '../attributes/LineStyle';
import {Layer} from '../scene/Layer';
import {Rect} from '../util/Rect';
import {DataMode} from '../controls/shapes/BarChart';
import {Point} from '../util/Point';

/**
 * The barchart widget is an annotated widget that is specialized for bar charts representation
 * <p>
 * A bar chart is a chart that uses either horizontal or vertical bars to show comparisons among categories.
 * One axis of the chart shows the specific categories being compared, and the other axis represents a discrete value.
 * It uses {@link @int/geotoolkit/controls/shapes/BarChart.BarChart} internally
 * </p>
 * <p>
 * Barchart widget inherits from AnnotatedWidget, so it takes most of its functionality including all its tools.
 * The main way to configure and customize the widget is to use the different setData() and setOptions() functions
 * that provide a comprehensible way of changing the default look and feel of the widget.
 * <ul>
 * <li> setData() will pass through everything to the {@link @int/geotoolkit/controls/shapes/BarChart.BarChart}'s "setData" for the internal shape.</li>
 * <li> setOptions() will pass 'shape' on to {@link @int/geotoolkit/controls/shapes/BarChart.BarChart}'s "setOptions" for the internal shape options. Here we can set the two grid tickgenerators, reference line and take the AnnotatedWidgets values for annotations.
 * From the Shape, the Widget adds ReferenceLine, Axes, and Grids to the Barchart shape. </li>
 * </ul>
 * </p>
 * @example
 * ```javascript
 * // set the BarChart shape options
 * // Refer to {@link @int/geotoolkit/controls/shapes/BarChart.BarChart}'s setProperties for all the properties that can be set.
 * import {FillStyle} from '@int/geotoolkit/attributes/FillStyle';
 * import {LineStyle} from '@int/geotoolkit/attributes/LineStyle';
 * import {DataMode, BarMode} from '@int/geotoolkit/controls/shapes/BarChart';
 * import {BarChartWidget} from '@int/geotoolkit/widgets/BarChartWidget';
 * const options = {
 *   'shape': {
 *      //Setting line style and fill style for each bar item, keep in same order to data set
 *       'barstyles': [
 *          {
 *              'linestyles': new LineStyle('green')),
 *              'fillstyles': new FillStyle('green'))
 *          },
 *          {
 *              'linestyles': new LineStyle('gray')),
 *              'fillstyles': new FillStyle('gray'))
 *          }
 *       ],
 *       //Choosing bar mode
 *       'barmode': BarMode.Default,
 *     }
 * };
 * // Create the data
 * const data = {
 *   'mode': DataMode.Associative,
 *   'datasets': [
 *      { 'values': [15, 30, 6, 54] },
 *      { 'values': [8, 17, 10, 35] }
 *    ],
 *   'labels': ['Wylie', 'Potosi', 'Buffalo Gap', 'Clyde']
 * };
 * // Finally, create the BarChart widget using the options and data.
 * const widget = new BarChartWidget(options, data);
 * ```
 */
export class BarChartWidget extends AnnotatedWidget {
    /**
     * The barchart widget is an annotated widget that is specialized for bar charts representation
     * <p>
     * A bar chart is a chart that uses either horizontal or vertical bars to show comparisons among categories.
     * One axis of the chart shows the specific categories being compared, and the other axis represents a discrete value.
     * It uses {@link @int/geotoolkit/controls/shapes/BarChart.BarChart} internally
     * </p>
     * <p>
     * Barchart widget inherits from AnnotatedWidget, so it takes most of its functionality including all its tools.
     * The main way to configure and customize the widget is to use the different setData() and setOptions() functions
     * that provide a comprehensible way of changing the default look and feel of the widget.
     * <ul>
     * <li> setData() will pass through everything to the {@link @int/geotoolkit/controls/shapes/BarChart.BarChart}'s "setData" for the internal shape.</li>
     * <li> setOptions() will pass 'shape' on to {@link @int/geotoolkit/controls/shapes/BarChart.BarChart}'s "setOptions" for the internal shape options. Here we can set the two grid tickgenerators, reference line and take the AnnotatedWidgets values for annotations.
     * From the Shape, the Widget adds ReferenceLine, Axes, and Grids to the Barchart shape. </li>
     * </ul>
     * </p>
     * @param options widget options set
     * @param options.shape BarChart shape properties see {@link @int/geotoolkit/controls/shapes/BarChart.BarChart#setProperties}
     * @param options.referenceline reference line options set
     * @param options.referenceline.visible visibility flag
     * @param options.referenceline.value value to display reference line at
     * @param options.referenceline.linestyle reference line style
     * @param options.mirror enables bar chart mirroring
     * @param options.grid grid options set
     * @param options.grid.values JSON with tick options for the gridvalue tick generator. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setOptions}
     * @param options.grid.groups JSON with tick options for the gridgroup tick generator. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setOptions}
     * @param options.neatlimits enable automatic calculation of limits for value axis and gridlines
     * @param options.preciselimits option for neat limits calculates only step and hide edge ticks. It is applied only if neatlimits is set
     * @param options.minspan minimum span for neat limits in pixel between ticks
     * @param data data data (see "setData" API for detailed description)
     */
    constructor(options?: object | { shape?: any; referenceline?: object | { visible?: boolean; value?: number; linestyle?: LineStyle; } ; mirror?: boolean; grid?: object | { values?: any; groups?: any; } ; neatlimits?: boolean; preciselimits?: boolean; minspan?: boolean; } , data?: object);
    /**
     * Gets data layer
     */
    getDataLayer(): Layer;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bound of the node in the parent coordinates
     */
    setBounds(bounds: Rect | object): this;
    /**
     * set format handler for labels <p>
     * acceptable parameters for handler function:<br>
     * text {string}: current text that already fixed by value precision<br>
     * groupId {number}: the index of current data series<br>
     * itemId {number}: the index of the data in the current data series<br>
     * value {number}: raw value in data series
     * @example
     * ```javascript
     * // The example simply show how to control the text content by value
     * // For data series [[1,2,3][2,3,4]], the following example return '3+' when value is more than 2
     * widget.setFormatLabelHandler(
     *      (text, groupId, itemId, value) => {
     *          if(value > 2)
     *              return '3+';
     *          else return value;
     *      });
     * ```
     * @param handler format handler
     */
    setFormatLabelHandler(handler: Function): this;
    /**
     * Sets bar chart's data
     * @param data data object
     * @param data.append append/replace flag
     * @param data.mode Data mode for the barchart
     * @param data.datasets Array of Values for non-float and Array of Array(2) Values for float charts
     * @param data.labels array of group labels
     */
    setData(data?: object | { append?: boolean; mode?: DataMode | string; datasets?: any[]; labels?: string[] | null; } ): this;
    /**
     */
    getData(): any;
    /**
     * Gets value of sample
     * @param series series id
     * @param sample sample id
     */
    getValueAt(series: number, sample: number): number | any;
    /**
     * Updates the widget's configuration with the passed in configuration
     * @param options widget options set
     * @param options.shape BarChart shape properties see {@link @int/geotoolkit/controls/shapes/BarChart.BarChart#setProperties}
     * @param options.referenceline reference line options set
     * @param options.referenceline.visible visibility flag
     * @param options.referenceline.value value to display reference line at
     * @param options.referenceline.linestyle reference line style
     * @param options.mirror enables bar chart mirroring
     * @param options.grid grid options set
     * @param options.grid.values JSON with tick options for the gridvalue tick generator. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setOptions}
     * @param options.grid.groups JSON with tick options for the gridgroup tick generator. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setOptions}
     * @param options.neatlimits enable automatic calculation of limits for value axis and gridlines
     * @param options.preciselimits option for neat limits calculates only step and hide edge ticks. It is applied only if neatlimits is set
     * @param options.minspan minimum span for neat limits in pixel between ticks
     */
    setOptions(options?: object | { shape?: any; referenceline?: object | { visible?: boolean; value?: number; linestyle?: LineStyle; } ; mirror?: boolean; grid?: object | { values?: any; groups?: any; } ; neatlimits?: boolean; preciselimits?: boolean; minspan?: boolean; } ): this;
    /**
     * Highlight specified bars
     * @param bars array of {@link @int/geotoolkit/controls/data/SerieElementInfo.SerieElementInfo} bars to highlight
     * @param append append/replace flag
     */
    highlightBars(bars: any[], append?: boolean): this;
    /**
     * Select elements at specified canvas coordinates
     * @param x x-coordinate OR {x,y}-coordinates
     * @param y y-coordinate
     * @param highlight highlight selected elements
     */
    selectBarsAt(x: number | Point, y?: number, highlight?: boolean): any[];
    /**
     * Set data series visibility
     * @param series Visibility of series
     */
    setDataSeriesVisible(series: object[]): this;
    /**
     * Get data series visibility
     */
    getDataSeriesVisible(): object[];
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {shape: any; referenceline: {visible: boolean; value: number; linestyle: LineStyle}; mirror: boolean; grid: {values: any; groups: any}; neatlimits: boolean; preciselimits: boolean; minspan: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties widget properties set
     * @param properties.shape BarChart shape properties see {@link @int/geotoolkit/controls/shapes/BarChart.BarChart#setProperties}
     * @param properties.referenceline reference line properties set
     * @param properties.referenceline.visible visibility flag
     * @param properties.referenceline.value value to display reference line at
     * @param properties.referenceline.linestyle reference line style
     * @param properties.mirror enables bar chart mirroring
     * @param properties.grid grid properties set
     * @param properties.grid.values JSON with tick properties for the gridvalue tick generator. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setOptions}
     * @param properties.grid.groups JSON with tick properties for the gridgroup tick generator. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setOptions}
     * @param properties.neatlimits enable automatic calculation of limits for value axis and gridlines
     * @param properties.preciselimits option for neat limits calculates only step and hide edge ticks. It is applied only if neatlimits is set
     * @param properties.minspan minimum span for neat limits in pixel between ticks
     */
    setProperties(properties?: object | { shape?: any; referenceline?: object | { visible?: boolean; value?: number; linestyle?: LineStyle; } ; mirror?: boolean; grid?: object | { values?: any; groups?: any; } ; neatlimits?: boolean; preciselimits?: boolean; minspan?: boolean; } ): this;
}
