import {SnapPickingStrategy} from './SnapPickingStrategy';

/**
 * Snap picking strategy factory
 */
export class SnapPickingStrategyFactory {
    /**
     * Snap picking strategy factory
     */
    constructor();
    /**
     * Register snap picking strategy to factory
     * @param strategy strategy to register
     */
    register(strategy: SnapPickingStrategy): void;
    /**
     * Get snap picking strategy by name
     * @param name name of strategy
     */
    get(name?: string): SnapPickingStrategy;
    /**
     * Get instance of snap picking strategy factory
     */
    static getInstance(): SnapPickingStrategyFactory;
}
