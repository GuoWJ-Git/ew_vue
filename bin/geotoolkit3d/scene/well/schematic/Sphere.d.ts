import {SchematicBase} from './SchematicBase';
import {FillStyle} from '../../../../geotoolkit/attributes/FillStyle';
import {Box3, SphereGeometry} from '../../../THREE';

/**
 * Creates a Sphere three.js.
 */
export class Sphere extends SchematicBase {
    /**
     * Creates a Sphere three.js.
     * @param options The options
     * @param options.data 2 points required; the first one is the localisation and the second provide the direction to tend to.
     * @param options.data.x The x deviation values
     * @param options.data.y The y deviation values
     * @param options.data.z The elevation values
     * @param options.fillstyle 
     * @param options.radius The sphere radius
     * @param options.widthsegments The number of horizontal segments. Minimum value is 3
     * @param options.heightsegments The number of vertical segments. Minimum value is 2
     * @param options.phistart The specify horizontal starting angle
     * @param options.philength The specify horizontal sweep angle size
     * @param options.thetastart The specify vertical starting angle
     * @param options.thetalength The specify vertical sweep angle size
     */
    constructor(options: object | { data: object | { x: number[] | number; y: number[] | number; z: number[] | number; } ; fillstyle?: FillStyle; radius?: number; widthsegments?: number; heightsegments?: number; phistart?: number; philength?: number; thetastart?: number; thetalength?: number; } );
    /**
     * Returns the bounding box of the schematic.
     */
    getBoundingBox(): Box3;
    /**
     * Returns the geometry of the schematic.
     */
    getGeometry(): SphereGeometry;
}
