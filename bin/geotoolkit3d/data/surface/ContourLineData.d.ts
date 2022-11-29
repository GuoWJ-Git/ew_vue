import {AbstractSurfaceData} from './AbstractSurfaceData';
import {BufferAttribute} from '../../THREE';

/**
 * Surface data made of contour lines that can be triangulated.<br>
 */
export class ContourLineData extends AbstractSurfaceData {
    /**
     * Surface data made of contour lines that can be triangulated.<br>
     * @param options The options
     * @param options.data The data options
     * @param options.data.lines An array of contour lines
     */
    constructor(options: object | { data: object | { lines: {x: number, y: number, z: number}[]; } ; } );
    /**
     * Returns the vertex/index attributes
     */
    getAttributes(): {position: BufferAttribute; index: BufferAttribute; interleaved: boolean; xmin: number; xmax: number; ymin: number; ymax: number; zmin: number; zmax: number; valuemin: number; valuemax: number; values: number[]} | object;
}
