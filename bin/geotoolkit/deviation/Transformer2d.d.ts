import {Trajectory2d} from './Trajectory2d';
import {Transformation} from '../util/Transformation';
import {DeviatedTransformation} from './DeviatedTransformation';

/**
 * 2D-transformer abstraction
 */
export class Transformer2d {
    /**
     * 2D-transformer abstraction
     */
    constructor();
    /**
     * Creates DeviatedTransformation
     * @param deviationContext deviation context
     * @param deviationContext.trajectory trajectory along the path
     * @param deviationContext.trackWidth width of the track in pixels
     * @param deviationContext.offset offset to the trajectory segment in pixels
     * @param transformation affine transformation applied
     */
    create(deviationContext: object | { trajectory: Trajectory2d; trackWidth: number; offset: number; } , transformation: Transformation): DeviatedTransformation;
}
