import {Pattern} from './Pattern';
import {Transformation} from '../util/Transformation';
import {Dimension} from '../util/Dimension';

/**
 * Defines a base class to define an image pattern.
 * @deprecated since 2021.1 (3.3) use geotoolkit.attributes.PatternFactory.getInstance().createPattern instead
 * @example
 * ```javascript
 * // Simple usage of image pattern
 * import intPattern from '../../../../images/intpattern.png';
 * const imgPattern = new ImagePattern({
 *       'url': 'mysite/myimage.png'
 * });
 * ```
 * @example
 * ```javascript
 * // Usage of pattern with container
 * import {ImagePattern} from '@int/geotoolkit/attributes/ImagePattern';
 * import {PatternFactory} from '@int/geotoolkit/attributes/PatternFactory';
 * PatternFactory.getInstance().add('testpatterns');
 * const myPatterns = PatternFactory.getInstance().getCategory('testpatterns');
 * myPatterns.add('salt', new ImagePattern({'url': 'mysite/myimage.png'}));
 * // The next pattern will point to pattern from container
 * const imgPattern = new ImagePattern({'patternName': 'salt', 'containerName': 'testpatterns'});
 * ```
 */
export class ImagePattern extends Pattern {
    /**
     * Defines a base class to define an image pattern.
     * @param src image from DOM element or The image patterns options
     * @param src.src image from DOM element
     * @param src.alt Default text for an image
     * @param src.url or url of the image to load
     * @param src.rawsize using image raw size
     * @param src.desiredWidth desired image width
     * @param src.desiredHeight desired image height
     * @param src.timeout timeout
     * @param patternName name of this pattern for indexing
     * @param userHandle additional info associated with current image pattern
     * @param url or url of the image to load
     * @param rawsize using image raw size
     * @param containerName an optional container name, which creates an image pattern. This
     * parameter is used for serialization if you want to save are reference to pattern instead of the pattern itself
     * @param scalable Flag that sets scalability of the pattern
     * coordinates, or relative to the shape it is filling
     */
    constructor(src?: HTMLImageElement | object | { src?: HTMLImageElement; alt?: string; url?: string; rawsize?: boolean; desiredWidth?: number; desiredHeight?: number; timeout?: number; } , patternName?: string, userHandle?: any, url?: string, rawsize?: boolean, containerName?: string, scalable?: boolean);
    /**
     * Makes a pattern from the image
     * @param context 2d rendering context from canvas
     * @param repetition style of repetition
     * @param foregroundColor of the pattern
     * @param transform transform
     */
    getPattern(context: CanvasRenderingContext2D, repetition: string, foregroundColor?: string, transform?: Transformation): CanvasPattern | null;
    /**
     * Sets desired image width and height
     * @param width either dimension object or desired width of the image pattern
     * @param height desired height of the image pattern
     */
    setDesiredSize(width: Dimension | number, height?: number): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {src: string; alt: string; url: string; rawsize: boolean; desiredwidth: number; desiredheight: number; timeout: number} | any;
    /**
     * return the load image promise
     */
    getPromise(): Promise<any>;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.src image from DOM element or The image patterns options
     * @param properties.alt Default text for an image
     * @param properties.url image url
     * @param properties.rawsize using image raw size
     * @param properties.desiredwidth desired width of the image pattern
     * @param properties.desiredheight desired height of the image pattern
     * @param properties.timeout timeout
     */
    setProperties(properties: object | { src?: HTMLImageElement | object; alt?: string; url?: string; rawsize?: boolean; desiredwidth?: number; desiredheight?: number; timeout?: number; } ): this;
}
