import {IGeometryToShape} from './IGeometryToShape';
import {Polygon as ShapesPolygon} from '../../../scene/shapes/Polygon';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {Transformation} from '../../../util/Transformation';

/**
 * Applies feature geometry's 'x' and 'y' coordinates (in Map C.S.) to {@link @int/geotoolkit/scene/shapes/Polygon.Polygon}
 */
export class Polygon implements IGeometryToShape {
    /**
     * Applies feature geometry's 'x' and 'y' coordinates (in Map C.S.) to {@link @int/geotoolkit/scene/shapes/Polygon.Polygon}
     */
    constructor();
    /**
     * Applies feature geometry's 'x' and 'y' coordinates to {@link @int/geotoolkit/scene/shapes/Polygon.Polygon} shape
     * @param geometry feature geometry
     * @param geometry.x x-coordinates
     * @param geometry.y y-coordinates
     * @param polygon polygon to set the coordinates on
     * @param context rendering context or its transformation
     */
    apply(geometry: object | { x: number[]; y: number[]; } , polygon: ShapesPolygon, context?: RenderingContext | Transformation): void;
}
