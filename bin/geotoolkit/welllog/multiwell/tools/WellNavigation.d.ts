import {AbstractTool} from '../../../controls/tools/AbstractTool';
import {IBaseWellTrack} from '../IBaseWellTrack';
import {Navigation} from '../../widgets/tools/Navigation';

/**
 * Creates default implementation of the well navigation tool for well track.
 * This tool displays navigation for each index track
 */
export class WellNavigation extends AbstractTool {
    /**
     * Creates default implementation of the well navigation tool for well track.
     * This tool displays navigation for each index track
     * @param options well track or tool options
     * @param options.welltrack well track or tool options
     */
    constructor(options?: IBaseWellTrack | object | { welltrack?: IBaseWellTrack; } );
    /**
     * Returns navigation tool
     */
    getNavigation(): Navigation;
}
