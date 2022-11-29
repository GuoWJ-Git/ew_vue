import {AbstractFactory} from '../AbstractFactory';
import {AbstractGauge} from '../AbstractGauge';

/**
 * Implements a circular gauge with one axis and a shadow moving on the outer side of that axis.
 * Value is displayed in the center and the shadow acts as visualization.
 */
export class ArcIndicatorCircular extends AbstractFactory {
    /**
     * Implements a circular gauge with one axis and a shadow moving on the outer side of that axis.
     * Value is displayed in the center and the shadow acts as visualization.
     */
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): object;
    /**
     * Returns a gauge ready for use. It is however recommended to use the {@link @int/geotoolkit/gauges/registry/GaugeRegistry.GaugeRegistry} instead of using this method. Circular Gauge tutorial shows how to implement the registry.
     * @param params JSON with overriding properties
     */
    createGauge(params: object): AbstractGauge;
}
