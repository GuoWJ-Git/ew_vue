import {LineStyle} from '../attributes/LineStyle';
import {FillStyle} from '../attributes/FillStyle';
import {BaseWidget} from './BaseWidget';
import {Group} from '../scene/Group';
import {Direction} from '../layout/HorizontalPriorityLayout';
import {LegendPosition as TimeseriesLegendPosition} from './timeseries/LegendPosition';
import {Format} from '../util/Format';
import {Orientation} from '../util/Orientation';
import {TickGenerator} from '../axis/TickGenerator';
import {ScrollBarType as TimeseriesScrollBarType} from './timeseries/ScrollBarType';
import {RgbaColor} from '../util/RgbaColor';
import {SymbolShape} from '../scene/shapes/SymbolShape';
import {TimeZone} from '../axis/TimeZone';
import {Locale} from '../util/Locale';
import {Rect} from '../util/Rect';
import {TimeSeriesObject} from './timeseries/TimeSeriesObject';
import {AbstractDataTable} from '../data/AbstractDataTable';
import {DataTableView} from '../data/DataTableView';
import {FillType as TimeseriesFillType} from './timeseries/FillType';
import {FillDirection as TimeseriesFillDirection} from './timeseries/FillDirection';
import {Range} from '../util/Range';
import {Point} from '../util/Point';
import {TextStyle} from '../attributes/TextStyle';
import {AnchorType} from '../util/AnchorType';
import {NodeOrder} from '../scene/CompositeNode';
import {TimeSeriesObjectGroup} from './timeseries/TimeSeriesObjectGroup';
import {HeaderComponent} from '../scene/exports/HeaderComponent';
import {FooterComponent} from '../scene/exports/FooterComponent';
import {SpeedCompression} from '../pdf/SpeedCompression';
import {EmbededFont} from '../pdf/PdfExport';
import {IWritable} from '../util/stream/IWritable';
import {Transformation} from '../util/Transformation';

/**
 * Callback for renderingOrder
 * @example
 * ```javascript
 * // To render bar with the smallest value first
 * widget.setOptions({
 *      'barmode': {
 *          'renderingorder': function (valueOrderPairs) {
 *              // valueOrderPairs = [{
 *              //     'order': 0,
 *              //     'value': 8,
 *              //     'height: 8,
 *              // }, {
 *              //     'order': 1,
 *              //     'value': 15,
 *              //     'height: 15,
 *              // }, {
 *              //     'order': 2,
 *              //     'value': 3,
 *              //     'height: 3,
 *              // }, {
 *              //     'order': 3,
 *              //     'value': 5,
 *              //     'height: 5,
 *              // }];
 *              return valueOrderPairs.sort(function (a, b) {
 *                  return b['value'] - a['value'];
 *              });
 *              // return array: [{
 *              //     'order': 2,
 *              //     'value': 3,
 *              //     'height: 3,
 *              // }, {
 *              //     'order': 3,
 *              //     'value': 5,
 *              //     'height: 5,
 *              // }, {
 *              //     'order': 0,
 *              //     'value': 8,
 *              //     'height: 8,
 *              // }, {
 *              //     'order': 1,
 *              //     'value': 15,
 *              //     'height: 15,
 *              // }];
 *          }
 *      }
 * });
 * ```
 */
export type barRenderingOrder = (valueOrderPairs: BarValueOrderPair[]) => BarValueOrderPair[];
/**
 * Callback for highlighting method
 * @example
 * ```javascript
 * widget.setOptions({
 *      'barmode': {
 *          'highlightingmethod': function (highlightBar, lineStyle, fillStyle) {
 *              lineStyles.setWidth(3);
 *              return {
 *                  'linestyle': lineStyle,
 *                  'fillstyle': fillStyle
 *              };
 *          }
 *     }
 * });
 * ```
 */
export type barHighlightingMethod = (highlightBar: object | { datapointindex: number; lineindex: number; } , linestyle: object | LineStyle, fillstyle: object | FillStyle) => BarHighlightingStyle;
/**
 * The time series widget plots data points horizontally along a time axis. It inherits from BaseWidget.
 * Curves are added to the widget by calling the addCurve() function:
 * <ul>
 * <li> name -- curve name </li>
 * <li> uri -- unique dataset id </li>
 * <li> data -- geotoolkit.data.DataTableView </li>
 * <li> properties //visual properties </li>
 * </ul>
 * insertCurve() function is used to insert a curve at a particular position or order.<br>
 * setVisibleRange() can be used to set the visiblemodellimits programmatically <br>
 * In addition to plotting the data, the widget also supports fills via the addFill() function and annotations via addAnnotation() and addAnnotationLine() functions.
 * <br>
 * Configuring the various options of the widget can be achieved by calling setOptions().<br>
 * Selection is handled in the application by using the onSelectionChanged event.
 * * Some of the default tools are available to support:
 * <ul>
 *  <li>Zoom</li>
 *  <li>Crosshair</li>
 *  <li>Rubberband</li>
 *  <li>Selection</li>
 *  <li>Panning</li>
 * </ul>
 * @example
 * ```javascript
 * import {Group} from '@int/geotoolkit/scene/Group';
 * import {Rect} from '@int/geotoolkit/util/Rect';
 * import {TimeSeriesWidget} from '@int/geotoolkit/widgets/TimeSeriesWidget';
 * // Initialize widget
 * const options = {
 *     'title': {
 *         'visible': false
 *     },
 *     'model': new Group()
 *         .setModelLimits(new Rect(startDate, 0, endDate, 1)),
 *     'curveaxis': {
 *         'visible': true,
 *         'autocoloraxis': true,
 *         'autocolorlabel': true,
 *         'titlevisible': true,
 *         'axiswidth': 30,
 *         'compact': true
 *     },
 *     'curvelimits': {
 *         'visible': false
 *     }
 * };
 * const widget = new TimeSeriesWidget(options);
 * // Add Data/Curve to the widget
 * widget.addCurve({
 *      'name': 'CALI',
 *      'uri': '//test//cali',
 *      'data': dataTableView,          // @int/geotoolkit/data/DataTableView
 *      'properties': {
 *          'autoscale': true,
 *          'axisautolabelrotation': true,   // curve properties can be modified here as well.
 *          'neatlimits': true,
 *          'unit': 'INS',
 *          'linestyle': {
 *              'color': 'blue',
 *              'width': 2
 *          }
 *      }
 *  });
 * ```
 */
export class TimeSeriesWidget extends BaseWidget {
    /**
     * The time series widget plots data points horizontally along a time axis. It inherits from BaseWidget.
     * Curves are added to the widget by calling the addCurve() function:
     * <ul>
     * <li> name -- curve name </li>
     * <li> uri -- unique dataset id </li>
     * <li> data -- geotoolkit.data.DataTableView </li>
     * <li> properties //visual properties </li>
     * </ul>
     * insertCurve() function is used to insert a curve at a particular position or order.<br>
     * setVisibleRange() can be used to set the visiblemodellimits programmatically <br>
     * In addition to plotting the data, the widget also supports fills via the addFill() function and annotations via addAnnotation() and addAnnotationLine() functions.
     * <br>
     * Configuring the various options of the widget can be achieved by calling setOptions().<br>
     * Selection is handled in the application by using the onSelectionChanged event.
     * * Some of the default tools are available to support:
     * <ul>
     *  <li>Zoom</li>
     *  <li>Crosshair</li>
     *  <li>Rubberband</li>
     *  <li>Selection</li>
     *  <li>Panning</li>
     * </ul>
     * @param options JSON containing widget options
     * @param options.model Timeseries' center model limits can be specified using this option
     * @param options.automodellimitsmode automodellimits mode
     * @param options.alignaxis align axis
     * @param options.margin array of margins of this widget [top, right, bottom, left]
     * @param options.title JSON which defines title area
     * @param options.title.visible visibility of title text
     * @param options.title.height height of title
     * @param options.title.text title text
     * @param options.title.font title text font
     * @param options.title.color title text color
     * @param options.title.centered centers title text
     * @param options.title.padding array of padding for title text
     * @param options.legends JSON which defines legends area
     * @param options.legends.direction direction of legends (left-to-right, right-to-left)
     * @param options.legends.visible visibility of legends area
     * @param options.legends.position Outside/Inside model
     * @param options.legends.alignwithcentermodel aligns the legendcontainer with the centermodel when positioned outside
     * @param options.legends.height legends area height
     * @param options.legends.width if positioned inside, container width
     * @param options.legends.margintext legend text margin left and right
     * @param options.legends.marginbottom legends area bottom margin (outside only)
     * @param options.legends.autocolorlabel legend's text label color
     * @param options.legends.legendoptions JSON which defines legend options
     * @param options.legends.legendoptions.formatter represents the legend number formatter.
     * @param options.legends.legendoptions.margintext margin text
     * @param options.legends.legendoptions.font font
     * @param options.legends.legendoptions.height height
     * @param options.legends.legendoptions.internalpadding internal padding
     * @param options.legends.legendoptions.fixedwidth fixed width
     * @param options.legends.legendoptions.labelcolor label color
     * @param options.legends.legendoptions.linestyle linestyle
     * @param options.legends.legendoptions.fillstyle fillstyle
     * @param options.lastupdatedate JSON which defines last update date area
     * @param options.lastupdatedate.visible visibility of the last update date area
     * @param options.lastupdatedate.followcursor false means the last data time will be displayed and true means the cursor position data time will be displayed
     * @param options.lastupdatedate.font last update date text font
     * @param options.lastupdatedate.color last update date text color
     * @param options.lastupdatedate.formatter visible range text formatter
     * @param options.curvelimits JSON which defines curve limits area
     * @param options.curvelimits.visible visibility of curve limits area
     * @param options.curvelimits.margin curve limits area margin (top and bottom)
     * @param options.curvelimits.width width for each curve limits column
     * @param options.curvelimits.font curve limits text font
     * @param options.curveaxis JSON which defines curve axis
     * @param options.curveaxis.visible visibility of curve axis
     * @param options.curveaxis.autocoloraxis synchronize axis color with curve color
     * @param options.curveaxis.autocolorlabel synchronize axis and label color with curve color
     * @param options.curveaxis.titlevisible curve axis label visibility
     * @param options.curveaxis.textcolor curve axis label color
     * @param options.curveaxis.axiswidth curve axis and text width
     * @param options.curveaxis.font curve axis text font
     * @param options.curveaxis.labelorientation rotation of the curveaxis labels; can be automatic, vertical, horizontal
     * @param options.curveaxis.tickgeneratoroptions JSON which defines tick generator options
     * @param options.curveaxis.tickgeneratoroptions.edge edge
     * @param options.curveaxis.tickgeneratoroptions.edge.tickvisible edge tick visibility
     * @param options.curveaxis.tickgeneratoroptions.edge.labelvisible edge label visibility
     * @param options.curveaxis.tickgeneratoroptions.major major
     * @param options.curveaxis.tickgeneratoroptions.major.tickvisible major tick visibility
     * @param options.curveaxis.tickgeneratoroptions.major.labelvisible major label visibility
     * @param options.curveaxis.tickgeneratoroptions.minor minor
     * @param options.curveaxis.tickgeneratoroptions.minor.tickvisible minor tick visibility
     * @param options.curveaxis.tickgeneratoroptions.minor.labelvisible minor label visibility
     * @param options.curvesymbol JSON which defines curve highlighting symbol
     * @param options.curvesymbol.visible visibility of curve highlighting symbol
     * @param options.curvesymbol.width curve highlighting symbol width
     * @param options.curvesymbol.height curve highlighting symbol height
     * @param options.curvesymbol.type curve highlighting symbol type, default is circle and available values are cross, diamond, plus, square, star and triangle
     * @param options.cursor cursor tool options
     * @param options.cursor.linestyle defines linestyle for timeseries cursor tool
     * @param options.modelgrid JSON which contains 'horizontaltickgenerator' and 'verticaltickgenerator'
     * @param options.modelgrid.horizontaltickgenerator Horizontal tickgenerator for the model grid. (Horizontal reference curve takes precedence over this option). Default is an instance of geotoolkit.axis.AdaptiveTickGenerator
     * @param options.modelgrid.verticaltickgenerator Vertical tickgenerator for the model grid (default visibility of ticks is false). Default is an instance of geotoolkit.axis.AdaptiveDateTimeTickGenerator
     * @param options.modelgrid.horizontalvisibility JSON defining horizontal gridline visibility
     * @param options.modelgrid.verticalvisibility JSON defining vertical gridline visibility
     * @param options.modelaxis JSON which defines axis inside model
     * @param options.modelaxis.visible visiblility of the axis inside model
     * @param options.modelaxis.tickgenerator tick generator for the axis inside model
     * @param options.modelaxis.baselinestyle base linestyle for the model axis
     * @param options.southaxis JSON which defines south axis
     * @param options.southaxis.visible visibility of south axis
     * @param options.southaxis.height south axis height
     * @param options.southaxis.font south axis label font
     * @param options.southaxis.color south axis label color
     * @param options.southaxis.tickgenerator tick generator for south axis. Default is an instance of geotoolkit.axis.AdaptiveDateTimeTickGenerator
     * @param options.visiblerange JSON which defines visible range area
     * @param options.visiblerange.visible visibility of visible range area
     * @param options.visiblerange.height visible range area height
     * @param options.visiblerange.font visible range text font
     * @param options.visiblerange.color visible range text color
     * @param options.visiblerange.formatter visible range text formatter
     * @param options.intervalbuttons JSON which defines the interval buttons
     * @param options.intervalbuttons.visible visibility of the interval buttons
     * @param options.intervalbuttons.intervals JSON which defines the text and scale value of each interval button
     * @param options.scrolltonowbutton JSON which defines the now button
     * @param options.scrolltonowbutton.visible visibility of the now button
     * @param options.scrollbar JSON which defines scroll bar area
     * @param options.scrollbar.visible visibility of scroll bar area
     * @param options.scrollbar.type scroll type or className. for className use {geotoolkit.controls.tools.scroll.ScrollFactory#registerScrollbar} first
     * @param options.scrollbar.height scroll bar area height
     * @param options.scrollbar.options Additional options to use for scrollbar (this depends on the options the specific scrollbar accepts)
     * @param options.scrollbar.options.font scroll bar text font
     * @param options.scrollbar.options.color scroll bar text color
     * @param options.scrollbar.options.tickgenerator tick generator for scroll bar
     * @param options.scrollbar.options.formatter scroll bar text formatter
     * @param options.tooltips json defining tooltips
     * @param options.tooltips.visible tooltip visibility
     * @param options.tooltips.linestyle linestyle of tooltip box
     * @param options.tooltips.fillstyle fillstyle of tooltip box
     * @param options.tooltips.symbollinestyle border linestyle of tooltip symbol
     * @param options.tooltips.selectionradius radius of tooltip selection visibility
     * @param options.tooltips.tooltipoptions JSON which defines tooltip options
     * @param options.tooltips.tooltipoptions.formatter represents the tooltip number formatter.
     * @param options.tooltips.tooltipoptions.margintext margin text
     * @param options.tooltips.tooltipoptions.font font
     * @param options.tooltips.tooltipoptions.symbolsize symbol size
     * @param options.tooltips.tooltipoptions.internalpadding internal padding
     * @param options.tooltips.tooltipoptions.externalpadding external padding
     * @param options.tooltips.tooltipoptions.linestyle linestyle
     * @param options.tooltips.tooltipoptions.fillstyle fillstyle
     * @param options.tooltips.tooltipoptions.fixedwidth fixed width
     * @param options.tooltips.tooltipoptions.nanvisibility nan visibility
     * @param options.tooltips.tooltipoptions.formatdatahandler optional handler to prepare text, symbol and value
     * @param options.tooltips.tooltipoptions.index index options
     * @param options.tooltips.tooltipoptions.index.visible visibility of the index tooltip
     * @param options.tooltips.tooltipoptions.index.textcolor text color
     * @param options.tooltips.tooltipoptions.index.symbol symbol shape
     * @param options.tooltips.tooltipoptions.index.name name of the index
     * @param options.tooltips.tooltipoptions.index.indextext index text
     * @param options.tooltips.tooltipoptions.index.unittext index unit
     * @param options.viewcache enable viewcache
     * @param options.cursorselectionlimit Threshold distance indevice space, from vertical cursor line to show symbol, update legend and show tooltip
     * @param options.timezone UTC or local time
     * @param options.selectionstrategy selection strategy to set
     * @param options.stack Stack TimesSeriesWidget settings
     * @param options.stack.enabled True to enable time series stack area mode, false otherwise
     * @param options.stack.fillstyles Stack time series fill styles, key of each fill style is curve id
     * @param options.percent Percent TimesSeriesWidget settings
     * @param options.percent.enabled True to enable time series percent mode, false otherwise
     * @param options.percent.fillstyles Percent mode time series fill styles, key of each fill style is curve id
     * @param options.percent.tooltip Tooltip option for percentage mode
     * @param options.percent.tooltip.showoriginalvalue True to show original value along side with percentage
     * @param options.barmode Options for bar mode
     * @param options.barmode.renderingorder Determine rendering order of
     * each bar. By default, bars will be rendered in the order of bar series when it was added
     * @param options.barmode.highlightingmethod How bars are highlighted
     * @param options.barmode.barvaluevisibility Bar values visible distance in device space of TimeSeriesBar
     */
    constructor(options?: object | { model?: Group; automodellimitsmode?: boolean; alignaxis?: boolean; margin?: number[]; title?: object | { visible?: boolean; height?: number; text?: string; font?: string; color?: string; centered?: boolean; padding?: number[]; } ; legends?: object | { direction?: Direction; visible?: boolean; position?: TimeseriesLegendPosition; alignwithcentermodel?: boolean; height?: number; width?: number; margintext?: number; marginbottom?: number; autocolorlabel?: boolean; legendoptions?: object | { formatter?: Format; margintext?: number; font?: string; height?: number; internalpadding?: number; fixedwidth?: number; labelcolor?: string; linestyle?: LineStyle; fillstyle?: FillStyle; } ; } ; lastupdatedate?: object | { visible?: boolean; followcursor?: boolean; font?: string; color?: string; formatter?: string | Function; } ; curvelimits?: object | { visible?: boolean; margin?: number; width?: number; font?: string; } ; curveaxis?: object | { visible?: boolean; autocoloraxis?: boolean; autocolorlabel?: boolean; titlevisible?: boolean; textcolor?: string; axiswidth?: number; font?: string; labelorientation?: string | Orientation; tickgeneratoroptions?: object | { edge?: object | { tickvisible?: boolean; labelvisible?: boolean; } ; major?: object | { tickvisible?: boolean; labelvisible?: boolean; } ; minor?: object | { tickvisible?: boolean; labelvisible?: boolean; } ; } ; } ; curvesymbol?: object | { visible?: boolean; width?: number; height?: number; type?: string; } ; cursor?: object | { linestyle?: LineStyle; } ; modelgrid?: object | { horizontaltickgenerator?: TickGenerator; verticaltickgenerator?: TickGenerator; horizontalvisibility?: object; verticalvisibility?: object; } ; modelaxis?: object | { visible?: boolean; tickgenerator?: TickGenerator; baselinestyle?: LineStyle; } ; southaxis?: object | { visible?: boolean; height?: number; font?: string; color?: string; tickgenerator?: TickGenerator; } ; visiblerange?: object | { visible?: boolean; height?: number; font?: string; color?: string; formatter?: string | Function; } ; intervalbuttons?: object | { visible?: boolean; intervals?: object; } ; scrolltonowbutton?: object | { visible?: boolean; } ; scrollbar?: object | { visible?: boolean; type?: TimeseriesScrollBarType | string; height?: number; options?: object | { font?: string; color?: string; tickgenerator?: TickGenerator; formatter?: string | Function; } ; } ; tooltips?: object | { visible?: boolean; linestyle?: LineStyle; fillstyle?: FillStyle; symbollinestyle?: LineStyle; selectionradius?: number; tooltipoptions?: object | { formatter?: Format; margintext?: number; font?: string; symbolsize?: number; internalpadding?: number; externalpadding?: number; linestyle?: LineStyle; fillstyle?: FillStyle; fixedwidth?: number | any; nanvisibility?: boolean; formatdatahandler?: Function; index?: object | { visible?: boolean; textcolor?: string | RgbaColor; symbol?: SymbolShape; name?: string; indextext?: string; unittext?: string; } ; } ; } ; viewcache?: boolean; cursorselectionlimit?: number; timezone?: TimeZone; selectionstrategy?: Function; stack?: object | { enabled?: boolean; fillstyles?: object; } ; percent?: object | { enabled?: boolean; fillstyles?: object; tooltip?: object | { showoriginalvalue?: boolean; } ; } ; barmode?: object | { renderingorder?: barRenderingOrder; highlightingmethod?: barHighlightingMethod; barvaluevisibility?: boolean | number; } ; } );
    /**
     * Sets locale
     * @param locale locale
     */
    setLocale(locale: Locale): this;
    /**
     * Returns Current Locale
     */
    getLocale(): Locale;
    /**
     * Initializes layout of this widget
     */
    initializeLayout(): Group;
    /**
     * Initializes default tools used by this widget
     */
    protected initializeTools(): this;
    /**
     * Select Curve By ID. The widget will trigger the event TimeSeriesWidget.Events.onSelectionChanged, if the selection has changed.
     * @param id (null to deselect)
     */
    selectCurveById(id: string): void;
    /**
     * Gets properties from this widget (same as getOptions)
     */
    getProperties(): {model: Group; modeloffsets: {left: string | number; right: string | number}; automodellimitsmode: boolean; alignaxis: boolean; margin: number[]; title: {visible: boolean; height: number; text: string; font: string; color: string; centered: boolean; padding: number[]}; legends: {direction: Direction; visible: boolean; position: TimeseriesLegendPosition; alignwithcentermodel: boolean; height: number; width: number; margintext: number; marginbottom: number; autocolorlabel: boolean; legendoptions: {formatter: Format; margintext: number; font: string; height: number; internalpadding: number; fixedwidth: number; labelcolor: string; linestyle: LineStyle; fillstyle: FillStyle}}; lastupdatedate: {visible: boolean; followcursor: boolean; font: string; color: string; formatter: string | Function}; curvelimits: {visible: boolean; margin: number; width: number; font: string}; curveaxis: {visible: boolean; autocoloraxis: boolean; autocolorlabel: boolean; titlevisible: boolean; textcolor: string; axiswidth: number; font: string; labelorientation: string | Orientation; tickgeneratoroptions: {edge: {tickvisible: boolean; labelvisible: boolean}; major: {tickvisible: boolean; labelvisible: boolean}; minor: {tickvisible: boolean; labelvisible: boolean}}}; curvesymbol: {visible: boolean; width: number; height: number; type: string}; cursor: {linestyle: LineStyle}; modelgrid: {horizontaltickgenerator: TickGenerator; verticaltickgenerator: TickGenerator; horizontalvisibility: object; verticalvisibility: object}; modelaxis: {visible: boolean; tickgenerator: TickGenerator; baselinestyle: LineStyle}; southaxis: {visible: boolean; height: number; font: string; color: string; tickgenerator: TickGenerator}; visiblerange: {visible: boolean; height: number; font: string; color: string; formatter: string | Function}; intervalbuttons: {visible: boolean; intervals: object}; scrolltonowbutton: {visible: boolean}; scrollbar: {visible: boolean; type: TimeseriesScrollBarType | string; height: number; options: {font: string; color: string; tickgenerator: TickGenerator; formatter: string | Function}}; tooltips: {visible: boolean; linestyle: LineStyle; fillstyle: FillStyle; symbollinestyle: LineStyle; selectionradius: number; tooltipoptions: {formatter: Format; margintext: number; font: string; symbolsize: number; internalpadding: number; externalpadding: number; linestyle: LineStyle; fillstyle: FillStyle; fixedwidth: number | any; nanvisibility: boolean; formatdatahandler: Function; index: {visible: boolean; textcolor: string | RgbaColor; symbol: SymbolShape; name: string; indextext: string; unittext: string}}}; viewcache: boolean; cursorselectionlimit: number; timezone: TimeZone; selectionstrategy: Function; stack: {enabled: boolean; fillstyles: object}; percent: {enabled: boolean; fillstyles: object; tooltip: {showoriginalvalue: boolean}}; barmode: {renderingorder: barRenderingOrder; highlightingmethod: barHighlightingMethod; barvaluevisibility: boolean | number}} | any;
    /**
     * Gets options from this widget
     */
    getOptions(): object | any;
    /**
     * Sets Properties
     * @param properties JSON containing widget options
     * @param properties.model Timeseries' center model limits can be specified using this option
     * @param properties.modeloffsets Timeseries' center model offsets
     * @param properties.modeloffsets.left Timeseries' center model left offset
     * @param properties.modeloffsets.right Timeseries' center model right offset
     * @param properties.automodellimitsmode automodellimits mode
     * @param properties.alignaxis align axis
     * @param properties.margin array of margins of this widget [top, right, bottom, left]
     * @param properties.title JSON which defines title area
     * @param properties.title.visible visibility of title text
     * @param properties.title.height height of title
     * @param properties.title.text title text
     * @param properties.title.font title text font
     * @param properties.title.color title text color
     * @param properties.title.centered centers title text
     * @param properties.title.padding array of padding for title text
     * @param properties.legends JSON which defines legends area
     * @param properties.legends.direction direction of legends (left-to-right, right-to-left)
     * @param properties.legends.visible visibility of legends area
     * @param properties.legends.position Outside/Inside model
     * @param properties.legends.alignwithcentermodel aligns the legendcontainer with the centermodel when positioned outside
     * @param properties.legends.height legends area height
     * @param properties.legends.width if positioned inside, container width
     * @param properties.legends.margintext legend text margin left and right
     * @param properties.legends.marginbottom legends area bottom margin (outside only)
     * @param properties.legends.autocolorlabel legend's text label color
     * @param properties.legends.legendoptions JSON which defines legend options
     * @param properties.legends.legendoptions.formatter represents the legend number formatter.
     * @param properties.legends.legendoptions.margintext margin text
     * @param properties.legends.legendoptions.font font
     * @param properties.legends.legendoptions.height height
     * @param properties.legends.legendoptions.internalpadding internal padding
     * @param properties.legends.legendoptions.fixedwidth fixed width
     * @param properties.legends.legendoptions.labelcolor label color
     * @param properties.legends.legendoptions.linestyle linestyle
     * @param properties.legends.legendoptions.fillstyle fillstyle
     * @param properties.lastupdatedate JSON which defines last update date area
     * @param properties.lastupdatedate.visible visibility of the last update date area
     * @param properties.lastupdatedate.followcursor false means the last data time will be displayed and true means the cursor position data time will be displayed
     * @param properties.lastupdatedate.font last update date text font
     * @param properties.lastupdatedate.color last update date text color
     * @param properties.lastupdatedate.formatter visible range text formatter
     * @param properties.curvelimits JSON which defines curve limits area
     * @param properties.curvelimits.visible visibility of curve limits area
     * @param properties.curvelimits.margin curve limits area margin (top and bottom)
     * @param properties.curvelimits.width width for each curve limits column
     * @param properties.curvelimits.font curve limits text font
     * @param properties.curveaxis JSON which defines curve axis
     * @param properties.curveaxis.visible visibility of curve axis
     * @param properties.curveaxis.autocoloraxis synchronize axis color with curve color
     * @param properties.curveaxis.autocolorlabel synchronize axis and label color with curve color
     * @param properties.curveaxis.titlevisible curve axis label visibility
     * @param properties.curveaxis.textcolor curve axis label color
     * @param properties.curveaxis.axiswidth curve axis and text width
     * @param properties.curveaxis.font curve axis text font
     * @param properties.curveaxis.labelorientation rotation of the curveaxis labels; can be automatic, vertical, horizontal
     * @param properties.curveaxis.tickgeneratoroptions JSON which defines tick generator options
     * @param properties.curveaxis.tickgeneratoroptions.edge edge
     * @param properties.curveaxis.tickgeneratoroptions.edge.tickvisible edge tick visibility
     * @param properties.curveaxis.tickgeneratoroptions.edge.labelvisible edge label visibility
     * @param properties.curveaxis.tickgeneratoroptions.major major
     * @param properties.curveaxis.tickgeneratoroptions.major.tickvisible major tick visibility
     * @param properties.curveaxis.tickgeneratoroptions.major.labelvisible major label visibility
     * @param properties.curveaxis.tickgeneratoroptions.minor minor
     * @param properties.curveaxis.tickgeneratoroptions.minor.tickvisible minor tick visibility
     * @param properties.curveaxis.tickgeneratoroptions.minor.labelvisible minor label visibility
     * @param properties.curvesymbol JSON which defines curve highlighting symbol
     * @param properties.curvesymbol.visible visibility of curve highlighting symbol
     * @param properties.curvesymbol.width curve highlighting symbol width
     * @param properties.curvesymbol.height curve highlighting symbol height
     * @param properties.curvesymbol.type curve highlighting symbol type, default is circle and available values are cross, diamond, plus, square, star and triangle
     * @param properties.cursor cursor tool options
     * @param properties.cursor.linestyle defines linestyle for timeseries cursor tool
     * @param properties.modelgrid JSON which contains 'horizontaltickgenerator' and 'verticaltickgenerator'
     * @param properties.modelgrid.horizontaltickgenerator Horizontal tickgenerator for the model grid. (Horizontal reference curve takes precedence over this option). Default is an instance of geotoolkit.axis.AdaptiveTickGenerator
     * @param properties.modelgrid.verticaltickgenerator Vertical tickgenerator for the model grid (default visibility of ticks is false). Default is an instance of geotoolkit.axis.AdaptiveDateTimeTickGenerator
     * @param properties.modelgrid.horizontalvisibility JSON defining horizontal gridline visibility
     * @param properties.modelgrid.verticalvisibility JSON defining vertical gridline visibility
     * @param properties.modelaxis JSON which defines axis inside model
     * @param properties.modelaxis.visible visiblility of the axis inside model
     * @param properties.modelaxis.tickgenerator tick generator for the axis inside model
     * @param properties.modelaxis.baselinestyle base linestyle for the model axis
     * @param properties.southaxis JSON which defines south axis
     * @param properties.southaxis.visible visibility of south axis
     * @param properties.southaxis.height south axis height
     * @param properties.southaxis.font south axis label font
     * @param properties.southaxis.color south axis label color
     * @param properties.southaxis.tickgenerator tick generator for south axis. Default is an instance of geotoolkit.axis.AdaptiveDateTimeTickGenerator
     * @param properties.visiblerange JSON which defines visible range area
     * @param properties.visiblerange.visible visibility of visible range area
     * @param properties.visiblerange.height visible range area height
     * @param properties.visiblerange.font visible range text font
     * @param properties.visiblerange.color visible range text color
     * @param properties.visiblerange.formatter visible range text formatter
     * @param properties.intervalbuttons JSON which defines the interval buttons
     * @param properties.intervalbuttons.visible visibility of the interval buttons
     * @param properties.intervalbuttons.intervals JSON which defines the text and scale value of each interval button
     * @param properties.scrolltonowbutton JSON which defines the now button
     * @param properties.scrolltonowbutton.visible visibility of the now button
     * @param properties.scrollbar JSON which defines scroll bar area
     * @param properties.scrollbar.visible visibility of scroll bar area
     * @param properties.scrollbar.type scroll type or className. for className use {geotoolkit.controls.tools.scroll.ScrollFactory#registerScrollbar} first
     * @param properties.scrollbar.height scroll bar area height
     * @param properties.scrollbar.options Additional options to use for scrollbar (this depends on the options the specific scrollbar accepts)
     * @param properties.scrollbar.options.font scroll bar text font
     * @param properties.scrollbar.options.color scroll bar text color
     * @param properties.scrollbar.options.tickgenerator tick generator for scroll bar
     * @param properties.scrollbar.options.formatter scroll bar text formatter
     * @param properties.tooltips json defining tooltips
     * @param properties.tooltips.visible tooltip visibility
     * @param properties.tooltips.linestyle linestyle of tooltip box
     * @param properties.tooltips.fillstyle fillstyle of tooltip box
     * @param properties.tooltips.symbollinestyle border linestyle of tooltip symbol
     * @param properties.tooltips.selectionradius radius of tooltip selection visibility
     * @param properties.tooltips.tooltipoptions JSON which defines tooltip options
     * @param properties.tooltips.tooltipoptions.formatter represents the tooltip number formatter.
     * @param properties.tooltips.tooltipoptions.margintext margin text
     * @param properties.tooltips.tooltipoptions.font font
     * @param properties.tooltips.tooltipoptions.symbolsize symbol size
     * @param properties.tooltips.tooltipoptions.internalpadding internal padding
     * @param properties.tooltips.tooltipoptions.externalpadding external padding
     * @param properties.tooltips.tooltipoptions.linestyle linestyle
     * @param properties.tooltips.tooltipoptions.fillstyle fillstyle
     * @param properties.tooltips.tooltipoptions.fixedwidth fixed width
     * @param properties.tooltips.tooltipoptions.nanvisibility nan visibility
     * @param properties.tooltips.tooltipoptions.formatdatahandler optional handler to prepare text, symbol and value
     * @param properties.tooltips.tooltipoptions.index index options
     * @param properties.tooltips.tooltipoptions.index.visible visibility of the index tooltip
     * @param properties.tooltips.tooltipoptions.index.textcolor text color
     * @param properties.tooltips.tooltipoptions.index.symbol symbol shape
     * @param properties.tooltips.tooltipoptions.index.name name of the index
     * @param properties.tooltips.tooltipoptions.index.indextext index text
     * @param properties.tooltips.tooltipoptions.index.unittext index unit
     * @param properties.viewcache enable viewcache
     * @param properties.cursorselectionlimit Threshold distance indevice space, from vertical cursor line to show symbol, update legend and show tooltip
     * @param properties.timezone UTC or local time
     * @param properties.selectionstrategy selection strategy to set
     * @param properties.stack Stack TimesSeriesWidget settings
     * @param properties.stack.enabled True to enable time series stack area mode, false otherwise
     * @param properties.stack.fillstyles Stack time series fill styles, key of each fill style is curve id
     * @param properties.percent Percent TimesSeriesWidget settings
     * @param properties.percent.enabled True to enable time series percent mode, false otherwise
     * @param properties.percent.fillstyles Percent mode time series fill styles, key of each fill style is curve id
     * @param properties.percent.tooltip Tooltip option for percentage mode
     * @param properties.percent.tooltip.showoriginalvalue True to show original value along side with percentage
     * @param properties.barmode Options for bar mode
     * @param properties.barmode.renderingorder Determine rendering order of
     * each bar. By default, bars will be rendered in the order of bar series when it was added
     * @param properties.barmode.highlightingmethod How bars are highlighted
     * @param properties.barmode.barvaluevisibility Bar values visible distance in device space of TimeSeriesBar
     */
    setProperties(properties: object | { model?: Group; modeloffsets?: object | { left?: string | number; right?: string | number; }  | string | number; automodellimitsmode?: boolean; alignaxis?: boolean; margin?: number[]; title?: object | { visible?: boolean; height?: number; text?: string; font?: string; color?: string; centered?: boolean; padding?: number[]; } ; legends?: object | { direction?: Direction; visible?: boolean; position?: TimeseriesLegendPosition; alignwithcentermodel?: boolean; height?: number; width?: number; margintext?: number; marginbottom?: number; autocolorlabel?: boolean; legendoptions?: object | { formatter?: Format; margintext?: number; font?: string; height?: number; internalpadding?: number; fixedwidth?: number; labelcolor?: string; linestyle?: LineStyle; fillstyle?: FillStyle; } ; } ; lastupdatedate?: object | { visible?: boolean; followcursor?: boolean; font?: string; color?: string; formatter?: string | Function; } ; curvelimits?: object | { visible?: boolean; margin?: number; width?: number; font?: string; } ; curveaxis?: object | { visible?: boolean; autocoloraxis?: boolean; autocolorlabel?: boolean; titlevisible?: boolean; textcolor?: string; axiswidth?: number; font?: string; labelorientation?: string | Orientation; tickgeneratoroptions?: object | { edge?: object | { tickvisible?: boolean; labelvisible?: boolean; } ; major?: object | { tickvisible?: boolean; labelvisible?: boolean; } ; minor?: object | { tickvisible?: boolean; labelvisible?: boolean; } ; } ; } ; curvesymbol?: object | { visible?: boolean; width?: number; height?: number; type?: string; } ; cursor?: object | { linestyle?: LineStyle; } ; modelgrid?: object | { horizontaltickgenerator?: TickGenerator; verticaltickgenerator?: TickGenerator; horizontalvisibility?: object; verticalvisibility?: object; } ; modelaxis?: object | { visible?: boolean; tickgenerator?: TickGenerator; baselinestyle?: LineStyle; } ; southaxis?: object | { visible?: boolean; height?: number; font?: string; color?: string; tickgenerator?: TickGenerator; } ; visiblerange?: object | { visible?: boolean; height?: number; font?: string; color?: string; formatter?: string | Function; } ; intervalbuttons?: object | { visible?: boolean; intervals?: object; } ; scrolltonowbutton?: object | { visible?: boolean; } ; scrollbar?: object | { visible?: boolean; type?: TimeseriesScrollBarType | string; height?: number; options?: object | { font?: string; color?: string; tickgenerator?: TickGenerator; formatter?: string | Function; } ; } ; tooltips?: object | { visible?: boolean; linestyle?: LineStyle; fillstyle?: FillStyle; symbollinestyle?: LineStyle; selectionradius?: number; tooltipoptions?: object | { formatter?: Format; margintext?: number; font?: string; symbolsize?: number; internalpadding?: number; externalpadding?: number; linestyle?: LineStyle; fillstyle?: FillStyle; fixedwidth?: number | any; nanvisibility?: boolean; formatdatahandler?: Function; index?: object | { visible?: boolean; textcolor?: string | RgbaColor; symbol?: SymbolShape; name?: string; indextext?: string; unittext?: string; } ; } ; } ; viewcache?: boolean; cursorselectionlimit?: number; timezone?: TimeZone; selectionstrategy?: Function; stack?: object | { enabled?: boolean; fillstyles?: object; } ; percent?: object | { enabled?: boolean; fillstyles?: object; tooltip?: object | { showoriginalvalue?: boolean; } ; } ; barmode?: object | { renderingorder?: barRenderingOrder; highlightingmethod?: barHighlightingMethod; barvaluevisibility?: boolean | number; } ; } ): this;
    /**
     * Sets options
     * @example
     * ```javascript
     * // To configure margins/white space in the canvas
     * widget.setOptions({
     *   // [top, right, bottom, left]
     *   'margin': [0, 0, 0, 0]
     * });
     * ```
     * @example
     * ```javascript
     * widget.setOptions({'selectionstrategy': (widget, newSelection, oldSelection) => { ... }});
     * ```
     * @example
     * ```javascript
     * // To format tooltip data
     * widget.setOptions({
     *       'tooltips': {
     *           'tooltipoptions': {
     *               'formatdatahandler': (data) => (
     *                   {
     *                       'name': data['name'],
     *                       'symbol': data['symbol'],
     *                       'valuetext': data['valuetext'],
     *                       'unittext':  data['id'] === 'Delta' ? ' ft' + ' degF' : data['unittext']
     *                   }}
     *               }
     *           }
     *       }
     *   });
     * ```
     * @param options JSON containing widget options
     * @param options.bounds bounds of the current widget
     * @param options.model Timeseries' center model limits can be specified using this option
     * @param options.modeloffsets Timeseries' center model offsets
     * @param options.modeloffsets.left Timeseries' center model left offset
     * @param options.modeloffsets.right Timeseries' center model right offset
     * @param options.automodellimitsmode automodellimits mode
     * @param options.alignaxis align axis
     * @param options.margin array of margins of this widget [top, right, bottom, left]
     * @param options.title JSON which defines title area
     * @param options.title.visible visibility of title text
     * @param options.title.height height of title
     * @param options.title.text title text
     * @param options.title.font title text font
     * @param options.title.color title text color
     * @param options.title.centered centers title text
     * @param options.title.padding array of padding for title text
     * @param options.legends JSON which defines legends area
     * @param options.legends.direction direction of legends (left-to-right, right-to-left)
     * @param options.legends.visible visibility of legends area
     * @param options.legends.position Outside/Inside model
     * @param options.legends.alignwithcentermodel aligns the legendcontainer with the centermodel when positioned outside
     * @param options.legends.height legends area height
     * @param options.legends.width if positioned inside, container width
     * @param options.legends.margintext legend text margin left and right
     * @param options.legends.marginbottom legends area bottom margin (outside only)
     * @param options.legends.autocolorlabel legend's text label color
     * @param options.legends.legendoptions JSON which defines legend options
     * @param options.legends.legendoptions.formatter represents the legend number formatter.
     * @param options.legends.legendoptions.margintext margin text
     * @param options.legends.legendoptions.font font
     * @param options.legends.legendoptions.height height
     * @param options.legends.legendoptions.internalpadding internal padding
     * @param options.legends.legendoptions.fixedwidth fixed width
     * @param options.legends.legendoptions.labelcolor label color
     * @param options.legends.legendoptions.linestyle linestyle
     * @param options.legends.legendoptions.fillstyle fillstyle
     * @param options.lastupdatedate JSON which defines last update date area
     * @param options.lastupdatedate.visible visibility of the last update date area
     * @param options.lastupdatedate.followcursor false means the last data time will be displayed and true means the cursor position data time will be displayed
     * @param options.lastupdatedate.font last update date text font
     * @param options.lastupdatedate.color last update date text color
     * @param options.lastupdatedate.formatter visible range text formatter
     * @param options.curvelimits JSON which defines curve limits area
     * @param options.curvelimits.visible visibility of curve limits area
     * @param options.curvelimits.margin curve limits area margin (top and bottom)
     * @param options.curvelimits.width width for each curve limits column
     * @param options.curvelimits.font curve limits text font
     * @param options.curveaxis JSON which defines curve axis
     * @param options.curveaxis.visible visibility of curve axis
     * @param options.curveaxis.autocoloraxise synchronize axis color with curve color
     * @param options.curveaxis.autocolorlabel synchronize axis and label color with curve color
     * @param options.curveaxis.titlevisible curve axis label visibility
     * @param options.curveaxis.textcolor curve axis label color
     * @param options.curveaxis.axiswidth curve axis and text width
     * @param options.curveaxis.font curve axis text font
     * @param options.curveaxis.labelorientation rotation of the curveaxis labels; can be automatic, vertical, horizontal
     * @param options.curveaxis.tickgeneratoroptions JSON which defines tick generator options
     * @param options.curveaxis.tickgeneratoroptions.edge edge
     * @param options.curveaxis.tickgeneratoroptions.edge.tickvisible edge tick visibility
     * @param options.curveaxis.tickgeneratoroptions.edge.labelvisible edge label visibility
     * @param options.curveaxis.tickgeneratoroptions.major major
     * @param options.curveaxis.tickgeneratoroptions.major.tickvisible major tick visibility
     * @param options.curveaxis.tickgeneratoroptions.major.labelvisible major label visibility
     * @param options.curveaxis.tickgeneratoroptions.minor minor
     * @param options.curveaxis.tickgeneratoroptions.minor.tickvisible minor tick visibility
     * @param options.curveaxis.tickgeneratoroptions.minor.labelvisible minor label visibility
     * @param options.curvesymbol JSON which defines curve highlighting symbol
     * @param options.curvesymbol.visible visibility of curve highlighting symbol
     * @param options.curvesymbol.width curve highlighting symbol width
     * @param options.curvesymbol.height curve highlighting symbol height
     * @param options.curvesymbol.type curve highlighting symbol type, default is circle and available values are cross, diamond, plus, square, star and triangle
     * @param options.cursor cursor tool options
     * @param options.cursor.linestyle defines linestyle for timeseries cursor tool
     * @param options.modelgrid JSON which contains 'horizontaltickgenerator' and 'verticaltickgenerator'
     * @param options.modelgrid.horizontaltickgenerator Horizontal tickgenerator for the model grid. (Horizontal reference curve takes precedence over this option). Default is an instance of geotoolkit.axis.AdaptiveTickGenerator
     * @param options.modelgrid.verticaltickgenerator Vertical tickgenerator for the model grid (default visibility of ticks is false). Default is an instance of geotoolkit.axis.AdaptiveDateTimeTickGenerator
     * @param options.modelgrid.horizontalvisibility JSON defining horizontal gridline visibility
     * @param options.modelgrid.verticalvisibility JSON defining vertical gridline visibility
     * @param options.modelaxis JSON which defines axis inside model
     * @param options.modelaxis.visible visiblility of the axis inside model
     * @param options.modelaxis.tickgenerator tick generator for the axis inside model
     * @param options.modelaxis.baselinestyle base linestyle for the model axis
     * @param options.southaxis JSON which defines south axis
     * @param options.southaxis.visible visibility of south axis
     * @param options.southaxis.height south axis height
     * @param options.southaxis.font south axis label font
     * @param options.southaxis.color south axis label color
     * @param options.southaxis.tickgenerator tick generator for south axis. Default is an instance of geotoolkit.axis.AdaptiveDateTimeTickGenerator
     * @param options.visiblerange JSON which defines visible range area
     * @param options.visiblerange.visible visibility of visible range area
     * @param options.visiblerange.height visible range area height
     * @param options.visiblerange.font visible range text font
     * @param options.visiblerange.color visible range text color
     * @param options.visiblerange.formatter visible range text formatter
     * @param options.intervalbuttons JSON which defines the interval buttons
     * @param options.intervalbuttons.visible visibility of the interval buttons
     * @param options.intervalbuttons.intervals JSON which defines the text and scale value of each interval button
     * @param options.scrolltonowbutton JSON which defines the now button
     * @param options.scrolltonowbutton.visible visibility of the now button
     * @param options.scrollbar JSON which defines scroll bar area
     * @param options.scrollbar.visible visibility of scroll bar area
     * @param options.scrollbar.type scroll type or className. for className use {geotoolkit.controls.tools.scroll.ScrollFactory#registerScrollbar} first
     * @param options.scrollbar.height scroll bar area height
     * @param options.scrollbar.options Additional options to use for scrollbar (this depends on the options the specific scrollbar accepts)
     * @param options.scrollbar.options.font scroll bar text font
     * @param options.scrollbar.options.color scroll bar text color
     * @param options.scrollbar.options.tickgenerator tick generator for scroll bar
     * @param options.scrollbar.options.formatter scroll bar text formatter
     * @param options.tooltips json defining tooltips
     * @param options.tooltips.visible tooltip visibility
     * @param options.tooltips.linestyle linestyle of tooltip box
     * @param options.tooltips.fillstyle fillstyle of tooltip box
     * @param options.tooltips.symbollinestyle border linestyle of tooltip symbol
     * @param options.tooltips.selectionradius radius of tooltip selection visibility
     * @param options.tooltips.tooltipoptions JSON which defines tooltip options
     * @param options.tooltips.tooltipoptions.formatter represents the tooltip number formatter.
     * @param options.tooltips.tooltipoptions.margintext margin text
     * @param options.tooltips.tooltipoptions.font font
     * @param options.tooltips.tooltipoptions.symbolsize symbol size
     * @param options.tooltips.tooltipoptions.internalpadding internal padding
     * @param options.tooltips.tooltipoptions.externalpadding external padding
     * @param options.tooltips.tooltipoptions.linestyle linestyle
     * @param options.tooltips.tooltipoptions.fillstyle fillstyle
     * @param options.tooltips.tooltipoptions.fixedwidth fixed width
     * @param options.tooltips.tooltipoptions.nanvisibility nan visibility
     * @param options.tooltips.tooltipoptions.formatdatahandler optional handler to prepare text, symbol and value
     * @param options.tooltips.tooltipoptions.index index options
     * @param options.tooltips.tooltipoptions.index.visible visibility of the index tooltip
     * @param options.tooltips.tooltipoptions.index.textcolor text color
     * @param options.tooltips.tooltipoptions.index.symbol symbol shape
     * @param options.tooltips.tooltipoptions.index.name name of the index
     * @param options.tooltips.tooltipoptions.index.indextext index text
     * @param options.tooltips.tooltipoptions.index.unittext index unit
     * @param options.viewcache enable viewcache
     * @param options.cursorselectionlimit Threshold distance indevice space, from vertical cursor line to show symbol, update legend and show tooltip
     * @param options.timezone UTC or local time
     * @param options.selectionstrategy selection strategy to set
     * @param options.stack Stack TimesSeriesWidget settings
     * @param options.stack.enabled True to enable time series stack area mode, false otherwise
     * @param options.stack.fillstyles Stack time series fill styles, key of each fill style is curve id
     * @param options.percent Percent TimesSeriesWidget settings
     * @param options.percent.enabled True to enable time series percent mode, false otherwise
     * @param options.percent.fillstyles Percent mode time series fill styles, key of each fill style is curve id
     * @param options.percent.tooltip Tooltip option for percentage mode
     * @param options.percent.tooltip.showoriginalvalue True to show original value along side with percentage
     * @param options.barmode Options for bar mode
     * @param options.barmode.renderingorder Determine rendering order of
     * each bar. By default, bars will be rendered in the order of bar series when it was added
     * @param options.barmode.highlightingmethod How bars are highlighted
     * @param options.barmode.barvaluevisibility Bar values visible distance in device space of TimeSeriesBar
     */
    setOptions(options?: object | { bounds?: Rect; model?: Group; modeloffsets?: object | { left?: string | number; right?: string | number; }  | string | number; automodellimitsmode?: boolean; alignaxis?: boolean; margin?: number[]; title?: object | { visible?: boolean; height?: number; text?: string; font?: string; color?: string; centered?: boolean; padding?: number[]; } ; legends?: object | { direction?: Direction; visible?: boolean; position?: TimeseriesLegendPosition; alignwithcentermodel?: boolean; height?: number; width?: number; margintext?: number; marginbottom?: number; autocolorlabel?: boolean; legendoptions?: object | { formatter?: Format; margintext?: number; font?: string; height?: number; internalpadding?: number; fixedwidth?: number; labelcolor?: string; linestyle?: LineStyle; fillstyle?: FillStyle; } ; } ; lastupdatedate?: object | { visible?: boolean; followcursor?: boolean; font?: string; color?: string; formatter?: string | Function; } ; curvelimits?: object | { visible?: boolean; margin?: number; width?: number; font?: string; } ; curveaxis?: object | { visible?: boolean; autocoloraxise?: boolean; autocolorlabel?: boolean; titlevisible?: boolean; textcolor?: string; axiswidth?: number; font?: string; labelorientation?: string | Orientation; tickgeneratoroptions?: object | { edge?: object | { tickvisible?: boolean; labelvisible?: boolean; } ; major?: object | { tickvisible?: boolean; labelvisible?: boolean; } ; minor?: object | { tickvisible?: boolean; labelvisible?: boolean; } ; } ; } ; curvesymbol?: object | { visible?: boolean; width?: number; height?: number; type?: string; } ; cursor?: object | { linestyle?: LineStyle; } ; modelgrid?: object | { horizontaltickgenerator?: TickGenerator; verticaltickgenerator?: TickGenerator; horizontalvisibility?: object; verticalvisibility?: object; } ; modelaxis?: object | { visible?: boolean; tickgenerator?: TickGenerator; baselinestyle?: LineStyle; } ; southaxis?: object | { visible?: boolean; height?: number; font?: string; color?: string; tickgenerator?: TickGenerator; } ; visiblerange?: object | { visible?: boolean; height?: number; font?: string; color?: string; formatter?: string | Function; } ; intervalbuttons?: object | { visible?: boolean; intervals?: object; } ; scrolltonowbutton?: object | { visible?: boolean; } ; scrollbar?: object | { visible?: boolean; type?: TimeseriesScrollBarType | string; height?: number; options?: object | { font?: string; color?: string; tickgenerator?: TickGenerator; formatter?: string | Function; } ; } ; tooltips?: object | { visible?: boolean; linestyle?: LineStyle; fillstyle?: FillStyle; symbollinestyle?: LineStyle; selectionradius?: number; tooltipoptions?: object | { formatter?: Format; margintext?: number; font?: string; symbolsize?: number; internalpadding?: number; externalpadding?: number; linestyle?: LineStyle; fillstyle?: FillStyle; fixedwidth?: number | any; nanvisibility?: boolean; formatdatahandler?: Function; index?: object | { visible?: boolean; textcolor?: string | RgbaColor; symbol?: SymbolShape; name?: string; indextext?: string; unittext?: string; } ; } ; } ; viewcache?: boolean; cursorselectionlimit?: number; timezone?: TimeZone; selectionstrategy?: Function; stack?: object | { enabled?: boolean; fillstyles?: object; } ; percent?: object | { enabled?: boolean; fillstyles?: object; tooltip?: object | { showoriginalvalue?: boolean; } ; } ; barmode?: object | { renderingorder?: barRenderingOrder; highlightingmethod?: barHighlightingMethod; barvaluevisibility?: boolean | number; } ; } ): this;
    /**
     * Set time series stack area mode
     * @param stack Stack TimesSeriesWidget settings
     * @param stack.enabled True to enable time series stack area mode, false otherwise
     * @param stack.fillstyles Stack time series fill styles, key of each fill style is curve id
     */
    setStackMode(stack?: object | { enabled?: boolean; fillstyles?: object; } ): this;
    /**
     * Get stack mode settings
     */
    getStackMode(): {enabled: boolean; fillstyles: object} | object;
    /**
     * Set time series percent mode
     * @param percent Percent TimesSeriesWidget settings
     * @param percent.enabled True to enable time series percent mode, false otherwise
     * @param percent.fillstyles Percent mode time series fill styles, key of each fill style is curve id
     * @param percent.tooltip Tooltip option for percentage mode
     * @param percent.tooltip.showoriginalvalue True to show original value along side with percentage
     */
    setPercentMode(percent?: object | { enabled?: boolean; fillstyles?: object; tooltip?: object | { showoriginalvalue?: boolean; } ; } ): this;
    /**
     * Get percent mode settings
     */
    getPercentMode(): {enabled: boolean; fillstyles: object; tooltip: {showoriginalvalue: boolean}} | object;
    /**
     * Set bar mode
     * @param barMode Options for bar mode
     * @param barMode.renderingorder Determine rendering order of
     * each bar. By default, bars will be rendered in the order of bar series when it was added
     * @param barMode.highlightingmethod Bar highlighting method
     * @param barMode.barvaluevisibility Bar values visible distance in device space of TimeSeriesBar
     */
    setBarMode(barMode?: object | { renderingorder?: Function; highlightingmethod?: barHighlightingMethod; barvaluevisibility?: boolean | number; } ): this;
    /**
     * Get bar mode
     */
    getBarMode(): {renderingorder: Function; highlightingmethod: barHighlightingMethod; barvaluevisibility: boolean | number} | object;
    /**
     * Highlight bars
     * @example
     * ```javascript
     * const highlightBars = [{
     *      // highlight bar at index 2 of series 0
     *      'datapointindex': 2,
     *      'lineindex': 0
     * }, {
     *      // highlight bar at index 4 of series 0
     *      'datapointindex': 4,
     *      'lineindex': 0
     * }, {
     *      // highlight bar at index 3 of series 1
     *      'datapointindex': 3,
     *      'lineindex': 1
     * }];
     * this.highlightBars(highlightBars);
     * ```
     * @param highlightBars Array of bars to highlight
     */
    highlightBars(highlightBars: object[]): this;
    /**
     * Gets all curves id
     */
    getCurves(): string[];
    /**
     * Get TimeSeriesObject by id
     * @example
     * ```javascript
     * widget.getTimeSeriesObjectById(id).setAxisOptions({'visible': false});
     * ```
     * @param id timeseries object id
     */
    getTimeSeriesObjectById(id: string): TimeSeriesObject | any;
    /**
     * retrieve data element with specified id
     * @param id specified id of data element
     */
    getDataById(id: string): AbstractDataTable | any;
    /**
     * Adds a curve to the widget
     * @param name curve name or JSON object containing all parameters
     * @param uri curve uri
     * @param data geotoolkit.data.DataTableView object for this curve
     * @param properties JSON object
     * @param properties.id deprecated (since 2020 (3.0)). use id instead. curve id
     * @param properties.autoscale true if curve in auto-scaling mode
     * @param properties.min curve min value
     * @param properties.max curve max value
     * @param properties.value current value
     * @param properties.unit unit string
     * @param properties.linestyle curve line style
     * @param properties.fillstyle curve fill fill style
     * @param properties.curvevisible curve visibility
     * @param properties.markervisible curve marker visibility
     * @param properties.marker marker properties
     * @param properties.decimationSpacing spacing of markers
     * @param properties.spline spline mode
     * @param properties.values display values
     * @param properties.axisvisible curve axis visibility
     * @param properties.axisposition curve axis position 'left'/'right'
     * @param properties.name curve name
     * @param properties.axisautolabelrotation auto label rotation in curve axis
     * @param properties.labelorientation rotation of the curveaxis labels; can be automatic, vertical, horizontal
     * @param id unique id for added curve
     */
    addCurve(name: string | object, uri: string, data?: DataTableView, properties?: object | { id?: string | TimeSeriesObject; autoscale?: boolean; min?: number; max?: number; value?: number; unit?: string; linestyle?: LineStyle; fillstyle?: FillStyle; curvevisible?: boolean; markervisible?: boolean; marker?: object; decimationSpacing?: object; spline?: boolean; values?: boolean; axisvisible?: boolean; axisposition?: string; name?: string; axisautolabelrotation?: boolean; labelorientation?: string | Orientation; } , id?: string): string;
    /**
     * Inserts a curve to the widget at a desired position.
     * @param name curve name or JSON object containing all parameters
     * @param uri dataset uri
     * @param data geotoolkit.data.DataTableView object for this curve
     * @param properties JSON object
     * @param properties.id deprecated (since 2020 (3.0)). use id instead. curve id
     * @param properties.autoscale true if curve in auto-scaling mode
     * @param properties.min curve min value
     * @param properties.max curve max value
     * @param properties.value current value
     * @param properties.unit unit string
     * @param properties.linestyle curve line style
     * @param properties.curvevisible curve visibility
     * @param properties.markervisible curve marker visibility
     * @param properties.marker curve marker properties
     * @param properties.decimationSpacing spacing of markers
     * @param properties.spline spline mode
     * @param properties.values display values
     * @param properties.axisvisible curve axis visibility
     * @param properties.axisposition curve axis position 'left'/'right'
     * @param properties.name curve name
     * @param properties.axisautolabelrotation auto label rotation in curve axis
     * @param properties.labelorientation rotation of the curveaxis labels; can be automatic, vertical, horizontal
     * @param properties.microposition microposition limits
     * @param properties.microposition.top upper bound of microposition (range from 0 to 1)
     * @param properties.microposition.bottom lower bound of microposition (range from 0 to 1)
     * @param position desired position of curve in TimeSeriesWidget.getCurves()
     * @param id desired id of curve, defaults to uri if unspecified
     */
    insertCurve(name: string | object, uri: string, data?: DataTableView, properties?: object | { id?: string | TimeSeriesObject; autoscale?: boolean; min?: number; max?: number; value?: number; unit?: string; linestyle?: LineStyle; curvevisible?: boolean; markervisible?: boolean; marker?: object; decimationSpacing?: object; spline?: boolean; values?: boolean; axisvisible?: boolean; axisposition?: string; name?: string; axisautolabelrotation?: boolean; labelorientation?: string | Orientation; microposition?: object | { top?: number; bottom?: number; } ; } , position?: number, id?: string): string;
    /**
     * Adds an array of curves
     * @param curves Array of JSON objects containing curve definitions
     */
    addCurves(curves: object[]): string[] | number;
    /**
     * Inserts an array of curves
     * @param curves Array of JSON objects containing curve definitions
     */
    insertCurves(curves: object[]): string[] | number;
    /**
     * Internal method of creating TS object
     * @param curveData JSON containing curve definitions
     * @param silent flag for adding curves silently
     * @param axisOnly if only axis need to create
     */
    protected createTimeSeriesObject(curveData: any, silent: boolean, axisOnly?: boolean): TimeSeriesObject;
    /**
     * Associates the horizontal grid with a curve.
     * If null is passed in or curve is not found, it defaults to the first curve
     * @param curveId unique curve id
     */
    setHorizontalGridCurveReference(curveId: string): this;
    /**
     * Add a fill to a curve(id1)
     * @param id1 (From curve)
     * @param id2 (To curve/referenceline/null)
     * @param fillStyle the fill style
     * @param fillType fill type
     * @param fillDirection Direction of the fill
     */
    addFill(id1: string, id2: string | number | any, fillStyle: FillStyle | string | object, fillType: TimeseriesFillType, fillDirection: TimeseriesFillDirection): void;
    /**
     * Removes a fillstyle associated with a curve in a specific direction
     * @param curveId curve id for which fillstyle is to be removed
     * @param filldirection direction of the fill
     */
    removeCurveFill(curveId: string, filldirection: TimeseriesFillDirection): void;
    /**
     * Gets both top and bottom fillstyles associated with curve
     * @param curveId unique curve id
     */
    getCurveFills(curveId: string): object | any;
    /**
     * Get the fill style associated with a curve in a specific direction
     * @param curveId unique curve id
     * @param filldirection direction on the fill
     */
    getCurveFillStyle(curveId: string, filldirection: TimeseriesFillDirection): any | FillStyle;
    /**
     * Removes a curve
     * @param id array of curve ids
     */
    removeCurve(id: string | string[]): this;
    /**
     * Gets properties of a curve
     * @param id id of the curve to get properties
     */
    getCurveProperties(id: string): object | any;
    /**
     * Sets model padding style
     * @param modelOffsets model offsets
     * @param modelOffsets.left model left offset
     * @param modelOffsets.right model left offset
     */
    setModelOffsets(modelOffsets: object | { left?: string | number; right?: string | number; }  | string | number): this;
    /**
     * Return model offsets
     */
    getModelOffsets(): {left: number | string; right: number | string} | object;
    /**
     * Rebuilds all layers
     */
    rebuildLayers(): this;
    /**
     * Gets the model range
     */
    getRange(): Range;
    /**
     * Sets the model range
     * @param range the model range
     */
    setRange(range: Range): this;
    /**
     * Gets the visible model range
     */
    getVisibleRange(): Range;
    /**
     * Sets the visible model range
     * If the range is less than 1ms the range will be expanded and applied within the model's range
     * If the model's limits are less than the minimum range, the range will be set to the model's limits
     * @param range visible model range
     */
    setVisibleRange(range: Range): this;
    /**
     * Translates widget's contents
     * @param dx x translate
     */
    translateModel(dx: number): this;
    /**
     * Scale widget's contents
     * @param scaleX x scale factor
     */
    scaleModel(scaleX: number): this;
    /**
     * Zoom in with default factor
     */
    zoomIn(): this;
    /**
     * Zoom out with default factor
     */
    zoomOut(): this;
    /**
     * Fits bounds to model limits
     */
    fitToBounds(): this;
    /**
     * Add Annotation Line
     * @param options JSON for annotation properties
     * @param options.point Location of the annotation. (X = position of line, Y = normalized vertical position of text)
     * @param options.text The 'header' text for the annotation line
     * @param options.textvisible visibility of the text
     * @param options.linevisible visibility of the line
     * @param options.linestyle Linestyle of the annotation line
     * @param options.fillstyle Background Fillstyle of the text
     * @param options.textstyle Textstyle of the text
     * @param options.alignment Anchor position of the text
     * @param options.angle angle
     */
    addAnnotationLine(options: object | { point?: Point; text?: string; textvisible?: boolean; linevisible?: boolean; linestyle?: LineStyle; fillstyle?: FillStyle; textstyle?: TextStyle; alignment?: AnchorType; angle?: number; } ): string;
    /**
     * Add Annotation Line Group.
     * @param optionsArray array of options of JSON for annotation properties
     */
    addAnnotationLineCollection(optionsArray: object[]): string | any;
    /**
     * Remove annotation line
     * @param id annotation id
     */
    removeAnnotationLine(id: string): this;
    /**
     * Remove annotation line collection by ID.
     * @param id annotation line collection id
     */
    removeAnnotationLineCollection(id: string): this;
    /**
     * Edit annotation line
     * @param id annotation id
     * @param options JSON for annotation options
     * @param options.point point
     * @param options.text text
     * @param options.textvisible text visibility
     * @param options.linevisible line visibility
     * @param options.linestyle linestyle
     * @param options.fillstyle fillstyle
     * @param options.textstyle textstyle
     * @param options.alignment alignment
     * @param options.angle angle
     */
    editAnnotationLine(id: string, options: object | { point?: Point; text?: string; textvisible?: boolean; linevisible?: boolean; linestyle?: LineStyle; fillstyle?: FillStyle; textstyle?: TextStyle; alignment?: AnchorType; angle?: number; } ): string;
    /**
     * add an Annotation object at the specific point : [curveid, time]
     * note: it will try to find the nearest point at the specific time.
     * @param options json object that represents the annotation options
     * @param options.curveid curve id to match the poi
     * @param options.time time index in model space
     * @param options.label annotation text
     * @param options.textstyle text style of the annotation
     * @param options.textbackground background of the annotation label
     * @param options.symbol annotation symbol type
     * @param options.linestyle symbol line style
     * @param options.fillstyle symbol fill style
     * @param options.symbolsize symbol size width and height
     */
    addAnnotation(options: object | { curveid?: string; time?: number; label?: string; textstyle?: TextStyle; textbackground?: FillStyle; symbol?: string; linestyle?: LineStyle; fillstyle?: FillStyle; symbolsize?: number; } ): string | any;
    /**
     * @param id annotation id
     * @param options annotation options
     */
    editAnnotation(id: string, options: object): string;
    /**
     * remove annotation with the specified id.
     * @param id of the annotation to remove
     */
    removeAnnotation(id: string): this;
    /**
     * Gets properties of the annotation line
     * @param id id of annotation line to get properties
     */
    getAnnotationLineProperties(id: string): object;
    /**
     * Gets properties of the annotation
     * @param id id of annotation line to get properties
     */
    getAnnotationProperties(id: string): object;
    /**
     * @param curve id of curve to re-ordered
     * @param order type of node re-ordering
     * @param anchor id of anchor for re-ordering
     */
    changeVisualOrder(curve: string, order: NodeOrder, anchor?: string): this;
    /**
     * Add a time series group, which shares axis and limits only
     * @param id group id
     * @param id.curveids curve ids
     * @param id.min min
     * @param id.max max
     * @param id.options See TimeSeriesObject axis options
     * @param curveIDs curve ids
     * @param min min
     * @param max max
     * @param options See TimeSeriesObject axis options
     */
    createGroup(id: string | object | { curveids?: string[]; min?: number; max?: number; options?: object; } , curveIDs?: string[], min?: number, max?: number, options?: object): string | null;
    /**
     * Remove a timeseries group
     * @param groupid group id
     */
    removeGroup(groupid: string): this;
    /**
     * Get TimeSeriesObjectGroup by ID
     * @param groupid group id
     */
    getGroupById(groupid: string): TimeSeriesObjectGroup | any;
    /**
     * Returns visual layer
     */
    getVisualFrontLayer(): Group;
    /**
     * Returns visual layer
     */
    getVisualBackLayer(): Group;
    /**
     * Exports the widget content as a PDF file
     * @param options PDF options
     * @param options.header an optional PDF header
     * @param options.footer an optional PDF footer
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
     * @param options.imagecompression compression options
     * @param options.imagecompression.speed speed referring to the png compression speed, available  for png mode only.
     * @param options.streamcompression enable or disable pdf output compression
     * @param options.embededfonts array of embedded fonts
     * @param options.pdfstream optional user-customized Stream object
     */
    exportToPDF(options?: object | { header?: HeaderComponent; footer?: FooterComponent; output?: string; save?: boolean; printsettings?: object | { paperformat?: object; top?: number; bottom?: number; left?: number; right?: number; orientation?: string; scaling?: string; keepaspectratio?: boolean; continuous?: boolean; } ; limits?: object | { start?: object; end?: object; } ; scale?: number; imagecompression?: object | { speed?: SpeedCompression; } ; streamcompression?: boolean; embededfonts?: EmbededFont[]; pdfstream?: IWritable; } ): Promise<IWritable>;
    /**
     * Perform hit test on Time Series curve and get curve data
     * @param devicePoint Mouse coordinate in deivce space
     * @param transformation Transformation of the model
     */
    hitTest(devicePoint: Point, transformation?: Transformation): CurveData[];
    /**
     * Dispose
     */
    dispose(): void;
}
/**
 * TimeseriesWidget events following example shows how user can subscribe to the events.
 * @example
 * ```javascript
 * import {Events} from '@int/geotoolkit/widgets/timeseries/Events';
 * widget.on(Events.onVisibleRangeChanging, (event, sender, eventArgs) => {
 *     //scrolling or scaling
 *     geotoolkit.log(eventArgs.getVisibleRange().toString());
 * });
 * widget.on(Events.onVisibleRangeChanged, (event, sender, eventArgs) => {
 *     //after scroll or scale complete
 *     geotoolkit.log(eventArgs.getVisibleRange().toString());
 * });
 * ```
 */
export type Events = any;

/**
 * FillDirection
 */
export type FillDirection = any;

/**
 * FillType
 */
export type FillType = any;

/**
 * LegendPosition
 */
export type LegendPosition = any;

/**
 * ScrollBarType
 */
export type ScrollBarType = any;

/**
 * Defines value order pair
 */
export type BarValueOrderPair = { order: number; value: number; height: number}
/**
 * Defines bar highlighting style
 */
export type BarHighlightingStyle = { linestyle: LineStyle; fillstyle: FillStyle}
/**
 * Defines curve data
 */
export type CurveData = { id: string; curve: object; color: string; symbol: SymbolShape; name: string; index: number; position: number; value: number; originalvalue: number; unit: string}
