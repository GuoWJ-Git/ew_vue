import {Object3D} from '../../scene/Object3D';
import {ScaledShape} from '../../../geotoolkit/scene/shapes/ScaledShape';
import {FillStyle} from '../../../geotoolkit/attributes/FillStyle';

/**
 * Abstract utility class for setting intersections. <br>
 * The derived classes handle different base objects (seismic slice, fence, and plane).
 * It's discouraged to store object-specfic data in those classes. As a utility class,
 * it is supposed to be reused among different objects. <br>
 * The main method for the class is <em>generateIntersection<em>, and each derived class
 * should overwrite this method to serve different type of base object.<br>
 * Intersections are drawn with geotoolkit 2D shapes, via an overlay. So a qualified base
 * object needs to support overlay.<br>
 */
export class AbstractIntersection {
    /**
     * Abstract utility class for setting intersections. <br>
     * The derived classes handle different base objects (seismic slice, fence, and plane).
     * It's discouraged to store object-specfic data in those classes. As a utility class,
     * it is supposed to be reused among different objects. <br>
     * The main method for the class is <em>generateIntersection<em>, and each derived class
     * should overwrite this method to serve different type of base object.<br>
     * Intersections are drawn with geotoolkit 2D shapes, via an overlay. So a qualified base
     * object needs to support overlay.<br>
     */
    constructor();
    /**
     * Draw intersection between the base object and a reservoir
     * @param baseObject the base object
     * @param reservoir the reservoir object to test intersection with
     * @param styleOptions style options
     */
    protected drawReservoirIntersection(baseObject: Object3D, reservoir: Object3D, styleOptions?: object): ScaledShape[];
    /**
     * Draw intersection between the base object and a surface
     * @param baseObject the base object
     * @param surface the surface object to test intersection with
     * @param styleOptions style options
     */
    protected drawSurfaceIntersection(baseObject: Object3D, surface: Object3D, styleOptions?: object): ScaledShape[];
    /**
     * Draw intersections between the base object and the intersecting object, with provided options.
     * @param baseObject the base object that has overlay support
     * @param intersectingObject the object that intersects the base object
     * @param options the options for intersection
     * @param options.preservecolor the flag to preserve intersecting object's color on intersections
     * @param options.linewidth the line width, if the intersection is of line shape
     * @param options.fillcolor the fill color of intersection
     */
    generateIntersection(baseObject: Object3D, intersectingObject: Object3D, options?: object | { preservecolor?: boolean; linewidth?: number; fillcolor?: FillStyle; } ): ScaledShape[];
}
