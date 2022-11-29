import {ImagePattern} from './ImagePattern';
import {GeometryPattern} from './GeometryPattern';

/**
 * Define an image container or named collection of images.
 * @deprecated since 2021.1 (3.3) use geotoolkit.attributes.PatternFactory instead
 */
export class ImageContainer {
    /**
     * Define an image container or named collection of images.
     * @param name name of this image container
     */
    constructor(name: string);
    /**
     * IE9 is supported with Fl;
     * Query image element by name
     * @param imageName name of the image
     */
    queryImage(imageName: string): HTMLImageElement | null;
    /**
     * Query image pattern by name
     * @param imageName name of the image
     */
    queryPattern(imageName: string): ImagePattern;
    /**
     * Register image element
     * @param imageName nullable an unique name
     * @param element nullable image element to be registered
     * @param userHandler optional user handle
     */
    register(imageName?: string, element?: HTMLImageElement | ImagePattern | GeometryPattern, userHandler?: any): void;
    /**
     * Unregister image element
     * @param imageName an unique name
     */
    unRegister(imageName: string): void;
    /**
     * Clear all the image
     */
    clear(): void;
    /**
     * Return an array that contains all images names in container
     */
    queryImageNames(): string[];
}
