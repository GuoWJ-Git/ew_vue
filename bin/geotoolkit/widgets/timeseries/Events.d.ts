/**
 * TimeseriesWidget events following example shows how user can subscribe to the events.
 * @example
 * ```javascript
 * import {Events} from '@int/geotoolkit/widgets/timeseries/Events';
 * widget.on(Events.onVisibleRangeChanging, (event, sender, eventArgs) => {
 *     //scrolling or scaling
 *     geotoolkit.log(eventArgs.getVisibleRange().toString());
 * });
 * widget.on(Events.onVisibleRangeChanged, (event, sender, eventArgs) => {
 *     //after scroll or scale complete
 *     geotoolkit.log(eventArgs.getVisibleRange().toString());
 * });
 * ```
 */
export enum Events {
    /**
     * onVisibleRangeChanged
     */
    onVisibleRangeChanged = 'onVisibleRangeChanged',
    /**
     * onVisibleRangeChanging
     */
    onVisibleRangeChanging = 'onVisibleRangeChanging',
    /**
     * onCursorChanged
     */
    onCursorChanged = 'onCursorChanged',
    /**
     * beforeSelectionChange
     */
    beforeSelectionChange = 'beforeSelectionChange',
    /**
     * onSelectionChanged
     */
    onSelectionChanged = 'onSelectionChanged',
    /**
     * onAnnotationLineClick
     */
    onAnnotationLineClick = 'onAnnotationLineClick',
    /**
     * onAnnotationClick
     */
    onAnnotationClick = 'onAnnotationClick'
}
