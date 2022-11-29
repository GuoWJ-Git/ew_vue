import {ModelLimitsStrategy} from './ModelLimitsStrategy';

/**
 * Synchronize model limits with bounds in horizontal or/and vertical direction
 */
export class AutoModelLimitsStrategy extends ModelLimitsStrategy {
    /**
     * Synchronize model limits with bounds in horizontal or/and vertical direction
     * @param options options
     * @param options.horizontalDirection flag to set synchronization with bounds in horizontal direction
     * @param options.verticalDirection flag to set synchronization with bounds in vertical direction
     */
    constructor(options?: object | { horizontalDirection?: boolean; verticalDirection?: boolean; } );
}
