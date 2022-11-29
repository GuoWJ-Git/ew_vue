import {ShapeAdapter} from '../../../controls/editing/ShapeAdapter';
import {EventArgs} from '../../../controls/tools/EventArgs';
import {Node} from '../../../scene/Node';
import {LineStyle} from '../../../attributes/LineStyle';
import {FillStyle} from '../../../attributes/FillStyle';

/**
 * Defines a shape adapter which has functionality to manipulate WellLog Markers.
 * This adapter associates itself to an instance of LogMarker shape, creates handles rendered on top of the shape
 * and allows dragging the shape along the track.
 * @deprecated since 2020.1 (3.1) use {@link @int/geotoolkit/welllog/widgets/tools/MarkerEditor.MarkerEditor} for markers editing
 */
export class LogMarkerAdapter extends ShapeAdapter {
    /**
     * Defines a shape adapter which has functionality to manipulate WellLog Markers.
     * This adapter associates itself to an instance of LogMarker shape, creates handles rendered on top of the shape
     * and allows dragging the shape along the track.
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
     * Removes all the handles and their ghosts from the adapter and scene
     */
    removeHandles(): this;
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
     * Move adapter and send event {geotoolkit.controls.editing.ShapeAdapter.Moved}
     * This method also supports moving programmatically, as opposed to by event only.
     * If modelDeltaXY is passed as "true", then the x and y are treated as deltaX and deltaY
     * in model coordinates of the associated shape.
     * @param x X coordinate of pointer position at the moment of the move, or the dx of the adapter in
     * model coordinates of the associated shape
     * @param y Y coordinate of pointer position at the moment of the move, or the dy of the adapter in
     * model coordinates of the associated shape
     * @param eventArgs Event arguments passed from the tool for further passing
     * @param modelDeltaXY If true passed, x and y will be treated as respective deltas in model coordinates
     * of the associated shape
     */
    move(x: number, y: number, eventArgs?: EventArgs, modelDeltaXY?: boolean): this;
    /**
     * Moves the handle and the shape, if shape editing is enabled, usually used internally and is called by
     * "move" method of this class.
     * @param x X coordinate of pointer position at the moment of the move, or the dx of the adapter in
     * model coordinates of the associated shape
     * @param y Y coordinate of pointer position at the moment of the move, or the dy of the adapter in
     * model coordinates of the associated shape
     * @param eventArgs Event arguments passed from the tool for further passing
     * @param modelDeltaXY If true passed, x and y will be treated as respective deltas in model coordinates
     * of the associated shape
     */
    onMove(x: number, y: number, eventArgs?: EventArgs, modelDeltaXY?: boolean): this;
    /**
     * Called when a handle owned by this adapter has been released and editing stops.
     * @param x X coordinate of pointer when mouseup occurred
     * @param y Y coordinate of pointer when mouseup occurred
     * @param eventArgs Event arguments from the calling tool
     */
    release(x: number, y: number, eventArgs: EventArgs): this;
    /**
     * Called when a handle owned by this adapter has been selected and activated. The editing began. Fires
     * geotoolkit.controls.editing.Events.DragStart event.
     * @param x X coordinate of the point where the mouse was clicked to engage the handle in device space
     * @param y Y coordinate of the point where the mouse was clicked to engage the handle in device space
     * @param eventArgs eventArgs
     */
    engage(x: number, y: number, eventArgs: EventArgs): this;
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
     * Associates the shape passed in parameters to this adapter. All manipulations done via this
     * adapter are calculated and applied with respect to this shape
     * @param shape shape
     */
    setShape(shape: Node): this;
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
    setHandleStyles(styles: object | { ghostlinestyle?: LineStyle; ghostfillstyle?: FillStyle; activefillstyle?: FillStyle; inactivefillstyle?: FillStyle; activelinestyle?: LineStyle; inactivelinestyle?: LineStyle; } ): this;
}
