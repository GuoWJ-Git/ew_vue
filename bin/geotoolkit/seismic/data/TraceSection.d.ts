import {Trace} from './Trace';
import {Range} from '../../util/Range';

/**
 * TraceSection is an 'interface' class for seismic traces collection.
 * A trace section provides access to its traces individually whatever the internal format is (for example a bulk array of binary values).
 * Inheriting classes are responsible for providing the actual implementation.
 */
export class TraceSection {
    /**
     * TraceSection is an 'interface' class for seismic traces collection.
     * A trace section provides access to its traces individually whatever the internal format is (for example a bulk array of binary values).
     * Inheriting classes are responsible for providing the actual implementation.
     */
    constructor();
    /**
     * Return trace by number from 0 to reader.getTraceNumber()-1
     * @param traceid unique trace id
     */
    getTrace(traceid: number): Trace;
    /**
     * Creates a clone of the trace section
     */
    clone(): this;
    /**
     * Returns start and end trace indices
     */
    getTraceRange(): Range;
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
     * Returns true, if header data is empty
     */
    isHeaderEmpty(): boolean;
    /**
     * Returns true, if samples are empty
     */
    areSamplesEmpty(): boolean;
}
