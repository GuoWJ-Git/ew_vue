import {AnchoredTransformationAdjustmentStrategy} from './AnchoredTransformationAdjustmentStrategy';
import {Group} from './Group';
import {Transformation} from '../util/Transformation';

/**
 * KeepAspectRatioRestrictedAnchoredStrategy input transformation adjustment. <br>
 * This keeps aspect ratio based on the options supplied and also aligns the model bounds.
 */
export class KeepAspectRatioRestrictedAnchoredStrategy extends AnchoredTransformationAdjustmentStrategy {
    /**
     * KeepAspectRatioRestrictedAnchoredStrategy input transformation adjustment. <br>
     * This keeps aspect ratio based on the options supplied and also aligns the model bounds.
     * @param options 
     * @param options.minvisiblehorizontalpart minimum visible horizontal part of model [0;1]
     * @param options.minvisibleverticalpart minimum visible vertical part of model [0;1]
     * @param options.needanchor true, if need anchor, else false
     */
    constructor(options?: object | { minvisiblehorizontalpart?: number; minvisibleverticalpart?: number; needanchor?: boolean; } );
    /**
     * Adjusts input transformation
     * @param model model
     * @param newTr transformation to adjust
     */
    adjustTransformation(model: Group, newTr: Transformation): Transformation;
}
