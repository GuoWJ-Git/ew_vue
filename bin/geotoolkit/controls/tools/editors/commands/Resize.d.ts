import {AbstractCommand} from './AbstractCommand';

/**
 * Command for resizing node
 * @example
 * ```javascript
 * Resize direction:
 * {
 *     vx: 1,
 *     vy: 1,
 *     delta: 0.5 // node should be stretched +50% in the <1, 1> direction
 * }
 * ```
 */
export class Resize extends AbstractCommand {
    /**
     * Command for resizing node
     * @param directions resize directions options
     */
    constructor(directions: any[]);
    /**
     * Returns resize direction options
     */
    getResizeDirections(): object[];
}
