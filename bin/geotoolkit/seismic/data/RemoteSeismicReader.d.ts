import {SeismicReader} from './SeismicReader';
import {RemoteSeismicDataSource} from './RemoteSeismicDataSource';
import {SeismicMetaData} from './SeismicMetaData';
import {DataHeader} from './DataHeader';
import {RemoteReaderDataProvider} from './RemoteReaderDataProvider';
import {Rect} from '../../util/Rect';
import {Cancel} from '../../util/Cancel';
import {FieldDesc} from './FieldDesc';

/**
 * RemoteSeismicReader is a reader that can access data on a server rather than on a local file.<br>
 * This implementation follows the INTGeoServer(© Interactive Network Technologies, Inc.) API.<br>
 * Meaning that it can be used out of the box to fetch traces from an INTGeoServer(© Interactive Network Technologies, Inc.).<br>
 * <br>
 * This class uses internally xhr and binary transfer to fetch the traces from the server.<br>
 */
export class RemoteSeismicReader extends SeismicReader {
    /**
     * RemoteSeismicReader is a reader that can access data on a server rather than on a local file.<br>
     * This implementation follows the INTGeoServer(© Interactive Network Technologies, Inc.) API.<br>
     * Meaning that it can be used out of the box to fetch traces from an INTGeoServer(© Interactive Network Technologies, Inc.).<br>
     * <br>
     * This class uses internally xhr and binary transfer to fetch the traces from the server.<br>
     * @param datasource The datasource for this reader
     * @param options The options to use
     * @param options.nullValue nullValue is passed when a value does not exist. There will be a break in the wiggles in that area. Fill will not fill that area. User can set a custom color for NullValue
     * @param options.metadata seismic meta data
     * @param options.originalMetaData original seismic meta data
     * @param options.statistics data statistics
     * @param options.traceheader The trace header
     * @param options.byteorder byte order
     * @param options.decimation decimation options
     * @param options.provider data provider
     * @param nullValue nullValue is passed when a value does not exist. There will be a break in the wiggles in that area. Fill will not fill that area. User can set a custom color for NullValue
     */
    constructor(datasource: RemoteSeismicDataSource, options?: object | { nullValue?: number; metadata?: SeismicMetaData; originalMetaData?: SeismicMetaData; statistics?: any; traceheader?: DataHeader; byteorder?: string; decimation?: any; provider?: RemoteReaderDataProvider; } , nullValue?: number);
    /**
     * The default workflow constant. By default no compression will be done.
     */
    static DefaultWorkflow: string;
    /**
     * Returns host name
     */
    getHost(): string;
    /**
     * Returns file name
     */
    getSeismicFileName(): string;
    /**
     * Returns statistics
     */
    getStatistics(): {average: number; min: number; max: number; rms: number} | object;
    /**
     * Returns number of traces
     */
    getNumberOfTraces(): number;
    /**
     * Returns number of samples
     */
    getNumberOfSamples(): number;
    /**
     * Returns sample rate
     */
    getSampleRate(): number;
    /**
     * Returns seismic model limits
     */
    getModelLimits(): Rect;
    /**
     * Returns seismic meta data information
     */
    getMetaData(): SeismicMetaData;
    /**
     * Returns seismic original meta data information before any decimation
     */
    getOriginalMetaData(): SeismicMetaData;
    /**
     * Update reader by making new seismic query
     * @param query this specifies the condition of the request
     * @param callback method to be called when data is ready
     */
    update(query?: any, callback?: Function): void;
    /**
     * Select seismic trace sections and then call "callback" method. This function executes a 'select' operation using the given query.<br>
     * The query is executed server side (for RemoteSeismicReader) to filter the traces requested by the client side.<br>
     * The servers sends back the data, and when the request is finalized, the given callback function is called with the result.
     * @param query a condition in JSON format
     * @param query.headers result should have trace headers
     * @param query.samples result should have trace samples
     * @param query.from specify a start trace index from 0 to getTraceNumbers()-1
     * @param query.to specify end trace index from 0 to getTraceNumbers()-1
     * @param query.traceIndexes optional indices of traces from 0 to getTraceNumbers()-1
     * @param query.cancel cancellation token used to cancel retrieving data
     * @param callback callback to be called when section is loaded
     */
    select(query: object | { headers?: boolean; samples?: boolean; from?: number; to?: number; traceIndexes?: number[]; cancel?: Cancel; } , callback: Function): Promise<any>;
    /**
     * Return instance of data provider
     */
    getDataProvider(): RemoteReaderDataProvider;
    /**
     * Notify server that reader resources can be released on server
     */
    release(): void;
    /**
     * Returns an array of field descriptors for the dataset read by this
     * seismic reader.
     */
    getTraceHeaderFields(): FieldDesc[];
}
