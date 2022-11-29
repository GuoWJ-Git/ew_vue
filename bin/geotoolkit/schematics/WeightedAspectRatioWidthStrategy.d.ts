import {TrackWidthStrategy} from '../deviation/TrackWidthStrategy';
import {WellBoreNode} from './scene/WellBoreNode';

/**
 * The strategy sets track width according to the equation:<br>
 * "trackWidth[device] = (trackLength[device] / aspectratio) * (OD[maximum] / OD[medium])"
 */
export class WeightedAspectRatioWidthStrategy extends TrackWidthStrategy {
    /**
     * The strategy sets track width according to the equation:<br>
     * "trackWidth[device] = (trackLength[device] / aspectratio) * (OD[maximum] / OD[medium])"
     * @param options options
     * @param options.wellborenode wellbore node
     * @param options.minWidth minimum device width
     * @param options.maxWidth maximum device width
     * @param options.aspectratio y-to-x aspect ratio
     */
    constructor(options: object | { wellborenode: WellBoreNode; minWidth?: number; maxWidth?: number; aspectratio?: number; } );
}
