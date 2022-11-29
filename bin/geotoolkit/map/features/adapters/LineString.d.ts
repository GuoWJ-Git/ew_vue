import {IGeometryToShape} from './IGeometryToShape';
import {Polyline} from '../../../scene/shapes/Polyline';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {Transformation} from '../../../util/Transformation';

/**
 * Applies {@link @int/geotoolkit/map/features/LineString.LineString} LineString geometry's coordinates (in Map C.S.) to {@link @int/geotoolkit/scene/shapes/Polyline.Polyline}
 */
export class LineString implements IGeometryToShape {
    /**
     * Applies {@link @int/geotoolkit/map/features/LineString.LineString} LineString geometry's coordinates (in Map C.S.) to {@link @int/geotoolkit/scene/shapes/Polyline.Polyline}
     */
    constructor();
    /**
     * Applies feature geometry's 'x' and 'y' coordinates to {@link @int/geotoolkit/scene/shapes/Polyline.Polyline} shape
     * @param geometry feature geometry
     * @param geometry.x x-coordinates
     * @param geometry.y y-coordinates
     * @param polyline polyline to set the coordinates on
     * @param context rendering context or its transformation
     */
    apply(geometry: object | { x: number[]; y: number[]; } , polyline: Polyline, context?: RenderingContext | Transformation): void;
}
