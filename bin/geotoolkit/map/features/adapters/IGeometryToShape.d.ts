import {Node} from '../../../scene/Node';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {Transformation} from '../../../util/Transformation';

/**
 * Interface to retrieve feature geometry and apply it to {@link @int/geotoolkit/scene/Node.Node} shape
 */
export abstract class IGeometryToShape {
    /**
     * Applies feature geometry to {@link @int/geotoolkit/scene/Node.Node} shape
     * @param geometry feature geometry
     * @param shape shape to set the geometry on
     * @param context rendering context or its transformation
     */
    abstract apply(geometry: object, shape: Node, context?: RenderingContext | Transformation): void;
}
