import {TraceSection} from './TraceSection';
import {BinaryHeader} from './BinaryHeader';
import {Trace} from './Trace';
import {Range} from '../../util/Range';

/**
 * Create section, which keeps individual traces
 */
export class BinaryTraceIndicesSection extends TraceSection {
    /**
     * Create section, which keeps individual traces
     * @param traceIndices array of indices
     * @param headerSize header size in bytes
     * @param sampleSize sample size in bytes
     * @param samplesPerTrace samples per trace
     * @param traceHeader trace header
     */
    constructor(traceIndices: number[], headerSize: number, sampleSize: number, samplesPerTrace: number, traceHeader: BinaryHeader);
    /**
     * Sets statistics
     * @param statistics statistics  min, max, average, rms
     * @param statistics.min minimum
     * @param statistics.max maximum
     * @param statistics.average average
     * @param statistics.rms rms
     */
    setStatistics(statistics?: object | { min?: number; max?: number; average?: number; rms?: number; } ): this;
    /**
     * Returns number of traces in the section
     */
    getNumberOfTraces(): number;
    /**
     * Returns trace by index in the section
     * @param index trace index in the section starting from 0 to  getNumberOfTraces()-1
     */
    getTraceByIndex(index: number): Trace;
    /**
     * Return statistics
     */
    getStatistics(): {min: number; max: number; average: number; rms: number} | object;
    /**
     * Sets unique sectionID
     * @param sectionId index of the chunk of the trace data
     */
    setSectionID(sectionId: number): this;
    /**
     * Gets section id
     */
    getSectionID(): number;
    /**
     * Gets trace header data
     * @param traceId unique trace number
     */
    getHeaderData(traceId: number): Uint8Array | any;
    /**
     * Gets trace
     * @param traceId unique trace number
     */
    getTrace(traceId: number): Trace;
    /**
     * Returns trace range
     */
    getTraceRange(): Range;
    /**
     * Returns size in bytes
     */
    getSectionSize(): number;
    /**
     * Returns trace header size in bytes
     */
    getTraceHeaderSize(): number;
}
