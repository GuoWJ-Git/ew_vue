import {RegressionBase} from './RegressionBase';

/**
 * generate a logarithmic regression model
 */
export class Logarithmic extends RegressionBase {
    /**
     * generate a logarithmic regression model
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
}
