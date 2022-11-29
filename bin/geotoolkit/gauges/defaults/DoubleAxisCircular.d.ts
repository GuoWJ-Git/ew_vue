import {AbstractFactory} from '../AbstractFactory';
import {AbstractGauge} from '../AbstractGauge';

/**
 * Implements a factory which creates a gauge with two axes. One axis is slightly smaller than another
 * and is called 'inneraxis' and the bigger one is called 'outeraxis'. Two marker style needles are
 * also being added here, one pointins at the outside border of the outer axis and the other one points
 * at the inner border of the inner axis. Values are displayed inside the circle.
 */
export class DoubleAxisCircular extends AbstractFactory {
    /**
     * Implements a factory which creates a gauge with two axes. One axis is slightly smaller than another
     * and is called 'inneraxis' and the bigger one is called 'outeraxis'. Two marker style needles are
     * also being added here, one pointins at the outside border of the outer axis and the other one points
     * at the inner border of the inner axis. Values are displayed inside the circle.
     */
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): object;
    /**
     * Returns a gauge ready for use. It is however recommended to use the {@link @int/geotoolkit/gauges/registry/GaugeRegistry.GaugeRegistry} instead of using this method. Circular Gauge tutorial shows how to implement the registry.
     * @param params JSON with overriding properties.
     */
    createGauge(params: object): AbstractGauge;
}
