import {AbstractFactory} from '../AbstractFactory';
import {AbstractGauge} from '../AbstractGauge';

/**
 * Implements a vertical traffic gauge with three lights, green, yellow, and red. When a light is not active,
 * it is light grey.
 */
export class VerticalTraffic extends AbstractFactory {
    /**
     * Implements a vertical traffic gauge with three lights, green, yellow, and red. When a light is not active,
     * it is light grey.
     */
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): object;
    /**
     * Returns a gauge ready for use. It is however recommended to use the {@link @int/geotoolkit/gauges/registry/GaugeRegistry.GaugeRegistry} instead of using this method. Traffic Gauge tutorial shows how to implement the registry.
     * @param params JSON with overriding properties
     */
    createGauge(params: object): AbstractGauge;
}
