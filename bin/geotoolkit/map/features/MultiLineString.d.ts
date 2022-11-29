import {AbstractFeature} from './AbstractFeature';
import {AbstractLayer} from '../layers/AbstractLayer';

/**
 * Multi line string map feature implementation.
 */
export class MultiLineString extends AbstractFeature {
    /**
     * Multi line string map feature implementation.
     * @param options feature options
     * @param options.geometry feature geometry as array of elements where each element is in the format of {@link @int/geotoolkit/map/features/LineString.LineString}'s geometry
     */
    constructor(options: object | { geometry: object[]; } );
    /**
     * Applies Map coordinate system to itself
     * @param layer map layer to use for coordinate system conversion
     */
    applyMapCS(layer: AbstractLayer): this;
}
