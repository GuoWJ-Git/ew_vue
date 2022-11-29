import {AbstractFactory} from '../AbstractFactory';
import {AbstractGauge} from '../AbstractGauge';

/**
 * Implements a simple half-circular gauge with no ticks. Axis is transparent,
 * uses a thick value fill instead of a needle.
 */
export class DoubleFanHalfCircular extends AbstractFactory {
    /**
     * Implements a simple half-circular gauge with no ticks. Axis is transparent,
     * uses a thick value fill instead of a needle.
     */
    constructor();
    /**
     * Return properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): object;
    /**
     * Returns a gauge ready for use. It is however recommended to use the {@link @int/geotoolkit/gauges/registry/GaugeRegistry.GaugeRegistry} instead of using this method. Circular Gauge tutorial shows how to implement the registry.
     * @param params JSON with overriding properties
     */
    createGauge(params: object): AbstractGauge;
}
