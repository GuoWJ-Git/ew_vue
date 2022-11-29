import {SnapPickingStrategy} from './SnapPickingStrategy';

/**
 * Defines high window minimum picking strategy
 */
export class HighWindowMinimumPicking extends SnapPickingStrategy {
    /**
     * Defines high window minimum picking strategy
     * @param options options object
     * @param options.window window size to search minimum
     */
    constructor(options?: object | { window?: number; } );
}
