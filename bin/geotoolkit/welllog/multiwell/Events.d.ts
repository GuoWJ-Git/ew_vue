/**
 * Well Events enumerator
 */
export enum Events {
    /**
     * Event type fired when depth scale of the well is changed
     */
    DepthScaleChanged = 'DepthScaleChanged',
    /**
     * It occurs when widget can request data. It happens if visible limits or scale is changed.
     */
    DataUpdating = 'updating'
}
