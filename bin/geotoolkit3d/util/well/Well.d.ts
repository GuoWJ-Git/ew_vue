import {Vector3} from '../../THREE';

/**
 * Utility class providing functions and constant for 3D well operations.<br>
 */
export class Well {
    /**
     * Utility class providing functions and constant for 3D well operations.<br>
     */
    constructor();
    /**
     * Compute an interpolated position (xyz) at given measure depth
     * @param md the given measure depth
     * @param refX the complete x-position array in the trajectory
     * @param refY the complete y-position array in the trajectory
     * @param refMD the complete measure depth array in the trajectory
     * @param refTVD the complete z-position array in the trajectory
     * @param refMDidx Optional. the index to start search in the measure depth array.
     */
    static computeLinearInterpolationTrajectoryPoint(md: number, refX: number[], refY: number[], refMD: number[], refTVD: number[], refMDidx?: number): Vector3;
    /**
     * Re-sample depths and values based on reference information using linear interpolation.
     * @param depths depth array
     * @param values value array
     * @param refX reference x array
     * @param refY reference y array
     * @param refMds reference measure depth array
     * @param refTvds reference tvd array
     */
    static resampleLinear(depths: number[], values: number[], refX: number[], refY: number[], refMds: number[], refTvds: number[]): {x: number[]; y: number[]; tvds: number[]; mds: number[]; values: number[]} | object;
}
/**
 * Offset mode enum.<br>
 * <br>
 * This mode define how the curve will be rendered when the offset is negative.<br>
 * It will either mirror the curve so that the minimum value is closer to the trajectory than the maximum value. (Mirror)<br>
 * Or it will keep the minimum value on the left, which means that the maximum value will be closer to the trajectory than the minimum value. (Regular)<br>
 */
export enum OffsetMode {
    /**
     * Minimum value is closer to the trajectory than maximum value.<br>
     */
    Mirror = 0,
    /**
     * Minimum value is closer to the trajectory than maximum value ONLY if offset is positive.<br>
     */
    Regular = 1
}
