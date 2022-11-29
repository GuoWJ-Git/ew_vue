import {ITool} from '../../plot/ITool';
import {CompositeNode} from '../../scene/CompositeNode';
import {Plot} from '../../plot/Plot';
import {EventArgs} from './EventArgs';
import {Node} from '../../scene/Node';
import {Point} from '../../util/Point';

/**
 * AbstractTool is a layer of abstraction between the HTML5 element events. Uses generic event mechanism for different browsers.
 * <br>
 * <br>
 * <h5>Events {@link @int/geotoolkit/controls/tools/AbstractTool.Events} </h5>
 * <table class="params">
 *     <thead>
 *          <tr>
 *              <th>Event</th><th>Arguments</th><th>Description</th>
 *          </tr>
 *      </thead>
 *      <tbody>
 *          <tr>
 *              <td>onStateChanged</td>
 *              <td>null</td>
 *              <td>This Event is fired when the Abstract Tool State (props: active) has been changed</td>
 *          </tr>
 *           <tr>
 *              <td>onEnabledStateChanged</td>
 *              <td>null</td>
 *              <td>This Event is fired when the Abstract Tool State (enable) has been changed</td>
 *          </tr>
 *           <tr>
 *              <td>onEnter</td>
 *              <td>{@link @int/geotoolkit/controls/tools/EventArgs.EventArgs} | null</td>
 *              <td>This Event is fired on entering the canvas</td>
 *          </tr>
 *           <tr>
 *              <td>onLeave</td>
 *              <td>{@link @int/geotoolkit/controls/tools/EventArgs.EventArgs} | null</td>
 *              <td>This Event is fired on leaving the canvas</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 * Below is a list of valid slot names ( this could change depending on the browser and its version. ) <br>
 * pointerdown <br>
 * pointermove <br>
 * pointerup <br>
 * MSPointerDown <br>
 * MSPointerMove <br>
 * MSPointerUp <br>
 * mousedown <br>
 * touchstart <br>
 * mousemove <br>
 * touchmove <br>
 * mouseup <br>
 * touchend <br>
 * @example
 * ```javascript
 * const slots = {
 *  'pointerdown': (event) => {
 *      // event is an instance of @int/geotoolkit/controls/tools/EventArgs
 *      ...
 *   }
 * };
 * ```
 */
export class AbstractTool implements ITool {
    /**
     * AbstractTool is a layer of abstraction between the HTML5 element events. Uses generic event mechanism for different browsers.
     * <br>
     * <br>
     * <h5>Events {@link @int/geotoolkit/controls/tools/AbstractTool.Events} </h5>
     * <table class="params">
     *     <thead>
     *          <tr>
     *              <th>Event</th><th>Arguments</th><th>Description</th>
     *          </tr>
     *      </thead>
     *      <tbody>
     *          <tr>
     *              <td>onStateChanged</td>
     *              <td>null</td>
     *              <td>This Event is fired when the Abstract Tool State (props: active) has been changed</td>
     *          </tr>
     *           <tr>
     *              <td>onEnabledStateChanged</td>
     *              <td>null</td>
     *              <td>This Event is fired when the Abstract Tool State (enable) has been changed</td>
     *          </tr>
     *           <tr>
     *              <td>onEnter</td>
     *              <td>{@link @int/geotoolkit/controls/tools/EventArgs.EventArgs} | null</td>
     *              <td>This Event is fired on entering the canvas</td>
     *          </tr>
     *           <tr>
     *              <td>onLeave</td>
     *              <td>{@link @int/geotoolkit/controls/tools/EventArgs.EventArgs} | null</td>
     *              <td>This Event is fired on leaving the canvas</td>
     *          </tr>
     *      <tbody>
     *  </table>
     *  <br>
     * Below is a list of valid slot names ( this could change depending on the browser and its version. ) <br>
     * pointerdown <br>
     * pointermove <br>
     * pointerup <br>
     * MSPointerDown <br>
     * MSPointerMove <br>
     * MSPointerUp <br>
     * mousedown <br>
     * touchstart <br>
     * mousemove <br>
     * touchmove <br>
     * mouseup <br>
     * touchend <br>
     * @param options type of system events like mousedown etc. The slot object allows to attach browser events (HTML Dom Events) to your callback function
     * @param options.slots type of system events
     * @param options.name name of the tool used like cross-hair etc
     * @param options.enabled enabled state
     * @param options.mouseRadius device radius for mouse events
     * @param options.touchRadius device radius for touch events
     * @param options.layer manipulator layer
     * @param name name of the tool used like cross-hair etc
     */
    constructor(options?: object | { slots?: any; name?: string; enabled?: boolean; mouseRadius?: number; touchRadius?: number; layer?: CompositeNode; } , name?: string);
    /**
     * Sets new slots.
     * @example
     * ```javascript
     * const slots = {
     *  'pointerdown': (event) => {
     *      // event is an instance of @int/geotoolkit/controls/tools/EventArgs
     *      ...
     *   }
     * };
     * tool.setSlots(slots);
     * ```
     * @param slots type of system events
     * @param merge set to true if you want to merge with existing slots
     */
    setSlots(slots?: any, merge?: boolean): this;
    /**
     * for internal use only
     * @param plot plot
     */
    protected attachToPlot(plot: Plot): this;
    /**
     * Sets device radius for mouse events
     * @param radius radius for mouse events
     */
    setMouseRadius(radius: number): this;
    /**
     * Returns current device radius for mouse events
     */
    getMouseRadius(): number;
    /**
     * Sets device radius for touch events
     * @param radius radius for touch events
     */
    setTouchRadius(radius: number): this;
    /**
     * Returns current device radius for touch events
     */
    getTouchRadius(): number;
    /**
     * Set exclusive tool for plot
     * @param plot plot
     * @param tool tool
     */
    static lock(plot: Plot, tool: AbstractTool): void;
    /**
     * Remove exclusive tool from plot
     * @param value value
     */
    static unlock(value: Plot | AbstractTool): void;
    /**
     * return exclusive tool associated with plot
     * @param plot plot
     */
    static getExclusiveTool(plot: Plot): AbstractTool | any;
    /**
     * Returns native event name
     * @param eventName W3C Pointer Events Recommendation name
     */
    static getNativeEventName(eventName: string): string[];
    /**
     * Sets slot enabled
     * @param eventName eventName
     * @param value value
     * @param target target
     */
    protected setSlotEnabled(eventName: string, value: boolean, target?: object): this;
    /**
     * set tool name
     * @param name the tool name
     */
    setName(name: string): this;
    /**
     * return manipulator layer
     */
    getManipulatorLayer(): CompositeNode | any;
    /**
     * listen to window mouse events in order to catch a mouse up action outside of the tool container DOM element.
     * useful for example when you pan and release click outside of DOM element.
     */
    captureMouseUp(): void;
    /**
     * Dispose tool.
     */
    dispose(): void;
    /**
     * return true if the event is a touch event and false otherwise.
     * @param eventArgs contains info of the event
     */
    isTouchEvent(eventArgs: EventArgs): boolean;
    /**
     * return position relative to the canvas
     * @param eventArgs parentElement the parent HTML element
     * @param externalPlot plot
     */
    pageToCanvas(eventArgs: EventArgs, externalPlot?: Plot): object;
    /**
     * converts device coordinates to inner coordinates of node
     * @param model the model
     * @param eventArgs arguments of the event.
     */
    pointToModel(model: Node | any, eventArgs: EventArgs): Point;
    /**
     * add event listener. The listener receives the message when the system event happens.
     * @param eventName event name or unique event identifier
     * @param listener the event listener
     */
    addListener(eventName: string | number, listener: Function): this;
    /**
     * remove event listener. The listener reveives the message when the system event happens.
     * @param eventName event name
     * @param listener the event listener, if null, remove all listeners for the event
     */
    removeListener(eventName: string, listener?: Function | Function[]): this;
    /**
     * This method is Protected. Fire an Event.
     * @param eventName event name
     * @param eventArgs contains info of the event
     */
    fireEvent(eventName: string, eventArgs: object | any): void;
    /**
     * set enable state
     * @remarks fires {@link @int/geotoolkit/controls/tools/AbstractTool~Events~onStateChanged}
     * @param enabled sets the enabled state
     */
    setEnabled(enabled: boolean): this;
    /**
     * returns enable state
     */
    isEnabled(): boolean;
    /**
     * switch enable state to opposite state
     */
    toggle(): this;
    /**
     * start
     * @param eventArgs event args
     */
    protected start(eventArgs?: EventArgs): this;
    /**
     * stop
     */
    protected stop(): this;
    /**
     * set active state
     * @remarks fires {@link @int/geotoolkit/controls/tools/AbstractTool~Events~onStateChanged}
     * @param active set active state
     */
    setActive(active: boolean): this;
    /**
     * return active state
     */
    isActive(): boolean;
    /**
     * @remarks fires {@link @int/geotoolkit/controls/tools/AbstractTool~Events~onStateChanged}
     */
    protected onActiveStateChanged(): void;
    /**
     * @remarks fires {@link @int/geotoolkit/controls/tools/AbstractTool~Events~onEnabledStateChanged}
     */
    protected onEnabledStateChanged(): void;
    /**
     * Gets parent tool
     */
    getParentTool(): AbstractTool;
    /**
     * Returns whether this tool has been disposed
     */
    isDisposed(): boolean;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.slots type of system events
     * @param properties.name name of the tool used like cross-hair etc
     * @param properties.enabled enabled state
     * @param properties.mouseRadius device radius for mouse events
     * @param properties.touchRadius device radius for touch events
     * @param properties.layer manipulator layer
     */
    setProperties(properties?: object | { slots?: any; name?: string; enabled?: boolean; mouseRadius?: number; touchRadius?: number; layer?: CompositeNode; } ): this;
    /**
     * Returns all the properties pertaining to this object
     */
    getProperties(): {name: string; mouseRadius: number; touchRadius: number; layer: CompositeNode} | any;
    /**
     * return tool name if any
     */
    getName(): string;
}
/**
 * AbstractTool Events
 */
export enum Events {
    /**
     * This Event is fired when the Abstract Tool State (props: active, enable) has been changed
     */
    onStateChanged = 'onStateChanged',
    /**
     * onEnabledStateChanged
     */
    onEnabledStateChanged = 'onEnabledStateChanged',
    /**
     * onEnter
     */
    onEnter = 'onEnter',
    /**
     * onLeave
     */
    onLeave = 'onLeave',
    /**
     * onRebuild
     */
    onRebuild = 'onRebuild',
    /**
     * onListenerAdded
     */
    onListenerAdded = 'onListenerAdded',
    /**
     * onListenerRemoved
     */
    onListenerRemoved = 'onListenerRemoved'
}
