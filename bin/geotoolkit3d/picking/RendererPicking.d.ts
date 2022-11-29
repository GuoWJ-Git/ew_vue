import {AbstractPicking} from './AbstractPicking';
import {Material} from '../THREE';
import {Plot} from '../Plot';

/**
 * Default implementation for the picking renderer mechanism.<br>
 * <br>
 * This class uses rendering as a way to do picking.<br>
 * The idea is similar to the one used here: {@link http://threejs.org/examples/webgl_interactive_cubes_gpu.html THREEJS tutorial}<br>
 * Instead of rendering color in each pixel, it will render more information coded as a rgba pixel.<br>
 * Then it will read the pixel and extract the information encoded in it.<br>
 * <br>
 * To do so, it will replace the current materials by custom shader-materials which will encode the required information into the pixel.<br>
 * The picking might require several steps to retrieve all the information it needs, for each pass one rgba component will be read from the graphic card.<br>
 * Typically it will execute the picking-rendering 4 passes:<br>
 * <ul>
 *     <li>shape-identifier: First pass to find which shapes is at the given position using its identifier</li>
 *     <li>x-coordinate: Another pass to retrieve the world x coordinate at the pick position</li>
 *     <li>y-coordinate: Another pass to retrieve the world y coordinate at the pick position</li>
 *     <li>z-coordinate: Another pass to retrieve the world z coordinate at the pick position</li>
 * </ul>
 * For each pass, the scene will be reconfigured to write the corresponding attribute in place of the regular pixels.<br>
 * One could add more passes to the picking by declaring them in the #getExtraPickingModes() of the picking material.<br>
 * <br>
 * Unlike the Raycasting approach, the picking occurs on the GPU, which means that:<br>
 * <ul>
 *     <li>Vertex&Fragment shader are supported</li>
 *     <li>No distance based criteria, the shape rendered at the given pixel coordinates is the one picked</li>
 *     <li>Performance is based on frame rendering performance only, however it may require several frames for a single picking operation</li>
 *     <li>Returns only the closest object(s) to the camera (the one(s) visible on screen), transparency is ignored. (see filtering)</li>
 * </ul>
 * <br>
 * Note that this picking implementation accepts a width&height parameters to select shapes in a rectangle centered on the given coordinates.<br>
 * A given shape will be returned only once even if it has several pixels in the picked area.<br>
 * The results entry for such case would correspond to the pixel closest to the given picking coordinate.<br>
 * For example if the picked object fills the whole area being picked.<br>
 * Then the picking coordinates returned will match the center of the picked rectangle.<br>
 * <br>
 * This picking also accepts a 'filter' function that can hide objects that are not pickable.<br>
 * As this filtering occurs prior to said GPU picking it may make some objects pickable even if those were initially hidden.<br>
 * For example, if a cube is behind a plane, it's not pickable because it's hidden.<br>
 * But if a filter that discards the plane is given, then the cube can be picked 'through' the plane.<br>
 * This feature is intended to implement picking through non opaque object not as a convenience filter to ignore some shapes.<br>
 * <br>
 */
export class RendererPicking extends AbstractPicking {
    /**
     * Default implementation for the picking renderer mechanism.<br>
     * <br>
     * This class uses rendering as a way to do picking.<br>
     * The idea is similar to the one used here: {@link http://threejs.org/examples/webgl_interactive_cubes_gpu.html THREEJS tutorial}<br>
     * Instead of rendering color in each pixel, it will render more information coded as a rgba pixel.<br>
     * Then it will read the pixel and extract the information encoded in it.<br>
     * <br>
     * To do so, it will replace the current materials by custom shader-materials which will encode the required information into the pixel.<br>
     * The picking might require several steps to retrieve all the information it needs, for each pass one rgba component will be read from the graphic card.<br>
     * Typically it will execute the picking-rendering 4 passes:<br>
     * <ul>
     *     <li>shape-identifier: First pass to find which shapes is at the given position using its identifier</li>
     *     <li>x-coordinate: Another pass to retrieve the world x coordinate at the pick position</li>
     *     <li>y-coordinate: Another pass to retrieve the world y coordinate at the pick position</li>
     *     <li>z-coordinate: Another pass to retrieve the world z coordinate at the pick position</li>
     * </ul>
     * For each pass, the scene will be reconfigured to write the corresponding attribute in place of the regular pixels.<br>
     * One could add more passes to the picking by declaring them in the #getExtraPickingModes() of the picking material.<br>
     * <br>
     * Unlike the Raycasting approach, the picking occurs on the GPU, which means that:<br>
     * <ul>
     *     <li>Vertex&Fragment shader are supported</li>
     *     <li>No distance based criteria, the shape rendered at the given pixel coordinates is the one picked</li>
     *     <li>Performance is based on frame rendering performance only, however it may require several frames for a single picking operation</li>
     *     <li>Returns only the closest object(s) to the camera (the one(s) visible on screen), transparency is ignored. (see filtering)</li>
     * </ul>
     * <br>
     * Note that this picking implementation accepts a width&height parameters to select shapes in a rectangle centered on the given coordinates.<br>
     * A given shape will be returned only once even if it has several pixels in the picked area.<br>
     * The results entry for such case would correspond to the pixel closest to the given picking coordinate.<br>
     * For example if the picked object fills the whole area being picked.<br>
     * Then the picking coordinates returned will match the center of the picked rectangle.<br>
     * <br>
     * This picking also accepts a 'filter' function that can hide objects that are not pickable.<br>
     * As this filtering occurs prior to said GPU picking it may make some objects pickable even if those were initially hidden.<br>
     * For example, if a cube is behind a plane, it's not pickable because it's hidden.<br>
     * But if a filter that discards the plane is given, then the cube can be picked 'through' the plane.<br>
     * This feature is intended to implement picking through non opaque object not as a convenience filter to ignore some shapes.<br>
     * <br>
     */
    constructor();
    /**
     * Register the picking material class to be used for picking for a given material.<br>
     * <br>
     * The picking renderer requires custom implementation of materials that write information instead of pixels.<br>
     * To customize the picking for a given object, one should implement the corresponding material and register it.<br>
     * <br>
     * @param materialClassName The picked material's classname to replace
     * @param pickingMaterialConstructor The picking material's constructor
     */
    static setPickingMaterial(materialClassName: string, pickingMaterialConstructor: Material): void;
    /**
     * Do a picking at the given plot coordinates and returns the objects found at this location.<br>
     * The returned objects will be in a json along with some meta information like xyz coordinates of the picked points.<br>
     * <br>
     * If using a width or height greater than 0, several object might be picked at once.<br>
     * In that case, the returned array would be sorted by distance to center pixel (device point given as parameter to this function).<br>
     * <br>
     * If using a width or height greater than 0, one object may occupy several pixels in the picked area.<br>
     * Such object will be be returned only once in the result array.<br>
     * The results entry will correspond to the pixel closest to the given picking coordinate.<br>
     * <br>
     * @example
     * ```javascript
     * import {RendererPicking} from '@int/geotoolkit3d/picking/RendererPicking';
     * import {Line} from '@int/geotoolkit3d/THREE';
     * // Pick the objects in the rectangle of size 5,5 centered at (12,13)
     * const selection = RendererPicking.pick(plot, 12, 13, 2, 2, (object, pickable) => {
     *       if (!pickable) return false; // If object is already filtered natively, keep filtering it
     *       return !(object instanceof Line); // Prevent line picking, letting user pick through a line
     * });
     * ```
     * @param plot The target plot
     * @param x The x coordinate in plot device space
     * @param y The y coordinate in plot device space
     * @param width The amount of pixels to consider on the left and right side of the given x (effective width will be 2 times given width, plus 1 (the center pixel))
     * @param height The amount of pixels to consider on the top and bottom side of the given y (effective height will be 2 times given height, plus 1 (the center pixel))
     * @param filter A function that can filter the pickable shape, takes the object to filter and it's current pickable status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link @int/geotoolkit3d/picking/RendererPicking.RendererPicking filtering} documentation)
     */
    static pick(plot: Plot, x: number, y: number, width?: number, height?: number, filter?: Function): object[];
}
