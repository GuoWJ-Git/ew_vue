import {WebGLRenderer, WebGLRenderTarget} from '../THREE';

/**
 * An abstract class for ShaderPass, OutlinePass, and more.<br>
 * The pass that adds to Plot must inherit from this class.<br>
 * Check out three.js examples for more information.
 */
export class AbstractPass {
    /**
     * An abstract class for ShaderPass, OutlinePass, and more.<br>
     * The pass that adds to Plot must inherit from this class.<br>
     * Check out three.js examples for more information.
     */
    constructor();
    /**
     * Set size for render target
     * @param width the width of render target
     * @param height the height of render target
     */
    setSize(width?: number, height?: number): void;
    /**
     * Dispose resources in this pass
     */
    dispose(): void;
    /**
     * This render function will be called every time in animation loop
     * @param renderer the webGLrender
     * @param writeBuffer the WebGL render target to write
     * @param readBuffer the WebGL render target to read
     * @param deltaTime delta time
     * @param maskActive the flag for stencil buffer in renderer
     */
    render(renderer: WebGLRenderer, writeBuffer?: WebGLRenderTarget, readBuffer?: WebGLRenderTarget, deltaTime?: number, maskActive?: boolean): void;
}
