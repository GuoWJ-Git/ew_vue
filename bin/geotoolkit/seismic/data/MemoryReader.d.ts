import {DataHeader} from './DataHeader';
import {SeismicReader} from './SeismicReader';
import {AbstractUnit} from '../../util/AbstractUnit';
import {IndexType, SeismicMetaData} from './SeismicMetaData';
import {FieldDesc} from './FieldDesc';
import {Rect} from '../../util/Rect';

/**
 * Callback for geotoolkit.seismic.data.MemoryReader to get trace data
 */
export type getTraceData = (reader: MemoryReader, trace: number[], traceId: number) => void;
/**
 * Callback for geotoolkit.seismic.data.MemoryReader to get trace header
 */
export type getTraceHeader = (reader: MemoryReader, trace: DataHeader, data: number[], traceId: number) => void;
/**
 * Callback for geotoolkit.seismic.data.MemoryReader for asynchronous to return samples and trace header
 */
export type getTraceProcessor = (traceProcessor: object | { getTraceData?: Function; getTraceHeader?: Function; } ) => void;
/**
 * Callback for geotoolkit.seismic.data.MemoryReader for asynchronous requests.
 */
export type getAsyncData = (query: object | { from?: number; to?: number; headers?: boolean; samples?: boolean; } , callback: Function) => void;
/**
 * A seismic reader that keeps all traces in memory.
 * This reader should only be used for small seismic datasets given that
 * all its data is kept in memory.
 * This reader can work in synchronous or asynchronous mode.
 * See the setTraceProcessor method for further details and examples.<br>
 * @example
 * ```javascript
 * import {MemoryReader} from '@int/geotoolkit/seismic/data/MemoryReader';
 * const reader = new MemoryReader({
 *   'numberOfTraces': 1024,
 *   'numberOfSamples': 100,
 *   'sampleRate': 0.004
 * })
 * ```
 */
export class MemoryReader extends SeismicReader {
    /**
     * A seismic reader that keeps all traces in memory.
     * This reader should only be used for small seismic datasets given that
     * all its data is kept in memory.
     * This reader can work in synchronous or asynchronous mode.
     * See the setTraceProcessor method for further details and examples.<br>
     * @param options options object
     * @param options.numberOfSamples The sample count per trace
     * @param options.numberOfTraces The number of traces in the memory reader
     * @param options.startValue The start index value of samples in the memory reader
     * @param options.nullValue nullValue is passed when a value does not exist. There will be a break in the wiggles or density plot in that area. Fill will not fill that area. User can set a custom color for nullValue
     * @param options.sampleRate The sample rate
     * @param options.sections If the reader has sections, the number of traces in each section. See SeismicMedataData.sections for more info.
     * @param options.zUnit Unit for the usual time or depth axis in the dataset
     * @param options.volumeKeyNames See SeismicMetaData VolumeKeyNames for more info.
     * @param options.indexType Index type for this memory reader
     * @param options.volumeDefaultKeyNames See SeismicMetaData VolumeDefaultKeyNames for more info.
     * @param options.xyKeyNames See SeismicMetaData xyKeyInformation for more info.
     */
    constructor(options: object | { numberOfSamples?: number; numberOfTraces?: number; startValue?: number; nullValue?: number; sampleRate?: number; sections?: number[]; zUnit?: AbstractUnit; volumeKeyNames?: any; indexType?: IndexType; volumeDefaultKeyNames?: any; xyKeyNames?: any; } );
    /**
     */
    getTraceHeaderFields(): FieldDesc[];
    /**
     * Sets the 'trace processor' of this memory reader.<br>
     * The trace processor is a delegate object responsible for providing data to the reader.<br>
     * @example
     * ```javascript
     * // Example of asynchronous reader
     * import {MemoryReader} from '@int/geotoolkit/seismic/data/MemoryReader';
     * const reader = new MemoryReader({
     *   'numberOfTraces': 1024,
     *   'numberOfSamples': 100,
     *   'sampleRate': 0.004
     * })
     * .setTraceProcessor({
     *        'getAsyncData': (query, callback) => {
     *            callback({'getTraceData': (reader, trace, traceId) => {
     *                for (let i = 0; i < reader.getNumberOfSamples(); i++) {
     *                    trace[i] = Math.cos(i / 8);
     *                }
     *            }});
     *        },
     *        'getDataStatistics': () => ({
     *                'average': 0,
     *                'min': -1,
     *                'max': 1,
     *                'rms': Math.sqrt(2) / 2
     *        })
     *    });
     * ```
     * @example
     * ```javascript
     * // Example of synchronous reader
     * ...
     * reader
     *   .setTraceProcessor({
     *           'getTraceData': (reader, trace, traceId) => {
     *               for (let i = 0; i < reader.getNumberOfSamples(); i++) {
     *                  trace[i] = Math.cos(i / 8);
     *               }
     *           },
     *           ...
     *       });
     * ```
     * @param traceProcessor object that implements following set of functions which provide trace data and statistics to reader.
     * @param traceProcessor.getDataStatistics method that should return seismic data statistics {'average':Number, 'min':Number, 'max':Number, 'rms':Number}
     * @param traceProcessor.getTraceData A callback function that fills the given trace with its sample values
     * @param traceProcessor.getTraceHeader A callback function to get trace header data
     * @param traceProcessor.getAsyncData Function used in asynchronous mode, it should return an object with a function getTraceData
     */
    setTraceProcessor(traceProcessor: object | { getDataStatistics: Function; getTraceData?: Function; getTraceHeader?: Function; getAsyncData?: Function; } ): this;
    /**
     * Returns statistics
     */
    getStatistics(): {average: number; min: number; max: number; rms: number} | object;
    /**
     * read Seismic data statistics
     * @param callback method to be called when data is ready
     */
    readDataSetStatistics(callback: Function): void;
    /**
     * returns seismic model limits
     */
    getModelLimits(): Rect;
    /**
     * Set number of traces
     * @param numberOfTraces The number of traces in the memory reader
     */
    setNumberOfTraces(numberOfTraces: number): this;
    /**
     * returns number of traces
     */
    getNumberOfTraces(): number;
    /**
     * returns number of samples
     */
    getNumberOfSamples(): number;
    /**
     * Sets number of samples per trace
     * @param numberOfSamples number of samples per trace
     */
    setNumberOfSamples(numberOfSamples: number): this;
    /**
     * returns sample rate
     */
    getSampleRate(): number;
    /**
     * returns seismic trace section
     * @param query this specifies the condition of the request
     * @param callback method to be called when data is ready
     */
    select(query: object, callback: Function): void;
    /**
     * load {geotoolkit.seismic.data.SeismicMetaData} seismic meta data
     * @param callback method to be called when data is ready
     */
    loadMetaData(callback: Function): void;
    /**
     * returns seismic meta data information
     */
    getMetaData(): SeismicMetaData;
}
