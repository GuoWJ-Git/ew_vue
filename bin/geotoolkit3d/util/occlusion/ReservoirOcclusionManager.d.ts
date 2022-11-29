import {AbstractOcclusionManager} from './AbstractOcclusionManager';

/**
 * Occlusion manager does occlusion query for reservoir grids. <br>
 * It uses an offscreen canvas to render the bounding box of subgrids. At each frame,
 * it tests if each subgrid is occluded by using occlusion query that supported in WebGL 2.<br>
 */
export class ReservoirOcclusionManager extends AbstractOcclusionManager {
    /**
     * Occlusion manager does occlusion query for reservoir grids. <br>
     * It uses an offscreen canvas to render the bounding box of subgrids. At each frame,
     * it tests if each subgrid is occluded by using occlusion query that supported in WebGL 2.<br>
     */
    constructor();
    /**
     * Set multiplier offset for the bounding box<br>
     * For example, the resulting bounding box is equal to given one if offset is 1
     * @param offset offset multiplier
     */
    setOffset(offset: number): void;
}
