import {AbstractGestureTool} from '../tool/AbstractGestureTool';

/**
 * Abstract controller
 */
export class AbstractController extends AbstractGestureTool {
    /**
     * Abstract controller
     * @param options The options
     * @param options.enabled Disable this controller
     * @param options.nozoom Disable zooming
     * @param options.nopan Disable panning
     */
    constructor(options?: object | { enabled?: boolean; nozoom?: boolean; nopan?: boolean; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options object that contains the settings
     * @param options.enabled Disable this controller
     * @param options.nozoom Disable zooming
     * @param options.zoomspeed Zoom speed factor
     * @param options.nopan Disable panning
     */
    setOptions(options?: object | { enabled?: boolean; nozoom?: boolean; zoomspeed?: number; nopan?: boolean; } ): this;
    /**
     * Get controller options
     * (see {@link @int/geotoolkit3d/controller/AbstractController.AbstractController#setOptions} for more info)
     */
    getOptions(): object | any;
}
