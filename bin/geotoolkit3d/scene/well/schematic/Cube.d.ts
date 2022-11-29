import {SchematicBase} from './SchematicBase';
import {FillStyle} from '../../../../geotoolkit/attributes/FillStyle';
import {Box3, BoxGeometry} from '../../../THREE';

/**
 * Creates a cube three.js.
 */
export class Cube extends SchematicBase {
    /**
     * Creates a cube three.js.
     * @param options The options
     * @param options.data 2 points required, the first one is the localisation and the second provide the direction to tend to.
     * @param options.data.x The x deviation values
     * @param options.data.y The y deviation values
     * @param options.data.z The elevation values
     * @param options.fillstyle Fillstyle used to create the cube's material
     * @param options.width Size of the cube in model space
     * @param options.widthsegments Number of segmented faces along the width of the sides
     */
    constructor(options: object | { data: object | { x: number[]; y: number[]; z: number[]; } ; fillstyle?: FillStyle; width?: number; widthsegments?: number; } );
    /**
     * Returns the bounding box of the schematic.
     */
    getBoundingBox(): Box3;
    /**
     * Returns the geometry of the schematic.
     */
    getGeometry(): BoxGeometry;
}
