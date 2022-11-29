import {AbstractDataLoader} from './AbstractDataLoader';
import {AbstractHttpService} from '../../http/AbstractHttpService';

/**
 * A utility class that creates a ContourTSDataSource from a passed in file or form url.
 */
export class ContourTSDataLoader extends AbstractDataLoader {
    /**
     * A utility class that creates a ContourTSDataSource from a passed in file or form url.
     * @param options 
     * @param options.httpservice http service to make any HTTP request
     */
    constructor(options?: object | { httpservice?: AbstractHttpService; } );
}
