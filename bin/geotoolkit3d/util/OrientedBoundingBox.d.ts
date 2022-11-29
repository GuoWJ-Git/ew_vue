import {Vector3, Matrix3, Box3, Plane} from '../THREE';

/**
 * Represents an oriented bounding box (OBB) in 3D space. <br>
 * It's different from axis-aligned bounding box i.e. THREE.Box3
 */
export class OrientedBoundingBox {
    /**
     * Represents an oriented bounding box (OBB) in 3D space. <br>
     * It's different from axis-aligned bounding box i.e. THREE.Box3
     * @param center the center point of this OBB
     * @param halfSize positive halfwidth extents of the OBB along each axis
     * @param rotation the rotation of this OBB
     */
    constructor(center: Vector3, halfSize: Vector3, rotation: Matrix3);
    /**
     * Set center, halfSize, rotation for this OBB
     * @param center the center point of this OBB
     * @param halfSize positive halfwidth extents of the OBB along each axis
     * @param rotation the rotation of this OBB
     */
    set(center: Vector3, halfSize: Vector3, rotation: Matrix3): this;
    /**
     * Set center for this OBB
     * @param center the center point of this OBB
     */
    setCenter(center: Vector3): this;
    /**
     * Set halfSize for this OBB
     * @param halfSize the center point of this OBB
     */
    setHalfSize(halfSize: Vector3): this;
    /**
     * Set rotation for this OBB
     * @param rotation the rotation of this OBB
     */
    setRotation(rotation: Matrix3): this;
    /**
     * Copies the properties of the given OBB
     * @param obb the obb to copy
     */
    copy(obb: OrientedBoundingBox): this;
    /**
     * Copies the properties of the given OBB to this OBB
     */
    clone(): this;
    /**
     * Whether the given OBB is equal to this OBB or not
     * @param obb the OBB to test
     */
    equals(obb: OrientedBoundingBox): boolean;
    /**
     * Whether the given point lies within this OBB or not
     * @param point the point to test
     */
    containsPoint(point: Vector3): boolean;
    /**
     * Define an OBB based on the given standard bounding box
     * @param box3 standard bounding box
     */
    fromBox3(box3: Box3): this;
    /**
     * Whether the given box3 intersects this OBB or not
     * @param box3 the box3 to test
     */
    intersectsBox3(box3: Box3): boolean;
    /**
     * Whether the given plane intersects this OBB or not
     * @param plane the plane to test
     */
    intersectsPlane(plane: Plane): boolean;
    /**
     * Whether the given OBB intersects this OBB or not
     * @param obb the OBB to test
     * @param epsilon an optional numeric value to counteract arithmetic errors
     */
    intersectsOrientedBoundingBox(obb: OrientedBoundingBox, epsilon?: number): boolean;
    /**
     * Set/create a THREE.Box3 from this orientedBoundingBox.
     * The resulting THREE.Box3 might be bigger based on orientation.
     * @param target optional Box3 to set from this orientedBoundingBox.
     */
    toThreeBox(target?: Box3): Box3;
    /**
     * Get the center of this OBB
     */
    getCenter(): Vector3;
    /**
     * Get the half size of this OBB
     */
    getHalfSize(): Vector3;
    /**
     * Get the rotation matrix of this OBB
     */
    getRotation(): Matrix3;
}
