import {Rect} from '../util/Rect';
import {GraphicsPath} from './GraphicsPath';
import {Region} from '../util/Region';
import {GeometryOperation} from '../util/GeometryOperation';
import {RenderingContext} from './RenderingContext';
import {Surface} from './Surface';
import {FillStyle} from '../attributes/FillStyle';
import {Pattern} from '../attributes/Pattern';
import {LineStyle} from '../attributes/LineStyle';
import {TextStyle} from '../attributes/TextStyle';

/**
 * Graphics
 */
export class Graphics {
    /**
     * Graphics
     */
    constructor();
    /**
     * Sets clipping
     * @param geometry geometry to clip
     * @param operation operation to be applied for a new clipping
     * @param isModel model coordinates flag
     * @param evenOdd Defines if clipping to apply is even-odd
     */
    setClip(geometry: Rect | GraphicsPath | Region, operation?: GeometryOperation, isModel?: boolean, evenOdd?: boolean): void;
    /**
     * Draw and fill rectangle with the current style. If fill style is null
     * then it draws outline only.
     * @param x X coordinate of the start point
     * @param y Y coordinate of the start point
     * @param width Width of rectangle
     * @param height Height of rectangle
     */
    drawRectangle(x: Rect | number, y?: number, width?: number, height?: number): void;
    /**
     * Draw line
     * @param x1 x-position of start point
     * @param y1 y-position of start point
     * @param x2 x-position of end point
     * @param y2 y-position of end point
     */
    drawLine(x1: number, y1: number, x2: number, y2: number): void;
    /**
     * Draw polyline
     * @param x array of x coordinates of points
     * @param y array of y coordinates of points
     * @param start index of the first point in the array
     * @param end index of the last point in the array
     * @param multiDirection false for one direction array
     */
    drawPolyline(x: any[], y: any[], start?: number, end?: number, multiDirection?: boolean): void;
    /**
     * Draw and fill polygon. If fill style is null
     * then it draws outline only.
     * @param x array of x coordinates of points
     * @param array of y coordinates of points
     * @param start index of the first point in the array
     * @param end index of the last point in the array
     */
    drawPolygon(x: any[], array: any[], start?: number, end?: number): void;
    /**
     * Draw and fill ellipse
     * @param x x-coordinate of the upper-left corner of the bounding rectangle that defines the ellipse
     * @param y y--coordinate of the upper-left corner of the bounding rectangle that defines the ellipse
     * @param width width of the bounding rectangle that defines the ellipse.
     * @param height height of the bounding rectangle that defines the ellipse.
     */
    drawEllipse(x: number, y: number, width: number, height: number): void;
    /**
     * Draws an arc clockwise from startAngle to endAngle.
     * If endAngle exceeds startAngle by Math.PI * 2 or more then ellipse is drawn.
     * If fillStyle is not null, will fill the arc area using a direct line
     * to close the path between start and end of arc.
     * By default this function renders a "pie" shape, using given fill and stroke style. In order to draw a real arc,
     * set suppressLineToCenter=true.
     * @param x x-coordinate of the upper-left corner of the rectangle that bounds the ellipse.
     * @param y y-coordinate of the upper-left corner of the rectangle that bounds the ellipse.
     * @param width width of the rectangle that bounds the ellipse.
     * @param height height of the rectangle that bounds the ellipse.
     * @param startAngle angle in radians measured clockwise from positive x-axis to the starting point of the arc.
     * @param endAngle Angle in radians measured clockwise from positive x-axis to the ending point of the arc.
     * @param sweepAngle Defines the sweep of the arc in radians. This parameter used if and only if
     * startAngle == endAngle
     * @param suppressLineToCenter Does not draw lines from the edges of arc to center point
     */
    drawArc(x: number, y: number, width: number, height: number, startAngle: number, endAngle: number, sweepAngle?: number, suppressLineToCenter?: boolean): void;
    /**
     * Draws a portion of an annulus clockwise ranging from startAngle to endAngle.
     * If endAngle exceeds startAngle by Math.PI * 2 or more then annulus is drawn.
     * Will fill in between the two arcs if fillStyle exists.
     * @param x x-coordinate of the center of the arc.
     * @param y y-coordinate of the center of the arc.
     * @param innerRadius inner radius of the arc
     * @param outerRadius outer radius of the arc
     * @param startAngle angle in radians measured from x-axis to the starting point of the arc
     * (clockwise means positive angle; counterclockwise - otherwise).
     * @param endAngle Angle in radians measured from x-axis to ending point of the arc.
     * @param sweepAngle Defines the sweep of the arc
     */
    drawAnnulusArc(x: number, y: number, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number, sweepAngle?: number): RenderingContext;
    /**
     * Draw text
     * @param x x anchor position
     * @param y y anchor position
     * @param text text to draw
     */
    drawText(x: number, y: number, text: string): void;
    /**
     * Draw an image onto the graphics context
     * @example
     * ```javascript
     * // Draw image can be used it the three different ways
     * // Provide only destination x and y
     * graphics.drawImage(image, dstX, dstY);
     * // Provide destination x and y and destination width and height
     * graphics.drawImage(image, dstX, dstY, dstW, dstW);
     * // Provide source x, y, width, height and destination x and y and destination width and height
     * graphics.drawImage(image, srcX, srcY, srcW, srcH, dstX, dstY, dstW, dstW);
     * ```
     * @param image image to be rendered
     * @param srcX The x-axis coordinate of the top left corner of the sub-rectangle of the source image to
     * draw into the destination context. Use the 7- or 9-argument syntax to use it as a source
     * or the x-axis coordinate in the destination context at which to place the top-left corner of the source image.
     * Use the 3- or 5-argument syntax to apply this argument as destination position.
     * @param srcY The y-axis coordinate of the top left corner of the sub-rectangle of the source image to
     * draw into the destination context. Use the 7- or 9-argument syntax to use it as a source
     * or the y-axis coordinate in the destination context at which to place the top-left corner of the source image.
     * Use the 3- or 5-argument syntax to apply this argument as destination position.
     * @param srcW source width if 7- or 9-argument is used or image width for other cases
     * @param srcH source height if y-argument | image height for other cases
     * @param dstX destination x position
     * @param dstY destination y position
     * @param dstW destination width This allows scaling of the drawn image. If not specified, the image is not scaled
     * in height when drawn.
     * @param dstH destination height. If not specified, the image is not scaled
     * in height when drawn.
     */
    drawImage(image: HTMLImageElement | Surface, srcX: number, srcY: number, srcW?: number, srcH?: number, dstX?: number, dstY?: number, dstW?: number, dstH?: number): void;
    /**
     * Set fill style
     * @param style fill style
     * @param area area
     */
    setFillStyle(style: FillStyle, area?: Rect): void;
    /**
     * Set fill pattern
     * @param pattern pattern to fill the area
     */
    setFillPattern(pattern: Pattern): void;
    /**
     * Set line style
     * @param style a line style
     * @param area area to apply fill property of line style
     */
    setLineStyle(style: LineStyle, area?: Rect): void;
    /**
     * Set text style
     * @param textStyle style
     */
    setTextStyle(textStyle: TextStyle): void;
    /**
     * Begin path
     */
    beginPath(): void;
    /**
     * Move current position to x,y. Create a new subpath with the specified
     * point as its first (and only) point.
     * @param x x position
     * @param y y position
     */
    moveTo(x: number, y: number): void;
    /**
     * Draw line from the current position to the specified position
     * @param x x position
     * @param y y position
     */
    lineTo(x: number, y: number): void;
    /**
     * Draws a cubic B\u00e9zier curve from the current point to the point (x,
     * y), with control points (cp1x, cp1y) and (cp2x, cp2y).
     * @param cp1x the x coordinate of the first control point
     * @param cp1y the y coordinate of the first control point
     * @param cp2x the x coordinate of the second control point
     * @param cp2y the y coordinate of the second control point
     * @param x the x coordinate of the end point
     * @param y the y coordinate of the end point
     */
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    /**
     * Calculate the strokes of all the subpaths of the current path
     */
    stroke(): void;
    /**
     * Draws an arc to the target point as part of a path.
     * @param x1 coordinate of destination
     * @param y1 coordinate of destination
     * @param x2 coordinate
     * @param y2 coordinate
     * @param radius radius of arc
     */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    /**
     * Do nothing if the context has no subpaths. Otherwise, it marks the last
     * subpath as closed, create a new subpath whose first point is the same as
     * the previous subpath's first point, and finally add this new subpath to
     * the path.
     */
    closePath(): void;
    /**
     * Fill all the subpaths of the current path, using fillStyle, and using the
     * non-zero winding number rule. Open subpaths will be implicitly closed
     * when being filled (without affecting the actual subpaths).
     */
    fillPath(): void;
    /**
     * Apply geometry on the rendering context. The method stroke must be called to draw path outlines or fillPath to fill the geometry
     * @param path path to draw
     */
    drawPath(path: GraphicsPath): void;
}
