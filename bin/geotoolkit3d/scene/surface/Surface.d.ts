import {AbstractSurface} from './AbstractSurface';
import {AbstractSurfaceData} from '../../data/surface/AbstractSurfaceData';
import {ColorProvider} from '../../../geotoolkit/util/ColorProvider';
import {Color, Box2, Texture} from '../../THREE';
import {HeightMapColorBarValueMode} from '../../Constants';

/**
 * A Surface 3D object.<br>
 * <br>
 * This object represents a 3D surface with an optional attribute used for coloring.<br>
 * The surface's geometry is defined by the given SurfaceData.<br>
 * <br>
 * The surface will contains holes whenever the given attribute or elevation is equals to nullvalue.<br>
 * Note that the current implementation still generates the vertices for those points but abstain itself from rendering them.<br>
 * <br>
 */
export class Surface extends AbstractSurface {
    /**
     * A Surface 3D object.<br>
     * <br>
     * This object represents a 3D surface with an optional attribute used for coloring.<br>
     * The surface's geometry is defined by the given SurfaceData.<br>
     * <br>
     * The surface will contains holes whenever the given attribute or elevation is equals to nullvalue.<br>
     * Note that the current implementation still generates the vertices for those points but abstain itself from rendering them.<br>
     * <br>
     * @param options The options to use to create the surface
     * @param options.data The data to use to create the surface
     * @param options.data.surface The surface geometry data object
     * @param options.data.values The attribute values used to colorize the surface
     * @param options.data.nullvalue The attribute nullvalue to introduce holes in the surface
     * @param options.colorprovider A color provider or a single color in css format
     * @param options.valuemode value mode for color map texture
     * @param options.minlod the lowest level of tile layer
     * @param options.maxlod the highest level of tile layer
     * @param options.extent visible model limits of elevation (WGS84 full limits by default)
     * @param options.maplimits model limits of elevation (WGS84 full limits by default)
     * @param options.opacity opacity
     * @param options.smoothshadingfactor Define how flat/smooth the surface triangle shading is, from 0.0 for totally flat, up to 1.0 for totally smooth.
     * @param options.wireframe set true to enable wireframe rendering mode. Wireframe mode does not use shading.
     * @param options.material object for loading texture tiles
     * @param options.material.server server for loading texture tiles
     * @param options.material.formatterfunction formatter function for loading texture tiles
     * @param options.geometry object for loding geometry tiles
     * @param options.geometry.server server for loading geometry tiles
     * @param options.geometry.formatterfunction formatter function for loading geometry tiles
     * @param options.tilewidth tile width
     * @param options.tileheight tile height
     * @param options.maximumrequests maximum requests at the same time (for network optimization)
     * @param options.texture texture to paint surface
     */
    constructor(options: object | { data: object | { surface: AbstractSurfaceData; values?: number[]; nullvalue?: number; } ; colorprovider?: ColorProvider | string | Color; valuemode?: HeightMapColorBarValueMode; minlod?: number; maxlod?: number; extent?: Box2; maplimits?: Box2; opacity?: number; smoothshadingfactor?: number; wireframe?: boolean; material?: object | { server: string; formatterfunction: Function; } ; geometry?: object | { server: string; formatterfunction: Function; } ; tilewidth?: number; tileheight?: number; maximumrequests?: number; texture?: Texture; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options to change
     * @param options.data The data to use to create the surface
     * @param options.data.values attribute values used to colorize the surface
     * @param options.data.nullvalue attribute nullvalue to introduce holes in the surface
     * @param options.data.surface data for elevation object
     * @param options.colorprovider A color provider or a single color in css format
     * @param options.valuemode value mode for color map texture
     * @param options.minlod the lowest level of tile layer
     * @param options.maxlod the highest level of tile layer
     * @param options.extent visible model limits of elevation (WGS84 full limits by default)
     * @param options.maplimits model limits of elevation (WGS84 full limits by default)
     * @param options.opacity opacity
     * @param options.smoothshadingfactor Define how flat/smooth the surface triangle shading is, from 0.0 for totally flat, up to 1.0 for totally smooth.
     * @param options.wireframe set true to enable wireframe rendering mode. Wireframe mode does not use shading.
     * @param options.material object for loading texture tiles
     * @param options.material.server server for loading texture tiles
     * @param options.material.formatterfunction formatter function for loading texture tiles
     * @param options.geometry object for loding geometry tiles
     * @param options.geometry.server server for loading geometry tiles
     * @param options.geometry.formatterfunction formatter function for loading geometry tiles
     * @param options.tilewidth tile width
     * @param options.tileheight tile height
     * @param options.maximumrequests maximum requests at the same time (for network optimization)
     * @param options.texture texture to paint surface
     */
    setOptions(options?: object | { data?: object | { values?: number[]; nullvalue?: number; surface?: AbstractSurfaceData; } ; colorprovider?: ColorProvider | string | Color; valuemode?: HeightMapColorBarValueMode; minlod?: number; maxlod?: number; extent?: Box2; maplimits?: Box2; opacity?: number; smoothshadingfactor?: number; wireframe?: boolean; material?: object | { server?: string; formatterfunction?: Function; } ; geometry?: object | { server?: string; formatterfunction?: Function; } ; tilewidth?: number; tileheight?: number; maximumrequests?: number; texture?: Texture; } ): this;
    /**
     * Get surface options
     * (see {@link @int/geotoolkit3d/scene/surface/Surface.Surface#setOptions} for more info)
     */
    getOptions(): {data: {values: Float32Array}; maxlod: number; nullvalue: number; opacity: number; tilewidth: number; tileheight: number; maximumrequests: number; zmin: number; zmax: number} | any;
}
