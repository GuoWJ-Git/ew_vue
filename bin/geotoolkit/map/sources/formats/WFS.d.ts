import {AbstractFormat} from './AbstractFormat';

/**
 * WFS source format that formats feature queries to the WFS (Web Feature Service) server
 */
export class WFS extends AbstractFormat {
    /**
     * WFS source format that formats feature queries to the WFS (Web Feature Service) server
     * @param options options
     * @param options.format format to request from server
     * @param options.parser parser format to parse the server response
     */
    constructor(options?: object | { format?: string; parser?: string; } );
    /**
     * Sends a feature request based on a settings provided
     * @param query query params
     * @param query.left requesting left limit in model coordinates
     * @param query.right requesting right limit in model coordinates
     * @param query.top requesting top limit in model coordinates
     * @param query.bottom requesting bottom limit in model coordinates
     * @param query.key connection key (can be used to abort it later)
     */
    query(query: object | { left: number; right: number; top: number; bottom: number; key?: string; } ): this;
}
