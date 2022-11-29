import {AbstractFormat} from './AbstractFormat';
import {AbstractConnector} from '../connectors/AbstractConnector';

/**
 * ArcGIS source format that formats feature queries to the FeatureService server. Supports ArcGIS version 10.0 and higher.
 */
export class ArcGISFeature extends AbstractFormat {
    /**
     * ArcGIS source format that formats feature queries to the FeatureService server. Supports ArcGIS version 10.0 and higher.
     * @param options options
     * @param options.connector connector to use
     */
    constructor(options?: object | { connector?: AbstractConnector; } );
    /**
     * Sends a feature request based on a settings provided
     * @param query query params
     * @param query.left requesting left limit in model coordinates
     * @param query.right requesting right limit in model coordinates
     * @param query.top requesting top limit in model coordinates
     * @param query.bottom requesting bottom limit in model coordinates
     */
    query(query: object | { left: number; right: number; top: number; bottom: number; } ): this;
}
