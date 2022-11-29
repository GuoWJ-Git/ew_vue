/**
 * Defines a fragment of the underlying pixel data of an area.
 */
export class Raster {
    /**
     * Defines a fragment of the underlying pixel data of an area.
     */
    constructor();
    /**
     * Return an array of colors for the current position
     * @param x x position to get color
     * @param y y position to get color
     * @param color output array of color components
     * @param offset offset inside of array of colors
     * @param count count colors
     */
    getColors(x: number, y: number, color: number[], offset?: number, count?: number): void;
    /**
     * Return the actual width, in pixels, of the raster
     */
    getWidth(): number;
    /**
     * Return the actual height, in pixels, of the raster
     */
    getHeight(): number;
}
