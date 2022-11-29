import {Transformer2d} from './Transformer2d';
import {TrackWidthStrategy} from './TrackWidthStrategy';
import {Trajectory2d} from './Trajectory2d';
import {Transformation} from '../util/Transformation';
import {DeviatedTransformation} from './DeviatedTransformation';

/**
 * The class PiecewiseTransformer is an implementation of Transformer2D. It transforms
 * the actual geometry by applying the deviation.
 * Trajectory's measured depth values are equal to the original 2D-spaces's Y-values.
 */
export class PiecewiseTransformer extends Transformer2d {
    /**
     * The class PiecewiseTransformer is an implementation of Transformer2D. It transforms
     * the actual geometry by applying the deviation.
     * Trajectory's measured depth values are equal to the original 2D-spaces's Y-values.
     * @param options options
     * @param options.joinSegments If this is true then approximation is applied
     * to the segment and a smooth transformation is created between two linear segments.
     * @param options.scaleWidth Defines if transformer can scale track's
     * width on zooming, by default(=False) the transformer keeps the scale width same on zoom.
     * @param options.minWidth deprecated since 2020.1 (3.1) use
     * trackWidthStrategy instead. Minimum width of track for scaling on zoom
     * @param options.maxWidth deprecated since 2020.1 (3.1) use
     * trackWidthStrategy instead. maximum width of track for scaling on zoom
     * @param options.widthScaleX deprecated since 2020.1 (3.1) use
     * trackWidthStrategy instead. default scale by x position
     * @param options.widthScaleY deprecated since 2020.1 (3.1) use
     * trackWidthStrategy instead. default scale by y position
     * @param options.trackWidthStrategy a strategy to scale track with
     * @param options.approxThreshold approximation threshold for trajectory points
     * in pixels. It is the maximum distance of the original stations from the approximated path.
     * @param options.approxThresholdMd approximation trajectory for measured depths
     * in measured depth units. if it is not specified
     * then equals to options.approxThreshold
     * @param options.outlineSegments if this is true then outline stations is used
     * @param options.outlineModelBboxAdjust if this is true then uniform data
     * distribution is applied along the track
     */
    constructor(options?: object | { joinSegments?: boolean; scaleWidth?: boolean; minWidth?: number; maxWidth?: number; widthScaleX?: number; widthScaleY?: number; trackWidthStrategy?: TrackWidthStrategy; approxThreshold?: number; approxThresholdMd?: number; outlineSegments?: boolean; outlineModelBboxAdjust?: boolean; } );
    /**
     * Gets options
     * NOTE: copy of options is created and returned.
     */
    getOptions(): object | any;
    /**
     * Sets options. The default is the current state of the object.
     * @param options options
     * @param options.joinSegments If this is true then approximation is applied to the segment and a smooth transformation is created between two linear segments.
     * @param options.scaleWidth deprecated since 2020.1 use trackWidthStrategy instead. Defines if transformer can scale track's width on zooming, by default(=False) the transformer keeps the scale width same on zoom.
     * @param options.minWidth deprecated since 2020.1 (3.1) use trackWidthStrategy instead. Minimum width of track for scaling on zoom
     * @param options.maxWidth deprecated since 2020.1 (3.1) use trackWidthStrategy instead. maximum width of track for scaling on zoom
     * @param options.widthScaleX deprecated since 2020.1 (3.1) use trackWidthStrategy instead. default scale by x position
     * @param options.widthScaleY deprecated since 2020.1 (3.1) use trackWidthStrategy instead. default scale by y position
     * @param options.trackWidthStrategy a strategy to scale track with
     * @param options.approxThreshold approximation threshold for trajectory points in pixels. It is the maximum distance of the original stations from the approximated path.
     * @param options.approxThresholdMd approximation trajectory for measured depths in measured depth units. if it is not specified
     * then equals to options.approxThreshold
     * @param options.outlineSegments if this is true then outline stations is used
     * @param options.outlineModelBboxAdjust if this is true then uniform data distribution is applied along the track, including the intersection and rupture of line stations
     */
    setOptions(options?: object | { joinSegments?: boolean; scaleWidth?: boolean; minWidth?: number; maxWidth?: number; widthScaleX?: number; widthScaleY?: number; trackWidthStrategy?: TrackWidthStrategy; approxThreshold?: number; approxThresholdMd?: number; outlineSegments?: boolean; outlineModelBboxAdjust?: boolean; } ): this;
    /**
     * Gets properties
     */
    getProperties(): {joinSegments: boolean; trackWidthStrategy: TrackWidthStrategy; approxThreshold: number; approxThresholdMd: number; outlineSegments: boolean; outlineModelBboxAdjust: boolean} | any;
    /**
     * Sets properties. The default is the current state of the object.
     * @param options options
     * @param options.joinSegments If this is true then approximation is applied to the segment and a smooth transformation is created between two linear segments.
     * @param options.trackWidthStrategy a strategy to scale track with
     * @param options.approxThreshold approximation threshold for trajectory points in pixels. It is the maximum distance of the original stations from the approximated path.
     * @param options.approxThresholdMd approximation trajectory for measured depths in measured depth units. if it is not specified
     * then equals to options.approxThreshold
     * @param options.outlineSegments if this is true then outline stations is used
     * @param options.outlineModelBboxAdjust if this is true then uniform data distribution is applied along the track, including the intersection and rupture of line stations
     */
    setProperties(options?: object | { joinSegments?: boolean; trackWidthStrategy?: TrackWidthStrategy; approxThreshold?: number; approxThresholdMd?: number; outlineSegments?: boolean; outlineModelBboxAdjust?: boolean; } ): this;
    /**
     * Creates a deviated transformation
     * @param transformerContext transformer context
     * @param transformerContext.trajectory trajectory along the path
     * @param transformerContext.trackWidth width of the track. if trackWidthStrategy
     * is specified then it calculates width in pixels using provided strategy
     * @param transformerContext.offset offset in the same unit as traceWidth to the trajectory segment
     * @param transformation affine transformation applied
     */
    create(transformerContext: object | { trajectory: Trajectory2d; trackWidth?: number; offset?: number; } , transformation?: Transformation): DeviatedTransformation;
}
