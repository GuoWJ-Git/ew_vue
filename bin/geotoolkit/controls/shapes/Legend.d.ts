import {AnchoredShape} from '../../scene/shapes/AnchoredShape';
import {INodeEnumerable} from '../../scene/INodeEnumerable';
import {Collection} from '../../util/Collection';
import {SpaceStyle} from '../../attributes/SpaceStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {AnchorType} from '../../util/AnchorType';
import {Dimension} from '../../util/Dimension';
import {Rect} from '../../util/Rect';
import {Transformation} from '../../util/Transformation';
import {Node} from '../../scene/Node';
import {Iterator} from '../../util/iterator';
import {Layout} from '../../layout/Layout';
import {RgbaColor} from '../../util/RgbaColor';
import {Pattern} from '../../attributes/Pattern';

/**
 * This class defines a legend container in which legends items are laid out using specified layout.
 * Items can be located in the legend vertically using geotoolkit.layout.VerticalPriorityLayout() or
 * horizontally using geotoolkit.layout.HorizontalPriorityLayout() or in any location inside the legend with other layout or manually.
 * The legend has an anchor position in the parent coordinates and width and height of the legend in model
 * or device coordinates. This position can be specified with setAnchor method and size with setSize method. In addition
 * it is possible to use automatic calculation of the legend size, which is supported for device size legend only.
 * Legends can be customized using setOptions().
 * @example
 * ```javascript
 * // Example of creating a legend with automatic size calculation in the device coordinates
 * import {Collection} from '@int/geotoolkit/util/Collection';
 * import {SymbolLegendItem} from '@int/geotoolkit/controls/shapes/SymbolLegendItem';
 * import {HorizontalLinePainter} from '@int/geotoolkit/scene/shapes/painters/HorizontalLinePainter';
 * import {Legend} from '@int/geotoolkit/controls/shapes/Legend';
 * import {AnchorType} from '@int/geotoolkit/util/AnchorType';
 * import {Point} from '@int/geotoolkit/util/Point';
 * import {VerticalPriorityLayout} from '@int/geotoolkit/layout/VerticalPriorityLayout';
 * const dataCollection = new Collection();
 * dataCollection.add(new SymbolLegendItem(null, {
 *   'text': 'Item',
 *   'textstyle': {'font': '12px Arial'},
 *   'symbol': {
 *       'painter': HorizontalLinePainter,
 *       'width': 10,
 *       'height': 10,
 *       'linestyle': {'color': 'red' }
 *   }
 * }));
 * const legendShape = new Legend({
 *   'data': dataCollection,
 *   'linestyle': {'color': 'red'}
 *   'sizeisindevicespace': true,
 *   'alignment': AnchorType.Center,
 *   'autosize': true
 * });
 * legendShape.setAnchor(new Point(40, 10));
 * legendShape.setLayout(new VerticalPriorityLayout());
 * ```
 * @example
 * ```javascript
 * // Example of creating a legend with manual size in model coordinates
 * const legendShape = new Legend({
 *   'data': dataCollection,
 *   'linestyle': {'color': 'red'}
 *   'sizeisindevicespace': false,
 *   'alignment': AnchorType.Center
 * });
 * legendShape.setAnchor(new Point(0.5, 0.5));
 * legendShape.setSize(0.5, 0.5);
 * legendShape.setLayout(new VerticalPriorityLayout());
 * ```
 */
export class Legend extends AnchoredShape implements INodeEnumerable {
    /**
     * This class defines a legend container in which legends items are laid out using specified layout.
     * Items can be located in the legend vertically using geotoolkit.layout.VerticalPriorityLayout() or
     * horizontally using geotoolkit.layout.HorizontalPriorityLayout() or in any location inside the legend with other layout or manually.
     * The legend has an anchor position in the parent coordinates and width and height of the legend in model
     * or device coordinates. This position can be specified with setAnchor method and size with setSize method. In addition
     * it is possible to use automatic calculation of the legend size, which is supported for device size legend only.
     * Legends can be customized using setOptions().
     * @param options options
     * @param options.data collection containing an array or an array itself of {@link @int/geotoolkit/controls/shapes/LegendItem.LegendItem} and/or {@link @int/geotoolkit/controls/shapes/ShapeLegendAdapter.ShapeLegendAdapter} elements
     * @param options.autosize auto size to calculate device size of the legend. it doesn't work if legend in the model space.
     * @param options.padding It has properties for specifying the padding for each side of an legend
     * @param options.padding.top top padding in pixels
     * @param options.padding.bottom top padding  in pixels
     * @param options.padding.right right padding  in pixels
     * @param options.padding.left left padding  in pixels
     */
    constructor(options: object | { data?: Collection | any[]; autosize?: boolean; padding?: object | { top?: number; bottom?: number; right?: number; left?: number; }  | SpaceStyle; } );
    /**
     * Sets padding style
     * @param paddingStyle padding style
     * @param merge true if you want to merge paddingStyle with existing attribute, false by default
     */
    setPaddingStyle(paddingStyle: SpaceStyle | object, merge?: boolean): this;
    /**
     * Return padding style
     */
    getPaddingStyle(): SpaceStyle;
    /**
     * Sets visualization options
     * @param options options
     * @param options.data collection containing an array or an array itself of
     * {@link @int/geotoolkit/controls/shapes/LegendItem.LegendItem} and/or {@link @int/geotoolkit/controls/shapes/ShapeLegendAdapter.ShapeLegendAdapter} elements
     * @param options.linestyle whole legend line style
     * @param options.fillstyle whole legend fill style
     * @param options.sizeisindevicespace is width and height of the legend in device space
     * @param options.preserveaspectratio preserve aspect ratio of the legend
     * @param options.ispointingup pointing up
     * @param options.preservereadingorientation preserve reading orientation for local transform
     * @param options.alignment alignment according of the anchor point
     * @param options.mindimension minimum size for rendering
     * @param options.maxdimension maximum size for rendering
     * @param options.width legend width (it is ignored if autosize is true)
     * @param options.height legend height (it is ignored if autosize is true)
     * @param options.autosize auto size to calculate device size of the legend. it doesn't work if legend in the model space.
     * @param options.padding It has properties for specifying the padding for each side of an legend
     * @param options.padding.top top padding in pixels
     * @param options.padding.bottom top padding  in pixels
     * @param options.padding.right right padding  in pixels
     * @param options.padding.left left padding  in pixels
     */
    setOptions(options: object | { data?: Collection | any[]; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; sizeisindevicespace?: boolean; preserveaspectratio?: boolean; ispointingup?: boolean; preservereadingorientation?: boolean; alignment?: AnchorType; mindimension?: Dimension; maxdimension?: Dimension; width?: number; height?: number; autosize?: boolean; padding?: object | { top?: number; bottom?: number; right?: number; left?: number; }  | SpaceStyle; } ): this;
    /**
     * Return the collection of SymbolLegendItem {@link @int/geotoolkit/controls/shapes/SymbolLegendItem.SymbolLegendItem} to be displayed
     */
    getData(): Collection;
    /**
     * Sets bounds of the node in the parent coordinates. This method
     * takes anchor position and width and height if size is not in device space
     * @param bounds bound of the node in the parent coordinates
     */
    setBounds(bounds: Rect | object): this;
    /**
     * dispose
     */
    dispose(): void;
    /**
     * Return device area occupied by legend shape
     * @param legendToDevice transformation of the unit rectangle [0,0,1,1] to device
     */
    getLegendDeviceSize(legendToDevice: Transformation): Rect;
    /**
     * Add a child node
     * @param node the child node to be added
     */
    protected addChild(node: Node | Node[] | Iterator): this;
    /**
     * Return iterator by child nodes
     * @param filter a filter function. Returns all nodes if null
     */
    protected getChildren(filter?: Function): Iterator;
    /**
     * Remove child node
     * @param node node or array of nodes to be removed
     */
    protected removeChild(node: Node | Node[]): this;
    /**
     * Remove all child nodes from this composite group
     * @param disposeChildren automatically dispose children. If it is
     * true then method dispose is called for each child.
     */
    protected clearChildren(disposeChildren?: boolean): this;
    /**
     * Sets inner model limits for legends' items
     * @param limits inner limits
     */
    setModelLimits(limits: Rect): this;
    /**
     * Returns if clipping is enabled or not for this node.
     */
    isClippingEnabled(): boolean;
    /**
     * Enables or disables clipping of this node. If enabled,
     * shapes will not be rendered outside of its bounds.
     * @param doClip enable clipping on this node
     */
    enableClipping(doClip: boolean): this;
    /**
     * Gets model limits, the limits of this groups inside space
     */
    getModelLimits(): Rect | any;
    /**
     * Associate layout with a group.
     * @param layout layout to be set
     */
    setLayout(layout: Layout): this;
    /**
     * Returns layout associated with the group
     */
    getLayout(): Layout;
    /**
     * Updates layout(s)
     * @param targets optional parameter about which element to layout
     */
    updateLayout(targets?: Node[]): this;
    /**
     * Sets fill style
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle | string | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; } , merge?: boolean): this;
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
     * Gets all the properties pertaining to this object
     */
    getProperties(): {data: Collection; autosize: boolean; padding: SpaceStyle} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.data collection containing an array or an array itself of {@link @int/geotoolkit/controls/shapes/LegendItem.LegendItem} and/or {@link @int/geotoolkit/controls/shapes/ShapeLegendAdapter.ShapeLegendAdapter} elements
     * @param properties.autosize auto size to calculate device size of the legend. it doesn't work if legend in the model space.
     * @param properties.padding It has properties for specifying the padding for each side of an legend
     * @param properties.padding.top top padding in pixels
     * @param properties.padding.bottom top padding  in pixels
     * @param properties.padding.right right padding  in pixels
     * @param properties.padding.left left padding  in pixels
     */
    setProperties(properties: object | { data?: Collection | any[]; autosize?: boolean; padding?: object | { top?: number; bottom?: number; right?: number; left?: number; }  | SpaceStyle; } ): this;
    /**
     * Returns desired width of the group as a layoutable object.
     * This method is a helper method to get access to getLayoutStyle()
     */
    getDesiredWidth(): string | number;
    /**
     * Sets desired width of the group as a layoutable object
     * @param value desired width to set
     */
    setDesiredWidth(value: string | number): this;
    /**
     * Returns desired height of the group as a layoutable object
     * This method is a helper method to get access to getLayoutStyle()
     */
    getDesiredHeight(): string | number;
    /**
     * Sets desired height of the group as a layoutable object
     * @param value desired height to set
     */
    setDesiredHeight(value: string | number): this;
    /**
     * Enumerate children nodes
     * @param callback callback
     * @param target target
     */
    enumerateNodes(callback: Function, target: any): void;
}
