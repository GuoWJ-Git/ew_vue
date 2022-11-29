import {Vector} from './Vector';
import {AbstractFormat} from './formats/AbstractFormat';

/**
 * Vector source that allows user to get features from remote resource in GPX (Global Positioning System Exchange) format
 */
export class GPX extends Vector {
    /**
     * Vector source that allows user to get features from remote resource in GPX (Global Positioning System Exchange) format
     * @param options options
     * @param options.format the remote features format
     */
    constructor(options?: object | { format?: AbstractFormat; } );
}
