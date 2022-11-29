/**
 * SeismicPipeline's Query type enumerator.
 * These types are used with select option
 */
export enum QueryType {
    /**
     * Query type to use from and to in the model coordinate of the pipeline
     */
    Model = 'model',
    /**
     * Query type to use from and to in trace coordinates of pipeline
     */
    Trace = 'trace'
}
