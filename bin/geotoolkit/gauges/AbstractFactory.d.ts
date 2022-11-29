import {AbstractGauge} from './AbstractGauge';

/**
 * Abstract class for gauge factories.
 */
export class AbstractFactory {
    /**
     * Abstract class for gauge factories.
     * @param params Object with properties
     * @param params.name Name of the specific instance of the gauge
     * @param params.gaugetype The type of the gauge which will be created by this factory
     */
    constructor(params?: object | { name?: string; gaugetype?: string; } );
    /**
     * Returns a gauge ready for use
     * @param params JSON with overriding properties
     */
    createGauge(params: object): AbstractGauge;
    /**
     * Gets the name of this implementation
     */
    getName(): string | null;
    /**
     * Gets the type of the gauge which this factory implements
     */
    getGaugeType(): string | null;
    /**
     * Returns properties pertaining to the gauge implemented by this factory
     */
    getGaugeProperties(): object;
}
