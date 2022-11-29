import {EventDispatcher} from '../../../geotoolkit/util/EventDispatcher';
import {Plot} from '../../Plot';
import {AbstractTool} from '../AbstractTool';

/**
 * A devicesupport class is a class that is able to listen to the specific events fired by the browser.<br>
 * For example MSPointers or Touch events.<br>
 * <br>
 * When receiving an event, it will trigger the correct generic function of the given 'target'.<br>
 * Therefore it will convert 'browser-specific' events to a 'more generic' behavior.<br>
 * <br>
 * The event passed down to the target will be the native event.<br>
 * However, implementation of this class will also introduce 'plotX', 'plotY' attributes in the event.<br>
 * They corresponds to the cursor/fingers/pen location converted to plot-relative coordinates.<br>
 * <br>
 * In case of multiple cursor/fingers/pen location, the array attributes 'plotXs', 'plotYs' will also be populated accordingly.<br>
 * <br>
 * Builtin implementations include:<br>
 * <ul>
 *     <li>Mouse: Supports {@link http://www.w3schools.com/jsref/dom_obj_event.asp w3c-mouse-event} based devices</li>
 *     <li>Pointer: Supports system using the {@link https://www.w3.org/TR/pointerevents/ w3c-pointers} architecture.</li>
 *     <li>Touch: Supports system using the {@link https://www.w3.org/TR/touch-events/ w3c-touch} architecture.</li>
 * </ul>
 * <br>
 */
export class AbstractDeviceSupport extends EventDispatcher {
    /**
     * A devicesupport class is a class that is able to listen to the specific events fired by the browser.<br>
     * For example MSPointers or Touch events.<br>
     * <br>
     * When receiving an event, it will trigger the correct generic function of the given 'target'.<br>
     * Therefore it will convert 'browser-specific' events to a 'more generic' behavior.<br>
     * <br>
     * The event passed down to the target will be the native event.<br>
     * However, implementation of this class will also introduce 'plotX', 'plotY' attributes in the event.<br>
     * They corresponds to the cursor/fingers/pen location converted to plot-relative coordinates.<br>
     * <br>
     * In case of multiple cursor/fingers/pen location, the array attributes 'plotXs', 'plotYs' will also be populated accordingly.<br>
     * <br>
     * Builtin implementations include:<br>
     * <ul>
     *     <li>Mouse: Supports {@link http://www.w3schools.com/jsref/dom_obj_event.asp w3c-mouse-event} based devices</li>
     *     <li>Pointer: Supports system using the {@link https://www.w3.org/TR/pointerevents/ w3c-pointers} architecture.</li>
     *     <li>Touch: Supports system using the {@link https://www.w3.org/TR/touch-events/ w3c-touch} architecture.</li>
     * </ul>
     * <br>
     * @param options The options
     * @param options.domelement The div element in which the canvas will be created and added.
     * @param options.plot The plot using this devicesupport
     * @param options.target The tool to notify when an event occurs
     */
    constructor(options: object | { domelement: HTMLElement; plot: Plot; target: AbstractTool; } );
    /**
     * Function called to attach the device-support class to an actual plot.<br>
     * Implementation should be reentrant and attach any native listener they need.<br>
     * @param plot The plot to attach to
     * @param domelement The dom element to attach to
     * @param target The tool to notify on native events
     */
    setup(plot: Plot, domelement: HTMLElement, target: AbstractTool): void;
    /**
     * Function called to check if this class should be used for the current context.<br>
     * <br>
     * This will be called as part of the lookup mechanism of the {@link @int/geotoolkit3d/tool/devicesupport/DeviceSupportRegistry.DeviceSupportRegistry}.<br>
     * This static function should be implemented in each subclass and return true if and only if it should be used in the current
     * context.<br>
     * <br>
     * Typical implementation will check for the presence of some known attributes in the window or user-agent to determine the nature of
     * the current platform/browser.
     */
    static isSupported(): boolean;
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.domelement The div element in which the canvas will be created and added.
     * @param options.plot The plot using this devicesupport
     * @param options.target The tool to notify when an event occurs
     */
    setOptions(options: object | { domelement?: HTMLElement; plot?: Plot; target?: AbstractTool; } ): this;
    /**
     * Get abstract device support options
     * (see {@link @int/geotoolkit3d/tool/devicesupport/AbstractDeviceSupport.AbstractDeviceSupport#setOptions} for more info)
     */
    getOptions(): object | any;
}
/**
 * Event types
 */
export enum Events {
    /**
     * onContext
     */
    onContext = 'onContext',
    /**
     * onMouseDown
     */
    onMouseDown = 'onMouseDown',
    /**
     * onMouseMove
     */
    onMouseMove = 'onMouseMove',
    /**
     * onMouseUp
     */
    onMouseUp = 'onMouseUp',
    /**
     * onMouseWheel
     */
    onMouseWheel = 'onMouseWheel',
    /**
     * onTouchStart
     */
    onTouchStart = 'onTouchStart',
    /**
     * onTouchEnd
     */
    onTouchEnd = 'onTouchEnd',
    /**
     * onTouchMove
     */
    onTouchMove = 'onTouchMove',
    /**
     * onDoubleClick
     */
    onDoubleClick = 'onDoubleClick',
    /**
     * onKeyDown
     */
    onKeyDown = 'onKeyDown',
    /**
     * onKeyUp
     */
    onKeyUp = 'onKeyUp',
    /**
     * onPointerStart
     */
    onPointerStart = 'onPointerStart',
    /**
     * onPointerMove
     */
    onPointerMove = 'onPointerMove',
    /**
     * onPointerEnd
     */
    onPointerEnd = 'onPointerEnd'
}
