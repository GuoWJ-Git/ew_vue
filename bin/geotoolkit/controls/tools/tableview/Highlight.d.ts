import {AbstractTool} from '../AbstractTool';
import {TableView} from '../../shapes/tableview/TableView';
import {EventArgs} from '../EventArgs';

/**
 * Defines Highlight tool for Table View shape
 * <br>
 * <br>
 * <h5>Events</h5>
 * <table class="params">
 *     <thead>
 *          <tr>
 *              <th>Event</th><th>Arguments</th><th>Description</th>
 *          </tr>
 *      </thead>
 *      <tbody>
 *          <tr>
 *              <td>Highlight.Events.onHover</td>
 *              <td>geotoolkit.controls.tools.tableview.HoverEventArgs</td>
 *              <td>This Event is fired when the Pointer is hover an table element.</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 * Tool name: 'Highlight'
 */
export class Highlight extends AbstractTool {
    /**
     * Defines Highlight tool for Table View shape
     * <br>
     * <br>
     * <h5>Events</h5>
     * <table class="params">
     *     <thead>
     *          <tr>
     *              <th>Event</th><th>Arguments</th><th>Description</th>
     *          </tr>
     *      </thead>
     *      <tbody>
     *          <tr>
     *              <td>Highlight.Events.onHover</td>
     *              <td>geotoolkit.controls.tools.tableview.HoverEventArgs</td>
     *              <td>This Event is fired when the Pointer is hover an table element.</td>
     *          </tr>
     *      <tbody>
     *  </table>
     *  <br>
     * Tool name: 'Highlight'
     * @param options current Table View Shape or tool options
     * @param options.tableview table view shape
     */
    constructor(options?: TableView | object | { tableview?: TableView; } );
    /**
     * Fires onHover events
     * @param eventArgs information about event arguments
     */
    onMouseMove(eventArgs: EventArgs): void;
}
/**
 * Events
 */
export enum Events {
    /**
     * onHover
     */
    onHover = 'onHover'
}
