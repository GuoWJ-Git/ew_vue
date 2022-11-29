import {SchematicBase} from './SchematicBase';
import {FillStyle} from '../../../../geotoolkit/attributes/FillStyle';
import {Box3, CylinderGeometry} from '../../../THREE';

/**
 * Creates a cone three.js.
 */
export class Cone extends SchematicBase {
    /**
     * Creates a cone three.js.
     * @param options The options
     * @param options.data 2 points required; the first one is the localisation and the second provide the direction to tend to.
     * @param options.data.x The x deviation values
     * @param options.data.y The y deviation values
     * @param options.data.z The elevation values
     * @param options.fillstyle 
     * @param options.radiustop Radius of the cylinder at the top
     * @param options.radiusbottom Radius of the cylinder at the bottom
     * @param options.height Height of the cylinder
     * @param options.radiussegments Number of segmented faces around the circumference of the cylinder
     * @param options.heightsegments Number of rows of faces along the height of the cylinder
     * @param options.openended A Boolean indicating whether the ends of the cylinder are open or capped
     */
    constructor(options: object | { data: object | { x: number[]; y: number[]; z: number[]; } ; fillstyle?: FillStyle; radiustop?: number; radiusbottom?: number; height?: number; radiussegments?: number; heightsegments?: number; openended?: number; } );
    /**
     * Returns the bounding box of the schematic.
     */
    getBoundingBox(): Box3;
    /**
     * Returns the geometry of the schematic.
     */
    getGeometry(): CylinderGeometry;
}
