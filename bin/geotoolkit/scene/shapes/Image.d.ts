import {AnchoredShape} from './AnchoredShape';
import {AnchorType} from '../../util/AnchorType';
import {Rect} from '../../util/Rect';

/**
 * Defines image node. Image shapes help in manipulating pictures and support all common transformations such as scaling and rotation.<br>
 * Image shapes also support the anchoring technique.
 */
export class Image extends AnchoredShape {
    /**
     * Defines image node. Image shapes help in manipulating pictures and support all common transformations such as scaling and rotation.<br>
     * Image shapes also support the anchoring technique.
     * @param x left or properties object
     * @param x.x left
     * @param x.y top
     * @param x.url Image dataUrls
     * @param x.w width
     * @param x.h height
     * @param x.imagesmoothing image smoothing (true, false or undefined) https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
     * @param x.image an instance of image instead of url
     * @param x.alignment alignment
     * @param x.crossorigin cross origin to set when loading images
     * @param x.sprite if image is a sprite (single image containing multiple icons), setup the rendering icon bounds in device coordinates
     * @param x.lazyloading lazy loading
     * @param x.alt alternative text
     * @param y top
     * @param url Image dataUrls
     * @param w width
     * @param h height
     * @param alignment alignment
     * @param sizeisindevicespace image size is in pixel
     */
    constructor(x?: number | object | { x?: number; y?: number; url?: string; w?: number; h?: number; imagesmoothing?: boolean | null; image?: HTMLImageElement | null; alignment?: AnchorType; crossorigin?: string | any; sprite?: Rect; lazyloading?: boolean; alt?: string; } , y?: number, url?: string, w?: number, h?: number, alignment?: AnchorType, sizeisindevicespace?: boolean);
    /**
     * LoadImage image
     * @param callback callback function
     */
    loadImage(callback?: Function): void;
    /**
     * Returns this images aspect ratio, width over height
     */
    getAspectRatio(): number;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {url: string; alt: string; image: HTMLImageElement; imagesmoothing: boolean | null; crossorigin: string | any; lazyloading: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.x left
     * @param properties.y top
     * @param properties.url Image dataUrls
     * @param properties.w width
     * @param properties.h height
     * @param properties.imagesmoothing image smoothing (true, false or undefined) https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
     * @param properties.image an instance of image instead of url
     * @param properties.alignment alignment
     * @param properties.crossorigin cross origin to set when loading images
     * @param properties.sprite if image is a sprite (single image containing multiple icons), setup the rendering icon bounds in device coordinates
     * @param properties.lazyloading lazy loading
     * @param properties.alt alternative text
     */
    setProperties(properties: object | { x?: number; y?: number; url?: string; w?: number; h?: number; imagesmoothing?: boolean | null; image?: HTMLImageElement | null; alignment?: AnchorType; crossorigin?: string | any; sprite?: Rect; lazyloading?: boolean; alt?: string; } ): this;
    /**
     * Gets image element
     */
    getImage(): HTMLImageElement;
    /**
     * Sets icon bounds for the sprite
     * @param sprite sprite icon bounds or null if image is not a sprite
     */
    setSprite(sprite: Rect | any): this;
    /**
     * Returns icon bounds if image is a sprite (single image containing multiple icons), null otherwise
     */
    getSprite(): Rect | any;
}
/**
 * Image's Events enumerator
 */
export enum Events {
    /**
     * Event type fired when an image is done loading
     */
    ImageLoaded = 'ImageLoaded',
    /**
     * Event type fired if an image loading is failed
     */
    ImageFailed = 'ImageFailed'
}
