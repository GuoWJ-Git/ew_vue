import {IResourceManager} from './IResourceManager';
import {Image} from '../../scene/shapes/Image';
import {IResource} from './IResource';

/**
 * Define simple image map implementation, to resolve images in report specified by it short name
 * @example
 * ```javascript
 * import {ImageMap} from '@int/geotoolkit/report/resources/ImageMap';
 * import smallLogoPng from './images/logo-small.png';
 * import companyLogoPng from './images/company-logo.png';
 * import barCodePng from './images/bar-code.png';
 * const images = {
 *     'logo-small.png': smallLogoPng,
 *     'company-logo.png': companyLogoPng,
 *     'bar-code.png': barCodePng
 * };
 * const imageMap = new ImageMap();
 * for (const imageName in images) {
 *     if (images.hasOwnProperty(imageName)) {
 *         imageMap.registerImage(imageName, images[imageName]);
 *     }
 * }
 * DOMParser.parse(xmlTemplate)
 *     .then((cgDomDocument) => new Parser(cgDomDocument)
 *         .setResourceManager(imageMap)
 *         .parse())
 *     .then((geoDocument) => widget.loadDocument(geoDocument));
 * ```
 */
export class ImageMap implements IResourceManager {
    /**
     * Define simple image map implementation, to resolve images in report specified by it short name
     * @param options image map options
     * @param options.lazyloading lazy loading
     * @param options.crossorigin cross origin to set when loading images
     */
    constructor(options?: object | { lazyloading?: boolean; crossorigin?: string | any; }  | any);
    /**
     * Register image element
     * @param url image URL or name
     * @param image image element or URL
     */
    registerImage(url: string, image: HTMLImageElement | Image | string): this;
    /**
     * Return resource
     * @param iResourceType resource type
     * @param url 
     */
    resolve(iResourceType: Function, url: string): IResource;
}
