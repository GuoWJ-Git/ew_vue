import {AbstractHighlightPass} from './AbstractHighlightPass';
import {HighlightType} from '../Plot';
import {Color} from '../THREE';

/**
 * A outline pass that can be used in postprocessing.
 * This pass implements outline effect.
 */
export class OutlinePass extends AbstractHighlightPass {
    /**
     * A outline pass that can be used in postprocessing.
     * This pass implements outline effect.
     * @param options the OutlinePass options
     * @param options.enabled flag to enable highlight
     * @param options.mode Click or hover mode for highlight
     * @param options.edgestrength Factor for edge strength
     * @param options.edgeglow Factor for glow effect
     * @param options.edgethickness The edge thickness
     * @param options.pulseperiod The time interval of a pulse effect
     * @param options.visiblecolor The color for visiable edge
     * @param options.hiddencolor The color for hidden edge
     * @param options.hiddenline If true, show hidden outline in area that other objects clipped the selected object
     */
    constructor(options: object | { enabled?: boolean; mode?: HighlightType; edgestrength?: number; edgeglow?: number; edgethickness?: number; pulseperiod?: number; visiblecolor?: Color; hiddencolor?: Color; hiddenline?: boolean; } );
}
