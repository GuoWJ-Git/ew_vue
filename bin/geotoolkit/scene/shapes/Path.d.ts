import {ScaledShape} from './ScaledShape';
import {GraphicsPath, PointType} from '../../renderer/GraphicsPath';
import {Rect} from '../../util/Rect';
import {LineStyle} from '../../attributes/LineStyle';

/**
 * Defines Path node
 */
export class Path extends ScaledShape {
    /**
     * Defines Path node
     * @param options options or visible flag
     * @param options.geometry geometry the path
     * @param options.x x
     * @param options.y y
     * @param options.index index
     * @param options.tags tags
     * @param options.bounds bounds
     * @param linestyle linestyle
     */
    constructor(options?: object | { geometry?: GraphicsPath; x?: number[]; y?: number[]; index?: number[]; tags?: PointType[]; bounds?: Rect; }  | boolean, linestyle?: LineStyle | string | object);
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: Path): this;
    /**
     * Remove all of this path's points.
     */
    clear(): this;
    /**
     * Add command to move the current position.
     * @param x The x-coordinate of the destination point
     * @param y The y-coordinate of the destination point
     */
    moveTo(x: number, y: number): this;
    /**
     * Close path
     */
    close(): this;
    /**
     * Close path (same as .close)
     */
    closePath(): this;
    /**
     * Add command to draw a line from the current position to specified point
     * @param x The x-coordinate of the destination point
     * @param y The y-coordinate of the destination point
     */
    lineTo(x: number, y: number): this;
    /**
     * Add command to draw an arc from the current position to specified point
     * @param x1 The x-coordinate of the destination point
     * @param y1 The y-coordinate of the destination point
     * @param x2 x-coordinate of control point
     * @param y2 y-coordinate of control point
     * @param radius The radius of arc
     */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): this;
    /**
     * Draws a cubic Bezier curve from the current point to the point (x, y),
     * with control points (cp1x, cp1y) and (cp2x, cp2y).
     * @param cp1x the the x coordinate of the first control point OR options to specify bezier curve { x : {number}, y : {number},
     *            cp1x : {number}, cp1y : {number}, cp2x : {number}, cp2y :
     *            {number} }
     * @param cp1y the y coordinate of the first control point
     * @param cp2x the x coordinate of the second control point
     * @param cp2y the y coordinate of the second control point
     * @param x the x coordinate of the end point
     * @param y the y coordinate of the end point
     */
    bezierCurveTo(cp1x: number | object, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): this;
    /**
     * Return bounds
     */
    getBounds(): Rect;
    /**
     * Returns the geometry of this item as a GeometryPath in
     * model coordinates.
     */
    getGeometry(): GraphicsPath;
    /**
     * Sets a geometry for the path in model coordinates
     * @param geometry New geometry
     */
    setGeometry(geometry: GraphicsPath): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {x: number[]; y: number[]; index: number[]; tags: PointType[]; bounds: Rect} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set see {@link @int/geotoolkit/renderer/GraphicsPath.GraphicsPath#setProperties}
     * @param properties.geometry geometry of the path
     * @param properties.x x
     * @param properties.y y
     * @param properties.index index
     * @param properties.tags tags
     * @param properties.bounds bounds
     */
    setProperties(properties?: object | { geometry?: GraphicsPath; x?: number[]; y?: number[]; index?: number[]; tags?: PointType[]; bounds?: Rect; } ): this;
}
