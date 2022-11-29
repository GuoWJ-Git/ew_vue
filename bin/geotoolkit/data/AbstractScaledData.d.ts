import {DataConversion} from './DataConversion';
import {DataInterpolation} from './DataInterpolation';
import {DataSample} from './DataSample';
import {DataOrder} from './DataOrder';
import {Range} from '../util/Range';

/**
 * Defines an scaled data interface
 */
export class AbstractScaledData {
    /**
     * Defines an scaled data interface
     */
    constructor();
    /**
     * Sets conversion
     * @param conversion 
     */
    setConversion(conversion: DataConversion): void;
    /**
     * Set interpolation
     * @param interpolation 
     */
    setInterpolation(interpolation: DataInterpolation): void;
    /**
     * Gets samples
     */
    getSamples(): DataSample[];
    /**
     * Return sample at specified index
     * @param index index of the sample
     */
    getSample(index: number): DataSample;
    /**
     * Get length
     */
    getLength(): number;
    /**
     * Is data source forward only
     */
    isForwardOnly(): boolean;
    /**
     * return the order of the data set
     */
    getDataOrder(): DataOrder | number;
    /**
     * Gets index range
     * @param from from position
     * @param to to position
     */
    getIndexRange(from: number, to: number): Range;
    /**
     * Gets value
     * @param position 
     */
    getValue(position: number): number;
    /**
     * Get data source
     */
    getSource(): any;
    /**
     * Gets min wrap level
     */
    getMinWrapLevel(): number;
    /**
     * Gets max wrap level
     */
    getMaxWrapLevel(): number;
    /**
     * Gets min value
     */
    getMinValue(): number;
    /**
     * Gets max value
     */
    getMaxValue(): number;
    /**
     * Gets min depth
     */
    getMinPosition(): number;
    /**
     * Gets max depth
     */
    getMaxPosition(): number;
    /**
     * If data is outdated
     */
    isOutdated(): boolean;
    /**
     * Convert value from original source to current scaled data
     * @param v value of the original data source
     */
    convertValueFromSource(v: number[] | number): number[] | number;
    /**
     * Convert value from scaled data source to original source
     * @param v value of the scaled data source
     */
    convertValueToSource(v: number[] | number): number[] | number;
    /**
     * Gets value array either
     */
    getValueArray(): number[];
    /**
     * Gets position array
     */
    getPositionArray(): number[];
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): object | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties: object): this;
}
