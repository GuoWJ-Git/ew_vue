import {AbstractMoveTool} from './AbstractMoveTool';
import {Vector2} from '../THREE';

/**
 * This class offers the ability to drag an object across the scene.<br>
 * <br>
 * Internally it computes the distance dragged considering the Plot as a two dimension slider (horizontal/vertical).<br>
 * Calling code should provide the function that convert this 2D displacement in an actual 'move'.<br>
 */
export class SliderMoveTool extends AbstractMoveTool {
    /**
     * This class offers the ability to drag an object across the scene.<br>
     * <br>
     * Internally it computes the distance dragged considering the Plot as a two dimension slider (horizontal/vertical).<br>
     * Calling code should provide the function that convert this 2D displacement in an actual 'move'.<br>
     * @param options See {@link @int/geotoolkit3d/tool/AbstractMoveTool.AbstractMoveTool} for inherited options
     * @param options.name tool name
     */
    constructor(options: object | { name?: string; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options See {@link @int/geotoolkit3d/tool/AbstractMoveTool.AbstractMoveTool#setOptions} for inherited options
     * @param options.initialpoint The starting point for displacement in device coordinates
     */
    setOptions(options: object | { initialpoint?: Vector2; } ): this;
    /**
     * Get slider move tool options
     * (see {@link @int/geotoolkit3d/tool/SliderMoveTool.SliderMoveTool#setOptions} for more info)
     */
    getOptions(): object | any;
    /**
     * Sets the function that should apply the computed 'move operation' to the targeted object.<br>
     * <br>
     * Function parameters are:<br>
     * {THREE.Object3D} object The object being moved<br>
     * {THREE.Vector2} move The displacement in screen space to apply<br>
     * {THREE.Vector2} initialPoint The initial point<br>
     * Function should return 'true' to reset the reference point used for distance calculation<br>
     * @param func The function
     */
    setMoveFunction(func: Function): this;
    /**
     * Function to clean up the references from this tool.
     */
    dispose(): void;
}
