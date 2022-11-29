import {Transformation} from '../util/Transformation';
import {Point} from '../util/Point';
import {Rect} from '../util/Rect';
import {RenderingContext} from './RenderingContext';
import {Image} from '../scene/shapes/Image';
import {Pixmap} from './Pixmap';

/**
 * Define interface for a raster surface. This surface can be rendered to
 * context
 */
export class Surface {
    /**
     * Define interface for a raster surface. This surface can be rendered to
     * context
     */
    constructor();
    /**
     * Begin paint
     * @param tr transformation
     * @param offset The offset of the surface relative to device.
     * @param rect The rectangle area to be cleared
     * @param clearArea clear rendering area
     */
    beginPaint(tr: Transformation, offset: Point, rect?: Rect, clearArea?: boolean): RenderingContext;
    /**
     * End paint
     */
    endPaint(): void;
    /**
     * Render a surface at specified position of the target device. This method ignores transformation,
     * which is set on context.
     * @param context context to render surface
     * @param x the x coordinate of the upper-left corner of the destination
     *            rectangle
     * @param y the y coordinate of the upper-left corner of the destination
     *            rectangle
     * @param dstW device width
     * @param dstH device height
     * @param xImg xPosition of the image to start rendering
     * @param yImg yPosition of the image to start rendering
     * @param imgW width of the image to draw
     * @param imgH height of the image to draw
     */
    render(context: RenderingContext, x: number, y: number, dstW?: number, dstH?: number, xImg?: number, yImg?: number, imgW?: number, imgH?: number): void;
    /**
     * Return width of the surface
     */
    getWidth(): number;
    /**
     * Return height of the surface
     */
    getHeight(): number;
    /**
     * Draw image to surface
     * @param image image to draw
     * @param dx the x coordinate of the upper-left corner of the destination
     *            rectangle
     * @param dy the y coordinate of the upper-left corner of the destination
     *            rectangle
     */
    drawImage(image: Image, dx: number, dy: number): void;
    /**
     * Clear surface
     */
    clear(): void;
    /**
     * Release surface
     */
    release(): void;
    /**
     * Create pixmap object with the specified dimensions
     * @param width width of the image data
     * @param height height of the image data
     */
    createPixmap(width: number, height: number): Pixmap;
    /**
     * Get pixmap object representing the underlying pixel data for the area of the surface
     * denoted by the rectangle which starts at (x, y) and has width and height.
     * @param x The x coordinate of the upper left corner of the rectangle from which the Pixmap will be extracted.
     * @param y The y coordinate of the upper left corner of the rectangle from which the Pixmap will be extracted.
     * @param width width of the image data
     * @param height height of the image data
     */
    getPixmap(x: number, y: number, width: number, height: number): Pixmap;
    /**
     * Renders data from the given Pixmap object onto the surface. If a dirty rectangle is provided, only the
     * pixels from that rectangle are rendered.
     * @param pixmap pixmap, which contains pixels to be rendered
     * @param srcX horizontal position (x-coordinate) of the upper-left corner of the pixmap data rectangle in the target surface.
     * @param srcY vertical position (y-coordinate) of the upper-left corner of the pixmap data rectangle in the target surface
     * @param dstX horizontal position (x-coordinate) where to place the image on the surface. Defaults to the top left
     * of the whole pixmap.
     * @param dstY vertical position (y-coordinate) where to place the image on the surface. Defaults to the top left of the
     * whole image data.
     * @param dstWidth width of the rectangle to be rendered, in the origin image data. Defaults to the width of the image data.
     * @param dstHeight width of the rectangle to be rendered, in the origin image data. Defaults to the width of the image data.
     */
    putPixmap(pixmap: Pixmap, srcX: number, srcY: number, dstX?: number, dstY?: number, dstWidth?: number, dstHeight?: number): void;
    /**
     * Flip surface content vertically
     */
    flipVertical(): RenderingContext;
    /**
     * Flip surface content horizontally
     */
    flipHorizontal(): RenderingContext;
    /**
     * Check if surface is valid. If it was created for different pixel scale it is marked as invalid
     */
    isValid(): boolean;
    /**
     * Returns base64 representation
     */
    getBase64(): string;
}
