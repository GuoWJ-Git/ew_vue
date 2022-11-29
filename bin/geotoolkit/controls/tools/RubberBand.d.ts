import {AbstractRubberTool} from './AbstractRubberTool';
import {CompositeNode} from '../../scene/CompositeNode';
import {RubberBandRenderMode} from './RubberBandRenderMode';
import {Dimension} from '../../util/Dimension';
import {Rect} from '../../util/Rect';
import {Node} from '../../scene/Node';
import {LineStyle} from '../../attributes/LineStyle';
import {RgbaColor} from '../../util/RgbaColor';
import {FillStyle} from '../../attributes/FillStyle';
import {Pattern} from '../../attributes/Pattern';

/**
 * RubberBand tool supports several events as shown below and it has several builtin functions to customise the tool.<br>
 * The rendering is based on the {@link @int/geotoolkit/controls/tools/RubberBandRenderMode.RubberBandRenderMode}.
 * <br>
 * <br>
 * <h5>Events {@link @int/geotoolkit/controls/tools/RubberBand.Events}</h5>
 * <table class="params">
 *     <thead>
 *          <tr>
 *              <th>Event</th><th>Arguments</th><th>Description</th>
 *          </tr>
 *      </thead>
 *      <tbody>
 *          <tr>
 *              <td>onZoomStart</td>
 *              <td>{@link @int/geotoolkit/controls/tools/RubberBandEventArgs.RubberBandEventArgs}</td>
 *              <td>This Event is fired when the RubberBand Tool left button click occurs.</td>
 *          </tr>
 *          <tr>
 *              <td>onZoomEnd</td>
 *              <td>{@link @int/geotoolkit/controls/tools/RubberBandEventArgs.RubberBandEventArgs}</td>
 *              <td>This Event is fired when the RubberBand Tool left button click is released.</td>
 *          </tr>
 *          <tr>
 *              <td>onRangeChanged</td>
 *              <td>{@link @int/geotoolkit/controls/tools/RubberBandEventArgs.RubberBandEventArgs}</td>
 *              <td>This Event is fired when the RubberBand Tool is moving.</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 * Tool name: 'rubberband'
 * @example
 * ```javascript
 * // In order to enable the rubberband tool for widgets:
 * widget.getToolByName('rubberband').setEnabled(true);
 * ```
 * @example
 * ```javascript
 * //To get the dimensions of a selected region from the rubber band tool:
 * import {Events} from '@int/geotoolkit/controls/tools/RubberBand';
 * ...
 * rubberband.addListener(Events.onZoomEnd, (sender, evt) => {
 *      // evt is instance of @int/geotoolkit/controls/tools/RubberBandEventArgs
 *      const rect = evt.getArea();
 *      ...
 * } );
 * ```
 * @example
 * ```javascript
 * //To create new horizontal rubber-band tool and attach it to the specific group, it will be limited by group model limits
 * import {RubberBandRenderMode} from '@int/geotoolkit/controls/tools/RubberBandRenderMode';
 * new RubberBand(group, RubberBandRenderMode.Horizontal)
 * ```
 */
export class RubberBand extends AbstractRubberTool {
    /**
     * RubberBand tool supports several events as shown below and it has several builtin functions to customise the tool.<br>
     * The rendering is based on the {@link @int/geotoolkit/controls/tools/RubberBandRenderMode.RubberBandRenderMode}.
     * <br>
     * <br>
     * <h5>Events {@link @int/geotoolkit/controls/tools/RubberBand.Events}</h5>
     * <table class="params">
     *     <thead>
     *          <tr>
     *              <th>Event</th><th>Arguments</th><th>Description</th>
     *          </tr>
     *      </thead>
     *      <tbody>
     *          <tr>
     *              <td>onZoomStart</td>
     *              <td>{@link @int/geotoolkit/controls/tools/RubberBandEventArgs.RubberBandEventArgs}</td>
     *              <td>This Event is fired when the RubberBand Tool left button click occurs.</td>
     *          </tr>
     *          <tr>
     *              <td>onZoomEnd</td>
     *              <td>{@link @int/geotoolkit/controls/tools/RubberBandEventArgs.RubberBandEventArgs}</td>
     *              <td>This Event is fired when the RubberBand Tool left button click is released.</td>
     *          </tr>
     *          <tr>
     *              <td>onRangeChanged</td>
     *              <td>{@link @int/geotoolkit/controls/tools/RubberBandEventArgs.RubberBandEventArgs}</td>
     *              <td>This Event is fired when the RubberBand Tool is moving.</td>
     *          </tr>
     *      <tbody>
     *  </table>
     *  <br>
     * Tool name: 'rubberband'
     * @param options used to display temporary shapes or tool options
     * @param mode render mode
     */
    constructor(options?: CompositeNode | object, mode?: RubberBandRenderMode);
    /**
     * set minimum selection dimension
     * @param minDimension minimum selection dimension
     * @param isInDevice true if in device coordinates
     */
    setMinDimension(minDimension: Dimension, isInDevice?: boolean): this;
    /**
     * Get minimum selection dimension
     */
    getMinDimension(): Dimension;
    /**
     * set minimum dimension mode
     * @example
     * ```javascript
     * import {Dimension} from '@int/geotoolkit/util/Dimension';
     * import {MinimumDimensionMode} from '@int/geotoolkit/controls/tools/RubberBand';
     * ...
     * // The rubberband tool has several configuration options for controlling the maximum amount of zoom.
     * // First get rubber band tool
     * const rubberBandTool = widget.getToolByName('rubberband');
     * // The setMinDimension property can be used to limit the minimum box zoom to some fixed amount.
     * // Optional second parameter specifies whether to use model or device coordinates;
     * const minVerticalUnitsZoom = 50;
     * const useDeviceCoordinates = false;
     * rubberBandTool.setMinDimension(new Dimension(0, minVerticalUnitsZoom), useDeviceCoordinates);
     * // The setMinDimensionMode can be used to specify how the start/end should be adjusted if the minimum zoom level limit is reached.
     * // The smartMode expands highlighted area around selection
     * rubberBandTool.setMinDimensionMode(MinimumDimensionMode.Smart);
     * // The hardMode expands highlighted area from the start point
     * rubberBandTool.setMinDimensionMode(MinimumDimensionMode.Hard);
     * ```
     * @param mode minimum dimension mode
     */
    setMinDimensionMode(mode: MinimumDimensionMode): this;
    /**
     * Get minimum dimension mode
     */
    getMinDimensionMode(): MinimumDimensionMode;
    /**
     * Sets rubberband rendering mode
     * @param mode rubberband rendering mode
     */
    setMode(mode: RubberBandRenderMode): this;
    /**
     * Return empty rect flag
     */
    getAcceptEmptyRect(): boolean;
    /**
     * Set empty rect flag
     * @param acceptEmptyRect empty rect flag
     */
    setAcceptEmptyRect(acceptEmptyRect: boolean): this;
    /**
     * Set restriction area
     * @param restrictionArea restriction area
     */
    setRestrictionArea(restrictionArea: Rect): this;
    /**
     * Get restriction area
     */
    getRestrictionArea(): Rect;
    /**
     * Set auto-disabled mode
     * @param mode does the RB automatically disable itself on zoom End
     */
    setAutoDisabled(mode: boolean): this;
    /**
     * Get auto-disabled mode
     */
    isAutoDisabled(): boolean;
    /**
     * Gets rubberband rendering mode
     */
    getMode(): RubberBandRenderMode;
    /**
     * Sets callback for selecting target Node from scene
     * @param node target node
     */
    setTarget(node: Node): this;
    /**
     * Sets line style
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * Sets fill style
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string, merge?: boolean): this;
    /**
     * Set Settings
     * @param options JSON containing options
     * @param options.enabled is rubber band enabled
     * @param options.linestyle rubber band linestyle
     * @param options.fillstyle rubber band fillstyle
     * @param options.autodisabled does rubber band automatically disabled on zoom end
     * @param options.acceptemptyrect does rubber band accept empty rect
     * @param options.restrictionarea specify restriction area
     */
    setSettings(options?: object | { enabled?: boolean; linestyle?: object | LineStyle; fillstyle?: object | FillStyle; autodisabled?: boolean; acceptemptyrect?: boolean; restrictionarea?: Rect; } ): this;
}
/**
 * RubberBand Events
 */
export enum Events {
    /**
     * onZoomStart
     */
    onZoomStart = 'onZoomStart',
    /**
     * onZoomEnd
     */
    onZoomEnd = 'onZoomEnd',
    /**
     * onRangeChanged
     */
    onRangeChanged = 'onRangeChanged'
}
/**
 * Enum of rubberband Minimum Dimension modes
 */
export enum MinimumDimensionMode {
    /**
     * Expands highlighted area from the start point
     */
    Hard = 0,
    /**
     * Expands highlighted area around selection
     */
    Smart = 1
}
