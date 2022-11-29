import {AbstractFactory} from '../AbstractFactory';
import {AbstractGauge} from '../AbstractGauge';

/**
 * Implements a simple numeric gauge. Contains two regions with a descriptor in the north
 * position and a value in the south position. The north region has a blue fill background,
 * the south region has a white fill background
 */
export class SimpleNumeric extends AbstractFactory {
    /**
     * Implements a simple numeric gauge. Contains two regions with a descriptor in the north
     * position and a value in the south position. The north region has a blue fill background,
     * the south region has a white fill background
     */
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): object;
    /**
     * Returns a gauge ready for use. It is however recommended to use the {@link @int/geotoolkit/gauges/registry/GaugeRegistry.GaugeRegistry} instead of using this method. Numeric Gauge tutorial shows how to implement the registry.
     * @param params JSON with overriding properties
     */
    createGauge(params: object): AbstractGauge;
}
