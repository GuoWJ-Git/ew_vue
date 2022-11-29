import {SeismicReader} from './SeismicReader';
import {Rect} from '../../util/Rect';
import {FieldDesc} from './FieldDesc';
import {SeismicMetaData} from './SeismicMetaData';

/**
 * A seismic reader that keeps all traces in memory.
 * This Reader is the Proxy for any SeismicReader.
 * It saves traces in inner cache at the first request and gives them from cache at the following requests.
 */
export class CachingReader extends SeismicReader {
    /**
     * A seismic reader that keeps all traces in memory.
     * This Reader is the Proxy for any SeismicReader.
     * It saves traces in inner cache at the first request and gives them from cache at the following requests.
     * @param seismicReader instance of SeismicReader that will be proxied
     * @param memoryLimit Memory limit in Megabytes
     */
    constructor(seismicReader: SeismicReader, memoryLimit: number);
    /**
     * Sets memory limit in Megabytes. Attention! Removes all existing traces from cache.
     * @param memoryLimit Memory limit in Megabytes
     */
    setCacheSize(memoryLimit: number): this;
    /**
     */
    select(): void;
    /**
     * proxy to original reader
     */
    getOptions(): object | any;
    /**
     * proxy to original reader
     */
    getNullValue(): number;
    /**
     * proxy to original reader
     */
    getModelLimits(): Rect;
    /**
     * proxy to original reader
     */
    loadMetaData(): Function;
    /**
     * proxy to original reader
     */
    getNumberOfTraces(): number;
    /**
     * proxy to original reader
     */
    getNumberOfSamples(): number;
    /**
     * proxy to original reader
     */
    getSampleRate(): number;
    /**
     * proxy to original reader
     */
    getTraceHeaderFields(): FieldDesc[];
    /**
     * proxy to original reader
     */
    getStatistics(): any;
    /**
     * proxy to original reader
     */
    getMetaData(): SeismicMetaData;
}
