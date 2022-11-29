import {Surface} from './Surface';

/**
 * Surface factory
 */
export class SurfaceFactory {
    /**
     * Surface factory
     */
    constructor();
    /**
     * Create surface
     * @param width The width of the surface. Must be greater then zero
     * @param height The height of the surface. Must be greater then zero
     * @param devicePixel If set to true, width and height will be used as 'device' pixels.
     */
    static createCanvasSurface(width: number, height: number, devicePixel?: boolean): Surface;
}
