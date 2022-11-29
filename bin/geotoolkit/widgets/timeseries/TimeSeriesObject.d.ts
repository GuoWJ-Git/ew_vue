import {TimeSeriesObjectBase} from './TimeSeriesObjectBase';
import {DataTableView} from '../../data/DataTableView';
import {LineStyle} from '../../attributes/LineStyle';
import {AnchorType} from '../../util/AnchorType';
import {FillStyle} from '../../attributes/FillStyle';
import {NumberFormat} from '../../util/NumberFormat';
import {TextStyle} from '../../attributes/TextStyle';
import {Format} from '../../util/Format';
import {AbstractDataTable} from '../../data/AbstractDataTable';

/**
 * TimeSeriesObject is a container of visuals used in TimeSeries Widget.
 * It primarily lets you get and set options of the different visuals.
 */
export class TimeSeriesObject extends TimeSeriesObjectBase {
    /**
     * TimeSeriesObject is a container of visuals used in TimeSeries Widget.
     * It primarily lets you get and set options of the different visuals.
     * @param options JSON object
     * @param options.uri Object's uri
     * @param options.curve curve options
     * @param options.curve.data data
     * @param options.curve.properties curve properties
     * @param options.curve.properties.visible visibility of curve
     * @param options.curve.properties.linestyle curve linestyle
     * @param options.curve.properties.autoscale true if curve in auto-scaling mode
     * @param options.curve.properties.min curve min value
     * @param options.curve.properties.max curve max value
     * @param options.curve.properties.neatlimits neat limits setting, true of set neatlimits object to enable, false or null|undefined to disable
     * @param options.curve.properties.neatlimits.enable enable /disable neat limits
     * @param options.curve.properties.neatlimits.precise keep original precise limits and calculates only step and origin
     * @param options.curve.properties.neatlimits.min min value parameter to calculate neatlimits
     * @param options.curve.properties.neatlimits.max max value parameter to calculate neatlimits
     * @param options.curve.properties.neatlimitscenteredonzero true if curve in neat-limits mode
     * @param options.curve.properties.unit unit string
     * @param options.curve.properties.microposition micro position limits
     * @param options.curve.properties.microposition.top vertical start micro position in the range from 0 to 1
     * @param options.curve.properties.microposition.bottom vertical end micro position in the range from 0 to 1
     * @param options.curve.properties.borderlinestyle timeseriesshape border line style
     * @param options.curve.properties.spline toggle spline interpolation
     * @param options.curve.properties.markervisible visibility of point markers
     * @param options.curve.properties.marker JSON containing marker symbol
     * @param options.curve.properties.marker.painter marker's painter's className
     * @param options.curve.properties.marker.width marker width
     * @param options.curve.properties.marker.height marker height
     * @param options.curve.properties.marker.sizeisindevicespace size is in device space
     * @param options.curve.properties.marker.alignment anchor type of marker
     * @param options.curve.properties.marker.linestyle style applied on outline
     * @param options.curve.properties.marker.fillstyle style applied on fill
     * @param options.curve.properties.values JSON containing point values options
     * @param options.curve.properties.values.visible visibility of point values
     * @param options.curve.properties.values.color color of value text font
     * @param options.curve.properties.values.font value text font
     * @param options.curve.properties.values.fillstyle fillstyle of value text container
     * @param options.curve.properties.values.linestyle linestyle of value text container
     * @param options.curve.properties.values.format formatter for value text
     * @param options.curve.properties.barmode bar options
     * @param options.curve.properties.barmode.enabled enabled barmode
     * @param options.curve.properties.barmode.barwidth Width of each bar in device space
     * @param options.curve.properties.barmode.linestyle Line style for bars,
     * default is line style of TimeSeriesLine
     * @param options.curve.properties.barmode.fillstyle Fill style for bars,
     * default is line color of TimeSeriesLine
     * @param options.curve.properties.barmode.barvalues Bar values options
     * @param options.curve.properties.barmode.barvalues.formatter Formatter for bar value texts
     * @param options.curve.properties.barmode.barvalues.margins Options to set bar values margins in device space
     * @param options.curve.properties.barmode.barvalues.margins.left Left margin in device space
     * @param options.curve.properties.barmode.barvalues.margins.top Top margin in device space
     * @param options.curve.properties.barmode.barvalues.rotationangle Bar value rotation angle
     * @param options.curve.properties.barmode.barvalues.textstyle Bar value text style
     * @param options.curve.properties.logarithmicscale logarithmic scale
     * @param options.curvesymbol javascript object used to define curvesymbol properties
     * @param options.curvesymbol.width width of symbol
     * @param options.curvesymbol.height height of symbol
     * @param options.curvesymbol.type painter type
     * @param options.curvesymbol.fillstyle fillstyle of symbol
     * @param options.curvelimits javascript object used to define curvelimits properties
     * @param options.curvelimits.visible visibility of curve limits area
     * @param options.curvelimits.margin curve limits area margin (top and bottom)
     * @param options.curvelimits.width width for each curve limits column
     * @param options.curvelimits.font curve limits text font
     * @param options.legenditem JSON which defines legend options
     * @param options.legenditem.formatter represents the legend number formatter.
     * @param options.legenditem.margintext margin of text
     * @param options.legenditem.font font
     * @param options.legenditem.height height
     * @param options.legenditem.internalpadding internal padding
     * @param options.legenditem.fixedwidth fixed width
     * @param options.legenditem.labelcolor label color
     * @param options.legenditem.linestyle line style
     * @param options.legenditem.fillstyle fill style
     * @param options.tooltipitem JSON which defines tooltip options
     * @param options.tooltipitem.formatter represents the tooltip number formatter.
     * @param options.tooltipitem.margintext margin between edge and text of tooltip
     * @param options.tooltipitem.font font
     * @param options.tooltipitem.textcolor text color
     * @param options.tooltipitem.symbolsize size of symbol
     * @param options.tooltipitem.internalpadding internal padding
     * @param options.tooltipitem.externalpadding external padding
     * @param options.tooltipitem.linestyle line style
     * @param options.tooltipitem.fillstyle fill style
     * @param options.tooltipitem.fixedwidth fixed width
     * @param options.tooltipitem.nanvisibility if true then tooltip also display with value NaN
     * @param options.tooltipitem.singlerow if true then text display in tooltip single row
     */
    constructor(options?: object | { uri?: string; curve?: object | { data?: DataTableView; properties?: object | { visible?: boolean; linestyle?: LineStyle | string | object; autoscale?: boolean; min?: number; max?: number; neatlimits?: boolean | object | { enable?: boolean; precise?: boolean; min?: number; max?: number; } ; neatlimitscenteredonzero?: boolean; unit?: string; microposition?: object | { top?: number; bottom?: number; } ; borderlinestyle?: LineStyle | string | object; spline?: boolean; markervisible?: boolean; marker?: object | { painter?: string; width?: number; height?: number; sizeisindevicespace?: boolean; alignment?: AnchorType; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; } ; values?: object | { visible?: boolean; color?: string; font?: string; fillstyle?: FillStyle | string | object; linestyle?: LineStyle | string | object; format?: NumberFormat; } ; barmode?: object | { enabled?: boolean; barwidth?: number; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; barvalues?: object | { formatter?: NumberFormat; margins?: object | { left?: number; top?: number; } ; rotationangle?: number; textstyle?: TextStyle | string | object; } ; } ; logarithmicscale?: boolean; } ; } ; curvesymbol?: object | { width?: number; height?: number; type?: string; fillstyle?: FillStyle; } ; curvelimits?: object | { visible?: boolean; margin?: number; width?: number; font?: string; } ; legenditem?: object | { formatter?: Format; margintext?: number; font?: string; height?: number; internalpadding?: number; fixedwidth?: number; labelcolor?: string; linestyle?: LineStyle; fillstyle?: FillStyle; } ; tooltipitem?: object | { formatter?: Format; margintext?: number; font?: string; textcolor?: string; symbolsize?: number; internalpadding?: number; externalpadding?: number; linestyle?: LineStyle; fillstyle?: FillStyle; fixedwidth?: number | any; nanvisibility?: boolean; singlerow?: boolean; } ; } );
    /**
     * Get curve's data
     */
    getData(): DataTableView;
    /**
     * Set  data
     *      /**
     * Sets the data object for the line
     * @param options data source or object to specify data source
     * @param options.name name of the curve
     * @param options.indices name or index of series in data table / view if it is provided
     * @param options.values name or index of series in data table / view if it is provided
     * @param options.datatable DataTable or DataTableView which contains time and value column
     */
    setData(options: AbstractDataTable | object | { name?: string; indices?: string | number; values?: string | number; datatable?: AbstractDataTable; } ): this;
    /**
     * Set curve options
     * @example
     * ```javascript
     * // If you have several curves, which share the same unit and min&max,
     * // you can set the min and max of each curve dynamically and independently of each other without having to recreate the widget.
     * // You will have to iterate through the curves which you want to update and set their min and max value as follows:
     * widget.getTimeSeriesObjectById(curveid).setCurveOptions(
     * { 'autoscale': false, 'min': newMinValue, 'max': newMaxValue}
     * );
     * ```
     * @param options JSON containing curve options
     * @param options.visible visibility of curve
     * @param options.linestyle curve linestyle
     * @param options.autoscale true if curve in auto-scaling mode
     * @param options.min curve min value
     * @param options.max curve max value
     * @param options.neatlimits neatlimits setting, true of set neatlimits object to enable, false or null|undefined to disable
     * @param options.neatlimits.enable enable /disable neat limits
     * @param options.neatlimits.precise keep original precise limits and calculates only step and origin
     * @param options.neatlimits.min min value parameter to calculate neatlimits
     * @param options.neatlimits.max max value parameter to calculate neatlimits
     * @param options.neatlimitscenteredonzero true if curve in neat-limits mode
     * @param options.unit unit string
     * @param options.microposition micro position limits
     * @param options.microposition.top vertical start micro position in the range from 0 to 1
     * @param options.microposition.bottom vertical end micro position in the range from 0 to 1
     * @param options.borderlinestyle timeseriesshape border line style
     * @param options.spline toggle spline interpolation
     * @param options.markervisible visibility of point markers
     * @param options.marker JSON containing marker symbol
     * @param options.values JSON containing point values options
     * @param options.values.visible visibility of point values
     * @param options.values.color color of value text font
     * @param options.values.font value text font
     * @param options.values.fillstyle fillstyle of value text container
     * @param options.values.linestyle linestyle of value text container
     * @param options.values.format formatter for value text
     * @param options.barmode options
     * @param options.barmode.barwidth Width of each bar in device space
     * @param options.barmode.linestyle Line style for bars,
     * default is line style of TimeSeriesLine
     * @param options.barmode.fillstyle Fill style for bars,
     * default is line color of TimeSeriesLine
     * @param options.barmode.barvalues Bar values options
     * @param options.barmode.barvalues.formatter Formatter for bar value texts
     * @param options.barmode.barvalues.margins Options to set bar values margins in device space
     * @param options.barmode.barvalues.margins.left Left margin in device space
     * @param options.barmode.barvalues.margins.top Top margin in device space
     * @param options.barmode.barvalues.rotationangle Bar value rotation angle
     * @param options.barmode.barvalues.textstyle Bar value text style
     * @param options.logarithmicscale logarithmic scale
     */
    setCurveOptions(options?: object | { visible?: boolean; linestyle?: LineStyle; autoscale?: boolean; min?: number; max?: number; neatlimits?: boolean | object | { enable?: boolean; precise?: boolean; min?: number; max?: number; } ; neatlimitscenteredonzero?: boolean; unit?: string; microposition?: object | { top?: number; bottom?: number; } ; borderlinestyle?: LineStyle; spline?: boolean; markervisible?: boolean; marker?: object; values?: object | { visible?: boolean; color?: string; font?: string; fillstyle?: FillStyle; linestyle?: LineStyle; format?: NumberFormat; } ; barmode?: object | { barwidth?: number; linestyle?: object | LineStyle; fillstyle?: object | FillStyle; barvalues?: object | { formatter?: NumberFormat; margins?: object | { left?: number; top?: number; } ; rotationangle?: number; textstyle?: object | TextStyle; } ; } ; logarithmicscale?: boolean; } ): this;
    /**
     * Get curve options
     */
    getCurveOptions(): {name: string; visible: boolean; linestyle: LineStyle; flip: boolean; autoscale: boolean; min: number; max: number; neatlimits: {min: number; max: number}; neatlimitscenteredonzero: boolean; unit: string; position: string; barmode: {enabled: boolean; barwidth: number; linestyle: LineStyle; fillstyle: FillStyle; barvalues: {formatter: NumberFormat; margins: {left: number; top: number}; rotationangle: number; textstyle: TextStyle}}; logarithmicscale: boolean} | object;
    /**
     * Set symbol options
     * @param options JSON of symbol options
     * @param options.width width of symbol
     * @param options.height height of symbol
     * @param options.type type geotoolkit.scene.shapes.painters.CrossPainter/DiamondPainter/PlusPainter/SquarePainter/StarPainter/TrianglePainter/CirclePainter
     * @param options.fillstyle fillstyle of symbol
     */
    setSymbolOptions(options?: object | { width?: number; height?: number; type?: string; fillstyle?: FillStyle; } ): this;
    /**
     * Get symbol options
     */
    getSymbolOptions(): {width: number; height: number; type: string; fillstyle: FillStyle} | object;
    /**
     * Get Curve Limits group option
     */
    getCurveLimitsGroupOptions(): {visible: boolean; margin: number; width: number; font: string} | object;
    /**
     * Set curve limits group options
     * @param options JSON describing curve limits group options
     * @param options.visible visibility of curve limits area
     * @param options.margin curve limits area margin (top and bottom)
     * @param options.width width for each curve limits column
     * @param options.font curve limits text font
     */
    setCurveLimitsGroupOptions(options?: object | { visible?: boolean; margin?: number; width?: number; font?: string; } ): this;
    /**
     * Get legend options
     */
    getLegendOptions(): {formatter: Format; margintext: number; font: string; height: number; internalpadding: number; fixedwidth: number; labelcolor: string; linestyle: LineStyle; fillstyle: FillStyle} | object;
    /**
     * Set legend item options
     * @param options JSON which defines legend options
     * @param options.formatter represents the legend number formatter.
     * @param options.margintext margin between edge and text of legend
     * @param options.font legend font
     * @param options.height legend height
     * @param options.internalpadding legend padding
     * @param options.fixedwidth fixed with option
     * @param options.labelcolor legend text color
     * @param options.linestyle legend border linestyle
     * @param options.fillstyle legend fillstyle
     */
    setLegendOptions(options?: object | { formatter?: Format; margintext?: number; font?: string; height?: number; internalpadding?: number; fixedwidth?: number; labelcolor?: string; linestyle?: LineStyle; fillstyle?: FillStyle; } ): this;
    /**
     * Set tooltip options
     * @param options JSON which defines tooltip options
     * @param options.formatter represents the tooltip number formatter.
     * @param options.margintext margin between edge and text of tooltip
     * @param options.font legend
     * @param options.symbolsize size of symbol
     * @param options.internalpadding internal padding
     * @param options.externalpadding external padding
     * @param options.linestyle tooltip linestyle
     * @param options.fillstyle tooltip fillstyle
     * @param options.fixedwidth fixed width
     * @param options.nanvisibility visibility when value is NaN
     */
    setTooltipOptions(options?: object | { formatter?: Format; margintext?: number; font?: string; symbolsize?: number; internalpadding?: number; externalpadding?: number; linestyle?: LineStyle; fillstyle?: FillStyle; fixedwidth?: number | any; nanvisibility?: boolean; } ): this;
    /**
     * Get tooltip options
     */
    getTooltipOptions(): {formatter: Format; margintext: number; font: string; symbolsize: number; internalpadding: number; externalpadding: number; linestyle: LineStyle; fillstyle: FillStyle; fixedwidth: number | any} | object;
    /**
     */
    dispose(): void;
    /**
     * Returns all properties
     */
    getProperties(): {uri: string; curve: {properties: {visible: boolean; linestyle: LineStyle; autoscale: boolean; min: number; max: number; neatlimits: {min: number; max: number}; neatlimitscenteredonzero: boolean; unit: string; microposition: {top: number; bottom: number}; borderlinestyle: LineStyle; spline: boolean; markervisible: boolean; marker: {painter: string; width: number; height: number; sizeisindevicespace: boolean; alignment: AnchorType; linestyle: LineStyle; fillstyle: FillStyle}; values: {visible: boolean; color: string; font: string; fillstyle: FillStyle; linestyle: LineStyle; format: NumberFormat}; barmode: {enabled: boolean; barwidth: number; linestyle: LineStyle; fillstyle: FillStyle; barvalues: {formatter: NumberFormat; margins: {left: number; top: number}; rotationangle: number; textstyle: TextStyle}}; logarithmicscale: boolean}}; curvesymbol: {width: number; height: number; type: string; fillstyle: FillStyle}; curvelimits: {visible: boolean; margin: number; width: number; font: string}; legenditem: {formatter: Format; margintext: number; font: string; height: number; internalpadding: number; fixedwidth: number; labelcolor: string; linestyle: LineStyle; fillstyle: FillStyle}; tooltipitem: {formatter: Format; margintext: number; font: string; textcolor: string; symbolsize: number; internalpadding: number; externalpadding: number; linestyle: LineStyle; fillstyle: FillStyle; fixedwidth: number | any; nanvisibility: boolean; singlerow: boolean}} | any;
    /**
     * Sets all properties
     * @param props props
     * @param props.uri Object's uri
     * @param props.curve curve options
     * @param props.curve.data data
     * @param props.curve.properties curve properties
     * @param props.curve.properties.visible visibility of curve
     * @param props.curve.properties.linestyle curve linestyle
     * @param props.curve.properties.autoscale true if curve in auto-scaling mode
     * @param props.curve.properties.min curve min value
     * @param props.curve.properties.max curve max value
     * @param props.curve.properties.neatlimits neatlimits setting, true of set neatlimits object to enable, false or null|undefined to disable
     * @param props.curve.properties.neatlimits.min min value parameter to calculate neatlimits
     * @param props.curve.properties.neatlimits.max max value parameter to calculate neatlimits
     * @param props.curve.properties.neatlimitscenteredonzero true if curve in neat-limits mode
     * @param props.curve.properties.unit unit string
     * @param props.curve.properties.microposition micro position limits
     * @param props.curve.properties.microposition.top vertical start micro position in the range from 0 to 1
     * @param props.curve.properties.microposition.bottom vertical end micro position in the range from 0 to 1
     * @param props.curve.properties.borderlinestyle timeseriesshape border line style
     * @param props.curve.properties.spline toggle spline interpolation
     * @param props.curve.properties.markervisible visibility of point markers
     * @param props.curve.properties.marker JSON containing marker symbol
     * @param props.curve.properties.marker.painter marker's painter's className
     * @param props.curve.properties.marker.width marker width
     * @param props.curve.properties.marker.height marker height
     * @param props.curve.properties.marker.sizeisindevicespace size is in device space
     * @param props.curve.properties.marker.alignment anchor type of marker
     * @param props.curve.properties.marker.linestyle style applied on outline
     * @param props.curve.properties.marker.fillstyle style applied on fill
     * @param props.curve.properties.values JSON containing point values options
     * @param props.curve.properties.values.visible visibility of point values
     * @param props.curve.properties.values.color color of value text font
     * @param props.curve.properties.values.font value text font
     * @param props.curve.properties.values.fillstyle fillstyle of value text container
     * @param props.curve.properties.values.linestyle linestyle of value text container
     * @param props.curve.properties.values.format formatter for value text
     * @param props.curve.properties.barmode bar options
     * @param props.curve.properties.barmode.enabled enabled barmode
     * @param props.curve.properties.barmode.barwidth Width of each bar in device space
     * @param props.curve.properties.barmode.linestyle Line style for bars,
     * default is line style of TimeSeriesLine
     * @param props.curve.properties.barmode.fillstyle Fill style for bars,
     * default is line color of TimeSeriesLine
     * @param props.curve.properties.barmode.barvalues Bar values options
     * @param props.curve.properties.barmode.barvalues.formatter Formatter for bar value texts
     * @param props.curve.properties.barmode.barvalues.margins Options to set bar values margins in device space
     * @param props.curve.properties.barmode.barvalues.margins.left Left margin in device space
     * @param props.curve.properties.barmode.barvalues.margins.top Top margin in device space
     * @param props.curve.properties.barmode.barvalues.rotationangle Bar value rotation angle
     * @param props.curve.properties.barmode.barvalues.textstyle Bar value text style
     * @param props.curve.properties.logarithmicscale logarithmic scale
     * @param props.curvesymbol javascript object used to define curvesymbol properties
     * @param props.curvesymbol.width width of symbol
     * @param props.curvesymbol.height height of symbol
     * @param props.curvesymbol.type painter type
     * @param props.curvesymbol.fillstyle fillstyle of symbol
     * @param props.curvelimits javascript object used to define curvelimits properties
     * @param props.curvelimits.visible visibility of curve limits area
     * @param props.curvelimits.margin curve limits area margin (top and bottom)
     * @param props.curvelimits.width width for each curve limits column
     * @param props.curvelimits.font curve limits text font
     * @param props.legenditem JSON which defines legend options
     * @param props.legenditem.formatter represents the legend number formatter.
     * @param props.legenditem.margintext margin of text
     * @param props.legenditem.font font
     * @param props.legenditem.height height
     * @param props.legenditem.internalpadding internal padding
     * @param props.legenditem.fixedwidth fixed width
     * @param props.legenditem.labelcolor label color
     * @param props.legenditem.linestyle line style
     * @param props.legenditem.fillstyle fill style
     * @param props.tooltipitem JSON which defines tooltip options
     * @param props.tooltipitem.formatter represents the tooltip number formatter.
     * @param props.tooltipitem.margintext margin between edge and text of tooltip
     * @param props.tooltipitem.font font
     * @param props.tooltipitem.textcolor text color
     * @param props.tooltipitem.symbolsize size of symbol
     * @param props.tooltipitem.internalpadding internal padding
     * @param props.tooltipitem.externalpadding external padding
     * @param props.tooltipitem.linestyle line style
     * @param props.tooltipitem.fillstyle fill style
     * @param props.tooltipitem.fixedwidth fixed width
     * @param props.tooltipitem.nanvisibility if true then tooltip also display with value NaN
     * @param props.tooltipitem.singlerow if true then text display in tooltip single row
     */
    setProperties(props: object | { uri?: string; curve?: object | { data?: DataTableView; properties?: object | { visible?: boolean; linestyle?: LineStyle | string | object; autoscale?: boolean; min?: number; max?: number; neatlimits?: boolean | object | { min?: number; max?: number; } ; neatlimitscenteredonzero?: boolean; unit?: string; microposition?: object | { top?: number; bottom?: number; } ; borderlinestyle?: LineStyle | string | object; spline?: boolean; markervisible?: boolean; marker?: object | { painter?: string; width?: number; height?: number; sizeisindevicespace?: boolean; alignment?: AnchorType; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; } ; values?: object | { visible?: boolean; color?: string; font?: string; fillstyle?: FillStyle | string | object; linestyle?: LineStyle | string | object; format?: NumberFormat; } ; barmode?: object | { enabled?: boolean; barwidth?: number; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; barvalues?: object | { formatter?: NumberFormat; margins?: object | { left?: number; top?: number; } ; rotationangle?: number; textstyle?: TextStyle | string | object; } ; } ; logarithmicscale?: boolean; } ; } ; curvesymbol?: object | { width?: number; height?: number; type?: string; fillstyle?: FillStyle; } ; curvelimits?: object | { visible?: boolean; margin?: number; width?: number; font?: string; } ; legenditem?: object | { formatter?: Format; margintext?: number; font?: string; height?: number; internalpadding?: number; fixedwidth?: number; labelcolor?: string; linestyle?: LineStyle; fillstyle?: FillStyle; } ; tooltipitem?: object | { formatter?: Format; margintext?: number; font?: string; textcolor?: string; symbolsize?: number; internalpadding?: number; externalpadding?: number; linestyle?: LineStyle; fillstyle?: FillStyle; fixedwidth?: number | any; nanvisibility?: boolean; singlerow?: boolean; } ; } ): this;
}
