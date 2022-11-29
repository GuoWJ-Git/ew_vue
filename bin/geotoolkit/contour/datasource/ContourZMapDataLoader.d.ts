import {AbstractDataLoader} from './AbstractDataLoader';
import {AbstractHttpService} from '../../http/AbstractHttpService';

/**
 * A utility class that creates a ContourZMapDataLoader from a passed in file.
 */
export class ContourZMapDataLoader extends AbstractDataLoader {
    /**
     * A utility class that creates a ContourZMapDataLoader from a passed in file.
     * @param options 
     * @param options.httpservice http service to make any HTTP request
     */
    constructor(options?: object | { httpservice?: AbstractHttpService; } );
}
