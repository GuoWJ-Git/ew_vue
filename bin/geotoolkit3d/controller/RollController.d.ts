import {AbstractController} from './AbstractController';

/**
 * Use is discouraged as it's currently not possible to maintain roll when moving camera using the API.<br>
 */
export class RollController extends AbstractController {
    /**
     * Use is discouraged as it's currently not possible to maintain roll when moving camera using the API.<br>
     * @param options object that contains the settings
     * @param options.enabled Disable this controller
     * @param options.nozoom Disable zooming
     * @param options.zoomspeed Zoom speed factor
     * @param options.panspeed Zoom speed factor
     * @param options.noroll Disable rotation
     * @param options.nopan Disable panning
     * @param options.plane Plane to roll camera
     */
    constructor(options?: object | { enabled?: boolean; nozoom?: boolean; zoomspeed?: number; panspeed?: number; noroll?: boolean; nopan?: boolean; plane?: Plane; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options object that contains the settings
     * @param options.enabled Disable this controller
     * @param options.nozoom Disable zooming
     * @param options.zoomspeed Zoom speed factor
     * @param options.panspeed Zoom speed factor
     * @param options.noroll Disable rotation
     * @param options.nopan Disable panning
     * @param options.plane Plane to roll camera
     */
    setOptions(options?: object | { enabled?: boolean; nozoom?: boolean; zoomspeed?: number; panspeed?: number; noroll?: boolean; nopan?: boolean; plane?: Plane; } ): this;
    /**
     * Get roll controller options
     * (see {@link @int/geotoolkit3d/controller/RollController.RollController#setOptions} for more info)
     */
    getOptions(): object | any;
}
/**
 * Plane to be rolled by RollController
 */
export enum Plane {
    /**
     * XY plane
     */
    XY = 'XY',
    /**
     * XZ plane
     */
    XZ = 'XZ',
    /**
     * YZ plane
     */
    YZ = 'YZ'
}
