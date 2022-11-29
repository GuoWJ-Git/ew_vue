import {AbstractLoader} from './AbstractLoader';

/**
 * VectorTile source loader that loads settings and styles from Mapbox VectorTile layer
 */
export class VectorTile extends AbstractLoader {
    /**
     * VectorTile source loader that loads settings and styles from Mapbox VectorTile layer
     * @param options options
     */
    constructor(options?: object);
    /**
     * Parses server data response
     * @param data data received from the server
     * @param onload function to be called when data is loaded
     */
    parse(data: string | object, onload: Function): void;
    /**
     * Returns server settings request url
     */
    getSettingsUrl(): string | null;
}
