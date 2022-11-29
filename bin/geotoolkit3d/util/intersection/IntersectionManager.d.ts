import {EventDispatcher} from '../../../geotoolkit/util/EventDispatcher';
import {AbstractIntersection} from './AbstractIntersection';
import {Object3D} from '../../scene/Object3D';
import {FillStyle} from '../../../geotoolkit/attributes/FillStyle';
import {LineStyle} from '../../../geotoolkit/attributes/LineStyle';

/**
 * IntersectionManager class handles and keeps track of intersection-related features.
 * A default global instance of this class is created and used.
 */
export class IntersectionManager extends EventDispatcher {
    /**
     * IntersectionManager class handles and keeps track of intersection-related features.
     * A default global instance of this class is created and used.
     */
    constructor();
    /**
     * Returns default instance of the IntersectionManager
     */
    static getDefaultInstance(): IntersectionManager;
    /**
     * Register the intersection utility class to be used for specific types of intersection.<br>
     * Note that this method is needed for plane objects only.
     * @param className the class name for intersection utility class
     * @param IntersectionConstructor the intersection utility class' constructor
     */
    static setBaseClass(className: string, IntersectionConstructor: AbstractIntersection): void;
    /**
     * Set the intersectionManager automatic behavior.
     * When a pair of intersecting object have either of its 2 objects move since the last redraw, they become invalidated.
     * When set to true, the invalidated intersection is clreaed and redrawn.
     * When set to false, the invalidated intersection is only cleared.
     * When automatic redraw is disabled, the manual way to update an intersection is to call generateIntersection() again.
     * @param auto the state of the auto redraw, Default is true.
     */
    setAutoRedraw(auto: boolean): void;
    /**
     * Return if automatic redraw is enabled. See setAutoRedraw for more informations.
     */
    isAutoRedrawEnabled(): boolean;
    /**
     * Draw intersections between the plane object and the intersecting object, with provided options.
     * @param planeObject the plane object that has overlay support
     * @param meshObject the mesh object that intersects the plane object
     * @param options the options for intersection
     * @param options.preservecolor the flag to preserve intersecting object's color on intersections.
     *                                               If set to false, will use the provided options.fillstyle instead.
     * @param options.linewidth the line width, if the intersection is of line shape
     * @param options.fillstyle the fill color of intersection
     */
    generateIntersection(planeObject: Object3D, meshObject: Object3D, options?: object | { preservecolor?: boolean; linewidth?: number; fillstyle?: FillStyle; } ): void;
    /**
     * Remove the intersection between the given plane and mesh objects. <br>
     * User should call this if the intersection is no longer needed to avoid memory leaks, as the intersection
     * manager is a singleton, and keeps references to both objects until the intersection is removed.
     * @param planeObject the plane object that has overlay support
     * @param meshObject the mesh object that intersects the plane object
     */
    removeIntersection(planeObject: Object3D, meshObject: Object3D): void;
    /**
     * Set the options for intersection.<br>
     * Using this method can change intersection's properties without re-calculating intersecting points.
     * Note if the position of intersection has changed, use generateIntersection instead.
     * @param planeObject the plane object that has overlay support
     * @param meshObject the mesh object that intersects the plane object
     * @param properties the intersection properties
     * @param properties.visible the intersection visibility
     * @param properties.linewidth the line width, if the intersection is of line shape
     * @param properties.fillstyle the fill color of intersection
     * @param properties.linestyle line style of intersection bounds
     */
    setPropertyByIntersection(planeObject: Object3D, meshObject: Object3D, properties: object | { visible?: boolean; linewidth?: number; fillstyle?: FillStyle; linestyle?: LineStyle; } ): void;
    /**
     * Returns true, if intersection exists
     * @param planeObject the plane object that has overlay support
     * @param meshObject the mesh object that intersects the plane object
     */
    isIntersectionExists(planeObject: Object3D, meshObject: Object3D): boolean;
    /**
     * Returns true if matrix world has changed. Otherwise, return false.
     */
    isMatrixWorldChange(): boolean;
    /**
     * Returns the relationship of all intersections. <br>
     * The returned object stores relationship like: obj[meshObject.uuid] = planeObject.uuid
     * Will be deprecated in the next release, if possible please use getMeshMap() instead
     */
    getIntersectionGroup(): object;
    /**
     * Returns a copy of the relationship of all intersections. <br>
     * The returned object stores relationship like: obj[planeObject.uuid] = meshObject.uuid
     * Will be deprecated in the next release, if possible please use getPlaneMap() instead
     */
    getBaseGroup(): object;
    /**
     * Return the map of relationship between plane objects and the mesh(es) they intersect.
     */
    getPlaneMap(): Map<string,object>;
    /**
     * Return the map of relationship between mesh objects and the plane(s) they intersect.
     */
    getMeshMap(): Map<string,object>;
    /**
     * Returns the map of all objects being part of intersections.
     * Key are objects's UUID, value is the object itself.
     */
    getObjectMap(): Map<string,object>;
    /**
     * Dispose the instance and its properties.
     */
    dispose(): void;
}
