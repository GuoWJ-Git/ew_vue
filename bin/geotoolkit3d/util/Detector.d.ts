/**
 * Detector class for providing detection of WebGL and graphics card etc.<br>
 * This class is singleton so it keeps results as static variables.
 * @deprecated since 3.4, use geotoolkit3d.util.WebGLConstants instead.
 */
export class Detector {
    /**
     * Detector class for providing detection of WebGL and graphics card etc.<br>
     * This class is singleton so it keeps results as static variables.
     */
    constructor();
    /**
     * Check if the browser supports webgl
     */
    static webgl(): boolean;
    /**
     * Check if it is intel graphic card
     */
    static isIntelGPU(): boolean;
    /**
     * Check if the browser supports WebGL 2.0
     */
    static isWebGL2(): boolean;
}
