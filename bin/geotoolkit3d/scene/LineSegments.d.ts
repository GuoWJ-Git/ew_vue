import {Mesh, Color} from '../THREE';

/**
 * More flexible implementation of THREE.Line.
 * Based on {@link https://threejs.org/examples/webgl_lines_fat.html}
 */
export class LineSegments extends Mesh {
    /**
     * More flexible implementation of THREE.Line.
     * Based on {@link https://threejs.org/examples/webgl_lines_fat.html}
     * @param options options object
     * @param options.data data object
     * @param options.data.positions line vertices in x,y,z format
     * @param options.data.colors line colors in r,g,b format
     * @param options.linewidth line width
     * @param options.dashscale dash scale
     * @param options.dashsize dash size
     * @param options.dashoffset dash offset
     * @param options.gapsize gap size
     * @param options.opacity opacity
     * @param options.color color
     * @param options.dashed dashed
     * @param options.polygonoffset true to use polygon offset (ex: to avoid Z-fight)
     * @param options.polygonoffsetfactor factor for polygon offset, > 0 will make line closer to camera, < 0 will make it farther
     */
    constructor(options?: object | { data?: object | { positions?: number[]; colors?: number[]; } ; linewidth?: number; dashscale?: number; dashsize?: number; dashoffset?: number; gapsize?: number; opacity?: number; color?: Color; dashed?: boolean; polygonoffset?: boolean; polygonoffsetfactor?: boolean; } );
    /**
     * Set options
     * @param options options object
     * @param options.linewidth line width
     * @param options.dashscale dash scale
     * @param options.dashsize dash size
     * @param options.dashoffset dash offset
     * @param options.gapsize gap size
     * @param options.opacity opacity
     * @param options.color color
     * @param options.dashed dashed
     * @param options.polygonoffset true to use polygon offset (ex: to avoid Z-fight)
     * @param options.polygonoffsetfactor factor for polygon offset, > 0 will make line closer to camera, < 0 will make it farther
     */
    setOptions(options?: object | { linewidth?: number; dashscale?: number; dashsize?: number; dashoffset?: number; gapsize?: number; opacity?: number; color?: Color; dashed?: boolean; polygonoffset?: boolean; polygonoffsetfactor?: boolean; } ): this;
    /**
     * Get options
     */
    getOptions(): object | any;
    /**
     * Return false to forbid picking (works only for RendererPicking).<br>
     */
    isSelectable(): boolean;
    /**
     * Computes an array of distance values
     */
    computeLineDistances(): this;
}
