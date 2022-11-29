import {LogAbstractVisual} from './LogAbstractVisual';
import {TextStyle} from '../attributes/TextStyle';
import {FillStyle} from '../attributes/FillStyle';
import {AnchorType} from '../util/AnchorType';
import {Orientation} from '../util/Orientation';
import {ILineDecoration} from '../attributes/ILineDecoration';
import {RgbaColor} from '../util/RgbaColor';
import {Pattern} from '../attributes/Pattern';
import {RenderingContext} from '../renderer/RenderingContext';
import {Rect} from '../util/Rect';
import {LineStyle} from '../attributes/LineStyle';
import {Transformation} from '../util/Transformation';
import {Range} from '../util/Range';

/**
 * A Welllog marker implementation.<br>
 * This shape is a horizontal line meant to be used in a LogTrack to highlight a specific depth.
 * It holds two labels (depth and name) that can be displayed or not.<br>
 * Note that this is not related to the WelllogWidget builtin markers and that this implementation is a <b>per track</b> marker.
 * So it will display a line only in its track. However a marker can be added on the entire Track Container as well.
 * @example
 * ```javascript
 * // This example shows how to make the text in marker left aligned.
 * import {IWellTrack} from '@int/geotoolkit/welllog/multiwell/IWellTrack';
 * import {isInstanceOf} from '@int/geotoolkit/base';
 * import {LogMarker} from '@int/geotoolkit/welllog/LogMarker';
 * import {LineStyle} from '@int/geotoolkit/attributes/LineStyle';
 * import {TextStyle} from '@int/geotoolkit/attributes/TextStyle';
 * import {AnchorType} from '@int/geotoolkit/util/AnchorType';
 * for (let i = 0; i < multiWellWidget.getTracksCount(); ++i) {
 *  // Use this conditional to check if the track is a well track (as opposed to a correlation track)
 *  if (isInstanceOf(track, IWellTrack)) {
 *      const marker = new LogMarker(2050);
 *      marker.setLineStyle(new LineStyle({'color': 'black'}));
 *      marker.setTextStyle(new TextStyle({
 *          'color': 'black',
 *          'font': '12px sans-serif'
 *      }));
 *      marker.setNameLabel('Marker 1');
 *      marker.setNameLabelPosition(AnchorType.LeftTop); // Left-align name label
 *      marker.setDepthLabel('2050'); // This can be customized with TVD, TVDSS values
 *      marker.setDepthLabelPosition(AnchorType.LeftBottom); // Left-align depth label
 *      track.getMarkerLayer().addChild(marker);
 *  }
 *  }
 *  
 * ```
 * @example
 * ```javascript
 * // Add a marker to Time Index Track by adding a marker to the specific time position. Following code shows how to add a marker when a widget is based on time.
 *  import {WellLogWidget} from '@int/geotoolkit/welllog/widgets/WellLogWidget';
 *  import {TrackType} from '@int/geotoolkit/welllog/TrackType';
 *  const minValue = new Date(2000, 0, 1, 0, 0, 0, 0).getTime();
 *  const maxValue = new Date(2000, 5, 1, 0, 0, 0, 0).getTime();
 *    var widget = new WellLogWidget({
 *     'horizontalscrollable': false,
 *     'verticalscrollable': false,
 *     'trackcontainer': {
 *       'border': {
 *         'visible': false
 *       }
 *     },
 *     'border': {
 *       'visible': false
 *     },
 *     'header': {
 *       'visible': true
 *     }
 *   }).setIndexType('time')
 *    .setIndexUnit('ms')
 *    .setDepthLimits(minValue, maxValue);
 * const marker = new LogMarker(951007515789, 'Marker')
 *    .setLineStyle({
 *           'color': 'red',
 *           'width': 2
 *       })
 *    .setTextStyle({
 *           'font': 'bold 14px Roboto',
 *           'color': 'white'
 *       })
 *    .setNameLabelPosition(AnchorType.LeftTop)
 *    .setFillStyleName('orange')
 *    .setFillNameLabel(true);
 * widget.addTrack(TrackType.IndexTrack).addChild(marker)
 *    .setWidth(70);
 * ```
 */
export class LogMarker extends LogAbstractVisual {
    /**
     * A Welllog marker implementation.<br>
     * This shape is a horizontal line meant to be used in a LogTrack to highlight a specific depth.
     * It holds two labels (depth and name) that can be displayed or not.<br>
     * Note that this is not related to the WelllogWidget builtin markers and that this implementation is a <b>per track</b> marker.
     * So it will display a line only in its track. However a marker can be added on the entire Track Container as well.
     * @param depth depth of the marker OR JSON object representing log marker configuration
     * @param depth.depth depth of marker
     * @param depth.displaynamelabel name label on marker
     * @param depth.displaydepthlabel optional depth label
     * @param depth.textstyle The TextStyle
     * @param depth.fillstyle The Fill Style for name and depth
     * @param depth.fillstylename The Fill Style name
     * @param depth.fillstyledepth The Fill Style depth
     * @param depth.visiblenamelabel display name label or not
     * @param depth.visibledepthlabel display depth label or not
     * @param depth.visiblenameborder display name border or not
     * @param depth.visibledepthborder display depth border or not
     * @param depth.fillnamelabel display fill name label or not
     * @param depth.filldepthlabel display fill depth label or not
     * @param depth.depthlabelposition depth label position
     * @param depth.namelabelposition name label position
     * @param depth.textorientation orientation of text
     * @param depth.verticaltextoffset vertical label offset in device space
     * @param depth.horizontaltextoffset horizontal label offset in device space
     * @param depth.linedecoration line decoration style
     * @param nameLabel name label on the marker
     * @param depthLabel optional label for depth
     * @param horizontalTextOffset horizontal label offset in device space
     * @param verticalTextOffset vertical label offset in device space
     */
    constructor(depth: number | object | { depth?: number; displaynamelabel?: string; displaydepthlabel?: string; textstyle?: TextStyle | string | object; fillstyle?: FillStyle | string | object; fillstylename?: FillStyle | string | object; fillstyledepth?: FillStyle | string | object; visiblenamelabel?: boolean; visibledepthlabel?: boolean; visiblenameborder?: boolean; visibledepthborder?: boolean; fillnamelabel?: boolean; filldepthlabel?: boolean; depthlabelposition?: AnchorType; namelabelposition?: AnchorType; textorientation?: Orientation | any; verticaltextoffset?: number; horizontaltextoffset?: number; linedecoration?: ILineDecoration | string; } , nameLabel: string, depthLabel?: string, horizontalTextOffset?: number, verticalTextOffset?: number);
    /**
     * Sets vertical label offset in device space
     * @param offset offset
     */
    setVerticalTextOffset(offset: number): this;
    /**
     * Sets horizontal label offset in device space
     * @param offset offset
     */
    setHorizontalTextOffset(offset: number): this;
    /**
     * Gets vertical label offset in device space
     */
    getVerticalTextOffset(): number;
    /**
     * Gets horizontal label offset in device space
     */
    getHorizontalTextOffset(): number;
    /**
     * Specify name label visible or not.
     * @param visible name label visible or not.
     */
    setVisibleNameLabel(visible: boolean): this;
    /**
     * Return true if name label is visible. It is visible by default.
     */
    isVisibleNameLabel(): boolean;
    /**
     * Specify depth label visible or not.
     * @param visible specifies if depth label visible or not
     */
    setVisibleDepthLabel(visible: boolean): this;
    /**
     * Return true if depth label is visible. It is visible by default.
     */
    isVisibleDepthLabel(): boolean;
    /**
     * Specify border name visible or not.
     * @param visible border name visible or not.
     */
    setVisibleNameBorder(visible: boolean): this;
    /**
     * Return true if Name label border is visible. It is visible by default.
     */
    isVisibleNameBorder(): boolean;
    /**
     * Specify depth label border visible or not.
     * @param visible depth label border visible or not
     */
    setVisibleDepthBorder(visible: boolean): this;
    /**
     * Return true if depth label border is visible. It is visible by default.
     */
    isVisibleDepthBorder(): boolean;
    /**
     * Specify name label fill style enabled or not.
     * @param enable name label fill style enabled or not.
     */
    setFillNameLabel(enable: boolean): this;
    /**
     * Return true if name label fill style enabled. It is enabled by default.
     */
    isFillNameLabel(): boolean;
    /**
     * Specify depth label fill style enabled or not.
     * @param enable depth label fill style enabled or not
     */
    setFillDepthLabel(enable: boolean): this;
    /**
     * Return true if depth label fill style enabled. It is enabled by default.
     */
    isFillDepthLabel(): boolean;
    /**
     * Specify fill style for both name and depth labels.
     * @param fillStyle fill style for both name and depth labels.
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle | string | object, merge?: boolean): this;
    /**
     * Return fill style of name label
     */
    getFillStyleName(): FillStyle;
    /**
     * Sets fill style of name label
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setFillStyleName(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string, merge?: boolean): this;
    /**
     * Return fill style of depth label
     */
    getFillStyleDepth(): FillStyle;
    /**
     * Sets fill style of depth label
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setFillStyleDepth(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string, merge?: boolean): this;
    /**
     * Return text style
     */
    getTextStyle(): TextStyle;
    /**
     * Sets text style
     * @param textStyle text style
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setTextStyle(textStyle: TextStyle | string | object, merge?: boolean): this;
    /**
     * specify the orientation of text
     * @param orientation fixed orientation of text, null value means orientation determined by widget's rotation
     */
    setTextOrientation(orientation: Orientation | any): this;
    /**
     * return orientation of text
     */
    getTextOrientation(): Orientation | any;
    /**
     * Return LogMarker Line Decoration Style
     */
    getLineDecoration(): ILineDecoration;
    /**
     * Specify LogMarker Line Decoration style
     * @param lineDecoration line decoration style
     */
    setLineDecoration(lineDecoration: ILineDecoration | string): this;
    /**
     * @param localContext context
     * @param nameLabelRect bounds for name label
     * @param depthLabelRect bounds for depth label
     */
    protected drawMarker(localContext: RenderingContext, nameLabelRect: Rect, depthLabelRect: Rect): void;
    /**
     * for internal use only, make text always readable
     * @param context rendering context
     * @param x x position to place text
     * @param y y position to place text
     * @param text text to be displayed
     * @param textStyle text style
     * @param alignment alignment for placement of text
     * @param lineStyle line style
     * @param fillStyle fill style
     */
    drawText(context: RenderingContext, x: number, y: number, text: string, textStyle: TextStyle, alignment: AnchorType, lineStyle: LineStyle, fillStyle: FillStyle): void;
    /**
     * Sets marker
     * @param depth depth to place marker
     * @param displayNameLabel name label
     * @param displayDepthLabel depth label
     */
    setDepthValue(depth: number, displayNameLabel?: string | any, displayDepthLabel?: string | any): this;
    /**
     * Sets name to be displayed
     * @param nameLabel name to be displayed
     */
    setNameLabel(nameLabel: string): this;
    /**
     * Returns name to be displayed
     */
    getNameLabel(): string;
    /**
     * Sets depth value to be displayed
     * @param depthLabel name to be displayed
     */
    setDepthLabel(depthLabel: string): this;
    /**
     * Returns depth label to be displayed
     */
    getDepthLabel(): string;
    /**
     * Set depth
     * @param depth depth to place marker
     */
    setDepth(depth: number): this;
    /**
     * Return depth
     */
    getDepth(): number;
    /**
     * Verifies if object is within given context.
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Return model limits
     * @param tr transformation from marker to device
     */
    getBounds(tr?: Transformation): Rect;
    /**
     * return meaning depth limits
     */
    getMeaningDepthLimits(): Range;
    /**
     * Return model limits
     * @param tr transformation from marker to device
     */
    getModelLimits(tr?: Transformation): Rect | null;
    /**
     * Return name label position as an anchor point
     */
    getNameLabelPosition(): AnchorType;
    /**
     * Set label position
     * @param anchorPoint label position
     */
    setNameLabelPosition(anchorPoint: AnchorType): this;
    /**
     * Return depth label position as an anchor point
     */
    getDepthLabelPosition(): AnchorType;
    /**
     * Set depth label position
     * @param anchorPoint label position
     */
    setDepthLabelPosition(anchorPoint: AnchorType): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {depth: number; displaynamelabel: string; displaydepthlabel: string; textstyle: TextStyle; fillstylename: FillStyle; fillstyledepth: FillStyle; visiblenamelabel: boolean; visibledepthlabel: boolean; visiblenameborder: boolean; visibledepthborder: boolean; fillnamelabel: boolean; filldepthlabel: boolean; depthlabelposition: AnchorType; namelabelposition: AnchorType; textorientation: Orientation | any; verticaltextoffset: number; horizontaltextoffset: number; linedecoration: ILineDecoration} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.depth depth to place marker
     * @param properties.displaynamelabel name label
     * @param properties.displaydepthlabel depth label
     * @param properties.textstyle The TextStyle
     * @param properties.fillstyle The Fill Style for name and depth
     * @param properties.fillstylename The Fill Style name
     * @param properties.fillstyledepth The Fill Style depth
     * @param properties.visiblenamelabel display name label or not
     * @param properties.visibledepthlabel display depth label or not
     * @param properties.visiblenameborder display name border or not
     * @param properties.visibledepthborder display depth border or not
     * @param properties.fillnamelabel display fill name label or not
     * @param properties.filldepthlabel display fill depth label or not
     * @param properties.depthlabelposition depth label position
     * @param properties.namelabelposition name label position
     * @param properties.textorientation orientation of text
     * @param properties.verticaltextoffset vertical text offset
     * @param properties.horizontaltextoffset horizontal text offset
     * @param properties.linedecoration log marker line decoration style
     */
    setProperties(properties: object | { depth?: number; displaynamelabel?: string; displaydepthlabel?: string; textstyle?: TextStyle | string | object; fillstyle?: FillStyle | string | object; fillstylename?: FillStyle | string | object; fillstyledepth?: FillStyle | string | object; visiblenamelabel?: boolean; visibledepthlabel?: boolean; visiblenameborder?: boolean; visibledepthborder?: boolean; fillnamelabel?: boolean; filldepthlabel?: boolean; depthlabelposition?: AnchorType; namelabelposition?: AnchorType; textorientation?: Orientation | any; verticaltextoffset?: number; horizontaltextoffset?: number; linedecoration?: ILineDecoration | string; } ): this;
}
