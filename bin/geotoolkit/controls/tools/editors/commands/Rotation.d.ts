import {AbstractCommand} from './AbstractCommand';

/**
 * Command for rotating node around its center
 */
export class Rotation extends AbstractCommand {
    /**
     * Command for rotating node around its center
     * @param angle rotation angle (in radians)
     */
    constructor(angle: number);
    /**
     * Returns rotation angle
     */
    getAngle(): number;
}
