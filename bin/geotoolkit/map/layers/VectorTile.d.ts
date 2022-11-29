import {Vector} from './Vector';
import {VectorTile as SourcesVectorTile} from '../sources/VectorTile';
import {Query} from '../util/Query';
import {Iterator} from '../../util/iterator';

/**
 * This layer connects to Mapbox VectorTile server and displays received features.
 */
export class VectorTile extends Vector {
    /**
     * This layer connects to Mapbox VectorTile server and displays received features.
     * @param options 
     * @param options.source the layer data source
     * @param options.styleUrl features drawing styles file url, if no set default styles are used
     */
    constructor(options?: object | { source?: SourcesVectorTile; styleUrl?: string; } );
    /**
     * Gets features iterator
     * @param filter features query filter.
     */
    getFeatures(filter?: Query | Function): Iterator;
    /**
     * Returns font names that are used in VectorTile styling
     */
    getFonts(): string[];
}
