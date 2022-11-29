import {Object3D} from '../scene/Object3D';
import {BufferGeometry, BufferAttribute, InterleavedBufferAttribute} from '../THREE';

/**
 * Generate line segments that represent the geometry's normals, for debug purposes.
 * Please note that scaling the geometry or the scene along any axis might stretch the lines and not represent the normals as intended.
 */
export class MeshNormalsHelper extends Object3D {
    /**
     * Generate line segments that represent the geometry's normals, for debug purposes.
     * Please note that scaling the geometry or the scene along any axis might stretch the lines and not represent the normals as intended.
     * @param options options for MeshNormalsHelper
     * @param options.geometry the geometry to display the normals of.
     * @param options.showsmoothnormals whether to display the averaged normals used for smooth shading for each triangle.
     * @param options.smoothnormalsscale the scale of the smooth shading normals.
     * @param options.smoothnormalscolor the color of the smooth shading normals.
     * @param options.showflatnormals whether to display the averaged normals used for smooth shading for each triangle.
     * @param options.flatnormalsscale the scale of the smooth shading normals.
     * @param options.flatnormalscolor the color of the smooth shading normals.
     */
    constructor(options: object | { geometry: BufferGeometry; showsmoothnormals?: boolean; smoothnormalsscale?: boolean; smoothnormalscolor?: boolean; showflatnormals?: boolean; flatnormalsscale?: boolean; flatnormalscolor?: boolean; } );
    /**
     * Generate lines representing the average normal vector of each triangle, based on the average between the 3 normals of each triangle vertex normal attribute.
     * @param indexBuffer the buffer holding the indices.
     * @param vertexBuffer the buffer holding the vertex xyz coordinates.
     * @param normalBuffer the buffer holding the normals.
     * @param length the length of the lines to generate.
     */
    static createLinesFromSmoothshadingNormals(indexBuffer: BufferAttribute, vertexBuffer: BufferAttribute | InterleavedBufferAttribute, normalBuffer: BufferAttribute | InterleavedBufferAttribute, length: number): number[];
    /**
     * Generate lines representing the normal vector of each triangle, based on the triangle vertice coordinates.
     * Those lines represent accurately the flat shading direction of the normals.
     * @param indexBuffer the buffer holding the indices.
     * @param vertexBuffer the buffer holding the vertex xyz coordinates.
     * @param length the length of the lines to generate.
     */
    static createLinesFromFlatshadingNormals(indexBuffer: BufferAttribute, vertexBuffer: BufferAttribute | InterleavedBufferAttribute, length: number): number[];
}
