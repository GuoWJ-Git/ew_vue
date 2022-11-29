/**
 * Utility class that transforms image with webgl
 */
export class ImageTransform {
    /**
     * Utility class that transforms image with webgl
     */
    constructor();
    /**
     * Transforms image
     * @param image source image
     * @param options options
     * @param options.width resulting element width
     * @param options.height resulting element height
     * @param options.destination destination coordinates
     * @param options.destination.x array of 'x' coordinates to transform (normalized to [0,1])
     * @param options.destination.y array of 'y' coordinates to transform (normalized to [0,1])
     * @param options.source source coordinates
     * @param options.source.x array of 'x' transformed coordinates (in device)
     * @param options.source.y array of 'y' transformed coordinates (in device)
     * @param options.triangles array of triangles
     */
    static processImage(image: HTMLImageElement, options: object | { width: number; height: number; destination: object | { x: number[]; y: number[]; } ; source: object | { x: number[]; y: number[]; } ; triangles?: number[]; } ): HTMLCanvasElement;
    /**
     * Dispose
     */
    static dispose(): void;
}
