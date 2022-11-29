import {DataTransformation} from '../DataTransformation';
import {Dimension} from '../../../util/Dimension';

/**
 * This class perform the inverse logarithmic transformation.
 */
export class InverseLogWasm extends DataTransformation {
    /**
     * This class perform the inverse logarithmic transformation.
     */
    constructor();
    /**
     * Configures this data transform.
     * @param config The data transform configuration.
     * @param config.enabled True if this transform should be applied.
     * @param size The size of the data transform.
     * @param data The data on which this transform is applied.
     */
    applyConfiguration(config: object | { enabled?: string; } , size: Dimension, data: ArrayBuffer): void;
}
