import {TrackWidthStrategy} from '../deviation/TrackWidthStrategy';

/**
 * The strategy sets track width equal to the passed value
 */
export class FixedTrackWidthStrategy extends TrackWidthStrategy {
    /**
     * The strategy sets track width equal to the passed value
     * @param width device track width
     */
    constructor(width?: number);
}
