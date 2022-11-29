import {BufferGeometry} from '../../THREE';
import {AbstractSurfaceData} from '../../data/surface/AbstractSurfaceData';

/**
 * ContourLabel's geometry
 */
export class LabelGeometry extends BufferGeometry {
    /**
     * ContourLabel's geometry
     * @param options The options
     * @param options.data The data options
     * @param options.data.surface The surface geometry coordinates
     * @param options.data.values Surface attribute values
     * @param options.data.nullvalue Surface attribute nullvalue
     */
    constructor(options: object | { data: object | { surface: AbstractSurfaceData; values?: number[]; nullvalue?: number; } ; } );
}
