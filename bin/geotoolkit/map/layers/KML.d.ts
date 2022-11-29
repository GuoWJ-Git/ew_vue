import {Vector} from './Vector';
import {KML as SourcesKML} from '../sources/KML';

/**
 * The implementation is capable of loading KML (Keyhole Markup Language) data.<br>
 */
export class KML extends Vector {
    /**
     * The implementation is capable of loading KML (Keyhole Markup Language) data.<br>
     * @param options options
     * @param options.source the layer data source
     */
    constructor(options?: object | { source?: SourcesKML; } );
}
