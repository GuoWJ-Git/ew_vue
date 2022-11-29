import {SeismicTraceProcessor} from './SeismicTraceProcessor';

/**
 * Defines implementation of the automatic gain control.
 * <p>
 * Automatic gain control (AGC) increases the amplitude of the trace samples, automatically.
 * AGC applies a fixed length window, which slides in the original trace and computes the average amplitude of the window samples.
 * The gain is calculated and used to normalize the sample in the center part of this window to a fixed value, usually 1.0.
 * Basically the sample amplitude is divided by the average value. The window then slides down one sample and the next gain
 * correction is computed. The process continues until the whole trace has been processed.
 * </p>
 * <p>
 * AGC is commonly used to improve visibility of late-arriving events.
 * </p>
 * <p>
 * This version of AGC also includes noise reduction based on RMS values to to zero samples with
 * absolute values less than provided percentage of RMS. It is optional, but it helps to avoid increase noise
 * values
 * </p>
 */
export class AGC extends SeismicTraceProcessor {
    /**
     * Defines implementation of the automatic gain control.
     * <p>
     * Automatic gain control (AGC) increases the amplitude of the trace samples, automatically.
     * AGC applies a fixed length window, which slides in the original trace and computes the average amplitude of the window samples.
     * The gain is calculated and used to normalize the sample in the center part of this window to a fixed value, usually 1.0.
     * Basically the sample amplitude is divided by the average value. The window then slides down one sample and the next gain
     * correction is computed. The process continues until the whole trace has been processed.
     * </p>
     * <p>
     * AGC is commonly used to improve visibility of late-arriving events.
     * </p>
     * <p>
     * This version of AGC also includes noise reduction based on RMS values to to zero samples with
     * absolute values less than provided percentage of RMS. It is optional, but it helps to avoid increase noise
     * values
     * </p>
     * @param options of the data filter
     * @param options.desiredAverage desired average amplitude
     * @param options.units enum of AGC units
     * @param options.windowLength the AGC window size
     * @param options.agcLength AGC length
     * @param options.startSample start sample to start the AGC process
     * @param options.step step
     * @param options.noiseReductionPercentage percentage to zero samples with absolute values less than provided percentage of RMS
     * @param options.noiseReduction enable or disable
     * noise reduction.
     */
    constructor(options?: object | { desiredAverage?: number; units?: Units; windowLength?: number; agcLength?: number; startSample?: number; step?: number; noiseReductionPercentage?: number; noiseReduction?: NoiseReductionMode; } );
    /**
     * Returns state of the AGC data filter
     */
    getState(): any;
    /**
     * Sets state of the AGC filter
     * @param state state of the data filter see {@link @int/geotoolkit/seismic/pipeline/processor/AGC.AGC#setProperties}
     */
    setState(state: any): this;
    /**
     * Returns properties
     */
    getProperties(): {desiredAverage: number; units: Units; windowLength: number; agcLength: number; startSample: number; step: number; noiseReductionPercentage: number; noiseReduction: NoiseReductionMode} | any;
    /**
     * Sets properties
     * @param props of the data filter
     * @param props.desiredAverage desired average amplitude
     * @param props.units enum of AGC units
     * @param props.windowLength the AGC window size
     * @param props.agcLength AGC length
     * @param props.startSample start sample to start the AGC process
     * @param props.step step
     * @param props.noiseReductionPercentage percentage to zero samples with absolute values less than provided percentage of RMS
     * @param props.noiseReduction enable, disable
     * noise reduction. Automatic mode enables if data is compressed
     */
    setProperties(props?: object | { desiredAverage?: number; units?: Units; windowLength?: number; agcLength?: number; startSample?: number; step?: number; noiseReductionPercentage?: number; noiseReduction?: NoiseReductionMode; } ): this;
}
/**
 * Enum of AGC units
 */
export enum Units {
    /**
     * units in sample range
     */
    Sample = 0,
    /**
     * units in time range
     */
    Time = 1
}
/**
 * Enum of AGC Noise Reduction Mode
 */
export enum NoiseReductionMode {
    /**
     * Enable reduction
     */
    Enable = 'enable',
    /**
     * Disable reduction
     */
    Disable = 'disable',
    /**
     * Automatic reduction mode
     */
    Auto = 'auto'
}
