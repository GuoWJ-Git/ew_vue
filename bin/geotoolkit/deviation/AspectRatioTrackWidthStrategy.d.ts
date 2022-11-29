import {TrackWidthStrategy} from './TrackWidthStrategy';

/**
 * The strategy sets track width according to the equation:<br>
 * "trackWidth[device] = trackLength[device] / aspectratio"
 */
export class AspectRatioTrackWidthStrategy extends TrackWidthStrategy {
    /**
     * The strategy sets track width according to the equation:<br>
     * "trackWidth[device] = trackLength[device] / aspectratio"
     * @param options options
     * @param options.minWidth minimum device width
     * @param options.maxWidth maximum device width
     * @param options.aspectratio y-to-x aspect ratio
     */
    constructor(options: object | { minWidth?: number; maxWidth?: number; aspectratio?: number; } );
}
