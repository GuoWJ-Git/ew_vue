import {Object3D, Box3, Group, Box2} from '../THREE';

/**
 * Utility class providing help functions for 3D scene operations.<br>
 */
export class Helper {
    /**
     * Utility class providing help functions for 3D scene operations.<br>
     */
    constructor();
    /**
     * Computes the world bounding box of the given object and its children.<br>
     * This function uses geometries boundingBox and matrixWold to do so.<br>
     * Note that this function uses all nodes by default (even the not visible ones)<br>
     * <br>
     * @param object The object to compute world bounding box of
     * @param filter A filter function to ignore some nodes
     * @param alwaysTraverseChildren Forces the calculation to traverse children to get the extents of the whole view
     */
    static computeWorldBoundingBox(object: Object3D, filter?: Function, alwaysTraverseChildren?: boolean): Box3 | any;
    /**
     * Return the diagonal size of the given THREE.Box3
     * The size returned is the distance between the Box min and max points.
     * If the Box is empty (min and max are set to infinity) or if it contains NaN or the box is null, it will return 0.
     * @param box the box
     */
    static getBoxSize(box: Box3): number;
    /**
     * Dispose an object's WebGL resources and all its children recursively.<br>
     * The sequence in witch the dispose steps will occur is:
     * <ul>
     *  <li> disposeResources : If the object has any specific resources to dispose, the disposeResources() function will be called.</li>
     *  <li> dispose children: Calls Helper.dispose() on the children of this object.</li>
     *  <li> dispose object: If the object has any custom implementation of the dispose function.</li>
     *  <li> remove object: Removes the object from its parent.</li>
     *  <li> dispose geometry: Disposes the geometry, releasing the memory used on the graphic card.</li>
     *  <li> dispose material: Disposes the material, releasing the memory used on the graphic card.</li>
     *  <ul>
     *   <li> dispose texture: Disposes the texture stored in the material (if any).</li>
     *  </ul>
     * </ul>
     * @param object The object or array of objects to dispose
     */
    static dispose(object: Object3D | Group | Object3D[]): void;
    /**
     * Convert any type of color to geotoolkit.util.DefaultColorProvider
     * @param options option object
     */
    static convertToColorProvider(options: object): void;
    /**
     * Returns WGS84 full extent (default model limits for map)
     */
    static getWGS84DefaultExtent(): Box2;
    /**
     * Returns position in an array by given THREE.Box3<br>
     * The positions are repeating triangles in order of x,y,z<br>
     * If an offset is provided, the resulting positions will be multiplied by the offset.
     * @param box the input box
     * @param offset the offset that applies to positions
     */
    static computeBoxPositions(box: Box3, offset: number): Float32Array;
    /**
     * This helper function is to determine the orientation of triangle in a box-like shape, i.e. a cell.<br>
     * If triangles are facing inward the box, then we only need to render back face (THREE.BackFace).
     * Otherwise, we render the front face (THREE.FrontFace). <br>
     * This could save some rendering resources.
     * @param verticesPosition the number array that contains the object's positions
     */
    static isTriangleFacingInward(verticesPosition: number[]): boolean;
}
