import {LogTrackHeader} from './LogTrackHeader';
import {LogTrack} from '../LogTrack';
import {LogVisualHeaderProvider} from './LogVisualHeaderProvider';
import {TrackFactory} from '../TrackFactory';

/**
 * Define header for  StackedTrack
 */
export class StackedTrackHeader extends LogTrackHeader {
    /**
     * Define header for  StackedTrack
     * @param track a log track to create header or properties object
     * @param provider provider of the headers
     * @param trackFactory the factory that is used to create headers
     */
    constructor(track: LogTrack | object, provider: LogVisualHeaderProvider | null, trackFactory: TrackFactory);
}
