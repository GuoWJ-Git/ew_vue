import {ScaleScrollStrategy} from './ScaleScrollStrategy';

/**
 * Strategy for restriction scaling on transformation
 */
export class RestrictScaleStrategy extends ScaleScrollStrategy {
    /**
     * Strategy for restriction scaling on transformation
     * @param options options object
     * @param options.maxscale maximum absolute scale restriction [1; +Infinity]
     * @param options.minscale minimum absolute scale restriction [0; 1]
     */
    constructor(options?: object | { maxscale?: number; minscale?: number; } );
}
