import {AbstractCommand} from './AbstractCommand';

/**
 * Command to create node from continuous sequence of points
 */
export class AddPath extends AbstractCommand {
    /**
     * Command to create node from continuous sequence of points
     * @param x point(s) x-ordinate
     * @param y point(s) y-ordinate
     */
    constructor(x: number | number[], y: number | number[]);
    /**
     * Returns points x-ordinate array
     */
    getX(): number[];
    /**
     * Returns points y-ordinate array
     */
    getY(): number[];
}
