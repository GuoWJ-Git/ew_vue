import {AbstractShaderPickingMaterial} from './AbstractShaderPickingMaterial';

/**
 * Material used to do renderer picking on a shader based Mesh.<br>
 * Unlike picking materials based on {@link @int/geotoolkit3d/picking/pickingrenderer/BasicPickingMaterial.BasicPickingMaterial}, this materials does not assumes any uniform exists on the replaced material.<br>
 */
export class DefaultShaderPickingMaterial extends AbstractShaderPickingMaterial {
    /**
     * Material used to do renderer picking on a shader based Mesh.<br>
     * Unlike picking materials based on {@link @int/geotoolkit3d/picking/pickingrenderer/BasicPickingMaterial.BasicPickingMaterial}, this materials does not assumes any uniform exists on the replaced material.<br>
     * @param options options
     */
    constructor(options: object);
}
