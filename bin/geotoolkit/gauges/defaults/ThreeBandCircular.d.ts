import {AbstractFactory} from '../AbstractFactory';
import {AbstractGauge} from '../AbstractGauge';

/**
 * Implements a circular gauge with three axis (displaying three different data sets). There are
 * one large, one medium, and one small axis, called 'large', 'medium', and 'small' respectively.
 * The name of the gauge is displayed in a circle in center, value for each axis is displayed in
 * the cut of that axis.
 */
export class ThreeBandCircular extends AbstractFactory {
    /**
     * Implements a circular gauge with three axis (displaying three different data sets). There are
     * one large, one medium, and one small axis, called 'large', 'medium', and 'small' respectively.
     * The name of the gauge is displayed in a circle in center, value for each axis is displayed in
     * the cut of that axis.
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
