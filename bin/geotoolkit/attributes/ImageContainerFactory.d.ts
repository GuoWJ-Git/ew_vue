import {PatternService} from './PatternService';
import {ImageContainer} from './ImageContainer';

/**
 * Define an image container or named collection of images.
 * @deprecated since 2021.1 (3.3) use geotoolkit.attributes.PatternFactory instead
 */
export class ImageContainerFactory {
    /**
     * Define an image container or named collection of images.
     * @param options options
     */
    constructor(options?: any);
    /**
     * Returns image container by name
     * @param name name of the container
     * @param service service associated with container
     */
    getContainer(name: string, service?: PatternService): ImageContainer | null;
    /**
     * Returns service by name
     * @param name name of the container
     */
    getService(name: string): PatternService | null;
    /**
     * Register image container by name
     * @param name name of the container
     * @param container container
     */
    registerContainer(name: string, container: ImageContainer): ImageContainer;
    /**
     * Sets image container
     * @param container image container
     */
    setContainerClass(container: Function): this;
    /**
     * Returns instance of the ImageContainer factory
     * @param options options
     */
    static getInstance(options?: object): ImageContainerFactory;
}
