import {AbstractHttpService} from './AbstractHttpService';

/**
 * Provide a container for HTTP service
 */
export class HttpClient {
    /**
     * Provide a container for HTTP service
     */
    constructor();
    /**
     * Return instance of the client
     */
    static getInstance(): HttpClient;
    /**
     * Return an instance of http service
     */
    getHttp(): AbstractHttpService;
    /**
     * Sets default instance of HTTP service
     * @param service a new default service
     */
    setHttp(service: AbstractHttpService): this;
}
