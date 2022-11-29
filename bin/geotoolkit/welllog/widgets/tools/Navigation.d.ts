import {AbstractTool} from '../../../controls/tools/AbstractTool';
import {CompositeNode} from '../../../scene/CompositeNode';
import {FillStyle} from '../../../attributes/FillStyle';
import {LineStyle} from '../../../attributes/LineStyle';
import {Range} from '../../../util/Range';

/**
 * Creates default implementation of the Navigation tool <br>
 * The tool fires the following types of event:<br>
 * (1) "positionChanged" - {object} - occurs when position changed.<br>
 * (2) "depthRangeChanged" - {object} - occurs when depth limits changed.<br>
 * Tool name: 'navigation-tool'
 */
export class Navigation extends AbstractTool {
    /**
     * Creates default implementation of the Navigation tool <br>
     * The tool fires the following types of event:<br>
     * (1) "positionChanged" - {object} - occurs when position changed.<br>
     * (2) "depthRangeChanged" - {object} - occurs when depth limits changed.<br>
     * Tool name: 'navigation-tool'
     * @param options layer for holding temporary shapes or tool options
     * @param options.rangeedit range edit flag
     * @param options.background background fill style
     * @param options.scale scale options
     * @param options.scale.enabled enabled flag
     * @param options.scale.linestyle scale handle line style
     * @param options.scale.fillstyle scale handle fill style
     * @param options.scale.painter a function with has parameters: symbol, box, context
     * @param options.scale.hover scale hover styles
     * @param options.scale.hover.linestyle scale hover line style
     * @param options.scale.hover.fillstyle scale hover fill style
     * @param options.panning panning options
     * @param options.panning.enabled enabled flag
     * @param options.panning.minimumsize minimum handle size in device pixels
     * @param options.panning.linestyle panning handle line style
     * @param options.panning.fillstyle panning handle fill style
     * @param properties deprecated since 2021.1 (3.3), use first argument instead
     */
    constructor(options?: CompositeNode | object | { rangeedit?: boolean; background?: FillStyle | object | string; scale?: object | { enabled?: boolean; linestyle?: LineStyle | object | string; fillstyle?: FillStyle | object | string; painter?: Function | string; hover?: LineStyle | object | { linestyle?: LineStyle | object | string; fillstyle?: FillStyle | object | string; }  | string; } ; panning?: object | { enabled?: boolean; minimumsize?: number; linestyle?: LineStyle | object | string; fillstyle?: FillStyle | object | string; } ; } , properties?: any);
    /**
     * returns visible depth limits
     */
    getVisibleDepthLimits(): Range;
    /**
     * Set visible model limits
     * @param visibleDepthLimits visible depth limits
     */
    setVisibleDepthLimits(visibleDepthLimits: Range): this;
    /**
     * set enable state
     * @param enabled sets the enabled state
     */
    setEnabled(enabled: boolean): this;
    /**
     * Gets all the options pertaining to this object
     */
    getOptions(): {enabled: boolean; background: FillStyle; scale: {enabled: boolean; linestyle: LineStyle; fillstyle: FillStyle}; panning: {enabled: boolean; linestyle: LineStyle; fillstyle: FillStyle}} | any;
    /**
     * @param options options
     * @param options.enabled enabled flag
     * @param options.rangeedit range edit flag
     * @param options.background background fill style
     * @param options.scale scale options
     * @param options.scale.enabled enabled flag
     * @param options.scale.linestyle scale handle line style
     * @param options.scale.fillstyle scale handle fill style
     * @param options.panning panning options
     * @param options.panning.enabled enabled flag
     * @param options.panning.minimumsize minimum handle size in device pixels
     * @param options.panning.linestyle panning handle line style
     * @param options.panning.fillstyle panning handle fill style
     */
    setOptions(options?: object | { enabled?: boolean; rangeedit?: boolean; background?: FillStyle; scale?: object | { enabled?: boolean; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; } ; panning?: object | { enabled?: boolean; minimumsize?: number; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; } ; } ): this;
}
/**
 * Navigation events
 */
export enum Events {
    /**
     * This event occurs when the visible depth limits is changed. It can scroll, scale operations.
     */
    PositionChanged = 'positionChanged',
    /**
     * This events occurs when virtual depth model limit is changed. For example, if you call method setDepthLimits.
     */
    DepthRangeChanged = 'depthRangeChanged',
    /**
     * This events occurs when navigation starts
     */
    NavigationStart = 'navigationStart',
    /**
     * This events occurs when navigation ends
     */
    NavigationEnd = 'navigationEnd'
}
