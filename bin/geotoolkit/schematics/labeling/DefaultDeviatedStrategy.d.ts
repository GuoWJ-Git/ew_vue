import {LabelingStrategyBase} from './LabelingStrategyBase';

/**
 * Default labeling strategy implementation.
 */
export class DefaultDeviatedStrategy extends LabelingStrategyBase {
    /**
     * Default labeling strategy implementation.
     * @param options strategy parameters
     * @param options.equallySpaced "equally spaced" flag
     * @param options.anchorValueFixed anchor fixed position flag
     * @param options.gap gap for along trajectory mode
     * @param options.deltaPx deltaPx
     */
    constructor(options?: object | { equallySpaced?: boolean; anchorValueFixed?: boolean; gap?: number; deltaPx?: number; } );
    /**
     * Sets properties
     * @param properties strategy parameters
     * @param properties.equallySpaced "equally spaced" flag
     * @param properties.anchorValueFixed anchor fixed position flag
     * @param properties.gap gap for along trajectory mode
     * @param properties.deltaPx deltaPx
     */
    setProperties(properties?: object | { equallySpaced?: boolean; anchorValueFixed?: boolean; gap?: number; deltaPx?: number; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {equallySpaced: boolean; anchorValueFixed: boolean; gap: number; deltaPx: number} | any;
    /**
     * Sets strategy options (See base class method API for more options)
     * @param options strategy options
     * @param options.mode labeling mode
     * @param options.equallySpaced "equally spaced" flag
     * @param options.gap gap for along trajectory mode
     * @param options.labelInfoProvider label info provider
     */
    setOptions(options: object | { mode?: string; equallySpaced?: boolean; gap?: number; labelInfoProvider: Function; } ): this;
}
