import {DataSample} from './DataSample';

/**
 * Defines two arrays depths and values of samples
 */
export class DataValueArray {
    /**
     * Defines two arrays depths and values of samples
     * @param samples array of {@link @int/geotoolkit/data/DataSample.DataSample} elements or properties object
     * @param samples.samples samples
     * @param samples.minwraplevel min wrap level
     * @param samples.maxwraplevel max wrap level
     */
    constructor(samples?: DataSample[] | object | { samples?: DataSample[]; minwraplevel?: number; maxwraplevel?: number; } );
    /**
     * @param samples samples
     */
    setSamples(samples: DataSample[]): this;
    /**
     */
    getSamples(): DataSample[];
    /**
     * Set index of sample which is interpolated
     * @param index index of the sample, which was interpolated
     */
    protected setLastInterpolatedIndex(index: number): this;
    /**
     * @param minWrapLevel min wrap level
     */
    setMinWrapLevel(minWrapLevel: number): this;
    /**
     * @param maxWrapLevel max wrap level
     */
    setMaxWrapLevel(maxWrapLevel: number): this;
    /**
     * Return minimum wrap level. By default it is 0
     */
    getMinWrapLevel(): number;
    /**
     * Return maximum wrap level. By default it is 0
     */
    getMaxWrapLevel(): number;
    /**
     * Get index of sample, which is interpolated
     */
    protected getLastInterpolatedIndex(): number;
    /**
     * Create a deep copy
     */
    clone(): DataValueArray;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {samples: DataSample[]; minwraplevel: number; maxwraplevel: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.samples samples
     * @param properties.minwraplevel min wrap level
     * @param properties.maxwraplevel max wrap level
     */
    setProperties(properties: object | { samples?: DataSample[]; minwraplevel?: number; maxwraplevel?: number; } ): this;
}
