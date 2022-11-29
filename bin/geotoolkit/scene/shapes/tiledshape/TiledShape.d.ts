import {Cancel} from '../../../util/Cancel';
import {Rect} from '../../../util/Rect';
import {RectangularShape} from '../RectangularShape';
import {AbstractHttpService} from '../../../http/AbstractHttpService';
import {LoaderType} from './LoaderType';
import {RenderingContext} from '../../../renderer/RenderingContext';

/**
 * Load image function
 */
export type imageLoader = (data: object | { url: string; cancel?: Cancel; } , callback: Function) => void;
/**
 * Need to delay request callback
 */
export type delayCallback = (data: object | { id: string; tileRect: Rect; deviceArea: Rect; transformedModelRect: Rect; } ) => number;
/**
 * Defines a shape which displays tiled images
 */
export class TiledShape extends RectangularShape {
    /**
     * Defines a shape which displays tiled images
     * @param options JSON object with parameters
     * @param options.formatter Instance of tile formatter
     * @param options.imageloader function to load image
     * @param options.modelarea Bounds of the shape, defines the size of image on the server
     * @param options.capacity Number of tiles stored in cache
     * @param options.maxnumreq Maximum number of requests that can be sent at the same time
     * @param options.tries tries of downloading image, if server isn't available
     * @param options.timeout timeout of next request, if server isn't available
     * @param options.base64 deprecated (since 2020.1 (3.1)). use options.loadertype instead. Set to true if server provide base64 encoded string instead of raw image
     * @param options.images array of images to load (Note: some browsers have restriction on maximum image size (for example Safari has 3*1024*1024 pixels))
     * @param options.extendedrenderingborders option to request more data not only visible part (in Tiles)
     * @param options.tilew Width of a tile
     * @param options.tileh Height of a tile
     * @param options.minlod option to define minimum level of loading tiles
     * @param options.maxlod option to define maximum level of loading tiles
     * @param options.isconsttiles option to show should it be const tiles or rendered on server side
     * @param options.asynctimeout time to wait for loading tiles (for async rendering)
     * @param options.errimgsrc source for error image (it will be rendered if tile is not available)
     * @param options.httpservice http service to make any HTTP request
     * @param options.loadertype type for tile loader
     * @param options.freezeupdate freeze updating shape until new tiles are loaded
     * @param options.timetowaitchanges deprecated since 3.4 time (ms) to wait changes of position or scale of tiled shape. If position and scale remain the same, tiled shape will request new tiles.
     * @param options.delaycallback delay callback returns delay in ms (always 500 ms by default)
     */
    constructor(options?: object | { formatter?: Function; imageloader?: imageLoader; modelarea?: Rect; capacity?: number; maxnumreq?: number; tries?: number; timeout?: number; base64?: boolean; images?: {id: string, width: number, height: number}[]; extendedrenderingborders?: number; tilew?: number; tileh?: number; minlod?: number; maxlod?: number; isconsttiles?: boolean; asynctimeout?: number; errimgsrc?: string; httpservice?: AbstractHttpService; loadertype?: LoaderType; freezeupdate?: boolean; timetowaitchanges?: number; delaycallback?: delayCallback; } );
    /**
     * The first tile is started loading
     */
    protected onStartTilesLoading(): void;
    /**
     * All requested tiles are rendered
     */
    protected onAllTilesRendered(): void;
    /**
     * Sets options
     * @param options JSON object with parameters
     * @param options.formatter Instance of tile formatter
     * @param options.imageloader function to load image
     * @param options.modelarea Bounds of the shape, defines the size of image on the server
     * @param options.capacity Number of tiles stored in cache
     * @param options.maxnumreq Maximum number of requests that can be sent at the same time
     * @param options.tries tries of downloading image, if server isn't available
     * @param options.timeout timeout of next request, if server isn't available
     * @param options.base64 deprecated (since 2020.1 (3.1)). use options.loadertype instead. Set to true if server provide base64 encoded string instead of raw image
     * @param options.images array of images to load
     * @param options.extendedrenderingborders option to request more data not only visible part (in Tiles)
     * @param options.tilew Width of a tile
     * @param options.tileh Height of a tile
     * @param options.minlod option to define minimum level of loading tiles
     * @param options.maxlod option to define maximum level of loading tiles
     * @param options.isconsttiles option to show should it be const tiles or rendered on server side
     * @param options.asynctimeout time to wait for loading tiles (for async rendering)
     * @param options.errimgsrc source for error image (it will be rendered if tile is not available)
     * @param options.httpservice http service to make any HTTP request
     * @param options.loadertype type for tile loader
     * @param options.freezeupdate freeze updating shape until new tiles are loaded
     * @param options.timetowaitchanges deprecated since 3.4 time (ms) to wait changes of position or scale of tiled shape. If position and scale remain the same, tiled shape will request new tiles.
     * @param options.delaycallback delay callback
     */
    setOptions(options: object | { formatter?: Function; imageloader?: Function; modelarea?: Rect; capacity?: number; maxnumreq?: number; tries?: number; timeout?: number; base64?: boolean; images?: {id: string, width: number, height: number}[]; extendedrenderingborders?: number; tilew?: number; tileh?: number; minlod?: number; maxlod?: number; isconsttiles?: boolean; asynctimeout?: number; errimgsrc?: string; httpservice?: AbstractHttpService; loadertype?: LoaderType; freezeupdate?: boolean; timetowaitchanges?: number; delaycallback?: delayCallback; } ): this;
    /**
     * Gets options
     */
    getOptions(): {formatter: Function; imageloader: Function; modelarea: Rect; capacity: number; maxnumreq: number; tries: number; timeout: number; images: {id:  string;  width:  number;  height:  number}[]; extendedrenderingborders: number; tilew: number; tileh: number; minlod: number; maxlod: number; isconsttiles: boolean; asynctimeout: number; errimgsrc: string; httpservice: AbstractHttpService; loadertype: LoaderType; delaycallback: delayCallback} | any;
    /**
     * Render method, overrides render method of the parent. Calculates tiles required
     * for the invalidated area (all the calculations are made in device coordinates),
     * renders existing ones, or requests non existing ones
     * @param context a rendering context
     */
    render(context: RenderingContext): void;
    /**
     * Gets image size of the tiled shape
     */
    getModelArea(): Rect;
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
