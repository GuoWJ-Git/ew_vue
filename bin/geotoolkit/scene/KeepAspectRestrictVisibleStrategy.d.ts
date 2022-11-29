import {KeepAspectRatioRestrictedAnchoredStrategy} from './KeepAspectRatioRestrictedAnchoredStrategy';
import {Group} from './Group';
import {Transformation} from '../util/Transformation';

/**
 * KeepAspectRestrictVisibleStrategy input transformation adjustment. This is same as "RestrictVisibleModelLimitsStrategy + KeepAspectRatioRestrictedAnchoredStrategy"
 */
export class KeepAspectRestrictVisibleStrategy extends KeepAspectRatioRestrictedAnchoredStrategy {
    /**
     * KeepAspectRestrictVisibleStrategy input transformation adjustment. This is same as "RestrictVisibleModelLimitsStrategy + KeepAspectRatioRestrictedAnchoredStrategy"
     * @param options JSON object
     * @param options.noHorizontalScaleScroll flag to set nohorizontalscalescroll
     * @param options.noVerticalScaleScroll flag to set noverticalscalescroll
     */
    constructor(options?: object | { noHorizontalScaleScroll?: boolean; noVerticalScaleScroll?: boolean; } );
    /**
     * Adjusts input transformation
     * @param model model
     * @param newTr transformation to adjust
     */
    adjustTransformation(model: Group, newTr: Transformation): Transformation;
}
