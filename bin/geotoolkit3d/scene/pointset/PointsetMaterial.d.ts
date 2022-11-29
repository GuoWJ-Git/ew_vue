import {MeshLambertMaterial, Vector3} from '../../THREE';

/**
 * Instanced Pointset material
 */
export class PointsetMaterial extends MeshLambertMaterial {
    /**
     * Instanced Pointset material
     * @param options The material options
     * @param options.transparent if render using transparency blending or not. (transparency can have a considerable performance cost because of depth-peeling)
     * @param options.sizeindevice if this material should render using transparency blending or not.
     */
    constructor(options: object | { transparent?: boolean; sizeindevice?: boolean; } );
    /**
     * @param options The material options
     * @param options.transparent if render using transparency blending or not. (transparency can have a considerable performance cost because of depth-peeling)
     * @param options.sizeindevice if this material should render using transparency blending or not.
     */
    setOptions(options: object | { transparent?: boolean; sizeindevice?: boolean; } ): void;
    /**
     * @param scale the inverse of the plot scale. If user chose not to use inversePlotScale, its value will be (1, 1, 1).
     */
    setInversePlotScale(scale: Vector3): void;
}
