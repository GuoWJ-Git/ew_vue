import {ShapeAdapter} from './ShapeAdapter';
import {Node} from '../../scene/Node';
import {EventArgs} from '../tools/EventArgs';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';

/**
 * Defines a shape adapter which has functionality to manipulate Symbols.
 * This adapter associates itself to an instance of Symbol shape, creates a handle rendered on top of the shape
 * and allows dragging the shape around the scene.
 */
export class SymbolAdapter extends ShapeAdapter {
    /**
     * Defines a shape adapter which has functionality to manipulate Symbols.
     * This adapter associates itself to an instance of Symbol shape, creates a handle rendered on top of the shape
     * and allows dragging the shape around the scene.
     */
    constructor();
    /**
     * Called during initialization process. Creates handles
     */
    onInitialize(): boolean;
    /**
     * Updates the parameters of the handles to match the current state
     * of the shape and adapter
     */
    updateHandles(): this;
    /**
     * Sets shape to be modified
     * @param shape shape to be modified
     */
    setShape(shape: Node): this;
    /**
     * Sets the visibility of the handles registered with this adapter
     * @param visible Visibility to set on handles
     */
    setHandlesVisible(visible: boolean): this;
    /**
     * Called when adapter goes from active to non-active and vice versa
     * @param active New state of the adapter
     */
    onActiveStateChanged(active: boolean): void;
    /**
     * Moves the handle and the shape, if shape editing is enabled
     * @param x The device x position to move to
     * @param y The device y position to move to
     * @param eventArgs Event arguments from the calling tool
     */
    onMove(x: number, y: number, eventArgs?: EventArgs): this;
    /**
     * Called when a handle owned by this adapter has been released and editing stops.
     * @param x X coordinate of pointer when mouseup occurred
     * @param y Y coordinate of pointer when mouseup occurred
     * @param eventArgs Event arguments from the calling tool
     */
    release(x: number, y: number, eventArgs?: EventArgs): this;
    /**
     * Called when a handle owned by this adapter has been selected and activated. The editing began.
     * @param x X coordinate of the point where the mouse was clicked to engage the handle
     * @param y Y coordinate of the point where the mouse was clicked to engage the handle
     * @param eventArgs arguments from the event that started the change
     */
    engage(x: number, y: number, eventArgs?: EventArgs): void;
    /**
     * Sets the flag defining if this adapter has to directly edit the shape which it is associated with.
     * Otherwise it will only send an event.
     * @param allow True to edit the shape directly
     */
    setAllowShapeEdit(allow: boolean): this;
    /**
     * Returns the flag defining if this adapter directly edits the shape which it is associated with.
     */
    getAllowShapeEdit(): boolean;
    /**
     * Sets the flag defining if a ghost should be moved instead of an actual handle when the shape is being manipulated.
     * @param show True to display a ghost handle
     */
    setShowGhost(show: boolean): this;
    /**
     * Returns the flag defining if a ghost is moved instead of an actual handle when the shape is being manipulated.
     */
    getShowGhost(): boolean;
    /**
     * Sets styles for active, inactive, and ghost states of all handles, and redraws the handle
     * @param styles JSON containing stylings for different types of handle states
     * @param styles.ghostlinestyle Line Style of the handle when it is in ghost state
     * @param styles.ghostfillstyle Fill Style of the handle when it is in ghost state
     * @param styles.activefillstyle Fill Style of the handle when it is selected and active
     * @param styles.inactivefillstyle Fill Style of the handle when it is selected and active
     * @param styles.activelinestyle Line Style of the handle when when it is inactive (most of the time)
     * @param styles.inactivelinestyle Line Style of the handle when when it is inactive (most of the time)
     */
    setHandleStyles(styles: object | { ghostlinestyle?: LineStyle | string | object; ghostfillstyle?: FillStyle | string | object; activefillstyle?: FillStyle | string | object; inactivefillstyle?: FillStyle | string | object; activelinestyle?: LineStyle | string | object; inactivelinestyle?: LineStyle | string | object; } ): this;
    /**
     * Updates the state of the adapter, recalculates position and size of handles, and redraws.
     */
    update(): this;
}
