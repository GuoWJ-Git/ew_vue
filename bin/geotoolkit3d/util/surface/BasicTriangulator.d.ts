import {InterleavedBuffer, BufferAttribute, InterleavedBufferAttribute} from '../../THREE';

/**
 * Basic implementation, triangulate the grid as a 'complete' plane using nullvalue to mark missing/null vertices.<br>
 * Shape implementation are responsible to check the z value to determine if the vertex should be rendered or not.
 */
export class BasicTriangulator {
    /**
     * Basic implementation, triangulate the grid as a 'complete' plane using nullvalue to mark missing/null vertices.<br>
     * Shape implementation are responsible to check the z value to determine if the vertex should be rendered or not.
     */
    constructor();
    /**
     * Triangulate
     * @param options options object
     * @param options.data data object
     * @param options.data.width width of data
     * @param options.data.height height of data
     * @param options.data.xmin minimum x
     * @param options.data.xstep step x
     * @param options.data.ymin minimum y
     * @param options.data.ystep step y
     * @param options.data.normals true for creating normals
     * @param options.data.elevation elevation of data
     * @param options.data.xvalues x coordinates of data
     * @param options.data.yvalues y coordinates of data
     * @param options.data.nullvalue null value
     * @param options.bufferPadding buffer padding
     * @param options.interleaved interleaved
     */
    static triangulate(options: object | { data: object | { width: number; height: number; xmin?: number; xstep?: number; ymin?: number; ystep?: number; normals?: boolean; elevation?: number[]; xvalues?: number[]; yvalues?: number[]; nullvalue?: number; } ; bufferPadding?: number; interleaved?: boolean; } ): {triangles: {position: InterleavedBuffer | BufferAttribute; normal: InterleavedBuffer | BufferAttribute; index: BufferAttribute; vertexCount: number}; xmin: number; ymin: number; zmin: number; zmax: number; bufferpadding: number; bufferused: number; buffer: InterleavedBuffer; xmax: number; ymax: number} | object;
    /**
     * Compute the triangle normals.
     * This produces unweighted normals, normalize unweighted normals in glsl for better performance.
     * Copmpute the normal of each vertex's triangle, so that each vertex store the sum of the normals of all triangles it is part of.
     * This means that a vertex normal which is part of 6 triangles for example, will have the sum of those 6 triangle normal stored, which will be normalized later.
     * @param indexBuffer the buffer holding the indices.
     * @param vertexBuffer the buffer holding the vertex xyz coordinates.
     * @param normalBuffer the empty buffer that will hold the resulting normals.
     * @param nullvalue the z value that indicate an absence of value.
     */
    static createNormals(indexBuffer: BufferAttribute, vertexBuffer: BufferAttribute | InterleavedBufferAttribute, normalBuffer: BufferAttribute | InterleavedBufferAttribute, nullvalue: number): void;
    /**
     * Filter triangle indices based on the triangle vertex values, in order to clean the geometry and lighten the load at render time.
     * If any of the vertices is not a valid number, or match de defined nullvalue, the triangle indices are not kept.
     * @param indexBuffer buffer that contains the indices to filter
     * @param vertexBuffer buffer that contain the xzy vertex data
     * @param nullvalue the z value that represent an absence of data.
     */
    static filterIndices(indexBuffer: BufferAttribute, vertexBuffer: BufferAttribute | InterleavedBufferAttribute, nullvalue: number): BufferAttribute;
}
