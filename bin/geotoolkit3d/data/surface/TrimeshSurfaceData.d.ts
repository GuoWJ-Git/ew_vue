import {AbstractSurfaceData} from './AbstractSurfaceData';
import {BufferAttribute} from '../../THREE';

/**
 * Surface data made of triangles (vertices and indices).<br>
 */
export class TrimeshSurfaceData extends AbstractSurfaceData {
    /**
     * Surface data made of triangles (vertices and indices).<br>
     * @param options 
     * @param options.data 
     * @param options.data.xyz The vertices values as x, y and elevation
     * @param options.data.indices The triangles indices
     * @param options.data.nullvalue The value representing a non-value elevation
     * @param options.data.values optional Value array to instantiate
     */
    constructor(options: object | { data: object | { xyz: number[] | BufferAttribute; indices: number[] | BufferAttribute; nullvalue?: number; values?: number[]; } ; } );
    /**
     * Returns the vertex/index attributes
     */
    getAttributes(): {position: BufferAttribute; index: BufferAttribute; values: number[]; nullvalue: number | any; interleaved: boolean} | object;
}
