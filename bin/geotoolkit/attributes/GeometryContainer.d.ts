import {Group} from '../scene/Group';
import {GeometryPattern} from './GeometryPattern';

/**
 * Implements a container to store geometries that define a pattern
 * @deprecated since 2021.1 (3.3) use geotoolkit.attributes.PatternFactory instead
 */
export class GeometryContainer {
    /**
     * Implements a container to store geometries that define a pattern
     * @param name name of this geometry container
     */
    constructor(name: string);
    /**
     * Query geometry element by name
     * @param geometryName name of the geometry
     */
    queryGeometry(geometryName: string): Group;
    /**
     * Query geometry pattern by name
     * @param geometryName name of the geometry
     */
    queryPattern(geometryName: string): GeometryPattern;
    /**
     * Register geometry element
     * @param geometryName an unique name
     * @param element geometry element to be registered
     * @param userHandler optional user handle
     */
    register(geometryName?: string, element?: Group, userHandler?: any): void;
    /**
     * Unregister geometry element
     * @param geometryName an unique name
     */
    unRegister(geometryName: string): void;
    /**
     * Unregisteres and removes all the geometries from container
     */
    clear(): void;
    /**
     * Returns an array of names registered in geometry container at the moment of calling
     */
    queryGeometryNames(): string[];
    /**
     * Returns geometry container by name
     * @param name name of the container
     */
    static getContainer(name: string): GeometryContainer;
}
