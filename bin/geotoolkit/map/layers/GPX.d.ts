import {Vector} from './Vector';
import {GeodeticSystem} from '../GeodeticSystem';
import {AbstractSystem} from '../coordinatesystems/AbstractSystem';
import {GPX as SourcesGPX} from '../sources/GPX';

/**
 * The implementation is capable of loading GPX (Global Positioning System Exchange Format) data.<br>
 */
export class GPX extends Vector {
    /**
     * The implementation is capable of loading GPX (Global Positioning System Exchange Format) data.<br>
     * @param options options
     * @param options.system coordinate system this layer's data is in
     * @param options.source the layer data source
     */
    constructor(options?: object | { system?: GeodeticSystem | AbstractSystem; source?: SourcesGPX; } );
}
