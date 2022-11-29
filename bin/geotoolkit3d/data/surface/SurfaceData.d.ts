import {AbstractSurfaceData} from './AbstractSurfaceData';
import {BufferAttribute} from '../../THREE';

/**
 * Surface data that can be triangulated.<br>
 */
export class SurfaceData extends AbstractSurfaceData {
    /**
     * Surface data that can be triangulated.<br>
     * @param options The options
     * @param options.data The data options
     * @param options.data.x The X values to triangulate
     * @param options.data.y The Y values to triangulate
     * @param options.data.z The Z values to triangulate
     * @param options.data.nullvalue The value representing a non-value elevation
     * @param options.data.values optional Value array to instantiate
     * @param options.unorderedtriangulation optional. options for triangulation of unordered surface points.
     * @param options.unorderedtriangulation.enable optional. Try changing this value if experiencing artifacts on the rendered surface.
     * If true, use the default triangulation algorithm for non-ordered (random) point sets.
     * If false, use an alternative triangulation algorithm for already ordered point sets. The alternative triangulation is much slower, and works better for pointsets ordered in row/columns, in this case only will it produce more accurate results.
     * @param options.unorderedtriangulation.enablefiltergaps optional. Whether to filter out triangles that forms in large gaps where there is no data.
     * This help when the points are in a concave hull shape, but a too low threshold can remove usefull triangles. For non-ordered triangulation only.
     * @param options.unorderedtriangulation.filtergapsthreshold optional. The threshold for gap filtering.
     * A smaller threshold  will filter out smaller triangles, for exemple a value of 5 will filter out triangles that have edges 5 times longer (or more) than the average adge length in the surface.
     */
    constructor(options: object | { data: object | { x: number[]; y: number[]; z: number[]; nullvalue?: number; values?: number[]; } ; unorderedtriangulation?: object | { enable?: boolean; enablefiltergaps?: boolean; filtergapsthreshold?: number; } ; } );
    /**
     * Returns the vertex/index attributes
     */
    getAttributes(): {position: BufferAttribute; index: BufferAttribute; nullvalue: number | any; interleaved: boolean; xmin: number; xmax: number; ymin: number; ymax: number; zmin: number; zmax: number; values: number[]; valuemin: number; valuemax: number} | object;
}
