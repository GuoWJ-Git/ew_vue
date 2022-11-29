import {SeismicImage} from './SeismicImage';

/**
 * Define an interface to provide rendering seismic image
 */
export abstract class IDrawSeismicImage {
    /**
     * Draw seismic image
     * @param image seismic image
     * @param callback callback function
     */
    abstract drawSeismicImage(image: SeismicImage, callback: Function): void;
}
