import {RegressionBase} from './RegressionBase';

/**
 * generate a polynomial regression model
 */
export class Polynomial extends RegressionBase {
    /**
     * generate a polynomial regression model
     * @param options options
     * @param options.order the order of polynomial formula
     */
    constructor(options?: object | { order?: number; } );
    /**
     * set options for model
     * @param options options
     * @param options.order the order of polynomial formula
     * @param options.coefficients array of coefficients
     */
    setOptions(options: object | { order?: number; coefficients?: number[]; } ): this;
    /**
     */
    getOptions(): {order: number} | any;
    /**
     * reset regression model to fit new data set
     */
    resetModel(): void;
    /**
     * fit curve
     * @param dataX data array of observations x
     * @param dataY data array in observations y
     * @param weights of data point
     */
    fit(dataX: number[], dataY: number[], weights: number[]): void;
}
