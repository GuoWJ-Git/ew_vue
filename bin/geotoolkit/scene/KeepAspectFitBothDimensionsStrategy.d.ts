import {AnchoredTransformationAdjustmentStrategy} from './AnchoredTransformationAdjustmentStrategy';
import {Group} from './Group';
import {Transformation} from '../util/Transformation';

/**
 * KeepAspectFitBothDimensionsStrategy input transformation adjustment. <br>
 * This keeps aspect ratio based on the options supplied, anchors to given coordinates and transforms visible model limits fit both dimensions. <br>
 * By default, anchors to the center horizontally and vertically.
 */
export class KeepAspectFitBothDimensionsStrategy extends AnchoredTransformationAdjustmentStrategy {
    /**
     * KeepAspectFitBothDimensionsStrategy input transformation adjustment. <br>
     * This keeps aspect ratio based on the options supplied, anchors to given coordinates and transforms visible model limits fit both dimensions. <br>
     * By default, anchors to the center horizontally and vertically.
     * @param options 
     * @param options.alignment alignment
     * @param options.needanchor true, if need anchor, else false
     */
    constructor(options?: object | { alignment?: string; needanchor?: boolean; } );
    /**
     * Adjusts input transformation
     * @param model model
     * @param newTr transformation to adjust
     */
    adjustTransformation(model: Group, newTr: Transformation): Transformation;
}
