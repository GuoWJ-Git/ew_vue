import {AbstractScroll} from './AbstractScroll';
import {CompositeNode} from '../../../scene/CompositeNode';
import {Rect} from '../../../util/Rect';
import {Range} from '../../../util/Range';
import {LineStyle} from '../../../attributes/LineStyle';
import {FillStyle} from '../../../attributes/FillStyle';

/**
 * Abstract base class for common Vertical and Horizontal scrollers
 */
export class HVBaseScroll extends AbstractScroll {
    /**
     * Abstract base class for common Vertical and Horizontal scrollers
     * @param options 
     * @param options.target scroll target object
     * @param options.modellimits model limits
     * @param options.visiblelimits visible model limits
     * @param options.name This tool's name
     * @param options.size scrollbar size
     * @param options.resizable true for resizable
     */
    constructor(options?: object | { target?: CompositeNode; modellimits?: Rect; visiblelimits?: Rect; name?: string; size?: number; resizable?: boolean; } );
    /**
     * specify scroll bar orientation
     * @param flip scroll bar orientation
     */
    setFlip(flip: boolean): this;
    /**
     * set size of the scrollbar
     * @param size size of the scrollbar, size should not be even
     */
    setSize(size: number): this;
    /**
     * Sets the scrollTarget
     * @deprecated since 2020 (3.0)
     * @param object scroll target
     */
    setTarget(object: CompositeNode): this;
    /**
     * Gets the scrolls Model Limits Range
     */
    getModelRange(): Range;
    /**
     * Gets the scroll visible Model Range
     */
    getVisibleModelRange(): Range;
    /**
     * specify current model limits
     * @param modelLimits model limits
     * @param visibleLimits visible model limits
     * @param flipped orientation flipped or not
     * @param enableAnimation show animation or not
     */
    setModelLimits(modelLimits: Rect, visibleLimits?: Rect, flipped?: boolean, enableAnimation?: boolean): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getOptions(): object | any;
    /**
     * Set Options
     * @param properties JSON containing properties
     * @param properties.name name of the tool
     * @param properties.size size of the scrollbar
     * @param properties.rounded rounded borders
     * @param properties.minimumcarretsize minimum size of the the carriage
     * @param properties.minscrollbutton minscrollbutton properties
     * @param properties.minscrollbutton.visible minscrollbutton visibility
     * @param properties.maxscrollbutton maxscrollbutton properties
     * @param properties.maxscrollbutton.visible maxscrollbutton visibility
     * @param properties.borderlinestyle border line style
     * @param properties.fillstyle fill style
     * @param properties.linestyle line style
     * @param properties.caretlinestyle caret line style
     * @param properties.caretfillstyle caret fill style
     * @param properties.arrowlinestyle arrow line style
     * @param properties.resizable true for resizable scroller
     */
    setOptions(properties?: object | { name?: string; size?: number; rounded?: boolean; minimumcarretsize?: number; minscrollbutton?: object | { visible?: boolean; } ; maxscrollbutton?: object | { visible?: boolean; } ; borderlinestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; linestyle?: LineStyle | string | object; caretlinestyle?: LineStyle | string | object; caretfillstyle?: FillStyle | string | object; arrowlinestyle?: LineStyle | string | object; resizable?: boolean; } ): this;
}
