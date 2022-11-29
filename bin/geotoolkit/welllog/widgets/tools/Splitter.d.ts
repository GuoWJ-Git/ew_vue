import {AbstractTool} from '../../../controls/tools/AbstractTool';
import {Layer} from '../../../scene/Layer';
import {TrackContainer} from '../../TrackContainer';

/**
 * Creates default implementation of the track splitter <br>
 * The tool fires the following types of event:<br>
 * (1) "onCanResize" - {geotoolkit.controls.tools.RejectableEventArgs} - occurs before track resize is starting.<br>
 * (2) "onTrackWidthChanged" - {geotoolkit.controls.tools.RejectableEventArgs} - occurs after track resize is done.<br>
 * (3) "onContainerWidthChanged" - {geotoolkit.controls.tools.EventArgs} - occurs after container resize is done.<br>
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
 *              <td>Splitter.Events.onCanResize</td>
 *              <td>geotoolkit.controls.tools.RejectableEventArgs</td>
 *              <td>occurs before track resize is starting.</td>
 *          </tr>
 *          <tr>
 *              <td>Splitter.Events.onTrackWidthChanged</td>
 *              <td>geotoolkit.controls.tools.RejectableEventArgs</td>
 *              <td> occurs after track resize is done.</td>
 *          </tr>
 *          <tr>
 *              <td>Splitter.Events.onContainerWidthChanged</td>
 *              <td>geotoolkit.controls.tools.EventArgs</td>
 *              <td>occurs after container resize is done.</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 * Tool name: 'splitter'
 */
export class Splitter extends AbstractTool {
    /**
     * Creates default implementation of the track splitter <br>
     * The tool fires the following types of event:<br>
     * (1) "onCanResize" - {geotoolkit.controls.tools.RejectableEventArgs} - occurs before track resize is starting.<br>
     * (2) "onTrackWidthChanged" - {geotoolkit.controls.tools.RejectableEventArgs} - occurs after track resize is done.<br>
     * (3) "onContainerWidthChanged" - {geotoolkit.controls.tools.EventArgs} - occurs after container resize is done.<br>
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
     *              <td>Splitter.Events.onCanResize</td>
     *              <td>geotoolkit.controls.tools.RejectableEventArgs</td>
     *              <td>occurs before track resize is starting.</td>
     *          </tr>
     *          <tr>
     *              <td>Splitter.Events.onTrackWidthChanged</td>
     *              <td>geotoolkit.controls.tools.RejectableEventArgs</td>
     *              <td> occurs after track resize is done.</td>
     *          </tr>
     *          <tr>
     *              <td>Splitter.Events.onContainerWidthChanged</td>
     *              <td>geotoolkit.controls.tools.EventArgs</td>
     *              <td>occurs after container resize is done.</td>
     *          </tr>
     *      <tbody>
     *  </table>
     *  <br>
     * Tool name: 'splitter'
     * @param options layer for holding temporary shapes or properties object
     * @param options.trackcontainer optional trackContainer
     * @param options.minimumwidth minimum splitter width
     * @param options.maximumwidth maximum splitter width
     * @param trackContainer optional trackContainer
     */
    constructor(options?: Layer | object | { trackcontainer?: TrackContainer; minimumwidth?: number; maximumwidth?: number; } , trackContainer?: TrackContainer);
    /**
     */
    protected onActiveStateChanged(): void;
    /**
     * Return minimum width
     */
    getMinimumWidth(): number;
    /**
     * Set minimum splitter width
     * @param width minimum splitter width
     */
    setMinimumWidth(width: number): this;
    /**
     * Return maximum width
     */
    getMaximumWidth(): number;
    /**
     * Set maximum splitter width
     * @param width maximum splitter width
     */
    setMaximumWidth(width?: number): this;
    /**
     * Sets tool properties
     * @param properties properties
     * @param properties.maximumwidth maximum width
     * @param properties.minimumwidth minimum width
     */
    setProperties(properties?: object | { maximumwidth?: number; minimumwidth?: number; } ): this;
    /**
     * Gets tool options
     */
    getProperties(): {maximumwidth: number; minimumwidth: number} | any;
}
/**
 * Events
 */
export enum Events {
    /**
     * onContainerWidthChanged
     */
    onContainerWidthChanged = 'onContainerWidthChanged',
    /**
     * onTrackWidthChanged
     */
    onTrackWidthChanged = 'onTrackWidthChanged',
    /**
     * onCanResize
     */
    onCanResize = 'onCanResize'
}
