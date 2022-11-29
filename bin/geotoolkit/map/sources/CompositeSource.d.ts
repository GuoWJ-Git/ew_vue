import {Vector} from './Vector';
import {AbstractSystem} from '../coordinatesystems/AbstractSystem';

/**
 * Composite source that stores multiple vector sources for centralized control and processing
 */
export class CompositeSource extends Vector {
    /**
     * Composite source that stores multiple vector sources for centralized control and processing
     * @param options source(s) for storing or properties object
     * @param options.sources source(s) for storing
     */
    constructor(options?: Vector | any[] | object | { sources?: Vector | any[]; } );
    /**
     * Adds vector source to the list for getting new features
     * @param source source to add
     */
    addFeatureSource(source: Vector): this;
    /**
     * Removes source from the sources list
     * @param source source to remove
     */
    removeFeatureSource(source: Vector): this;
    /**
     * Gets current sources list used to add a new features
     */
    getFeatureSourceList(): Vector[];
    /**
     * Sets map coordinate system.
     * @param system map coordinate system
     */
    setMapCoordinateSystem(system: string | AbstractSystem): this;
    /**
     * Sets initial features coordinate system.
     * @param system initial coordinate system
     */
    setInitialCoordinateSystem(system: AbstractSystem): this;
    /**
     * Sets the grid size for layer partitioning that is used for server requests
     * @param resolution grid size
     */
    setRequestResolution(resolution: number): this;
    /**
     * Sets the unique identifier for the features
     * @param field unique identifier
     */
    setUniqueField(field: string): this;
    /**
     * Notifies source to remove all features added.
     */
    clear(): this;
    /**
     * Disposes this source, once disposes a node should not be used anymore.<br>
     */
    dispose(): void;
}
