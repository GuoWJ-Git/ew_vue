import {BufferAttribute} from '../../THREE';

/**
 * Parent class for surfaces data.<br>
 * <br>
 * Surface data is responsible of consuming the raw data and converting it to triangles.<br>
 * Those triangles will be stored in {@link https://threejs.org/docs/index.html#api/en/core/BufferAttribute THREE.BufferAttribute} as vertices and indices.<br>
 * <br>
 * Inheriting classes should provide data for surface objects through the implementation of getAttributes.<br>
 */
export class AbstractSurfaceData {
    /**
     * Parent class for surfaces data.<br>
     * <br>
     * Surface data is responsible of consuming the raw data and converting it to triangles.<br>
     * Those triangles will be stored in {@link https://threejs.org/docs/index.html#api/en/core/BufferAttribute THREE.BufferAttribute} as vertices and indices.<br>
     * <br>
     * Inheriting classes should provide data for surface objects through the implementation of getAttributes.<br>
     * @param options The options to use to create the surface
     * @param options.interleaved resulting data should be a interleaved
     * @param options.bufferpadding resulting interleaved data should leave bufferpadding
     */
    constructor(options?: object | { interleaved?: boolean; bufferpadding?: number; } );
    /**
     * Returns the vertex/index attributes
     */
    getAttributes(): {position: BufferAttribute; index: BufferAttribute} | object;
}
