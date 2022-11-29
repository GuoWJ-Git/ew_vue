import {SeismicTraceProcessor} from '../../pipeline/processor/SeismicTraceProcessor';
import {TaperFrequencyBoundary} from './TaperFrequencyBoundary';

/**
 * The TaperFilterProcess applies both pass band and band reject filtering on the traces <br>
 * <br>
 * This class uses a taper function and applies filtering in the Fourier domain.<br>
 * The taper function is defined using four frequencies (encapsulated in the class geotoolkit.seismic.analysis.filters.TaperFrequencyBoundary).<br>
 * Because this filter is applied in the Fourier domain, the filter object has to be aware of the sample rate in order to map the frequencies to the data values property.
 */
export class TaperFilterProcess extends SeismicTraceProcessor {
    /**
     * The TaperFilterProcess applies both pass band and band reject filtering on the traces <br>
     * <br>
     * This class uses a taper function and applies filtering in the Fourier domain.<br>
     * The taper function is defined using four frequencies (encapsulated in the class geotoolkit.seismic.analysis.filters.TaperFrequencyBoundary).<br>
     * Because this filter is applied in the Fourier domain, the filter object has to be aware of the sample rate in order to map the frequencies to the data values property.
     * @param state 
     * @param state.samplerate The sample rate
     * @param state.passflag filtering mode
     * @param state.f1 1st frequency
     * @param state.f2 2nd frequency
     * @param state.f3 3rd frequency
     * @param state.f4 4th frequency
     */
    constructor(state?: object | { samplerate?: number; passflag?: boolean; f1?: number; f2?: number; f3?: number; f4?: number; } );
    /**
     * Sets properties
     * @param properties properties
     * @param properties.samplerate The sample rate
     * @param properties.passflag filtering mode
     * @param properties.f1 1st frequency
     * @param properties.f2 2nd frequency
     * @param properties.f3 3rd frequency
     * @param properties.f4 4th frequency
     */
    setProperties(properties?: object | { samplerate?: number; passflag?: boolean; f1?: number; f2?: number; f3?: number; f4?: number; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {samplerate: number; passflag: boolean; f1: number; f2: number; f3: number; f4: number} | any;
    /**
     * Gets the frequency boundary
     */
    getFrequencyBoundary(): TaperFrequencyBoundary;
    /**
     * Sets frequency boundary
     * @param f1 1st frequency (hrz) or another TaperFrequencyBoundary
     * @param f2 2-nd frequency (hrz)
     * @param f3 3-rd frequency (hrz)
     * @param f4 4-th frequency (hrz)
     */
    setFrequencyBoundary(f1: number | TaperFrequencyBoundary, f2?: number, f3?: number, f4?: number): this;
    /**
     * Sets the pass flag
     * @param passFlag The pass flag
     */
    setPassFlag(passFlag: boolean): this;
    /**
     * Gets the pass flag
     */
    getPassFlag(): boolean;
    /**
     * returns state of the taper filter
     */
    getState(): {name: string; apply: boolean; samplerate: number; passflag: boolean; f1: number; f2: number; f3: number; f4: number} | object;
    /**
     * Sets state of the taper filter
     * @param state The state of the taper filter
     * @param state.samplerate The sample rate
     * @param state.passflag filtering mode
     * @param state.f1 1st frequency
     * @param state.f2 2nd frequency
     * @param state.f3 3rd frequency
     * @param state.f4 4th frequency
     */
    setState(state: object | { samplerate?: number; passflag?: boolean; f1?: number; f2?: number; f3?: number; f4?: number; } ): this;
}
