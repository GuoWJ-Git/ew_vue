import {AbstractSurfaceData} from './AbstractSurfaceData';
import {BufferAttribute} from '../../THREE';

/**
 * Surface data made of an vertice grid that can be triangulated.<br>
 * <br>
 * The grid is expected to have column first:<br>
 * <pre>
 * [(0,0), (1,0), (2,0), (3,0), (0,1), (1,1), (2,1), (3,1), [...], (0,3), (1,3), (2,3), (3,3)]
 * </pre>
 * <br>
 * X and Y values are optionals:<br>
 * If only elevations are provided, X and Y values will be determined from the xmin,xstep, ymin, and ystep values.<br>
 * If both xvalues and yvalues arrays are provided, they should be in the same layout as the elevation array.
 * <br>
 */
export class GridSurfaceData extends AbstractSurfaceData {
    /**
     * Surface data made of an vertice grid that can be triangulated.<br>
     * <br>
     * The grid is expected to have column first:<br>
     * <pre>
     * [(0,0), (1,0), (2,0), (3,0), (0,1), (1,1), (2,1), (3,1), [...], (0,3), (1,3), (2,3), (3,3)]
     * </pre>
     * <br>
     * X and Y values are optionals:<br>
     * If only elevations are provided, X and Y values will be determined from the xmin,xstep, ymin, and ystep values.<br>
     * If both xvalues and yvalues arrays are provided, they should be in the same layout as the elevation array.
     * <br>
     * @param options The options
     * @param options.interleaved Will produce interleaved buffer if set to true
     * @param options.bufferpadding The padding for interleaved buffer
     * @param options.surfacesmooth If true, surface data will be interpolated and smoothed
     * @param options.data The data options
     * @param options.data.width The grid width
     * @param options.data.height The grid height
     * @param options.data.elevation The elevation values of each vertex to triangulate
     * @param options.data.xvalues The x values of each vertex to triangulate
     * @param options.data.yvalues The y values of each vertex to triangulate
     * @param options.data.nullvalue The value representing a non-value elevation
     * @param options.data.values optional Value array to instantiate
     * @param options.data.xmin The grid x start
     * @param options.data.xstep The grid x step
     * @param options.data.ymin The grid y start
     * @param options.data.ystep The grid y step
     * @param options.data.normals Will compute normals in triangulation if set to true
     */
    constructor(options: object | { interleaved?: boolean; bufferpadding?: number; surfacesmooth?: boolean; data: object | { width: number; height: number; elevation?: number[]; xvalues?: number[]; yvalues?: number[]; nullvalue?: number; values?: number[]; xmin?: number; xstep?: number; ymin?: number; ystep?: number; normals?: boolean; } ; } );
    /**
     * Returns the vertex/index attributes
     */
    getAttributes(): {position: BufferAttribute; index: BufferAttribute; normal: BufferAttribute; values: number[]; nullvalue: number | any; interleaved: boolean; xmin: number; xmax: number; ymin: number; ymax: number; zmin: number; zmax: number} | object;
}
