import {AnnotatedWidget} from '../../widgets/AnnotatedWidget';
import {SeismicPipeline} from '../pipeline/SeismicPipeline';
import {TextStyle} from '../../attributes/TextStyle';
import {Range} from '../../util/Range';
import {LineStyle} from '../../attributes/LineStyle';

/**
 * TraceHeaderChartWidget is essentially a base widget specialized for seismic headers data display.
 */
export class TraceHeaderChartWidget extends AnnotatedWidget {
    /**
     * TraceHeaderChartWidget is essentially a base widget specialized for seismic headers data display.
     * @param options options
     * @param options.pipeline seismic pipeline
     * @param options.cssclass defines cssclass of headers table
     * @param options.charts array of char options
     * @param options.title chart title or title options
     * @param options.title.text title text
     * @param options.title.textstyle title text style {@link @int/geotoolkit/scene/shapes/Text.Text#setTextStyle}
     * @param options.title.size title size
     * @param options.annotationsize JSON to hold (width or height) of the annotation
     * @param options.annotationsize.east preferred width of east annotation size
     * @param options.annotationsize.south preferred height of south annotation size
     * @param options.annotationsize.west preferred width of west annotation size
     * @param options.annotationsize.north preferred height of north annotation size
     * @param params deprecated (since 2021.1 (3.3) use first arg to set all options) params
     */
    constructor(options?: SeismicPipeline | object | { pipeline?: SeismicPipeline; cssclass?: string; charts?: any[]; title?: string | object | { text?: string; textstyle?: TextStyle | string | any; size?: number; } ; annotationsize?: object | { east?: string | number; south?: string | number; west?: string | number; north?: string | number; } ; } , params?: any);
    /**
     * Dispose node. Clear all listeners
     * and disconnect style to avoid memory leaks
     */
    dispose(): void;
    /**
     * Returns pipeline
     */
    getPipeline(): SeismicPipeline;
    /**
     * set pipeline
     * @param pipeline Seismic Pipeline
     */
    setPipeline(pipeline: SeismicPipeline): this;
    /**
     * Sets existing chart options
     * @param headerName header name
     * @param options chart options
     */
    setChartOptions(headerName: string, options: object): object;
    /**
     * Set widget or specific chart options
     * @deprecated deprecated since 2021.1 (3.3) use setProperties() or setChartOptions() instead.
     * @param options options see {@link @int/geotoolkit/seismic/widgets/TraceHeaderChartWidget.TraceHeaderChartWidget#setProperties}
     * @param chartOptions chartOptions
     */
    setOptions(options?: any, chartOptions?: any): this;
    /**
     * Returns widget or specific chart options
     */
    getOptions(): {title: object; charts: object[]} | any;
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
     * @param options.axis.title axis title
     * @param options.axis.title.text axis title
     * @param options.axis.title.visible axis title visibility
     */
    addHeader(headerName: string, options?: object | { range?: Range; linestyle?: LineStyle | string | object; chart?: object | { linestyle?: LineStyle | string | object; } ; axis?: object | { linestyle?: LineStyle | string | object; title?: string | object | { text?: string; visible?: boolean; } ; } ; } ): this;
    /**
     * Remove header
     * @param headerName trace header name
     */
    removeHeader(headerName: string): this;
    /**
     * Set chart title options
     * @example
     * ```javascript
     * chart.setTitleOptions('Auxiliary Chart')
     * ```
     * @example
     * ```javascript
     * chart.setTitleOptions({'size': 20, 'textstyle': 'red'});
     * ```
     * @example
     * ```javascript
     * chart.setTitleOptions({
     *      'textstyle': {
     *          'font': '16px Roboto',
     *          'color': 'gray'
     *      },
     *      'text': 'Auxiliary Chart'
     * });
     * ```
     * @param title chart title or title options
     * @param title.text title text
     * @param title.textstyle title text style {@link @int/geotoolkit/scene/shapes/Text.Text.setTextStyle}
     * @param title.size title size
     */
    setTitleOptions(title: string | object | { text?: string; textstyle?: TextStyle | string | object; size?: number; } ): this;
    /**
     * Set chart title
     * @deprecated since 3.4, use setTitleOptions instead
     * @param title chart title or title options
     * @param title.text title text
     * @param title.textstyle title text style {@link @int/geotoolkit/scene/shapes/Text.Text.setTextStyle}
     * @param title.size title size
     */
    setTitle(title: string | object | { text?: string; textstyle?: TextStyle | string | object; size?: number; } ): this;
    /**
     * Returns chart title
     * @deprecated since 3.4, use getTitleOptions instead
     */
    getTitle(): {text: string; textstyle: TextStyle; size: number} | object;
    /**
     * Returns chart title options
     */
    getTitleOptions(): {text: string; textstyle: TextStyle; size: number} | object;
    /**
     * Returns the traceheader properties
     */
    getProperties(): {charts: any[]; title: {text: string; textstyle: TextStyle; size: number}; annotationsize: {east: string | number; south: string | number; west: string | number; north: string | number}} | any;
    /**
     * Sets the trackheader properties
     * @example
     * ```javascript
     * chart.setProperties({
     *      'title': {
     *          'text': 'Auxiliary Chart',
     *          'textstyle': {
     *              'font': '16px Roboto',
     *              'color': 'gray'
     *          },
     *          'size': 20
     *      }
     * });
     * ```
     * @example
     * ```javascript
     * chart.setProperties({'title': 'Auxiliary Chart', 'charts': ['CDPY', 'CDPX']});
     * ```
     * @example
     * ```javascript
     * // following call will synchronize charts with array, means that all other charts will be deleted
     * chart.setProperties({
     *      'charts': [{
     *          'name': 'CDPY',
     *          'linestyle': 'blue'
     *      },{
     *          'name': 'CDPX',
     *          'linestyle': 'red'
     *      }]
     * });
     * ```
     * @param props props
     * @param props.pipeline seismic pipeline
     * @param props.cssclass defines cssclass of headers table
     * @param props.charts array of char options
     * @param props.title chart title or title options
     * @param props.title.text title text
     * @param props.title.textstyle title text style {@link @int/geotoolkit/scene/shapes/Text.Text#setTextStyle}
     * @param props.title.size title size
     * @param props.annotationsize JSON to hold (width or height) of the annotation
     * @param props.annotationsize.east preferred width of east annotation size
     * @param props.annotationsize.south preferred height of south annotation size
     * @param props.annotationsize.west preferred width of west annotation size
     * @param props.annotationsize.north preferred height of north annotation size
     */
    setProperties(props?: object | { pipeline?: SeismicPipeline; cssclass?: string; charts?: any[]; title?: string | object | { text?: string; textstyle?: TextStyle | string | any; size?: number; } ; annotationsize?: object | { east?: string | number; south?: string | number; west?: string | number; north?: string | number; } ; } ): this;
}
