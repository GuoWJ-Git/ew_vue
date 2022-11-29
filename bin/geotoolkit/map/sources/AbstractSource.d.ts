import {EventDispatcher} from '../../util/EventDispatcher';
import {AbstractLoader} from './loaders/AbstractLoader';
import {AbstractFormat} from './formats/AbstractFormat';
import {AbstractSystem} from '../coordinatesystems/AbstractSystem';
import {Rect} from '../../util/Rect';
import {Transformer} from '../coordinatesystems/Transformer';

/**
 * Abstract map source that loads server settings and then queries some sort of data from it
 */
export class AbstractSource extends EventDispatcher {
    /**
     * Abstract map source that loads server settings and then queries some sort of data from it
     * @param options options
     * @param options.loader loader for loading server settings. If loader=null,
     * @param options.ondataloaded after loader load data
     * @param options.ondatafailed after loader failed to load data
     * there's not server settings request sending.
     * @param options.format format for the server data requests formatting
     * @param options.system initial data coordinate system
     * @param options.url data server url
     */
    constructor(options?: object | { loader?: AbstractLoader; ondataloaded?: Function; ondatafailed?: Function; format?: AbstractFormat; system?: string | AbstractSystem; url?: string; } );
    /**
     * Sets the server url to use for requesting
     * @param url server url
     */
    setServerURL(url: string): this;
    /**
     * Returns true if server data is already loaded (or no loader provided)
     */
    isDataLoaded(): boolean;
    /**
     * Gets the server url that is currently used for requests
     */
    getServerURL(): string;
    /**
     * Returns promise that is loaded when server settings are ready to process
     */
    loadServerData(): Promise<any>;
    /**
     * Returns promise that is resolving when data are ready to process
     */
    loadSourceData(): Promise<any>;
    /**
     * Checks if source (current visible) data is loaded and ready to be rendered
     */
    isDataReady(): boolean;
    /**
     * Returns server data loaded from the server
     * Should be used asynchronically after loadServerData() method is called
     */
    getServerData(): object;
    /**
     * Returns the current data model limits (presumably loaded from the server if it's settled)
     */
    getModelLimits(): Rect;
    /**
     * Sets map coordinate system.
     * @param system map coordinate system
     */
    setMapCoordinateSystem(system: string | AbstractSystem): this;
    /**
     * Gets current map coordinate system.
     */
    getMapCoordinateSystem(): AbstractSystem;
    /**
     * Sets the data initial coordinate system.
     * @param system initial coordinate system
     */
    setInitialCoordinateSystem(system: string | AbstractSystem): this;
    /**
     * Gets current data initial coordinate system.
     */
    getInitialCoordinateSystem(): AbstractSystem;
    /**
     * Gets transformer to transform data to map coordinate system
     */
    getTransformerToMap(): Transformer;
    /**
     * Gets transformer to transform data from map coordinate system
     */
    getTransformerFromMap(): Transformer;
    /**
     * Clears all the data.
     */
    clear(): this;
    /**
     * Aborts all the sent requests, resends the last one
     */
    update(): this;
    /**
     * Disposes this source, once disposed it should not be used anymore.<br>
     */
    dispose(): void;
    /**
     * Checks if some of the requests haven't been finished yet. Returns true if some data is loading, false otherwise.
     */
    isLoading(): boolean;
    /**
     * Returns copyright information.
     */
    getCopyright(): string | null;
    /**
     * Sets custom query parameter to add to the data requests
     * @param param parameter name or custom parameters object (in name -> value format)
     * @param value parameter value
     */
    setQueryParameter(param: string | object, value?: string | number): this;
    /**
     * Sets properties
     * @param properties properties
     * @param properties.url data server url
     */
    setProperties(properties?: object | { url?: string; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {url: string} | any;
}
