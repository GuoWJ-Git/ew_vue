import {EventDispatcher} from '../util/EventDispatcher';
import {BufferAttribute} from './BufferAttribute';
import {Texture} from './Texture';
import {ColorProvider} from '../util/ColorProvider';
import {Dimension} from '../util/Dimension';

/**
 * A WebGl class that initialize HTML Canvas and WebGL context for 2D rendering.<br>
 * For WebGL parameters, it follows the name convention as MDN.<br>
 */
export class WebGLRenderer extends EventDispatcher {
    /**
     * A WebGl class that initialize HTML Canvas and WebGL context for 2D rendering.<br>
     * For WebGL parameters, it follows the name convention as MDN.<br>
     * @param options The options for WebGLRenderer
     * @param options.canvas A HTML canvas. If not passed in here, a new canvas element will be created.
     * @param options.antialias Whether to perform anti-aliasing.
     * @param options.preservedrawingbuffer Whether to preserved drawing buffer.
     * @param options.premultipliedalpha Whether to pre-multiplied alpha blending.
     * @param options.clearcolor RGBA values for clear color of renderer
     * @param options.drawmode Draw mode
     */
    constructor(options?: object | { canvas?: any | HTMLCanvasElement; antialias?: boolean; preservedrawingbuffer?: boolean; premultipliedalpha?: boolean; clearcolor?: number[]; drawmode?: number | GLenum; } );
    /**
     * Attach the provided vertexShader and fragmentShader to webGL program.<br>
     * Also output any error found in shader compilation.<br>
     * A WebGL program links to corresponding shaders.
     * @param vertexShader vertex shader in glsl
     * @param fragmentShader fragment shader in glsl
     */
    setShaders(vertexShader: string, fragmentShader: string): this;
    /**
     * Set attribute by sending information to GPU.
     * @param name attribute name
     * @param buffer buffer attribute
     */
    setAttribute(name: string, buffer: BufferAttribute): this;
    /**
     * Set uniform by sending information to GPU.<br>
     * The WebGLRenderingContext.uniform[1234][uif][v]() methods of the WebGL API specify values of uniform variables.<br>
     * [ui] stands for unsigned integer, [i] for integer, [f] for float, and [v] for array.<br>
     * Not all combinations are valid: [u] cannot be combined with [f].<br>
     * For example, the type of uniform2f is string '2f'.<br>
     * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniform
     * @param name the name of uniform
     * @param type the type of uniform
     * @param v0 the first value
     * @param v1 the second value (if any)
     * @param v2 the third value (if any)
     * @param v3 the fourth value (if any)
     */
    setUniform(name: string, type: string, v0: number | number[], v1: number | number[], v2: number | number[], v3: number | number[]): this;
    /**
     * Set texture by sending information to GPU.<br>
     * @param name the name of texture in glsl
     * @param texture the texture
     * @param unit the texture unit that binds to
     */
    setTexture(name: string, texture: Texture, unit?: number): this;
    /**
     * A colorprovider converts a value to a color based on its configuration.
     * It's generally created by associating some colors to WebGL Texture. <br>
     * Then it will interpolate those colors on the fly to find the actual color
     * corresponding to a coordinate in the texture.<br>
     * To make it work as intended, the related glsl must define CG_USE_COLOR_MAP.
     * @param colorprovider the colorprovider
     */
    setColorProvider(colorprovider: ColorProvider): this;
    /**
     * Resizes the output canvas to (width, height). <br>
     * Also sets the viewport to fit that size.
     * @param width the width of canvas
     * @param height the height of canvas
     */
    setSize(width: number, height: number): this;
    /**
     * Return the canvas where the renderer draws its output.
     */
    getDomElement(): HTMLCanvasElement;
    /**
     * Return the current WebGL context
     */
    getContext(): WebGLRenderingContext;
    /**
     * Return the dimension of WebGL canvas
     */
    getSize(): Dimension;
    /**
     * Return the canvas image as data URL<br>
     * Equivalent to HTMLCanvasElement.toDataURL('image/png')
     */
    getImageURL(): string;
    /**
     * Immediately free memory without having to wait for garbage collection.
     */
    dispose(): void;
    /**
     * Calling render function triggers WebGLRenderer to draw on canvas. <br>
     * RequestAnimationFrame(render) will render at each animation frame.<br>
     */
    draw(): void;
}
