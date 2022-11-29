/**
 * Utility class related to geotoolkit3d.scene.well.CylinderLog
 */
export class CylinderLog {
    /**
     * Utility class related to geotoolkit3d.scene.well.CylinderLog
     */
    constructor();
    /**
     * Change the parameters that affects the cylinder precision.<br>
     * <br>
     * Note that this applies only to the Cylinders created after this has been changed.<br>
     * <br>
     * The corner counts affects how 'round' the circles will look like.<br>
     * The diskCount defines how many circles will be created for each log value.<br>
     * <br>
     * @param cornerCount The amount of points to create a cylinder like shape
     * @param diskCount The amount of of disks for each sample
     */
    static setCylinderPrecision(cornerCount: number, diskCount: number): void;
}
