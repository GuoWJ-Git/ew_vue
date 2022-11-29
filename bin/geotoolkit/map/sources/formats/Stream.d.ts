import {AbstractFormat} from './AbstractFormat';
import {AbstractConnector} from '../connectors/AbstractConnector';

/**
 * Stream source format that formats feature queries and parses the ArcGIS Stream formatted response
 */
export class Stream extends AbstractFormat {
    /**
     * Stream source format that formats feature queries and parses the ArcGIS Stream formatted response
     * @param options options
     * @param options.connector connector to use
     */
    constructor(options?: object | { connector?: AbstractConnector; } );
    /**
     * Parses Stream data into the geotoolkit features and notifies about the result
     * @param data JSON object or its string representation that contains features data
     */
    parse(data: string | object): this;
}
