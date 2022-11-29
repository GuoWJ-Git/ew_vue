/**
 * Abstract seismic trace is a collection of samples.
 * A trace is logically subdivided into zero or more trace headers and zero or more samples.
 * Data is organized as list of traces sorted by headers. The number of samples equals to the number of corresponding headers.
 */
export class Trace {
    /**
     * Abstract seismic trace is a collection of samples.
     * A trace is logically subdivided into zero or more trace headers and zero or more samples.
     * Data is organized as list of traces sorted by headers. The number of samples equals to the number of corresponding headers.
     */
    constructor();
    /**
     * Returns an array of the samples
     * @param buffer Array of samples to be used as buffer to copy samples
     */
    getSamples(buffer?: any[]): any[];
    /**
     * Returns a count of the samples in the trace
     */
    getNumberOfSamples(): number;
    /**
     * Returns a count of the samples in the trace
     * @deprecated since 2020.1 (3.1). Use getNumberOfSamples instead
     */
    getCountOfSamples(): number;
    /**
     * Return trace header value by identifier
     * @param index index of the header if index is not specified it returns a header and header data
     */
    getHeader(index?: number | null): {header: object | null; data: object | null} | object;
    /**
     * Returns the trace id in the reader
     */
    getTraceId(): number;
    /**
     * Returns the trace status
     */
    getTraceStatus(): Status;
}
/**
 * Trace statuses
 */
export enum Status {
    /**
     * Normal
     */
    Normal = 'Normal',
    /**
     * Error
     */
    Error = 'Error',
    /**
     * Highlighted
     */
    Highlighted = 'Highlighted'
}
