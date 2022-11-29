import {Transformation} from '../util/Transformation';
import {Trajectory2d} from './Trajectory2d';

/**
 * This class defines abstract strategy how to scale track width
 */
export class TrackWidthStrategy {
    /**
     * This class defines abstract strategy how to scale track width
     */
    constructor();
    /**
     * Return track width in pixels
     * @param tr transformation to device
     * @param options options
     * @param options.width track width
     * @param options.trajectory trajectory
     */
    getWidth(tr: Transformation, options: object | { width: number; trajectory: Trajectory2d; } ): number;
    /**
     * Calculates trajectory widths (both: model and device)
     * @param trajectory trajectory
     * @param tr transformation to device
     */
    getDeviceLength(trajectory: Trajectory2d, tr: Transformation): {deviceLength: number; length: number} | object;
}
