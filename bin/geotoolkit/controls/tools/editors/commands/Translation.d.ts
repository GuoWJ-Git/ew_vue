import {AbstractCommand} from './AbstractCommand';

/**
 * Command for translating node
 */
export class Translation extends AbstractCommand {
    /**
     * Command for translating node
     * @param dx x-ordinate translation value
     * @param dy y-ordinate translation value
     */
    constructor(dx: number, dy: number);
    /**
     * Returns X translation (dx)
     */
    getTranslateX(): number;
    /**
     * Returns Y translation (dy)
     */
    getTranslateY(): number;
}
