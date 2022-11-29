import {SnapPickingStrategy} from './SnapPickingStrategy';

/**
 * Defines high window maximum picking strategy
 */
export class HighWindowMaximumPicking extends SnapPickingStrategy {
    /**
     * Defines high window maximum picking strategy
     * @param options options object
     * @param options.window window size to search maximum
     */
    constructor(options?: object | { window?: number; } );
}
