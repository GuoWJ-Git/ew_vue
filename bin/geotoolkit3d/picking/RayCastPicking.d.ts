import {AbstractPicking} from './AbstractPicking';
import {Plot} from '../Plot';
import {Ray} from '../THREE';

/**
 * Picking using raycasting algorithm.<br>
 * <br>
 * This selection strategy use a raycasting algorithm to determine what objects are at the requested location.<br>
 * Note that this algorithm has some known limitations as it's a CPU approach:<br>
 * <ul>
 * <li>Vertex&Fragment shader are not supported, therefore objects making use of them might not be pickable or picked at the wrong coordinates</li>
 * <li>Raycasting use a distance-based criteria</li>
 * <li>Can be slow if the picked object or any object considered as a candidate internally has a lot of triangles </li>
 * <li>Returns all objects at the given location that match the criteria </li>
 * </ul>
 */
export class RayCastPicking extends AbstractPicking {
    /**
     * Picking using raycasting algorithm.<br>
     * <br>
     * This selection strategy use a raycasting algorithm to determine what objects are at the requested location.<br>
     * Note that this algorithm has some known limitations as it's a CPU approach:<br>
     * <ul>
     * <li>Vertex&Fragment shader are not supported, therefore objects making use of them might not be pickable or picked at the wrong coordinates</li>
     * <li>Raycasting use a distance-based criteria</li>
     * <li>Can be slow if the picked object or any object considered as a candidate internally has a lot of triangles </li>
     * <li>Returns all objects at the given location that match the criteria </li>
     * </ul>
     */
    constructor();
    /**
     * @param plot The target plot
     * @param x The x coordinate in client device space
     * @param y The y coordinate in client device space
     */
    static getPickingRayClient(plot: Plot, x: number, y: number): Ray;
    /**
     * @param plot The target plot
     * @param x The x coordinate in plot device space
     * @param y The y coordinate in plot device space
     */
    static getPickingRay(plot: Plot, x: number, y: number): Ray;
    /**
     * Cast a ray at the given pixel location (relative to the plot).<br>
     * <br>
     * Objects close enough to the ray will be retrieved by the raycast operation.<br>
     * @param plot The target plot
     * @param x The x coordinate in device space (pixels)
     * @param y The x coordinate in device space (pixels)
     */
    static pick(plot: Plot, x: number, y: number): object[];
}
