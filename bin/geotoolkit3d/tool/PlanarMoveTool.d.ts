import {AbstractMoveTool} from './AbstractMoveTool';
import {Object3D, Vector3} from '../THREE';

/**
 * This class offers the ability to drag an object across the scene.<br>
 * <br>
 * It internally uses a plane facing the camera to compute the movement to be applied to the object.<br>
 * Which mean that the object will move in a 2D plane facing the camera.<br>
 * <br>
 * The movement operation applied to the object can be adjusted to fit a specific need by changing the adjust-function.<br>
 * <br>
 */
export class PlanarMoveTool extends AbstractMoveTool {
    /**
     * This class offers the ability to drag an object across the scene.<br>
     * <br>
     * It internally uses a plane facing the camera to compute the movement to be applied to the object.<br>
     * Which mean that the object will move in a 2D plane facing the camera.<br>
     * <br>
     * The movement operation applied to the object can be adjusted to fit a specific need by changing the adjust-function.<br>
     * <br>
     * @param options The options
     * @param options.object The object to be moved
     * @param options.armingkey The keycode to arm this tool (see AbstractMoveTool)
     * @param options.filter A function that can filter the pickable shape, takes the object to filter and it's current pickable status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link @int/geotoolkit3d/picking/RendererPicking.RendererPicking filtering} documentation)
     * @param options.pickenabled True if this tool should permit selection of the object to move
     * @param options.name tool name
     */
    constructor(options: object | { object: Object3D | null; armingkey?: number; filter?: Function; pickenabled?: boolean; name?: string; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.object The object to be moved
     * @param options.enabled The status of this tool
     * @param options.pickenabled True if this tool should also handle selection (picking)
     * @param options.pickingplanecenter The center point of the plane used to compute displacement
     * @param options.filter A function that can filter the pickable shape, takes the object to filter and it's current pickable status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link @int/geotoolkit3d/picking/RendererPicking.RendererPicking filtering} documentation)
     */
    setOptions(options: object | { object?: Object3D; enabled?: boolean; pickenabled?: boolean; pickingplanecenter?: Vector3; filter?: Function; } ): this;
    /**
     * Get planar move tool options
     * (see {@link @int/geotoolkit3d/tool/PlanarMoveTool.PlanarMoveTool#setOptions} for more info)
     */
    getOptions(): object | any;
    /**
     * Sets the function to use in order to control the displacement to be applied.<br>
     * <br>
     * Can be used to snap the object to a given step or to limit maximum/minimum position.<br>
     * Function parameters are:<br>
     * {THREE.Object3D} object The object being moved<br>
     * {THREE.Vector3} move The displacement to adjust<br>
     * @param func The function to use
     */
    setAdjustFunction(func: Function): this;
}
