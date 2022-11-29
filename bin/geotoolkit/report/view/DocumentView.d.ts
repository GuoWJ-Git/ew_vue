/**
 * DocumentView Events enumerator
 */
export enum Events {
    /**
     * Event type fired when a page is added as a child to another shape
     */
    onPageAdded = 'onPageAdded',
    /**
     * Event type fired when a page is removed from another shape children.
     */
    onPageRemoved = 'onPageRemoved',
    /**
     * Event type fired when a active page has been changed.
     */
    onActivePageChanged = 'onActivePageChanged'
}
