import {BufferGeometry} from '../../THREE';

/**
 * A ellipse geometry to be used with THREE.Line.<br>
 * Use mesh's scale&position&rotation to change the ellipse location&shape.<br>
 */
export class EllipseGeometry extends BufferGeometry {
    /**
     * A ellipse geometry to be used with THREE.Line.<br>
     * Use mesh's scale&position&rotation to change the ellipse location&shape.<br>
     */
    constructor();
    /**
     * Extract segmented points from this geometry
     */
    extractSegmentPoints(): number[];
}
