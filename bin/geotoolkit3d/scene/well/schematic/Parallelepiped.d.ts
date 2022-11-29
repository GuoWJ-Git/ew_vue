import {SchematicBase} from './SchematicBase';
import {FillStyle} from '../../../../geotoolkit/attributes/FillStyle';
import {Box3, BufferGeometry} from '../../../THREE';

/**
 * A 3D parallelepiped schematic object.
 */
export class Parallelepiped extends SchematicBase {
    /**
     * A 3D parallelepiped schematic object.
     * @param options The options
     * @param options.data 2 points minimum required; if 2 points are provided the first one is the localisation
     * and the second provide the direction to tend to. If more than 2 points are provided then the points are actual
     * trajectory points around which a 4 side tube will be created.
     * @param options.data.x The x deviation values
     * @param options.data.y The y deviation values
     * @param options.data.z The elevation values
     * @param options.fillstyle 
     * @param options.width The width of the parallelepiped in modelspace (x axis)
     * @param options.height The height of the parallelepiped in modelspace (y axis)
     * @param options.depth The length of the parallelepiped in modelspace (used if there is only 2 points in the given path) (z axis)
     * @param options.widthsegments Number of segmented faces along the width of the sides
     * @param options.heightsegments Number of segmented faces along the height of the sides
     * @param options.depthsegments Number of segmented faces along the depth of the sides
     */
    constructor(options: object | { data: object | { x: number[]; y: number[]; z: number[]; } ; fillstyle: FillStyle; width?: number; height?: number; depth?: number; widthsegments?: number; heightsegments?: number; depthsegments?: number; } );
    /**
     * Returns the bounding box of the schematic in local coordinates.
     */
    getBoundingBox(): Box3;
    /**
     * Returns the geometry of the schematic.
     */
    getGeometry(): BufferGeometry;
}
