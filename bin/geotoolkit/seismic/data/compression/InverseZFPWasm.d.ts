import {DataTransformation} from '../DataTransformation';
import {Dimension} from '../../../util/Dimension';

/**
 * This class perform the inverse ZFP transformation.
 */
export class InverseZFPWasm extends DataTransformation {
    /**
     * This class perform the inverse ZFP transformation.
     */
    constructor();
    /**
     * Configures this data transform.
     * @param config The data transform configuration.
     * @param config.enabled True if this transform should be applied.
     * @param config.tolerance ZFP compression accuracy.
     * @param size The size of the data transform.
     * @param data The data on which this transform is applied.
     */
    applyConfiguration(config: object | { enabled?: string; tolerance?: number; } , size: Dimension, data: ArrayBuffer): void;
}
