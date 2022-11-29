import {LogAbstractVisual} from './LogAbstractVisual';
import {Rect} from '../util/Rect';
import {FillStyle} from '../attributes/FillStyle';
import {RenderingContext} from '../renderer/RenderingContext';
import {RgbaColor} from '../util/RgbaColor';
import {Pattern} from '../attributes/Pattern';

/**
 * Define frame visual with bounds
 */
export class LogFrameVisual extends LogAbstractVisual {
    /**
     * Define frame visual with bounds
     * @param options bounds of the visual or properties object
     * @param options.fillstyle FillStyle
     * @param options.fixedheight Enables height of the frame to be fixed in the device coordinates
     */
    constructor(options?: Rect | object | { fillstyle?: FillStyle | string | object; fixedheight?: boolean; } );
    /**
     * Enables height of the frame to be fixed in
     * the device coordinates
     * @param enable Enables height of the frame to be fixed in the device coordinates
     */
    setFixedHeight(enable: boolean): this;
    /**
     * Returns true if height is fixed in the device coordinates
     */
    isFixedHeight(): boolean;
    /**
     * Checks culling
     * Returns true if object is inside of renderable area
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Returns calculated bounds
     * @param context Rendering Context
     */
    getBounds(context?: RenderingContext): Rect;
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
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string, merge?: boolean): this;
    /**
     * Sets rectangle geometry
     * @param rect Sets rectangle geometry based on bounds of the visual
     */
    setRect(rect: Rect): this;
    /**
     * Return rectangle geometry
     */
    getRect(): Rect;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {fillstyle: FillStyle; fixedheight: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.fillstyle FillStyle
     * @param properties.fixedheight Enables height of the frame to be fixed in the device coordinates
     */
    setProperties(properties?: object | { fillstyle?: FillStyle | string | object; fixedheight?: boolean; } ): this;
}
