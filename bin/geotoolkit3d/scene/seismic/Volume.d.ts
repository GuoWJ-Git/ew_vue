import {Object3D} from '../Object3D';
import {IndexCoordinates} from '../../transformation/IndexCoordinates';
import {XYCoordinates} from '../../transformation/XYCoordinates';
import {SeismicModes} from '../../Constants';
import {Vector3, Object3D as Geotoolkit3dObject3D} from '../../THREE';

/**
 * A seismic volume object.<br>
 * <br>
 * This object is a container of seismic objects having coordinates defined in index domain (inline, xline, ...).<br>
 * It holds the transformation Index-to-XY and applies it to those seismic object if the display mode is XY.<br>
 * <br>
 * Objects added will be transformed on the fly to be displayed at the correct location with the appropriate size.<br>
 */
export class Volume extends Object3D {
    /**
     * A seismic volume object.<br>
     * <br>
     * This object is a container of seismic objects having coordinates defined in index domain (inline, xline, ...).<br>
     * It holds the transformation Index-to-XY and applies it to those seismic object if the display mode is XY.<br>
     * <br>
     * Objects added will be transformed on the fly to be displayed at the correct location with the appropriate size.<br>
     * @param options The options
     * @param options.index The index coordinates, usually inline/crossline or IJ
     * @param options.xy The world coordinates, usually xy.
     * @param options.displaymode The display mode, either index or xy
     */
    constructor(options: object | { index: IndexCoordinates; xy: XYCoordinates; displaymode?: SeismicModes; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.displaymode The display mode, either index or xy
     */
    setOptions(options?: object | { displaymode?: SeismicModes; } ): this;
    /**
     * Get options
     * (see {@link @int/geotoolkit3d/scene/seismic/Volume.Volume#setOptions} for more info)
     */
    getOptions(): object | any;
    /**
     * Get the index coordinates
     */
    getIndexCoordinates(): IndexCoordinates;
    /**
     * Get the XY coordinates
     */
    getXYCoordinates(): XYCoordinates;
    /**
     * returns if the point is inside the xy volume
     * @param point point in xy coordinates
     */
    isPointInside(point: Vector3): boolean;
    /**
     * Returns slices
     */
    getSlices(): Geotoolkit3dObject3D[];
    /**
     * Apply seismic matrix to object
     * @param object object
     */
    applyMatrixTo(object: Geotoolkit3dObject3D): void;
}
