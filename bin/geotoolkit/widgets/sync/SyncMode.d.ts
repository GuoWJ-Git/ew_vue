/**
 * Enum defining synchronization modes
 */
export enum SyncMode {
    /**
     * Synchronize the visible model range
     */
    VisibleRange = 'visiblerange',
    /**
     * Synchronize the scale factors and position
     */
    Scale = 'scale',
    /**
     * Synchronize the local transformation and model limits in the specified direction
     */
    Model = 'model',
    /**
     * Custom synchronization
     */
    Custom = 'custom'
}
