import {Point} from '../util/Point';
import {Rect} from '../util/Rect';
import {Dimension} from '../util/Dimension';

/**
 * HTMLOverlay is a wrapper for HTMLElement to add to {@link @int/geotoolkit/scene/HTMLOverlayLayer.HTMLOverlayLayer}
 * @example
 * ```javascript
 * import {HTMLOverlayLayer} from '@int/geotoolkit/scene/HTMLOverlayLayer';
 * import {HTMLOverlay} from '@int/geotoolkit/scene/HTMLOverlay';
 * import {Rect} from '@int/geotoolkit/util/Rect';
 * const htmlOverlayLayer = new HTMLOverlayLayer();
 * const htmlOverlay = new HTMLOverlay({
 *     'element': document.getElementById('htmlOverlay-element'),
 *     'ax': 0, // x coordinate in model space
 *     'ay': 0, // y coordinate in model space
 * });
 * htmlOverlayLayer.addHTMLOverlay(htmlOverlay);
 * ```
 */
export class HTMLOverlay {
    /**
     * HTMLOverlay is a wrapper for HTMLElement to add to {@link @int/geotoolkit/scene/HTMLOverlayLayer.HTMLOverlayLayer}
     * @param options HTMLOverlay options
     * @param options.element HTMLElement to display
     * @param options.ax x coordinate in model space
     * @param options.ay y coordinate in model space
     * @param options.sizeisindevicespace Whether if size is in device space. If true, options width and height will be ingored.
     * @param options.width width in model space, only works with sizeisindevicespace = false
     * @param options.height height in model space, only works with sizeisindevicespace = false
     * @param options.offset Offset in device space
     * @param options.offset.x X offset in device space
     * @param options.offset.y Y offset in device space
     */
    constructor(options?: object | { element?: HTMLElement; ax?: number; ay?: number; sizeisindevicespace?: boolean; width?: number; height?: number; offset?: object | { x?: number; y?: number; }  | Point; } );
    /**
     * Set options
     * @param options HTMLOverlay options
     * @param options.element HTMLElement to display
     * @param options.ax x coordinate in model space
     * @param options.ay y coordinate in model space
     * @param options.sizeisindevicespace Whether if size is in device space. If true, options width and height will be ingored.
     * @param options.width width in model space, only works with sizeisindevicespace = false
     * @param options.height height in model space, only works with sizeisindevicespace = false
     * @param options.offset Offset in device space
     * @param options.offset.x X offset in device space
     * @param options.offset.y Y offset in device space
     */
    setOptions(options?: object | { element?: HTMLElement; ax?: number; ay?: number; sizeisindevicespace?: boolean; width?: number; height?: number; offset?: object | { x?: number; y?: number; }  | Point; } ): this;
    /**
     * Get options
     */
    getOptions(): {element: HTMLElement; ax: number; ay: number; sizeisindevicespace: boolean; width: number; height: number} | any;
    /**
     * Set id
     * @param id HTMLOverlay id
     */
    setId(id: string): this;
    /**
     * Get id
     */
    getId(): string;
    /**
     * Set htmlOverlay bounds in model space, bounds size only works when sizeisindevicespace = false
     * @param bounds new bounds in model space
     */
    setBounds(bounds: Rect): this;
    /**
     * Get bounds in model space
     */
    getBounds(): Rect;
    /**
     * Sets anchor point to given position
     * @param p1 point or x coordinate
     * @param p2 y coordinate
     */
    setAnchor(p1: Point | number, p2?: number): this;
    /**
     * Gets the anchor
     */
    getAnchor(): Point;
    /**
     * Sets x anchor position
     * @param ax anchor x position
     */
    setAnchorX(ax: number): this;
    /**
     * Return anchored x position
     */
    getAnchorX(): number;
    /**
     * Sets y anchor position
     * @param ay anchor y position
     */
    setAnchorY(ay: number): this;
    /**
     * Return anchored y position
     */
    getAnchorY(): number;
    /**
     * Sets size of the shape, will accept a width and height number or a Dimension object.
     * @param width width of the shape
     * @param height height of the shape
     */
    setSize(width: number | Dimension, height?: number): this;
    /**
     * Returns the size as a dimension object.
     */
    getSize(): Dimension;
    /**
     * Return width of the shape
     */
    getWidth(): number;
    /**
     * Sets width of the shape
     * @param width width of the shape
     */
    setWidth(width: number): this;
    /**
     * Return height of the shape
     */
    getHeight(): number;
    /**
     * Sets height of the shape
     * @param height height of the shape
     */
    setHeight(height: number): this;
    /**
     * Set anchor offset in device space
     * @param x X coordinate
     * @param y Y coordinate
     */
    setOffset(x: number | Point | object, y?: number): this;
    /**
     * Get anchor offset in device space
     */
    getOffset(): Point;
    /**
     * Invalidate HTMLOverlay, should be call when HTMLOverlay changes
     */
    invalidate(): this;
    /**
     * Set HTMLElement
     * @param element new HTMLElement
     */
    setElement(element: HTMLElement): this;
    /**
     * Get HTMLElement
     */
    getElement(): HTMLElement;
    /**
     * Whether HTMLOverlay is already disposed
     */
    isDisposed(): boolean;
    /**
     * Dispose HTMLOverlay along with HTMLElement of it
     */
    dispose(): void;
}
