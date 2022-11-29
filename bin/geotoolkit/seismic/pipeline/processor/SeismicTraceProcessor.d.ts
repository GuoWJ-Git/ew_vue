import {SeismicPipeline} from '../SeismicPipeline';
import {SeismicMetaData} from '../../data/SeismicMetaData';

/**
 * A Seismic Trace Processor is the implementation of a trace processing algorithm for seismic data. It is an extension point that allows the addition of custom trace processors.<br>
 * A trace process usually represents an operation that can be performed on trace data (samples). It processes data trace by trace.
 */
export class SeismicTraceProcessor {
    /**
     * A Seismic Trace Processor is the implementation of a trace processing algorithm for seismic data. It is an extension point that allows the addition of custom trace processors.<br>
     * A trace process usually represents an operation that can be performed on trace data (samples). It processes data trace by trace.
     * @param options the default properties
     * @param options.name name of the processor
     * @param options.apply whether the processor is active or not.
     */
    constructor(options?: object | { name?: string; apply?: boolean; } );
    /**
     * Clones processor
     */
    clone(): this;
    /**
     * @param src Source to copy from
     */
    protected copyConstructor(src: SeismicTraceProcessor): void;
    /**
     * Returns stateValue if true or false, value instead
     * @param value value
     * @param defaultValue default value
     */
    verifyBoolean(value: boolean, defaultValue: boolean): boolean;
    /**
     * Returns stateValue if string, value instead
     * @param value value
     * @param defaultValue default value
     */
    verifyString(value: string, defaultValue: string): string;
    /**
     * Returns stateValue not null, value instead
     * @param stateValue value
     * @param value default value
     */
    verify(stateValue: any, value: any): any;
    /**
     * Sets state 'name' and 'apply' values to respectively name and false.
     * Returns state object
     * @param state the default properties
     * @param state.name name of the processor
     * @param state.apply whether the processor is active or not.
     * @param name name of the processor
     */
    static verifyState(state: object | { name?: string; apply?: boolean; } , name: string): any;
    /**
     * Sets apply
     * @param apply whether the processor is active or not
     */
    apply(apply: boolean): void;
    /**
     * Returns name of the processor
     */
    getName(): string;
    /**
     * Set apply and name values
     * @param state the default properties
     * @param state.name name of the processor
     * @param state.apply whether the processor is active or not.
     */
    setState(state: object | { name?: string; apply?: boolean; }  | any): this;
    /**
     * Returns apply and name values
     */
    getState(): {name: string; apply: boolean} | object;
    /**
     * Returns true if processor is active
     */
    isApplicable(): boolean;
    /**
     * The function returns 'True' if the process was applied to the traces or 'False' if it was not applied.
     * @param pipeline the seismic pipeline name
     * @param metadata seismic metadata
     * @param dataIn The input data array on which the process should be applied
     * @param dataOut The output/processed data array
     */
    process(pipeline: SeismicPipeline, metadata: SeismicMetaData, dataIn: Float32Array, dataOut: Float32Array): boolean;
    /**
     * Invalidate owner
     */
    invalidate(): void;
    /**
     * Dispose
     */
    dispose(): void;
    /**
     * Gets the properties
     */
    getProperties(): {name: string; apply: boolean} | any;
    /**
     * Sets the properties
     * @param props the default properties
     * @param props.name name of the processor
     * @param props.apply whether the processor is active or not.
     */
    setProperties(props?: object | { name?: string; apply?: boolean; } ): this;
}
