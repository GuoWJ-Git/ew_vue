import {Group} from '../../../scene/Group';
import {FillStyle} from '../../../attributes/FillStyle';
import {EventArgs} from '../EventArgs';
import {AbstractTool} from '../AbstractTool';
import {Rect} from '../../../util/Rect';

/**
 * AbstractScroll class is the parent class for toolkit builtin scrollbar shapes. It includes the logic to scroll using an internal {@link @int/geotoolkit/controls/tools/AbstractTool.AbstractTool}
 * <br>
 * <br>
 * <h5>Events {@link @int/geotoolkit/controls/tools/scroll/AbstractScroll.AbstractScroll}</h5>
 * <table class="params">
 *     <thead>
 *          <tr>
 *              <th>Event</th><th>Arguments</th><th>Description</th>
 *          </tr>
 *      </thead>
 *      <tbody>
 *          <tr>
 *              <td>onActivate</td>
 *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs.ScrollEventArgs}</td>
 *              <td>scrollbar activated</td>
 *          </tr>
 *          <tr>
 *              <td>onScrollStart</td>
 *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs.ScrollEventArgs}</td>
 *              <td>on scroll start</td>
 *          </tr>
 *          <tr>
 *              <td>onScaleStart</td>
 *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs.ScrollEventArgs}</td>
 *              <td>on scale start</td>
 *          </tr>
 *          <tr>
 *              <td>onScroll</td>
 *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs.ScrollEventArgs}</td>
 *              <td>on scroll</td>
 *          </tr>
 *          <tr>
 *              <td>onScale</td>
 *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs.ScrollEventArgs}</td>
 *              <td>on scale</td>
 *          </tr>
 *          <tr>
 *              <td>onScrollEnd</td>
 *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs.ScrollEventArgs}</td>
 *              <td>on scroll end</td>
 *          </tr>
 *          <tr>
 *              <td>onScaleEnd</td>
 *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs.ScrollEventArgs}</td>
 *              <td>on scale end</td>
 *          </tr>
 *          <tr>
 *              <td>onRangeChanged</td>
 *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs.ScrollEventArgs}</td>
 *              <td>on visible range changed</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 */
export class AbstractScroll extends Group {
    /**
     * AbstractScroll class is the parent class for toolkit builtin scrollbar shapes. It includes the logic to scroll using an internal {@link @int/geotoolkit/controls/tools/AbstractTool.AbstractTool}
     * <br>
     * <br>
     * <h5>Events {@link @int/geotoolkit/controls/tools/scroll/AbstractScroll.AbstractScroll}</h5>
     * <table class="params">
     *     <thead>
     *          <tr>
     *              <th>Event</th><th>Arguments</th><th>Description</th>
     *          </tr>
     *      </thead>
     *      <tbody>
     *          <tr>
     *              <td>onActivate</td>
     *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs.ScrollEventArgs}</td>
     *              <td>scrollbar activated</td>
     *          </tr>
     *          <tr>
     *              <td>onScrollStart</td>
     *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs.ScrollEventArgs}</td>
     *              <td>on scroll start</td>
     *          </tr>
     *          <tr>
     *              <td>onScaleStart</td>
     *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs.ScrollEventArgs}</td>
     *              <td>on scale start</td>
     *          </tr>
     *          <tr>
     *              <td>onScroll</td>
     *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs.ScrollEventArgs}</td>
     *              <td>on scroll</td>
     *          </tr>
     *          <tr>
     *              <td>onScale</td>
     *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs.ScrollEventArgs}</td>
     *              <td>on scale</td>
     *          </tr>
     *          <tr>
     *              <td>onScrollEnd</td>
     *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs.ScrollEventArgs}</td>
     *              <td>on scroll end</td>
     *          </tr>
     *          <tr>
     *              <td>onScaleEnd</td>
     *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs.ScrollEventArgs}</td>
     *              <td>on scale end</td>
     *          </tr>
     *          <tr>
     *              <td>onRangeChanged</td>
     *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs.ScrollEventArgs}</td>
     *              <td>on visible range changed</td>
     *          </tr>
     *      <tbody>
     *  </table>
     *  <br>
     * @param options options
     * @param options.name scroll bar name
     * @param options.backgroundfillstyle background fill style
     * @param options.floating flag to set floating mode
     * @param options.transparency alpha
     * @param options.size desired size
     */
    constructor(options?: object | { name?: string; backgroundfillstyle?: FillStyle | string | object; floating?: boolean; transparency?: number; size?: number; } );
    /**
     * onMouseDown
     * @param eventArgs information about event arguments
     */
    protected onMouseDown(eventArgs: EventArgs): void;
    /**
     * onMouseMove
     * @param eventArgs information about event arguments
     */
    protected onMouseMove(eventArgs: EventArgs): void;
    /**
     * onMouseWheel
     * @param eventArgs information about event arguments
     */
    protected onMouseWheel(eventArgs: EventArgs): void;
    /**
     * onMouseUp
     * @param eventArgs information about event arguments
     */
    protected onMouseUp(eventArgs: EventArgs): void;
    /**
     * Doubleclick handler
     * Detects if double click happens on scrollbar and prevents propagation
     * @param eventArgs event arguments
     */
    protected onDoubleClick(eventArgs: EventArgs): void;
    /**
     * onWindowMouseMove
     * @param eventArgs information about event arguments
     */
    protected onWindowMouseMove(eventArgs: EventArgs): void;
    /**
     * onWindowMouseUp
     * @param evt onWindowMouseUp event
     */
    protected onWindowMouseUp(evt: EventArgs): void;
    /**
     * Get the tool
     */
    getTool(): AbstractTool;
    /**
     * Add Listener
     * @param event scroll event
     * @param callback function to be called
     */
    addListener(event: string, callback: Function): this;
    /**
     * Sets floating mode
     * @param floatingMode flag to set floating mode
     */
    setFloatingMode(floatingMode: boolean): this;
    /**
     * Returns floating mode
     */
    getFloatingMode(): boolean;
    /**
     * @param modelLimits model limits
     * @param visibleLimits visible model limits
     * @param flipped orientation flipped or not
     * @param enableAnimation show animation or not
     */
    setModelLimits(modelLimits: Rect, visibleLimits?: Rect, flipped?: boolean, enableAnimation?: boolean): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {name: string; backgroundfillstyle: FillStyle; floating: boolean; transparency: number; size: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing properties
     * @param properties.name scroll bar name
     * @param properties.backgroundfillstyle background fill style
     * @param properties.floating flag to set floating mode
     * @param properties.transparency alpha
     * @param properties.size desired size
     */
    setProperties(properties: object | { name?: string; backgroundfillstyle?: FillStyle | string | object; floating?: boolean; transparency?: number; size?: number; } ): this;
    /**
     * Set scrollbar options
     * @param options specific to the scrollbar type
     */
    setOptions(options: object): void;
    /**
     * Get scrollbar options
     */
    getOptions(): void;
    /**
     * Returns optimal size for scroll bar
     */
    getDesiredSize(): number;
}
/**
 * enum of AbstractScroll Events
 */
export enum Events {
    /**
     * onActivate
     */
    onActivate = 'onActivate',
    /**
     * onScrollStart
     */
    onScrollStart = 'onScrollStart',
    /**
     * onScaleStart
     */
    onScaleStart = 'onScaleStart',
    /**
     * onScroll
     */
    onScroll = 'onScroll',
    /**
     * onScale
     */
    onScale = 'onScale',
    /**
     * onScrollEnd
     */
    onScrollEnd = 'onScrollEnd',
    /**
     * onScaleEnd
     */
    onScaleEnd = 'onScaleEnd',
    /**
     * onRangeChanged
     */
    onRangeChanged = 'onRangeChanged'
}
