import {AnimatedNode} from './AnimatedNode';
import {Transformation} from '../util/Transformation';
import {ClipStyle} from '../attributes/ClipStyle';
import {ResponsiveStyle} from '../responsive/ResponsiveStyle';
import {CssStyle} from '../css/CssStyle';
import {SpaceStyle} from '../attributes/SpaceStyle';
import {IFilter} from '../renderer/IFilter';
import {ScaleScrollStrategy} from './ScaleScrollStrategy';
import {BlendMode} from '../util/BlendMode';
import {RenderingContext} from '../renderer/RenderingContext';

/**
 * Defines an abstract implementation of a graphics node. Abstract node supports rotation, clipping and local transform.
 * It has several helper methods like scale, rotate, translate, shear.
 */
export class AbstractNode extends AnimatedNode {
    /**
     * Defines an abstract implementation of a graphics node. Abstract node supports rotation, clipping and local transform.
     * It has several helper methods like scale, rotate, translate, shear.
     * @param options options
     * @param options.localtransform local transform
     * @param options.clipstyle clipping style
     * @param options.responsivestyle responsive style
     * @param options.cssstyle CSS style to be applied to inserted elements
     * @param options.margins It has properties for specifying the margins for each side
     * @param options.margins.top top margin
     * @param options.margins.bottom top margin
     * @param options.margins.right right margin
     * @param options.margins.left left margin
     * @param options.renderingfilter rendering filter
     * @param options.scalescrollstrategy scale scroll strategy
     * @param options.transform transformation applied to node or 'none'
     * @param options.opacity node opacity (from 0 to 1). If it is undefined or null it inherits property from the parent.
     * It changes globalAlpha on the rendering context
     * @param options.opacityblendmode node opacity mode to blend it.
     */
    constructor(options?: object | { localtransform?: Transformation; clipstyle?: ClipStyle | object; responsivestyle?: ResponsiveStyle | object; cssstyle?: string | object | CssStyle; margins?: object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; }  | SpaceStyle; renderingfilter?: IFilter; scalescrollstrategy?: ScaleScrollStrategy | Function; transform?: string[][] | string; opacity?: number | null; opacityblendmode?: BlendMode; } );
    /**
     * Sets a new clipping style
     * @param style a new clipping style
     */
    setClipStyle(style: ClipStyle | object): this;
    /**
     * Gets the current clipping style
     */
    getClipStyle(): ClipStyle | any;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {localtransform: Transformation; clipstyle: ClipStyle | object; responsivestyle: ResponsiveStyle | object; cssstyle: string | object | CssStyle; margins: SpaceStyle; renderingfilter: IFilter; scalescrollstrategy: ScaleScrollStrategy | Function; transform: Transformation; opacity: number; opacityblendmode: BlendMode} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.localtransform local transform
     * @param properties.clipstyle clipping style
     * @param properties.responsivestyle responsive style
     * @param properties.cssstyle CSS style to be applied to inserted elements
     * @param properties.margins It has properties for specifying the margin for each side
     * @param properties.margins.top top margin
     * @param properties.margins.bottom top margin
     * @param properties.margins.right right margin
     * @param properties.margins.left left margin
     * @param properties.renderingfilter rendering filter
     * @param properties.scalescrollstrategy scale scroll strategy
     * @param properties.transform transformation applied to node or 'none'
     * @param properties.opacity opacity of the node
     * @param properties.opacityblendmode node opacity mode to blend it
     */
    setProperties(properties?: object | { localtransform?: Transformation; clipstyle?: ClipStyle | object; responsivestyle?: ResponsiveStyle | object; cssstyle?: string | object | CssStyle; margins?: object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; }  | SpaceStyle; renderingfilter?: IFilter; scalescrollstrategy?: ScaleScrollStrategy | Function; transform?: string[][] | string; opacity?: number; opacityblendmode?: BlendMode; } ): this;
    /**
     * Sets local transformation to be used to transform from local to parent
     * coordinate
     * @param localTransform local transformation for this node
     */
    setLocalTransform(localTransform: Transformation | null): this;
    /**
     * Scale node
     * @param xx x scale factor
     * @param yy y scale factor
     */
    scale(xx: number, yy: number): this;
    /**
     * Translate bounds
     * @param tx x translation
     * @param ty y translation
     */
    translate(tx: number, ty: number): this;
    /**
     * Shear this node's bounds
     * @param shx x-axis shear
     * @param shy y-axis shear
     */
    shear(shx: number, shy: number): this;
    /**
     * Rotate bounds around a given coordinate
     * @param theta angle to rotate node, in radians
     * @param x x coordinate to rotate around
     * @param y y coordinate to rotate around
     */
    rotate(theta: number, x: number, y: number): this;
    /**
     * Retrieves the transformation of bounds to parent
     */
    getLocalTransform(): Transformation | any;
    /**
     * Retrieves the local transformation
     * of the node which represents multiplication of parent to bounds and
     * contents transformations.
     */
    getWorldTransform(): Transformation | any;
    /**
     * Occurs before rendering this method sets clipping by default. Call this method
     * if you override method render
     * @param context Rendering Context
     */
    protected preRendering(context: RenderingContext): void;
    /**
     * This method is called to apply opacity if it is specified on the rendering context. The default
     * implementation sets global alpha on the rendering context
     * @param context Rendering Context
     */
    protected applyOpacity(context: RenderingContext): this;
    /**
     * To be called after rendering. Call this method if you override method render
     * @param context Rendering Context
     */
    protected postRendering(context: RenderingContext): void;
    /**
     * Sets CSS style. This style will be applied for all inserted elements
     * @param style CSS style to be applied to inserted elements
     * @param merge merge flag
     */
    setCss(style: string | object | CssStyle, merge?: boolean): this;
    /**
     * Return CSS style
     */
    getCss(): CssStyle | any;
    /**
     * Sets responsive style.
     * @param style responsive style
     */
    setResponsiveStyle(style: string | object | ResponsiveStyle): this;
    /**
     * Return responsive style
     */
    getResponsiveStyle(): ResponsiveStyle | any;
    /**
     * Sets margins style
     * @param margins margins style
     * @param merge true if you want to merge marginsStyle with existing attribute, false by default
     */
    setMarginsStyle(margins: SpaceStyle | object, merge?: boolean): this;
    /**
     * Return margins style
     */
    getMarginsStyle(): SpaceStyle | null;
    /**
     * Apply a responsive style rules it is exists
     */
    protected applyResponsiveStyle(): void;
    /**
     * Sets filter to be applied before rendering and picking
     * @param filter filter to set
     */
    setRenderingFilter(filter: IFilter | any): this;
    /**
     * Return filter to be used for rendering and picking
     */
    getRenderingFilter(): IFilter | any;
    /**
     * Gets invalidate method
     */
    protected getInvalidateMethod(): Function;
    /**
     * Sets scale scroll strategy
     * @param strategy scale scroll strategy
     */
    setScaleScrollStrategy(strategy?: ScaleScrollStrategy | Function): this;
    /**
     * Gets scale scroll strategy
     */
    getScaleScrollStrategy(): ScaleScrollStrategy | Function | any;
    /**
     * Filter node
     * @param context Rendering Context
     */
    protected filter(context: RenderingContext): boolean;
    /**
     * Check if this node is within the area being rendered by the context
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Sets node opacity
     * @param opacity node opacity from 0 to 1
     * @param blendMode opacity blend mode. If it is normal,
     * opacity will be replaced.
     */
    setOpacity(opacity: number | null, blendMode?: BlendMode): this;
    /**
     * Returns current node opacity
     */
    getOpacity(): number | null;
    /**
     * Returns current node opacity
     */
    getOpacityBlendMode(): BlendMode;
}
