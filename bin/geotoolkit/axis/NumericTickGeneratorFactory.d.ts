import {NumericTickGenerator} from './NumericTickGenerator';
import {NumericLinearTickGenerator} from './NumericLinearTickGenerator';
import {AdaptiveType, AdaptiveTickGenerator} from './AdaptiveTickGenerator';

/**
 * Defines helper method(s) to create tick generator instance
 */
export class NumericTickGeneratorFactory {
    /**
     * Defines helper method(s) to create tick generator instance
     */
    constructor();
    /**
     * Returns instance of the factory
     */
    static getInstance(): NumericTickGeneratorFactory;
    /**
     * Creates tick generator instance based on specified type
     * @param options tick generator options
     * @param options.ticks ticks options
     * @param options.ticks.edge 'edge' grade ticks options
     * @param options.ticks.edge.visible 'edge' grade ticks visibility
     * @param options.labels labels options
     * @param options.labels.edge 'edge' grade labels options
     * @param options.labels.edge.visible 'edge' grade labels visibility
     * @param type type of tick generator
     */
    create(options?: object | { ticks?: object | { edge?: object | { visible?: boolean; } ; } ; labels?: object | { edge?: object | { visible?: boolean; } ; } ; } , type?: GeneratorType | string): NumericTickGenerator;
    /**
     * Creates linear numeric tick generator instance
     * @param options tick generator options
     * @param options.ticks ticks options
     * @param options.ticks.edge 'edge' grade ticks options
     * @param options.ticks.edge.visible 'edge' grade ticks visibility
     * @param options.labels labels options
     * @param options.labels.edge 'edge' grade labels options
     * @param options.labels.edge.visible 'edge' grade labels visibility
     */
    createLinear(options?: object | { ticks?: object | { edge?: object | { visible?: boolean; } ; } ; labels?: object | { edge?: object | { visible?: boolean; } ; } ; } ): NumericLinearTickGenerator;
    /**
     * Creates adaptive tick generator instance
     * @param options adaptive tick generator options
     * @param options.adaptivetype type of adaptive algorithm
     * @param options.minspan minimum distance between ticks
     * @param options.minspangrade tick grade to be used for minimum distance between ticks
     * @param options.ticks ticks options
     * @param options.ticks.edge 'edge' grade ticks options
     * @param options.ticks.edge.visible 'edge' grade ticks visibility
     * @param options.labels labels options
     * @param options.labels.edge 'edge' grade labels options
     * @param options.labels.edge.visible 'edge' grade labels visibility
     */
    createAdaptive(options?: object | { adaptivetype?: AdaptiveType; minspan?: number; minspangrade?: number; ticks?: object | { edge?: object | { visible?: boolean; } ; } ; labels?: object | { edge?: object | { visible?: boolean; } ; } ; } ): AdaptiveTickGenerator;
}
/**
 * Enum of axis tick generator type
 */
export enum GeneratorType {
    /**
     * Adaptive tick generator
     */
    Adaptive = 'adaptive',
    /**
     * Linear tick generator
     */
    Linear = 'linear'
}
