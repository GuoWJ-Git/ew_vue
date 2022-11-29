import {Trace} from '../Trace';

/**
 * Defines abstract picking strategy
 */
export class SnapPickingStrategy {
    /**
     * Defines abstract picking strategy
     * @param name strategy name
     */
    constructor(name: string);
    /**
     * Returns name of the strategy
     */
    getName(): string;
    /**
     * Sets strategy name
     * @param name strategy name
     */
    setName(name: string): this;
    /**
     * @param trace seismic trace
     * @param index of the sample
     */
    pickSample(trace: Trace, index: number): number;
}
