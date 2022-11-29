import {TrackType} from './TrackType';
import {LogTrack} from './LogTrack';
import {HoldTitle} from './header/HoldTitle';
import {FillStyle} from '../attributes/FillStyle';
import {LogVisualHeaderProvider} from './header/LogVisualHeaderProvider';
import {LogTrackHeader} from './header/LogTrackHeader';

/**
 * Define factory to create tracks
 */
export class TrackFactory {
    /**
     * Define factory to create tracks
     */
    constructor();
    /**
     * Create track
     * @example
     * ```javascript
     * import {TrackFactory} from '@int/geotoolkit/welllog/TrackFactory';
     * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
     * const factory = TrackFactory.getInstance();
     * const track = factory.createTrack(TrackType.IndexTrack, {
     *   'width': 30
     * });
     * widget.addTrack(track);
     * ```
     * @example
     * ```javascript
     * // index tracks has 'INDEX_TRACK' css class defined, so it can be used to modify style with css:
     * widget.getTrackContainer().setCss('*[cssclass="INDEX_TRACK"] { visible: false; }');
     * // or differ it from another tracks:
     * if (track.getCssClass() === 'INDEX_TRACK') {
     *     // do smth
     * }
     * ```
     * @param trackType track to create
     * @param options track options
     * @param options.width track width
     * @param options.name track name
     * @param options.border track border options
     * @param options.border.visible visibility of the border
     * @param options.border.color color of border border
     * @param options.indextype primary index types
     * @param options.indexunit primary index unit
     * @param options.indextrack defines properties for index track
     * @param options.indextrack.styles index track line styles and text styles
     * @param options.indextrack.labelformat custom label format function
     * @param options.indextrack.axis axis settings
     * @param options.indextrack.axis.name name of axis
     * @param options.indextrack.axis.locale locale for tickgenerator of axis
     * @param options.timezone timezone
     * @param options.timezoneoffset time zone offset in hours
     * @param options.gridlinestyle gridlines
     * @param options.logtrack log10 track options
     * @param options.logtrack.decadecount log20 grid decadecount, see {@link @int/geotoolkit/welllog/LogLog10ValueGrid.LogLog10ValueGrid}
     * @param options.logtrack.reverse log20 grid direction, see {@link @int/geotoolkit/welllog/LogLog10ValueGrid.LogLog10ValueGrid}
     */
    createTrack(trackType: TrackType | LogTrack, options?: object | { width?: number; name?: string; border?: object | { visible?: boolean; color?: string; } ; indextype?: string; indexunit?: string; indextrack?: object | { styles?: any; labelformat?: any; axis?: object | { name?: string; locale?: string; } ; } ; timezone?: number; timezoneoffset?: number; gridlinestyle?: any; logtrack?: object | { decadecount?: number; reverse?: boolean; } ; } ): LogTrack;
    /**
     * Create track header
     * @param track log track
     * @param options track header options
     * @param options.visibletracktitle track visible track title
     * @param options.titlefirst display title first
     * @param options.firsttolast display headers from first to last
     * @param options.toptobottom display headers from top to bottom
     * @param options.holdtitle if not HoldTitle.None then title always display atop all visuals in header even when panning/scrolling header
     * @param options.border border property
     * @param options.border.visible border visibility
     * @param options.border.color border color
     * @param options.border.width border width
     * @param options.border.background border background
     * @param provider header provider
     */
    createTrackHeader(track: LogTrack, options?: object | { visibletracktitle?: boolean; titlefirst?: boolean; firsttolast?: boolean; toptobottom?: boolean; holdtitle?: HoldTitle; border?: object | { visible?: boolean; color?: string; width?: number; background?: FillStyle | string | object; } ; } , provider?: LogVisualHeaderProvider): LogTrackHeader;
    /**
     * Create track header
     * @param track log track
     * @param options track header options
     * @param options.visibletracktitle track visible track title
     * @param options.titlefirst display title first
     * @param options.firsttolast display headers from first to last
     * @param options.toptobottom display headers from top to bottom
     * @param options.holdtitle if not HoldTitle.None then title always display atop all visuals in header even when panning/scrolling header
     * @param options.border border property
     * @param options.border.visible border visibility
     * @param options.border.color border color
     * @param options.border.width border width
     * @param options.border.background border background
     * @param provider header provider
     */
    createTrackFooter(track: LogTrack, options?: object | { visibletracktitle?: boolean; titlefirst?: boolean; firsttolast?: boolean; toptobottom?: boolean; holdtitle?: HoldTitle; border?: object | { visible?: boolean; color?: string; width?: number; background?: FillStyle | string | object; } ; } , provider?: LogVisualHeaderProvider): LogTrackHeader;
    /**
     * Return factory instance
     */
    static getInstance(): TrackFactory;
}
