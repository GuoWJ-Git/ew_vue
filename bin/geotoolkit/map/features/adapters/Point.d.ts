import {IGeometryToShape} from './IGeometryToShape';
import {IGeometryToText} from './IGeometryToText';
import {Node} from '../../../scene/Node';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {Transformation} from '../../../util/Transformation';

/**
 * Applies feature geometry's 'x' and 'y' (in Map C.S.) to {@link @int/geotoolkit/scene/shapes/AnchoredShape.AnchoredShape} as an anchor
 */
export class Point implements IGeometryToShape, IGeometryToText {
    /**
     * Applies feature geometry's 'x' and 'y' (in Map C.S.) to {@link @int/geotoolkit/scene/shapes/AnchoredShape.AnchoredShape} as an anchor
     * @param options options
     * @param options.offset anchor offset
     * @param options.offset.x x-offset
     * @param options.offset.y y-offset
     */
    constructor(options?: object | { offset?: object | { x?: number; y?: number; } ; } );
    /**
     * Sets feature_geometry-to-text_anchor_position offset options. For the new options to take effect on layer, the layer has to be invalidated.
     * @param options options
     * @param options.offset offset offset options
     * @param options.offset.x x-ordinate offset in device coordinates
     * @param options.offset.y y-ordinate offset in device coordinates
     */
    setOptions(options?: object | { offset?: object | { x?: number; y?: number; } ; } ): this;
    /**
     * Applies feature geometry's 'x' and 'y' to {@link @int/geotoolkit/scene/shapes/AnchoredShape.AnchoredShape} as an anchor
     * @param geometry feature geometry
     * @param geometry.x x-ordinate
     * @param geometry.y y-ordinate
     * @param shape shape to set the anchor on
     * @param context rendering context or its transformation
     */
    apply(geometry: object | { x: number; y: number; } , shape: Node, context?: RenderingContext | Transformation): void;
}
