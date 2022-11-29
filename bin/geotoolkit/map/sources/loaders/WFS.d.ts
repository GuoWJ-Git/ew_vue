import {AbstractLoader} from './AbstractLoader';

/**
 * WFS source loader that loads settings from WFS (Web Feature Service) server
 */
export class WFS extends AbstractLoader {
    /**
     * WFS source loader that loads settings from WFS (Web Feature Service) server
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
