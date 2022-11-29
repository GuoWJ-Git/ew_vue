import {DataInterpolation} from './DataInterpolation';

/**
 * The DataGapFillInterpolation interface removes NaN values that form a gap in the data less than or equal to a specified size.
 */
export class DataGapFillInterpolation extends DataInterpolation {
    /**
     * The DataGapFillInterpolation interface removes NaN values that form a gap in the data less than or equal to a specified size.
     * @param cutoff 
     */
    constructor(cutoff: number);
    /**
     * Sets the cutoff used for removing NaN valued samples.
     * @param cutoff gap fill cutoff
     */
    setGapFillCutoff(cutoff: number): this;
    /**
     * Returns the value of the cutoff used for removing NaN valued samples
     */
    getGapFillCutoff(): number;
    /**
     * Set keep NaN samples flag
     * @param cutoffMode cutooff mode
     */
    setGapFillCutoffMode(cutoffMode: CutoffMode): this;
    /**
     * Return keep samples flag
     */
    getGapFillCutoffMode(): CutoffMode;
}
/**
 * Enum of Cutoff mode
 */
export enum CutoffMode {
    /**
     * Default Cutoff mode, remove NaN samples
     */
    RemoveSample = 'RemoveSample',
    /**
     * Keep samples and interpolate values
     */
    KeepSample = 'KeepSample'
}
