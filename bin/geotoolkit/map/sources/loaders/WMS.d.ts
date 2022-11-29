import {AbstractLoader} from './AbstractLoader';

/**
 * WMS source loader that loads settings from WMS (Web Map Service) server
 */
export class WMS extends AbstractLoader {
    /**
     * WMS source loader that loads settings from WMS (Web Map Service) server
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
    getSettingsUrl(): string | null;
}
