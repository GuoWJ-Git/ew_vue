import {AbstractFactory} from '../AbstractFactory';
import {AbstractGauge} from '../AbstractGauge';

/**
 * Implements a linear gauge (with vertical scale) . The fill is the indicator and shows the range of data, the value is displayed outside the gauge at the top. <br>
 * It provides a left axis and right axis. It has a custom component which shows the status text based on the range of the value.
 */
export class AnnotatedFillGauge extends AbstractFactory {
    /**
     * Implements a linear gauge (with vertical scale) . The fill is the indicator and shows the range of data, the value is displayed outside the gauge at the top. <br>
     * It provides a left axis and right axis. It has a custom component which shows the status text based on the range of the value.
     */
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): object;
    /**
     * Returns a gauge ready for use . It is however recommended to use the {@link @int/geotoolkit/gauges/registry/GaugeRegistry.GaugeRegistry} instead of using this method. Linear gauges tutorial shows how to implement the registry.
     * @param params JSON with overriding properties
     */
    createGauge(params: object): AbstractGauge;
}
