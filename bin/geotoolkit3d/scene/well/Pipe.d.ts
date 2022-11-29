import {Object3D} from '../Object3D';
import {Vector3, Color} from '../../THREE';
import {ColorProvider} from '../../../geotoolkit/util/ColorProvider';
import {Side, Colors} from '../../Constants';

/**
 * Object for displaying pipes
 */
export class Pipe extends Object3D {
    /**
     * Object for displaying pipes
     * @param options options object
     * @param options.data The data options
     * @param options.data.positions the XYZ coordinates for the path
     * @param options.data.normals the XYZ normals for the path
     * @param options.data.binormals the XYZ binormals for the path
     * @param options.data.tangents the XYZ tangents for the path
     * @param options.data.radii radius of the tube for each deviation value
     * @param options.data.values A value attribute used for coloring the trajectory
     * @param options.size tube size factor
     * @param options.tubeprecision The ellipsis shape is approximated using triangles. This factor is used to define how many
     *     triangles will be used for the approximation.
     * @param options.openended False if the tube should have a cap at both ends
     * @param options.hardedges create hard edges for size changes
     * @param options.color Optional single color (new THREE.Color(0xffffff) by default)
     * @param options.colorprovider A color provider to generate the colormap
     * @param options.opacity opacity
     * @param options.transparent transparent
     * @param options.side side (geotoolkit3d.Constants.Side.DoubleSide by default)
     * @param options.emissive emissive color (new THREE.Color(0x000000) by default)
     * @param options.emissiveintensity intensity emissive
     * @param options.vertexcolors vertex colors
     * @param options.unlit unlit
     * @param options.radiusscale radius scale
     * @param options.globalradius global radius
     */
    constructor(options: object | { data: object | { positions: Vector3[]; normals: Vector3[]; binormals: Vector3[]; tangents: Vector3[]; radii: number[]; values: number[] | number; } ; size?: number; tubeprecision?: number; openended?: boolean; hardedges?: boolean; color?: Color; colorprovider?: ColorProvider; opacity?: number; transparent?: boolean; side?: Side; emissive?: Color; emissiveintensity?: number; vertexcolors?: Colors | boolean; unlit?: number; radiusscale?: number; globalradius?: number; } );
    /**
     * Sets options
     * @param options options object
     * @param options.data The data options
     * @param options.data.positions the XYZ coordinates for the path
     * @param options.data.normals the XYZ normals for the path
     * @param options.data.binormals the XYZ binormals for the path
     * @param options.data.tangents the XYZ tangents for the path
     * @param options.data.radii radius of the tube for each deviation value
     * @param options.data.values A value attribute used for coloring the trajectory
     * @param options.size tube size factor
     * @param options.tubeprecision The ellipsis shape is approximated using triangles. This factor is used to define how many
     *     triangles will be used for the approximation.
     * @param options.openended False if the tube should have a cap at both ends
     * @param options.hardedges create hard edges for size changes
     * @param options.color Optional single color
     * @param options.colorprovider A color provider to generate the colormap
     * @param options.opacity [opacity]
     * @param options.transparent [transparent]
     * @param options.side side
     * @param options.emissive emissive color
     * @param options.emissiveintensity intensity emissive
     * @param options.vertexcolors vertex colors
     * @param options.unlit unlit
     * @param options.radiusscale radius scale
     * @param options.globalradius global radius
     * @param index The index-th well pipe
     */
    setOptions(options?: object | { data?: object | { positions?: Vector3[]; normals?: Vector3[]; binormals?: Vector3[]; tangents?: Vector3[]; radii?: number[]; values?: number[] | number; } ; size?: number; tubeprecision?: number; openended?: boolean; hardedges?: boolean; color?: Color; colorprovider?: ColorProvider; opacity?: number; transparent?: boolean; side?: Side; emissive?: Color; emissiveintensity?: number; vertexcolors?: Colors | boolean; unlit?: number; radiusscale?: number; globalradius?: number; } , index?: number): this;
    /**
     * Gets options
     * @param index The index-th well pipe
     */
    getOptions(index?: number): {data: {positions: Vector3[]; normals: Vector3[]; binormals: Vector3[]; tangents: Vector3[]; radii: number[]; values: number[] | number}; size: number; tubeprecision: number; openended: boolean; hardedges: boolean; color: Color; colorprovider: ColorProvider | null; opacity: number; transparent: boolean; side: Side; emissive: Color; emissiveintensity: number; vertexcolors: boolean; unlit: number; radiusscale: number; globalradius: number} | any;
}
