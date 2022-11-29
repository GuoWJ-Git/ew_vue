import {AbstractUnit} from '../../util/AbstractUnit';
import {SampleDataFormatType} from './SampleDataFormatType';

/**
 * Seismic meta data is a map of general properties of the seismic data source like: number of traces, sample rate, ...
 * The seismic toolkit creates instances of SeismicMetaData inside the toolkit.
 * Toolkit users do not need to create instances of this class.
 */
export class SeismicMetaData {
    /**
     * Seismic meta data is a map of general properties of the seismic data source like: number of traces, sample rate, ...
     * The seismic toolkit creates instances of SeismicMetaData inside the toolkit.
     * Toolkit users do not need to create instances of this class.
     * @param samplePower An integer power of 10 that is multiplied by the sample rate from the seismic dataset header before
     * the sample rate is used. Defaults to -6 if not specified. This default value implies that the sample rate in the dataset is
     * stored in micro-seconds.
     */
    constructor(samplePower?: number);
    /**
     * Sets options
     * @param options options
     * @param options.binaryInfo binary header information
     * @param options.ebcdicInfo Ebcdic info
     * @param options.sections Sections describes optional seismic panels in the resulting traces
     * @param options.numberOfTraces number of traces
     * @param options.samplesPerTrace sampels per trace
     * @param options.sampleRate sample rate
     * @param options.zunit Z unit;
     * @param options.startValue start sample value
     * @param options.xyKeyInformation the XY key information IF available, null otherwise
     * @param options.xyKeyInformation.x key information
     * @param options.xyKeyInformation.y key information
     * @param options.xyKeyInformation.xKeyName x key name
     * @param options.xyKeyInformation.yKeyName y key name
     * @param options.xyKeyInformation.multiplierType multiplier type
     * @param options.xyKeyInformation.multiplierFieldName multiplier field name
     * @param options.xyKeyInformation.fixedMultiplier fixed multiplier
     * @param options.volumeDefaultKeyNames the volume default key names If available, null otherwise
     * @param options.volumeDefaultKeyNames.i key names
     * @param options.volumeDefaultKeyNames.j key names
     * @param options.volumeKeyNames the volume key names IF available, null otherwise
     * @param options.volumeKeyNames.i key names
     * @param options.volumeKeyNames.j key names
     * @param options.indexType the index type of the under
     * @param options.sampleSize sample size in bytes
     * @param options.lineHeadersSize header line size
     * @param options.traceHeaderSize trace header size
     * @param options.traceSize trace size in bytes
     * @param options.traceDataSize trace data size
     * @param options.nullSampleValue sample null Value
     * @param options.sampleDataFormat sample data format
     * @param options.headerData header data
     */
    setOptions(options: object | { binaryInfo?: string; ebcdicInfo?: string; sections?: number[]; numberOfTraces?: number; samplesPerTrace?: number; sampleRate?: number; zunit?: AbstractUnit; startValue?: number; xyKeyInformation?: object | { x?: string; y?: string; xKeyName?: string; yKeyName?: string; multiplierType?: string; multiplierFieldName?: string; fixedMultiplier?: string; } ; volumeDefaultKeyNames?: object | { i?: string; j?: string; } ; volumeKeyNames?: object | { i?: string; j?: string; } ; indexType?: IndexType; sampleSize?: number; lineHeadersSize?: number; traceHeaderSize?: number; traceSize?: number; traceDataSize?: number; nullSampleValue?: number; sampleDataFormat?: SampleDataFormatType; headerData?: any; } ): this;
    /**
     * Returns the index type of the under
     */
    getIndexType(): IndexType;
    /**
     * Returns the volume key names IF available, null otherwise.
     * Those keys are the grid coordinates key names that can eventually be used to map IJ to XY
     */
    getVolumeKeyNames(): {i: string; j: string} | object;
    /**
     * Returns the volume default key names If available, null otherwise.
     * Those keys are the grid coordinates key names that may eventually be used to map IJ to XY
     */
    getVolumeDefaultKeyNames(): {i: string; j: string} | object;
    /**
     * Returns the XY key information IF available, null otherwise.
     * Those keys can be used to retrieve the X,Y coordinate of a given trace by looking up the values in the header.
     */
    getXYKeyInformation(): {x: string; y: string; xKeyName: string; yKeyName: string; multiplierType: string; multiplierFieldName: string; fixedMultiplier: string} | object;
    /**
     * Returns the sample unit
     */
    getZUnit(): AbstractUnit;
    /**
     * Returns start value of first sample.
     */
    getStartValue(): number;
    /**
     * Gets the sample rate for the seismic data. The sample rate is
     * specified in the units returned by <c>getZUnit()<c>.
     */
    getSampleRate(): number;
    /**
     * Returns sample data format
     */
    getSampleDataFormat(): SampleDataFormatType;
    /**
     * Gets the samples per trace
     */
    getSamplesPerTrace(): number;
    /**
     * Gets the number of traces
     */
    getNumberOfTraces(): number;
    /**
     * Gets trace size in bytes
     */
    getTraceSize(): number;
    /**
     * Gets the sections.<br>
     * <br>
     * Sections describes any optional seismic subdivisions.<br>
     * This is typically used to identify seismic panels in an arbitrary line.<br>
     */
    getSections(): number[];
    /**
     * Gets EBCDIC header information or text.
     * @example
     * ```javascript
     * // to get EBCDIC information if it's available and assume you have pipeline instance.
     * pipeline.getReader().getMetaData().getEBCDICHeader();
     * ```
     */
    getEBCDICHeader(): string;
    /**
     * Gets Binary header information or text.
     * @example
     * ```javascript
     * // to get binary header information if it's available and assume you have pipeline instance.
     * pipeline.getReader().getMetaData().getBinaryHeader();
     * ```
     */
    getBinaryHeader(): string;
    /**
     * Return sample size in bytes
     */
    getSampleSize(): number;
    /**
     * Return sample null value
     */
    getNullSampleValue(): number;
    /**
     * Return trace header size in bytes
     */
    getTraceHeaderSize(): number;
    /**
     * Return header line size in bytes
     */
    getLineHeadersSize(): number;
    /**
     * Create a copy of seismic meat data
     */
    clone(): SeismicMetaData;
}
/**
 * IndexType enumerator, describes the index type of the underlying seismic
 */
export enum IndexType {
    /**
     * Non indexed seismic
     */
    NonIndexed = 'nonindexed',
    /**
     * Seismic 2D line
     */
    TwoD = '2d',
    /**
     * A Seismic Volume, has at least 3 keys see getIndexKeyNames()
     */
    Volume = 'volume',
    /**
     * Seismic Gather, has at least 4 keys see getIndexKeyNames()
     */
    Gather = 'gather',
    /**
     * Custom index type
     */
    Custom = 'custom'
}
