import {AbstractFactory} from '../AbstractFactory';
import {AbstractGauge} from '../AbstractGauge';

/**
 * Implements a registry for gauge implementations (factories)
 */
export class GaugeRegistry {
    /**
     * Implements a registry for gauge implementations (factories)
     */
    constructor();
    /**
     * Gets an instance of gauge registry
     */
    static getDefaultInstance(): GaugeRegistry;
    /**
     * Registers a factory to the registry, indexing is done by the name
     * @param name Name of factory to register
     * @param factory Factory or its classname to register
     */
    register(name: string, factory: AbstractFactory | string): this;
    /**
     * Registers in a default factory to the registry, indexing is done by the name
     * @param name Name of factory to register
     * @param factory Factory or its classname to register
     */
    static register(name: string, factory: AbstractFactory | string): GaugeRegistry;
    /**
     * Removes a factory from the registry
     * @param name Name of the factory which has to be removed
     */
    unregister(name: string): this;
    /**
     * Removes every factory from the registry
     */
    clear(): this;
    /**
     * Returns true if a factory with provided name is registered
     * @param name Name of the gauge factory to look for
     */
    contains(name: string): boolean;
    /**
     * Returns an instance of a gauge created by the factory which
     * has been registered with provided name. Returns null if no such
     * factory has been registered
     * @param name Name of the registered factory
     * @param properties JSON with properties that have to be overridden
     */
    createGauge(name: string, properties: object): AbstractGauge | null;
    /**
     * Gets the type of the gauge returned by one of the factories registered in this registry
     * and referred by the provided name.
     * @param name Name of the default gauge
     */
    getGaugeType(name: string): string | null;
}
