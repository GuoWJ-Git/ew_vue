import {Volume} from '../scene/seismic/Volume';
import {Slice} from '../scene/seismic/Slice';
import {Object3D} from '../scene/Object3D';
import {FillStyle} from '../../geotoolkit/attributes/FillStyle';

/**
 * Utility class related to setting intersections, user can set seismic slice intersections with different objects,
 * such as Surface, Horizon, and ReservoirGrid.<br>
 * @deprecated Since 2022 (3.4), use geotoolkit3d.util.intersection.IntersectionManager instead
 */
export class Seismic {
    /**
     * Utility class related to setting intersections, user can set seismic slice intersections with different objects,
     * such as Surface, Horizon, and ReservoirGrid.<br>
     * @param volume the seismic volume
     */
    constructor(volume: Volume);
    /**
     * Set seismic volume
     * @param volume the seismic volume
     */
    setVolume(volume: Volume): void;
    /**
     * Draw intersections between slice and object.<br>
     * @param slice the slice to check intersection
     * @param object the object to test intersection with
     * @param styleOptions style options
     * @param styleOptions.preservecolor the flag to preserve object's color in intersection
     * @param styleOptions.linewidth the line width, if the intersection is a line
     * @param styleOptions.fillcolor the fill color of intersection
     */
    generateIntersection(slice: Slice, object: Object3D, styleOptions?: object | { preservecolor?: boolean; linewidth?: number; fillcolor?: FillStyle; } ): void;
    /**
     * remove overlay based on object i.e. (surface, reservoir)
     * @param slice the seismic slice
     * @param object the intersected object
     */
    removeOverlay(slice: Slice, object: Object3D): void;
    /**
     * Remove all overlays on all seismic slices
     */
    removeOverlayFromSlices(): void;
}
