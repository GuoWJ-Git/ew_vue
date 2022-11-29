import {BaseWidget} from '../../widgets/BaseWidget';
import {SeismicPipeline} from '../pipeline/SeismicPipeline';
import {FieldDesc} from '../data/FieldDesc';

/**
 * Filter for TraceHeaderViewWidget.
 */
export type filter = (headerName: string, traceNumber: number, value: string) => boolean;
/**
 * TraceHeaderViewWidget is essentially a base widget specialized for seismic headers data display.
 * @example
 * ```javascript
 * // following code shows how to create a seismic headers view widget using a pipeline. The {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline.SeismicPipeline} is created earlier using a seismic reader.
 * import {TraceHeaderViewWidget} from '@int/geotoolkit/seismic/widgets/TraceHeaderViewWidget';
 * const widget = new TraceHeaderViewWidget({
 *      'pipeline':pipeline,
 *      'headers': [
 *          'INLINE',
 *          {
 *              'name': 'XLINE',
 *              'title': 'XLINE'// or change title of the particular header
 *          }]
 *  });
 * ```
 */
export class TraceHeaderViewWidget extends BaseWidget {
    /**
     * TraceHeaderViewWidget is essentially a base widget specialized for seismic headers data display.
     * @param options options
     * @param options.pipeline seismic pipeline
     * @param options.cssclass defines cssclass of headers table
     * @param options.headers headers, array of header names, string contains header names divided by '|', or '*'
     * @param options.index defines index column options
     * @param options.index.size defines index column size in pixels, also accepts 'auto' that means that size depends on max header title size
     * @param options.filter filter
     * @param params deprecated (since 2021.1 (3.3) use first arg to set all options) params
     */
    constructor(options?: SeismicPipeline | object | { pipeline?: SeismicPipeline; cssclass?: string; headers?: FieldDesc[] | string[] | string; index?: object | { size?: number | string; } ; filter?: filter | any; } , params?: any);
    /**
     * function call in the constructor to initialize tools in the widget
     */
    protected initializeTools(): this;
    /**
     * dispose existing application
     */
    dispose(): void;
    /**
     * Returns pipeline
     */
    getPipeline(): SeismicPipeline;
    /**
     * Set pipeline
     * @param pipeline Seismic Pipeline
     */
    setPipeline(pipeline: SeismicPipeline): this;
    /**
     * Returns preferred headers array(or string) that are displaying in table widget
     */
    getTableHeaders(): string | object[];
    /**
     * Set subset of header fields to be displayed in table widget
     * @param headers array of header names, string contains header names divided by '|', or '*'
     */
    setTableHeaders(headers: FieldDesc[] | string[] | string): this;
    /**
     * Returns current widget options
     */
    getOptions(): {name: string; headers: string | object[]; cssclass: string; index: {size: number | string}; filter: filter | null} | any;
    /**
     * Set widget options
     * @param options headers view options
     * @param options.cssclass defines cssclass of headers table
     * @param options.index defines index column options
     * @param options.index.size defines index column size in pixels, also accepts 'auto' that means that size depends on max header title size
     * @param options.headers headers, array of header names, string contains header names divided by '|', or '*'
     * @param options.filter filter
     */
    setOptions(options: object | { cssclass?: string; index?: object | { size?: number | string; } ; headers?: FieldDesc[] | string[] | string; filter?: filter | any; } ): this;
    /**
     * Sets properties
     * @param properties properties
     * @param properties.pipeline seismic pipeline
     * @param properties.cssclass defines cssclass of headers table
     * @param properties.headers headers, array of header names, string contains header names divided by '|', or '*'
     * @param properties.index defines index column options
     * @param properties.index.size defines index column size in pixels, also accepts 'auto' that means that size depends on max header title size
     * @param properties.filter filter
     */
    setProperties(properties?: object | { pipeline?: SeismicPipeline; cssclass?: string; headers?: FieldDesc[] | string[] | string; index?: object | { size?: number | string; } ; filter?: filter | any; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {pipeline: SeismicPipeline; cssclass: string; headers: string | object[]; index: {size: number | string}; filter: filter | null} | any;
    /**
     * Select trace index for highlighting
     * @param traceIndex trace index for highlighting
     */
    highlightTraceIndex(traceIndex: number): this;
    /**
     * Sets trace filter
     * @param filter filter
     */
    setTraceFilter(filter: filter | any): this;
    /**
     * Gets trace filter
     */
    getTraceFilter(): filter | null;
}
