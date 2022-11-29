import {AbstractHttpService} from '../../http/AbstractHttpService';
import {ContourDataSource} from './ContourDataSource';

/**
 * An abstract class for data loaders
 */
export class AbstractDataLoader {
    /**
     * An abstract class for data loaders
     * @param options 
     * @param options.httpservice http service to make any HTTP request
     */
    constructor(options?: object | { httpservice?: AbstractHttpService; } );
    /**
     * Returns the AbstractDataLoader that is loaded from the passed in file.
     * @param file the local file to read T-SURF format
     */
    load(file: File | string): Promise<any>;
    /**
     * Loads data from url
     * @param url url of the resource
     */
    loadFromURL(url: string): Promise<any>;
    /**
     * Creates data source
     * @param text data in text format
     * @param name source name
     */
    getDataSource(text: string, name: string): ContourDataSource;
    /**
     * Loads data from file
     * @param file the local file to read T-SURF format
     */
    loadFromFile(file: File): Promise<any>;
}
