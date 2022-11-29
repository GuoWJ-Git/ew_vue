import {BaseWidget} from '../../widgets/BaseWidget';
import {IExportable} from '../../scene/exports/IExportable';
import {Range} from '../../util/Range';
import {IndexType} from '../IndexType';
import {AbstractUnit} from '../../util/AbstractUnit';
import {TimeZone} from '../../axis/TimeZone';
import {DisplayType, HeaderContainer} from '../HeaderContainer';
import {Cache} from '../../scene/Cache';
import {LineStyle} from '../../attributes/LineStyle';
import {Node} from '../../scene/Node';
import {Format} from '../../util/Format';
import {FillStyle} from '../../attributes/FillStyle';
import {LineDecoration} from '../../attributes/LineDecoration';
import {SymbolShape} from '../../scene/shapes/SymbolShape';
import {EventDispatcher} from '../../util/EventDispatcher';
import {BorderStrategy} from '../BorderStrategy';
import {TrackHighlightStrategy} from '../TrackHighlightStrategy';
import {HoldTitle} from '../header/HoldTitle';
import {ScrollDirection} from './ScrollDirection';
import {Orientation} from '../../util/Orientation';
import {TrackRenderDirection} from './TrackRenderDirection';
import {AnnotationLocation} from '../../layout/AnnotationLocation';
import {Group} from '../../scene/Group';
import {Layer} from '../../scene/Layer';
import {HeaderType} from '../header/LogAxisVisualHeader';
import {LogTrack} from '../LogTrack';
import {LogAbstractVisual} from '../LogAbstractVisual';
import {TrackType} from '../TrackType';
import {TrackDirection} from '../TrackDirection';
import {Position} from '../LogBlock';
import {LogTrackContainer} from './visuals/LogTrackContainer';
import {Point} from '../../util/Point';
import {DataSource} from '../../data/DataSource';
import {AbstractDataTable} from '../../data/AbstractDataTable';
import {DataBinding} from '../../data/DataBinding';
import {DataBindingRegistry} from '../../data/DataBindingRegistry';
import {ScrollToLocation} from '../TrackContainer';
import {AnchorType} from '../../util/AnchorType';
import {HeaderComponent} from '../../scene/exports/HeaderComponent';
import {FooterComponent} from '../../scene/exports/FooterComponent';
import {isVisiblePageElementCallback} from '../../scene/exports/PageElement';
import {Unit} from '../../util/Unit';
import {ImageCompression} from '../../pdf/ImageCompression';
import {SpeedCompression} from '../../pdf/SpeedCompression';
import {EmbededFont} from '../../pdf/PdfExport';
import {IWritable} from '../../util/stream/IWritable';
import {AbstractDocumentElement} from '../../scene/exports/AbstractDocumentElement';
import {Registry} from '../../persistence/Registry';
import {Rect} from '../../util/Rect';
import {Axis} from '../../axis/Axis';
import {TrackFactory} from '../TrackFactory';

/**
 * <p>
 * The WellLog widget is a widget that is specialized for well related data. It uses classes from the WellLog toolkit internally.<br>
 * The main way to configure and customize the default look and feel of the widget is by using the different setOptions() function in the constructor.<br>
 * The widget content can be manipulated through add/remove/get-Track() and the Track content can be controlled through track.add/remove/get-Child() as shown in example below.<br>
 * Similarly all supported well data (track, index track, log curves, log fills, log2d, markers etc) can be manipulated.<br>
 * Widget has header, footer containers to display tracks and visuals headers and track container to display tracks.
 * The widget provides builtin support for Time/Depth modes, Resizing headers and footers, Selection and highlighting, Track resizing.
 * The Default tools include:
 * <ul>
 *  <li> Horizontal scrollbar </li>
 *  <li> Vertical scrollbars (header, tracks, footer) </li>
 *  <li> Panning </li>
 *  <li> Zoom </li>
 *  <li> Pinching </li>
 *  <li> Crosshair </li>
 *  <li> Header/Footer splitters (for resizing) </li>
 *  <li> Track splitters (for resizing) </li>
 *  <li> Rubberband (for rubberband Zoom) </li>
 *  <li> Selection </li>
 *  <li> drag-and-drop (for drag'n drop track or curve) </li>
 * </ul>
 * </p>
 * @example
 * ```javascript
 * // Create the Widget
 * import {WellLogWidget} from '@int/geotoolkit/welllog/widgets/WellLogWidget';
 * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
 * сonst widget = new WellLogWidget({
 *           'horizontalscrollable': false,
 *           'verticalscrollable': true,
 *           'trackcontainer': {
 *               'border': {'visible': false}
 *           },
 *           'border': {'visible': false}
 *       })
 *  widget.addTrack(TrackType.IndexTrack);
 * ```
 * @example
 * ```javascript
 * // Adding a curve to the widget.
 * import {LogCurve} from '@int/geotoolkit/welllog/LogCurve';
 * widget.addTrack(TrackType.LinearTrack)
 *          .addChild([
 *               new LogCurve(curveData)
 *                   .setLineStyle('green', 1))
 *           ]);
 * ```
 * @example
 * ```javascript
 * import {Events as AbstractScrollEvents} from '@int/geotoolkit/controls/tools/scroll/AbstractScroll';
 * import {Events as PanningEvents} from '@int/geotoolkit/controls/tools/Panning';
 * // Capture a scroll event when the user uses the scroll tab or mouse wheel.
 * widget.getToolByName('TrackPanning')
 *   .addListener(PanningEvents.onPanning, (sender, eventArgs) => {
 *       ...
 *    });
 * widget.getToolByName('HorizontalPlotScroll')
 *   .addListener(AbstractScrollEvents.onScroll, (sender, eventArgs) => {
 *       ...
 *    });
 * ```
 * @example
 * ```javascript
 * // Resizing WellLogWidget.
 * // It has two parts. The first one is resizing of the plot, which is a container of any widget and shapes and the second step is resizing of widgets inside of container.
 * // To change the size of the widget you need to call 'setBounds' method of the widget. The method of the plot 'setSize' will change a plot size.
 * // It is better to use automatic way to change size of the widget based on plot. The following steps will describe this approach:
 * // step2: When you create a plot you specify canvas and widget like this:
 * import {Plot} from '@int/geotoolkit/plot/Plot';
 * import {Group} from '@int/geotoolkit/scene/Group';
 * import {CssLayout} from '@int/geotoolkit/layout/CssLayout';
 * // step1: After you create a widget you specify location inside the plot using layout style like this:
 * const widget = new WellLogWidget({
 *           'horizontalscrollable': false,
 *           'verticalscrollable': true,
 *           'trackcontainer': {
 *               'border': {'visible': false}
 *           },
 *           'border': {'visible': false}
 *           'track' : {
 *              'header' : {
 *                  'visibletracktitle' : true,
 *                  'titlefirst' : true,
 *                  'firsttolast' : false,
 *                  'toptobottom' : false,
 *                  'holdtitle' : geotoolkit.welllog.header.HoldTitle.Top
 *              },
 *              'footer' :  {
 *                  'visibletracktitle' : true,
 *                  'titlefirst' : true,
 *                  'firsttolast' : false,
 *                  'toptobottom' : true,
 *                  'holdtitle' : geotoolkit.welllog.header.HoldTitle.None
 *              }
 *          },
 *       })
 * .setLayoutStyle({
 *               'left': 0,
 *               'top': 0,
 *               'right': 0,
 *               'bottom': 0
 *           });
 * // This setLayoutStyle tells that widgets will occupy whole plot area.
 * const widgetPlot = new Plot({
 *           'canvasElement': canvas,
 *           'root': new Group()
 *               .setAutoModelLimitsMode(true)
 *               .setLayout(new CssLayout())   // plot will resize children using CssLayout.
 *               .addChild(widget),
 *           'autoSize': false,
 *           'autoRootBounds': true
 *       });
 * // Now if you change a plot size then the size of widget will be changed automatically, so to resize widget you need just to call:
 * plot.setSize(width, height);
 * ```
 * @example
 * ```javascript
 * // To modify the height of headers container simply do the following while initializing the widget.
 * const widget = new WellLogWidget({
 *           'header': {
 *               'height': 200
 *           }
 *       })
 * ```
 * @example
 * ```javascript
 * // ..or If you are using CSS then
 * import {CssStyle} from '@int/geotoolkit/css/CssStyle';
 * const css = [
 * '.WellLogWidget {',
 *          '   header-height: 200;',
 *           '}',
 * ].join('\n');
 * widget.setCss(new CssStyle({'css': css}));
 * // CSS styles can be used to change other properties also. Please refer to the CSS properties section to see which properties can be changed.
 * ```
 * @example
 * ```javascript
 * // To add widget header:
 * import {Text} from '@int/geotoolkit/scene/shapes/Text';
 * const widget = new WellLogWidget({
 *          'annotations': {
 *              'north': [
 *                  new Text({'text': 'Title'}).setLayoutStyle({ 'height': 20 })
 *              ]
 *          },
 *          'annotationssizes': {
 *              'north': 100
 *          }
 * });
 * ```
 * @example
 * ```javascript
 * // To change tracks' size manually use method WellLogWidget.setTrackWidth:
 * wellLogWidget.setTrackWidth(150, track); // 150 is the width, if track is null then width will be applied to all tracks.
 * ```
 * @example
 * ```javascript
 * // To set CSS style to hover and highlight
 * // specify cssclass name
 * const widget = new WellLogWidget({
 * 'highlight': {
 *   'cssclass': 'highlight'
 * });
 * // sets CSS properties for highlighting and hover for curve
 * widget.setCss(new CssStyle(
 *   {
 *       'css': [
 *           '.geotoolkit.welllog.LogCurve:hover {',
 *           '   linestyle-width: 3;',
 *           '}',
 *           '.geotoolkit.welllog.LogCurve:highlight {',
 *           '   linestyle-width: 3;',
 *           '}'
 *       ].join('')
 *   }));
 * ```
 * @example
 * ```javascript
 * // If you need to change style of visual checks and remove 'hover' and 'highlight' CSS class from it like this:
 * import {PseudoClass} from '@int/geotoolkit/css/CssStyle';
 * ...
 * var hasHover = selectedVisual.hasCssClass(PseudoClass.Hover);
 * var hasHighlight = selectedVisual.hasCssClass(PseudoClass.Highlight);
 * // Remove class to restore original styles
 * if (hasHover || hasHighlight) {
 *   selectedVisual.removeCssClass([PseudoClass.Hover, PseudoClass.Highlight]);
 * }
 * selectedVisual.setLineStyle(newStyle);
 * if (hasHover) {
 *   selectedVisual.addCssClass(PseudoClass.Hover);
 * }
 * if (hasHighlight) {
 *   selectedVisual.addCssClass(PseudoClass.Highlight);
 * }
 * ```
 */
export class WellLogWidget extends BaseWidget implements IExportable {
    /**
     * <p>
     * The WellLog widget is a widget that is specialized for well related data. It uses classes from the WellLog toolkit internally.<br>
     * The main way to configure and customize the default look and feel of the widget is by using the different setOptions() function in the constructor.<br>
     * The widget content can be manipulated through add/remove/get-Track() and the Track content can be controlled through track.add/remove/get-Child() as shown in example below.<br>
     * Similarly all supported well data (track, index track, log curves, log fills, log2d, markers etc) can be manipulated.<br>
     * Widget has header, footer containers to display tracks and visuals headers and track container to display tracks.
     * The widget provides builtin support for Time/Depth modes, Resizing headers and footers, Selection and highlighting, Track resizing.
     * The Default tools include:
     * <ul>
     *  <li> Horizontal scrollbar </li>
     *  <li> Vertical scrollbars (header, tracks, footer) </li>
     *  <li> Panning </li>
     *  <li> Zoom </li>
     *  <li> Pinching </li>
     *  <li> Crosshair </li>
     *  <li> Header/Footer splitters (for resizing) </li>
     *  <li> Track splitters (for resizing) </li>
     *  <li> Rubberband (for rubberband Zoom) </li>
     *  <li> Selection </li>
     *  <li> drag-and-drop (for drag'n drop track or curve) </li>
     * </ul>
     * </p>
     * @param options addition options
     * @param options.range min and max depth range.
     * @param options.horizontalscrollable defines if plot displays horizontal scrollbars, true | false | 'auto' | 'floating'
     * @param options.verticalscrollable defines if plot displays vertical scrollbars, true | false | 'auto' | 'floating' | object containing specific settings for all three containers
     * @param options.verticalscrollable.header defines if header displays vertical scrollbars, true | false | "auto" | "floating"
     * @param options.verticalscrollable.plot defines if plot displays vertical scrollbars, true | false | "auto" | "floating"
     * @param options.verticalscrollable.footer defines if footer displays vertical scrollbars, true | false | "auto" | "floating"
     * @param options.indextype primary index types
     * @param options.indexunit primary index unit
     * @param options.deviceunit primary device unit
     * @param options.timezone time zone for time axis
     * @param options.timezoneoffset time zone offset for date time axis
     * @param options.indent indent
     * @param options.header header options
     * @param options.header.visible visibility of the headers, if it is 'none' then header is not created
     * @param options.header.margin margin margin between header components
     * @param options.header.padding padding padding inside header components
     * @param options.header.displaytype display type
     * @param options.header.height header height
     * @param options.header.roundedboxradius radius of the rounded box
     * @param options.header.border defines properties for header outer border
     * @param options.header.border.visible visibility of the border
     * @param options.header.border.color color of border border
     * @param options.header.restrictmaxheadersize forbid the resizing of header container bigger than accumulutaed size of the track header.
     * @param options.header.viewcache enable tiled cache. It increase rendering performance for historical data
     * @param options.footer footer options
     * @param options.footer.visible visibility of the footer, if it is 'none' then footer is not created
     * @param options.footer.margin margin margin between footer components
     * @param options.footer.padding padding padding inside footer components
     * @param options.footer.displaytype display type
     * @param options.footer.height footer height
     * @param options.footer.roundedboxradius radius of the rounded box
     * @param options.footer.border defines properties for footer outer border
     * @param options.footer.border.visible visibility of the border
     * @param options.footer.border.color color of border border
     * @param options.footer.viewcache enable tiled cache. It increase rendering performance for historical data
     * @param options.gridlinestyle grid line style
     * @param options.viewcache enable tiled cache. It increase rendering performance for historical data
     * @param options.border defines properties for widget outer border
     * @param options.border.visible visibility of the border
     * @param options.border.color color of border border
     * @param options.annotations annotations properties for axes, titles
     * @param options.annotations.west an array of items to be inserted as annotations to west
     * @param options.annotations.east an array of items to be inserted as annotations to east
     * @param options.annotations.south an array of items to be inserted as annotations to south
     * @param options.annotations.north an array of items to be inserted as annotations to north
     * @param options.annotationssizes Properties to hold (width or height) of the annotations
     * @param options.annotationssizes.west a size of west annotation
     * @param options.annotationssizes.east a size of east annotation
     * @param options.annotationssizes.south a size of south annotation
     * @param options.annotationssizes.north a size of north annotation
     * @param options.marker marker options
     * @param options.marker.datetimeformat date time format in case if track container scale unit belongs to 'time'
     * @param options.marker.indexvisible visibility of the marker index value label
     * @param options.marker.indexformatter depth index format that accept number
     * @param options.marker.labelvisible visibility of the marker shape label
     * @param options.marker.valueformatter value format that accept object with properties { 'curve', 'depth', 'value' }
     * @param options.marker.enabledinterpolatedvalues display symbol for interpolated values
     * @param options.marker.fillstyle marker shape fill style
     * @param options.marker.linestyle marker shape line style
     * @param options.tools tools options
     * @param options.tools.crosshair JSON which defines crosshair cursor.
     * See {@link @int/geotoolkit/controls/tools/CrossHair.CrossHair#setProperties} for details
     * @param options.tools.cursortracking cursor tracking options
     * @param options.tools.cursortracking.crosshair JSON which defines crosshair cursor.
     * See {@link @int/geotoolkit/controls/tools/CrossHair.CrossHair#setProperties} for details
     * @param options.tools.cursortracking.tooltip JSON which defines tooltip tool.
     * See {@link @int/geotoolkit/controls/tools/ToolTipTool.ToolTipTool#constructor} for details
     * @param options.tools.tracksplitter tracks splitter options
     * See {@link @int/geotoolkit/controls/tools/AbstractTool.AbstractTool#setProperties} for details
     * @param options.collapsed collapsed intervals settings
     * @param options.collapsed.intervals collapsed intervals
     * @param options.collapsed.marker collapsed marker styles
     * @param options.collapsed.marker.collapsed marker styles for collapsed mode
     * @param options.collapsed.marker.collapsed.line marker line style
     * @param options.collapsed.marker.collapsed.line.color marker line color
     * @param options.collapsed.marker.collapsed.line.width marker line width
     * @param options.collapsed.marker.collapsed.line.decoration marker line decoration style
     * @param options.collapsed.marker.collapsed.symbol marker symbol shape
     * @param options.collapsed.marker.collapsed.symbol.size marker symbol shape size
     * @param options.collapsed.marker.collapsed.symbol.painter marker symbol shape painter
     * @param options.collapsed.marker.collapsed.symbol.linestyle marker symbol shape linestyle
     * @param options.collapsed.marker.collapsed.symbol.fillstyle marker symbol shape fillstyle
     * @param options.collapsed.marker.uncollapsed marker styles for uncollapsed mode
     * @param options.collapsed.marker.uncollapsed.line marker line style
     * @param options.collapsed.marker.uncollapsed.line.color marker line color
     * @param options.collapsed.marker.uncollapsed.line.width marker line width
     * @param options.collapsed.marker.uncollapsed.line.decoration marker line decoration style
     * @param options.collapsed.marker.uncollapsed.symbol marker symbol shape
     * @param options.collapsed.marker.uncollapsed.symbol.size marker symbol shape size
     * @param options.collapsed.marker.uncollapsed.symbol.painter marker symbol shape painter
     * @param options.collapsed.marker.uncollapsed.symbol.linestyle marker symbol shape linestyle
     * @param options.collapsed.marker.uncollapsed.symbol.fillstyle marker symbol shape fillstyle
     * @param options.trackcontainer defines properties for track container
     * @param options.trackcontainer.border defines properties for track container outer border
     * @param options.trackcontainer.border.visible visibility of the border
     * @param options.trackcontainer.border.color color of border border
     * @param options.trackcontainer.track options of track inside the track container
     * @param options.trackcontainer.track.borderstrategy apply a border strategy to the LogTrack class
     * @param options.trackcontainer.track.highlightstrategy apply a highlight strategy to the LogTrack class
     * @param options.trackcontainer.verticalflip specify direction of the vertical axis. By default it goes from top to bottom. if it is true
     * then an axis goes from bottom to top.
     * @param options.track defines properties for track
     * @param options.track.background defines properties for track background
     * @param options.track.border defines properties for track border
     * @param options.track.border.visible visibility of the border
     * @param options.track.border.color color of border border
     * @param options.track.header optional track header properties
     * @param options.track.header.visibletracktitle visibility of track title
     * @param options.track.header.titlefirst order of the track title header
     * @param options.track.header.firsttolast order of the track child headers
     * @param options.track.header.toptobottom position of the track child headers
     * @param options.track.header.holdtitle if not HoldTitle.None then title always display atop all visuals in header even when panning/scrolling header
     * @param options.track.header.border optional track header properties
     * @param options.track.header.border.visible visibility of the track header border
     * @param options.track.header.border.color color of track header border
     * @param options.track.header.border.width line width of track header border
     * @param options.track.header.border.background color of border background
     * @param options.track.footer optional track footer properties
     * @param options.track.footer.visibletracktitle visibility of track title
     * @param options.track.footer.titlefirst order of the track title footer
     * @param options.track.footer.firsttolast order of the track child footers
     * @param options.track.footer.toptobottom position of the track child footers
     * @param options.track.footer.holdtitle if not HoldTitle.None then title always display atop all visuals in header even when panning/scrolling header
     * @param options.track.footer.border optional track footer properties
     * @param options.track.footer.border.visible visibility of the track footer border
     * @param options.track.footer.border.color color of track footer border
     * @param options.track.footer.border.width line width of track footer border
     * @param options.track.footer.border.background color of border background
     * @param options.indextrack defines properties for index track
     * @param options.indextrack.styles index track line styles and text styles
     * @param options.indextrack.labelformat custom label format function
     * @param options.indextrack.axis axis settings
     * @param options.indextrack.axis.name name of axis
     * @param options.indextrack.axis.locale locale for tickgenerator of axis
     * @param options.highlight define highlight properties
     * @param options.highlight.cssclass define highlight class name, see cssstyle.html tutorial. If cssclass is specified
     * then line and fill styles are ignored. If it is necessary to change fill style or line for highlighted or selected visual then remove
     * 'hover' and cssclass from visual using removeCssClass and add it after changes. See example below.
     * @param options.highlight.linestyle define line style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
     * @param options.highlight.fillstyle define fill style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
     * @param options.highlight.header define header highlight options to override defaults
     * @param options.highlight.header.linestyle define line style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
     * @param options.highlight.header.fillstyle define fill style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
     * @param options.highlight.track define track highlight options to override defaults
     * @param options.highlight.track.linestyle define line style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
     * @param options.highlight.track.fillstyle define fill style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
     * @param options.scroll scroll option
     * @param options.scroll.direction scroll direction when using scroll wheel to scroll
     * @param options.orientation set orientation of the well log widget
     * @param options.direction set track render direction
     * @param options.nodefilter node filter for visual which can be selected
     */
    constructor(options?: object | { range?: Range; horizontalscrollable?: boolean | string; verticalscrollable?: boolean | string | object | { header?: boolean | string; plot?: boolean | string; footer?: boolean | string; } ; indextype?: IndexType | string; indexunit?: AbstractUnit | string; deviceunit?: AbstractUnit | string; timezone?: TimeZone; timezoneoffset?: number; indent?: number; header?: object | { visible?: boolean | string; margin?: number; padding?: number; displaytype?: DisplayType; height?: number; roundedboxradius?: number; border?: object | { visible?: boolean; color?: string; } ; restrictmaxheadersize?: boolean; viewcache?: boolean | Cache; } ; footer?: object | { visible?: boolean | string; margin?: number; padding?: number; displaytype?: DisplayType; height?: number; roundedboxradius?: number; border?: object | { visible?: boolean; color?: string; } ; viewcache?: boolean | Cache; } ; gridlinestyle?: object | LineStyle; viewcache?: boolean | Cache; border?: object | { visible?: boolean; color?: string; } ; annotations?: object | { west?: Node[]; east?: Node[]; south?: Node[]; north?: Node[]; } ; annotationssizes?: object | { west?: number; east?: number; south?: number; north?: number; } ; marker?: object | { datetimeformat?: string; indexvisible?: boolean; indexformatter?: Format | Function; labelvisible?: boolean; valueformatter?: Format | Function; enabledinterpolatedvalues?: boolean; fillstyle?: FillStyle | object | string; linestyle?: LineStyle | object | string; } ; tools?: object | { crosshair?: any; cursortracking?: object | { crosshair?: any; tooltip?: any; } ; tracksplitter?: any; } ; collapsed?: object | { intervals?: object[]; marker?: object | { collapsed?: object | { line?: object | { color?: string; width?: number; decoration?: LineDecoration; }  | LineStyle; symbol?: object | { size?: number; painter?: Function | EventDispatcher | string; linestyle?: object | LineStyle | string; fillstyle?: object | FillStyle | string; }  | SymbolShape; } ; uncollapsed?: object | { line?: object | { color?: string; width?: number; decoration?: LineDecoration; }  | LineStyle; symbol?: object | { size?: number; painter?: Function | EventDispatcher | string; linestyle?: object | LineStyle | string; fillstyle?: object | FillStyle | string; }  | SymbolShape; } ; } ; } ; trackcontainer?: object | { border?: object | { visible?: boolean; color?: string; } ; track?: object | { borderstrategy?: BorderStrategy; highlightstrategy?: TrackHighlightStrategy; } ; verticalflip?: boolean; } ; track?: object | { background?: FillStyle | string | object; border?: object | { visible?: boolean; color?: string; } ; header?: object | { visibletracktitle?: boolean; titlefirst?: boolean; firsttolast?: boolean; toptobottom?: boolean; holdtitle?: HoldTitle; border?: object | { visible?: boolean; color?: string; width?: number; background?: string; } ; } ; footer?: object | { visibletracktitle?: boolean; titlefirst?: boolean; firsttolast?: boolean; toptobottom?: boolean; holdtitle?: HoldTitle; border?: object | { visible?: boolean; color?: string; width?: number; background?: string; } ; } ; } ; indextrack?: object | { styles?: object; labelformat?: object; axis?: object | { name?: string; locale?: string; } ; } ; highlight?: object | { cssclass?: string; linestyle?: string | object | LineStyle; fillstyle?: string | object | FillStyle; header?: object | { linestyle?: string | object | LineStyle; fillstyle?: string | object | FillStyle; } ; track?: object | { linestyle?: string | object | LineStyle; fillstyle?: string | object | FillStyle; } ; } ; scroll?: object | { direction?: ScrollDirection | string; } ; orientation?: Orientation; direction?: TrackRenderDirection; nodefilter?: Function; } );
    /**
     * Gets annotation at specified location
     * @param location Enum of annotation locations used to specify direction to insert
     */
    getAnnotation(location: AnnotationLocation): Group | null;
    /**
     * Returns some widget options
     */
    getOptions(): {indextype: string; indexunit: string; deviceunit: string; orientation: Orientation; direction: TrackRenderDirection; indent: number; header: {visible: boolean; height: number}; footer: {visible: boolean; height: number}; highlight: {cssclass: string; linestyle: LineStyle | null; fillstyle: FillStyle | null; header: object | null; track: object | null}; scroll: {direction: ScrollDirection | string}} | any;
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
     * Sets header scrollbar visibility flag
     * @param value visibility option
     */
    setHeaderScrollVisible(value: boolean): this;
    /**
     * Gets visibility flag for the header scroll bar
     */
    getHeaderScrollVisible(): boolean;
    /**
     * Sets footer scrollbar visibility flag
     * @param value visibility flag
     */
    setFooterScrollVisible(value: boolean): this;
    /**
     * Gets visibility flag for the footer header scroll bar
     */
    getFooterScrollVisible(): boolean;
    /**
     * Sets some widget options
     * @example
     * ```javascript
     * //call  setOptions on widget after construction and change the default header size(84) as follows.
     * widgets.setOptions({
     *    'header' : {
     *        'height': 184
     *    }
     * });
     * ```
     * @param options addition options
     * @param options.indent indent between tracks
     * @param options.collapsed collapsed intervals settings
     * @param options.collapsed.intervals collapsed intervals
     * @param options.collapsed.marker collapsed marker styles
     * @param options.collapsed.marker.collapsed marker styles for collapsed mode
     * @param options.collapsed.marker.collapsed.line marker line style
     * @param options.collapsed.marker.collapsed.line.color marker line color
     * @param options.collapsed.marker.collapsed.line.width marker line width
     * @param options.collapsed.marker.collapsed.line.decoration marker line decoration style
     * @param options.collapsed.marker.uncollapsed marker styles for uncollapsed mode
     * @param options.collapsed.marker.uncollapsed.line marker line style
     * @param options.collapsed.marker.uncollapsed.line.color marker line color
     * @param options.collapsed.marker.uncollapsed.line.width marker line width
     * @param options.collapsed.marker.uncollapsed.line.decoration marker line decoration style
     * @param options.header header options
     * @param options.header.visible visibility of the headers
     * @param options.header.restrictmaxheadersize forbid the resizing of header container bigger than accumulutaed size of the track header.
     * @param options.header.height header height in pixels or 'auto' to fit header height
     * @param options.footer footer options
     * @param options.footer.visible visibility of the footer
     * @param options.footer.height footer height in pixels or 'auto' to fit footer height
     * @param options.highlight define highlight properties
     * @param options.highlight.strategy define highlight strategy
     * @param options.highlight.cssclass define highlight class name, see cssstyle.html tutorial
     * @param options.highlight.linestyle define line style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
     * @param options.highlight.fillstyle define fill style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
     * @param options.highlight.header define header highlight options to override defaults
     * @param options.highlight.header.linestyle define line style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
     * @param options.highlight.header.fillstyle define fill style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
     * @param options.highlight.track define track highlight options to override defaults
     * @param options.highlight.track.linestyle define line style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
     * @param options.highlight.track.fillstyle define fill style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
     * @param options.scroll scroll option
     * @param options.scroll.direction scroll direction when using scroll wheel to scroll
     * @param options.track defines properties for track
     * @param options.track.header optional track header properties
     * @param options.track.header.visibletracktitle visibility of track title
     * @param options.track.header.titlefirst order of the track title header
     * @param options.track.header.firsttolast order of the track child headers
     * @param options.track.header.toptobottom position of the track child headers
     * @param options.track.header.roundedboxradius radius of the rounded box
     * @param options.track.header.holdtitle if not HoldTitle.None then title always display atop all visuals in header even when panning/scrolling header
     * @param options.track.header.border optional track header properties
     * @param options.track.header.border.visible visibility of the track header border
     * @param options.track.header.border.color color of track header border
     * @param options.track.header.border.width line width of track header border
     * @param options.track.header.border.background color of border background
     * @param options.track.footer optional track footer properties
     * @param options.track.footer.visibletracktitle visibility of track title
     * @param options.track.footer.titlefirst order of the track title footer
     * @param options.track.footer.firsttolast order of the track child footers
     * @param options.track.footer.toptobottom position of the track child footers
     * @param options.track.footer.roundedboxradius radius of the rounded box
     * @param options.track.footer.holdtitle if not HoldTitle.None then title always display atop all visuals in header even when panning/scrolling header
     * @param options.track.footer.border optional track footer properties
     * @param options.track.footer.border.visible visibility of the track footer border
     * @param options.track.footer.border.color color of track footer border
     * @param options.track.footer.border.width line width of track footer border
     * @param options.track.footer.border.background color of border background
     */
    setOptions(options?: object | { indent?: number; collapsed?: object | { intervals?: object[]; marker?: object | { collapsed?: object | { line?: object | { color?: string; width?: number; decoration?: LineDecoration; }  | LineStyle; } ; uncollapsed?: object | { line?: object | { color?: string; width?: number; decoration?: LineDecoration; }  | LineStyle; } ; } ; } ; header?: object | { visible?: boolean; restrictmaxheadersize?: boolean; height?: number | string; } ; footer?: object | { visible?: boolean; height?: number | string; } ; highlight?: object | { strategy?: TrackHighlightStrategy; cssclass?: string; linestyle?: string | object | LineStyle; fillstyle?: string | object | FillStyle; header?: object | { linestyle?: string | object | LineStyle; fillstyle?: string | object | FillStyle; } ; track?: object | { linestyle?: string | object | LineStyle; fillstyle?: string | object | FillStyle; } ; } ; scroll?: object | { direction?: ScrollDirection | string; } ; track?: object | { header?: object | { visibletracktitle?: boolean; titlefirst?: boolean; firsttolast?: boolean; toptobottom?: boolean; roundedboxradius?: number; holdtitle?: HoldTitle; border?: object | { visible?: boolean; color?: string; width?: number; background?: string; } ; } ; footer?: object | { visibletracktitle?: boolean; titlefirst?: boolean; firsttolast?: boolean; toptobottom?: boolean; roundedboxradius?: number; holdtitle?: HoldTitle; border?: object | { visible?: boolean; color?: string; width?: number; background?: string; } ; } ; } ; } ): this;
    /**
     * Attach or detach header and footer
     * @param enable enable or disable attached headers
     */
    setAttachedHeaders(enable: boolean): this;
    /**
     * Return true if headers and footers are attached to track
     */
    isAttachedHeaders(): boolean;
    /**
     * Return Depth Marker settings
     */
    getDepthMarkers(): {depth: {value: number; linestyle: LineStyle}; depths: {values: number[]; linestyle: LineStyle; fillstyle: FillStyle}} | object;
    /**
     * Set depth markers
     * @param depths depths marker value or options, null to hide all markers
     * @param depths.depth single depth marker options
     * @param depths.depth.value single depth marker value
     * @param depths.depth.linestyle single depth marker line style
     * @param depths.depths depth marker set options
     * @param depths.depths.value depth marker set values
     * @param depths.depths.linestyle depth marker set line style
     * @param depths.depths.filltyle depth marker set fill style
     * @param lineStyle line style
     * @param fillStyle fill style, applicable only to marker set
     */
    setDepthMarkers(depths?: number[] | number | object | { depth?: object | { value?: number; linestyle?: LineStyle | string | object; } ; depths?: object | { value?: number[]; linestyle?: LineStyle | string | object; filltyle?: FillStyle | string | object; } ; } , lineStyle?: LineStyle | string | object, fillStyle?: FillStyle | string | object): this;
    /**
     * Returns manipulator overlay to draw temporary shapes on top of the track container
     */
    getTrackManipulatorLayer(): Layer;
    /**
     * Function call in the constructor to initialize tools in the widget
     * @param options tools options
     */
    protected initializeTools(options?: object): this;
    /**
     * Set annotation sizes
     * @param annotationSizes annotation sizes
     * @param annotationSizes.west a size of west annotation
     * @param annotationSizes.east a size of east annotation
     * @param annotationSizes.south a size of south annotation (if size is null it will be equal to footer height if it is visible)
     * @param annotationSizes.north a size of north annotation (if size is null it will be equal to header height if it is visible)
     */
    setAnnotationSize(annotationSizes: object | { west?: number; east?: number; south?: number; north?: number; } ): this;
    /**
     * Raising an event 'visibleDepthLimitsChanged'
     * eventName : (geotoolkit.welllog.widgets.Events.VisibleDepthLimitsChanged)
     * @deprecated since 2020.1 (3.1)
     * @param oldLimits old visible limits
     * @param newLimits visible limits
     */
    onVisibleDepthLimitsChanged(oldLimits: Range, newLimits: Range): this;
    /**
     * Sets the axis header type
     * @param headerType The axis header type enum.
     */
    setAxisHeaderType(headerType: HeaderType): this;
    /**
     * Highlights header for the specified visual (if header exists)
     * @param visual a reference visual
     * @param highlight boolean value that indicating whether the header must be highlighted or de-highlighted
     */
    protected highlightVisualHeader(visual: LogTrack | LogAbstractVisual, highlight: boolean): void;
    /**
     * Highlights a visual or track. Called whenever a visual is selected to highlight it. <br>
     * If user selects a curve and the track, the curve,track and header are highlighted. Programmatically deselecting a track doesn't automatically deselect curves.<br>
     * Deselect all selected tracks and visuals using the example shown below.
     * @example
     * ```javascript
     * const selector = widget.getToolByName('pick');
     * const currentSelection = selector.getSelection();
     * currentSelection.forEach((visual) => {
     *       widget.highlightVisual(visual, false);
     *   });
     * ```
     * @param visual The visual to highlight
     * @param highlight the status of the highlight
     */
    highlightVisual(visual: LogTrack | LogAbstractVisual, highlight: boolean): this;
    /**
     * return selected track collection
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
     * Return a depth range, which is visible now
     */
    getVisibleDepthLimits(): Range;
    /**
     * Sets visible depth limits
     * @param fromIndex fromindex limit
     * @param toIndex toindex limit
     */
    setVisibleDepthLimits(fromIndex: number | Range, toIndex?: number): this;
    /**
     * Add a track
     * @example
     * ```javascript
     * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
     * widget.addTrack(TrackType.LinearTrack);
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
     * @param track track to insert
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
     * @param trackDirection deprecated (since 2020 (3.0)). use .insertTrack(). The location of the track (first, last, etc)
     * @param trackWidth deprecated (since 2020 (3.0)). use first parameter. width of the track in pixels
     */
    addTrack(track: object | { type?: TrackType; name?: string; width?: number; gridlinestyle?: any; background?: object | string | FillStyle; border?: object | { visible?: boolean; color?: object | string | LineStyle; } ; indextrack?: object | { style?: any; labelformat?: any; } ; logtrack?: object | { decadecount?: number; reverse?: boolean; } ; }  | TrackType | LogTrack | LogTrack[], trackDirection?: TrackDirection, trackWidth?: number): LogTrack;
    /**
     * Insert track to the container at specified index
     * @param index index of the track
     * @param track track to insert
     * @param track.name track name
     * @param track.type track type to insert
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
     * @param trackWidth deprecated (since 2020 (3.0)). use second parameter. track width
     */
    insertTrack(index: number | TrackType | LogTrack, track: TrackType | LogTrack | number | object | { name?: string; type?: TrackType; width?: number; gridlinestyle?: object; background?: object | string | FillStyle; border?: object | { visible?: boolean; color?: object | string | LineStyle; } ; indextrack?: object | { style?: object; labelformat?: object; } ; logtrack?: object | { decadecount?: number; reverse?: boolean; } ; } , trackWidth?: number): LogTrack;
    /**
     * Get track render direction
     */
    getTrackRenderDirection(): TrackRenderDirection;
    /**
     * Set track render direction
     * @param direction set track render direction
     */
    setTrackRenderDirection(direction: TrackRenderDirection): this;
    /**
     * Remove the track with headers and footers
     * @param track track to remove
     */
    removeTrack(track: LogTrack): this;
    /**
     * Returns track options
     * @param track track to get options
     */
    getTrackOptions(track: LogTrack): {name: string; type: TrackType | number; autolabelrotation: boolean; index: {major: {visible: boolean; style: any}; minor: {visible: boolean; style: any}}; value: {logstart: number; logstop: number; logscale: number; logdecades: number; major: {increment: number; visible: boolean; style: any}; minor: {increment: number; visible: boolean; style: any}}; block: {visible: boolean; position: Position}; axis: {name: string; locale: string; timezone: number; timezoneoffset: number}} | object;
    /**
     * Sets track options
     * @example
     * ```javascript
     * //The code to configure the gridlines in a log track, specify logdecades and generate multiple logticks
     * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
     * widget.setTrackOptions(track, {
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
     * Updates layout(s)
     * @param targets list of nodes to update layout
     * @param updateScrollBarState update scroll bar flag
     */
    updateLayout(targets?: Node[], updateScrollBarState?: boolean): this;
    /**
     * update Scroll Positions using visible limits and model limits.
     * @param updateScrollBarState update Scroll Positions using visible limits and model limits or not
     * @param enableAnimation show animation
     */
    updateScrollPositions(updateScrollBarState?: boolean, enableAnimation?: boolean): this;
    /**
     * @param event type of event
     * @param source source who called the event
     * @param args event arguments
     */
    notify(event: string, source: Node, args: object): this;
    /**
     * Update header
     */
    updateHeader(): void;
    /**
     * Update footer
     */
    updateFooter(): void;
    /**
     * Returns header container. Note that container's bounds are not necessary match with
     * its visible limits as it can reside in other container. To get/set device header size, use
     * get/set HeaderHeight() method
     */
    getHeaderContainer(): HeaderContainer;
    /**
     * Returns footer container. Note that container's bounds are not necessary match with
     * its visible limits as it can reside in other container. To get/set device footer size, use
     * get/set FooterHeight() method
     */
    getFooterContainer(): HeaderContainer;
    /**
     */
    getTrackContainer(): LogTrackContainer;
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
     * Returns track at specified position in plot coordinate
     * @param x x coordinate position
     * @param y y coordinate position
     */
    getTrackAtPosition(x: number | Point, y?: number | null): LogTrack | null;
    /**
     * Return index of track
     * @param track to get index
     */
    getTrackIndex(track: LogTrack): number;
    /**
     * Send event 'updating' to update data. The event argument's
     * includes type, source, {'start,'end'}, where start and end is visible range
     * eventName : (geotoolkit.welllog.widgets.Events.DataUpdating)
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
    getData(): DataSource | AbstractDataTable;
    /**
     * Return the data binding
     */
    getDataBinding(): DataBinding | DataBindingRegistry;
    /**
     * Sets the data binding
     * @param binding data binding
     * @param silent silent mode to forbid
     */
    setDataBinding(binding: DataBinding | DataBindingRegistry, silent?: boolean): this;
    /**
     * Sets index unit
     * @param unit index unit
     */
    setIndexUnit(unit: AbstractUnit | string): this;
    /**
     * Gets index unit
     */
    getIndexUnit(): AbstractUnit;
    /**
     * Sets device unit
     * @param unit device unit
     */
    setDeviceUnit(unit: AbstractUnit | string): this;
    /**
     * Gets device unit
     */
    getDeviceUnit(): AbstractUnit;
    /**
     * Gets index type
     */
    getIndexType(): string;
    /**
     * Sets index type, user can provide index unit, otherwise specify unit with setIndexUnit method
     * @param type index type
     * @param unit index unit
     */
    setIndexType(type: IndexType | string, unit?: AbstractUnit | string): this;
    /**
     * Sets the same depth limits for all tracks
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
     * Returns depth range.
     * @example
     * ```javascript
     * // In order to get difference between depths in px, you can get depth scale (or it can be time scale) from widget. Specify your depth unit and device unit 'px'. Then divide
     * // your depth range by scale and you get depth distance in pixels. See the following code:
     * const scale = widget.getDepthScale('m', 'px'); // meter to pixel
     * const size = widget.getDepthLimits().getSize() / scale;
     * ```
     */
    getDepthLimits(): Range;
    /**
     * Sets a depth scale factor.
     * @example
     * ```javascript
     * //  To set depth scale range as a ratio, you can use units as follows
     * import {UnitFactory} from '@int/geotoolkit/util/UnitFactory';
     * const unitFactory = UnitFactory.getInstance();
     * widget.setDepthScale(30, unitFactory.getUnit('feet'), unitFactory.getUnit('inch')); //1 inch == 30 feet
     * ```
     * @param scale A number of depth units in device unit.
     * @param scaleUnit scale unit of the display. if it is not specified then it takes from track container
     * @param deviceUnit device unit of the display. if it is not specified then it takes from track container
     */
    setDepthScale(scale: number, scaleUnit?: AbstractUnit, deviceUnit?: AbstractUnit): this;
    /**
     * Return scale to device. How many scale units in one device unit.
     * @example
     * ```javascript
     * //  to get the current depth scale of welllog widget.
     * import {UnitFactory} from '@int/geotoolkit/util/UnitFactory';
     * const uf = UnitFactory.getInstance();
     * widget.getDepthScale(uf.getUnit('cm'), uf.getUnit('cm'));
     * ```
     * @param scaleUnit scale unit of the display. if it is not specified then it takes from track container
     * @param deviceUnit device unit of the display. if it is not specified then it takes from track container
     */
    getDepthScale(scaleUnit?: AbstractUnit | string, deviceUnit?: AbstractUnit | string): number;
    /**
     * Change scale
     * @param scaleY scaleY
     * @param scaleX scaleX
     */
    scale(scaleY: number, scaleX?: number): this;
    /**
     * Display the whole scene graph. Resets the zoom level/scale to fit the whole tracks height in the visible area
     */
    fitToHeight(): this;
    /**
     * Resize widget width to fit it in visible area
     */
    fitToWidth(): this;
    /**
     * Scroll to index position
     * @param index index to scroll to
     * @param position position to scroll to
     * @param enableAnimation show animation or not
     */
    scrollToIndex(index: number, position?: ScrollToLocation, enableAnimation?: boolean): this;
    /**
     * Pans view to track with specified alignment and option depth. if detph it not specified the middle fo the track is used
     * @param track track to scroll
     * @param index depth or time of the specified track. if it is null it doesn't move in this direction.
     * @param alignment alignment of specified point according to container
     * visible limits.
     */
    panToTrack(track?: LogTrack | any, index?: number | any, alignment?: string | AnchorType | any): this;
    /**
     * Set track width and layout remains track
     * @example
     * ```javascript
     * // To change tracks' size manually use:
     * widgets.setTrackWidth(width, track);
     * ```
     * @param width track width
     * @param track track to change track width
     */
    setTrackWidth(width: number, track: LogTrack | any[]): this;
    /**
     * Returns the track header if it exists
     * @param track current welllog track
     */
    getTrackHeader(track: LogTrack): any;
    /**
     * Returns the track footer if it exists
     * @param track current welllog track
     */
    getTrackFooter(track: LogTrack): any;
    /**
     * change highlight linestyle
     * @param linestyle highlight linestyle
     */
    setHighlightLineStyle(linestyle: LineStyle): this;
    /**
     * get border highlight line style
     */
    getHighlightLineStyle(): LineStyle | any;
    /**
     * change highlight fillstyle
     * @param fillstyle highlight fillstyle
     */
    setHighlightFillStyle(fillstyle: FillStyle): this;
    /**
     * get track highlight fillstyle
     */
    getHighlightFillStyle(): FillStyle | any;
    /**
     * Calculate a real size of tracks
     */
    getTracksSize(): number;
    /**
     * Sets node filter for selection tool
     * @param nodeFilter filter that allows to filter selected nodes.
     */
    setNodeFilter(nodeFilter: Function): this;
    /**
     * Exports the widget content as a PDF file, user has option to select the scale of track in pdf.
     * @param options option to specify paper parameters and header and footer
     * @param options.header an optional PDF header
     * @param options.footer an optional PDF footer
     * @param options.isheadervisible an optional function to return if header should be printed
     * @param options.isfootervisible an optional function to return if footer should be printed
     * @param options.documentheader an optional document PDF header
     * @param options.documentfooter an optional document PDF footer
     * @param options.output define optional output filename
     * @param options.save flag to save the pdf directly to file or open dialog
     * @param options.printsettings define optional paper and export parameters
     * @param options.printsettings.paperformat define optional paper paper format
     * @param options.printsettings.units define optional margin units
     * @param options.printsettings.top define optional top margin
     * @param options.printsettings.bottom define optional bottom margin
     * @param options.printsettings.left define optional left margin
     * @param options.printsettings.right define optional top margin
     * @param options.printsettings.orientation define optional paper orientation
     * @param options.printsettings.scaling define optional scaling mode. Specify ( 'scaling': geotoolkit.scene.exports.ScalingOptions.FitWidth,) to fit all tracks in your page width.
     * @param options.printsettings.keepaspectratio keep aspect ratio
     * @param options.printsettings.continuous continuous printing
     * @param options.limits export depth or time limits
     * @param options.limits.start start limit by default visible limits
     * @param options.limits.end end limit by default visible limits
     * @param options.scale export scale from model index unit to device unit by default as is
     * @param options.deviceunit define how many depth units in one device unit.
     * @param options.imagescalefactor options to specify the image scale factor, right now 8 is maximum, Math.floor(600 / 72)
     * @param options.imagecompression options to specify the image compression
     * @param options.imagecompression.mode image compression method used to exporting pdf.
     * @param options.imagecompression.quality quality range from 0 to 1 that will express the jpeg image compression quality, available for jpeg mode only.
     * @param options.imagecompression.speed speed referring to the png compression speed, available  for png mode only.
     * @param options.streamcompression enable or disable pdf output compression
     * @param options.embededfonts array of embedded fonts
     * @param options.pdfstream optional user-customized Stream object
     */
    exportToPdf(options?: object | { header?: HeaderComponent; footer?: FooterComponent; isheadervisible?: isVisiblePageElementCallback; isfootervisible?: isVisiblePageElementCallback; documentheader?: HeaderComponent; documentfooter?: FooterComponent; output?: string; save?: boolean; printsettings?: object | { paperformat?: any; units?: string | Unit; top?: number; bottom?: number; left?: number; right?: number; orientation?: string; scaling?: string; keepaspectratio?: boolean; continuous?: boolean; } ; limits?: object | { start?: number; end?: number; } ; scale?: number | null; deviceunit?: string; imagescalefactor?: number; imagecompression?: object | { mode?: ImageCompression; quality?: number; speed?: SpeedCompression; } ; streamcompression?: boolean; embededfonts?: EmbededFont[]; pdfstream?: IWritable; } ): Promise<IWritable>;
    /**
     * Prepares object before exporting and saving state
     */
    beginExport(): this;
    /**
     * Used to restore object's state after exporting
     */
    endExport(): void;
    /**
     * Return export depth limits
     * @deprecated since 2020.1 (3.1)
     */
    getExportDepthLimits(): Range;
    /**
     * Sets export depth limits
     * @deprecated since 2020.1 (3.1) use exporting options instead
     * @param limits export limits
     */
    setExportDepthLimits(limits: Range): this;
    /**
     * Return export depth scale
     * @deprecated since 2020.1 (3.1)
     */
    getExportDepthScale(): number;
    /**
     * Sets export depth scale
     * @deprecated since 2020.1 (3.1) use exporting options instead
     * @param scale depth scale
     */
    setExportDepthScale(scale: number): this;
    /**
     * Returns exportable element
     * @param options export options
     * @param options.documentheader an optional document PDF header
     * @param options.documentfooter an optional document PDF footer
     * @param options.scale depth scale
     * @param options.limits depth limits
     * @param options.limits.start start
     * @param options.limits.end start
     */
    getExportElement(options?: object | { documentheader?: HeaderComponent; documentfooter?: FooterComponent; scale?: number; limits?: object | { start?: number; end?: number; } ; } ): AbstractDocumentElement;
    /**
     * Load template
     * @param template template to be applied to the widget
     * @param registry registry
     */
    loadTemplate(template: string, registry?: Registry): this;
    /**
     * Save template
     * @param registry registry
     * @param options serialization options
     * @param options.filter A function that alters the behavior of the serialization process
     * @param options.replacer A function that alters the behavior of the stringification process
     * @param options.space A String or Number object that's used to insert white space into the output JSON string for readability purposes.
     */
    saveTemplate(registry?: Registry, options?: object | { filter?: Function; replacer?: Function; space?: string | number; } ): string;
    /**
     * set widget orientation and apply rotation if needed.
     * @param mode widget orientation mode
     */
    setOrientation(mode: Orientation): this;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bound of the node in the parent coordinates
     */
    setBounds(bounds: Rect | object): this;
    /**
     * Sets the model limits of the node
     * @param modelLimits The model limits of the node
     */
    setModelLimits(modelLimits: Rect | object): this;
    /**
     * Returns widget orientation mode
     */
    getOrientation(): Orientation;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.range min and max depth range.
     * @param properties.horizontalscrollable defines if plot displays horizontal scrollbars, true | false | 'auto' | 'floating'
     * @param properties.verticalscrollable defines if plot displays vertical scrollbars, true | false | 'auto' | 'floating' | object containing specific settings for all three containers
     * @param properties.verticalscrollable.header defines if header displays vertical scrollbars, true | false | "auto" | "floating"
     * @param properties.verticalscrollable.plot defines if plot displays vertical scrollbars, true | false | "auto" | "floating"
     * @param properties.verticalscrollable.footer defines if footer displays vertical scrollbars, true | false | "auto" | "floating"
     * @param properties.indextype primary index types
     * @param properties.indexunit primary index unit
     * @param properties.deviceunit primary device unit
     * @param properties.timezone time zone for time axis
     * @param properties.timezoneoffset time zone offset for date time axis
     * @param properties.indent indent
     * @param properties.header header options
     * @param properties.header.visible visibility of the headers, if it is 'none' then header is not created
     * @param properties.header.margin margin margin between header components
     * @param properties.header.padding padding padding inside header components
     * @param properties.header.displaytype display type
     * @param properties.header.height header height
     * @param properties.header.roundedboxradius radius of the rounded box
     * @param properties.header.border defines properties for header outer border
     * @param properties.header.border.visible visibility of the border
     * @param properties.header.border.color color of border border
     * @param properties.header.restrictmaxheadersize forbid the resizing of header container bigger than accumulutaed size of the track header.
     * @param properties.header.viewcache enable tiled cache. It increase rendering performance for historical data
     * @param properties.footer footer options
     * @param properties.footer.visible visibility of the footer, if it is 'none' then footer is not created
     * @param properties.footer.margin margin margin between footer components
     * @param properties.footer.padding padding padding inside footer components
     * @param properties.footer.displaytype display type
     * @param properties.footer.height footer height
     * @param properties.footer.roundedboxradius radius of the rounded box
     * @param properties.footer.border defines properties for footer outer border
     * @param properties.footer.border.visible visibility of the border
     * @param properties.footer.border.color color of border border
     * @param properties.footer.viewcache enable tiled cache. It increase rendering performance for historical data
     * @param properties.gridlinestyle grid line style
     * @param properties.viewcache enable tiled cache. It increase rendering performance for historical data
     * @param properties.border defines properties for widget outer border
     * @param properties.border.visible visibility of the border
     * @param properties.border.color color of border border
     * @param properties.collapsed collapsed intervals settings
     * @param properties.collapsed.intervals collapsed intervals
     * @param properties.collapsed.marker collapsed marker styles
     * @param properties.collapsed.marker.collapsed marker styles for collapsed mode
     * @param properties.collapsed.marker.collapsed.line marker line style
     * @param properties.collapsed.marker.collapsed.line.color marker line color
     * @param properties.collapsed.marker.collapsed.line.width marker line width
     * @param properties.collapsed.marker.collapsed.line.decoration marker line decoration style
     * @param properties.collapsed.marker.collapsed.symbol marker symbol shape
     * @param properties.collapsed.marker.collapsed.symbol.size marker symbol shape size
     * @param properties.collapsed.marker.collapsed.symbol.painter marker symbol shape painter
     * @param properties.collapsed.marker.collapsed.symbol.linestyle marker symbol shape linestyle
     * @param properties.collapsed.marker.collapsed.symbol.fillstyle marker symbol shape fillstyle
     * @param properties.collapsed.marker.uncollapsed marker styles for uncollapsed mode
     * @param properties.collapsed.marker.uncollapsed.line marker line style
     * @param properties.collapsed.marker.uncollapsed.line.color marker line color
     * @param properties.collapsed.marker.uncollapsed.line.width marker line width
     * @param properties.collapsed.marker.uncollapsed.line.decoration marker line decoration style
     * @param properties.collapsed.marker.uncollapsed.symbol marker symbol shape
     * @param properties.collapsed.marker.uncollapsed.symbol.size marker symbol shape size
     * @param properties.collapsed.marker.uncollapsed.symbol.painter marker symbol shape painter
     * @param properties.collapsed.marker.uncollapsed.symbol.linestyle marker symbol shape linestyle
     * @param properties.collapsed.marker.uncollapsed.symbol.fillstyle marker symbol shape fillstyle
     * @param properties.annotationssizes Properties to hold (width or height) of the annotations
     * @param properties.annotationssizes.west a size of west annotation
     * @param properties.annotationssizes.east a size of east annotation
     * @param properties.annotationssizes.south a size of south annotation
     * @param properties.annotationssizes.north a size of north annotation
     * @param properties.marker marker options
     * @param properties.marker.datetimeformat date time format in case if track container scale unit belongs to 'time'
     * @param properties.marker.indexvisible visibility of the marker index value label
     * @param properties.marker.indexformatter depth index format that accept number
     * @param properties.marker.labelvisible visibility of the marker shape label
     * @param properties.marker.valueformatter value format that accept object with properties { 'curve', 'depth', 'value' }
     * @param properties.marker.enabledinterpolatedvalues display symbol for interpolated values
     * @param properties.marker.fillstyle marker shape fill style
     * @param properties.marker.linestyle marker shape line style
     * @param properties.tools tools options
     * @param properties.tools.crosshair JSON which defines crosshair cursor.
     * See {@link @int/geotoolkit/controls/tools/CrossHair.CrossHair#setProperties} for details
     * @param properties.tools.cursortracking cursor tracking options
     * @param properties.tools.cursortracking.crosshair JSON which defines crosshair cursor.
     * See {@link @int/geotoolkit/controls/tools/CrossHair.CrossHair#setProperties} for details
     * @param properties.tools.cursortracking.tooltip JSON which defines tooltip tool.
     * See {@link @int/geotoolkit/controls/tools/ToolTipTool.ToolTipTool#constructor} for details
     * @param properties.tools.tracksplitter tracks splitter options
     * See {@link @int/geotoolkit/controls/tools/AbstractTool.AbstractTool#setProperties} for details
     * @param properties.trackcontainer defines properties for track container
     * @param properties.trackcontainer.border defines properties for track container outer border
     * @param properties.trackcontainer.border.visible visibility of the border
     * @param properties.trackcontainer.border.color color of border border
     * @param properties.trackcontainer.track options of track inside the track container
     * @param properties.trackcontainer.track.borderstrategy apply a border strategy to the LogTrack class
     * @param properties.trackcontainer.track.highlightstrategy apply a highlight strategy to the LogTrack class
     * @param properties.trackcontainer.verticalflip specify direction of the vertical axis. By default it goes from top to bottom. if it is true
     * then an axis goes from bottom to top.
     * @param properties.track defines properties for track
     * @param properties.track.background defines properties for track background
     * @param properties.track.border defines properties for track border
     * @param properties.track.border.visible visibility of the border
     * @param properties.track.border.color color of border border
     * @param properties.track.header optional track header properties
     * @param properties.track.header.visibletracktitle visibility of track title
     * @param properties.track.header.titlefirst order of the track title header
     * @param properties.track.header.firsttolast order of the track child headers
     * @param properties.track.header.toptobottom position of the track child headers
     * @param properties.track.header.holdtitle if not HoldTitle.None then title always display atop all visuals in header even when panning/scrolling header
     * @param properties.track.header.border optional track header properties
     * @param properties.track.header.border.visible visibility of the track header border
     * @param properties.track.header.border.color color of track header border
     * @param properties.track.header.border.width line width of track header border
     * @param properties.track.header.border.background color of border background
     * @param properties.track.footer optional track footer properties
     * @param properties.track.footer.visibletracktitle visibility of track title
     * @param properties.track.footer.titlefirst order of the track title footer
     * @param properties.track.footer.firsttolast order of the track child footers
     * @param properties.track.footer.toptobottom position of the track child footers
     * @param properties.track.footer.holdtitle if not HoldTitle.None then title always display atop all visuals in header even when panning/scrolling header
     * @param properties.track.footer.border optional track footer properties
     * @param properties.track.footer.border.visible visibility of the track footer border
     * @param properties.track.footer.border.color color of track footer border
     * @param properties.track.footer.border.width line width of track footer border
     * @param properties.track.footer.border.background color of border background
     * @param properties.indextrack defines properties for index track
     * @param properties.indextrack.styles index track line styles and text styles
     * @param properties.indextrack.labelformat custom label format function
     * @param properties.indextrack.axis axis settings
     * @param properties.indextrack.axis.name name of axis
     * @param properties.indextrack.axis.locale locale for tickgenerator of axis
     * @param properties.highlight define highlight properties
     * @param properties.highlight.strategy define highlight strategy
     * @param properties.highlight.cssclass define highlight class name, see cssstyle.html tutorial. If cssclass is specified
     * then line and fill styles are ignored. If it is necessary to change fill style or line for highlighted or selected visual then remove
     * 'hover' and cssclass from visual using removeCssClass and add it after changes. See example below.
     * @param properties.highlight.linestyle define line style attribute for visual highlight
     * @param properties.highlight.fillstyle define fill style attribute for visual highlight
     * @param properties.highlight.header define header highlight options to override defaults
     * @param properties.highlight.header.linestyle define line style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
     * @param properties.highlight.header.fillstyle define fill style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
     * @param properties.highlight.track define track highlight options to override defaults
     * @param properties.highlight.track.linestyle define line style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
     * @param properties.highlight.track.fillstyle define fill style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
     * @param properties.scroll scroll option
     * @param properties.scroll.direction scroll direction when using scroll wheel to scroll
     * @param properties.orientation set orientation of the well log widget
     * @param properties.direction set track render direction
     * @param properties.nodefilter node filter for visual which can be selected
     */
    setProperties(properties?: object | { range?: Range; horizontalscrollable?: boolean | string; verticalscrollable?: boolean | string | object | { header?: boolean | string; plot?: boolean | string; footer?: boolean | string; } ; indextype?: AbstractUnit | string; indexunit?: AbstractUnit | string; deviceunit?: AbstractUnit | string; timezone?: TimeZone; timezoneoffset?: number; indent?: number; header?: object | { visible?: boolean | string; margin?: number; padding?: number; displaytype?: DisplayType; height?: number; roundedboxradius?: number; border?: object | { visible?: boolean; color?: string; } ; restrictmaxheadersize?: boolean; viewcache?: boolean | Cache; } ; footer?: object | { visible?: boolean | string; margin?: number; padding?: number; displaytype?: DisplayType; height?: number; roundedboxradius?: number; border?: object | { visible?: boolean; color?: string; } ; viewcache?: boolean | Cache; } ; gridlinestyle?: object | LineStyle; viewcache?: boolean | Cache; border?: object | { visible?: boolean; color?: string; } ; collapsed?: object | { intervals?: object[]; marker?: object | { collapsed?: object | { line?: object | { color?: string; width?: number; decoration?: LineDecoration; }  | LineStyle; symbol?: object | { size?: number; painter?: Function | EventDispatcher | string; linestyle?: object | LineStyle | string; fillstyle?: object | FillStyle | string; }  | SymbolShape; } ; uncollapsed?: object | { line?: object | { color?: string; width?: number; decoration?: LineDecoration; }  | LineStyle; symbol?: object | { size?: number; painter?: Function | EventDispatcher | string; linestyle?: object | LineStyle | string; fillstyle?: object | FillStyle | string; }  | SymbolShape; } ; } ; } ; annotationssizes?: object | { west?: number; east?: number; south?: number; north?: number; } ; marker?: object | { datetimeformat?: string; indexvisible?: boolean; indexformatter?: Format | Function; labelvisible?: boolean; valueformatter?: Format | Function; enabledinterpolatedvalues?: boolean; fillstyle?: FillStyle | object | string; linestyle?: LineStyle | object | string; } ; tools?: object | { crosshair?: any; cursortracking?: object | { crosshair?: any; tooltip?: any; } ; tracksplitter?: any; } ; trackcontainer?: object | { border?: object | { visible?: boolean; color?: string; } ; track?: object | { borderstrategy?: BorderStrategy; highlightstrategy?: TrackHighlightStrategy; } ; verticalflip?: boolean; } ; track?: object | { background?: FillStyle | string | object; border?: object | { visible?: boolean; color?: string; } ; header?: object | { visibletracktitle?: boolean; titlefirst?: boolean; firsttolast?: boolean; toptobottom?: boolean; holdtitle?: HoldTitle; border?: object | { visible?: boolean; color?: string; width?: number; background?: string; } ; } ; footer?: object | { visibletracktitle?: boolean; titlefirst?: boolean; firsttolast?: boolean; toptobottom?: boolean; holdtitle?: HoldTitle; border?: object | { visible?: boolean; color?: string; width?: number; background?: string; } ; } ; } ; indextrack?: object | { styles?: object; labelformat?: object; axis?: object | { name?: string; locale?: string; } ; } ; highlight?: object | { strategy?: TrackHighlightStrategy; cssclass?: string; linestyle?: LineStyle; fillstyle?: FillStyle; header?: object | { linestyle?: string | object | LineStyle; fillstyle?: string | object | FillStyle; } ; track?: object | { linestyle?: string | object | LineStyle; fillstyle?: string | object | FillStyle; } ; } ; scroll?: object | { direction?: ScrollDirection | string; } ; orientation?: Orientation; direction?: TrackRenderDirection; nodefilter?: Function; } ): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {range: Range; horizontalscrollable: boolean | string; verticalscrollable: {header: boolean | string; plot: boolean | string; footer: boolean | string}; indextype: AbstractUnit | string; indexunit: AbstractUnit | string; deviceunit: AbstractUnit | string; timezone: TimeZone; timezoneoffset: number; indent: number; header: {visible: boolean | string; margin: number; padding: number; displaytype: DisplayType; height: number; roundedboxradius: number; border: {visible: boolean; color: string}; restrictmaxheadersize: boolean; viewcache: boolean}; footer: {visible: boolean | string; margin: number; padding: number; displaytype: DisplayType; height: number; roundedboxradius: number; border: {visible: boolean; color: string}; viewcache: boolean}; gridlinestyle: LineStyle; viewcache: boolean; border: {visible: boolean; color: string}; collapsed: {intervals: object[]; marker: {collapsed: {line: {color: string; width: number; decoration: LineDecoration}; symbol: {size: number; painter: Function | EventDispatcher | string; linestyle: object | LineStyle | string; fillstyle: object | FillStyle | string}}; uncollapsed: {line: {color: string; width: number; decoration: LineDecoration}; symbol: {size: number; painter: Function | EventDispatcher | string; linestyle: object | LineStyle | string; fillstyle: object | FillStyle | string}}}}; annotations: {west: Node[]; east: Node[]; south: Node[]; north: Node[]}; annotationssizes: {west: number; east: number; south: number; north: number}; marker: {datetimeformat: string; indexvisible: boolean; indexformatter: Format | Function; labelvisible: Format | Function; enabledinterpolatedvalues: boolean; fillstyle: FillStyle; linestyle: LineStyle | object | string}; tools: {crosshair: any; cursortracking: {crosshair: any; tooltip: any}; tracksplitter: any}; trackcontainer: {border: {visible: boolean; color: string}; track: {borderstrategy: BorderStrategy; highlightstrategy: TrackHighlightStrategy}; verticalflip: boolean}; track: {background: FillStyle; border: {visible: boolean; color: string}; header: {visibletracktitle: boolean; titlefirst: boolean; firsttolast: boolean; toptobottom: boolean; holdtitle: HoldTitle; border: {visible: boolean; color: string; width: number; background: string}}; footer: {visibletracktitle: boolean; titlefirst: boolean; firsttolast: boolean; toptobottom: boolean; holdtitle: HoldTitle; border: {visible: boolean; color: string; width: number; background: string}}}; indextrack: {styles: object; labelformat: object; axis: {name: string; locale: string}}; highlight: {strategy: TrackHighlightStrategy; cssclass: string; linestyle: LineStyle; fillstyle: FillStyle; header: {linestyle: LineStyle; fillstyle: FillStyle}; track: {linestyle: LineStyle; fillstyle: FillStyle}}; scroll: {direction: ScrollDirection | string}; orientation: Orientation; direction: TrackRenderDirection; nodefilter: Function} | any;
    /**
     * Synchronizes axis or group with a track container model
     * @param object object to connect to the central component
     * @param orientation model orientation
     */
    connect(object: Group | Axis, orientation?: Orientation): this;
    /**
     * Sets track factory
     * @param trackFactory track factory
     */
    setTrackFactory(trackFactory: TrackFactory): this;
    /**
     * Returns track factory
     */
    getTrackFactory(): TrackFactory;
}
