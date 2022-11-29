import {SeismicTraceProcessor} from './SeismicTraceProcessor';

/**
 * Defines a processor to reverse trace values
 */
export class Reverse extends SeismicTraceProcessor {
    /**
     * Defines a processor to reverse trace values
     * @param options 
     * @param options.reversed reversed trace values or not
     * @param options.inverted invert polarity or not. Specifies if the polarity is +ve or -ve
     */
    constructor(options?: object | { reversed?: boolean; inverted?: boolean; } );
    /**
     * Sets properties
     * @param properties properties
     * @param properties.reversed reversed trace values or not
     * @param properties.inverted invert polarity or not. Specifies if the polarity is +ve or -ve
     */
    setProperties(properties?: object | { reversed?: boolean; inverted?: boolean; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {reversed: boolean; inverted: boolean} | any;
    /**
     * Sets base line reversed to value
     * @param reverse specifies if the baseline of the trace is reversed or not
     */
    reverseBaseLine(reverse: boolean): void;
    /**
     * Sets polarity inverted to value
     * @param inverse specifies if the polarity is +ve or -ve
     */
    inversePolarity(inverse: boolean): void;
    /**
     * Sets state
     * @param state sets the state
     * @param state.reversed specifies if the baseline of the trace is reversed or not
     * @param state.inverted specifies if the polarity is +ve or -ve
     */
    setState(state: object | { reversed?: boolean; inverted?: boolean; } ): this;
    /**
     * return state of the processor
     */
    getState(): {name: string; apply: boolean; reversed: boolean; inverted: boolean} | object;
}
