import {Projection} from './Projection';
import {GeoTile as LoadersGeoTile} from './loaders/GeoTile';
import {GeoTile as FormatsGeoTile} from './formats/GeoTile';

/**
 * GeoTile source
 */
export class GeoTile extends Projection {
    /**
     * GeoTile source
     * @param options options object
     * @param options.loader GeoTile loader
     * @param options.format GeoTile format
     * @param options.tiledshape tiled shape additional options to use another tiled shape manager
     * @param options.tiledshape.minlod minimum load layer to use OSM
     * @param options.tiledshape.maxlod maximum load layer to use OSM
     * @param options.tiledshape.images images sources to use simple image
     */
    constructor(options: object | { loader: LoadersGeoTile; format: FormatsGeoTile; tiledshape?: object | { minlod?: number; maxlod?: number; images?: {id: string, width: number, height: number}[]; } ; } );
}
