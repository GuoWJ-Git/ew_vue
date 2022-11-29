import {Range} from '../../util/Range';

/**
 * Defines trace mapping.
 */
export class TraceMapping {
    /**
     * Defines trace mapping.
     */
    constructor();
    /**
     * Return model trace spacing
     */
    getModelTraceSpacing(): number;
    /**
     * Return index of the trace by its location
     * @param location 
     */
    getTraceIndex(location: number): number;
    /**
     * Return trace location by its index
     * @param index 
     */
    getTraceLocation(index: number): number;
    /**
     * Returns array of traces
     * @param from 
     * @param to 
     */
    getTraces(from: number, to: number): number[];
    /**
     * Return trace location range
     */
    getTraceLocationRange(): Range;
    /**
     * Return number of destination traces
     */
    getNumberOfDestinationTraces(): number;
}
