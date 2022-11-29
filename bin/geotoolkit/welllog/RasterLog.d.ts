import {LogAbstractVisual} from './LogAbstractVisual';
import {Rect} from '../util/Rect';
import {Point} from '../util/Point';

/**
 * Defines a raster log visual which loads image by tiles using tile provider and maps them
 * to different intervals
 * @example
 * ```javascript
 * // Use formatter and image loader
 * // Formatter gets tiled shape data and transforms it to URL string.
 * // data['tileRect'] contains tile rect in model coordinates
 * // data['deviceArea'] contains tile rect in device coordinates
 * // data['transformedModelRect'] contains full tiled shape in device coordinates
 * // data['i'] contains horizontal index of tile
 * // data['j'] contains vertical index of tile
 * // Image loader gets URL string and load image data to draw it later, it must return Promise.
 * import {RasterLog} from '@int/geotoolkit/welllog/RasterLog';
 * import {Rect} from '@int/geotoolkit/util/Rect';
 * import {HttpClient} from '@int/geotoolkit/http/HttpClient';
 * const raster = new RasterLog({
 *       'name': filename,
 *       'formatter': (data) => {
 *           const deviceArea = data['deviceArea'];
 *           const deviceTotal = data['transformedModelRect'];
 *           const cropRect = deviceArea.clone().intersect(deviceTotal);
 *           const cropWidth = Math.min(deviceTotal.getWidth(), Math.ceil(cropRect.getWidth()));
 *           const cropHeight = Math.min(deviceTotal.getHeight(), Math.ceil(cropRect.getHeight()));
 *           return 'https://demo.int.com/INTGeoServer/json/imagereader/scaledtile?filePath=images/' + filename +
 *               '&x=' + (cropRect.getX() - deviceTotal.getX()) +
 *               '&y=' + (cropRect.getY() - deviceTotal.getY()) +
 *               '&imageWidth=' + deviceTotal.getWidth() +
 *               '&imageHeight=' + deviceTotal.getHeight() +
 *               '&cropWidth=' + cropWidth +
 *               '&cropHeight=' + cropHeight;
 *       },
 *       'imageloader': (url, callback) => {
 *           return HttpClient.getInstance().getHttp().get(url, {
 *               'responsetype': 'blob'
 *           }).then((response) => {
 *               callback(null, response['data']);
 *           }, (error) => {
 *               callback(error);
 *           });
 *       },
 *       'imagesize': imageSize,
 *       'mapping': [{
 *           'src': imageSize,
 *           'dst': modelRect
 *       }]
 *   });
 * ```
 */
export class RasterLog extends LogAbstractVisual {
    /**
     * Defines a raster log visual which loads image by tiles using tile provider and maps them
     * to different intervals
     * @param options options
     * @param options.mapping array of mapping. NOTE: actual type is like {src: Rect, dst: Rect}[]
     * @param options.imagesize image size
     * @param options.formatter tile formatter
     * @param options.imageloader function to load image
     * @param options.shapeoptions options for tile shape
     * @param options.shapeoptions.capacity maximum capacity of tiles in cache
     * @param options.shapeoptions.tilew width of tile
     * @param options.shapeoptions.tileh height of tile
     * @param options.shapeoptions.maxnumreq maximum number of parallel requests
     */
    constructor(options?: object | { mapping?: { [key: string]: Rect; }[]; imagesize?: Rect; formatter?: Function; imageloader?: Function; shapeoptions?: object | { capacity?: number; tilew?: number; tileh?: number; maxnumreq?: number; } ; } );
    /**
     * Sets mapping
     * @param mapping array of mapping
     */
    setMapping(mapping?: { [key: string]: Rect; }[]): this;
    /**
     */
    getMapping(): { [key: string]: Rect; }[];
    /**
     * Sets image options
     * @param options image options
     * @param options.formatter tile formatter
     * @param options.imagesize image size
     * @param options.imageloader function to load image
     * @param options.shapeoptions options for tile shape
     * @param options.shapeoptions.capacity maximum capacity of tiles in cache
     * @param options.shapeoptions.tilew width of tile
     * @param options.shapeoptions.tileh height of tile
     * @param options.shapeoptions.maxnumreq maximum number of parallel requests
     */
    setImageOptions(options: object | { formatter?: Function; imagesize?: Rect; imageloader?: Function; shapeoptions?: object | { capacity?: number; tilew?: number; tileh?: number; maxnumreq?: number; } ; } ): this;
    /**
     * Returns image options
     */
    getImageOptions(): {formatter: Function; imagesize: Rect; imageloader: Function; shapeoptions: {capacity: number; tilew: number; tileh: number; maxnumreq: number}} | object;
    /**
     * Recalculate limits if mapping is changed
     */
    updateLimits(): void;
    /**
     * Return image position and depth position by device position
     * @param pt position in device
     */
    getImagePosition(pt: Point): {depth: number; value: number; imageX: number; imageY: number} | object;
    /**
     * Return bounds
     */
    getBounds(): Rect;
    /**
     * Returns minimum depth
     */
    getMinDepth(): number;
    /**
     * Returns maximum depth
     */
    getMaxDepth(): number;
    /**
     * Sets collect performance information mode enabled
     * @param collectPerformanceInfoEnabled true for collection performance information mode enabled
     */
    setCollectPerformanceInformation(collectPerformanceInfoEnabled: boolean): this;
    /**
     * Gets collect performance information mode enabled
     */
    getCollectPerformanceInformation(): boolean;
}
/**
 * Type of raster log event
 */
export enum Events {
    /**
     * Image Options is changing
     */
    ImageOptionsChanging = 'ImageOptionsChanging',
    /**
     * Image Options is changed
     */
    ImageOptionsChanged = 'ImageOptionsChanged'
}
