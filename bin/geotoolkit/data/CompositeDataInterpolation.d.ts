import {DataInterpolation} from './DataInterpolation';
import {DataValueArray} from './DataValueArray';

/**
 * Represents a chain of interpolations
 */
export class CompositeDataInterpolation extends DataInterpolation {
    /**
     * Represents a chain of interpolations
     * @param interpolators data interpolator or properties object
     * @param interpolators.interpolators data interpolator
     */
    constructor(interpolators?: object | { interpolators?: DataInterpolation[]; }  | DataInterpolation[] | any);
    /**
     * Add data interpolator
     * @param interpolator data interpolator
     */
    addInterpolator(interpolator: DataInterpolation): this;
    /**
     * Remove data interpolator
     * @param interpolator interpolator to be removed
     */
    removeInterpolator(interpolator: DataInterpolation): this;
    /**
     * Insert data interpolator at specified index
     * @param index specified index
     * @param interpolator interpolator to add
     */
    insertInterpolator(index: number, interpolator: DataInterpolation): this;
    /**
     * Get data interpolator by index
     * @param index interpolator index
     */
    getInterpolator(index: number): DataInterpolation;
    /**
     * Return amount of interpolators
     */
    getInterpolatorsCount(): number;
    /**
     * Interpolate
     * @param start The start index
     * @param count The count of samples to interpolate
     * @param input The input data
     * @param output The output data
     */
    interpolate(start: number, count: number, input: DataValueArray, output: DataValueArray): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {interpolators: DataInterpolation[]} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.interpolators data interpolator
     */
    setProperties(properties: object | { interpolators?: DataInterpolation[]; } ): this;
}
