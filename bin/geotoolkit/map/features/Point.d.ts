import {AbstractFeature} from './AbstractFeature';
import {AbstractLayer} from '../layers/AbstractLayer';

/**
 * Point map feature implementation.
 */
export class Point extends AbstractFeature {
    /**
     * Point map feature implementation.
     * @param options options
     * @param options.geometry geometry
     * @param options.geometry.x x-ordinate
     * @param options.geometry.y y-ordinate
     */
    constructor(options: object | { geometry: object | { x: number; y: number; } ; } );
    /**
     * Applies Map coordinate system to itself
     * @param layer map layer to use for coordinate system conversion
     */
    applyMapCS(layer: AbstractLayer): this;
}
