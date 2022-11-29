import {ShaderMaterial, Color} from '../THREE';
import {ColorProvider} from '../../geotoolkit/util/ColorProvider';

/**
 * A material similar to THREE.ShaderMateiral, rendered with custom shaders and supports color maps through a texture
 * <br>
 * If the given colorprovider is null then only the single color will be used.<br>
 * <br>
 */
export class ColorMapShaderMaterial extends ShaderMaterial {
    /**
     * A material similar to THREE.ShaderMateiral, rendered with custom shaders and supports color maps through a texture
     * <br>
     * If the given colorprovider is null then only the single color will be used.<br>
     * <br>
     * @param options The options
     * @param options.vertexShader Vertex shader GLSL code
     * @param options.fragmentShader Fragment shader GLSL code
     * @param options.uniforms Specifying the uniforms to be passed to the shader code; keys are uniform names, values are definitions of the form
     * @param options.color Optional single color (reset to white if a colorprovider is given)
     * @param options.colorprovider A color provider to generate the colormap
     * @param options.alphaTest Sets the alpha value to be used when running an alpha test.
     * @param options.blendDst Blending destination.
     * @param options.blendEquation Blending equation to use when applying blending.
     * @param options.blending Which blending to use when displaying objects with this material.
     * @param options.blendSrc Blending source.
     * @param options.colorWrite Whether to render the material's color.
     * @param options.depthFunc Which depth function to use.
     * @param options.depthTest Whether to have depth test enabled when rendering this material.
     * @param options.depthWrite Whether rendering this material has any effect on the depth buffer.
     * @param options.fog Whether the material is affected by fog.
     * @param options.precision Override the renderer's default precision for this material.
     * @param options.toneMapped Defines whether this material is tone mapped
     * @param options.lights Defines whether this material uses lighting
     * @param options.clipping Defines whether this material supports clipping
     */
    constructor(options?: object | { vertexShader?: string; fragmentShader?: string; uniforms?: object; color?: Color; colorprovider?: ColorProvider; alphaTest?: number; blendDst?: number; blendEquation?: number; blending?: number; blendSrc?: number; colorWrite?: boolean; depthFunc?: number; depthTest?: boolean; depthWrite?: boolean; fog?: boolean; precision?: string; toneMapped?: boolean; lights?: boolean; clipping?: boolean; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.color Optional single color (reset to white if a colorprovider is given)
     * @param options.colorprovider A color provider to generate the colormap
     */
    setOptions(options: object | { color?: Color; colorprovider?: ColorProvider; } ): this;
    /**
     * Get mesh colormap basic material options
     * (see {@link @int/geotoolkit3d/scene/ColorMapShaderMaterial.ColorMapShaderMaterial#setOptions} for more info)
     */
    getOptions(): object | any;
    /**
     * Return function to update colormap
     */
    protected getUpdateColorMap(): Function;
}
