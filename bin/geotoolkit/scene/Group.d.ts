import {CompositeNode} from './CompositeNode';
import {ILayoutable} from '../layout/ILayoutable';
import {Orientation} from '../util/Orientation';
import {Rect} from '../util/Rect';
import {LineStyle} from '../attributes/LineStyle';
import {FillStyle} from '../attributes/FillStyle';
import {SpaceStyle} from '../attributes/SpaceStyle';
import {Layout} from '../layout/Layout';
import {LayoutStyle} from '../layout/LayoutStyle';
import {SizeConstraint} from '../layout/SizeConstraint';
import {ModelLimitsStrategy} from './ModelLimitsStrategy';
import {Node} from './Node';
import {Cache} from './Cache';
import {RenderingContext} from '../renderer/RenderingContext';
import {RgbaColor} from '../util/RgbaColor';
import {Pattern} from '../attributes/Pattern';
import {Transformation} from '../util/Transformation';

/**
 * Defines a group node to be a collection of children nodes.<br>
 * A group has bounds, which specify a position and size in the parent
 * coordinates and has own inner model coordinates. All children nodes use
 * inner model coordinates to specify own location inside the group.<br>
 * The group maps model coordinates to bounds automatically for children.
 * Children can be pre-rendered using {@link @int/geotoolkit/scene/Cache.Cache} strategy.<br>
 * It means that system renders children to cache and cache to display. As a rule a cache is a
 * raster image.<br>
 * If a child is changed then you need to rebuild group to refresh representation.
 */
export class Group extends CompositeNode implements ILayoutable {
    /**
     * Defines a group node to be a collection of children nodes.<br>
     * A group has bounds, which specify a position and size in the parent
     * coordinates and has own inner model coordinates. All children nodes use
     * inner model coordinates to specify own location inside the group.<br>
     * The group maps model coordinates to bounds automatically for children.
     * Children can be pre-rendered using {@link @int/geotoolkit/scene/Cache.Cache} strategy.<br>
     * It means that system renders children to cache and cache to display. As a rule a cache is a
     * raster image.<br>
     * If a child is changed then you need to rebuild group to refresh representation.
     * @param options options
     * @param options.verticalflip vertical axis goes from bottom to top
     * @param options.horizontalflip horizontal axis goes from right to left
     * @param options.contentorientation content orientation
     * @param options.pickingchildren enable picking children
     * @param options.modellimits define inner model coordinates of the group
     * @param options.bounds define position of the group in the parent
     * @param options.linestyle line style
     * @param options.fillstyle fill style
     * @param options.padding It has properties for specifying the padding for each side
     * @param options.padding.top top padding
     * @param options.padding.bottom top padding
     * @param options.padding.right right padding
     * @param options.padding.left left padding
     * @param options.layout layout to be set
     * @param options.layoutstyle layout style to be used for parent layout
     * @param options.layoutstyle.left left position
     * @param options.layoutstyle.right right position
     * @param options.layoutstyle.width width
     * @param options.layoutstyle.height height
     * @param options.layoutstyle.top top position
     * @param options.layoutstyle.bottom bottom position
     * @param options.layoutstyle.constraint layout constrains
     * @param options.layoutstyle.minheight minimum height
     * @param options.layoutstyle.maxheight maximum height
     * @param options.layoutstyle.minwidth minimum width
     * @param options.layoutstyle.maxwidth maximum width
     * @param options.automodellimitsmode auto model limits mode
     * @param options.automodellimitsstrategy auto model limits strategy
     */
    constructor(options?: object | { verticalflip?: boolean; horizontalflip?: boolean; contentorientation?: Orientation; pickingchildren?: boolean; modellimits?: Rect | any; bounds?: Rect | any; linestyle?: LineStyle | object | string | any; fillstyle?: FillStyle | object | string | any; padding?: object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; }  | SpaceStyle; layout?: Layout; layoutstyle?: LayoutStyle | object | { left?: number | string; right?: number | string; width?: number | string; height?: number | string; top?: number | string; bottom?: number | string; constraint?: SizeConstraint; minheight?: number | string; maxheight?: number | string; minwidth?: number | string; maxwidth?: number | string; } ; automodellimitsmode?: boolean; automodellimitsstrategy?: ModelLimitsStrategy; } );
    /**
     * specify desired layout style
     * @param layoutStyle desired layout style
     * @param silent silent setting
     * @param merge true if you want to merge layoutStyle with existing attribute, false by default
     */
    setLayoutStyle(layoutStyle: LayoutStyle | object, silent?: boolean, merge?: boolean): this;
    /**
     * return desired layout style
     */
    getLayoutStyle(): LayoutStyle;
    /**
     * Return preferred size to layout children
     */
    getPreferredSize(): Rect;
    /**
     * Returns desired width of the group as a layoutable object.
     * This method is a helper method to get access to getLayoutStyle()
     */
    getDesiredWidth(): string | number;
    /**
     * Sets desired width of the group as a layoutable object
     * @param value desired width to set
     * @param silent silent setting
     */
    setDesiredWidth(value: string | number, silent?: boolean): this;
    /**
     * Returns desired height of the group as a layoutable object
     * This method is a helper method to get access to getLayoutStyle()
     */
    getDesiredHeight(): string | number;
    /**
     * Sets desired height of the group as a layoutable object
     * @param value desired height to set
     * @param silent silent setting
     */
    setDesiredHeight(value: string | number, silent?: boolean): this;
    /**
     * Associate layout with a group.
     * @param layout layout instance to be set or layout properties to apply
     */
    setLayout(layout: Layout | object): this;
    /**
     * Returns layout associated with the group
     */
    getLayout(): Layout;
    /**
     * Updates layout(s)
     * @remarks fires {@link @int/geotoolkit/layout/Events~Events~LayoutUpdated}
     * @param targets optional parameter about which element to layout
     */
    updateLayout(targets?: Node[]): this;
    /**
     * Notify that layout is invalidated. Send event {@link @int/geotoolkit/layout/Events.Events.LayoutInvalidated}
     * @param propagate propagate invalidate layout to parent
     */
    invalidateLayout(propagate?: boolean): this;
    /**
     * Return true if layout is invalid
     */
    isLayoutInvalidated(): boolean;
    /**
     * Set invalidation status
     * @param invalidated invalidated layout
     */
    protected setLayoutInvalidated(invalidated: boolean): void;
    /**
     * Return true if the representation is flipped vertically
     */
    isVerticalFlip(): boolean;
    /**
     * Set vertical flip of the representation
     * @param flip flag to set the vertical flip of the representation
     */
    setVerticalFlip(flip: boolean): this;
    /**
     * Return true if the representation is flipped horizontally
     */
    isHorizontalFlip(): boolean;
    /**
     * Set horizontal flip of the representation
     * @param enable enable flip
     */
    setHorizontalFlip(enable: boolean): this;
    /**
     * Sets cache to be used to cache
     * @param cache cache to be used
     * @param rebuild rebuild cache
     */
    setCache(cache: Cache, rebuild?: boolean): this;
    /**
     * Return cache strategy to be used to cache children nodes
     */
    getCache(): Cache;
    /**
     * Clear cache
     */
    clearCache(): this;
    /**
     * Dispose node. Clear all listeners
     * and disconnect style to avoid memory
     * leaks
     */
    dispose(): void;
    /**
     * Render node in asynchronous mode. This implementation doesn't support cache for now.
     * @param context The rendering context to be used to draw the node
     * @param callback callback function
     */
    renderAsync(context: RenderingContext, callback: Function): void;
    /**
     * Render group
     * @param context context to render group
     */
    render(context: RenderingContext): void;
    /**
     * Render overlays on top of cache. This method does nothing, but can be implemented to render
     * graphics on top of cache and between borders
     * @param context context to render overlays
     */
    protected renderOverlays(context: RenderingContext): this;
    /**
     * Render overlays on top of cache in asynchronous mode. This method calls renderOverlays
     * @param context context to render overlays
     * @param callback callback function
     */
    protected renderOverlaysAsync(context: RenderingContext, callback: Function): void;
    /**
     * Render background
     * @param context context to render background
     * @param bounds group bounds
     */
    protected renderBackground(context: RenderingContext, bounds: Rect): this;
    /**
     * Draws a rectangle at the bounding box (in parent coordinates)
     * @param localContext The local rendering context
     * @param bounds group bounds
     */
    protected drawBorder(localContext: RenderingContext, bounds?: Rect): this;
    /**
     * Return border style
     */
    getLineStyle(): LineStyle;
    /**
     * Sets border color
     * Returns this
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * Return fill style
     */
    getFillStyle(): FillStyle;
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
     * Rebuild node. This method resets state, cache, and invalidate node.
     * @param force optional boolean parameter that can force invalidation
     */
    rebuild(force?: boolean): this;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bound of the node in the parent coordinates
     */
    setBounds(bounds: Rect | object): this;
    /**
     * Sets inner model limits
     * @param limits inner limits
     */
    setModelLimits(limits: Rect): this;
    /**
     * Get the bounds in the parents model space. If bounds are not set,
     * then parent model limits are used.
     */
    getBounds(): Rect | any;
    /**
     * Gets model limits, the limits of this groups inside space
     */
    getModelLimits(): Rect | any;
    /**
     * Invalidate node
     * @param bounds optional rectangular area to be invalidated, or force flag if rectangle is empty
     * @param force optional boolean parameter that can force invalidation
     */
    invalidate(bounds?: Rect, force?: boolean): this;
    /**
     * Invalidate parent area
     * @param bounds area to invalidate
     * @param force force
     */
    invalidateParent(bounds?: Rect, force?: boolean): this;
    /**
     * Return state of suspend state
     */
    updateSuspended(): boolean;
    /**
     * Suspend auto update
     */
    suspendUpdate(): this;
    /**
     * Resume auto update
     * @param rebuild force rebuild
     */
    resumeUpdate(rebuild?: boolean): this;
    /**
     * <code>getContentsTransform()</code> retrieves the world transformation
     * of the node.
     */
    getContentsTransform(): Transformation;
    /**
     * Return content orientation
     */
    getContentOrientation(): Orientation;
    /**
     * Set content orientation
     * @param orientation content orientation
     */
    setContentOrientation(orientation: Orientation): this;
    /**
     * Set Model Limits Logics to use when no Model Limits have been set
     * set to true: will use parents width and height, starting at 0
     * set to false: will use parents bounds. This is convenient method. It
     * creates @see {geotoolkit.scene.AutoModelLimitsStrategy}
     * @param mode Model Limits Logics to be used
     */
    setAutoModelLimitsMode(mode: boolean): this;
    /**
     * Set Model Limits Logics Strategy
     * @param strategy Model Limits logic strategy to use
     */
    setAutoModelLimitsStrategy(strategy: ModelLimitsStrategy): this;
    /**
     * Get Model Limits Logics Strategy
     */
    getAutoModelLimitsStrategy(): ModelLimitsStrategy;
    /**
     * Get Model Limits Logics to use when no Model Limits have been set
     * set to true: will use parents width and height, starting at 0
     * set to false: will use parents bounds
     */
    getAutoModelLimitsMode(): boolean;
    /**
     * Returns if picking children is enabled or not for this node.
     */
    isPickingChildrenEnabled(): boolean;
    /**
     * Enables or disables picking children
     * @param enable enable picking children
     */
    enablePickingChildren(enable: boolean): this;
    /**
     * Sets padding style
     * @param paddingStyle padding style
     * @param merge true if you want to merge paddingStyle with existing attribute, false by default
     */
    setPaddingStyle(paddingStyle: SpaceStyle | object, merge?: boolean): this;
    /**
     * Return padding style
     */
    getPaddingStyle(): SpaceStyle | null;
    /**
     * Return area without paddings. Model limits are
     * mapped to content area, where children are layout.
     * @param transformation scene transformation
     */
    getContentsArea(transformation?: Transformation): Rect;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {bounds: Rect; modellimits: Rect; verticalflip: boolean; horizontalflip: boolean; contentorientation: Orientation; pickingchildren: boolean; linestyle: LineStyle; fillstyle: FillStyle; layoutstyle: LayoutStyle; layout: Layout; padding: SpaceStyle; automodellimitsmode: boolean; automodellimitsstrategy: ModelLimitsStrategy} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.verticalflip vertical flip of the group
     * @param properties.horizontalflip horizontal flip of the group
     * @param properties.contentorientation content orientation
     * @param properties.pickingchildren enable picking children
     * @param properties.modellimits modellimits of the group
     * @param properties.bounds bounds of the group
     * @param properties.linestyle line style
     * @param properties.fillstyle fill style
     * @param properties.padding padding
     * @param properties.padding.top top padding
     * @param properties.padding.bottom top padding
     * @param properties.padding.right right padding
     * @param properties.padding.left left padding
     * @param properties.layout layout to be set
     * @param properties.layoutstyle layout style
     * @param properties.layoutstyle.left left position
     * @param properties.layoutstyle.right right position
     * @param properties.layoutstyle.width width
     * @param properties.layoutstyle.height height
     * @param properties.layoutstyle.top top position
     * @param properties.layoutstyle.bottom bottom position
     * @param properties.layoutstyle.constraint layout constrains
     * @param properties.layoutstyle.minheight minimum height
     * @param properties.layoutstyle.maxheight maximum height
     * @param properties.layoutstyle.minwidth minimum width
     * @param properties.layoutstyle.maxwidth maximum width
     * @param properties.automodellimitsmode auto model limits mode
     * @param properties.automodellimitsstrategy auto model limits strategy
     */
    setProperties(properties: object | { verticalflip?: boolean; horizontalflip?: boolean; contentorientation?: Orientation; pickingchildren?: boolean; modellimits?: Rect | any; bounds?: Rect | any; linestyle?: LineStyle | object | string | any; fillstyle?: FillStyle | object | string | any; padding?: object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; }  | SpaceStyle; layout?: Layout; layoutstyle?: LayoutStyle | object | { left?: number | string; right?: number | string; width?: number | string; height?: number | string; top?: number | string; bottom?: number | string; constraint?: SizeConstraint; minheight?: number | string; maxheight?: number | string; minwidth?: number | string; maxwidth?: number | string; } ; automodellimitsmode?: boolean; automodellimitsstrategy?: ModelLimitsStrategy; } ): this;
}
