import {AbstractFactory} from '../AbstractFactory';
import {AbstractGauge} from '../AbstractGauge';

/**
 * Implements a simple circular gauge with adaptive ticks located inside. Axis is a thick line
 * with major, edge, and minor ticks. A classic needle is added to the gauge as well.
 */
export class HalfCircularSimple extends AbstractFactory {
    /**
     * Implements a simple circular gauge with adaptive ticks located inside. Axis is a thick line
     * with major, edge, and minor ticks. A classic needle is added to the gauge as well.
     */
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): object;
    /**
     * Returns a gauge ready for use. It is however recommended to use the {@link @int/geotoolkit/gauges/registry/GaugeRegistry.GaugeRegistry} instead of using this method. Half-Circular Gauge tutorial shows how to implement the registry.
     * @param params JSON with overriding properties
     */
    createGauge(params: object): AbstractGauge;
}
