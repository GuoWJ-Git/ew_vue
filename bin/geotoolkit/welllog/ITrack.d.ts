import {Range} from '../util/Range';

/**
 * Interface for welllog tracks
 */
export abstract class ITrack {
    /**
     * Returns depth range
     */
    abstract getDepthLimits(): Range;
    /**
     * Returns visible depth range
     */
    abstract getVisibleDepthLimits(): Range;
}
