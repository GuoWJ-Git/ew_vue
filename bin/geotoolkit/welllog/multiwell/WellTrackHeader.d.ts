import {Group} from '../../scene/Group';
import {WellTrack} from './WellTrack';
import {LogVisualHeaderProvider} from '../header/LogVisualHeaderProvider';
import {HoldTitle} from '../header/HoldTitle';
import {Node} from '../../scene/Node';

/**
 * Define Header for WellTrack
 */
export class WellTrackHeader extends Group {
    /**
     * Define Header for WellTrack
     * @param options a log track to create header or properties object
     * @param options.track a log track to create header
     * @param options.provider provider of the headers
     * @param options.holdtitle if not HoldTitle.None then title always display atop all visuals in header even when panning/scrolling header
     * @param provider provider of the headers
     */
    constructor(options?: WellTrack | object | { track?: WellTrack; provider?: LogVisualHeaderProvider; holdtitle?: HoldTitle; } , provider?: LogVisualHeaderProvider);
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
     * Sets header provider
     * @param provider header provider
     */
    setHeaderProvider(provider: LogVisualHeaderProvider): this;
    /**
     * Returns the current header provider
     */
    getHeaderProvider(): LogVisualHeaderProvider | any;
    /**
     * Updates layout(s)
     * @param targets optional parameter about which element to layout
     */
    updateLayout(targets?: Node[]): this;
    /**
     * Return desired height of the header
     */
    getDesiredHeight(): number;
    /**
     * Returns instance of the track to display header
     */
    getWellTrack(): WellTrack;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {provider: LogVisualHeaderProvider; holdtitle: HoldTitle} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.provider header provider
     * @param properties.holdtitle defines well title hold
     */
    setProperties(properties: object | { provider?: LogVisualHeaderProvider; holdtitle?: HoldTitle; } ): this;
}
