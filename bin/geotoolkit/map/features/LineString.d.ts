import {AbstractFeature} from './AbstractFeature';
import {AbstractLayer} from '../layers/AbstractLayer';

/**
 * Line string (or "polyline") map feature implementation.
 */
export class LineString extends AbstractFeature {
    /**
     * Line string (or "polyline") map feature implementation.
     * @param options line and map feature options
     * @param options.geometry feature geometry
     * @param options.geometry.x array of x-coordinates
     * @param options.geometry.y array of y-coordinates
     */
    constructor(options: object | { geometry: object | { x: number[]; y: number[]; } ; } );
    /**
     * Applies Map coordinate system to itself
     * @param layer map layer to use for coordinate system conversion
     */
    applyMapCS(layer: AbstractLayer): this;
}
