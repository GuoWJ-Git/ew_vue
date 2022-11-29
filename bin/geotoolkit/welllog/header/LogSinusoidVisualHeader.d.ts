import {LogCompositeVisualHeader} from './LogCompositeVisualHeader';
import {Node} from '../../scene/Node';

/**
 * Define visual to render sinusoid visual header
 */
export class LogSinusoidVisualHeader extends LogCompositeVisualHeader {
    /**
     * Define visual to render sinusoid visual header
     * @param options visual for the header or properties object
     * @param options.visual visual for the header
     */
    constructor(options?: Node | object | { visual?: Node; } );
}
