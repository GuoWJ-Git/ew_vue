import {AbstractLoader} from './AbstractLoader';

/**
 * Bing source loader that loads settings from Bing Maps server
 */
export class Bing extends AbstractLoader {
    /**
     * Bing source loader that loads settings from Bing Maps server
     * @param options options
     */
    constructor(options?: object);
    /**
     * Parses server data response
     * @param data data received from the server
     * @param onload function to be called when data is loaded
     */
    parse(data: string | object, onload: Function): void;
    /**
     * Returns server settings request url
     */
    getSettingsUrl(): string;
}
