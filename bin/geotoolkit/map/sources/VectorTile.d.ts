import {Vector} from './Vector';
import {VectorTile as FormatsVectorTile} from './formats/VectorTile';
import {VectorTile as LoadersVectorTile} from './loaders/VectorTile';

/**
 * Vector Tile source that allows user to get features from remote resource in Pbf format
 */
export class VectorTile extends Vector {
    /**
     * Vector Tile source that allows user to get features from remote resource in Pbf format
     * @param options options
     * @param options.format the remote features format
     * @param options.loader the remote features format
     * @param options.styleUrl features drawing styles file url, if no set default styles are used
     * @param options.formatterfunction the function that takes z, y, x and turns that into tile location (replaces the format field)
     */
    constructor(options?: object | { format?: FormatsVectorTile; loader?: LoadersVectorTile; styleUrl?: string; formatterfunction?: Function; } );
    /**
     */
    _settings: object;
    /**
     * Returns font names that are used in VectorTile styling
     */
    getFonts(): string[];
}
