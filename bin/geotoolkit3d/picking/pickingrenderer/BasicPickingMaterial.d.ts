import {AbstractShaderPickingMaterial} from './AbstractShaderPickingMaterial';

/**
 * Basic implementation of a picking material.<br>
 * This material assumes that the material used for rendering is using the common features of THREEJS (common uniforms).<br>
 * This class combines the features provided by {@link @int/geotoolkit3d/picking/pickingrenderer/AbstractShaderPickingMaterial.AbstractShaderPickingMaterial} to create a working picking material.<br>
 * However, even if this material is fully operational, it's not used directly.<br>
 * It's inherited by default implementations of picking materials which are used in place of this raw/basic class.<br>
 */
export class BasicPickingMaterial extends AbstractShaderPickingMaterial {
    /**
     * Basic implementation of a picking material.<br>
     * This material assumes that the material used for rendering is using the common features of THREEJS (common uniforms).<br>
     * This class combines the features provided by {@link @int/geotoolkit3d/picking/pickingrenderer/AbstractShaderPickingMaterial.AbstractShaderPickingMaterial} to create a working picking material.<br>
     * However, even if this material is fully operational, it's not used directly.<br>
     * It's inherited by default implementations of picking materials which are used in place of this raw/basic class.<br>
     * @param options options
     */
    constructor(options: object);
}
