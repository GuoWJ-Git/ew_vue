import {SpriteMaterial, Vector4, Object3D} from '../../THREE';
import {Plot} from '../../Plot';
import {PickingModes} from '../../Constants';

/**
 * This class implements the renderer-based-picking behavior for Sprites.<br>
 * As Sprites are renderer through the THREE.SpritePlugin, there is no easy way to override the shader used. (r71)<br>
 * <br>
 * This class emulates some of the behavior that should have been in the shader itself.<br>
 * So that renderer pickin can be done on Sprites.<br>
 * Note that this implementation ignores any transparency in the sprite and does picking on the whole area covered by the sprite.<br>
 * <br>
 */
export class DefaultSpritePickingMaterial extends SpriteMaterial {
    /**
     * This class implements the renderer-based-picking behavior for Sprites.<br>
     * As Sprites are renderer through the THREE.SpritePlugin, there is no easy way to override the shader used. (r71)<br>
     * <br>
     * This class emulates some of the behavior that should have been in the shader itself.<br>
     * So that renderer pickin can be done on Sprites.<br>
     * Note that this implementation ignores any transparency in the sprite and does picking on the whole area covered by the sprite.<br>
     * <br>
     */
    constructor();
    /**
     * Set picking options, note that this setOptions expects all mandatory parameters to be set
     * @param options The picking options
     * @param options.plot The plot
     * @param options.x The x coordinate in device
     * @param options.y The y coordinate in device
     * @param options.pickingmode The picking mode
     * @param options.pickingrgba The shape unique identifier as RGBA
     * @param options.candidates The objects being picked (mandatory for XYZ)
     */
    setOptions(options: object | { plot?: Plot; x?: number; y?: number; pickingmode?: PickingModes | number; pickingrgba?: Vector4; candidates?: Object3D[]; } ): this;
}
