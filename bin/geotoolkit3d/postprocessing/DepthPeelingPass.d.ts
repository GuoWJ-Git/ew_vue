import {AbstractPass} from './AbstractPass';
import {Color, Scene, Camera, WebGLRenderer, WebGLRenderTarget} from '../THREE';

/**
 * A render pass class that can be used as the first pass in postprocessing.
 * This class make a render with correct transparency.
 * To be precise, depth peeling offer correct transparency at the fragment level, up to a certain number of consecutive
 * transparency on each fragment. For exemple, depth peeling with N passes will allow up to N transparent fragment to
 * render and blend properly on the same pixel element.
 * This render pass require WebGL2, a version check is included in the shader code below.
 */
export class DepthPeelingPass extends AbstractPass {
    /**
     * A render pass class that can be used as the first pass in postprocessing.
     * This class make a render with correct transparency.
     * To be precise, depth peeling offer correct transparency at the fragment level, up to a certain number of consecutive
     * transparency on each fragment. For exemple, depth peeling with N passes will allow up to N transparent fragment to
     * render and blend properly on the same pixel element.
     * This render pass require WebGL2, a version check is included in the shader code below.
     * @param options the DepthPeelingPass options.
     * @param options.clearcolor the color used for the scene background.
     * @param options.clearcoloralpha the scene background opacity.
     * @param options.scene scene.
     * @param options.camera camera.
     * @param options.depthpeeling the depth peeling renderer options.
     * @param options.depthpeeling.enabled enable the depth peeling rendering for correct transparency.
     * @param options.depthpeeling.peelinglevel the number of depth peeling pass (min 2), more passes means more transparent objects can overlap with correct transparency.
     * @param options.antialias the antialias options.
     * @param options.antialias.enabled enable super resolution anti-aliasing.
     * higher number of passes mean more transparent objects can overlap without artifacts, but also will require more
     * renders thus will perform slower (1 overlap per pixel per pass).
     */
    public constructor(options: object | { clearcolor?: Color; clearcoloralpha?: number; scene?: Scene; camera?: Camera; depthpeeling?: object | { enabled?: boolean; peelinglevel?: number; } ; antialias?: object | { enabled?: boolean; } ; } );
    /**
     * Set options
     * @param options options
     * @param options.clearcolor the color used for the scene background.
     * @param options.clearcoloralpha the scene background opacity.
     * @param options.depthpeeling the depth peeling renderer options.
     * @param options.depthpeeling.enabled enable the depth peeling rendering for correct transparency.
     * @param options.depthpeeling.peelinglevel the number of depth peeling pass (min 2), more passes means more transparent objects can overlap with correct transparency.
     * @param options.antialias the antialias options.
     * @param options.antialias.enabled enable super resolution anti-aliasing.
     */
    setOptions(options?: object | { clearcolor?: Color; clearcoloralpha?: number; depthpeeling?: object | { enabled?: boolean; peelinglevel?: number; } ; antialias?: object | { enabled?: boolean; } ; } ): this;
    /**
     * Get options
     */
    getOptions(): object | any;
    /**
     * @param renderer the webGLrender.
     * @param writeBuffer the WebGL render target to write.
     * @param readBuffer the WebGL render target to read.
     */
    render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget): void;
}
