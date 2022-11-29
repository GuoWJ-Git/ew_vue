import {Vector} from './Vector';
import {Stream as SourcesStream} from '../sources/Stream';

/**
 * This shape connects to an ArcGIS Stream Server and displays a single layer from it.
 */
export class Stream extends Vector {
    /**
     * This shape connects to an ArcGIS Stream Server and displays a single layer from it.
     * @param options options
     * @param options.source the layer data source
     * @param options.token authorization token (for ArcGIS stream server if needed)
     */
    constructor(options?: object | { source?: SourcesStream; token?: string; } );
}
