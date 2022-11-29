import {ScaleScrollStrategy} from './ScaleScrollStrategy';
import {AnchorType} from '../util/AnchorType';
import {ScalingMode} from './ScalingMode';
import {Group} from './Group';
import {Transformation} from '../util/Transformation';

/**
 * AnchoredTransformationAdjustmentStrategy input transformation adjustment <br>
 * Anchors to given coordinates and keeps aspect ratio at scaling if set appropriate option
 * AnchoredTransformationAdjustmentStrategy with its default option { keepAspectRatio: false } if data model's visible
 * model limits go beyond entire model limits, output transformation's "translate" components get adjusted to align
 * the model's position according to 'alignment' value. Setting <code>keepAspectRatio</code> on the strategy tells it
 * to keep the same ratio of the adjusted transformation's "scaleY/scaleX".
 */
export class AnchoredTransformationAdjustmentStrategy extends ScaleScrollStrategy {
    /**
     * AnchoredTransformationAdjustmentStrategy input transformation adjustment <br>
     * Anchors to given coordinates and keeps aspect ratio at scaling if set appropriate option
     * AnchoredTransformationAdjustmentStrategy with its default option { keepAspectRatio: false } if data model's visible
     * model limits go beyond entire model limits, output transformation's "translate" components get adjusted to align
     * the model's position according to 'alignment' value. Setting <code>keepAspectRatio</code> on the strategy tells it
     * to keep the same ratio of the adjusted transformation's "scaleY/scaleX".
     * @param options 
     * @param options.horizontalAlignment deprecated (since 2020 (3.0)). use alignment instead. horizontal alignment
     * @param options.verticalAlignment deprecated (since 2020 (3.0)). use alignment instead. vertical alignment
     * @param options.alignment alignment
     * @param options.aspectRatio y-scale to x-scale ratio
     * @param options.mode scaling mode
     * @param options.keepAspectRatio keep aspect ratio flag
     */
    constructor(options?: object | { horizontalAlignment?: string; verticalAlignment?: string; alignment?: AnchorType; aspectRatio?: number; mode?: ScalingMode; keepAspectRatio?: boolean; } );
    /**
     * Adjusts input transformation
     * @param model model
     * @param newLocalTr transformation to adjust
     */
    adjustTransformation(model: Group, newLocalTr: Transformation): Transformation;
}
