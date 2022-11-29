import {Rect} from './Rect';
import {Transformation} from './Transformation';
import {GraphicsPath} from '../renderer/GraphicsPath';

/**
 * Defines helper methods to work with geometries
 */
export class GeometryUtil {
    /**
     * Defines helper methods to work with geometries
     */
    constructor();
    /**
     * Gets bounding box for a geometry defined by array of {@link @int/geotoolkit/util/Point.Point} points
     * or by arrays of x-ordinates and y-ordinates.
     * @param parameter1 array of {@link @int/geotoolkit/util/Point.Point} or array of numbers (x-values)
     * @param parameter2 array of numbers (y-values)
     */
    static getBoundingBox(parameter1: any[], parameter2?: any[]): Rect;
    /**
     * Gets device size of vector specified in model coordinates
     * @param x x position of vector in model coordinates
     * @param y y position of vector in model coordinates
     * @param transformation context transformation
     */
    static getVectorLength(x: number, y: number, transformation?: Transformation): number;
    /**
     * Gets model size of vector specified in device coordinates
     * @param x x position of vector in device coordinates
     * @param y y position of vector in device coordinates
     * @param transformation context transformation
     */
    static getVectorLengthInModel(x: number, y: number, transformation?: Transformation): number;
    /**
     * Return rounded border path
     * @param bounds path bounds
     * @param radius corner radius in device model space
     * @param radius.topleft topleft corner radius in device model space
     * @param radius.topleft.x topleft corner radius x in device model space
     * @param radius.topleft.y topleft corner radius y in device model space
     * @param radius.bottomright bottomright corner radius in device model space
     * @param radius.bottomright.x bottomright corner radius x in device model space
     * @param radius.bottomright.y bottomright corner radius y in device model space
     * @param radius.topright topright corner radius in device model space
     * @param radius.topright.x topright corner radius x in device model space
     * @param radius.topright.y topright corner radius y in device model space
     * @param radius.bottomleft bottomleft corner radius in device model space
     * @param radius.bottomleft.x bottomleft corner radius x in device model space
     * @param radius.bottomleft.y bottomleft corner radius y in device model space
     * @param transformation device transformation
     * @param path graphics path to reuse
     * @param join join path
     */
    static getRoundRect(bounds: Rect, radius: number | object | { topleft?: number | object | { x?: number; y?: number; } ; bottomright?: number | object | { x?: number; y?: number; } ; topright?: number | object | { x?: number; y?: number; } ; bottomleft?: number | object | { x?: number; y?: number; } ; } , transformation?: Transformation | null, path?: GraphicsPath | null, join?: boolean): GraphicsPath;
}
