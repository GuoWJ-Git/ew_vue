import {IBaseWellTrack} from './IBaseWellTrack';
import {TrackType} from '../TrackType';
import {LogTrack} from '../LogTrack';
import {FillStyle} from '../../attributes/FillStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {TrackDirection} from '../TrackDirection';
import {AbstractUnit} from '../../util/AbstractUnit';
import {Layer} from '../../scene/Layer';
import {Registry} from '../../persistence/Registry';
import {DataSource} from '../../data/DataSource';
import {AbstractDataTable} from '../../data/AbstractDataTable';
import {DataBinding} from '../../data/DataBinding';
import {AbstractTool} from '../../controls/tools/AbstractTool';
import {CompositeTool} from '../../controls/tools/CompositeTool';
import {Range} from '../../util/Range';

/**
 * Define an interface for well track
 */
export abstract class IWellTrack extends IBaseWellTrack {
    /**
     * Add a track to the back
     * @param track track to add or options to specify adding track
     * @param track.type track type to insert
     * @param track.name track name
     * @param track.width track width
     * @param track.gridlinestyle grid line style
     * @param track.background track background
     * @param track.border track border options
     * @param track.border.visible track border visibility
     * @param track.border.color track border line style
     * @param track.indextrack index track options
     * @param track.indextrack.style index track tick styles
     * @param track.indextrack.labelformat index track label format
     * @param track.logtrack log track options
     * @param track.logtrack.decadecount log track decade count
     * @param track.logtrack.reverse log track reverse direction
     * @param trackDirection deprecated (since 2020 (3.0)). use first parameter instead. The location of the track: first, last, etc.
     * @param trackWidth deprecated (since 2020 (3.0)) width of the track in pixels
     */
    abstract addTrack(track: TrackType | LogTrack | object | { type?: TrackType; name?: string; width?: number; gridlinestyle?: any; background?: any | string | FillStyle; border?: object | { visible?: boolean; color?: any | string | LineStyle; } ; indextrack?: object | { style?: object; labelformat?: object; } ; logtrack?: object | { decadecount?: number; reverse?: boolean; } ; } , trackDirection?: TrackDirection | number, trackWidth?: number): LogTrack;
    /**
     * Insert track to the container at specified index
     * @example
     * ```javascript
     * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
     * // The code below shows how to create a well track with position from 0 to 300 in the model coordinates and depth range from 500 to 1000
     * const well = widget.insertTrack(1, {
     *   'type': TrackType.LogTrack,
     *   'width': 400
     * });
     * ```
     * @param index index of the track
     * @param track track to insert or type of track or track options
     */
    abstract insertTrack(index: number, track: TrackType | LogTrack | any): LogTrack;
    /**
     * Remove the track with headers and footers
     * @param track track to remove
     */
    abstract removeTrack(track: LogTrack): this;
    /**
     * Returns amount of tracks
     */
    abstract getTracksCount(): number;
    /**
     * Sets a depth scale factor.
     * @example
     * ```javascript
     * import {UnitFactory} from '@int/geotoolkit/util/UnitFactory';
     * //  To set depth scale range as a ratio, you can use units as follows
     * const unitFactory = UnitFactory.getInstance();
     * well.setDepthScale(30, unitFactory.getUnit("feet"), unitFactory.getUnit("inch")); //1 inch == 30 feet
     * ```
     * @param scale A number of depth units in device unit.
     * @param scaleUnit scale unit of the display. if it is not specified then it takes from track container
     * @param deviceUnit device unit of the display. if it is not specified then it takes from track container
     */
    abstract setDepthScale(scale: number, scaleUnit?: AbstractUnit, deviceUnit?: AbstractUnit): this;
    /**
     * Return scale to device. How many scale units in one device unit.
     * @example
     * ```javascript
     * import {UnitFactory} from '@int/geotoolkit/util/UnitFactory';
     * //  to get the current depth scale of well.
     * const uf = UnitFactory.getInstance();
     * well.getDepthScale(uf.getUnit("cm"), uf.getUnit("cm"));
     * ```
     * @param scaleUnit scale unit of the display. if it is not specified then it takes from track container
     * @param deviceUnit device unit of the display. if it is not specified then it takes from track container
     */
    abstract getDepthScale(scaleUnit?: AbstractUnit | string, deviceUnit?: AbstractUnit | string): number;
    /**
     * Returns {geotoolkit.welllog.LogTrack} at specified index
     * @param index index to return track at
     */
    abstract getTrackAt(index: number): LogTrack;
    /**
     * Return index of track
     * @param track to get index
     */
    abstract getTrackIndex(track: LogTrack): number;
    /**
     * Return a layer to display markers
     */
    abstract getMarkerLayer(): Layer;
    /**
     * Load template
     * @param template template to be applied to the widget
     * @param registry registry
     */
    abstract loadTemplate(template: string, registry?: Registry): this;
    /**
     * Save template
     * @param registry registry
     */
    abstract saveTemplate(registry?: Registry): string;
    /**
     * Returns data source
     */
    abstract getData(): DataSource;
    /**
     * Sets a new data model
     * @param data logdata
     */
    abstract setData(data: DataSource | AbstractDataTable): this;
    /**
     * Return the data binding
     */
    abstract getDataBinding(): DataBinding;
    /**
     * Sets the data binding
     * @param binding data binding
     * @param silent silent mode to forbid
     */
    abstract setDataBinding(binding: DataBinding, silent?: boolean): this;
    /**
     * Return tool by name
     * @param name name of the tool
     */
    abstract getToolByName(name: string): AbstractTool;
    /**
     * Returns root tool associated to this widget
     */
    abstract getTool(): CompositeTool;
    /**
     * Connect a new tool with a tool name to the widget
     * @param tool tool associated with the widget
     */
    abstract connectTool(tool: AbstractTool | AbstractTool[]): this;
    /**
     * Disconnect the tool from the widget
     * @param tool tool to disconnect
     */
    abstract disconnectTool(tool: AbstractTool | AbstractTool[]): this;
    /**
     * Resize tracks to fit width of the well
     */
    abstract fitToWidth(): this;
    /**
     * Return title
     */
    abstract getTitle(): string;
    /**
     * Sets well title
     * @param title well title
     */
    abstract setTitle(title: string): this;
    /**
     * Sets the same depth or time limits for all tracks
     * @example
     * ```javascript
     * // full depth limits or scrollable limits of your widget can be set as follows:
     * widget.setDepthLimits(minDepth, maxDepth);
     * ```
     * @param minIndex min index limit
     * @param maxIndex max index limit
     */
    abstract setDepthLimits(minIndex: number | Range, maxIndex?: number): this;
    /**
     * Sets visible depth limits
     * By default it tries to fit depth based on the current visible limits of the well. If container limits
     * should be used then specify the last parameter to true
     * @example
     * ```javascript
     * Set visible limits to fit visible area of container
     * well.setVisibleDepthLimits(limits, true);
     * ```
     * @param fromIndex start depth or depth range
     * @param toIndex end range or option to fit to container visible limits
     * @param fitHeight option to fit to container visible limits
     */
    abstract setVisibleDepthLimits(fromIndex: number | Range, toIndex?: number | boolean, fitHeight?: boolean): this;
    /**
     * Return a depth range, which is visible now
     */
    abstract getVisibleDepthLimits(): Range;
}
