import {Raster} from '../attributes/Raster';

/**
 * Represent interface for an off-screen image representation
 */
export class Pixmap extends Raster {
    /**
     * Represent interface for an off-screen image representation
     */
    constructor();
    /**
     * Return a one-dimensional array containing the data in the
     * RGBA order, with integer values between 0 and 255 (included).
     */
    getData(): number[];
}
