import {CompositeNode} from '../scene/CompositeNode';
import {ITrack} from './ITrack';
import {ILayoutable} from '../layout/ILayoutable';
import {Rect} from '../util/Rect';
import {LogBlock} from './LogBlock';
import {BorderStrategy} from './BorderStrategy';
import {Border} from '../scene/shapes/Border';
import {TrackHighlightStrategy} from './TrackHighlightStrategy';
import {FillStyle} from '../attributes/FillStyle';
import {LineStyle} from '../attributes/LineStyle';
import {TrackContainer} from './TrackContainer';
import {Range} from '../util/Range';
import {IUnitInfo} from './IUnitInfo';
import {RgbaColor} from '../util/RgbaColor';
import {Pattern} from '../attributes/Pattern';
import {RenderingContext} from '../renderer/RenderingContext';
import {StateChanges} from '../scene/Node';
import {Transformation} from '../util/Transformation';
import {LayoutStyle} from '../layout/LayoutStyle';
import {Layer} from '../scene/Layer';

/**
 * The LogTrack is a generic container of Well elements like logcurves, log-axis, log-images, etc.
 * It can be used for various purposes like DepthIndex, TimeIndex or a plain LogCurve container. <br>
 * For example, one could add {@link @int/geotoolkit/axis/Axis.Axis} to a log track to create an index-track, Or add a {@link @int/geotoolkit/welllog/LogLog10ValueGrid.LogLog10ValueGrid} to create a logarithmic display.<br>
 * Track it self is not linear or logarithmic, you can mix regular curve and logarithmic in linear track and logarithmic curve with regular in logarithmic track.<br>
 * <br>
 * Options in the constructor are used to manipulate other properties like border,bounds. A combination of tracks can be displayed by using {@link @int/geotoolkit/welllog/TrackContainer.TrackContainer}.<br>
 * To add a curve to the track simply use addChild,  geotoolkit.welllog.LogTrack.addChild({@link @int/geotoolkit/welllog/LogCurve.LogCurve}). <br>
 * The children are displayed in order you add it in to the track so if you add curve and then lithology, then lithology will be above curve. <br>
 * To change the order you can remove child and add it again or use : <br>
 * track.changeChildOrder(curve, geotoolkit.scene.CompositeNode.NodeOrder.Last); // Please see CompositeNode.prototype.changeChildOrder documentation
 * @example
 * ```javascript
 * import {CssStyle} from '@int/geotoolkit/css/CssStyle';
 * // to modify properties of the border using css.
 * const css = [
 * '.geotoolkit.welllog.LogTrack {',
 *           '   border-linestyle-color: red;',
 *           '   border-linestyle-width: 2;',
 *           '}',
 * ].join('\n');
 * track.setCss(new CssStyle({'css': css}));
 * ```
 * @example
 * ```javascript
 * // This example shows how to reorganize children in a particular track.
 * import {from} from '@int/geotoolkit/selection/from';
 * import {LogCurve} from '@int/geotoolkit/welllog/LogCurve';
 * import {NodeOrder} from '@int/geotoolkit/scene/CompositeNode';
 * from(linearTrack)
 *  .where( (node) => node instanceof LogCurve })
 *  .selectToArray()
 *  .forEach((logCurve) => {
 *        logCurve.getTrack().changeChildOrder(logCurve, NodeOrder.Last);
 *   });
 * widget.getTrackHeader(linearTrack).rebuild();
 * ```
 */
export class LogTrack extends CompositeNode implements ITrack, ILayoutable {
    /**
     * The LogTrack is a generic container of Well elements like logcurves, log-axis, log-images, etc.
     * It can be used for various purposes like DepthIndex, TimeIndex or a plain LogCurve container. <br>
     * For example, one could add {@link @int/geotoolkit/axis/Axis.Axis} to a log track to create an index-track, Or add a {@link @int/geotoolkit/welllog/LogLog10ValueGrid.LogLog10ValueGrid} to create a logarithmic display.<br>
     * Track it self is not linear or logarithmic, you can mix regular curve and logarithmic in linear track and logarithmic curve with regular in logarithmic track.<br>
     * <br>
     * Options in the constructor are used to manipulate other properties like border,bounds. A combination of tracks can be displayed by using {@link @int/geotoolkit/welllog/TrackContainer.TrackContainer}.<br>
     * To add a curve to the track simply use addChild,  geotoolkit.welllog.LogTrack.addChild({@link @int/geotoolkit/welllog/LogCurve.LogCurve}). <br>
     * The children are displayed in order you add it in to the track so if you add curve and then lithology, then lithology will be above curve. <br>
     * To change the order you can remove child and add it again or use : <br>
     * track.changeChildOrder(curve, geotoolkit.scene.CompositeNode.NodeOrder.Last); // Please see CompositeNode.prototype.changeChildOrder documentation
     * @param options 
     * @param options.bounds bounds of the visual
     * @param options.limits model limits
     * @param options.logblock log block
     * @param options.borderstrategy strategy on how to display the border of the track
     * @param options.border outline of the track
     * @param options.border.top state of border on top
     * @param options.border.bottom state of border at bottom
     * @param options.border.left state of border on left
     * @param options.border.right state of border on right
     * @param options.highlightstrategy track highlight strategy
     * @param options.highlight highlight outline of the track
     * @param options.highlight.top state of highlight shape on top
     * @param options.highlight.bottom state of highlight shape at bottom
     * @param options.highlight.left state of highlight shape on left
     * @param options.highlight.right state of highlight shape on right
     * @param options.backgroundcolor background color fill style
     * @param options.linestyle line style or options
     */
    constructor(options?: object | { bounds?: Rect; limits?: Rect; logblock?: LogBlock; borderstrategy?: BorderStrategy; border?: object | { top?: boolean; bottom?: boolean; left?: boolean; right?: boolean; }  | Border; highlightstrategy?: TrackHighlightStrategy; highlight?: object | { top?: boolean; bottom?: boolean; left?: boolean; right?: boolean; }  | Border; backgroundcolor?: FillStyle | string | object; linestyle?: LineStyle | object | string; } );
    /**
     * Invalidate bounds
     * @param bounds if null is provided then cache (if any will be completely refreshed) otherwise only specified rect or node.bounds will be refreshed
     * @param force force invalidation
     */
    invalidateParent(bounds?: Rect | any, force?: boolean): this;
    /**
     * Return parent track container or null
     */
    getTrackContainer(): TrackContainer | any;
    /**
     * Returns visible depth range
     */
    getVisibleDepthLimits(): Range;
    /**
     * Set track width and layout remains tracks
     * @param width a new track width
     */
    setWidth(width: number): this;
    /**
     * Returns track width
     */
    getWidth(): number;
    /**
     * Returns an object that has getDeviceUnit and getScaleUnit functions
     */
    getUnitInfo(): any | object;
    /**
     * Sets the track's unit info object, which holds getDeviceUnit and getScaleUnit functions
     * @param unitInfo track's unit info - device unit and the scaled unit
     */
    setUnitInfo(unitInfo: IUnitInfo): this;
    /**
     * Return an object { left: {boolean}, right: {boolean}, bottom: {boolean}, top: {boolean} };
     * where it is possible to specify the visibility of the each border
     */
    getBorders(): any;
    /**
     * return border visual
     */
    getBorder(): Border;
    /**
     * set borders state
     * @param borders borders
     * @param borders.top state of border on top
     * @param borders.bottom state of border at bottom
     * @param borders.left state of border on left
     * @param borders.right state of border on right
     */
    setBorders(borders: object | { top?: boolean; bottom?: boolean; left?: boolean; right?: boolean; } ): this;
    /**
     * Return border style
     */
    getLineStyle(): LineStyle;
    /**
     * Sets border color
     * Returns this track
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * Return background color
     */
    getFillStyle(): FillStyle;
    /**
     * Sets background fill style
     * Returns this track
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string, merge?: boolean): this;
    /**
     * Render highlight background
     * @param context Rendering Context
     * @param callback callback to be called after fill highlight
     */
    protected fillHighlight(context: RenderingContext, callback?: Function): this;
    /**
     * Render highlight border
     * @param context Rendering Context
     * @param callback callback to be called after stroke highlight
     */
    protected strokeHighlight(context: RenderingContext, callback?: Function): this;
    /**
     * Render highlight shape
     * @param context Rendering Context
     * @param callback callback to be called after highlight renders
     */
    protected renderHighlight(context: RenderingContext, callback?: Function): this;
    /**
     * Update state
     * @param regions optional array to return invalid rectangles
     * @param changes optional parameter to specify a reason of changes
     */
    updateState(regions?: Rect[], changes?: StateChanges | null): this;
    /**
     * Returns current bounds
     */
    getBounds(): Rect;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bound of the node in the parent coordinates
     */
    setBounds(bounds: Rect): this;
    /**
     * Retrieves the world transformation
     * of the spatial.
     */
    getContentsTransform(): Transformation;
    /**
     * Update current transformation
     */
    updateContentsTransform(): void;
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
     * Sets model minimum and maximum depth
     * @param minDepth minimum depth
     * @param maxDepth maximum depth
     */
    setDepthLimits(minDepth: number, maxDepth: number): this;
    /**
     * Returns depth range
     */
    getDepthLimits(): Range;
    /**
     * Returns model limits
     */
    getModelLimits(): Rect;
    /**
     * Return log block
     */
    getBlock(): LogBlock;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {bounds: Rect; limits: Rect; logblock: LogBlock; borderstrategy: BorderStrategy; border: Border; highlightstrategy: TrackHighlightStrategy; highlight: Border | null; backgroundcolor: FillStyle; linestyle: LineStyle} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.bounds bounds of the node in the parent coordinates
     * @param properties.limits model limits
     * @param properties.logblock log block
     * @param properties.borderstrategy border strategy
     * @param properties.border border
     * @param properties.border.top state of border on top
     * @param properties.border.bottom state of border at bottom
     * @param properties.border.left state of border on left
     * @param properties.border.right state of border on right
     * @param properties.highlightstrategy track highlight strategy
     * @param properties.highlight highlight shape
     * @param properties.highlight.top state of highlight shape on top
     * @param properties.highlight.bottom state of highlight shape at bottom
     * @param properties.highlight.left state of highlight shape on left
     * @param properties.highlight.right state of highlight shape on right
     * @param properties.backgroundcolor background color fill style
     * @param properties.linestyle line style or options
     */
    setProperties(properties?: object | { bounds?: Rect; limits?: Rect; logblock?: LogBlock; borderstrategy?: BorderStrategy; border?: object | { top?: boolean; bottom?: boolean; left?: boolean; right?: boolean; }  | Border; highlightstrategy?: TrackHighlightStrategy; highlight?: object | { top?: boolean; bottom?: boolean; left?: boolean; right?: boolean; }  | Border; backgroundcolor?: FillStyle | string | object; linestyle?: LineStyle | object | string; } ): this;
    /**
     * Specify desired layout style
     * @param layoutStyle desired layout style
     * @param merge true if you want to merge layoutStyle with existing attribute, false by default
     */
    setLayoutStyle(layoutStyle: LayoutStyle | object, merge?: boolean): this;
    /**
     * Return desired layout style
     */
    getLayoutStyle(): LayoutStyle;
    /**
     * Invalidate layout
     * @param propagate propagate
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
     * Create a new layer, which always has coordinates from 0 to 1 in horizontal direction
     * @param name name of the layer
     */
    static createLogOverlay(name: string): Layer;
}
