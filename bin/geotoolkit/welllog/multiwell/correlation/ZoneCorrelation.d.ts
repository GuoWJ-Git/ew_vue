import {CompositeCorrelation} from './CompositeCorrelation';
import {LogLithology} from '../../LogLithology';

/**
 * Define auto correlation to connect lithologies with the same names
 */
export class ZoneCorrelation extends CompositeCorrelation {
    /**
     * Define auto correlation to connect lithologies with the same names
     * @param options additional options
     */
    constructor(options?: object);
    /**
     * Get correlation names
     * @param visual visual
     */
    getNames(visual: LogLithology): any;
}
