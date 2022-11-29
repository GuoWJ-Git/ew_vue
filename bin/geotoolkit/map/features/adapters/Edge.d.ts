import {IGeometryToText} from './IGeometryToText';
import {Text} from '../../../scene/shapes/Text';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {Transformation} from '../../../util/Transformation';

/**
 * Calculates right edge point of geometry and applies it to {@link @int/geotoolkit/scene/shapes/Text.Text} as an anchor
 */
export class Edge implements IGeometryToText {
    /**
     * Calculates right edge point of geometry and applies it to {@link @int/geotoolkit/scene/shapes/Text.Text} as an anchor
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
    setOptions(options: object | { offset?: object | { x?: number; y?: number; } ; } ): this;
    /**
     * Calculates right end point of polyline and applies it to {@link @int/geotoolkit/scene/shapes/Text.Text} as an anchor
     * @param geometry feature geometry
     * @param geometry.x array of x-ordinates
     * @param geometry.y array of y-ordinates
     * @param text text shape to set the anchor on
     * @param context rendering context or its transformation
     */
    apply(geometry: object | { x: number[]; y: number[]; } , text: Text, context?: RenderingContext | Transformation): void;
}
