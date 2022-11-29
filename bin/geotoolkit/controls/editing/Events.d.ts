/**
 * An enumerator containing events fired by Editing tools
 */
export enum Events {
    /**
     * Event fired before the first move is executed on a handle
     */
    DragStart = 'dragstart',
    /**
     * Event fired on every move of the handle if the ghost handle is disabled
     */
    Dragging = 'dragging',
    /**
     * Event fired when the handle or a ghost is released
     */
    DragEnd = 'dragend',
    /**
     * Event fired when deleting occurs
     */
    Delete = 'delete',
    /**
     * Event fired when inserting occurs
     */
    Insert = 'insert',
    /**
     * Event fired when mouse has been moved across the plot, but no dragging happens
     */
    Move = 'move'
}
