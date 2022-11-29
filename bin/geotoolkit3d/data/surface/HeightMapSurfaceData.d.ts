import {AbstractSurfaceData} from './AbstractSurfaceData';
import {Texture, BufferAttribute} from '../../THREE';

/**
 * Surface data using a heightmap.<br>
 * <br>
 * This surface data object implements a {@link https://en.wikipedia.org/wiki/Heightmap heighmap}.<br>
 * Elevations are stored as normalized values into the given 2D texture.<br>
 */
export class HeightMapSurfaceData extends AbstractSurfaceData {
    /**
     * Surface data using a heightmap.<br>
     * <br>
     * This surface data object implements a {@link https://en.wikipedia.org/wiki/Heightmap heighmap}.<br>
     * Elevations are stored as normalized values into the given 2D texture.<br>
     * @param options The options
     * @param options.data The data options
     * @param options.data.heightmap The elevation map as a texture. Note that it's assumed to be greyscale
     * @param options.data.xmin The grid x start
     * @param options.data.xstep The grid x step
     * @param options.data.ymin The grid y start
     * @param options.data.ystep The grid y step
     * @param options.data.width width of heightmap image
     * @param options.data.height height of heightmap image
     */
    constructor(options: object | { data: object | { heightmap?: Texture; xmin?: number; xstep?: number; ymin?: number; ystep?: number; width?: number; height?: number; } ; } );
    /**
     * Returns the vertex/index attributes
     */
    getAttributes(): {position: BufferAttribute; index: BufferAttribute; width: number; height: number} | object;
}
