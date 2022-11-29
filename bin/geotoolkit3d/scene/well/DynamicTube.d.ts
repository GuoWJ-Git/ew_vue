import {Object3D} from '../Object3D';
import {Color} from '../../THREE';
import {Side} from '../../Constants';
import {ColorProvider} from '../../../geotoolkit/util/ColorProvider';

/**
 * Trajectory tube with possibility to add point in real-time.
 */
export class DynamicTube extends Object3D {
    /**
     * Trajectory tube with possibility to add point in real-time.
     * @param options The options
     * @param options.axismin The minimum radius value this corresponds to the value that will be mapped to radiusmin
     * @param options.axismax The maximum radius value this corresponds to the value that will be mapped to radiusmax
     * @param options.radiusmin The minimum radius, this is used as a size factor applied to the ellipses
     * @param options.radiusmax The maximum radius, this is used as a size factor applied to the ellipses
     * @param options.tubeprecision The ellipsis shape is approximated using triangles. This factor is used to define how many triangles will be used for the approximation.
     * @param options.openended False if the tube should have a cap at both ends
     * @param options.startbuffersize the number of points this will create as a starting buffer for vertexs
     * @param options.bufferresizefactor the amount to grow GPU buffers when points overflow
     * @param options.color Optional single color (THREE.Color('blue') by default)
     * @param options.opacity opacity
     * @param options.transparent transparent
     * @param options.side side
     * @param options.emissive emissive color
     * @param options.emissiveintensity intensity emissive
     * @param options.vertexcolors vertex colors
     * @param options.unlit unlit
     * @param options.colorprovider A color provider to generate the colormap
     */
    constructor(options?: object | { axismin?: number; axismax?: number; radiusmin?: number; radiusmax?: number; tubeprecision?: number; openended?: boolean; startbuffersize?: number; bufferresizefactor?: number; color?: Color; opacity?: number; transparent?: boolean; side?: Side; emissive?: Color; emissiveintensity?: number; vertexcolors?: Color; unlit?: number; colorprovider?: ColorProvider; } );
    /**
     * Sets options
     * @param options The options
     * @param options.axismin The minimum radius value this corresponds to the value that will be mapped to radiusmin
     * @param options.axismax The maximum radius value this corresponds to the value that will be mapped to radiusmax
     * @param options.radiusmin The minimum radius, this is used as a size factor applied to the ellipses
     * @param options.radiusmax The maximum radius, this is used as a size factor applied to the ellipses
     * @param options.tubeprecision The ellipsis shape is approximated using triangles. This factor is used to define how many triangles will be used for the approximation.
     * @param options.openended False if the tube should have a cap at both ends
     * @param options.startbuffersize the number of points this will create as a starting buffer for vertexs
     * @param options.bufferresizefactor the amount to grow GPU buffers when points overflow
     * @param options.color Optional single color (reset to white if a colorprovider is given)
     * @param options.opacity opacity
     * @param options.transparent transparent
     * @param options.side side
     * @param options.emissive emissive color
     * @param options.emissiveintensity intensity emissive
     * @param options.vertexcolors vertex colors
     * @param options.unlit unlit
     * @param options.colorprovider A color provider to generate the colormap
     */
    setOptions(options?: object | { axismin?: number; axismax?: number; radiusmin?: number; radiusmax?: number; tubeprecision?: number; openended?: boolean; startbuffersize?: number; bufferresizefactor?: number; color?: Color; opacity?: number; transparent?: boolean; side?: Side; emissive?: Color; emissiveintensity?: number; vertexcolors?: Color; unlit?: number; colorprovider?: ColorProvider; } ): this;
    /**
     * Gets options
     */
    getOptions(): {axismin: number; axismax: number; radiusmin: number; radiusmax: number; tubeprecision: number; openended: boolean; startbuffersize: number; bufferresizefactor: number; color: Color; opacity: number; transparent: boolean; side: Side; emissive: Color; emissiveintensity: number; vertexcolors: Color; unlit: number; colorprovider: ColorProvider} | any;
    /**
     * Clears the geometry of all points and data
     */
    resetData(): this;
    /**
     * Gets the current data
     */
    getData(): {xs: number[]; ys: number[]; zs: number[]; values: number[]; widths: number[]; heights: number[]; rolls: number[]} | object;
    /**
     * Adds the geometry to the Tube, if the options are changed the geometry will be recalculated.
     * @param xs The x deviation values
     * @param ys The y deviation values
     * @param zs The elevation values
     * @param values A value attribute used for coloring the trajectory (see options.colorprovider)
     * @param widths Radiuses of the ellipsis for the East-West axis (For first ellipsis)
     * @param heights Radiuses of the ellipsis for the North-South axis (For first ellipsis)
     * @param rolls Rolling angles in radians
     */
    addGeometry(xs: number[], ys: number[], zs: number[], values?: number[], widths?: number[], heights?: number[], rolls?: number[]): this;
}
