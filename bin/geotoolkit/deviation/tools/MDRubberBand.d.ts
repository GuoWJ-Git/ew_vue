import {DeviationTool} from './DeviationTool';
import {Group} from '../../scene/Group';
import {Layer} from '../../scene/Layer';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';

/**
 * Tool name: MD-rubberband
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
 *              <td>RubberBand.Events.onZoomStart</td>
 *              <td>MDRubberBandEventArgs</td>
 *              <td>Fired when left mousedown is processed</td>
 *          </tr>
 *          <tr>
 *              <td>RubberBand.Events.onZoomEnd</td>
 *              <td>MDRubberBandEventArgs</td>
 *              <td>Fired when left mouseup is processed</td>
 *          </tr>
 *          <tr>
 *              <td>RubberBand.Events.onRangeChanged</td>
 *              <td>MDRubberBandEventArgs</td>
 *              <td>Fired when mousemove is processed</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>*
 * @deprecated since 2020.1 (3.1) Use geotoolkit.controls.tools.RubberBand tools instead
 */
export class MDRubberBand extends DeviationTool {
    /**
     * Tool name: MD-rubberband
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
     *              <td>RubberBand.Events.onZoomStart</td>
     *              <td>MDRubberBandEventArgs</td>
     *              <td>Fired when left mousedown is processed</td>
     *          </tr>
     *          <tr>
     *              <td>RubberBand.Events.onZoomEnd</td>
     *              <td>MDRubberBandEventArgs</td>
     *              <td>Fired when left mouseup is processed</td>
     *          </tr>
     *          <tr>
     *              <td>RubberBand.Events.onRangeChanged</td>
     *              <td>MDRubberBandEventArgs</td>
     *              <td>Fired when mousemove is processed</td>
     *          </tr>
     *      <tbody>
     *  </table>
     *  <br>*
     * @param manipulatorLayer manipulator layer (or group)
     * @param mode operating mode
     */
    constructor(manipulatorLayer: Group | Layer, mode?: Mode);
    /**
     * Sets options
     * @param options JSON containing options
     * @param options.enabled is rubber band enabled
     * @param options.linestyle rubber band linestyle
     * @param options.fillstyle rubber band fillstyle
     * @param options.autodisabled does rubber band automatically disabled on zoom end
     * @param options.mode operating mode
     */
    setOptions(options?: object | { enabled?: boolean; linestyle?: object | LineStyle; fillstyle?: object | FillStyle; autodisabled?: boolean; mode?: Mode; } ): this;
}
/**
 * Enum of MD-rubberband selection modes
 */
export enum Mode {
    /**
     * MD-range is being selected along trajectory within deviated track width
     */
    MD = 'md',
    /**
     * MD-range to zoom to is calculated as intersection of the deviated track
and "regular" selection rectangle
     */
    XY = 'xy'
}
