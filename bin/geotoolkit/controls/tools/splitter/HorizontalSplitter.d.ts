import {Splitter} from './Splitter';
import {Group} from '../../../scene/Group';

/**
 * Creates default implementation of the horizontal splitter
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
 *              <td>HorizontalSplitter.Events.onPlotSizeChanged</td>
 *              <td>geotoolkit.controls.tools.splitter.HorizontalSplitterEventArgs</td>
 *              <td>This Event is fired when the Splitter has moved.</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 * Tool name: 'horizontal-splitter'
 * @deprecated since 2021 (3.2) use geotoolkit.controls.tools.splitter.Splitter instead
 */
export class HorizontalSplitter extends Splitter {
    /**
     * Creates default implementation of the horizontal splitter
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
     *              <td>HorizontalSplitter.Events.onPlotSizeChanged</td>
     *              <td>geotoolkit.controls.tools.splitter.HorizontalSplitterEventArgs</td>
     *              <td>This Event is fired when the Splitter has moved.</td>
     *          </tr>
     *      <tbody>
     *  </table>
     *  <br>
     * Tool name: 'horizontal-splitter'
     * @param manipulatorLayer layer for holding temporary shapes
     */
    constructor(manipulatorLayer: Group);
}
/**
 * Events
 */
export enum Events {
    /**
     * onPlotSizeChanged
     */
    onPlotSizeChanged = 'onPlotSizeChanged'
}
