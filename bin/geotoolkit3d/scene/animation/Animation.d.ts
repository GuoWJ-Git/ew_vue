import {AbstractAnimation} from './AbstractAnimation';

/**
 * Simple functional animation
 */
export class Animation extends AbstractAnimation {
    /**
     * Simple functional animation
     * @param options options object
     * @param options.function function for animations, that returns true, when animation ends
     */
    constructor(options: object | { function: Function; } );
}
