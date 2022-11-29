import {ContourFault} from './ContourFault';

/**
 * The ContourFaultList object is used to pass the fault data to the contour shape ready for rendering.
 *  It also performs some basic pre-processing calculations on the faults (validation/etc)
 */
export class ContourFaultList {
    /**
     * The ContourFaultList object is used to pass the fault data to the contour shape ready for rendering.
     *  It also performs some basic pre-processing calculations on the faults (validation/etc)
     */
    constructor();
    /**
     * Removes all of the fault data from this fault list
     */
    removeAll(): void;
    /**
     * Adds a fault with explicit data to this fault list
     * @param xCoordinates array of x coordinates
     * @param yCoordinates array of y coordinates
     * @param left array of left values or boolean indicating if closed
     * @param right array of right values
     * @param closed is fault closed or not
     */
    addFault(xCoordinates: Float64Array, yCoordinates: Float64Array, left: Float64Array | boolean, right: Float64Array, closed: boolean): void;
    /**
     * Number of faults in list
     */
    getSize(): number;
    /**
     * Gets a Fault from the fault list
     * @param index The index of the fault in the fault list
     */
    getFault(index: number): ContourFault | any;
}
