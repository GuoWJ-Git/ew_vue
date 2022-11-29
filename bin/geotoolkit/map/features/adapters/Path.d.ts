import {IGeometryToShape} from './IGeometryToShape';
import {Path as ShapesPath} from '../../../scene/shapes/Path';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {Transformation} from '../../../util/Transformation';

/**
 * Applies {@link @int/geotoolkit/map/features/LineString.LineString} or {@link @int/geotoolkit/map/features/Polygon.Polygon}
 * geometry's coordinates (in Map C.S.) to {@link @int/geotoolkit/scene/shapes/Path.Path}
 */
export class Path implements IGeometryToShape {
    /**
     * Applies {@link @int/geotoolkit/map/features/LineString.LineString} or {@link @int/geotoolkit/map/features/Polygon.Polygon}
     * geometry's coordinates (in Map C.S.) to {@link @int/geotoolkit/scene/shapes/Path.Path}
     */
    constructor();
    /**
     * Applies feature geometry's 'x' and 'y' coordinates to {@link @int/geotoolkit/scene/shapes/Path.Path} shape
     * @param geometry feature geometry
     * @param geometry.x x-coordinates
     * @param geometry.y y-coordinates
     * @param path path to set the coordinates on
     * @param context rendering context or its transformation
     */
    apply(geometry: object | { x: number[]; y: number[]; } , path: ShapesPath, context?: RenderingContext | Transformation): void;
}
