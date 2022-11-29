import {AbstractTool} from './AbstractTool';
import {CompositeNode} from '../../scene/CompositeNode';
import {TernaryGrid} from '../shapes/TernaryGrid';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {SymbolShape} from '../../scene/shapes/SymbolShape';
import {TextStyle} from '../../attributes/TextStyle';
import {RgbaColor} from '../../util/RgbaColor';
import {Point} from '../../util/Point';
import {EventArgs} from './EventArgs';

/**
 * Creates a TernaryCrossHair tool. The tool supports events shown below. It provides builtin functions to customise the styles for the tool and its labels.
 * <br>
 * <h5>Events {@link @int/geotoolkit/controls/tools/CrossHair.Events}</h5>
 * <table class="params">
 *     <thead>
 *          <tr>
 *              <th>Event</th><th>Arguments</th><th>Description</th>
 *          </tr>
 *      </thead>
 *      <tbody>
 *          <tr>
 *              <td>onPositionChanged</td>
 *              <td>{@link @int/geotoolkit/controls/tools/CrossHairEventArgs.CrossHairEventArgs}</td>
 *              <td>This Event is fired when the Cross Hair Mouse position has been changed</td>
 *          </tr>
 *          <tr>
 *              <td>onPointerUp</td>
 *              <td>{@link @int/geotoolkit/controls/tools/CrossHairEventArgs.CrossHairEventArgs}</td>
 *              <td>This Event is fired when the Cross Hair pointer is up</td>
 *          </tr>
 *          <tr>
 *              <td>onPointerDown</td>
 *              <td>{@link @int/geotoolkit/controls/tools/CrossHairEventArgs.CrossHairEventArgs}</td>
 *              <td>This Event is fired when the Cross Hair pointer is down</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 */
export class TernaryCrossHair extends AbstractTool {
    /**
     * Creates a TernaryCrossHair tool. The tool supports events shown below. It provides builtin functions to customise the styles for the tool and its labels.
     * <br>
     * <h5>Events {@link @int/geotoolkit/controls/tools/CrossHair.Events}</h5>
     * <table class="params">
     *     <thead>
     *          <tr>
     *              <th>Event</th><th>Arguments</th><th>Description</th>
     *          </tr>
     *      </thead>
     *      <tbody>
     *          <tr>
     *              <td>onPositionChanged</td>
     *              <td>{@link @int/geotoolkit/controls/tools/CrossHairEventArgs.CrossHairEventArgs}</td>
     *              <td>This Event is fired when the Cross Hair Mouse position has been changed</td>
     *          </tr>
     *          <tr>
     *              <td>onPointerUp</td>
     *              <td>{@link @int/geotoolkit/controls/tools/CrossHairEventArgs.CrossHairEventArgs}</td>
     *              <td>This Event is fired when the Cross Hair pointer is up</td>
     *          </tr>
     *          <tr>
     *              <td>onPointerDown</td>
     *              <td>{@link @int/geotoolkit/controls/tools/CrossHairEventArgs.CrossHairEventArgs}</td>
     *              <td>This Event is fired when the Cross Hair pointer is down</td>
     *          </tr>
     *      <tbody>
     *  </table>
     *  <br>
     * @param options JSON containing crosshair option OR manipulator layer
     * @param options.name name of the tool
     * @param options.ternarygrid reference to ternary grid
     * @param options.linestyle default linestyle shared for all axes
     * @param options.outlinestyle OutLinestyle for both lines
     * @param options.top Linestyle for top corner value line
     * @param options.left Linestyle for left corner value line
     * @param options.right Linestyle for right corner value line
     * @param options.fillstyle fillstyle of the cross-hair (used only with radius)
     * @param options.radius radius of the cross-hair center target
     * @param options.symbol symbol of the cross-hair
     * @param options.textstyle default textstyle shared for all axes
     * @param options.textstyle.top additional options for top corner value
     * @param options.textstyle.top.visible visibility of top corner value
     * @param options.textstyle.top.padding padding of top corner value
     * @param options.textstyle.left additional options for left corner value
     * @param options.textstyle.left.visible visibility of left corner value
     * @param options.textstyle.left.padding padding of left corner value
     * @param options.textstyle.right additional options for right corner value
     * @param options.textstyle.right.visible visibility of right corner value
     * @param options.textstyle.right.padding padding of right corner value
     */
    constructor(options?: CompositeNode | object | { name?: string; ternarygrid?: TernaryGrid; linestyle?: LineStyle | string | object; outlinestyle?: object | LineStyle; top?: object | LineStyle; left?: object | LineStyle; right?: object | LineStyle; fillstyle?: object | FillStyle; radius?: number; symbol?: SymbolShape; textstyle?: TextStyle | string | object | { top?: object | { visible?: boolean; padding?: number; } ; left?: object | { visible?: boolean; padding?: number; } ; right?: object | { visible?: boolean; padding?: number; } ; } ; } );
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
     * Sets fill style, used if radius is not null
     * @param fillStyle line style or options
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle | object | string, merge?: boolean): this;
    /**
     * Return fill style
     */
    getFillStyle(): FillStyle;
    /**
     * Sets line style
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setOutLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * Return outline style
     */
    getOutLineStyle(): LineStyle;
    /**
     * set radius of the cursor center target
     * @param radius center radius
     */
    setRadius(radius: number): this;
    /**
     * Returns radius of the cursor center target
     */
    getRadius(): number;
    /**
     * set cross-hair symbol
     * @param symbol cross-hair symbol
     */
    setSymbol(symbol: SymbolShape): this;
    /**
     * Return cross-hair symbol
     */
    getSymbol(): SymbolShape;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {name: string; ternarygrid: TernaryGrid; linestyle: LineStyle | string | object; outlinestyle: object | LineStyle; top: object | LineStyle; left: object | LineStyle; right: object | LineStyle; fillstyle: object | FillStyle; radius: number; symbol: SymbolShape; textstyle: {top: {visible: boolean; padding: number}; left: {visible: boolean; padding: number}; right: {visible: boolean; padding: number}}} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.name name of the tool
     * @param properties.ternarygrid reference to ternary grid
     * @param properties.linestyle default linestyle shared for all axes
     * @param properties.outlinestyle OutLinestyle for both lines
     * @param properties.top Linestyle for top corner value line
     * @param properties.left Linestyle for left corner value line
     * @param properties.right Linestyle for right corner value line
     * @param properties.fillstyle fillstyle of the cross-hair (used only with radius)
     * @param properties.radius radius of the cross-hair center target
     * @param properties.symbol symbol of the cross-hair
     * @param properties.textstyle default textstyle shared for all axes
     * @param properties.textstyle.top additional properties for top corner value
     * @param properties.textstyle.top.visible visibility of top corner value
     * @param properties.textstyle.top.padding padding of top corner value
     * @param properties.textstyle.left additional properties for left corner value
     * @param properties.textstyle.left.visible visibility of left corner value
     * @param properties.textstyle.left.padding padding of left corner value
     * @param properties.textstyle.right additional properties for right corner value
     * @param properties.textstyle.right.visible visibility of right corner value
     * @param properties.textstyle.right.padding padding of right corner value
     */
    setProperties(properties?: object | { name?: string; ternarygrid?: TernaryGrid; linestyle?: LineStyle | string | object; outlinestyle?: object | LineStyle; top?: object | LineStyle; left?: object | LineStyle; right?: object | LineStyle; fillstyle?: object | FillStyle; radius?: number; symbol?: SymbolShape; textstyle?: TextStyle | string | object | { top?: object | { visible?: boolean; padding?: number; } ; left?: object | { visible?: boolean; padding?: number; } ; right?: object | { visible?: boolean; padding?: number; } ; } ; } ): this;
    /**
     * Sets the text style of labels
     * @param textStyle for the crosshair labels on screen, either textStyle or
     *                           object with "west", "east", "north", "south", "center" textStyle's
     */
    setTextStyle(textStyle: TextStyle | string | object): this;
    /**
     * Sets left value line style
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setLeftLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * return left value line style
     */
    getLeftLineStyle(): LineStyle;
    /**
     * Sets right value line style
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setRightLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * return right value line style
     */
    getRightLineStyle(): LineStyle;
    /**
     * Sets top value line style
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setTopLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * return top value line style
     */
    getTopLineStyle(): LineStyle;
    /**
     * return visible state
     */
    isVisible(): boolean;
    /**
     * Sets visible
     * @param visible visible attribute set or not
     */
    setVisible(visible: boolean): this;
    /**
     * The current cross hair position
     */
    getPosition(): Point;
    /**
     * Update position of cursor for the last mouse position. This code can be used
     * if content is scrolled to display the position of the cursor in the last mouse position
     * @param silent notification enabled or not
     */
    updateCursorPosition(silent?: boolean): this;
    /**
     * Sets the current position in model coordinates of the manipulator layer
     * @param position current mouse position
     * @param silent notification enabled or not
     * @param eventArgs event args which will be passed to event onPositionChanged
     */
    setPosition(position: Point, silent?: boolean, eventArgs?: EventArgs): this;
    /**
     * sets LabelsTextConverter
     * @param position position of the label to be changed, 'top', 'left' or 'right'
     * @param textConverter function that takes x and y to convert to text for the label
     */
    setLabelsTextConverter(position: string, textConverter: Function): this;
}
