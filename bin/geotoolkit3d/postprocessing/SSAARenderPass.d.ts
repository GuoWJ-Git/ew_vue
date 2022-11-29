import {AbstractPass} from './AbstractPass';

/**
 * A render pass class that can be used as the first pass in postprocessing.
 * This class implements super-sampling anti-aliasing.
 */
export class SSAARenderPass extends AbstractPass {
    /**
     * A render pass class that can be used as the first pass in postprocessing.
     * This class implements super-sampling anti-aliasing.
     * @param options the SSAARenderPass options
     */
    constructor(options: object);
}
