import {ColorMapShaderMaterial} from './ColorMapShaderMaterial';
import {Color, Texture} from '../THREE';
import {Side} from '../Constants';
import {ColorProvider} from '../../geotoolkit/util/ColorProvider';

/**
 * A material similar to THREE.BasicMaterial and implements colormap logic through a texture.<br>
 * <br>
 * This material requires the associated THREE.BufferGeometry to have a float attribute named upon ShaderUtil.COLORMAPVALUES_ATTRIBUTE_NAME value.<br>
 * This float value (per vertex) will be used to retrieve a color in the given colorprovider (converted to a colormap texture).<br>
 * The resulting color will be multiplied by the optional given static color (defaults to white unless explicitly set).<br>
 * <br>
 * If the given colorprovider is null then only the single color will be used.<br>
 * <br>
 */
export class MeshColorMapBasicMaterial extends ColorMapShaderMaterial {
    /**
     * A material similar to THREE.BasicMaterial and implements colormap logic through a texture.<br>
     * <br>
     * This material requires the associated THREE.BufferGeometry to have a float attribute named upon ShaderUtil.COLORMAPVALUES_ATTRIBUTE_NAME value.<br>
     * This float value (per vertex) will be used to retrieve a color in the given colorprovider (converted to a colormap texture).<br>
     * The resulting color will be multiplied by the optional given static color (defaults to white unless explicitly set).<br>
     * <br>
     * If the given colorprovider is null then only the single color will be used.<br>
     * <br>
     * @param options The options, see complete parameters in THREE.MeshBasicMaterial
     * @param options.color Optional single color
     * @param options.opacity opacity
     * @param options.transparent transparent
     * @param options.side side
     * @param options.map the map texture
     * @param options.vertexcolors vertex colors
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
     * @param options.alphaMap The alpha map is a grayscale texture that controls the opacity across the surface
     * @param options.aoMap The red channel of this texture is used as the ambient occlusion map
     * @param options.aoMapIntensity Intensity of the ambient occlusion effect
     * @param options.wireframe Render geometry as wireframe
     * @param options.wireframeLinecap Define appearance of line ends
     * @param options.wireframeLinejoin Define appearance of line joints
     */
    constructor(options: object | { color?: string | Color; opacity?: number; transparent?: boolean; side?: Side; map?: Texture; vertexcolors?: boolean; colorprovider?: ColorProvider; alphaTest?: number; blendDst?: number; blendEquation?: number; blending?: number; blendSrc?: number; colorWrite?: boolean; depthFunc?: number; depthTest?: boolean; depthWrite?: boolean; fog?: boolean; precision?: string; toneMapped?: boolean; lights?: boolean; clipping?: boolean; alphaMap?: Texture; aoMap?: Texture; aoMapIntensity?: number; wireframe?: boolean; wireframeLinecap?: string; wireframeLinejoin?: string; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * (see constructor of {@link @int/geotoolkit3d/scene/MeshColorMapBasicMaterial.MeshColorMapBasicMaterial} for more info)
     * @param options The options
     */
    setOptions(options: object): this;
    /**
     * Get mesh colormap basic material options
     * (see {@link @int/geotoolkit3d/scene/MeshColorMapBasicMaterial.MeshColorMapBasicMaterial#setOptions} for more info)
     */
    getOptions(): object | any;
}
