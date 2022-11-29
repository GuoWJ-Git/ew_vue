import {AbstractLoader} from './AbstractLoader';
import {AbstractConnector} from '../connectors/AbstractConnector';

/**
 * ArcGIS source loader that loads settings and styles from FeatureService server. Supports ArcGIS version 10.0 and higher
 */
export class ArcGISFeature extends AbstractLoader {
    /**
     * ArcGIS source loader that loads settings and styles from FeatureService server. Supports ArcGIS version 10.0 and higher
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
     * Returns server settings request url
     */
    getSettingsUrl(): string | null;
}
