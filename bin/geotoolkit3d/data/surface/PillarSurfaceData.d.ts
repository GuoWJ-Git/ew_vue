import {AbstractSurfaceData} from './AbstractSurfaceData';
import {Vector3, BufferAttribute} from '../../THREE';

/**
 * Surface data made of pillars that can be triangulated.<br>
 * <br>
 * The default triangulation algorithm requires that the given pillars are sorted.<br>
 * It also assumes that there is no overlapping/crossing between pillars.<br>
 * Pillars can have different point count.<br>
 * <br>
 */
export class PillarSurfaceData extends AbstractSurfaceData {
    /**
     * Surface data made of pillars that can be triangulated.<br>
     * <br>
     * The default triangulation algorithm requires that the given pillars are sorted.<br>
     * It also assumes that there is no overlapping/crossing between pillars.<br>
     * Pillars can have different point count.<br>
     * <br>
     * @param options The options
     * @param options.data The data options
     * @param options.data.pillars An array of fault pillars
     * @param options.data.xyoffset offset
     */
    constructor(options: object | { data?: object | { pillars?: {x: number, y: number, z: number}[]; xyoffset?: Vector3; } ; } );
    /**
     * Triangulation
     * @param options options object
     * @param options.data data object
     * @param options.data.pillars An array of fault pillars
     * @param options.resamplingpointcount The z coordinates of a pillar
     * @param options.autosortpillars sort the pillars
     * @param options.autosortpillarpoints sort the pillars points
     */
    static triangulate(options: object | { data: object | { pillars: {x: number, y: number, z: number}[]; } ; resamplingpointcount: number; autosortpillars: boolean; autosortpillarpoints: boolean; } ): object;
    /**
     * Returns the vertex/index attributes
     */
    getAttributes(): {position: BufferAttribute; index: BufferAttribute; interleaved: boolean} | object;
}
