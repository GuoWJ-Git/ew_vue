import {Plot} from '../../Plot';

/**
 * Abstract class for occlusion manager.<br>
 * It uses an offscreen canvas to render the bounding box of added objects. At each frame,
 * it tests if each bounding box is occluded by using occlusion query that supported in WebGL 2.<br>
 */
export class AbstractOcclusionManager {
    /**
     * Abstract class for occlusion manager.<br>
     * It uses an offscreen canvas to render the bounding box of added objects. At each frame,
     * it tests if each bounding box is occluded by using occlusion query that supported in WebGL 2.<br>
     */
    constructor();
    /**
     * To enable / disable occlusion culling
     * @param toEnable the flag to enable or disable
     */
    setUsability(toEnable: boolean): this;
    /**
     * Render call in offscreen canvas. It does occlusion query and flip the visibility of objects
     * based on query results.<br>
     * Should be called at each frame in main 3D plot.
     * @param camera the camera
     * @param plot the main plot
     */
    render(camera: object, plot: Plot): void;
    /**
     * Resize the offscreen canvas by width and height
     * @param width the width in pixel
     * @param height the height in pixel
     */
    resize(width: number, height: number): void;
    /**
     * Get the number of occluded objects
     */
    getNumberOfOccludedObjects(): number;
}
