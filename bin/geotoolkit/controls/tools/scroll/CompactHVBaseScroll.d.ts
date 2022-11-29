import {CompactBaseScroll} from './CompactBaseScroll';
import {SymbolShape} from '../../../scene/shapes/SymbolShape';
import {LineStyle} from '../../../attributes/LineStyle';
import {FillStyle} from '../../../attributes/FillStyle';
import {Range} from '../../../util/Range';
import {Rect} from '../../../util/Rect';

/**
 * Defines a Compact Scroll bar
 * @deprecated since 2020.1 (3.1) Use HVBaseScroll instead
 */
export class CompactHVBaseScroll extends CompactBaseScroll {
    /**
     * Defines a Compact Scroll bar
     * @param options 
     * @param options.name tool name
     */
    constructor(options: object | { name?: string; } );
    /**
     * Set options
     * @param options options
     * @param options.resizable resizable or not
     * @param options.minhandle symbol to be displayed on the left end(or start) of the scroll bar
     * @param options.maxhandle symbol to be displayed on the right end(or end) of the scroll bar
     * @param options.minscrollbutton minscrollbutton
     * @param options.minscrollbutton.visible minscrollbutton visibility flag
     * @param options.minscrollbutton.size minscrollbutton size
     * @param options.minscrollbutton.linestyle minscrollbutton line style
     * @param options.minscrollbutton.fillstyle minscrollbutton fill style
     * @param options.minscrollbutton.caret minscrollbutton symbol
     * @param options.maxscrollbutton maxscrollbutton
     * @param options.maxscrollbutton.visible maxscrollbutton visibility flag
     * @param options.maxscrollbutton.size maxscrollbutton size
     * @param options.maxscrollbutton.linestyle maxscrollbutton line style
     * @param options.maxscrollbutton.fillstyle maxscrollbutton fill style
     * @param options.maxscrollbutton.caret maxscrollbutton symbol
     * @param options.scrollbar scrollbar
     * @param options.scrollbar.visible scrollbar visibility flag
     * @param options.scrollbar.autohide scrollbar autohide flag
     * @param options.scrollbar.linestyle scrollbar linestyle
     * @param options.scrollbar.fillstyle scrollbar fillstyle
     * @param options.scrolltrack scrolltrack
     * @param options.scrolltrack.visible scrolltrack visibility flag
     * @param options.scrolltrack.linestyle scrolltrack linestyle
     * @param options.scrolltrack.fillstyle scrolltrack fillstyle
     */
    setOptions(options?: object | { resizable?: boolean; minhandle?: SymbolShape; maxhandle?: SymbolShape; minscrollbutton?: object | { visible?: boolean; size?: number; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; caret?: SymbolShape; } ; maxscrollbutton?: object | { visible?: boolean; size?: number; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; caret?: SymbolShape; } ; scrollbar?: object | { visible?: boolean; autohide?: boolean; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; } ; scrolltrack?: object | { visible?: boolean; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; } ; } ): this;
    /**
     * specify scroll bar orientation
     * @param flip scroll bar orientation
     */
    setFlip(flip: boolean): this;
    /**
     * Gets the scrolls Model Limits Range
     */
    getModelRange(): Range;
    /**
     * Gets the scroll visible Model Range
     */
    getVisibleModelRange(): Range;
    /**
     * Set model limtis
     * @param modelLimits model coordinate limits
     * @param visibleModelLimits visible model limits
     */
    setModelLimits(modelLimits: Rect, visibleModelLimits: Rect): this;
}
/**
 * Events {@link @int/geotoolkit/controls/tools/scroll/AbstractScroll.Events}
 */
export type Events = any;

