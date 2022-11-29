import {IFeature} from './IFeature';
import {AbstractLayer} from '../layers/AbstractLayer';

/**
 * Abstract map feature class. Feature must have an ID (unique within a layer it's contained in) and geometry;<br>
 * may have set of attributes (non-spatial properties)
 */
export class AbstractFeature implements IFeature {
    /**
     * Abstract map feature class. Feature must have an ID (unique within a layer it's contained in) and geometry;<br>
     * may have set of attributes (non-spatial properties)
     * @param options options
     * @param options.geometry geometry
     * @param options.id ID
     * @param options.attributes attributes (non-spatial properties)
     */
    constructor(options: object | { geometry: any; id?: number | string; attributes?: object; } );
    /**
     * Gets class name
     */
    static getClassName(): string;
    /**
     * All subclasses should override copyConstructor or provide custom implementation for this method
     * Returns shallow copy of the feature
     */
    shallowClone(): AbstractFeature;
    /**
     * Copy constructor function.<br>
     * Function used as part of the cloning mechanism.<br>
     * Implementations should copy the given instance state to this instance.<br>
     * Makes a shallow copy of the feature.
     * @param src Source to copy from
     */
    protected copyConstructor(src: AbstractFeature): this;
    /**
     * Gets ID
     */
    getId(): number | string;
    /**
     * Gets geometry
     * @param isMapCS Map coordinate system flag
     */
    getGeometry(isMapCS?: boolean): any;
    /**
     * Gets attributes (non-spatial properties)
     */
    getAttributes(): any;
    /**
     * Applies Map coordinate system to itself
     * @param layer map layer to use for coordinate system conversion
     */
    applyMapCS(layer: AbstractLayer): this;
}
