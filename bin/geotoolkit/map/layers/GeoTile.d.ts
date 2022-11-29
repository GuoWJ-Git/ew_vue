import {Projection} from './Projection';
import {GeoTile as LoadersGeoTile} from '../sources/loaders/GeoTile';
import {GeoTile as FormatsGeoTile} from '../sources/formats/GeoTile';

/**
 * GeoTile layer
 */
export class GeoTile extends Projection {
    /**
     * GeoTile layer
     * @param options options object
     * @param options.loader GeoTile loader
     * @param options.format GeoTile format
     */
    constructor(options: object | { loader: LoadersGeoTile; format: FormatsGeoTile; } );
}
