import {Paint} from './Paint';
import {CompositeNode} from '../../scene/CompositeNode';
import {LineStyle} from '../../attributes/LineStyle';
import {RgbaColor} from '../../util/RgbaColor';
import {FillStyle} from '../../attributes/FillStyle';
import {Pattern} from '../../attributes/Pattern';
import {TextStyle} from '../../attributes/TextStyle';
import {Polygon} from '../../scene/shapes/Polygon';

/**
 * PolygonSelection
 * <br>
 * <br>
 * <h5>Events {@link @int/geotoolkit/controls/tools/PolygonSelection.Events}</h5>
 * <table class="params">
 *     <thead>
 *          <tr>
 *              <th>Event</th><th>Arguments</th><th>Description</th>
 *          </tr>
 *      </thead>
 *      <tbody>
 *          <tr>
 *              <td>onSelectionEnd</td>
 *              <td>{@link @int/geotoolkit/controls/tools/PolygonSelectionEventArgs.PolygonSelectionEventArgs}</td>
 *              <td>This Event is fired when the Selection Tool select a visual. (similar to Selection.Events.onPick)</td>
 *          </tr>
 *          <tr>
 *              <td>onSelectionChanged</td>
 *              <td>{@link @int/geotoolkit/controls/tools/PolygonSelectionEventArgs.PolygonSelectionEventArgs}</td>
 *              <td>This Event is fired when the Selection Tool select a visual and it is different from previous selection.</td>
 *          </tr>
 *          <tr>
 *              <td>beforeSelectionChange</td>
 *              <td>{@link @int/geotoolkit/controls/tools/PolygonSelectionEventArgs.PolygonSelectionEventArgs}</td>
 *              <td>This Event is fired before the Selection Tool select a visual and it is different from previous selection.</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 * Tool name: 'polygon-selection'
 */
export class PolygonSelection extends Paint {
    /**
     * PolygonSelection
     * <br>
     * <br>
     * <h5>Events {@link @int/geotoolkit/controls/tools/PolygonSelection.Events}</h5>
     * <table class="params">
     *     <thead>
     *          <tr>
     *              <th>Event</th><th>Arguments</th><th>Description</th>
     *          </tr>
     *      </thead>
     *      <tbody>
     *          <tr>
     *              <td>onSelectionEnd</td>
     *              <td>{@link @int/geotoolkit/controls/tools/PolygonSelectionEventArgs.PolygonSelectionEventArgs}</td>
     *              <td>This Event is fired when the Selection Tool select a visual. (similar to Selection.Events.onPick)</td>
     *          </tr>
     *          <tr>
     *              <td>onSelectionChanged</td>
     *              <td>{@link @int/geotoolkit/controls/tools/PolygonSelectionEventArgs.PolygonSelectionEventArgs}</td>
     *              <td>This Event is fired when the Selection Tool select a visual and it is different from previous selection.</td>
     *          </tr>
     *          <tr>
     *              <td>beforeSelectionChange</td>
     *              <td>{@link @int/geotoolkit/controls/tools/PolygonSelectionEventArgs.PolygonSelectionEventArgs}</td>
     *              <td>This Event is fired before the Selection Tool select a visual and it is different from previous selection.</td>
     *          </tr>
     *      <tbody>
     *  </table>
     *  <br>
     * Tool name: 'polygon-selection'
     * @param options used to display temporary shapes or tool options
     * @param options.name tool name
     * @param options.node node options
     * @param options.node.linestyle node linestyle
     * @param options.node.fillstyle node fillstyle
     * @param options.preview path options
     * @param options.preview.linestyle path linestyle
     */
    constructor(options?: CompositeNode | object | { name?: string; node?: object | { linestyle?: object; fillstyle?: object; } ; preview?: object | { linestyle?: object; } ; } );
    /**
     * gets the currently selected items
     */
    getSelection(): any[];
    /**
     * set filter handler
     * @param filter This allows to filter selected nodes.
     */
    setNodeFilter(filter: Function): this;
    /**
     * Set allow intersection
     * @param mode will this select items that intersect
     */
    setAllowIntersection(mode: boolean): this;
    /**
     * Get allow intersection
     */
    getAllowIntersection(): boolean;
    /**
     * Set even odd mode
     * @param mode even odd mode
     */
    setEvenOddMode(mode: boolean): this;
    /**
     * Get even odd mode
     */
    getEvenOddMode(): boolean;
    /**
     * Set auto-disabled mode
     * @param mode does the selection automatically disable itself on selection changed
     */
    setAutoDisabled(mode: boolean): this;
    /**
     * Get auto-disabled mode
     */
    isAutoDisabled(): boolean;
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
     * Return line style
     */
    getLineStyle(): LineStyle;
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
     * Sets line style of the start and end symbols
     * @deprecated since 2021.1 (3.3) use PolygonSelection.setProperties instead
     * @example
     * ```javascript
     * PolygonSelection
     *    .setProperties({
     *       'handles': {
     *           'begin': symbolLineStyle1,
     *           'middle': symbolLineStyle2,
     *           'end': symbolLineStyle3
     *       }
     *   })
     * ```
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setSymbolLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * Return symbol line style
     * @deprecated since 2021.1 (3.3) use PolygonSelection.getProperties()['handles']['begin']['linestyle'] instead
     */
    getSymbolLineStyle(): LineStyle;
    /**
     * Sets fill style of the start and end symbols
     * @deprecated since 2021.1 (3.3) use PolygonSelection.setProperties instead
     * @example
     * ```javascript
     * PolygonSelection
     *    .setProperties({
     *       'handles': {
     *           'begin': symbolFillStyle1,
     *           'middle': symbolFillStyle2,
     *           'end': symbolFillStyle3
     *       }
     *   })
     * ```
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setSymbolFillStyle(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string, merge?: boolean): this;
    /**
     * Sets visibility of the start and end symbols.
     * @deprecated since 2021.1 (3.3) use PolygonSelection.setProperties instead
     * @example
     * ```javascript
     * PolygonSelection
     *    .setProperties({
     *       'handles': {
     *           'begin': symbolVisible1,
     *           'middle': symbolVisible2,
     *           'end': symbolVisible3
     *       }
     *   })
     * ```
     * @param visible visibility of symbols
     */
    setSymbolVisibility(visible: boolean): this;
    /**
     * Sets visibility of the start line.
     * @deprecated since 2021.1 (3.3) use PolygonSelection.setProperties instead
     * @example
     * ```javascript
     * PolygonSelection
     *    .setProperties({
     *       'preview': {
     *           'visible': visible
     *       }
     *   })
     * ```
     * @param visible visibility of line
     */
    setStartLineVisibility(visible: boolean): this;
    /**
     * Sets visibility of the text.
     * @deprecated since 2021.1 (3.3)
     * @param visible visibility of text
     */
    setTextVisibility(visible: boolean): this;
    /**
     * Sets text style of the text.
     * @deprecated since 2021.1 (3.3)
     * @param textStyle text style of text
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setTextStyle(textStyle: TextStyle | string | object, merge?: boolean): this;
    /**
     * @deprecated since 2021.1 (3.3) use PolygonSelection.getShape instead
     */
    getPolygon(): Polygon | any;
    /**
     * Remove last point from selection area
     * @deprecated since 2021.1 (3.3)
     */
    removeLastPoint(): this;
}
/**
 * PolygonSelection Events
 */
export enum Events {
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
    beforeSelectionChange = 'beforeSelectionChange'
}
