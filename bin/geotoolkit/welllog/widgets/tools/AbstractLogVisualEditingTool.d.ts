import {AbstractTool} from '../../../controls/tools/AbstractTool';
import {CompositeNode} from '../../../scene/CompositeNode';
import {EventArgs} from '../../../controls/tools/EventArgs';
import {Point} from '../../../util/Point';
import {Node} from '../../../scene/Node';
import {Group} from '../../../scene/Group';
import {Layer} from '../../../scene/Layer';
import {LogAbstractVisual} from '../../LogAbstractVisual';
import {GhostBearingHandle} from '../../../controls/editing/GhostBearingHandle';
import {LineStyle} from '../../../attributes/LineStyle';
import {FillStyle} from '../../../attributes/FillStyle';
import {Plot} from '../../../plot/Plot';

/**
 * Implements an abstract class for tools which manipulate Log Visuals
 */
export class AbstractLogVisualEditingTool extends AbstractTool {
    /**
     * Implements an abstract class for tools which manipulate Log Visuals
     * @param options manipulator layer or tool options
     * @param name name of the tool used like cross-hair etc
     */
    constructor(options?: CompositeNode | object, name?: string);
    /**
     */
    update(): void;
    /**
     * Handles the event caused by user pressing the mouse button
     * @param eventArgs Native event arguments received from EventDispatcher
     */
    onMouseDown(eventArgs: EventArgs): void;
    /**
     * Handles the event caused by user moving the mouse
     * @param eventArgs Native event arguments received from EventDispatcher
     */
    onMouseMove(eventArgs: EventArgs): void;
    /**
     * Handles the event caused by user releasing the mouse button
     * @param eventArgs Native event arguments received from EventDispatcher
     */
    onMouseUp(eventArgs: EventArgs): void;
    /**
     * Returns a point in model coordinates, edits one of the util points
     * @param args Event arguments
     */
    protected getDeviceXY(args: any): Point;
    /**
     * Makes a selection according to current position of the pointer
     * @param x X coordinate of the pointer
     * @param y Y coordinate of the pointer
     */
    protected makeSelection(x: number, y: number): Node[];
    /**
     * Iterates through handles and sets the provided visibility.
     * If the visibility is to hide, hides the ghosts as well
     * @param visible Visibility flag for handles
     */
    protected setHandlesVisible(visible: boolean): this;
    /**
     * Returns the last registered position of the mouse in device space
     */
    getPosition(): Point;
    /**
     * Gets the manipulator layer with contains handles
     */
    getCachedManipulatorLayer(): Group | Layer;
    /**
     * Returns the shape which this tool is manipulating
     */
    getShape(): LogAbstractVisual | any;
    /**
     * Returns currently active handle,if exists, otherwise null
     */
    getActiveHandle(): any | GhostBearingHandle;
    /**
     * Returns the flag defining if a ghost should be moved instead of the actual object
     */
    getShowGhost(): boolean;
    /**
     * Gets a flag defining if the ghost should be reset after it has been dropped
     */
    getHideGhostOnDrop(): boolean;
    /**
     * Returns registered styles for active, inactive, and ghost states of all handles
     */
    getHandleStyles(): {ghostlinestyle: LineStyle; ghostfillstyle: FillStyle; activefillstyle: FillStyle; inactivefillstyle: FillStyle; activelinestyle: LineStyle; inactivelinestyle: LineStyle} | object;
    /**
     * Gets the shape painter with which is used to render handles. Format is the same as in geotoolkit.scene.shapes.SymbolShape
     * Redraws all handles
     */
    getHandlePainter(): Function;
    /**
     * Sets the last registered position of the mouse in device space
     * @param x The new X position
     * @param y The new Y position
     */
    setPosition(x: number, y: number): this;
    /**
     * Sets the handle currently active
     * @param handle The handle to be active
     */
    setActiveHandle(handle: GhostBearingHandle): this;
    /**
     * Sets the shape which this tool has to manipulate and calculate its handles from.
     * @param shape The new shape to set for manipulation
     */
    setShape(shape: Node | any): this;
    /**
     * Sets the flag defining if a ghost should be moved instead of the actual handle
     * @param showGhost Show ghost flag
     */
    setShowGhost(showGhost: boolean): this;
    /**
     * Gets a flag defining if the ghost should be reset after it has been dropped
     * @param hide True to hide ghosts when dropped
     */
    setHideGhostOnDrop(hide: boolean): this;
    /**
     * Sets styles for active, inactive, and ghost states of all handles, and redraws each handle (this will lose edited handles position)
     * @param styles JSON containing stylings for different types of handle states
     * @param styles.ghostlinestyle Line Style of the handle when it is in ghost state
     * @param styles.ghostfillstyle Fill Style of the handle when it is in ghost state
     * @param styles.activefillstyle Fill Style of the handle when it is selected and active
     * @param styles.inactivefillstyle Fill Style of the handle when it is selected and active
     * @param styles.activelinestyle Line Style of the handle when when it is inactive (most of the time)
     * @param styles.inactivelinestyle Line Style of the handle when when it is inactive (most of the time)
     */
    setHandleStyles(styles: object | { ghostlinestyle?: LineStyle | object | string; ghostfillstyle?: FillStyle | object | string; activefillstyle?: FillStyle | object | string; inactivefillstyle?: FillStyle | object | string; activelinestyle?: LineStyle | object | string; inactivelinestyle?: LineStyle | object | string; } ): this;
    /**
     * Sets the shape painter with which the handles will be drawn. Format is the same as in
     * geotoolkit.scene.shapes.SymbolShape
     * Redraws all handles
     * @param painter The painter which will be used to draw the handles for linearly interpolated curves
     */
    setHandlePainter(painter: Function): this;
    /**
     * Sets the pixel side of the handles to which a size is applicable (anchored handles)
     * @param size The size of the handles in device coordinates (pixels)
     */
    setHandleSize(size: number): this;
    /**
     * Get the size of the handles
     */
    getHandleSize(): number;
    /**
     * for internal use only
     * @param plot Plot to which this tool should be attached.
     */
    protected attachToPlot(plot: Plot): this;
    /**
     * Called when the tool is enabled or disabled
     */
    protected onEnabledStateChanged(): void;
}
