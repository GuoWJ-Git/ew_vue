import {EventDispatcher} from '../../../util/EventDispatcher';

/**
 * Base class of regression model
 */
export class RegressionBase extends EventDispatcher {
    /**
     * Base class of regression model
     * @param options see setOptions and setData for details
     * @param options.coefficients array of coefficients
     * @param options.customfunc custom function to represent regression model
     * @param customFunc custom function to represent regression model
     */
    constructor(options?: object | { coefficients?: number[]; customfunc?: Function; } , customFunc?: Function);
    /**
     * fit the curve with given data set
     * the subclass of RegressionBase need to support incremental fitting by default
     * that means the model have to keep necessary intermediate values as properties
     * which can be used to do incremental calculating when add new data point to model
     * @param dataX data set x
     * @param dataY data set y
     * @param weights of data point
     */
    fit(dataX: number[], dataY: number[], weights: number[]): void;
    /**
     * get all data for training
     */
    getData(): {datax: number[]; datay: number[]; weights: number[]} | object;
    /**
     * predict y value(s) with given x value
     * @param dataX single value or data set of X
     */
    predict(dataX: number | number[]): number | number[];
    /**
     * set options
     * @param options options
     * @param options.coefficients array of coefficients
     * @param options.customfunc custom function to represent regression model
     */
    setOptions(options: object | { coefficients?: number[]; customfunc?: Function; } ): this;
    /**
     * reset the model including all intermediate variables and training data
     */
    resetModel(): void;
    /**
     * get customized coefficients flag
     */
    isCustomizedCoef(): boolean;
    /**
     * get options
     */
    getOptions(): {coefficients: number[]; customfunc: Function} | any;
    /**
     * Sets properties
     * @param properties options
     * @param properties.coefficients array of coefficients
     * @param properties.customfunc custom function to represent regression model
     */
    setProperties(properties: object | { coefficients?: number[]; customfunc?: Function; } ): this;
    /**
     * get properties
     */
    getProperties(): {coefficients: number[]; customfunc: Function} | any;
    /**
     * set probability for looking up t-table to determine confidence interval
     * @param prob probability
     */
    setConfidenceProbability(prob: number | Probability): this;
    /**
     * get probability for determine confidence interval
     */
    getConfidenceProbability(): number;
    /**
     * set probability for looking up t-table to determine prediction interval
     * @param prob probability
     */
    setPredictionProbability(prob: number | Probability): this;
    /**
     * get probability for determine prediction interval
     */
    getPredictionProbability(): number;
    /**
     * get mean value for data set x or y
     * @param axis axis could be 'x' or 'y'
     */
    getMean(axis: string): number | any;
    /**
     * get sum squared for data set x or y
     * @param axis axis could be 'x' or 'y'
     */
    getTotalSumSquared(axis: string): number | any;
    /**
     * get sum squared of residual
     */
    getSumSquaredResidual(): number | any;
    /**
     * get degree of freedom
     */
    getDegreeOfFreedom(): number;
    /**
     * get R squared value
     */
    getRsquared(): number | any;
    /**
     * get array of residuals
     */
    getResiduals(): number[] | any;
    /**
     * get confidence interval for given x value
     * @param x given value to determine the confidence interval
     */
    getConfidenceInterval(x: number): number | any;
    /**
     * get prediction interval for given x value
     * @param x given value to determine the prediction interval
     */
    getPredictionInterval(x: number): number | any;
    /**
     * get statistics of regression analysis
     */
    getStatistics(): {rsquared: number; meanx: number; meany: number; df: number; sumsquaredx: number; sumsquaredy: number; sumsquaredres: number} | object;
    /**
     * get coefficients
     */
    getCoefficients(): any[];
}
/**
 * Type of events
 */
export enum Events {
    /**
     * emit when model or its propeties changed
     */
    UpdatedModel = 'updatedmodel'
}
/**
 * pre-defined probability value of confidence level when picking value from t-table
 */
export enum Probability {
    /**
     * fixed 80%
     */
    P80 = 0,
    /**
     * fixed 90%
     */
    P90 = 1,
    /**
     * fixed 95%
     */
    P95 = 2,
    /**
     * fixed 99%
     */
    P99 = 3
}
