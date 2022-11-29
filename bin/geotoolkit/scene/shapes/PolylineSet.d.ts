import {ScaledShape} from './ScaledShape';
import {Rect} from '../../util/Rect';
import {PolylineSegment} from './PolylineSegment';

/**
 * The set of polyline shape.
 */
export class PolylineSet extends ScaledShape {
    /**
     * The set of polyline shape.
     * @param options An object containing the properties to set
     * @param options.bounds bounds of the model
     * @param options.segments polyline segment
     */
    constructor(options?: object | { bounds?: Rect; segments?: PolylineSegment; } );
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: PolylineSet): this;
    /**
     * Add new polyline segment
     * @param x x-coordinates
     * @param y y-coordinates
     */
    add(x: number[], y: number[]): void;
    /**
     * Return bounds and lock bounds rect from modification.
     */
    getBounds(): Rect;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {bounds: Rect; segments: PolylineSegment} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.bounds bounds of the model
     * @param properties.segments polyline segment
     */
    setProperties(properties: object | { bounds?: Rect; segments?: PolylineSegment; } ): this;
}
