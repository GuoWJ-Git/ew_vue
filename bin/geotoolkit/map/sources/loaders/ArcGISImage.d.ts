import {AbstractLoader} from './AbstractLoader';
import {AbstractConnector} from '../connectors/AbstractConnector';

/**
 * Callback for queryLegend().
 */
export type queryLegendCallback = (err: object, data: object) => void;
/**
 * ArcGIS source loader that loads settings from MapService or ImageService server. Supports ArcGIS version 9.3 and higher.
 */
export class ArcGISImage extends AbstractLoader {
    /**
     * ArcGIS source loader that loads settings from MapService or ImageService server. Supports ArcGIS version 9.3 and higher.
     * @param options options
     * @param options.connector connector to use
     */
    constructor(options?: object | { connector?: AbstractConnector; } );
    /**
     * Parses server data response
     * @param data data received from the server
     * @param onload function to be called when data is loaded
     */
    parse(data: string | object, onload: Function): void;
    /**
     */
    clear(): void;
    /**
     * Returns server settings request url
     */
    getSettingsUrl(): string | null;
}
