import {RemoteReaderDataProvider} from './RemoteReaderDataProvider';

/**
 * Define registry of data providers for geotoolkit.seismic.data.RemoteSeismicDataSource. A new provider can be
 * registered and be called by version
 */
export class RemoteReaderDataProviderRegistry {
    /**
     * Define registry of data providers for geotoolkit.seismic.data.RemoteSeismicDataSource. A new provider can be
     * registered and be called by version
     */
    constructor();
    /**
     * Return instance of the registry
     */
    static getInstance(): RemoteReaderDataProviderRegistry;
    /**
     * Register a provider
     * @param version unique version fo provider
     * @param provider provider or be registered
     */
    register(version: string | number, provider: RemoteReaderDataProvider): void;
    /**
     * Return a registered provider for the specified version. This method doesn't create a new instance.
     * @param version version of protocol
     */
    getProvider(version: string | number): RemoteReaderDataProvider | null;
    /**
     * Create a new instance of geotoolkit.seismic.data.RemoteReaderDataProvider
     * @param version version of protocol
     * @param options optional options to pass to an instance of provider
     */
    createProvider(version: string | number, options?: any): RemoteReaderDataProvider;
    /**
     * Enumerate each provider
     * @example
     * ```javascript
     * import {RemoteReaderDataProviderRegistry} from '@int/geotoolkit/seismic/data/RemoteReaderDataProviderRegistry';
     * const registry = RemoteReaderDataProviderRegistry.getInstance()
     * registry.forEach((version, provider) => {
     *   ...
     * });
     * ```
     * @param callback a function with two parameters version and provider
     */
    forEach(callback?: Function): void;
}
