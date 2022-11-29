import {BaseWidget} from '../../widgets/BaseWidget';
import {IExportable} from '../../scene/exports/IExportable';
import {Rect} from '../../util/Rect';
import {AbstractUnit} from '../../util/AbstractUnit';
import {Node, StateChanges} from '../../scene/Node';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {AnchorType} from '../../util/AnchorType';
import {AnnotationLocation} from '../../layout/AnnotationLocation';
import {Group} from '../../scene/Group';
import {Axis} from '../../axis/Axis';
import {Orientation} from '../../util/Orientation';
import {Layer} from '../../scene/Layer';
import {DataSource} from '../../data/DataSource';
import {AbstractDataTable} from '../../data/AbstractDataTable';
import {DataBinding} from '../../data/DataBinding';
import {Range} from '../../util/Range';
import {TrackType} from './TrackType';
import {ITrack} from '../ITrack';
import {CorrelationTrack} from './CorrelationTrack';
import {Point} from '../../util/Point';
import {LogTrack} from '../LogTrack';
import {HeaderContainer} from '../HeaderContainer';
import {LogTrackContainer} from '../widgets/visuals/LogTrackContainer';
import {FooterComponent} from '../../scene/exports/FooterComponent';
import {AbstractDocumentElement} from '../../scene/exports/AbstractDocumentElement';
import {HeaderComponent} from '../../scene/exports/HeaderComponent';
import {ImageCompression} from '../../pdf/ImageCompression';
import {SpeedCompression} from '../../pdf/SpeedCompression';
import {IWritable} from '../../util/stream/IWritable';

/**
 * The MultiWell widget is a widget that provides a base multi well container functionality. By default, a Multi Well Correlation Widget
 * has a track container, header and footer containers, and default tools. A track container can display different well tracks, correlation
 * panels, or log tracks. The wells can be visualized with different depth scales and offsets.
 * The well track is based on WellLog widget functionality and supports all visuals and templates supported
 * for single well visualization. Wells are located in track container, which can have own model limits, units and scale factors.
 * The Default tools include:
 * <ul>
 *  <li> Horizontal scrollbar </li>
 *  <li> Panning </li>
 *  <li> Zoom </li>
 * </ul>
 * </p>
 * @example
 * ```javascript
 * import {MultiWellWidget} from '@int/geotoolkit/welllog/multiwell/MultiWellWidget';
 * import {TrackType as MultiTrackType} from '@int/geotoolkit/welllog/multiwell/TrackType';
 * import {Range} from '@int/geotoolkit/util/Range';
 * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
 * import {CorrelationMarker} from '@int/geotoolkit/welllog/multiwell/correlation/CorrelationMarker';
 * import {LogMarker} from '@int/geotoolkit/welllog/LogMarker';
 * import {LineStyle} from '@int/geotoolkit/attributes/LineStyle';
 * import {TextStyle} from '@int/geotoolkit/attributes/TextStyle';
 * import {AnchorType} from '@int/geotoolkit/util/AnchorType';
 * // Create the empty widget
 *  const widget = new MultiWellWidget().setLayoutStyle({'left': 0, 'top': 0, 'right': 0, 'bottom': 0});
 *  // Add the first well
 *  const well1 = widget.addTrack(MultiTrackType.WellTrack, {
 *             'range': new Range(0, 500),
 *             'welllog': {
 *                 'range': new Range(4500, 5000)
 *             }
 *         });
 *  // Add the correlation track
 *  const correlationTrack1 = widget.addTrack(MultiTrackType.CorrelationTrack, {
 *             'width': 50
 *         });
 *  // add the second well
 *  const well2 = widget.addTrack(MultiTrackType.WellTrack, {
 *             'range': new Range(50, 300),
 *             'welllog': {
 *                 'range': new Range(2500, 5000)
 *             }
 *         });
 * // Add data to the wells
 *     function addWellData (well, startDepth) {
 *      well.addTrack(TrackType.IndexTrack);
 *      well.addTrack(TrackType.LinearTrack)
 *          .addChild([
 *              createCurve(createTestData(startDepth, 10, 'GR'))
 *                  .setLineStyle(new LineStyle(Helpers.getColor('green'), 1)),
 *              createCurve(createTestData(startDepth, 10, 'CALI'))
 *                  .setLineStyle(new LineStyle(Helpers.getColor('orange'), 1))
 *          ]);
 *  }
 *  // Add tops as a logMarker
 *  function addTops(well, name, depth, color) {
 *      const top = new LogMarker(depth);
 *      top.setLineStyle(LineStyle.fromObject({'color': color}));
 *      top.setTextStyle(TextStyle.fromObject({
 *          'color': color,
 *          'alignment': "left",
 *          'font': "12px sans-serif"
 *      }));
 *      top.setNameLabel(name);
 *      top.setNameLabelPosition(AnchorType.TopCenter);
 *      top.setDepthLabel(depth);
 *      top.setDepthLabelPosition(AnchorType.BottomCenter);
 *      well.getMarkerLayer().addChild(top);
 *  }
 *  // Add the correlation between the wells.
 *   function addTopsCorrelation(widget, track, leftDepth, rightDepth, color) {
 *      const index = widget.indexOfTrack(track);
 *      const leftWell = widget.getTrackAt(index-1);
 *      const rightWell = widget.getTrackAt(index+1);
 *      track.setWells(leftWell, rightWell);
 *      track.addChild(new CorrelationMarker({
 *          'linestyle': {
 *              'color': color,
 *              'width': 2,
 *              'pixelsnapmode': {'x': true, 'y': true}
 *          },
 *          'leftdepth': leftDepth,
 *          'rightdepth': rightDepth
 *      }));
 *  }
 * ```
 */
export class MultiWellWidget extends BaseWidget implements IExportable {
    /**
     * The MultiWell widget is a widget that provides a base multi well container functionality. By default, a Multi Well Correlation Widget
     * has a track container, header and footer containers, and default tools. A track container can display different well tracks, correlation
     * panels, or log tracks. The wells can be visualized with different depth scales and offsets.
     * The well track is based on WellLog widget functionality and supports all visuals and templates supported
     * for single well visualization. Wells are located in track container, which can have own model limits, units and scale factors.
     * The Default tools include:
     * <ul>
     *  <li> Horizontal scrollbar </li>
     *  <li> Panning </li>
     *  <li> Zoom </li>
     * </ul>
     * </p>
     * @param options addition options
     * @param options.modellimits define content limits in model coordinates
     * @param options.visiblelimits define visible content limits in model coordinates
     * @param options.horizontalscrollable defines if plot displays horizontal scrollbars, true | false | "auto" | "floating"
     * @param options.verticalscrollable defines if plot displays vertical scrollbars, true | false | "auto" | "floating" | object containing specific settings for all three containers
     * @param options.verticalscrollable.header defines if header displays vertical scrollbars, true | false | "auto" | "floating"
     * @param options.verticalscrollable.plot defines if plot displays vertical scrollbars, true | false | "auto" | "floating"
     * @param options.verticalscrollable.footer defines if footer displays vertical scrollbars, true | false | "auto" | "floating"
     * @param options.indexunit model limits' unit in vertical direction
     * @param options.deviceunit device unit for content to apply scale
     * @param options.attachedheaders attached well headers and footers
     * @param options.autotrackslimits calculates content model limits based on tracks position as union
     * @param options.header header options
     * @param options.header.visible visibility of the headers. If it is 'none' then it is not created.
     * @param options.header.height header height
     * @param options.header.border defines properties for header outer border
     * @param options.header.border.visible visibility of the border
     * @param options.header.border.color color of border border
     * @param options.header.viewcache enable tiled cache. It increase rendering performance for historical data
     * @param options.header.viewcachesize define view cache parameters
     * @param options.header.viewcachesize.width set tiled cache size.
     * @param options.header.viewcachesize.height set tiled cache size.
     * @param options.header.restrictmaxheadersize forbid the resizing of header container bigger than accumulated size of the track header.
     * @param options.footer footer options
     * @param options.footer.visible visibility of the footer. If it is 'none' then it is not created.
     * @param options.footer.height footer height
     * @param options.footer.border defines properties for footer outer border
     * @param options.footer.border.visible visibility of the border
     * @param options.footer.border.color color of border border
     * @param options.footer.viewcache enable tiled cache. It increase rendering performance for historical data
     * @param options.footer.viewcachesize define view cache parameters
     * @param options.footer.viewcachesize.width set tiled cache size.
     * @param options.footer.viewcachesize.height set tiled cache size.
     * @param options.viewcache enable tiled cache. It increase rendering performance for historical data
     * @param options.viewcachesize define view cache parameters
     * @param options.viewcachesize.width set tiled cache size.
     * @param options.viewcachesize.height set tiled cache size.
     * @param options.trackcontainer defines properties for track container
     * @param options.trackcontainer.verticalflip horizontal axis goes from right to left
     * @param options.trackcontainer.border defines properties for track container outer border
     * @param options.trackcontainer.border.visible visibility of the border
     * @param options.trackcontainer.border.color color of border border
     * @param options.track optional track options
     * @param options.track.fixedwidth fixed width of tracks for horizontal scale
     * @param options.track.header optional track header properties
     * @param options.track.header.border optional track header properties
     * @param options.track.header.border.visible visibility of the track header border
     * @param options.track.header.border.color color of track header border
     * @param options.track.header.border.width line width of track header border
     * @param options.annotations annotations properties for axes, titles
     * @param options.annotations.west an array of items to be inserted as annotations to west
     * @param options.annotations.east an array of items to be inserted as annotations to east
     * @param options.annotations.south an array of items to be inserted as annotations to south
     * @param options.annotations.north an array of items to be inserted as annotations to north
     * @param options.annotationssizes Properties to hold (width or height) of the annotations
     * @param options.annotationssizes.west a size of west annotation
     * @param options.annotationssizes.east a size of east annotation
     * @param options.annotationssizes.south a size of south annotation (if size is null it will be equal to footer height if it is visible)
     * @param options.annotationssizes.north a size of north annotation (if size is null it will be equal to header height if it is visible)
     * @param options.offscreentrackpanning a percent of how much track should remain in the visible space when panning a track
     * @param options.highlight define highlight properties
     * @param options.highlight.cssclass define highlight class name, see cssstyle.html tutorial
     * @param options.highlight.linestyle define line style attribute for visual highlight
     * @param options.highlight.fillstyle define fill style attribute for visual highlight
     * @param options.tops define tops overlay properties
     * @param options.tops.visible tops overlay visibility
     * @param options.tops.alignment tops alignment
     * @param options.tops.autoscroll tops are always on visible limits if true
     * @param options.tools tools options
     * @param options.tools.tracksplitter tracks splitter options
     * See {@link @int/geotoolkit/controls/tools/AbstractTool.AbstractTool#setProperties} for details
     */
    constructor(options?: object | { modellimits?: Rect; visiblelimits?: Rect; horizontalscrollable?: boolean | string; verticalscrollable?: boolean | string | object | { header?: boolean | string; plot?: boolean | string; footer?: boolean | string; } ; indexunit?: AbstractUnit | string; deviceunit?: AbstractUnit | string; attachedheaders?: boolean; autotrackslimits?: boolean; header?: object | { visible?: boolean | string; height?: number; border?: object | { visible?: boolean; color?: string; } ; viewcache?: boolean; viewcachesize?: object | { width?: number; height?: number; } ; restrictmaxheadersize?: boolean; } ; footer?: object | { visible?: boolean | string; height?: number; border?: object | { visible?: boolean; color?: string; } ; viewcache?: boolean; viewcachesize?: object | { width?: number; height?: number; } ; } ; viewcache?: boolean; viewcachesize?: object | { width?: number; height?: number; } ; trackcontainer?: object | { verticalflip?: boolean; border?: object | { visible?: boolean; color?: string; } ; } ; track?: object | { fixedwidth?: boolean; header?: object | { border?: object | { visible?: boolean; color?: string; width?: number; } ; } ; } ; annotations?: object | { west?: Node[]; east?: Node[]; south?: Node[]; north?: Node[]; } ; annotationssizes?: object | { west?: number; east?: number; south?: number; north?: number; } ; offscreentrackpanning?: number; highlight?: object | { cssclass?: string; linestyle?: LineStyle; fillstyle?: FillStyle; } ; tops?: object | { visible?: boolean; alignment?: AnchorType; autoscroll?: boolean; } ; tools?: object | { tracksplitter?: any; } ; } );
    /**
     * Add annotation to annotation container
     * @param name name of container
     * @param item item to add
     */
    addAnnotation(name: string | AnnotationLocation, item: Group | Axis): this;
    /**
     * Add annotation to annotation container
     * @param name name of container
     * @param item item to add
     */
    removeAnnotation(name: string | AnnotationLocation, item: Group | Axis): this;
    /**
     * Synchronizes axis or group with a track container model
     * @param object object to connect to the central component
     * @param orientation model orientation
     */
    connect(object: Group | Axis, orientation?: Orientation): this;
    /**
     * Returns manipulator overlay to draw temporary shapes on top of the track container
     */
    getTrackManipulatorLayer(): Layer;
    /**
     * function call in the constructor to initialize tools in the widget
     * @param options options
     * @param options.tracksplitter splitter options
     */
    protected initializeTools(options?: object | { tracksplitter?: any; } ): this;
    /**
     * Send event 'updating' to update data. The event argument's
     * includes type, source, {'start,'end'}, where start and end is visible range
     * eventName : geotoolkit.welllog.multiwell.Events.DataUpdating)
     */
    updateData(): this;
    /**
     * Enumerate each visual in track container
     * @param callback callback method
     */
    forEachVisual(callback: Function): void;
    /**
     * Sets a new data model
     * @param data logdata
     */
    setData(data: DataSource | AbstractDataTable): this;
    /**
     * returns data source
     */
    getData(): DataSource;
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
     * Sets node filter for selection tool
     * @param nodeFilter filter that allows to filter selected nodes.
     */
    setNodeFilter(nodeFilter: Function): this;
    /**
     * Return center model limits
     */
    getCenterModelLimits(): Rect;
    /**
     * Sets center model limits if auto track limits is false
     * @param limits limits to set
     */
    setCenterModelLimits(limits: Rect): this;
    /**
     * Sets center depth limits. (Vertical limits)
     * <p>This is a helper method because it sets up only vertical limits of setCenterModelLimits</p>
     * @example
     * ```javascript
     * // full depth limits or scrollable limits of your widget can be set as follows:
     * widget.setCenterDepthLimits(minDepth, maxDepth);
     * ```
     * @param minIndex min index limit
     * @param maxIndex max index limit
     */
    setCenterDepthLimits(minIndex: number | Range, maxIndex?: number): this;
    /**
     * Returns depth range of the center container.
     */
    getCenterDepthLimits(): Range;
    /**
     * Add track, well to the container.
     * <p>By default well track track has size specified in the range options and depth range specified in the options welllog</p>
     * @example
     * ```javascript
     * The code below shows how to create a well track with position from 0 to 300 in the model coordinates and depth range from 500 to 1000
     * import {TrackType} from '@int/geotoolkit/welllog/multiwell/TrackType';
     * import {Range} from '@int/geotoolkit/util/Range';
     * const well = widget.addTrack(TrackType.WellTrack, {
     *   'width': 400,
     *   'range': new Range(0, 300),
     *   'welllog': {
     *       'range': new Range(500, 1000)
     *   }
     * });
     * ```
     * @example
     * ```javascript
     * The code below shows how to create a well track to provide the first parameter
     * import {TrackType} from '@int/geotoolkit/welllog/multiwell/TrackType';
     * import {Range} from '@int/geotoolkit/util/Range';
     * const well = widget.addTrack({
     *   'type': TrackType.WellTrack
     *   'width': 400,
     *   'range': new Range(0, 300),
     *   'welllog': {
     *       'range': new Range(500, 1000)
     *   }
     * });
     * ```
     * @param track track to add
     * @param track.type track type of geotoolkit.welllog.multiwell.TrackType
     * @param track.width track width
     * @param track.range vertical position in widget
     * @param track.welllog well track options
     * @param options options additional options if track has a geotoolkit.welllog.multiwell.TrackType
     * @param options.width track width
     * @param options.range vertical position in widget
     * @param options.welllog well track options
     */
    addTrack(track: TrackType | ITrack | CorrelationTrack | object[] | object | { type?: TrackType; width?: number; range?: Range; welllog?: any; } , options?: object | { width?: number; range?: Range; welllog?: any; } ): ITrack | CorrelationTrack;
    /**
     * A factory method to create an instance of the track
     * @example
     * ```javascript
     * title supports templates with HTML
     * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
     * _multiWellWidget.createTrack(TrackType.WellTrack, {
     *       'title': '<b>Well ' + (_wellIndex++) + '</b><p>1 ${deviceUnit} : ${scaleValue} ${scaleUnit}</p>'
     * });
     * Supported keywords:
     * ${name} - track name
     * ${deviceUnit} - device unit symbol
     * ${scaleValue} - scale value
     * ${scaleUnit} - scale unit symbol
     * ```
     * @param type track type to create
     * @param options options
     * @param options.width track width
     * @param options.range vertical position in widget
     * @param options.welllog well track options for log track or well. if it is not specified the container limits are used
     * @param options.welllog.range depth range of the well track
     * @param options.welllog.header header options
     * @param options.welllog.header.autorotate rotate or use ellipsis in case of small width, ellipsis is used by default
     * @param options.welllog.footer footer options
     * @param options.welllog.footer.autorotate rotate or use ellipsis in case of small width, ellipsis is used by default
     * @param options.title track title, uses for header and footer
     */
    createTrack(type: TrackType, options?: object | { width?: number; range?: Range; welllog?: object | { range?: Range; header?: object | { autorotate?: boolean; } ; footer?: object | { autorotate?: boolean; } ; } ; title?: string; } ): ITrack | CorrelationTrack;
    /**
     * Insert track, well to the container at specified index
     * @example
     * ```javascript
     * The code below shows how to create a well track with position from 0 to 300 in the model coordinates and depth range from 500 to 1000
     * import {TrackType} from '@int/geotoolkit/welllog/multiwell/TrackType';
     * import {Range} from '@int/geotoolkit/util/Range';
     * const well = widget.insertTrack(1, TrackType.WellTrack, {
     *   'width': 400,
     *   'range': new Range(0, 300),
     *   'welllog': {
     *       'range': new Range(500, 1000)
     *   }
     * });
     * ```
     * @example
     * ```javascript
     * The code below shows how to create a well track and pass all options in the the second parameter
     * import {TrackType} from '@int/geotoolkit/welllog/multiwell/TrackType';
     * import {Range} from '@int/geotoolkit/util/Range';
     * const well = widget.insertTrack(1, {
     *   'type': TrackType.WellTrack
     *   'width': 400,
     *   'range': new Range(0, 300),
     *   'welllog': {
     *       'range': new Range(500, 1000)
     *   }
     *  });
     * ```
     * @param index index of the track
     * @param track track to insert
     * @param track.type track type of geotoolkit.welllog.multiwell.TrackType
     * @param track.width track width
     * @param track.range vertical position in widget
     * @param track.id track id
     * @param track.welllog well track options
     * @param options track options if the track has a geotoolkit.welllog.multiwell.TrackType
     * @param options.id track id
     * @param options.rage track depth limits
     * @param options.welllog well track options
     * @param options.width track width
     */
    insertTrack(index: number, track: TrackType | ITrack | object | { type?: TrackType; width?: number; range?: Range; id?: string; welllog?: any; } , options?: object | { id?: string; rage?: Range; welllog?: any; width?: number; } ): ITrack | CorrelationTrack;
    /**
     * Track it added to container
     * @param track track added
     */
    protected onTrackAdded(track: object): this;
    /**
     * Track is removing from container
     * @param track to be removed
     */
    protected onTrackRemoving(track: ITrack | CorrelationTrack): void;
    /**
     * Returns wells count
     */
    getTracksCount(): number;
    /**
     * Returns track at specified index
     * @param index index of the track
     */
    getTrackAt(index: number): ITrack | CorrelationTrack | any;
    /**
     * Returns track at specified position in plot coordinate
     * @param x x coordinate position
     * @param y y coordinate position
     */
    getTrackAtPosition(x: number | Point, y?: number): LogTrack | null;
    /**
     * Remove Well Track at specified index
     * @param index track index
     */
    removeTrackAt(index: number): this;
    /**
     * Remove specified Well Track
     * @param wellTrack track to remove
     */
    removeTrack(wellTrack: ITrack | CorrelationTrack): this;
    /**
     * Returns the index of specified track.
     * @param wellTrack track to get index
     */
    indexOfTrack(wellTrack: ITrack | CorrelationTrack): number;
    /**
     * Returns the track header if it exists
     * @param track current track
     */
    getTrackHeader(track: ITrack | CorrelationTrack): any;
    /**
     * Returns the track footer if it exists
     * @param track current track
     */
    getTrackFooter(track: ITrack | CorrelationTrack): any;
    /**
     * Returns selected Well Track
     */
    getSelectedTrack(): ITrack | CorrelationTrack;
    /**
     * Set selected well
     * @param wellTrack track to select
     */
    setSelectedTrack(wellTrack: ITrack | CorrelationTrack): this;
    /**
     * Does zoom in (namely, scales with predefined scale factor (5 / 4))
     */
    zoomIn(): this;
    /**
     * Does zoom out (namely, scales with predefined scale factor (4 / 5))
     */
    zoomOut(): this;
    /**
     * Fit the whole tracks height in the visible area
     */
    fitToHeight(): this;
    /**
     * Resize widget width to fit it in visible area
     * @param tracksWidth new track width
     */
    fitToWidth(tracksWidth?: number): this;
    /**
     * Returns visible center model limits
     */
    getCenterVisibleModelLimits(): Rect;
    /**
     * Sets center visible model limits
     * @param rect a new center model visible limits
     * @param deviceBounds device bounds of the container to fit
     * new model limits. if it is undefined then container device bounds is used
     */
    setCenterVisibleModelLimits(rect: Rect, deviceBounds?: Rect): this;
    /**
     * Change relative scale of tracks. These scales are mulitplies to existing ones.
     * @param scaleX horizontal scale factor
     * @param scaleY vertical scale factor
     * @param anchor anchor for zoom
     */
    scale(scaleX: number, scaleY?: number, anchor?: AnchorType | Point): this;
    /**
     * Sets mode to keep fixed width of tracks and wells for horizontal scale
     * @param enable enable fixed width of wells  during scale
     */
    setFixedTracksWidth(enable: boolean): this;
    /**
     * Returns mode to keep fixed width of tracks and wells for horizontal scale
     */
    getFixedTracksWidth(): boolean;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bound of the node in the parent coordinates
     */
    setBounds(bounds: Rect | object): this;
    /**
     * Updates layout(s)
     * @param targets optional parameter about which element to layout
     * @param updateScrollBarState updateScrollBarState
     */
    updateLayout(targets?: Node[], updateScrollBarState?: boolean): this;
    /**
     * Return true if headers and footers are attached to track
     */
    isAttachedHeaders(): boolean;
    /**
     * update Scroll Positions using visible limits and model limits.
     * @param updateScrollBarState update Scroll Positions using visible limits and model limits or not
     * @param enableAnimation show animation
     */
    updateScrollPositions(updateScrollBarState?: boolean, enableAnimation?: boolean): this;
    /**
     * Update header
     */
    updateHeader(): this;
    /**
     * Update footer
     */
    updateFooter(): this;
    /**
     * Returns header container. Note that container's bounds are not necessary match with
     * its visible limits as it can reside in other container. To get/set device header size, use
     * get/set HeaderHeight() method. if header visible option is 'none' then equals to null
     */
    getHeaderContainer(): HeaderContainer;
    /**
     * Returns actual header height or model height whenever 'auto' is specified
     * @param options header options
     */
    getHeaderHeight(options?: any | string): number;
    /**
     * Returns actual footer height or model height whenever 'auto' is specified
     * @param options header options,
     */
    getFooterHeight(options?: any | string): number;
    /**
     * Sets footer height
     * @param height footer height in pixels or 'auto' to fit footer height
     */
    setFooterHeight(height: number | string): this;
    /**
     * Sets header height
     * @param height header height in pixels or 'auto' to fit header height
     */
    setHeaderHeight(height: number | string): this;
    /**
     * Sets some widget options
     * @example
     * ```javascript
     * //call  setOptions on widget after construction and change the default header size(84) as follows.
     * widgets.setOptions({'header' : {
     *           'height': 184
     *           }});
     * ```
     * @param options addition options
     * @param options.header header options
     * @param options.header.visible visibility of the headers.
     * If tracks are created and it is changed from 'none' to true then it doesn't rebuild headers for existing tracks
     * @param options.header.height header height in pixels or 'auto' to fit header height
     * @param options.header.restrictmaxheadersize forbid the resizing of header container bigger than accumulutaed size of the track header.
     * @param options.footer footer options
     * If tracks are created and it is changed from 'none' to true then it doesn't rebuild footers for existing tracks
     * @param options.footer.visible visibility of the footer. If it is 'none' then it is not created.
     * @param options.footer.height footer height in pixels or 'auto' to fit footer height
     * @param options.highlight define highlight properties
     * @param options.highlight.cssclass define highlight class name, see cssstyle.html tutorial
     * @param options.highlight.linestyle define line style attribute for visual highlight
     * @param options.highlight.fillstyle define fill style attribute for visual highlight
     * @param options.tops define tops overlay properties
     * @param options.tops.visible tops overlay visibility
     * @param options.tops.alignment tops alignment
     * @param options.tops.autoscroll tops are always on visible limits if tr
     * @param options.tools tools options
     * @param options.tools.tracksplitter splitter options
     * See {@link @int/geotoolkit/controls/tools/AbstractTool.AbstractTool#setProperties} for details
     */
    setOptions(options?: object | { header?: object | { visible?: boolean | string; height?: number | string; restrictmaxheadersize?: boolean; } ; footer?: object | { visible?: boolean | string; height?: number | string; } ; highlight?: object | { cssclass?: string; linestyle?: LineStyle; fillstyle?: FillStyle; } ; tops?: object | { visible?: boolean; alignment?: AnchorType; autoscroll?: boolean; } ; tools?: object | { tracksplitter?: any; } ; } ): this;
    /**
     * Returns some widget options
     */
    getOptions(): {header: {visible: boolean; height: number}; footer: {visible: boolean; height: number}; topslayer: boolean; topsalignment: AnchorType; topsvisibility: boolean; tools: {tracksplitter: any}} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties addition options
     * @param properties.modellimits define content limits in model coordinates
     * @param properties.visiblelimits define visible content limits in model coordinates
     * @param properties.horizontalscrollable defines if plot displays horizontal scrollbars, true | false | "auto" | "floating"
     * @param properties.verticalscrollable defines if plot displays vertical scrollbars, true | false | "auto" | "floating" | object containing specific settings for all three containers
     * @param properties.verticalscrollable.header defines if header displays vertical scrollbars, true | false | "auto" | "floating"
     * @param properties.verticalscrollable.plot defines if plot displays vertical scrollbars, true | false | "auto" | "floating"
     * @param properties.verticalscrollable.footer defines if footer displays vertical scrollbars, true | false | "auto" | "floating"
     * @param properties.indexunit model limits' unit in vertical direction
     * @param properties.deviceunit device unit for content to apply scale
     * @param properties.attachedheaders attached well headers and footers
     * @param properties.autotrackslimits calculates content model limits based on tracks position as union
     * @param properties.header header options
     * @param properties.header.visible visibility of the headers. If it is 'none' then it is not created.
     * @param properties.header.height header height
     * @param properties.header.border defines properties for header outer border
     * @param properties.header.border.visible visibility of the border
     * @param properties.header.border.color color of border border
     * @param properties.header.viewcache enable tiled cache. It increase rendering performance for historical data
     * @param properties.header.viewcachesize define view cache parameters
     * @param properties.header.viewcachesize.width set tiled cache size.
     * @param properties.header.viewcachesize.height set tiled cache size.
     * @param properties.header.restrictmaxheadersize forbid the resizing of header container bigger than accumulated size of the track header.
     * @param properties.footer footer options
     * @param properties.footer.visible visibility of the footer. If it is 'none' then it is not created.
     * @param properties.footer.height footer height
     * @param properties.footer.border defines properties for footer outer border
     * @param properties.footer.border.visible visibility of the border
     * @param properties.footer.border.color color of border border
     * @param properties.footer.viewcache enable tiled cache. It increase rendering performance for historical data
     * @param properties.footer.viewcachesize define view cache parameters
     * @param properties.footer.viewcachesize.width set tiled cache size.
     * @param properties.footer.viewcachesize.height set tiled cache size.
     * @param properties.viewcache enable tiled cache. It increase rendering performance for historical data
     * @param properties.viewcachesize define view cache parameters
     * @param properties.viewcachesize.width set tiled cache size.
     * @param properties.viewcachesize.height set tiled cache size.
     * @param properties.trackcontainer defines properties for track container
     * @param properties.trackcontainer.verticalflip horizontal axis goes from right to left
     * @param properties.trackcontainer.border defines properties for track container outer border
     * @param properties.trackcontainer.border.visible visibility of the border
     * @param properties.trackcontainer.border.color color of border border
     * @param properties.track optional track options
     * @param properties.track.fixedwidth fixed width of tracks for horizontal scale
     * @param properties.track.header optional track header properties
     * @param properties.track.header.border optional track header properties
     * @param properties.track.header.border.visible visibility of the track header border
     * @param properties.track.header.border.color color of track header border
     * @param properties.track.header.border.width line width of track header border
     * @param properties.annotations annotations properties for axes, titles
     * @param properties.annotations.west an array of items to be inserted as annotations to west
     * @param properties.annotations.east an array of items to be inserted as annotations to east
     * @param properties.annotations.south an array of items to be inserted as annotations to south
     * @param properties.annotations.north an array of items to be inserted as annotations to north
     * @param properties.annotationssizes Properties to hold (width or height) of the annotations
     * @param properties.annotationssizes.west a size of west annotation
     * @param properties.annotationssizes.east a size of east annotation
     * @param properties.annotationssizes.south a size of south annotation (if size is null it will be equal to footer height if it is visible)
     * @param properties.annotationssizes.north a size of north annotation (if size is null it will be equal to header height if it is visible)
     * @param properties.offscreentrackpanning a percent of how much track should remain in the visible space when panning a track
     * @param properties.highlight define highlight properties
     * @param properties.highlight.cssclass define highlight class name, see cssstyle.html tutorial
     * @param properties.highlight.linestyle define line style attribute for visual highlight
     * @param properties.highlight.fillstyle define fill style attribute for visual highlight
     * @param properties.tops define tops overlay properties
     * @param properties.tops.visible tops overlay visibility
     * @param properties.tops.alignment tops alignment
     * @param properties.tops.autoscroll tops are always on visible limits if true
     * @param properties.tools tools options
     * @param properties.tools.tracksplitter tracks splitter options
     * See {@link @int/geotoolkit/controls/tools/AbstractTool.AbstractTool#setProperties} for details
     */
    setProperties(properties?: object | { modellimits?: Rect; visiblelimits?: Rect; horizontalscrollable?: boolean | string; verticalscrollable?: boolean | string | object | { header?: boolean | string; plot?: boolean | string; footer?: boolean | string; } ; indexunit?: AbstractUnit | string; deviceunit?: AbstractUnit | string; attachedheaders?: boolean; autotrackslimits?: boolean; header?: object | { visible?: boolean | string; height?: number; border?: object | { visible?: boolean; color?: string; } ; viewcache?: boolean; viewcachesize?: object | { width?: number; height?: number; } ; restrictmaxheadersize?: boolean; } ; footer?: object | { visible?: boolean | string; height?: number; border?: object | { visible?: boolean; color?: string; } ; viewcache?: boolean; viewcachesize?: object | { width?: number; height?: number; } ; } ; viewcache?: boolean; viewcachesize?: object | { width?: number; height?: number; } ; trackcontainer?: object | { verticalflip?: boolean; border?: object | { visible?: boolean; color?: string; } ; } ; track?: object | { fixedwidth?: boolean; header?: object | { border?: object | { visible?: boolean; color?: string; width?: number; } ; } ; } ; annotations?: object | { west?: Node[]; east?: Node[]; south?: Node[]; north?: Node[]; } ; annotationssizes?: object | { west?: number; east?: number; south?: number; north?: number; } ; offscreentrackpanning?: number; highlight?: object | { cssclass?: string; linestyle?: LineStyle; fillstyle?: FillStyle; } ; tops?: object | { visible?: boolean; alignment?: AnchorType; autoscroll?: boolean; } ; tools?: object | { tracksplitter?: any; } ; } ): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {modellimits: Rect; visiblelimits: Rect; horizontalscrollable: boolean | string; verticalscrollable: {header: boolean | string; plot: boolean | string; footer: boolean | string}; indexunit: AbstractUnit; deviceunit: AbstractUnit; attachedheaders: boolean; autotrackslimits: boolean; header: {visible: boolean | string; height: number; border: {visible: boolean; color: string}; viewcache: boolean; viewcachesize: {width: number; height: number}; restrictmaxheadersize: boolean}; footer: {visible: boolean | string; height: number; border: {visible: boolean; color: string}; viewcache: boolean; viewcachesize: {width: number; height: number}}; viewcache: boolean; viewcachesize: {width: number; height: number}; trackcontainer: {verticalflip: boolean; border: {visible: boolean; color: string}}; track: {fixedwidth: boolean; header: {border: {visible: boolean; color: string; width: number}}}; annotations: {west: Node[]; east: Node[]; south: Node[]; north: Node[]}; annotationssizes: {west: number; east: number; south: number; north: number}; offscreentrackpanning: number; highlight: {cssclass: string; linestyle: LineStyle; fillstyle: FillStyle}; tops: {visible: boolean; alignment: AnchorType; autoscroll: boolean}; tools: {tracksplitter: any}} | any;
    /**
     * Returns footer container. Note that container's bounds are not necessary match with
     * its visible limits as it can reside in other container. To get/set device footer size, use
     * get/set FooterHeight() method. if footer visible option is 'none' then equals to null
     */
    getFooterContainer(): HeaderContainer;
    /**
     * Returns track container
     */
    getTrackContainer(): LogTrackContainer;
    /**
     * Distributes the same alignment to all tracks with regard to the top,
     * the bottom or center of wells.
     * @param depth a new wells depth to be aligned to
     * @param alignment alignment of track according to container visible limits.
     * alignment value is "top", "bottom", "center".
     * @param containment verify if a track contains depth. If it is true and track
     * doesn't have specified depth then it will be scrolled to the top.
     */
    alignToDepth(depth: number, alignment?: string, containment?: boolean): this;
    /**
     * Distributes the same alignment to all tracks with regard to the top,
     * the bottom or center of wells by marker name. If track doesnt' have specified marker then it will be scrolled
     * to top.
     * @param name marker name or function to find marker
     * @param alignment vertical alignment of track according to container visible limits. alignment value is "top", "bottom", "center"
     */
    alignToMarker(name: string | Function, alignment?: string): this;
    /**
     * Pans to the point
     * @param x X coordinate of point to pan in track container model coordinate. if it is null it doesn't move in this dicrection
     * @param y Y coordinate of point to pan in track container model coordinate. if it is null it doesn't move in this dicrection
     * @param alignment alignment of specified point according to container
     * visible limits.
     */
    panTo(x?: number | any, y?: number | any, alignment?: string | AnchorType): this;
    /**
     * Scroll the  specified track in container then depth of this track is defined by alignment
     * @param track track to scroll
     * @param depth depth of the current track. if depth is out of the depth limits track will be scrolled proportionanly to up or down
     * @param alignment alignment of track according to container visible limits. alignment value is "top", "bottom", "center"
     * @param anchor position of container to be aligned
     */
    scrollTrackToDepth(track: ITrack, depth: number, alignment: string, anchor?: number): this;
    /**
     * Scroll track by depth on delta depth
     * @param track track to scroll
     * @param delta depth of the current track.
     */
    scrollTrackByDepth(track: ITrack, delta: number): this;
    /**
     * Pans view to track with specified alignment and option depth. if detph it not specified the middle fo the track is used
     * @param track track to scroll
     * @param depth depth of the specified track. if it is null it doesn't move in this direction.
     * @param alignment alignment of specified point according to container
     * visible limits.
     */
    panToTrack(track: ITrack, depth?: number, alignment?: string | AnchorType): this;
    /**
     * Convert track container vertical space to track depth
     * @param track track
     * @param depth depth
     */
    convertModelDepthToTrackDepth(track: ITrack, depth: number): number;
    /**
     * Convert track depth to container vertical model space
     * @param track track
     * @param depth depth
     */
    convertTrackDepthToModelDepth(track: ITrack, depth: number): number;
    /**
     * Align tracks by the top position
     * @param offset offset in container coordinates
     * @param alignment vertical alignment of tracks in container. It can be 'top', 'bottom', 'center'
     */
    alignTracks(offset?: number, alignment?: string): this;
    /**
     * Reset depth scale to be equal to model depth scale for all or specified tracks
     * @example
     * ```javascript
     * How to reset scale for two tracks
     * widget.resetTracksDepthScale(track1, track2]);
     * ```
     * @param tracks track or array
     * of specified tracks. If tracks are not specified then it resets scale for all tracks in the widget
     */
    resetTracksDepthScale(tracks?: ITrack | ITrack[]): this;
    /**
     * Return model track size and position in the model coordinates consider offset and scale.
     * @param track track to return size
     */
    getModelTrackSize(track: ITrack): Rect;
    /**
     * Return export model limits
     */
    getExportLimits(): Rect;
    /**
     * Sets export model limits
     * @param limits export limits
     */
    setExportLimits(limits: Range): this;
    /**
     * Return export scale
     */
    getExportScale(): {scaleX: number; scaleY: number} | object;
    /**
     * Sets export scale
     * @param scaleX export scale factor along x coordinate
     * @param scaleY export scale factor along y coordinate
     */
    setExportScale(scaleX: number, scaleY: number): this;
    /**
     * Returns exportable element
     * @param options export options
     * @param options.documentheader an optional document PDF footer
     * @param options.documentfooter an optional docuement PDF footer
     */
    getExportElement(options?: object | { documentheader?: FooterComponent; documentfooter?: FooterComponent; } ): AbstractDocumentElement;
    /**
     * Used to prepare object before exporting
     */
    beginExport(): this;
    /**
     * Used to restore object's state after exporting
     */
    endExport(): this;
    /**
     * Gets annotation at specified location
     * @param location Enum of annotation locations used to specify direction to insert
     */
    getAnnotation(location: AnnotationLocation): Group | null;
    /**
     * Mark this group to be updated.
     * @param regions optional array to return invalid rectangles
     * @param changes optional parameter to specify a reason of changes
     */
    updateState(regions?: Rect[], changes?: StateChanges): this;
    /**
     * Return scale of model context to device. How many scale units in one device unit in the vertical direction.
     * @example
     * ```javascript
     * How to get the current depth scale of multiwell widget.
     * import {UnitFactory} from '@int/geotoolkit/util/UnitFactory';
     * const uf = UnitFactory.getInstance();
     * WellLogWidget.getModelDepthScale(uf.getUnit('cm'), uf.getUnit('cm'));
     * ```
     * @param scaleUnit scale unit of the display. if it is not specified then it takes from track container
     * @param deviceUnit device unit of the display. if it is not specified then it takes from track container
     */
    getModelDepthScale(scaleUnit?: AbstractUnit | string, deviceUnit?: AbstractUnit | string): number;
    /**
     * Sets a scale factor in vertical direction for container
     * @example
     * ```javascript
     * import {UnitFactory} from '@int/geotoolkit/util/UnitFactory';
     * //  To set depth scale range as a ratio, you can use units as follows
     * const unitFactory = UnitFactory.getInstance();
     * widget.setModelDepthScale(30, unitFactory.getUnit('feet'), unitFactory.getUnit('inch')); //1 inch == 30 feet
     * ```
     * @param scale A number of depth units in device unit.
     * @param scaleUnit scale unit of the display. if it is not specified then it takes from track container
     * @param deviceUnit device unit of the display. if it is not specified then it takes from track container
     */
    setModelDepthScale(scale: number, scaleUnit?: AbstractUnit, deviceUnit?: AbstractUnit): this;
    /**
     * Exports the widget content as a PDF file, user has option to select the scale of track in pdf.
     * @param options option to specify paper parameters and header and footer
     * @param options.header an optional PDF header
     * @param options.footer an optional PDF footer
     * @param options.documentheader an optional document PDF footer
     * @param options.documentfooter an optional docuement PDF footer
     * @param options.output define optional output filename
     * @param options.save flag to save the pdf directly to file or open dialog
     * @param options.printsettings define optional paper and export parameters
     * @param options.printsettings.paperformat define optional paper paper format
     * @param options.printsettings.top define optional top margin
     * @param options.printsettings.bottom define optional bottom margin
     * @param options.printsettings.left define optional left margin
     * @param options.printsettings.right define optional top margin
     * @param options.printsettings.orientation define optional paper orientation
     * @param options.printsettings.scaling define optional scaling mode. Specify ( 'scaling': geotoolkit.scene.exports.ScalingOptions.FitWidth,) to fit all tracks in your page width.
     * @param options.printsettings.keepaspectratio keep aspect ratio
     * @param options.printsettings.continuous continuous printing
     * @param options.scalex scale by x from model units to pixels
     * @param options.scaley scale by y from model units to pixels
     * @param options.limits export model limits
     * @param options.limits.x1 start limit by default visible limits
     * @param options.limits.x2 end limit by default visible limits
     * @param options.limits.y1 start limit by default visible limits
     * @param options.limits.y2 end limit by default visible limits
     * @param options.imagescalefactor options to specify the image scale factor, right now 8 is maximum, Math.floor(600 / 72)
     * @param options.imagecompression options to specify the image compression
     * @param options.imagecompression.mode image compression method used to exporting pdf.
     * @param options.imagecompression.quality quality range from 0 to 1 that will express the jpeg image compression quality, available for jpeg mode only.
     * @param options.imagecompression.speed speed referring to the png compression speed, available  for png mode only.
     * @param options.streamcompression enable or disable pdf output compression
     * @param options.pdfstream optional user-customized Stream object
     */
    exportToPdf(options?: object | { header?: HeaderComponent; footer?: FooterComponent; documentheader?: FooterComponent; documentfooter?: FooterComponent; output?: string; save?: boolean; printsettings?: object | { paperformat?: object; top?: number; bottom?: number; left?: number; right?: number; orientation?: string; scaling?: string; keepaspectratio?: boolean; continuous?: boolean; } ; scalex?: number; scaley?: number; limits?: object | { x1?: number; x2?: number; y1?: number; y2?: number; } ; imagescalefactor?: number; imagecompression?: object | { mode?: ImageCompression; quality?: number; speed?: SpeedCompression; } ; streamcompression?: boolean; pdfstream?: IWritable; } ): Promise<IWritable>;
}
