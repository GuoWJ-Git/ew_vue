import {AbstractScroll} from './AbstractScroll';
import {SymbolShape} from '../../../scene/shapes/SymbolShape';
import {LineStyle} from '../../../attributes/LineStyle';
import {FillStyle} from '../../../attributes/FillStyle';
import {Group} from '../../../scene/Group';
import {Rect} from '../../../util/Rect';

/**
 * Defines a Compact Scroll bar
 * @deprecated since 2020.1 (3.1) Use HVBaseScroll instead
 */
export class CompactBaseScroll extends AbstractScroll {
    /**
     * Defines a Compact Scroll bar
     * @param options An object containing options
     * @param options.name tool name
     */
    constructor(options: object | { name?: string; } );
    /**
     * Set options
     * @param options options
     * @param options.resizable resizable or not
     * @param options.minhandle symbol to be displayed on the left end(or start) of the scroll bar
     * @param options.maxhandle symbol to be displayed on the right end(or end) of the scroll bar
     * @param options.manipulation manipulation
     * @param options.manipulation.type The type of alternative manipulation mode.
     * @param options.manipulation.threshold The mimimum size in pixels below which the alternate manipulation mode should activate.
     * @param options.minscrollbutton minscrollbutton
     * @param options.minscrollbutton.visible minscrollbutton visibility flag
     * @param options.minscrollbutton.linestyle minscrollbutton linestyle
     * @param options.minscrollbutton.fillstyle minscrollbutton fillstyle
     * @param options.minscrollbutton.caret minscrollbutton symbol
     * @param options.maxscrollbutton maxscrollbutton
     * @param options.maxscrollbutton.visible maxscrollbutton visibility flag
     * @param options.maxscrollbutton.linestyle maxscrollbutton linestyle
     * @param options.maxscrollbutton.fillstyle maxscrollbutton fillstyle
     * @param options.maxscrollbutton.caret maxscrollbutton symbol
     * @param options.scrollbar scrollbar
     * @param options.scrollbar.visible scrollbar visibility flag
     * @param options.scrollbar.linestyle scrollbar linestyle
     * @param options.scrollbar.fillstyle scrollbar fillstyle
     * @param options.scrolltrack scrolltrack
     * @param options.scrolltrack.visible scrolltrack visibility flag
     * @param options.scrolltrack.linestyle scrolltrack linestyle
     * @param options.scrolltrack.fillstyle scrolltrack fillstyle
     */
    setOptions(options?: object | { resizable?: boolean; minhandle?: SymbolShape; maxhandle?: SymbolShape; manipulation?: object | { type?: AlternativeManipulationMode; threshold?: number; } ; minscrollbutton?: object | { visible?: boolean; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; caret?: SymbolShape; } ; maxscrollbutton?: object | { visible?: boolean; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; caret?: SymbolShape; } ; scrollbar?: object | { visible?: boolean; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; } ; scrolltrack?: object | { visible?: boolean; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; } ; } ): this;
    /**
     * Get options
     */
    getOptions(): object | any;
    /**
     * Get visible model
     */
    getVisibleModel(): Group;
    /**
     * Set model limits
     * @param modelLimits model coordinate limits
     * @param visibleModelLimits visible model limits
     */
    setModelLimits(modelLimits: Rect, visibleModelLimits: Rect): this;
    /**
     * Updates the scrolling mode to work correctly with small visible area.
     * @param visibleModelLimits The current visible model limits.
     * @param isHorizontal The orientation of the scroll bar.
     */
    updateMinimumScrollMode(visibleModelLimits: Rect, isHorizontal: boolean): void;
    /**
     * Returns optimal size for scroll bar
     */
    getDesiredSize(): number;
}
/**
 * Enum of Alternative manipulation mode types.
 */
export enum AlternativeManipulationMode {
    /**
     * Never enable alternative manipulation mode.
     */
    Disabled = 'disabled',
    /**
     * Use default threshold for alternative manipulation mode.
     */
    Default = 'default',
    /**
     * Use custom threshold for alternative manipulation mode.
     */
    Custom = 'custom'
}
/**
 * Events
 * see {@link @int/geotoolkit/controls/tools/scroll/AbstractScroll.Events}
 */
export type Events = any;

