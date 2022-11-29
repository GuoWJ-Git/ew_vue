import {SeismicViewWidget} from './SeismicViewWidget';
import {SeismicPipeline} from '../pipeline/SeismicPipeline';
import {FieldDesc} from '../data/FieldDesc';
import {filter} from './TraceHeaderViewWidget';
import {NumberFormat} from '../../util/NumberFormat';
import {Events as ToolsEvents} from '../../controls/tools/CrossHair';
import {Range} from '../../util/Range';
import {LineStyle} from '../../attributes/LineStyle';
import {CompositeNode} from '../../scene/CompositeNode';
import {Group} from '../../scene/Group';
import {Splitter} from '../../controls/tools/splitter/Splitter';
import {HeaderComponent} from '../../scene/exports/HeaderComponent';
import {FooterComponent} from '../../scene/exports/FooterComponent';
import {ImageCompression} from '../../pdf/ImageCompression';
import {SpeedCompression} from '../../pdf/SpeedCompression';
import {IWritable} from '../../util/stream/IWritable';
import {EmbededFont} from '../../pdf/PdfExport';

/**
 * SeismicWidget is essentially a base widget specialized for seismic data display. It provides API to help viewing, interpreting and processing seismic data <br>
 * It has a center part to display seismic data and a set of annotations on each side to display axes, titles, or colorbar.  <br>
 * It supports default tools like cross hair, zooming, panning, cursor tracking, scrolling etc. It also has an option to display trace number headers table.<br>
 * Other options like horizontal and vertical scrollbars can be set here. To modify the styles of the x and y axis can be done using setProperties(). see example in the method.
 * @example
 * ```javascript
 * // Following code shows how to create a seismic widget using a pipeline. The {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline.SeismicPipeline} is created earlier using a seismic reader.
 * const widget = new SeismicWidget(pipeline)
 *       .setLayoutStyle({left: 0, top: 0, bottom: 0, right: 0});
 * widget.setScaleOptions({
 *       'tracescale': 3,
 *       'samplescale': 30,
 *       'deviceunit': 'in',
 *       'sampleunit': 's'
 *   });
 * ```
 * @example
 * ```javascript
 * // Provide own information for statusbar
 * import {AutoNumberFormat} from '@int/geotoolkit/util/AutoNumberFormat';
 * widget.setOptions({
 *       'statusbar': {
 *           'sections': {
 *               'info': (widget, x, y, sample) => {
 *                   const autoFormat = new AutoNumberFormat();
 *                   let depthValue = Math.round(y * 100) / 100.0, sampleValue = '', traceNumber = '';
 *                   if (sample) {
 *                       traceNumber = sample['traceNumber'] + 1;
 *                       sampleValue = Math.round(sample['sampleValue'] * 10000) / 10000;
 *                       depthValue = Math.round(sample['location']['y'] * 100) / 100.0;
 *                   }
 *                   return {
 *                       'samples': ' Depth: ' + autoFormat.format(depthValue),
 *                       'value': ' Values: ' + sampleValue,
 *                       'traces': ' Trace Number: ' + traceNumber
 *                   };
 *               }
 *           }
 *       }
 *   });
 * ```
 */
export class SeismicWidget extends SeismicViewWidget {
    /**
     * SeismicWidget is essentially a base widget specialized for seismic data display. It provides API to help viewing, interpreting and processing seismic data <br>
     * It has a center part to display seismic data and a set of annotations on each side to display axes, titles, or colorbar.  <br>
     * It supports default tools like cross hair, zooming, panning, cursor tracking, scrolling etc. It also has an option to display trace number headers table.<br>
     * Other options like horizontal and vertical scrollbars can be set here. To modify the styles of the x and y axis can be done using setProperties(). see example in the method.
     * @param options options or seismic pipeline
     * @param options.auxiliarychart auxiliarychart options
     * @param options.auxiliarychart.size defines size of the auxiliarychart
     * @param options.auxiliarychart.title defines options for auxiliarychart title
     * @param options.auxiliarychart.charts defines options for charts {@link @int/geotoolkit/seismic/widgets/TraceHeaderChartWidget.TraceHeaderChartWidget.setOptions}
     * @param options.table headers table
     * @param options.table.visible defines if plot displays headers table, true | false | 'none' | 'visible' | 'hidden'
     * @param options.table.enabled defines if header view default behaviour is enabled or not
     * @param options.table.cssclass defines cssclass of headers table
     * @param options.table.headers headers, array of header names, string contains header names divided by '|', or '*'
     * @param options.table.index defines table index column properties
     * @param options.table.index.size defines table index column size
     * @param options.table.size defines size of headers table
     * @param options.table.filter filter for headers table
     * @param options.statusbar defines status bar settings
     * @param options.statusbar.visible specify status bar visibility
     * @param options.statusbar.autosize defines status auto size mode
     * @param options.statusbar.cssclass specify status bar cssclass name
     * @param options.statusbar.sizes defines status auto size settings
     * @param options.statusbar.sizes.medium defines medium size
     * @param options.statusbar.sizes.small defines small size
     * @param options.statusbar.sections defines section setting
     * @param options.statusbar.sections.info defines custom section formatter
     * @param options.statusbar.sections.samples defines first section
     * @param options.statusbar.sections.samples.label defines title of the section
     * @param options.statusbar.sections.samples.format defines format of the section
     * @param options.statusbar.sections.traces defines second section
     * @param options.statusbar.sections.traces.label defines title of the section
     * @param options.statusbar.sections.samplevalue defines third section
     * @param options.statusbar.sections.samplevalue.label defines title of the section
     * @param options.statusbar.sections.samplevalue.format defines format of the section
     * @param options.pickingevent event for picking
     * @param properties deprecated since 2021.1 (3.3), use first argument instead
     */
    constructor(options?: object | { auxiliarychart?: object | { size?: any; title?: any; charts?: any; } ; table?: object | { visible?: boolean | string; enabled?: boolean; cssclass?: string; headers?: FieldDesc[] | string[] | string; index?: object | { size?: number | string; } ; size?: number; filter?: filter | any; } ; statusbar?: object | { visible?: boolean; autosize?: boolean; cssclass?: string; sizes?: object | { medium?: number; small?: number; } ; sections?: object | { info?: Function; samples?: object | { label?: string; format?: string | NumberFormat; } ; traces?: object | { label?: string; } ; samplevalue?: object | { label?: string; format?: string | NumberFormat; } ; } ; } ; pickingevent?: ToolsEvents; }  | SeismicPipeline, properties?: any);
    /**
     * Set widget options
     * @param options options see {@link @int/geotoolkit/seismic/widgets/SeismicWidget.SeismicWidget#setProperties}
     */
    setOptions(options: any): this;
    /**
     * Sets all the properties pertaining to this object
     * @example
     * ```javascript
     * // To modify the y axis properties.
     * widget.setProperties({
     *       'axes': {
     *           'samples': {
     *               'ticks': {
     *                   'labelstyles': {
     *                       'major': {
     *                           'color': 'blue'
     *                       }
     *                   }
     *               }
     *           }
     *       }
     *   }
     * // To modify the x axis (trace axis):
     * var axis = seismicwidget.getTraceHeaderAxis('TraceNumber')['axis'];
     * // setting label color
     * axis.getTickGenerator().getLabelStyle(grade).setColor(color);
     * // setting font
     * axis.getTickGenerator().getLabelStyle(grade).setFont(font)
     * ```
     * @param properties seismic view options
     * @param properties.auxiliarychart auxiliarychart options+
     * @param properties.auxiliarychart.size defines size of the auxiliarychart+
     * @param properties.auxiliarychart.title defines options for auxiliarychart title+
     * @param properties.auxiliarychart.charts defines options for charts {@link @int/geotoolkit/seismic/widgets/TraceHeaderChartWidget.TraceHeaderChartWidget.setOptions}+
     * @param properties.table defines table properties
     * @param properties.table.visible defines if plot displays headers table, true | false | 'none' | 'visible' | 'hidden'
     * @param properties.table.enabled defines if header view default behaviour is enabled or not
     * @param properties.table.cssclass defines cssclass of headers table
     * @param properties.table.headers headers, array of header names, string contains header names divided by '|', or '*'
     * @param properties.table.index defines table index column properties
     * @param properties.table.index.size defines table index column size
     * @param properties.table.size defines size of headers table
     * @param properties.table.filter filter for headers table
     * @param properties.statusbar specify status bar properties
     * @param properties.statusbar.visible specify status bar visibility
     * @param properties.statusbar.autosize defines status auto size mode
     * @param properties.statusbar.cssclass specify status bar cssclass name
     * @param properties.statusbar.sizes defines status auto size settings
     * @param properties.statusbar.sizes.medium defines medium size
     * @param properties.statusbar.sizes.small defines small size
     * @param properties.statusbar.sections additional options of sections in statusbar
     * @param properties.statusbar.sections.info callback to return information for statusbar
     * @param properties.statusbar.sections.samples section to show information about samples like time or depth
     * @param properties.statusbar.sections.samples.label label to show information
     * @param properties.statusbar.sections.samples.format defines format of the section
     * @param properties.statusbar.sections.traces section to show information about traces
     * @param properties.statusbar.sections.traces.label label to show information about trace
     * @param properties.statusbar.sections.samplevalue section to show information about sample value
     * @param properties.statusbar.sections.samplevalue.label label to show information about trace
     * @param properties.statusbar.sections.samplevalue.format defines format of the section
     * @param properties.pickingevent event for picking
     */
    setProperties(properties?: object | { auxiliarychart?: object | { size?: any; title?: any; charts?: any; } ; table?: object | { visible?: boolean | string; enabled?: boolean; cssclass?: string; headers?: FieldDesc[] | string[] | string; index?: object | { size?: number | string; } ; size?: number; filter?: filter | any; } ; statusbar?: object | { visible?: boolean; autosize?: boolean; cssclass?: string; sizes?: object | { medium?: number; small?: number; } ; sections?: object | { info?: Function; samples?: object | { label?: string; format?: string | NumberFormat; } ; traces?: object | { label?: string; } ; samplevalue?: object | { label?: string; format?: string | NumberFormat; } ; } ; } ; pickingevent?: ToolsEvents; } ): this;
    /**
     * Set subset of header fields to be displayed in table widget
     * @param headers array of header names, string contains header names divided by '|', or '*'
     */
    setTableHeaders(headers: FieldDesc[] | string[] | string): this;
    /**
     * Returns preferred headers array(or string) that are displaying in table widget
     */
    getTableHeaders(): string | object[];
    /**
     * Add header chart
     * @param headerName trace header name
     * @param options chart options
     * @param options.range header data range
     * @param options.linestyle line style
     * @param options.chart chart options
     * @param options.chart.linestyle chart line style
     * @param options.axis axis options
     * @param options.axis.linestyle axis line style
     */
    addHeaderChart(headerName: string, options?: object | { range?: Range; linestyle?: object | string | LineStyle; chart?: object | { linestyle?: object | string | LineStyle; } ; axis?: object | { linestyle?: object | string | LineStyle; } ; } ): this;
    /**
     * Remove header
     * @param headerName trace header name
     */
    removeHeaderChart(headerName: string): this;
    /**
     * Returns current widget options
     */
    getOptions(): any;
    /**
     * Returns properties
     */
    getProperties(): {auxiliarychart: {size: any; title: any; charts: any}; table: {visible: boolean | string; enabled: boolean; cssclass: string; headers: FieldDesc[] | string[] | string; index: {size: number | string}; size: number; filter: filter | null}; statusbar: {autosize: boolean; sizes: {medium: number; small: number}; visible: boolean; cssclass: string; sections: {info: Function; samples: {label: string; format: string | NumberFormat}; traces: {label: string}; samplevalue: {label: string; format: string | NumberFormat}}}; pickingevent: ToolsEvents} | any;
    /**
     * initialize splitter tool tool
     * @param manipulatorLayer manipulator layer
     * @param plots group for which we want to change the size
     */
    protected initializeHorizontalSplitterTool(manipulatorLayer?: CompositeNode, plots?: Group[] | null): Splitter;
    /**
     * This method updates the layout of the seismic widget and all its child components with new/modified settings.
     */
    updateLayout(): this;
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
     * @param options.hideauxiliarychart hide auxiliary chart if chart is visible
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
     */
    exportToPdf(options?: object | { header?: HeaderComponent; footer?: FooterComponent; documentheader?: HeaderComponent; documentfooter?: FooterComponent; output?: string; save?: boolean; printsettings?: object | { paperformat?: any; top?: number; bottom?: number; left?: number; right?: number; orientation?: string; scaling?: string; keepaspectratio?: boolean; continuous?: boolean; } ; hideauxiliarychart?: boolean; limits?: object | { start?: number; end?: number; } ; scale?: number | null; deviceunit?: string; imagescalefactor?: number; imagecompression?: object | { mode?: ImageCompression; quality?: number; speed?: SpeedCompression; } ; streamcompression?: boolean; pdfstream?: IWritable; embededfonts?: EmbededFont[]; } ): Promise<IWritable>;
    /**
     * Set table trace filter
     * @param filter filter
     */
    setTableTraceFilter(filter: filter | any): this;
    /**
     * Get table trace filter
     */
    getTableTraceFilter(): filter | null;
}
/**
 * Seismic widget events
 */
export enum Events {
    /**
     * Event type fired when header view visibility changed
     */
    HeaderViewVisibilityChanged = 'HeaderViewVisibilityChanged'
}
