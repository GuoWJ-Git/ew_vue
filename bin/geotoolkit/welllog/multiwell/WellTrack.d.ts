import {AbstractWellTrack} from './AbstractWellTrack';
import {IWellTrack} from './IWellTrack';
import {IExportable} from '../../scene/exports/IExportable';
import {Layer} from '../../scene/Layer';
import {LogTrackContainer} from '../widgets/visuals/LogTrackContainer';
import {Range} from '../../util/Range';
import {TrackType} from '../TrackType';
import {LogTrack} from '../LogTrack';
import {FillStyle} from '../../attributes/FillStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {TrackDirection} from '../TrackDirection';
import {DataBinding} from '../../data/DataBinding';
import {DataSource} from '../../data/DataSource';
import {Rect} from '../../util/Rect';
import {Node, StateChanges} from '../../scene/Node';
import {Registry} from '../../persistence/Registry';
import {AbstractUnit} from '../../util/AbstractUnit';
import {AbstractTool} from '../../controls/tools/AbstractTool';
import {CompositeTool} from '../../controls/tools/CompositeTool';
import {AbstractDocumentElement} from '../../scene/exports/AbstractDocumentElement';
import {LogAbstractVisual} from '../LogAbstractVisual';
import {Position} from '../LogBlock';

/**
 * Define a default implementation for IWellTrack
 */
export class WellTrack extends AbstractWellTrack implements IWellTrack, IExportable {
    /**
     * Define a default implementation for IWellTrack
     * @param options addition options
     * @param options.welllog options for well log @see {@link @int/geotoolkit/welllog/widgets/WellLogWidget.WellLogWidget}
     * @param options.welllog.header header options
     * @param options.welllog.header.autolabelrotation header auto rotate
     * @param options.welllog.footer footer options
     * @param options.welllog.footer.autolabelrotation footer auto rotate
     */
    constructor(options?: object | { welllog?: any | object | { header?: object | { autolabelrotation?: boolean; } ; footer?: object | { autolabelrotation?: boolean; } ; } ; } );
    /**
     * Returns manipulator layer
     */
    getManipulatorLayer(): Layer;
    /**
     * Returns track container
     * for internal use only
     */
    getTrackContainer(): LogTrackContainer;
    /**
     * Returns depth range
     */
    getDepthLimits(): Range;
    /**
     * Return a depth range, which is visible now
     */
    getVisibleDepthLimits(): Range;
    /**
     * Add a track
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
     * @param trackDirection deprecated (since 2020 (3.0)). The location of the track (first, last, etc).
     * It is deprecated (since 2020 (3.0)) use first parameter instead.
     * @param trackWidth deprecated (since 2020 (3.0)). width of the track in pixels
     */
    addTrack(track: TrackType | LogTrack | object | { type?: TrackType; name?: string; width?: number; gridlinestyle?: object; background?: object | string | FillStyle; border?: object | { visible?: boolean; color?: object | string | LineStyle; } ; indextrack?: object | { style?: object; labelformat?: object; } ; logtrack?: object | { decadecount?: number; reverse?: boolean; } ; } , trackDirection?: TrackDirection | number, trackWidth?: number): LogTrack;
    /**
     * Insert track to the container at specified index
     * @example
     * ```javascript
     * The code below shows how to create a well track with position from 0 to 300 in the model coordinates and depth range from 500 to 1000
     * var well = widget.insertTrack(1, {
     *   'type': geotoolkit.welllog.TrackType.LogTrack
     *   'width': 400
     * });
     * ```
     * @param index index of the track
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
     */
    insertTrack(index: number, track: TrackType | LogTrack | object | { type?: TrackType; name?: string; width?: number; gridlinestyle?: object; background?: object | string | FillStyle; border?: object | { visible?: boolean; color?: object | string | LineStyle; } ; indextrack?: object | { style?: object; labelformat?: object; } ; logtrack?: object | { decadecount?: number; reverse?: boolean; } ; } ): LogTrack;
    /**
     * Remove the track with headers and footers
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
     * Set track width and layout remains track
     * @param width track width
     * @param track if track is not defined then width is set
     * for all tracks
     */
    setTrackWidth(width: number, track?: LogTrack | any): this;
    /**
     * Return the data binding
     */
    getDataBinding(): DataBinding;
    /**
     * Sets the data binding
     * @param binding data binding
     * @param silent silent mode to forbid
     */
    setDataBinding(binding: DataBinding, silent?: boolean): this;
    /**
     * Sets a new data source
     * @param data data source
     */
    setData(data: DataSource): this;
    /**
     * Gets a data model
     */
    getData(): DataSource;
    /**
     * Return a layer to display markers
     */
    getMarkerLayer(): Layer;
    /**
     * Return a layer to display zones
     */
    getZoneLayer(): Layer;
    /**
     * Set bounds of the well
     * @param bounds track bounds
     */
    setBounds(bounds: Rect): this;
    /**
     * Resize tracks to fit width of the well
     */
    fitToWidth(): this;
    /**
     * Remove selection if it exists
     */
    removeSelection(): this;
    /**
     * Return the currently selected items
     */
    getSelection(): Node[];
    /**
     * Load template
     * @param template template to be applied to the track
     * @param registry registry
     */
    loadTemplate(template: string | WellTrack, registry?: Registry): this;
    /**
     * Save template
     * @param registry registry
     */
    saveTemplate(registry?: Registry): string;
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
    setDepthLimits(minIndex: number | Range, maxIndex?: number): this;
    /**
     * Return scale to device. How many scale units in one device unit.
     * @example
     * ```javascript
     * //  to get the current depth scale of welllog widget.
     * var uf = geotoolkit.util.UnitFactory.getInstance();
     * well.getDepthScale(uf.getUnit("cm"), uf.getUnit("cm"));
     * ```
     * @param scaleUnit scale unit of the display. if it is not specified then it takes from track container
     * @param deviceUnit device unit of the display. if it is not specified then it takes from track container
     */
    getDepthScale(scaleUnit?: AbstractUnit | string, deviceUnit?: AbstractUnit | string): number;
    /**
     * Sets index unit
     * @param unit index unit
     */
    setIndexUnit(unit: AbstractUnit | string): this;
    /**
     * Gets index unit of the current well
     */
    getIndexUnit(): AbstractUnit;
    /**
     * Sets device unit of the current well
     * @param unit device unit
     */
    setDeviceUnit(unit: AbstractUnit | string): this;
    /**
     * Gets device unit
     */
    getDeviceUnit(): AbstractUnit;
    /**
     * Sets inner model limits
     * @param modelLimits inner limits
     */
    setModelLimits(modelLimits: Rect): this;
    /**
     * Returns the tool matching the given name.<br>
     * This function also accepts tool 'path' instead of absolute name.<br>
     * For example:<br>
     * getToolByName("compositeTool.panningTools.trackPanning.TrackPanning")<br>
     * Would return the same tool than <br>
     * getToolByName("TrackPanning")<br>
     * As long as there is only one tool named "TrackPanning" in this composite<br>
     * See listToolsNames()<br>
     * @param toolName The tool name or path
     */
    getToolByName(toolName: string): AbstractTool;
    /**
     * Connect a new tool with a toolname to the widget
     * @param tool tool associated with the widget
     */
    connectTool(tool: AbstractTool | AbstractTool[]): this;
    /**
     * Disconnect the tool from the widget
     * @param tool tool to disconnect
     */
    disconnectTool(tool: AbstractTool | AbstractTool[]): this;
    /**
     * Returns root tool associated to this widget
     */
    getTool(): CompositeTool;
    /**
     * Update adornments
     */
    updateAdornments(): void;
    /**
     * Mark this group to be updated.
     * @param regions optional array to return invalid rectangles
     * @param changes optional parameter to specify a reason of changes
     */
    updateState(regions?: Rect[], changes?: StateChanges): this;
    /**
     * Prepares object before exporting and saving state
     */
    beginExport(): this;
    /**
     * Used to restore object's state after exporting
     */
    endExport(): this;
    /**
     * Returns exportable element
     * @param options options deprecated (since 2020 (3.0)). not used
     */
    getExportElement(options?: object): AbstractDocumentElement;
    /**
     * Highlights a visual or track. Called whenever a visual is selected to highlight it. <br>
     * If user selects a curve and the track, the curve,track and header are highlighted.
     * Programmatically deselecting a track doesn't automatically deselect curves.<br>
     * Deselect all selected tracks and visuals using the example shown below.
     * @example
     * ```javascript
     * well.highlightVisual(visual, false);
     * ```
     * @param visual The visual to highlight
     * @param highlight the status of the highlight
     */
    highlightVisual(visual: LogTrack | LogAbstractVisual, highlight: boolean): this;
    /**
     * Return selected track collection
     */
    getSelectedTracks(): LogTrack[];
    /**
     * Return an array of the selected visuals for the specified track. if track is not specified
     * then all selected visuals are returned. This method is a helper method and uses selected visuals
     * from 'pick' tool. The code below shows how to get access to all selected tracks and visuals instead
     * @param track track to return selected visuals specified by node filter
     */
    getSelectedVisuals(track?: LogTrack): LogAbstractVisual[];
    /**
     * Sets track options
     * @example
     * ```javascript
     * //The code to configure the gridlines in a log track, specify logdecades and generate multiple logticks
     * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
     * well.setTrackOptions(track, {
     *       'type:': TrackType.LogTrack,
     *       'value': {
     *           'logstart': 0.2,
     *           'logdecades': 4
     *       }
     *   });
     * ```
     * @param track log track
     * @param options track options
     * @param options.name track name
     * @param options.type track type
     * @param options.autolabelrotation enable or disable automatic label rotation for index track
     * @param options.index track index grid settings, only available when track type is NOT IndexTrack
     * @param options.index.major track index grid major settings
     * @param options.index.major.visible track index grid major visibility
     * @param options.index.major.style track index grid major line style
     * @param options.index.minor track index grid minor settings
     * @param options.index.minor.visible track index grid minor visibility
     * @param options.index.minor.style track index grid minor line style
     * @param options.value track value grid settings, only available when track type is NOT IndexTrack
     * @param options.value.logstart log start, only available when track type is LogTrack
     * @param options.value.logstop log stop, only available when track type is LogTrack
     * @param options.value.logscale log scale, only available when track type is LogTrack
     * @param options.value.logdecades log decades, only available when track type is LogTrack
     * @param options.value.major track value grid major settings
     * @param options.value.major.increment major increment, only available when track type is LinearTrack
     * @param options.value.major.visible track value grid major visibility
     * @param options.value.major.style track value grid major line style
     * @param options.value.minor track value grid minor settings
     * @param options.value.minor.increment minor increment, only available when track type is LinearTrack
     * @param options.value.minor.visible track value grid minor visibility
     * @param options.value.minor.style track value grid minor line style
     * @param options.block block settings
     * @param options.block.visible block visibility
     * @param options.block.position block position
     * @param options.axis axis settings
     * @param options.axis.name name of axis
     * @param options.axis.locale locale for tickgenerator of axis
     * @param options.axis.timezone time zone for time axis
     * @param options.axis.timezoneoffset time zone offset for date time axis
     */
    setTrackOptions(track: LogTrack, options: object | { name?: string; type?: TrackType | number; autolabelrotation?: boolean; index?: object | { major?: object | { visible?: boolean; style?: LineStyle | any; } ; minor?: object | { visible?: boolean; style?: LineStyle | any; } ; } ; value?: object | { logstart?: number; logstop?: number; logscale?: number; logdecades?: number; major?: object | { increment?: number; visible?: boolean; style?: LineStyle | any; } ; minor?: object | { increment?: number; visible?: boolean; style?: LineStyle | any; } ; } ; block?: object | { visible?: boolean; position?: Position; } ; axis?: object | { name?: string; locale?: string; timezone?: number; timezoneoffset?: number; } ; } ): LogTrack | null;
    /**
     * Returns track options
     * @param track track to get options
     */
    getTrackOptions(track: LogTrack): {name: string; type: TrackType | number; autolabelrotation: boolean; index: {major: {visible: boolean; style: any}; minor: {visible: boolean; style: any}}; value: {logstart: number; logstop: number; logscale: number; logdecades: number; major: {increment: number; visible: boolean; style: any}; minor: {increment: number; visible: boolean; style: any}}; block: {visible: boolean; position: Position}; axis: {name: string; locale: string; timezone: number; timezoneoffset: number}} | object;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {welllog: any} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.welllog options for well log @see {@link @int/geotoolkit/welllog/widgets/WellLogWidget.WellLogWidget}
     * @param properties.welllog.header header options
     * @param properties.welllog.header.autolabelrotation header auto rotate
     * @param properties.welllog.footer footer options
     * @param properties.welllog.footer.autolabelrotation footer auto rotate
     */
    setProperties(properties: object | { welllog?: any | object | { header?: object | { autolabelrotation?: boolean; } ; footer?: object | { autolabelrotation?: boolean; } ; } ; } ): this;
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
    setDepthScale(scale: number, scaleUnit?: AbstractUnit, deviceUnit?: AbstractUnit): this;
}
