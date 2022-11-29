import {RegressionBase} from './RegressionBase';

/**
 * generate a exponential regression model
 */
export class Exponential extends RegressionBase {
    /**
     * generate a exponential regression model
     * @param options options
     */
    constructor(options?: object);
    /**
     * fit curve
     * @param dataX data array of observations x
     * @param dataY data array in observations y
     * @param weights of data point
     */
    fit(dataX: number[], dataY: number[], weights: number[]): void;
    /**
     * get x value of edge point where derivative of regression line is 1 or -1 after adjust scale of x and y
     * @param scale scale
     */
    getEdge(scale?: number): number;
    /**
     * predict x value with given y value(s)
     * @param dataY y value(s)
     */
    inversePredict(dataY: number | number[]): number | number[];
}
