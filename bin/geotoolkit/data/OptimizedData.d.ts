import {AbstractScaledData} from './AbstractScaledData';
import {DataConversion} from './DataConversion';
import {DataInterpolation} from './DataInterpolation';
import {DataSample} from './DataSample';
import {Transformation} from '../util/Transformation';
import {Range} from '../util/Range';

/**
 * The OptimizedData is a helper object that decorate ScaledData and allows to optimized it
 */
export class OptimizedData extends AbstractScaledData {
    /**
     * The OptimizedData is a helper object that decorate ScaledData and allows to optimized it
     * @param scaledData abstract scaled data
     * @param useXAxisForX use OX axis for x coordinate of the sample
     */
    constructor(scaledData: AbstractScaledData, useXAxisForX?: boolean);
    /**
     * Sets optimization type
     * @param optimizationType optimization type which is used
     */
    setOptimizationType(optimizationType: OptimizationType): this;
    /**
     * Turns on/off optimization
     * @param needOptimization Is optimization on
     */
    setOptimization(needOptimization?: boolean): this;
    /**
     * Returns the state of optimization, is it on or off
     */
    getOptimization(): boolean;
    /**
     * Sets conversion
     * @param conversion conversion of the data
     */
    setConversion(conversion: DataConversion): this;
    /**
     * Sets interpolation
     * @param interpolation algorithm to interpolate samples
     */
    setInterpolation(interpolation: DataInterpolation): this;
    /**
     * Gets scaled samples
     */
    getSamples(): DataSample[];
    /**
     * Return sample at specified index
     * @param index sample index
     */
    getSample(index: number): DataSample;
    /**
     * Sets transformation for which optimization was/will be calculated
     * @param modelToDevice model to device transformation
     */
    setModelToDevice(modelToDevice: Transformation): this;
    /**
     * Gets value array either optimized or not
     * @param needOptimization Is optimization needed
     */
    getValueArray(needOptimization?: boolean): number[];
    /**
     * Gets position array either optimized or not
     * @param needOptimization Is optimization needed
     */
    getPositionArray(needOptimization?: boolean): number[];
    /**
     * Gets a count of samples either optimized or not
     * @param needOptimization is optimization needed
     */
    getLength(needOptimization?: boolean): number;
    /**
     * Return a wrap levels, If data doesn't have wraps than it returns null
     * @param fromPosition from position
     * @param toPosition to position
     */
    getIndexRange(fromPosition: number, toPosition: number): Range;
    /**
     * Returns value at specified position
     * @param position position to return value
     */
    getValue(position: number): number;
}
/**
 * Enum of rendering optimization types
 */
export enum OptimizationType {
    /**
     * Filter points which are close to each other and are rendered in one pixel
     */
    FilterClosePoints = 0,
    /**
     * Ramer–Douglas–Peucker optimization
     */
    RDP = 1
}
