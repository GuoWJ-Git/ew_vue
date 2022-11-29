import {ScaleScrollStrategy} from './ScaleScrollStrategy';
import {Group} from './Group';
import {Transformation} from '../util/Transformation';

/**
 * RestrictVisibleModelLimitsStrategy input transformation adjustment is restricted based on the options supplied.
 * RestrictVisibleModelLimitsStrategy adjust transformation the way data model's visible model limits do not go
 * beyond entire model limits. When either of the options  is set to "true" on the strategy, additional corresponding
 * (horizontal or vertical) transformation suppression is performed.
 */
export class RestrictVisibleModelLimitsStrategy extends ScaleScrollStrategy {
    /**
     * RestrictVisibleModelLimitsStrategy input transformation adjustment is restricted based on the options supplied.
     * RestrictVisibleModelLimitsStrategy adjust transformation the way data model's visible model limits do not go
     * beyond entire model limits. When either of the options  is set to "true" on the strategy, additional corresponding
     * (horizontal or vertical) transformation suppression is performed.
     * @param options 
     * @param options.nohorizontalscalescroll flag to set nohorizontalscalescroll
     * @param options.noverticalscalescroll flag to set noverticalscalescroll
     * @param options.minvisiblehorizontalpart minimum visible horizontal part of model [0;1]
     * @param options.minvisibleverticalpart minimum visible vertical part of model [0;1]
     */
    constructor(options?: object | { nohorizontalscalescroll?: boolean; noverticalscalescroll?: boolean; minvisiblehorizontalpart?: number; minvisibleverticalpart?: number; } );
    /**
     * Adjusts input transformation
     * @param model model
     * @param newTr transformation to adjust
     */
    adjustTransformation(model: Group, newTr: Transformation): Transformation;
}
