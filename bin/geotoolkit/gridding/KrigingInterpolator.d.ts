import {AbstractInterpolator} from './AbstractInterpolator';
import {VariogramModel} from './VariogramModel';

/**
 * Class implements Kriging algorithm.
 * See {@link https://en.wikipedia.org/wiki/Kriging} for more details.
 * (based on implementation by Omar Olmedo, released under The MIT License)
 */
export class KrigingInterpolator extends AbstractInterpolator {
    /**
     * Class implements Kriging algorithm.
     * See {@link https://en.wikipedia.org/wiki/Kriging} for more details.
     * (based on implementation by Omar Olmedo, released under The MIT License)
     * @param options JSON options
     * @param options.model Variogram model
     * @param options.sigma2 sigma^2 coeff
     * @param options.alfa alfa coeff
     */
    constructor(options?: object | { model?: VariogramModel; sigma2?: number; alfa?: number; } );
}
/**
 * Variogram model
 */
export type Model = any;

