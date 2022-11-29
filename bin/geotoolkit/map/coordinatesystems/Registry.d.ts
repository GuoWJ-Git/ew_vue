import {AbstractSystem} from './AbstractSystem';

/**
 * This class provides registry of coordinate systems.
 */
export class Registry {
    /**
     * This class provides registry of coordinate systems.
     */
    constructor();
    /**
     * Returns coordinate system created from the object, name, epsg code or WKT string
     * @param system coordinate system, name, epsg code or WKT string
     */
    getCoordinateSystem(system: AbstractSystem | object | string | number): AbstractSystem | any;
    /**
     * Sets default system class, that will be used in getCoordinateSystem
     * @param System default system class
     */
    setDefaultSystem(System: Function): this;
    /**
     * Registers a new coordinate system
     * @param system a new coordinate system
     */
    registerCoordinateSystem(system: AbstractSystem): this;
    /**
     * Returns singleton instance of the coordinate system registry
     */
    static getDefault(): Registry;
}
