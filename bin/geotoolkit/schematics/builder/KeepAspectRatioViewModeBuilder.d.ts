import {AbstractViewModeBuilder} from './AbstractViewModeBuilder';
import {IGetRangeHeight} from './IGetRangeHeight';

/**
 * Builder for schematics "KeepAspectRatio" view mode
 */
export class KeepAspectRatioViewModeBuilder extends AbstractViewModeBuilder {
    /**
     * Builder for schematics "KeepAspectRatio" view mode
     * @param options view mode options
     * @param options.defaultaspectratio default aspect ratio value
     * @param options.rangeheight regular ranges settings
     * @param options.rangeheight.top top range height calculator
     * @param options.rangeheight.between "between" range(s) height calculator
     * @param options.rangeheight.bottom bottom range height calculator
     */
    constructor(options?: object | { defaultaspectratio?: number; rangeheight?: object | { top?: IGetRangeHeight; between?: IGetRangeHeight; bottom?: IGetRangeHeight; } ; } );
    /**
     * Gets AspectRatio for the component; or "NoAspectRatio"-value
     * @param name component name
     * @param options KAR-info map
     */
    getAssignedAspectRatio(name: string, options: object): number | null;
    /**
     * Gets builder options
     */
    getOptions(): object | any;
    /**
     * Sets builder options
     * @param options builder options
     */
    setOptions(options: object): this;
}
