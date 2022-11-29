/**
 * Enum of normalization types used when rendering normalization.
 */
export enum NormalizationType {
    /**
     * Default behavior. No normalization is applied.
     */
    None = 0,
    /**
     * Uses the maximum amplitude of all samples in the all traces.
     */
    Maximum = 1,
    /**
     * Uses the maximum amplitude of all samples in the trace.
It is not supported yet and it is the same as Maximum for now.
     */
    TraceMaximum = 2,
    /**
     * Uses all traces average absolute value as a normalization amplitude.
     */
    Average = 3,
    /**
     * Uses trace average absolute value as a normalization amplitude.
It is not supported yet and it is the same as Average for now.
     */
    TraceAverage = 4,
    /**
     * Uses the mean square of all samples in the all traces.
     */
    RMS = 5,
    /**
     * Uses the mean square of all samples in the trace.
It is not supported yet and it is the same as TraceRMS for now.
     */
    TraceRMS = 6,
    /**
     * Uses custom normalization limits.
It requires to specify precisely min and max values for normalization.
     */
    Limits = 7
}
