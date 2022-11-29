import {AbstractAnimation} from './AbstractAnimation';
import {Plot} from '../../Plot';
import {Vector3} from '../../THREE';

/**
 * Animation for moving camera
 */
export class CameraMoveAnimation extends AbstractAnimation {
    /**
     * Animation for moving camera
     * @param options options object
     * @param options.plot plot
     * @param options.position The position to move to in USER coordinates
     * @param options.lookat The point to look at (in USER coordinates)
     * @param options.duration Duration of the animation in milliseconds
     */
    constructor(options: object | { plot: Plot; position?: Vector3; lookat?: Vector3; duration?: number; } );
    /**
     * Stop animation
     */
    stop(): void;
}
