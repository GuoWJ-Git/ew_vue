import {AbstractFactory} from '../AbstractFactory';
import {AbstractGauge} from '../AbstractGauge';

/**
 * Implements a linear gauge (with Vertical scale) . The fill indicator shows the range of data and the main axis shows the ticks
 */
export class VerticalBoxFillGauge extends AbstractFactory {
    /**
     * Implements a linear gauge (with Vertical scale) . The fill indicator shows the range of data and the main axis shows the ticks
     */
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): object;
    /**
     * Returns a gauge ready for use. It is however recommended to use the {@link @int/geotoolkit/gauges/registry/GaugeRegistry.GaugeRegistry} instead of using this method. Linear Gauge tutorial shows how to implement the registry.
     * @param params JSON with overriding properties
     */
    createGauge(params: object): AbstractGauge;
}
