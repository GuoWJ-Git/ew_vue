import {AbstractFactory} from '../AbstractFactory';
import {AbstractGauge} from '../AbstractGauge';

/**
 * Implements a circular gauge with 3 axes, 'outeraxis' and 'inneraxis' which render a set of ticks along a range of values.<br>
 * 'middleaxis' renders an inner color fill between 'axisouter' and 'axisinner'. Ranges can be differentiated by specifying unique color fills.
 */
export class Pressure extends AbstractFactory {
    /**
     * Implements a circular gauge with 3 axes, 'outeraxis' and 'inneraxis' which render a set of ticks along a range of values.<br>
     * 'middleaxis' renders an inner color fill between 'axisouter' and 'axisinner'. Ranges can be differentiated by specifying unique color fills.
     */
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory.  This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): object;
    /**
     * Returns a gauge ready for use. It is however recommended to use the {@link @int/geotoolkit/gauges/registry/GaugeRegistry.GaugeRegistry} instead of using this method. Circular Gauge tutorial shows how to implement the registry.
     * @param params JSON with overriding properties
     */
    createGauge(params: object): AbstractGauge;
}
