import {AbstractLogVisualEditingTool} from './AbstractLogVisualEditingTool';
import {Group} from '../../../scene/Group';
import {Layer} from '../../../scene/Layer';
import {LogDataSample} from '../../data/LogDataSample';

/**
 * <p>
 * Implements a tool capable of editing log curve sample points.
 * </p>
 * <p>
 * When given a curve, this tool will create a set of manipulatable handles corresponding with each data sample point.
 * If the curve is step interpolated, then the tool will build a set of lines covering the entire curve.
 * Curve editing tool does not edit the actual curve which it is corresponded with, instead, each manipulation
 * results in an event describing the action and changes. The tool can work in three modes: Edit, Insert, and Delete.
 * </p>
 * <h4>
 * Edit Mode:
 * </h4>
 * <p>
 * Provides a set of handles which become activated when clicked, and deactivated when released, and dragged with the mouse when the mouse pointer is moved.
 * </p>
 * <ul>
 * <li>When a mouse down occurs, "dragstart" event is fired with parameters:
 * <ul>
 * <li>depth: The depth (y) in curve model which belongs to the point where mouse down occurred</li>
 * <li>value: The value (x) in curve model which belongs to the point where mouse down occurred</li>
 * </ul>
 * </li>
 * <li>When a mouse up occurs, "dragend" event is fired with parameters:
 * <ul>
 * <li>depth: The depth (y) in curve model which belongs to the point where mouse up occurred </li>
 * <li>value: The value (x) in curve model which belongs to the point where mouse up occurred </li>
 * <li>index: The index of manipulated data point in the original data set </li>
 * </ul>
 * </li>
 * <li>If a mouse move occurs, "dragging" event is fired with parameters:
 * <ul>
 * <li>oldDepth: the depth (y) of the handle before the dragging occurred</li>
 * <li>oldValue: the value (x) of the handle before the dragging occurred</li>
 * <li>depth: the new depth (y) of the handle, resultant from the dragging action</li>
 * <li>value: the new value (x) of the handle, resultant from the dragging action</li>
 * <li>index: the index of the data sample (in the array of all data samples of the curve corresponding to this tool), which is being manipulated</li>
 * </ul>
 * </li>
 * </ul>
 * <h4>Insert Mode:</h4>
 * <p>
 * Fires an "insert" event when a mouse down on the track occurs, also fires "move" event when the mouse pointer moves across the curve.
 * </p>
 * <ul>
 * <li>If a mouse move occurs, "move" event is fired with following arguments:
 * <ul>
 * <li>depth: The depth (y) of the mouse pointer in the curve model</li>
 * <li>value: The value (x) of the mouse pointer in the curve model</li>
 * <li>handleDepth: The depth of the handle which moves along the curve as the projection of the mouse pointer position</li>
 * <li>handleValue: The value of the handle which moves along the curve as the projection of the mouse pointer position</li>
 * </ul>
 * </li>
 * <li>When a mouse down occurs, "insert" event is fired with following arguments:
 * <ul>
 * <li>depth: The depth (y) of the mouse pointer in the curve model</li>
 * <li>value: The value (x) of the mouse pointer in the curve model</li>
 * <li>handleDepth: The depth of the handle which moves along the curve as the projection of the mouse pointer position</li>
 * <li>handleValue: The value of the handle which moves along the curve as the projection of the mouse pointer position</li>
 * </ul>
 * </li>
 * </ul>
 * <h4>Delete Mode:</h4>
 * <p>
 * Fires a "delete" event with handle info every time a mouse down occurs on a handle.
 * </p>
 * <ul>
 * <li>When a mouse down occurs on top of a handle, a "delete" event is fired with parameters:
 * <ul>
 * <li>depth: The depth of the data point corresponding to the handle</li>
 * <li>value: The value of the data point corresponding to the handle</li>
 * <li>index: The index of the data point in the original data set</li>
 * </ul>
 * </li>
 * </ul>
 * </br>
 * <p>
 * <strong>NOTE</strong>: If the curve is interpolated with StartStep, MiddleStep, or EndStep, the tool will draw lines between each
 * point, </br>
 * and the events will be fired with the information about the point which the tool edits. However, in case of Middle
 * Step, the point divides some lines in two, and some lines do not have any original data set points to manipulate: </br>
 * p1----------p2 (p1 and p2 are not registered in curve data set) </br>
 * | </br>
 * | </br>
 * p3 (this is the only point which actually existed in the data set) </br>
 * | </br>
 * | </br>
 * p5----------p4 (p4 and p4 are not registered in curve data set) </br>
 * </p>
 */
export class CurveEditor extends AbstractLogVisualEditingTool {
    /**
     * <p>
     * Implements a tool capable of editing log curve sample points.
     * </p>
     * <p>
     * When given a curve, this tool will create a set of manipulatable handles corresponding with each data sample point.
     * If the curve is step interpolated, then the tool will build a set of lines covering the entire curve.
     * Curve editing tool does not edit the actual curve which it is corresponded with, instead, each manipulation
     * results in an event describing the action and changes. The tool can work in three modes: Edit, Insert, and Delete.
     * </p>
     * <h4>
     * Edit Mode:
     * </h4>
     * <p>
     * Provides a set of handles which become activated when clicked, and deactivated when released, and dragged with the mouse when the mouse pointer is moved.
     * </p>
     * <ul>
     * <li>When a mouse down occurs, "dragstart" event is fired with parameters:
     * <ul>
     * <li>depth: The depth (y) in curve model which belongs to the point where mouse down occurred</li>
     * <li>value: The value (x) in curve model which belongs to the point where mouse down occurred</li>
     * </ul>
     * </li>
     * <li>When a mouse up occurs, "dragend" event is fired with parameters:
     * <ul>
     * <li>depth: The depth (y) in curve model which belongs to the point where mouse up occurred </li>
     * <li>value: The value (x) in curve model which belongs to the point where mouse up occurred </li>
     * <li>index: The index of manipulated data point in the original data set </li>
     * </ul>
     * </li>
     * <li>If a mouse move occurs, "dragging" event is fired with parameters:
     * <ul>
     * <li>oldDepth: the depth (y) of the handle before the dragging occurred</li>
     * <li>oldValue: the value (x) of the handle before the dragging occurred</li>
     * <li>depth: the new depth (y) of the handle, resultant from the dragging action</li>
     * <li>value: the new value (x) of the handle, resultant from the dragging action</li>
     * <li>index: the index of the data sample (in the array of all data samples of the curve corresponding to this tool), which is being manipulated</li>
     * </ul>
     * </li>
     * </ul>
     * <h4>Insert Mode:</h4>
     * <p>
     * Fires an "insert" event when a mouse down on the track occurs, also fires "move" event when the mouse pointer moves across the curve.
     * </p>
     * <ul>
     * <li>If a mouse move occurs, "move" event is fired with following arguments:
     * <ul>
     * <li>depth: The depth (y) of the mouse pointer in the curve model</li>
     * <li>value: The value (x) of the mouse pointer in the curve model</li>
     * <li>handleDepth: The depth of the handle which moves along the curve as the projection of the mouse pointer position</li>
     * <li>handleValue: The value of the handle which moves along the curve as the projection of the mouse pointer position</li>
     * </ul>
     * </li>
     * <li>When a mouse down occurs, "insert" event is fired with following arguments:
     * <ul>
     * <li>depth: The depth (y) of the mouse pointer in the curve model</li>
     * <li>value: The value (x) of the mouse pointer in the curve model</li>
     * <li>handleDepth: The depth of the handle which moves along the curve as the projection of the mouse pointer position</li>
     * <li>handleValue: The value of the handle which moves along the curve as the projection of the mouse pointer position</li>
     * </ul>
     * </li>
     * </ul>
     * <h4>Delete Mode:</h4>
     * <p>
     * Fires a "delete" event with handle info every time a mouse down occurs on a handle.
     * </p>
     * <ul>
     * <li>When a mouse down occurs on top of a handle, a "delete" event is fired with parameters:
     * <ul>
     * <li>depth: The depth of the data point corresponding to the handle</li>
     * <li>value: The value of the data point corresponding to the handle</li>
     * <li>index: The index of the data point in the original data set</li>
     * </ul>
     * </li>
     * </ul>
     * </br>
     * <p>
     * <strong>NOTE</strong>: If the curve is interpolated with StartStep, MiddleStep, or EndStep, the tool will draw lines between each
     * point, </br>
     * and the events will be fired with the information about the point which the tool edits. However, in case of Middle
     * Step, the point divides some lines in two, and some lines do not have any original data set points to manipulate: </br>
     * p1----------p2 (p1 and p2 are not registered in curve data set) </br>
     * | </br>
     * | </br>
     * p3 (this is the only point which actually existed in the data set) </br>
     * | </br>
     * | </br>
     * p5----------p4 (p4 and p4 are not registered in curve data set) </br>
     * </p>
     * @param options layer to which handles will be added or tool options. Cache disabled
     * @param options.mode mode in which this tool will work
     * @param options.cachedlayer layer to which handles will be added. Cache enabled
     * @param options.handlestype handles display type
     * @param cachedManipulatorLayer layer to which handles will be added. Cache enabled
     */
    constructor(options?: Group | Layer | object | { mode?: Modes; cachedlayer?: Group | Layer; handlestype?: HandlesType; } , cachedManipulatorLayer?: Group | Layer);
    /**
     * Creates the handles for every point that curve has visible on the screen if in linear interpolation mode.
     * In step interpolation creates a line handle between each visible point
     */
    protected createHandles(): this;
    /**
     * Checks if a sample or a value falls within the visible limits of the parent track.
     * @param sample1 The sample or value to test.
     * If a line segment is tested, this is the first point of the tested line
     * @param sample2 When a line segment is tested, this is the second
     * point constructing the line
     * @param activeHandle True if the test is done for the active handle. Used in cases of handle manipulation.
     */
    checkHandleCollision(sample1: number | LogDataSample, sample2?: number | LogDataSample, activeHandle?: boolean): boolean;
    /**
     * Updates the state of the tool, recalculated and redraws the handles and curve limits (for spilling handles)
     */
    update(): void;
    /**
     * Clears all the handles from the adapter and manipulator layer
     */
    removeHandles(): this;
    /**
     * Hides all the handles. Has an option to hide everything except the active handle
     * @param skipActive If true, active handle will not be hidden
     */
    hideHandles(skipActive: boolean): this;
    /**
     * Shows all existing handles on the screen.
     */
    showHandles(): this;
    /**
     * Retrieves the type of editing that this adapter is doing
     */
    getMode(): string | Modes;
    /**
     * Gets the value of flag defining if the active handles can only move inside the track
     */
    getHandleInsideTrack(): boolean;
    /**
     * Gets the value of the flag defining if the handles which overflow the track boundaries
     * should be hidden
     */
    getHideSpillingHandles(): boolean;
    /**
     * Gets a flag defining if the data points can change their depths
     */
    getVerticalEditAllowed(): boolean;
    /**
     * Returns a flag which defines if inactive handles have to be hidden when dragging.
     */
    getHideInactiveHandles(): boolean;
    /**
     * Sets a flag which defines if inactive handles have to be hidden when a move with an existing active handle
     * occurs. Once you grab a handle and start dragging it around, every other handle will be hidden to aid a better
     * view of the curve you are editing.
     * @param hide True to hide inactive handles on dragging
     */
    setHideInactiveHandles(hide: boolean): this;
    /**
     * Sets a flag which defines if the active handle can only move within the track area
     * @param inside True to restrict the position of active handle in the track
     */
    setHandleInsideTrack(inside: boolean): this;
    /**
     * Sets what kind of edition this adapter has to do for the curve
     * @param mode The new mode in which this tool will work
     */
    setMode(mode: string | Modes): this;
    /**
     * Sets the value of the flag defining if the handles which overflow the track boundaries
     * should be hidden
     * @param hide If true, overflowing handles will not display
     */
    setHideSpillingHandles(hide: boolean): this;
    /**
     * Sets a flag defining if the data points can change their depths
     * @param allow True to allow depth change
     */
    setVerticalEditAllowed(allow: boolean): this;
    /**
     * Sets handles display type
     * @param handlesType handles display type
     */
    setHandlesType(handlesType: HandlesType): this;
    /**
     * Gets handles display type
     */
    getHandlesType(): HandlesType;
}
/**
 * Defines the editing mode supported by this adapter
 */
export enum Modes {
    /**
     * The mode when an existing data point can be edited to change value or depth
     */
    Edit = 'edit',
    /**
     * The mode when an existing data point can be deleted
     */
    Delete = 'delete',
    /**
     * The mode when an new data point can be added
     */
    Insert = 'insert'
}
/**
 * Defines handles display type
 */
export enum HandlesType {
    /**
     * Handles are always anchored regardless of curve interpolation
     */
    Anchored = 'Anchored',
    /**
     * Handles are lines if curve is non-linear and handles are anchored if curve is linear
     */
    Default = 'Default'
}
