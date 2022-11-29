import {SeismicData} from './SeismicData';
import {SeismicMetaData} from './SeismicMetaData';
import {Rect} from '../../util/Rect';
import {FieldDesc} from './FieldDesc';
import {Cancel} from '../../util/Cancel';

/**
 * Seismic reader reads seismic data from the different sources and provides it to trace processor in uniform representation as a collection of traces,<br>
 * where a trace is a collection of samples. A trace is logically subdivided into zero or more trace headers and zero or more samples.<br>
 * Seismic Reader also returns information about seismic data, like number of many traces it has, number of samples per trace, <br>
 * unit of samples, sample rate and also provides trace headers information.
 */
export class SeismicReader extends SeismicData {
    /**
     * Seismic reader reads seismic data from the different sources and provides it to trace processor in uniform representation as a collection of traces,<br>
     * where a trace is a collection of samples. A trace is logically subdivided into zero or more trace headers and zero or more samples.<br>
     * Seismic Reader also returns information about seismic data, like number of many traces it has, number of samples per trace, <br>
     * unit of samples, sample rate and also provides trace headers information.
     * @param options nullValue or options is passed when a value does not exist. There will be a break in the wiggles in that area. Fill will not fill that area. User can set a custom color for NullValue
     * @param options.nullValue null value
     * @param options.fetchsize maximum number of the traces per requests
     */
    constructor(options: number | object | { nullValue?: number; fetchsize?: number; } );
    /**
     * Returns supported extra options
     */
    getOptions(): any;
    /**
     * Returns null value
     */
    getNullValue(): number;
    /**
     * Returns seismic original meta data information before any decimation
     */
    getOriginalMetaData(): SeismicMetaData;
    /**
     * Returns seismic model limits
     */
    getModelLimits(): Rect;
    /**
     * Load {geotoolkit.seismic.data.SeismicMetaData} seismic meta data.
     * Seismic meta data is a map of general properties of the seismic data source like: number of traces, sample rate, .
     * @param callback method to be called when data is ready
     */
    loadMetaData(callback: Function): void;
    /**
     * Returns number of traces
     */
    getNumberOfTraces(): number;
    /**
     * Returns number of samples
     */
    getNumberOfSamples(): number;
    /**
     * Returns sample rate . Sample rate is the number of times an analog signal is measured (sampled) per second.<br>
     * Basically it is a difference between nearest sample values. This term comes from digital signal processing and defines how <br>
     * continuous signal is sampled.   For example: 0.004/ second
     */
    getSampleRate(): number;
    /**
     * Returns an array of field descriptors for the dataset read by this
     * seismic reader.
     */
    getTraceHeaderFields(): FieldDesc[];
    /**
     * returns seismic trace section
     * @example
     * ```javascript
     * // to read a specific range of traces
     * reader.select({
     *  'from': 10,
     *  'to': 20
     * }, (fetchResult) => {
     *      // fetchResult is instance of @int/geotoolkit/seismic/data/QueryResult
     *      fetchResult.foreach((index, section) => {
     *        for (let i = 10; i <= 20; i++) {
     *            console.log(section.getTrace(i));
     *        }
     *    });
     * });
     * ```
     * @example
     * ```javascript
     * //  selection by trace indices
     * reader.select({
     *   'traceIndexes': [15, 20]
     *  }, (fetchResult) => { ... });
     * ```
     * @param query this specifies the condition of the request
     * @param query.cancel cancellation token used to cancel retrieving data
     * @param callback method to be called when data is ready
     */
    select(query: any | object | { cancel?: Cancel; } , callback: Function): void;
    /**
     * Update seismic query and returns meta information
     * @param options this specifies the condition of the request
     * @param callback method to be called when data is ready
     */
    update(options: any, callback: Function): void;
    /**
     * Returns interface, if reader can provide it
     * @param someInterface interface
     */
    queryInterface(someInterface: Function): object | null;
}
/**
 * SeismicReader Events enumerator
 */
export enum Events {
    /**
     * Event fired when a data received from the source
     */
    DataReceived = 'DataReceived',
    /**
     * Event fired when failed to get data from the source
     */
    DataFailed = 'DataFailed',
    /**
     * Event fired when trace header fields are changed from the source
     */
    TraceHeaderFieldsChanged = 'TraceHeaderFieldsChanged',
    /**
     * Event fired when reader is updated during method update
     */
    Updated = 'Updated'
}
