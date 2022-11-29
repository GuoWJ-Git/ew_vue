/**
 * Class for triangulation of points using Delaunay algorithm.
 * (based on implementation by Mapbox https://github.com/mapbox/delaunator, released under the ISC License)
 */
export class DelaunayTriangulator {
    /**
     * Class for triangulation of points using Delaunay algorithm.
     * (based on implementation by Mapbox https://github.com/mapbox/delaunator, released under the ISC License)
     */
    constructor();
    /**
     * Triangulate the given points using Delaunay algorithm.
     * @param vertices vertices
     * @param is2d 2d/3d, 3d by default
     */
    static triangulate(vertices: number[], is2d?: boolean): number[];
    /**
     * Triangulate the given 3D points using Delaunay algorithm, this version works best for non-ordered 3D point sets (that does not follow a row or column order layout).
     * This triangulation will produce more accurate results if the given points are forming a convex shape (ideally) but if not, concave artifacts can be filtered with the filtergaps options.
     * @param vertices3D 3D vertices.
     * @param options the triangulation options.
     * @param options.enablefiltergaps optional. Whether to filter out triangles that forms in large gaps where there is no data.
     * This help when the points are in a concave hull shape, but a too low threshold can remove usefull triangles. For unordered triangulation only.
     * @param options.filtergapsthreshold optional. The threshold for gap filtering.
     * A smaller threshold  will filter out smaller triangles, for exemple a value of 5 will filter out triangles that have edges 5 times longer (or more) than the average adge length in the surface.
     */
    static triangulateSurface(vertices3D: number[], options: object | { enablefiltergaps?: boolean; filtergapsthreshold?: number; } ): number[];
}
