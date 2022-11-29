import {AbstractRubberTool} from './AbstractRubberTool';
import {CompositeNode} from '../../scene/CompositeNode';
import {RubberBandRenderMode} from './RubberBandRenderMode';
import {Node} from '../../scene/Node';
import {SelectionMode} from './SelectionMode';
import {RubberBandMode} from './RubberBandMode';
import {RubberBandShapeMode} from './RubberBandShapeMode';
import {CircularMode} from './CircularMode';
import {PointerMode} from './PointerMode';
import {Point} from '../../util/Point';
import {EventArgs} from './EventArgs';
import {LineStyle} from '../../attributes/LineStyle';
import {RgbaColor} from '../../util/RgbaColor';
import {FillStyle} from '../../attributes/FillStyle';
import {Pattern} from '../../attributes/Pattern';
import {TextStyle} from '../../attributes/TextStyle';

/**
 * Selection tool to pick nodes in the specified point or rectangular area
 * <br>
 * <br>
 * <h5>Events {@link @int/geotoolkit/controls/tools/Selection.Events}</h5>
 * <table class="params">
 *     <thead>
 *          <tr>
 *              <th>Event</th><th>Arguments</th><th>Description</th>
 *          </tr>
 *      </thead>
 *      <tbody>
 *          <tr>
 *              <td>onPick</td>
 *              <td>{@link @int/geotoolkit/controls/tools/SelectionEventArgs.SelectionEventArgs}</td>
 *              <td>This Event is fired when the Selection Tool select a visual.</td>
 *          </tr>
 *          <tr>
 *              <td>onSelectionEnd</td>
 *              <td>{@link @int/geotoolkit/controls/tools/SelectionEventArgs.SelectionEventArgs}</td>
 *              <td>This Event is fired when the Selection Tool select a visual. (similar to Selection.Events.onPick)</td>
 *          </tr>
 *          <tr>
 *              <td>onSelectionChanged</td>
 *              <td>{@link @int/geotoolkit/controls/tools/SelectionEventArgs.SelectionEventArgs}</td>
 *              <td>This Event is fired when the Selection Tool select a visual and it is different from previous selection.</td>
 *          </tr>
 *          <tr>
 *              <td>beforeSelectionChange</td>
 *              <td>{@link @int/geotoolkit/controls/tools/SelectionEventArgs.SelectionEventArgs}</td>
 *              <td>This Event is fired before the Selection Tool select a visual and it is different from previous selection.</td>
 *          </tr>
 *          <tr>
 *              <td>onDoubleClick</td>
 *              <td>{@link @int/geotoolkit/controls/tools/SelectionEventArgs.SelectionEventArgs}</td>
 *              <td>This Event is fired when the Selection Tool select a visual with a double click.</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 * Tool name: 'pick'
 */
export class Selection extends AbstractRubberTool {
    /**
     * Selection tool to pick nodes in the specified point or rectangular area
     * <br>
     * <br>
     * <h5>Events {@link @int/geotoolkit/controls/tools/Selection.Events}</h5>
     * <table class="params">
     *     <thead>
     *          <tr>
     *              <th>Event</th><th>Arguments</th><th>Description</th>
     *          </tr>
     *      </thead>
     *      <tbody>
     *          <tr>
     *              <td>onPick</td>
     *              <td>{@link @int/geotoolkit/controls/tools/SelectionEventArgs.SelectionEventArgs}</td>
     *              <td>This Event is fired when the Selection Tool select a visual.</td>
     *          </tr>
     *          <tr>
     *              <td>onSelectionEnd</td>
     *              <td>{@link @int/geotoolkit/controls/tools/SelectionEventArgs.SelectionEventArgs}</td>
     *              <td>This Event is fired when the Selection Tool select a visual. (similar to Selection.Events.onPick)</td>
     *          </tr>
     *          <tr>
     *              <td>onSelectionChanged</td>
     *              <td>{@link @int/geotoolkit/controls/tools/SelectionEventArgs.SelectionEventArgs}</td>
     *              <td>This Event is fired when the Selection Tool select a visual and it is different from previous selection.</td>
     *          </tr>
     *          <tr>
     *              <td>beforeSelectionChange</td>
     *              <td>{@link @int/geotoolkit/controls/tools/SelectionEventArgs.SelectionEventArgs}</td>
     *              <td>This Event is fired before the Selection Tool select a visual and it is different from previous selection.</td>
     *          </tr>
     *          <tr>
     *              <td>onDoubleClick</td>
     *              <td>{@link @int/geotoolkit/controls/tools/SelectionEventArgs.SelectionEventArgs}</td>
     *              <td>This Event is fired when the Selection Tool select a visual with a double click.</td>
     *          </tr>
     *      <tbody>
     *  </table>
     *  <br>
     * Tool name: 'pick'
     * @param options used to display temporary shapes or tool options
     * @param mode render mode, the rubberband selection mode, this will define how the rubberband will behave when selecting a rectangle
     */
    constructor(options?: CompositeNode | object, mode?: RubberBandRenderMode | number);
    /**
     * Sets selector callback
     * @param selectorCallback selector callback
     */
    setSelectorCallback(selectorCallback: Function | null): this;
    /**
     * Sets measure callback
     * @param measureCallback measure callback
     */
    setMeasureCallback(measureCallback: Function | null): this;
    /**
     * Specify a root node to start selection. If it is not specified then root node is used
     * @param root root node
     */
    setRootNode(root: Node): this;
    /**
     * Return the root node to start selection. If it is not specified then root node is used
     */
    getRootNode(): Node | null;
    /**
     * set tool selection mode
     * @param mode tool selection mode
     */
    setSelectionMode(mode: SelectionMode): this;
    /**
     * get tool selection mode
     */
    getSelectionMode(): SelectionMode | string;
    /**
     * Sets tool rubberband selection mode
     * @param mode tool rubberband selection mode
     */
    setRubberBandMode(mode: RubberBandMode): this;
    /**
     * Gets tool's rubberband selection mode
     */
    getRubberBandMode(): RubberBandMode | string;
    /**
     * Sets tool's rubberband shape
     * @param shape shape of rubberband selection area
     */
    setRubberBandShapeMode(shape: RubberBandShapeMode): this;
    /**
     * Gets tool's rubberband shape
     */
    getRubberBandShapeMode(): RubberBandShapeMode | string;
    /**
     * Sets tool's circular selection mode
     * @param mode new circular selection mode
     */
    setCircularMode(mode: CircularMode): this;
    /**
     * Gets tool's circular selection mode
     */
    getCircularMode(): CircularMode;
    /**
     * Sets tool pointer selection mode
     * @param mode tool pointer selection mode
     */
    setPointerMode(mode: PointerMode): this;
    /**
     * Gets tool pointer selection mode
     */
    getPointerMode(): PointerMode | string;
    /**
     * set filter handler
     * @param filter This allows to filter selected nodes.
     */
    setNodeFilter(filter: Function): this;
    /**
     * Return start point of selection
     */
    getStartPoint(): Point;
    /**
     * Return end point of selection
     */
    getEndPoint(): Point;
    /**
     * mouse down function of selection tool
     * @param eventArgs contains info about the event arguments
     */
    protected onMouseDown(eventArgs: EventArgs): void;
    /**
     * mouse up function of selection tool
     * @param eventArgs contains info about the event arguments
     */
    protected onMouseUp(eventArgs: EventArgs): void;
    /**
     * mouse move function
     * @param eventArgs contains info about the event arguments
     */
    protected onMouseMove(eventArgs: EventArgs): void;
    /**
     * gets the currently selected items
     */
    getSelection(): Node[];
    /**
     * sets the currently selected items
     * @param selection selection
     */
    setSelection(selection: Node[]): this;
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
     * Sets leasurement label text style
     * @param textStyle a new shape text style
     * @param textStyle.color text color
     * @param textStyle.baseLine base line.
     * @param textStyle.alignment alignment.
     * @param textStyle.font font.
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setTextStyle(textStyle: TextStyle | string | object | { color?: string | RgbaColor; baseLine?: string; alignment?: string; font?: string; } , merge?: boolean): this;
    /**
     * Set Settings
     * @param options JSON containing options
     * @param options.enabled is selection enabled
     * @param options.mode selection mode
     * @param options.linestyle rubber band selection linestyle
     * @param options.fillstyle rubber band selection fillstyle
     * @param options.autodisabled does selection automatically disabled on selection changed
     * @param options.mouseradius apply mouse selection radius setting
     * @param options.touchradius apply touch selection radius setting
     */
    setSettings(options?: object | { enabled?: boolean; mode?: SelectionMode | string; linestyle?: object | LineStyle; fillstyle?: object | FillStyle; autodisabled?: boolean; mouseradius?: number; touchradius?: number; } ): this;
    /**
     * Set auto-disabled mode
     * @param mode does the selection automatically disable itself on selection changed
     */
    setAutoDisabled(mode: boolean): this;
    /**
     * Get auto-disabled mode
     */
    isAutoDisabled(): boolean;
}
/**
 * Selection Events
 */
export enum Events {
    /**
     * onPick
     */
    onPick = 'onPick',
    /**
     * onSelectionEnd
     */
    onSelectionEnd = 'onSelectionEnd',
    /**
     * onSelectionChanged
     */
    onSelectionChanged = 'onSelectionChanged',
    /**
     * beforeSelectionChange
     */
    beforeSelectionChange = 'beforeSelectionChange',
    /**
     * onDoubleClick
     */
    onDoubleClick = 'onDoubleClick'
}
