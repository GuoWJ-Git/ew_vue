import {AbstractFactory} from '../AbstractFactory';
import {AbstractGauge} from '../AbstractGauge';

/**
 * Implements a circular gauge with irregular tick spacing. Some ticks/labels may be hidden
 * due to label collisions.
 */
export class UnevenCircular extends AbstractFactory {
    /**
     * Implements a circular gauge with irregular tick spacing. Some ticks/labels may be hidden
     * due to label collisions.
     */
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory
     */
    getGaugeProperties(): object;
    /**
     * Returns a gauge ready for use
     * @param params JSON with overriding properties
     */
    createGauge(params: object): AbstractGauge;
}
