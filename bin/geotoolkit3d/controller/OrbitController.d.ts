import {AbstractController} from './AbstractController';

/**
 * A controller that emulates an 'Orbit' behavior.<br>
 * <br>
 * This controller let the user manipulate the camera position using mouse or touch input.<br>
 * <br>
 * This controller uses a 3D anchor point and will revolve around it (named lookAt).<br>
 * This anchor point can be changed either by user action (double click/tap) or programmatically.<br>
 * <br>
 * It will let the user rotate the camera on the 'horizontal' axis infinitely.<br>
 * But it prevents the user from rotate the camera on the vertical axis more than 0-180 degrees.<br>
 * So that the user cannot put the camera upside down.<br>
 * <br>
 * This controller also support 'zooming' by moving the camera forward or backward.<br>
 * <br>
 * To be used, it should be set on the Plot through the setOptions function.
 * <br>
 * Most of the behaviors can be configured either for speed or even to disable some actions through the setOptions.
 * <br>
 */
export class OrbitController extends AbstractController {
    /**
     * A controller that emulates an 'Orbit' behavior.<br>
     * <br>
     * This controller let the user manipulate the camera position using mouse or touch input.<br>
     * <br>
     * This controller uses a 3D anchor point and will revolve around it (named lookAt).<br>
     * This anchor point can be changed either by user action (double click/tap) or programmatically.<br>
     * <br>
     * It will let the user rotate the camera on the 'horizontal' axis infinitely.<br>
     * But it prevents the user from rotate the camera on the vertical axis more than 0-180 degrees.<br>
     * So that the user cannot put the camera upside down.<br>
     * <br>
     * This controller also support 'zooming' by moving the camera forward or backward.<br>
     * <br>
     * To be used, it should be set on the Plot through the setOptions function.
     * <br>
     * Most of the behaviors can be configured either for speed or even to disable some actions through the setOptions.
     * <br>
     * @param options The options
     * @param options.enabled Disable this controller
     * @param options.nozoom Disable zooming
     * @param options.zoomspeed Zoom speed factor
     * @param options.mindistance Minimum distance when zooming
     * @param options.maxdistance Maximum distance when zooming
     * @param options.norotate Disable rotation
     * @param options.rotatespeed Rotation speed factor
     * @param options.nopan Disable panning
     * @param options.nodblclick Disable lookAt redefinition using double click
     * @param options.dblclickspeed Double click speed emulation (for touch devices) in ms
     * @param options.autorotate Auto rotate camera around object
     * @param options.autorotatespeed The speed for auto rotating
     */
    constructor(options?: object | { enabled?: boolean; nozoom?: boolean; zoomspeed?: number; mindistance?: number; maxdistance?: number; norotate?: boolean; rotatespeed?: number; nopan?: boolean; nodblclick?: boolean; dblclickspeed?: number; autorotate?: boolean; autorotatespeed?: number; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.enabled Disable this controller
     * @param options.nozoom Disable zooming
     * @param options.zoomspeed Zoom speed factor
     * @param options.mindistance Minimum distance when zooming
     * @param options.maxdistance Maximum distance when zooming
     * @param options.norotate Disable rotation
     * @param options.rotatespeed Rotation speed factor
     * @param options.nopan Disable panning
     * @param options.nodblclick Disable lookAt redefinition using double click
     * @param options.dblclickspeed Double click speed emulation (for touch devices) in ms
     */
    setOptions(options?: object | { enabled?: boolean; nozoom?: boolean; zoomspeed?: number; mindistance?: number; maxdistance?: number; norotate?: boolean; rotatespeed?: number; nopan?: boolean; nodblclick?: boolean; dblclickspeed?: number; } ): this;
    /**
     * Get orbit controller options
     * (see {@link @int/geotoolkit3d/controller/OrbitController.OrbitController#setOptions} for more info)
     */
    getOptions(): object | any;
}
