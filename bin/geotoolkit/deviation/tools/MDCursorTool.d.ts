import {DeviationTool} from './DeviationTool';
import {Group} from '../../scene/Group';
import {Layer} from '../../scene/Layer';
import {LineStyle} from '../../attributes/LineStyle';
import {TextStyle} from '../../attributes/TextStyle';
import {LabelPosition} from '../LabelPosition';
import {Point} from '../../util/Point';

/**
 * Toonlname: MD-cursortool
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
 *              <td>MDCursorTool.Events.onPositionChanged</td>
 *              <td>geotoolkit.deviation.tools.MDCursorEventArgs</td>
 *              <td>The event gets fired when the MDCursorTool's mouse position is changed</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 * @deprecated since 2020.1 (3.1) Use geotoolkit.controls.tools.CrossHair instead
 */
export class MDCursorTool extends DeviationTool {
    /**
     * Toonlname: MD-cursortool
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
     *              <td>MDCursorTool.Events.onPositionChanged</td>
     *              <td>geotoolkit.deviation.tools.MDCursorEventArgs</td>
     *              <td>The event gets fired when the MDCursorTool's mouse position is changed</td>
     *          </tr>
     *      <tbody>
     *  </table>
     *  <br>
     * @param manipulatorGroup layer to display temporary shapes
     * @param name name of the tool
     */
    constructor(manipulatorGroup: Group | Layer, name?: string);
    /**
     */
    protected onActiveStateChanged(): void;
    /**
     * @param settings settings
     * @param settings.enabled enabled
     * @param settings.line JSON for line.
     * @param settings.line.linestyle Linestyle
     * @param settings.line.visible visibility
     * @param settings.label JSON for label.
     * @param settings.label.textstyle textstyle
     * @param settings.label.visible visibility
     * @param settings.label.textconverter "function(x, y)" to convert model coordinates (x,y) to text
     * (y-ordinate ONLY is normally used since it is the MD-value processed by the tool)
     * @param settings.label.position label position
     */
    setSettings(settings: object | { enabled?: boolean; line?: object | { linestyle?: object | LineStyle; visible?: boolean; } ; label?: object | { textstyle?: object | TextStyle; visible?: boolean; textconverter?: Function; position?: LabelPosition; } ; } ): this;
    /**
     * Updates cursor position
     */
    update(): void;
    /**
     * Sets cursor position at model point
     * @param ptModel model point (x-ordinate is ignored)
     */
    setCursor(ptModel: Point | any): void;
}
/**
 * MDCursorTool Events
 */
export enum Events {
    /**
     * onPositionChanged
     */
    onPositionChanged = 'onPositionChanged'
}
