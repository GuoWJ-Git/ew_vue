import {Raster} from './Raster';

/**
 * Define an object which can return Raster
 */
export abstract class IRasterable {
    /**
     * Returns a new instance of geotoolkit.attributes.Raster
     * @param xMin x Min position to get color
     * @param yMin y Min position to get color
     * @param xMax x Max position to get color
     * @param yMax y Max position to get color
     */
    abstract getRaster(xMin?: number, yMin?: number, xMax?: number, yMax?: number): Raster;
}
