import {Vector} from './Vector';
import {AbstractFormat} from './formats/AbstractFormat';

/**
 * Vector source that allows user to get features from remote resource in KML (Keyhole Markup Language) format
 */
export class KML extends Vector {
    /**
     * Vector source that allows user to get features from remote resource in KML (Keyhole Markup Language) format
     * @param options options
     * @param options.format the remote features format
     */
    constructor(options?: object | { format?: AbstractFormat; } );
}
