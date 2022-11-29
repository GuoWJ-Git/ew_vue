import {Text} from '../../../scene/shapes/Text';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {Transformation} from '../../../util/Transformation';

/**
 * Interface to retrieve feature geometry and apply it to {@link @int/geotoolkit/scene/shapes/Text.Text} as an anchor
 */
export abstract class IGeometryToText {
    /**
     * Applies feature geometry to {@link @int/geotoolkit/scene/shapes/Text.Text} shape
     * @param geometry feature geometry
     * @param shape text shape to set the geometry on
     * @param context rendering context or its transformation
     */
    abstract apply(geometry: object, shape: Text, context?: RenderingContext | Transformation): void;
}
