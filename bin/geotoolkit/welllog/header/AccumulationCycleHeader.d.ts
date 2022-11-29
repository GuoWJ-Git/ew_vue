import {LogVisualHeader} from './LogVisualHeader';
import {Node} from '../../scene/Node';

/**
 * Define visual to render curve header
 */
export class AccumulationCycleHeader extends LogVisualHeader {
    /**
     * Define visual to render curve header
     * @param options visual for the header or properties object
     * @param options.visual visual for the header
     */
    constructor(options?: Node | object | { visual?: Node; } );
}
