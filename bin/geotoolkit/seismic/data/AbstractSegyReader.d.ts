import {SeismicReader} from './SeismicReader';
import {SeismicFormat} from './SeismicFormat';
import {Rect} from '../../util/Rect';
import {SeismicMetaData} from './SeismicMetaData';
import {FieldDesc} from './FieldDesc';
import {TaskScheduler} from '../../util/taskscheduler';

/**
 * Defines an abstract SEG-Y reader
 */
export class AbstractSegyReader extends SeismicReader {
    /**
     * Defines an abstract SEG-Y reader
     * @param options options or instance of format to specify the  trace
     * data format and location of headers
     * @param options.segyFormat SEG-Y format
     * @param options.samplePower sample power
     * @param options.numberofparalleltasks number of parallel requests
     * @param options.synchronous synchronous requests
     * @param options.nullValue null value
     */
    constructor(options?: object | { segyFormat?: SeismicFormat; samplePower?: number; numberofparalleltasks?: number; synchronous?: boolean; nullValue?: number; }  | SeismicFormat);
    /**
     * Returns seismic model limits
     */
    getModelLimits(): Rect;
    /**
     * Load {geotoolkit.seismic.data.SeismicMetaData} seismic meta data
     * @param callback method to be called when data is ready
     */
    loadMetaData(callback: Function): void;
    /**
     * Returns seismic meta data information
     */
    getMetaData(): SeismicMetaData;
    /**
     * Gets statistics
     */
    getStatistics(): {min: number; max: number; average: number; rms: number} | object;
    /**
     * Sets statistics
     * @param statistics min, max, average, rms
     * @param statistics.min minimum
     * @param statistics.max maximum
     * @param statistics.average average
     * @param statistics.rms rms
     */
    setStatistics(statistics: object | { min?: number; max?: number; average?: number; rms?: number; } ): void;
    /**
     * Read SEG-Y statistics. This method reads maximum calcTraces
     * from data and calculate statistics based on it.
     * @param callback method to be called when statistics will be calculated.
     * @param calcTraces number of traces to calculate statistics
     */
    readDataSetStatistics(callback: Function, calcTraces?: number): void;
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
     * Return SEG-Y data format
     */
    getDataFormat(): SeismicFormat;
    /**
     * Returns seismic trace section
     * @param query a query in JSON format. Should contain parameters relevant to the trace, such as "from", "to", "headers", and "samples"
     * @param query.headers ignored
     * @param query.samples ignored
     * @param query.from specify a start trace index from 0 to getTraceNumbers()-1
     * @param query.to specify end trace index from 0 to getTraceNumbers()-1
     * @param query.traceIndexes optional indices of traces from 0 to getTraceNumbers()-1
     * @param callback callback to be called then section is loaded. This method has {geotoolkit.seismic.data.QueryResult}
     */
    select(query: object | { headers?: boolean; samples?: boolean; from?: number; to?: number; traceIndexes?: number[]; } , callback: Function): void;
    /**
     * Returns an array of field descriptors for the dataset read by this
     * seismic reader.
     */
    getTraceHeaderFields(): FieldDesc[];
    /**
     * Return file size in bytes
     */
    getFileSize(): number;
    /**
     * Read a binary section
     * @param callback callback function to return binary data
     * @param start start position in bytes
     * @param end end position in bytes
     */
    readBinarySection(callback: Function, start: number, end: number): void;
    /**
     * This methods is called if it is necessary to read a individual traces.
     * The default implementation calls readBinarySection for each trace in a parallel. The solve of
     * promise can return a array of binary data for each trace or one buffers with data for all requested traces
     * @param traceIndices array on trace indices to be loaded
     */
    protected readTraceIndices(traceIndices: number[]): Promise<any>;
    /**
     * This methods is called if it is necessary to read a trace range.
     * @param traceFrom from trace
     * @param traceTo from trace
     */
    protected readTraceRange(traceFrom: number, traceTo: number): Promise<any>;
    /**
     * Returns task scheduler
     */
    protected getTaskScheduler(): TaskScheduler;
    /**
     * Return offset in the SEG-Y file
     * @param traceId trace id
     */
    protected getTraceOffset(traceId: number): number;
}
