import {EventDispatcher} from '../../geotoolkit/util/EventDispatcher';
import {Plot} from '../Plot';
import {EventArgs} from '../../geotoolkit/controls/tools/EventArgs';
import {AbstractDeviceSupport} from './devicesupport/AbstractDeviceSupport';

/**
 * The base class for tools in the 3D Plot.<br>
 * <br>
 * This implementation uses DeviceSupportRegistry mechanism to retrieve a bridge-object that will deal with hardware/browser specific input
 * devices.<br> The retrieved DeviceSupport object will listen to native events and call the corresponding generic functions on this
 * tool.<br>
 * <br>
 * Inheriting classes are responsible to implement those generic function.<br>
 * <br>
 * One may consider inheriting from {@link @int/geotoolkit3d/tool/AbstractGestureTool.AbstractGestureTool} for an even more generic/crossplatform approach.<br>
 */
export class AbstractTool extends EventDispatcher {
    /**
     * The base class for tools in the 3D Plot.<br>
     * <br>
     * This implementation uses DeviceSupportRegistry mechanism to retrieve a bridge-object that will deal with hardware/browser specific input
     * devices.<br> The retrieved DeviceSupport object will listen to native events and call the corresponding generic functions on this
     * tool.<br>
     * <br>
     * Inheriting classes are responsible to implement those generic function.<br>
     * <br>
     * One may consider inheriting from {@link @int/geotoolkit3d/tool/AbstractGestureTool.AbstractGestureTool} for an even more generic/crossplatform approach.<br>
     * @param options The options
     * @param options.domelement The div element containing the canvas.
     * @param options.plot The plot
     * @param options.name The tool name
     */
    constructor(options: object | { domelement?: HTMLElement; plot?: Plot; name?: string; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.name The tool name
     * @param options.plot The plot
     * @param options.domelement The div element containing the canvas.
     */
    setOptions(options: object | { name?: string; plot?: Plot; domelement?: HTMLElement; }  | any): this;
    /**
     * Get abstract tool options
     * (see {@link @int/geotoolkit3d/tool/AbstractTool.AbstractTool#setOptions} for more info)
     */
    getOptions(): object | any;
    /**
     * return true if the event is a touch event and false otherwise.
     * @param eventArgs contains info of the event
     */
    isTouchEvent(eventArgs: EventArgs): boolean;
    /**
     * This function allows tools to bind their events to the device support
     * @param deviceSupport the type of device we are attaching to
     */
    setup(deviceSupport: AbstractDeviceSupport): this;
    /**
     * Returns the tool name.
     */
    getName(): string;
    /**
     * Called when a 'context' event has occurred
     * @param event the native event with plot coordinates added
     */
    onContext(event: object): void;
    /**
     * Called when a 'mousedown' event has occurred
     * @param event the native event with plot coordinates added
     */
    onMouseDown(event: object): void;
    /**
     * Called when a 'mousemove' event has occurred
     * @param event the native event with plot coordinates added
     */
    onMouseMove(event: object): void;
    /**
     * Called when a 'mouseup' event has occurred
     * @param event the native event with plot coordinates added
     */
    onMouseUp(event: object): void;
    /**
     * Called when a 'mouseout' event has occurred
     * @param event the native event with plot coordinates added
     */
    onMouseOut(event: object): void;
    /**
     * Called when a 'mousewheel' event has occurred
     * @param event the native event with plot coordinates added
     */
    onMouseWheel(event: object): void;
    /**
     * Called when a 'touchstart' event has occurred
     * @param event the native event with plot coordinates added
     */
    onTouchStart(event: object): void;
    /**
     * Called when a 'touchend' event has occurred
     * @param event the native event with plot coordinates added
     */
    onTouchEnd(event: object): void;
    /**
     * Called when a 'touchmove' event has occurred
     * @param event the native event with plot coordinates added
     */
    onTouchMove(event: object): void;
    /**
     * Called when a 'doubleclick' event has occurred
     * @param event the native event with plot coordinates added
     */
    onDoubleClick(event: object): void;
    /**
     * Called when a 'keydown' event has occurred
     * @param event the native event with plot coordinates added
     */
    onKeyDown(event: object): void;
    /**
     * Called when a 'keyup' event has occurred
     * @param event the native event with plot coordinates added
     */
    onKeyUp(event: object): void;
    /**
     * Called when a 'onVisibilityChanged' event has occurred
     * @param event the native event with plot coordinates added
     */
    onVisibilityChanged(event: object): void;
    /**
     * Disposes the tool
     */
    dispose(): void;
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
    onPointerEnd = 'onPointerEnd',
    /**
     * onVisibilityChanged
     */
    onVisibilityChanged = 'onVisibilityChanged'
}
