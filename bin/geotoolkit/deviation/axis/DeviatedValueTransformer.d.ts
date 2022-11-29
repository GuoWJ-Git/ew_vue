import {ValueTransformer} from '../../axis/ValueTransformer';
import {DeviatedCompositeNode} from '../scene/DeviatedCompositeNode';
import {Axis} from '../../axis/Axis';

/**
 * Axis labels' ValueTransform implementation for deviated value-transformed case.
 */
export class DeviatedValueTransformer extends ValueTransformer {
    /**
     * Axis labels' ValueTransform implementation for deviated value-transformed case.
     * @param deviatedCompositeNode deviated composite node
     * @param valueTransformer value transformer
     * @param axis axis
     */
    constructor(deviatedCompositeNode: DeviatedCompositeNode, valueTransformer: ValueTransformer, axis: Axis);
    /**
     */
    getAxis(): Axis;
}
