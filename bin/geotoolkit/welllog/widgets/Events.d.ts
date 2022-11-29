/**
 * Events triggered by the WellLog Widget.
 * @example
 * ```javascript
 * // Capture VisibleDepthLimitsChanged event
 * import {Events as WellLogEvents} from '@int/geotoolkit/welllog/widgets/Events';
 * widget.on(WellLogEvents.VisibleDepthLimitsChanged, (event, sender, eventArgs) => {
 *   // eventArgs is json object
 *   // {'old': oldLimits, 'new': newLimits}
 * });
 * ```
 */
export enum Events {
    /**
     * This event occurs when the visible depth limits is changed. It can scroll, scale operations.
     */
    VisibleDepthLimitsChanged = 'visibleDepthLimitsChanged',
    /**
     * If widget orientation changed.
     */
    OrientationChanged = 'orientationChanged',
    /**
     * This events occurs when virtual depth model limit is changed. For example, if you call method setDepthLimits.
     */
    DepthRangeChanged = 'depthrangechanged',
    /**
     * This occurs if any sum size of all tracks is changed. It can also happen if a track is deleted, inserted or changed size
     */
    TracksSizeChanged = 'onTracksSizeChanged',
    /**
     * It occurs when widget can request data. It happens if visible limits or scale is changed.
     */
    DataUpdating = 'updating',
    /**
     * If visual is selected.
     */
    VisualsSelected = 'visualsSelected'
}
