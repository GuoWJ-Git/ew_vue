import {TrackWidthStrategy} from './TrackWidthStrategy';
import {Trajectory2d} from './Trajectory2d';

/**
 * This class defines strategy how to scale track width in the range from min to max
 */
export class TrackMinMaxWidthStrategy extends TrackWidthStrategy {
    /**
     * This class defines strategy how to scale track width in the range from min to max
     * @param options options
     * @param options.scaleWidth Defines if transformer can scale track's width on zooming, by default(=False) the transformer keeps the scale width same on zoom.
     * @param options.minWidth minimum width of track for scaling on zoom in pixels
     * @param options.maxWidth maximum width of track for scaling on zoom in pixels
     * @param options.widthScaleX default scale by x position
     * @param options.widthScaleY default scale by y position
     * @param trajectory trajectory
     */
    constructor(options: object | { scaleWidth?: boolean; minWidth?: number; maxWidth?: number; widthScaleX?: number; widthScaleY?: number; } , trajectory: Trajectory2d);
}
