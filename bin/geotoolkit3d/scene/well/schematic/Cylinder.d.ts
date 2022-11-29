import {SchematicBase} from './SchematicBase';
import {FillStyle} from '../../../../geotoolkit/attributes/FillStyle';
import {Box3, BufferGeometry} from '../../../THREE';

/**
 * A 3D cylinder schematic object.
 */
export class Cylinder extends SchematicBase {
    /**
     * A 3D cylinder schematic object.
     * @param options The options
     * @param options.radius The radius of the cylinder in modelspace
     * @param options.depth The length of the cylinder in modelspace (used if there is only 2 points in the given path)
     * @param options.tubeprecision The tube approximation precision
     * @param options.fillstyle 
     * @param options.data 2 points minimum required; if 2 points are provided the first one is the localisation
     * and the second provide the direction to tend to. If more than 2 points are provided then the points are actual
     * trajectory points around which a tube will be created.
     * @param options.data.x The x deviation values
     * @param options.data.y The y deviation values
     * @param options.data.z The elevation values
     */
    constructor(options: object | { radius?: number; depth?: number; tubeprecision?: number; fillstyle?: FillStyle; data: object | { x: number[]; y: number[]; z: number[]; } ; } );
    /**
     * Returns the bounding box of the schematic in local coordinates.
     */
    getBoundingBox(): Box3;
    /**
     * Returns the geometry of the schematic.
     */
    getGeometry(): BufferGeometry;
}
