import {RegressionBase} from './RegressionBase';

/**
 * generate a linear regression model
 */
export class Linear extends RegressionBase {
    /**
     * generate a linear regression model
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
