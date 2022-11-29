import {AbstractNode} from '../../scene/AbstractNode';
import {Node} from '../../scene/Node';
import {TextStyle} from '../../attributes/TextStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {Rect} from '../../util/Rect';
import {SpaceStyle} from '../../attributes/SpaceStyle';
import {LayoutStyle} from '../../layout/LayoutStyle';
import {RgbaColor} from '../../util/RgbaColor';
import {AnchorType} from '../../util/AnchorType';
import {Text} from '../../scene/shapes/Text';
import {Pattern} from '../../attributes/Pattern';
import {RenderingContext} from '../../renderer/RenderingContext';
import {Transformation} from '../../util/Transformation';
import {LogAbstractVisual} from '../LogAbstractVisual';
import {Dimension} from '../../util/Dimension';

/**
 * Define an abstract implementation of visual header.
 * NOTE: Custom LogVisualHeader implementation MUST override "clone" operation for
 * LogVisualHeaderProvider to be able to create new header instance(s) internally.
 * This is a base class for all visual headers.
 * @example
 * ```javascript
 * // This example shows how to create a custom header for a curve, it displays just a curve name.
 * import {setClassName} from '@int/geotoolkit/base';
 * import {LogVisualHeader} from '@int/geotoolkit/welllog/header/LogVisualHeader';
 * import {Transformation} from '@int/geotoolkit/util/Transformation';
 * import {obfuscate} from '@int/geotoolkit/lib';
 * import {TextStyle} from '@int/geotoolkit/attributes/TextStyle';
 * import {Rect} from '@int/geotoolkit/util/Rect';
 * import {LogCurve} from '@int/geotoolkit/welllog/LogCurve';
 * class CustomCurveVisualHeader extends LogVisualHeader {
 *    constructor (options) {
 *        super(options);
 *        this.setTextStyle(new TextStyle('rgb(0,0,0)', 'middle', 'left', '11px sans-serif'));
 *        this.setModelLimits(new Rect(0, 0, 100, 40));
 *    }
 *    render (inputContext) {
 *        const context = this.getWorldTransform() != null ? inputContext.pushTransformation(this.getWorldTransform()) : inputContext;
 *        const rc = this.getModelLimits();
 *        if (rc != null) {
 *          const curve = this.getVisual();
 *          const curveName = curve.getName();
 *          context.setTextStyle(this.getTextStyle().clone().setAlignment('center').setBaseLine('top'));
 *          const oldTr = context.getTransformation();
 *          // transform anchor coordinates to device
 *          const pos = oldTr.transformXY(rc.getCenterX(), rc.getTop());
 *          // Sets identity transformation
 *          context.setTransformation(new Transformation());
 *          context.drawText(pos.getX(), pos.getY(), curveName);
 *          // restore transformation
 *          context.setTransformation(oldTr);
 *        }
 *   }
 *   clone () {
 *       return new CustomCurveVisualHeader(this.getVisual())
 *            .copyConstructor(this, true);
 *   }
 * }
 * setClassName(CustomCurveVisualHeader, 'CustomCurveVisualHeader');
 * // Allows using obfuscated toolkit
 * obfuscate(CustomCurveVisualHeader, LogVisualHeader);
 * // In the next step you can register it for all curves or for an instance of the curve in the header provider. For example for all LogCurves you can use the following code:
 * const headerProvider = widget.getHeaderContainer().getHeaderProvider();
 * headerProvider.registerHeaderProvider(LogCurve.getClassName(), new CustomCurveVisualHeader(null));
 * ```
 */
export class LogVisualHeader extends AbstractNode {
    /**
     * Define an abstract implementation of visual header.
     * NOTE: Custom LogVisualHeader implementation MUST override "clone" operation for
     * LogVisualHeaderProvider to be able to create new header instance(s) internally.
     * This is a base class for all visual headers.
     * @param options visual for the header or properties object
     * @param options.visual visual for the header
     * @param options.textstyle the text style
     * @param options.linestyle the line style
     * @param options.fillstyle the fill style
     * @param options.borderlinestyle border line style
     * @param options.modellimits desired model Limits
     * @param options.bounds bounds of the curve in the parent coordinates
     * @param options.padding It has properties for specifying the padding for each side
     * @param options.autobounds automatic calculation of header size on or off
     * @param options.depth depth
     * @param options.displaymode display mode
     * @param options.displaystring display string
     * @param options.layoutstyle layoutstyle
     * @param options.roundedbox rounded box options
     * @param options.roundedbox.radius radius of the rounded box
     * @param options.roundedbox.linestyle linestyle of the rounded box
     * @param options.roundedbox.fillstyle fillstyle of the rounded box
     */
    constructor(options?: Node | object | { visual?: Node; textstyle?: TextStyle | string | object; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; borderlinestyle?: LineStyle | string | object; modellimits?: Rect; bounds?: Rect; padding?: SpaceStyle | object; autobounds?: boolean; depth?: number; displaymode?: object; displaystring?: string; layoutstyle?: LayoutStyle | object; roundedbox?: object | { radius?: number; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; } ; } );
    /**
     * Dispose node. Clear all listeners
     * and disconnect style to avoid memory
     * leaks
     */
    dispose(): void;
    /**
     * Return text shape helper instance
     * @param x x coordinate
     * @param y y coordinate
     * @param text text to display
     * @param textStyle a new shape text style
     * @param textStyle.color text color
     * @param textStyle.baseLine base line.
     * @param textStyle.alignment alignment.
     * @param textStyle.font font.
     * @param alignment anchor alignment
     */
    protected getTextShapeHelper(x: number, y: number, text: string, textStyle: TextStyle | string | object | { color?: string | RgbaColor; baseLine?: string; alignment?: string; font?: string; } , alignment: AnchorType): Text;
    /**
     * Return visibility of the header
     */
    getVisible(): boolean;
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
     * Invalidate area of the shape.  This method invalidates parent by default. invalidated from parent to root node.
     * @param bounds bounds of the invalid rectangle in the inner node coordinates
     * @param force true if parent should be invalidated immediately
     * if null is provided then cache (if any will be completely refreshed) otherwise only specified rect or node.bounds will be refreshed
     */
    invalidate(bounds?: Rect | any, force?: boolean): this;
    /**
     * Returns highlight options
     */
    getHighlightOptions(): any;
    /**
     * Set highlight options
     * @param options highlight options
     * @param options.highlight highlight flag
     * @param options.linestyle line style
     * @param options.fillstyle fill style
     */
    setHighlightOptions(options: object | { highlight?: boolean; linestyle?: LineStyle | string; fillstyle?: FillStyle | string; }  | any): this;
    /**
     * Return line style
     */
    getLineStyle(): LineStyle;
    /**
     * Sets a line style
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
     * Sets border line style
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param lineStyle.pixelsnapmode pixel snap mode
     * @param lineStyle.pixelsnapmode.x pixel snap mode for x
     * @param lineStyle.pixelsnapmode.y pixel snap mode for y
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setBorderLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; pixelsnapmode?: object | { x?: boolean; y?: boolean; }  | boolean; }  | string, merge?: boolean): this;
    /**
     * Gets border line style
     */
    getBorderLineStyle(): LineStyle;
    /**
     * Sets a current text style
     * @param textStyle a new shape text style
     * @param textStyle.color text color
     * @param textStyle.baseLine base line.
     * @param textStyle.alignment alignment.
     * @param textStyle.font font.
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setTextStyle(textStyle: TextStyle | string | object | { color?: string | RgbaColor; baseLine?: string; alignment?: string; font?: string; } , merge?: boolean): this;
    /**
     * Return a current text style
     */
    getTextStyle(): TextStyle;
    /**
     * Draws a rectangle at the model limits and fill it with specified fillStyle
     * @param context Rendering Context
     * @param fillStyle Fill Style for the rectangle
     */
    fillBorder(context: RenderingContext, fillStyle?: FillStyle): this;
    /**
     * Stroke border with specified
     * @param context Rendering Context
     * @param borderLineStyle the LineStyle for the border
     */
    drawBorder(context: RenderingContext, borderLineStyle?: LineStyle | string | object): this;
    /**
     * Sets model limits
     * @param modelLimits desired model Limits
     */
    setModelLimits(modelLimits: Rect): this;
    /**
     * Return model limits
     */
    getModelLimits(): Rect;
    /**
     * Return header desired height
     */
    getDesiredHeight(): number;
    /**
     * Return header desired content height with padding
     * @param header header instance
     */
    static getDesiredHeight(header: LogVisualHeader): number;
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
     * Return bound in the parent coordinates
     */
    getBounds(): Rect;
    /**
     * Sets bounds of the curve in the parent coordinates and set up auto bounds
     * false
     * @param bounds bounds of the curve in the parent coordinates
     */
    setBounds(bounds: Rect): this;
    /**
     * Enable or disable auto bounds If auto bounds is enabled then it equals to
     * parent model limits
     * @param enable Enable or disable auto bounds
     */
    setAutoBounds(enable: boolean): this;
    /**
     * Return area without paddings. Model limits are
     * mapped to content area, where children are layout.
     * @param transformation scene transformation
     */
    getContentsArea(transformation?: Transformation): Rect;
    /**
     * Return transformation from model to bounds
     */
    getContentsTransform(): Transformation;
    /**
     * <code>getWorldTransform</code> retrieves the local transformation
     * of the node which represents multiplication of parent to bounds and
     * contents transformations.
     */
    getWorldTransform(): Transformation;
    /**
     * Enable automatic bounds. If auto bounds is enabled then it equals to
     * parent model limits
     */
    isAutoBounds(): boolean;
    /**
     * Gets visual to be used to render header
     */
    getVisual(): LogAbstractVisual;
    /**
     * Returns the displayed mode value
     */
    getDisplayMode(): any;
    /**
     * Sets the displayed mode value
     * @param displayMode header display mode
     */
    setDisplayMode(displayMode: any): this;
    /**
     * Returns the displayed value
     */
    getDisplayString(): string;
    /**
     * Sets the displayed value
     * @param displayString the displayed value
     */
    setDisplayString(displayString: string): this;
    /**
     * Returns 0
     */
    getDisplayValue(): number;
    /**
     * Returns the displayed depth value
     */
    getDisplayDepth(): number;
    /**
     * Check culling
     * Returns true if object is inside of renderable area
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {visual: Node; textstyle: TextStyle | string | object; linestyle: LineStyle | string | object; fillstyle: FillStyle | string | object; borderlinestyle: LineStyle | string | object; modellimits: Rect; bounds: Rect; padding: object | SpaceStyle; autobounds: boolean; depth: number; displaymode: object; displaystring: string; layoutstyle: LayoutStyle; roundedbox: {radius: number; linestyle: LineStyle | string | object; fillstyle: FillStyle | string | object}} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.visual visual
     * @param properties.textstyle the text style
     * @param properties.linestyle the line style
     * @param properties.fillstyle the fill style
     * @param properties.borderlinestyle border line style
     * @param properties.modellimits desired model Limits
     * @param properties.bounds bounds of the curve in the parent coordinates
     * @param properties.padding It has properties for specifying the padding for each side. See {@link @int/geotoolkit/attributes/SpaceStyle.SpaceStyle#setProperties}
     * @param properties.autobounds automatic calculation of header size on or off
     * @param properties.depth depth
     * @param properties.displaymode display mode
     * @param properties.displaystring display string
     * @param properties.layoutstyle layoutstyle
     * @param properties.roundedbox rounded box options
     * @param properties.roundedbox.radius radius of the rounded box
     * @param properties.roundedbox.linestyle linestyle of the rounded box
     * @param properties.roundedbox.fillstyle fillstyle of the rounded box
     */
    setProperties(properties: object | { visual?: Node; textstyle?: TextStyle | string | object; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; borderlinestyle?: LineStyle | string | object; modellimits?: Rect; bounds?: Rect; padding?: object | SpaceStyle; autobounds?: boolean; depth?: number; displaymode?: object; displaystring?: string; layoutstyle?: LayoutStyle | object; roundedbox?: object | { radius?: number; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; } ; } ): this;
    /**
     * for internal use only, make text always readable
     * @param context rendering context
     * @param x x position to place text
     * @param y y position to place text
     * @param text text to be displayed
     * @param style text style
     * @param alignment alignment for placement of text
     * @param theta of rotation
     * @param maxSize max size or width
     */
    protected drawText(context: RenderingContext, x?: number, y?: number, text?: string, style?: TextStyle, alignment?: AnchorType, theta?: number | any, maxSize?: any | number | Dimension): void;
    /**
     * Returns bounding box of the text
     * @param context rendering context
     * @param x x position to place text
     * @param y y position to place text
     * @param text text to be displayed
     * @param style text style
     * @param alignment alignment for placement of text
     * @param theta of rotation
     */
    protected getTextBoundingBox(context: RenderingContext, x?: number, y?: number, text?: string, style?: TextStyle, alignment?: AnchorType, theta?: number | any): Rect;
    /**
     * Returns biggest text in specified width
     * @param context Rendering Context
     * @param text Text to calculate the size for
     * @param maxLen max length available for the text
     */
    checkTextSize(context: RenderingContext, text: string, maxLen: number): string;
    /**
     * Notify that layout is invalidated. Send event {@link @int/geotoolkit/layout/Events.Events.LayoutInvalidated}
     * @param propagate propagate invalidate layout to parent
     */
    invalidateLayout(propagate?: boolean): this;
    /**
     * Return true if the representation is flipped horizontally
     */
    isHorizontalFlip(): boolean;
    /**
     * Set horizontal flip of the representation
     * @param enable enable flip flag, if it is null [default] header try to use same property from associated visual
     */
    setHorizontalFlip(enable: boolean | any): this;
    /**
     * This method is called if visual is changing.
     */
    protected onVisualChanging(): void;
    /**
     * This method is called if visual is changed.  Send event {@link @int/geotoolkit/welllog/header/LogVisualHeader.Events.VisualChanged}
     */
    protected onVisualChanged(): void;
    /**
     * Adds new css class to node
     * @param cssclass css class name('s)
     */
    addCssClass(cssclass: string[] | string): this;
    /**
     * Removes css class from node
     * @param cssclass css class name('s)
     */
    removeCssClass(cssclass: string[] | string): this;
}
/**
 * EventDispatcher Events
 */
export enum Events {
    /**
     * This Event is fired when the visual was changed
     */
    VisualChanged = 'VisualChanged',
    /**
     * This Event is fired when the visual has been invalidated
     */
    VisualInvalidate = 'VisualInvalidate',
    /**
     * This Event is fired when the visual visibility has been invalidated
     */
    VisualVisibilityChanged = 'VisualVisibilityChanged'
}
