import {ShaderPass} from './ShaderPass';

/**
 * This class implements fast approximate anti-aliasing.<br>
 */
export class FXAARenderPass extends ShaderPass {
    /**
     * This class implements fast approximate anti-aliasing.<br>
     * @param options the FXAARenderPass options
     * @param options.enabled enabled
     */
    constructor(options: object | { enabled?: boolean; } );
    /**
     * Set options
     * @param options the options
     * @param options.enabled enabled
     */
    setOptions(options: object | { enabled?: boolean; } ): this;
}
