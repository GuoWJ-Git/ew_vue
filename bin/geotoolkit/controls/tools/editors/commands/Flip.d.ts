import {AbstractCommand} from './AbstractCommand';

/**
 * Command for flipping node vertically and/or horizontally
 */
export class Flip extends AbstractCommand {
    /**
     * Command for flipping node vertically and/or horizontally
     * @param flipX true if node should be flipped horizontally, false otherwise
     * @param flipY true if node should be flipped vertically, false otherwise
     */
    constructor(flipX: boolean, flipY: boolean);
    /**
     * Returns true if node should be flipped horizontally
     */
    getFlipX(): boolean;
    /**
     * Returns true if node should be flipped vertically
     */
    getFlipY(): boolean;
}
