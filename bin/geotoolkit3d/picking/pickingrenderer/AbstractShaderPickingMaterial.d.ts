import {ShaderMaterial, Material, Vector4, Object3D, Matrix4} from '../../THREE';
import {Plot} from '../../Plot';
import {PickingModes} from '../../Constants';

/**
 * The parent class for picking materials that uses a Shader based picking mechanism.<br>
 * <br>
 * The shader chunks and uniforms contained in this class should be used to compute/write picking information in pixels.<br>
 * <br>
 */
export class AbstractShaderPickingMaterial extends ShaderMaterial {
    /**
     * The parent class for picking materials that uses a Shader based picking mechanism.<br>
     * <br>
     * The shader chunks and uniforms contained in this class should be used to compute/write picking information in pixels.<br>
     * <br>
     * @param options The options
     * @param options.uniforms The object describing the uniforms for this material in the usual THREEJS format
     * @param options.vertexshader The vertex shader (GLSL code)
     * @param options.fragmentshader The fragment shader (GLSL code)
     * @param options.material The material replaced by this picking material
     */
    constructor(options?: object | { uniforms?: object; vertexshader?: string; fragmentshader?: string; material?: Material; } );
    /**
     * Set picking options, note that this setOptions expects all mandatory parameters to be set
     * @param options The picking options
     * @param options.plot The plot
     * @param options.x The x coordinate in device
     * @param options.y The y coordinate in device
     * @param options.pickingmode The picking mode
     * @param options.pickingrgba The shape unique identifier as RGBA
     * @param options.candidates The objects being picked (mandatory for XYZ)
     * @param options.projectioninversematrix The inverse projection matrix (mandatory for XYZ)
     * @param options.viewinversematrix The inverse view matrix (mandatory for XYZ)
     * @param options.normalizationmatrix The matrix that normalize model coordinates
     */
    setOptions(options: object | { plot?: Plot; x?: number; y?: number; pickingmode?: PickingModes | number; pickingrgba?: Vector4; candidates?: Object3D[]; projectioninversematrix?: Matrix4; viewinversematrix?: Matrix4; normalizationmatrix?: Matrix4; } ): this;
    /**
     * Get abstract shader picking material options
     * (see {@link @int/geotoolkit3d/picking/pickingrenderer/AbstractShaderPickingMaterial.AbstractShaderPickingMaterial#setOptions} for more info)
     */
    getOptions(): object | any;
    /**
     * Computes a matrix to transform coordinates contained in the plot model space to ]0...1[.<br>
     * This is used to normalize coordinates during picking so that the GPU will only handle normalized coordinates.<br>
     * @param plot The plot to compute the normalization matrix for
     */
    static computePlotNormMatrix(plot: Plot): Matrix4;
    /**
     * Computes a matrix to transform coordinates contained in ]0...1[ to a plot model space.<br>
     * This is used to un-normalize coordinates returned by the GPU.<br>
     * @param plot The Plot to compute the inverse normalization matrix for
     */
    static computePlotNormInvMatrix(plot: Plot): Matrix4;
}
