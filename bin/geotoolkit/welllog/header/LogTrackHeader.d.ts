import {LogBaseTrackHeader} from './LogBaseTrackHeader';
import {LogTrack} from '../LogTrack';
import {LogVisualHeaderProvider} from './LogVisualHeaderProvider';
import {HoldTitle} from './HoldTitle';
import {LogAbstractVisual} from '../LogAbstractVisual';

/**
 * Define LogHeader
 */
export class LogTrackHeader extends LogBaseTrackHeader {
    /**
     * Define LogHeader
     * @param track a log track to create header or properties object
     * @param track.provider provider of the headers
     * @param track.visibletracktitle defines track title header visibility
     * @param track.titlefirst defines track title header order
     * @param track.firsttolast defines track item headers order
     * @param track.toptobottom defines position of the track child headers
     * @param track.holdtitle defines track title hold
     * @param track.mergemicroposition defines whether to merge headers for visuals with microposition
     * @param provider provider of the headers
     */
    constructor(track?: LogTrack | object | { provider?: LogVisualHeaderProvider; visibletracktitle?: boolean; titlefirst?: boolean; firsttolast?: boolean; toptobottom?: boolean; holdtitle?: HoldTitle; mergemicroposition?: boolean; } , provider?: LogVisualHeaderProvider);
    /**
     * Sets header provider
     * @param provider header provider
     */
    setHeaderProvider(provider: LogVisualHeaderProvider): this;
    /**
     * Sets visible track title. This method removes all headers and build it
     * again.
     * @param visible defines track visibility
     */
    setVisibleTrackTitle(visible: boolean): this;
    /**
     * Return true if track title is visible
     */
    isVisibleTrackHeader(): boolean;
    /**
     * Sets order of the track title header.
     * @param titleFirst track child order
     */
    setTitleFirst(titleFirst: boolean): this;
    /**
     * Return order of the track title header.
     */
    getTitleFirst(): boolean;
    /**
     * Sets order of the track child headers.
     * @param firstToLast track child order
     */
    setFirstToLast(firstToLast: boolean): this;
    /**
     * Return order of the track child headers
     */
    getFirstToLast(): boolean;
    /**
     * Sets position of the track child headers.
     * @param topToBottom track child order
     */
    setTopToBottom(topToBottom: boolean): this;
    /**
     * Return position of the track child headers
     */
    getTopToBottom(): boolean;
    /**
     * Sets track title hold
     * @param holdTitle if true then title always display atop
     *     all visuals in header even when panning/scrolling header
     */
    setHoldTitle(holdTitle: HoldTitle): this;
    /**
     * Return track title hold
     */
    getHoldTitle(): HoldTitle;
    /**
     * Sets microposition merging. Header merging is enabled by default.
     *      The header will try to fit as many micropositioned headers on a line as it can without overlap.
     *      If CURVE-1's micropositioning would overlap with CURVE-2, its header is placed on a new row.
     * @param mergeMicroposition merge micropositioned headers
     */
    setMergeMicroposition(mergeMicroposition: boolean): this;
    /**
     * Return microposition merging
     */
    getMergeMicroposition(): boolean;
    /**
     * Returns the current header provider
     */
    getHeaderProvider(): LogVisualHeaderProvider | any;
    /**
     * Return desired height of the header
     */
    getDesiredHeight(): number;
    /**
     * Returns active visual
     */
    getActiveVisual(): LogAbstractVisual;
    /**
     * Set active visual
     * @param activeVisual new instance of the active visual
     */
    setActiveVisual(activeVisual: LogAbstractVisual): this;
    /**
     * Update layout
     */
    updateLayout(): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {headerprovider: LogVisualHeaderProvider; visibletracktitle: boolean; titlefirst: boolean; firsttolast: boolean; toptobottom: boolean; holdtitle: HoldTitle; mergemicroposition: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.headerprovider header provider
     * @param properties.visibletracktitle defines track title header visibility
     * @param properties.titlefirst defines track track title header order
     * @param properties.firsttolast defines track item headers order
     * @param properties.toptobottom defines position of the track child headers
     * @param properties.holdtitle defines track title hold
     * @param properties.mergemicroposition defines whether to merge micropositioned headers
     */
    setProperties(properties: object | { headerprovider?: LogVisualHeaderProvider; visibletracktitle?: boolean; titlefirst?: boolean; firsttolast?: boolean; toptobottom?: boolean; holdtitle?: HoldTitle; mergemicroposition?: boolean; } ): this;
}
