import {LogTrack} from './LogTrack';
import {Node} from '../scene/Node';
import {TrackDirection} from './TrackDirection';
import {Layout} from '../layout/Layout';
import {Range} from '../util/Range';

/**
 * The StackedTrack serves as a container for all kinds of tracks and visuals like curves, fill etc.
 */
export class StackedTrack extends LogTrack {
    /**
     * The StackedTrack serves as a container for all kinds of tracks and visuals like curves, fill etc.
     * @param options 
     */
    constructor(options?: object);
    /**
     * @param event broadcast event
     * @param source who is initializing this event
     * @param args additional parameter
     */
    notify(event: string, source: Node, args: object): this;
    /**
     * Add a track
     * @example
     * ```javascript
     * widget.addTrack(track);
     * ```
     * @param track track to insert
     * @param trackDirection deprecated (since 2020 (3.0)). use insertTrack instead. The location of the track
     * @param reference deprecated (since 2020 (3.0)). use insertTrack instead. reference track
     */
    addTrack(track: LogTrack, trackDirection?: TrackDirection, reference?: LogTrack): LogTrack;
    /**
     * Insert track to the container at specified index
     * @example
     * ```javascript
     * widget.insertTrack(0, track);
     * ```
     * @param index index of the track
     * @param track track to insert
     * @param trackWidth optional track width
     */
    insertTrack(index: number | LogTrack, track: LogTrack | number, trackWidth?: number): LogTrack;
    /**
     * Remove the track
     * @param track track to remove
     */
    removeTrack(track: LogTrack): this;
    /**
     * Returns amount of tracks
     */
    getTracksCount(): number;
    /**
     * Returns {geotoolkit.welllog.LogTrack} at specified index
     * @param index index to return track at
     */
    getTrackAt(index: number): LogTrack;
    /**
     * Return index of track
     * @param track to get index
     */
    getTrackIndex(track: LogTrack): number;
    /**
     * Associate layout with a track to layout children tracks
     * @param layout layout to be set
     */
    setLayout(layout: Layout): this;
    /**
     * Returns layout associated with the group
     */
    getLayout(): Layout | any;
    /**
     * Sets the same depth limits for all tracks
     * @param minDepth min depth for all tracks or the range to set
     * @param maxDepth max depth for all tracks
     */
    setDepthLimits(minDepth: number | Range, maxDepth: number): this;
}
