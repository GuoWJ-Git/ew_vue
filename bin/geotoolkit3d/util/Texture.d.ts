import {Texture as Geotoolkit3dTexture} from '../THREE';

/**
 * Utility class providing texture examples for 3D objects.<br>
 * Texture source images are represented in data URI.
 */
export class Texture {
    /**
     * Utility class providing texture examples for 3D objects.<br>
     * Texture source images are represented in data URI.
     */
    constructor();
    /**
     * A ball symbol loader
     * @param onLoad onLoad callback
     * @param onProgress onProgress callback
     * @param onError onError callback
     */
    static ballLoader(onLoad: Function, onProgress: Function, onError: Function): Geotoolkit3dTexture;
    /**
     * A ball symbol, with 3D affect
     */
    static ball: Geotoolkit3dTexture;
    /**
     * A soliddot symbol loader
     * @param onLoad onLoad callback
     * @param onProgress onProgress callback
     * @param onError onError callback
     */
    static soliddotLoader(onLoad: Function, onProgress: Function, onError: Function): Geotoolkit3dTexture;
    /**
     * A circle symbol, with solid fill color and no 3D effect
     */
    static soliddot: Geotoolkit3dTexture;
    /**
     * A circle symbol loader
     * @param onLoad onLoad callback
     * @param onProgress onProgress callback
     * @param onError onError callback
     */
    static circleLoader(onLoad: Function, onProgress: Function, onError: Function): Geotoolkit3dTexture;
    /**
     * A circle symbol, with bright light and 3D effect
     */
    static circle: Geotoolkit3dTexture;
    /**
     * A square symbol loader
     * @param onLoad onLoad callback
     * @param onProgress onProgress callback
     * @param onError onError callback
     */
    static squareLoader(onLoad: Function, onProgress: Function, onError: Function): Geotoolkit3dTexture;
    /**
     * A square symbol
     */
    static square: Geotoolkit3dTexture;
    /**
     * A cube symbol loader
     * @param onLoad onLoad callback
     * @param onProgress onProgress callback
     * @param onError onError callback
     */
    static cubeLoader(onLoad: Function, onProgress: Function, onError: Function): Geotoolkit3dTexture;
    /**
     * A cube symbol
     */
    static cube: Geotoolkit3dTexture;
    /**
     * A sphere symbol loader
     * @param onLoad onLoad callback
     * @param onProgress onProgress callback
     * @param onError onError callback
     */
    static sphereLoader(onLoad: Function, onProgress: Function, onError: Function): Geotoolkit3dTexture;
    /**
     * A sphere symbol, with dark color
     */
    static sphere: Geotoolkit3dTexture;
    /**
     * A triangle symbol loader
     * @param onLoad onLoad callback
     * @param onProgress onProgress callback
     * @param onError onError callback
     */
    static triangleLoader(onLoad: Function, onProgress: Function, onError: Function): Geotoolkit3dTexture;
    /**
     * A triangle symbol
     */
    static triangle: Geotoolkit3dTexture;
}
