import {Point} from '../../util/Point';
import {Node} from '../../scene/Node';
import {AbstractTool} from './AbstractTool';
import {CompositeNode} from '../../scene/CompositeNode';
import {LineStyle} from '../../attributes/LineStyle';
import {TextStyle} from '../../attributes/TextStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {SymbolShape} from '../../scene/shapes/SymbolShape';
import {RgbaColor} from '../../util/RgbaColor';
import {AnnotationLocation} from '../../layout/AnnotationLocation';
import {AnchorType} from '../../util/AnchorType';
import {SpaceStyle} from '../../attributes/SpaceStyle';
import {EventArgs} from './EventArgs';

/**
 * Select target from scene.
 * @example
 * ```javascript
 * import {Selector} from '@int/geotoolkit/selection/Selector';
 * crosshair.setSelectTargetCallback((point) => {
 *     const nodes = Selector.select(plot.getRoot(), point.getX(), point.getY(), 1) || [];
 *     for (let i = 0; i < nodes.length; i++) {
 *         const node = nodes[i];
 *         if (node.getName() === 'ghost_node') { // skip special nodes
 *             continue;
 *         }
 *         if (node.getName() === 'my_node') {
 *             return node;
 *         }
 *     }
 *     return null;
 * });
 * ```
 */
export type selectTargetCallback = (point: Point) => Node | any;
/**
 * Creates a CrossHair tool. The tool supports events shown below. It provides builtin functions to customise the styles for the tool and its labels.
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
export class CrossHair extends AbstractTool {
    /**
     * Creates a CrossHair tool. The tool supports events shown below. It provides builtin functions to customise the styles for the tool and its labels.
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
     * @param options.linestyle default linestyle shared for all orientations.
     * @param options.textstyle default textstyle shared for all orientations.
     * @param options.outlinestyle OutLinestyle for both lines
     * @param options.horizontal Linestyle for horizontal line
     * @param options.vertical Linestyle for vertical line
     * @param options.fillstyle fillstyle of the cross-hair (used only with radius)
     * @param options.radius radius of the cross-hair center target
     * @param options.symbol symbol of the cross-hair
     * @param options.north JSON for north label. See setLabelSettings for more details
     * @param options.south JSON for south label. See setLabelSettings for more details
     * @param options.east JSON for east label. See setLabelSettings for more details
     * @param options.west JSON for west label. See setLabelSettings for more details
     * @param options.center JSON for center label. See setLabelSettings for more details
     * @param options.center.labelsoffset central labels offset relative to mouse position
     * @param options.center.labelsoffset.x x-offset in pixels
     * @param options.center.labelsoffset.y y-offset in pixels
     * @param options.center.lockx lock x position, can be useful if vertical cursor is hidden
     * @param options.center.locky lock y position, can be useful if horizontal cursor is hidden
     * @param options.keeporientation preserve annotation's orientation of labels for different
     * @param options.labels if 'none' of false - do not create labels
     * @param name name of the tool
     * @param properties deprecated since 2021.1 (3.3), use first argument instead
     */
    constructor(options?: CompositeNode | object | { name?: string; linestyle?: LineStyle | string | object; textstyle?: TextStyle | string | object; outlinestyle?: object | LineStyle; horizontal?: object | LineStyle; vertical?: object | LineStyle; fillstyle?: object | FillStyle; radius?: number; symbol?: SymbolShape; north?: any; south?: any; east?: any; west?: any; center?: object | { labelsoffset?: object | { x?: number; y?: number; } ; lockx?: boolean; locky?: boolean; } ; keeporientation?: boolean; labels?: string | boolean; } , name?: string, properties?: any);
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
    getProperties(): {linestyle: LineStyle; textstyle: TextStyle; outlinestyle: LineStyle; horizontal: LineStyle; vertical: LineStyle; fillstyle: FillStyle; radius: number; symbol: SymbolShape; north: any; south: any; east: any; west: any; center: {labelsoffset: {x: number; y: number}; lockx: boolean; locky: boolean}; keeporientation: boolean; labels: string | boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.name name of the tool
     * @param properties.linestyle Linestyle for both lines
     * @param properties.textstyle default textstyle shared for all orientations.
     * @param properties.outlinestyle OutLinestyle for both lines
     * @param properties.horizontal Linestyle for horizontal line
     * @param properties.vertical Linestyle for vertical line
     * @param properties.fillstyle fillstyle of the cross-hair (used only with radius)
     * @param properties.radius radius of the cross-hair center target
     * @param properties.symbol symbol of the cross-hair
     * @param properties.north JSON for north label. See setLabelSettings for more details
     * @param properties.south JSON for south label. See setLabelSettings for more details
     * @param properties.east JSON for east label. See setLabelSettings for more details
     * @param properties.west JSON for west label. See setLabelSettings for more details
     * @param properties.center JSON for center label. See setLabelSettings for more details
     * @param properties.center.labelsoffset central labels offset relative to mouse position
     * @param properties.center.labelsoffset.x x-offset in pixels
     * @param properties.center.labelsoffset.y y-offset in pixels
     * @param properties.center.lockx lock x position, can be useful if vertical cursor is hidden
     * @param properties.center.locky lock y position, can be useful if horizontal cursor is hidden
     * @param properties.keeporientation preserve annotation's orientation of labels for different
     * axis direction. It means 'north' is always on 'top' and 'west' is on the left side. It is false for compatibility.
     * @param properties.labels option to display labels. if 'none' or false is specified labels are not exist
     */
    setProperties(properties?: object | { name?: string; linestyle?: LineStyle | string | object; textstyle?: TextStyle | string | object; outlinestyle?: object | LineStyle; horizontal?: object | LineStyle; vertical?: object | LineStyle; fillstyle?: object | FillStyle; radius?: number; symbol?: SymbolShape; north?: any; south?: any; east?: any; west?: any; center?: object | { labelsoffset?: object | { x?: number; y?: number; } ; lockx?: boolean; locky?: boolean; } ; keeporientation?: boolean; labels?: string | boolean; } ): this;
    /**
     * @deprecated since 2021.1 (3.3), use method setProperties instead
     * @param settings settings
     * @param settings.enabled enabled state
     * @param settings.linestyle Linestyle for both lines
     * @param settings.outlinestyle OutLinestyle for both lines
     * @param settings.horizontal Linestyle for horizontal line
     * @param settings.vertical Linestyle for vertical line
     * @param settings.fillstyle fillstyle of the cross-hair (used only with radius)
     * @param settings.radius radius of the cross-hair center target
     * @param settings.symbol symbol of the cross-hair
     * @param settings.north JSON for north label. See setLabelSettings for more details
     * @param settings.south JSON for south label. See setLabelSettings for more details
     * @param settings.east JSON for east label. See setLabelSettings for more details
     * @param settings.west JSON for west label. See setLabelSettings for more details
     * @param settings.center JSON for center label. See setLabelSettings for more details
     * @param settings.center.labelsoffset central labels offset relative to mouse position
     * @param settings.center.labelsoffset.x x-offset in pixels
     * @param settings.center.labelsoffset.y y-offset in pixels
     * @param settings.center.lockx lock x position, can be useful if vertical cursor is hidden
     * @param settings.center.locky lock y position, can be useful if horizontal cursor is hidden
     * @param settings.keeporientation preserve annotation's orientation of labels for different
     * axis direction. It means 'north' is always on 'top' and 'west' is on the left side. It is false for compatibility.
     * @param settings.labels option to display labels. if 'none' or false is specified labels are not exist
     */
    setSettings(settings: object | { enabled?: boolean; linestyle?: object | LineStyle; outlinestyle?: object | LineStyle; horizontal?: object | LineStyle; vertical?: object | LineStyle; fillstyle?: object | FillStyle; radius?: number; symbol?: SymbolShape; north?: object; south?: object; east?: object; west?: object; center?: object | { labelsoffset?: object | { x?: number; y?: number; } ; lockx?: boolean; locky?: boolean; } ; keeporientation?: boolean; labels?: string | boolean; } ): this;
    /**
     * Gets settings for one label
     * @param orientation label orientation
     */
    getLabelSettings(orientation: AnnotationLocation): {textstyle: TextStyle; fillstyle: FillStyle; linestyle: LineStyle; visible: boolean; alignment: AnchorType; padding: number; radius: number; textconverter: Function} | object;
    /**
     * Set Settings for one label
     * @param orientation label orientation
     * @param settings JSON to configure label
     * @param settings.textstyle text style of the text
     * @param settings.fillstyle fill style of the text
     * @param settings.linestyle line style of the text border
     * @param settings.visible visibility of the text
     * @param settings.alignment alignment of the text
     * @param settings.padding padding between the text and the border
     * @param settings.radius radius of the text shape border
     * @param settings.offset label offset between the text and cross-hair cursor, use padding in case of undefined
     * @param settings.textconverter strategy to convert x,y to text
     */
    setLabelSettings(orientation: AnnotationLocation, settings?: object | { textstyle?: object | TextStyle; fillstyle?: object | FillStyle; linestyle?: object | LineStyle; visible?: boolean; alignment?: AnchorType; padding?: number; radius?: number; offset?: number | object | SpaceStyle; textconverter?: Function; } ): this;
    /**
     * Sets the text style of labels
     * @param textStyle for the crosshair labels on screen, either textStyle or
     *                           object with "west", "east", "north", "south", "center" textStyle's
     */
    setTextStyle(textStyle: TextStyle | string | object): this;
    /**
     * Sets vertical line style
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setVerticalLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * return vertical line style
     */
    getVerticalLineStyle(): LineStyle;
    /**
     * Sets vertical line style
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setHorizontalLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * return horizontal line style
     */
    getHorizontalLineStyle(): LineStyle;
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
     * @param position position of the label to be changed
     * @param textConverter function that takes x and y to convert to text for the label
     */
    setLabelsTextConverter(position: LabelPositions, textConverter: Function): this;
    /**
     * Sets callback for selecting target Node from scene
     * @param callback function that takes current mouse position and returns target for crosshair
     */
    setSelectTargetCallback(callback: selectTargetCallback): this;
    /**
     * Returns current target
     */
    getTarget(): Node | null;
}
/**
 * CrossHair Events
 */
export enum Events {
    /**
     * onPositionChanged
     */
    onPositionChanged = 'onPositionChanged',
    /**
     * onPointerUp
     */
    onPointerUp = 'onPointerUp',
    /**
     * onPointerDown
     */
    onPointerDown = 'onPointerDown'
}
/**
 * enum about label positions
 */
export type LabelPositions = any;

/**
 * enum about line orientation
 */
export type LineOrientations = any;

