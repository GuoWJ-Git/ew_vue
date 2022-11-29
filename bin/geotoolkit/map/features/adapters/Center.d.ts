import {IGeometryToText} from './IGeometryToText';
import {Text} from '../../../scene/shapes/Text';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {Transformation} from '../../../util/Transformation';

/**
 * Calculates geometry center and applies it to {@link @int/geotoolkit/scene/shapes/Text.Text} as an anchor
 */
export class Center implements IGeometryToText {
    /**
     * Calculates geometry center and applies it to {@link @int/geotoolkit/scene/shapes/Text.Text} as an anchor
     * @param mode geometry center to anchor mode
     */
    constructor(mode?: Mode);
    /**
     * Calculates geometry center and applies it to {@link @int/geotoolkit/scene/shapes/Text.Text} as an anchor
     * @param geometry feature geometry
     * @param geometry.x array of x-ordinates
     * @param geometry.y array of y-ordinates
     * @param text text shape to set the anchor on
     * @param context rendering context or its transformation
     */
    apply(geometry: object | { x: number[]; y: number[]; } , text: Text, context?: RenderingContext | Transformation): void;
}
/**
 * Enum for GeometryToText modes
 */
export enum Mode {
    /**
     * Use centroid point
     */
    Centroid = 'Centroid',
    /**
     * Use center of the inscribed circle with the biggest possible radius
     */
    Incenter = 'Incenter',
    /**
     * Use centroid point by default, if it's outside the geometry use incenter
     */
    CentroidOrIncenter = 'CentroidOrIncenter',
    /**
     * Use centroid with a few iterations of circle inscribing to improve the result
     */
    Mixed = 'Mixed'
}
