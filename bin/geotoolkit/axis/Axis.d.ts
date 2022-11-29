import {Shape} from '../scene/shapes/Shape';
import {ILayoutable} from '../layout/ILayoutable';
import {TickGenerator} from './TickGenerator';
import {Rect} from '../util/Rect';
import {TextStyle} from '../attributes/TextStyle';
import {TickPosition, LabelPosition, TickInfo} from './TickInfo';
import {LineStyle} from '../attributes/LineStyle';
import {LayoutStyle} from '../layout/LayoutStyle';
import {Orientation} from '../util/Orientation';
import {RgbaColor} from '../util/RgbaColor';
import {AnchorType} from '../util/AnchorType';
import {Dimension} from '../util/Dimension';
import {RenderingContext} from '../renderer/RenderingContext';
import {Transformation} from '../util/Transformation';
import {AxisDimension} from './AxisDimension';

/**
 * This class uses the {@link @int/geotoolkit/axis/TickGenerator.TickGenerator} which is passed to it and creates an axis.<br>
 * It allows to modify the axis tick positions, axis orientations, axis label positions etc. CSS can be used to modify all axis settings.
 * @example
 * ```javascript
 * // In this example we have used AdaptiveLogTickGenerator and set the label rotation to true. Refer to the axes and grid tutorial for more options.
 * import {AdaptiveTickGenerator} from '@int/geotoolkit/axis/AdaptiveTickGenerator';
 * import {Rect} from '@int/geotoolkit/util/Rect';
 * import {Axis} from '@int/geotoolkit/axis/Axis';
 * const tickGenerator = new AdaptiveTickGenerator();
 * const minValue = 40000;
 * const maxValue = 15000000;
 * const bounds = new Rect(120, 10, 150, 340);
 * // note that group has a clipping by model limits, so to avoid overlapping set models limits accordingly.
 * const axis = new Axis(tickGenerator)
 *                  .setBounds(bounds)
 *                  .setModelLimits(new Rect(minValue, minValue, maxValue, maxValue))
 *                  .setAutoLabelRotation(true);
 * ```
 */
export class Axis extends Shape implements ILayoutable {
    /**
     * This class uses the {@link @int/geotoolkit/axis/TickGenerator.TickGenerator} which is passed to it and creates an axis.<br>
     * It allows to modify the axis tick positions, axis orientations, axis label positions etc. CSS can be used to modify all axis settings.
     * @param tickGenerator User can pass an object OR a tickGenerator (by default geotoolkit.axis.AdaptiveTickGenerator is used of nothing is passed)
     * @param tickGenerator.tickgenerator tickGenerator to use in axis
     * @param tickGenerator.modellimits rectangle where to generate ticks
     * @param tickGenerator.textstyle labels textstyle
     * @param tickGenerator.tickposition tick position
     * @param tickGenerator.labelposition label position
     * @param tickGenerator.labeloffset offset the label offset
     * @param tickGenerator.baselinestyle base line style see {@link @int/geotoolkit/axis/Axis.Axis#setBaseLineStyle}
     * @param tickGenerator.autolabelrotation automatic label rotation
     * @param tickGenerator.visiblebaseline visibility of baseline
     * @param tickGenerator.labelmanualsettings enable / disable manual settings for labels like anchor
     * @param tickGenerator.layoutstyle desired layout style
     * @param tickGenerator.infinity infinity mode
     * @param tickGenerator.bounds axis bounds
     * @param tickGenerator.orientation axis orientation
     * @param tickGenerator.title axis title see {@link @int/geotoolkit/axis/Axis.Axis#setTitle}
     * @param tickGenerator.hideoverlappedtext hide overlapped text flag
     * @param tickGenerator.labelpadding label padding size in pixels
     * @param tickGenerator.maximumlabelsize maximum label size (in device), text will be wrapped, if it is bigger than maximum label size
     */
    constructor(tickGenerator?: TickGenerator | object | { tickgenerator?: TickGenerator; modellimits?: Rect; textstyle?: TextStyle; tickposition?: TickPosition; labelposition?: LabelPosition; labeloffset?: number; baselinestyle?: LineStyle | object | string; autolabelrotation?: boolean; visiblebaseline?: boolean; labelmanualsettings?: boolean; layoutstyle?: LayoutStyle | object; infinity?: boolean; bounds?: Rect; orientation?: Orientation; title?: string | object; hideoverlappedtext?: boolean; labelpadding?: number; maximumlabelsize?: number; } );
    /**
     * Sets label manual settings mode (AnchorType and no shifts)
     * @param state label manual settings mode
     */
    setLabelManualSettings(state: boolean): this;
    /**
     * Gets label manual settings mode (AnchorType and no shifts)
     */
    getLabelManualSettings(): boolean;
    /**
     * Sets label padding
     * @param padding label padding
     */
    setLabelPadding(padding: number): this;
    /**
     * Gets label padding
     */
    getLabelPadding(): number;
    /**
     * Sets the labelPosition
     * @param position label position
     */
    setLabelPosition(position: LabelPosition): this;
    /**
     * Return the labelPosition
     */
    getLabelPosition(): LabelPosition;
    /**
     * Sets the labelOffset
     * @param offset the label offset
     */
    setLabelOffset(offset: number): this;
    /**
     * Return the labelOffset
     */
    getLabelOffset(): number;
    /**
     * Sets a base line style
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setBaseLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * Return a base line style
     */
    getBaseLineStyle(): LineStyle;
    /**
     * Return base line visibility
     */
    getBaseLineVisible(): boolean;
    /**
     * Set base line visibility
     * @param visible visible
     */
    setBaseLineVisible(visible: boolean): this;
    /**
     * Return a text style
     */
    getTextStyle(): TextStyle;
    /**
     * Set text style
     * @param textStyle a new shape text style
     * @param textStyle.color text color
     * @param textStyle.baseLine base line.
     * @param textStyle.alignment alignment.
     * @param textStyle.font font.
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setTextStyle(textStyle: TextStyle | string | object | { color?: string | RgbaColor; baseLine?: string; alignment?: string; font?: string; } , merge?: boolean): this;
    /**
     * Return boolean flag that enables/disables ellipsis in case if text is too long
     */
    getShowTitleEllipsis(): boolean;
    /**
     * Enables/disables ellipsis in case if text is too long
     * @param showellipsis true for ellipsis
     */
    setShowTitleEllipsis(showellipsis: boolean): this;
    /**
     * Sets tick generator
     * @param tickGenerator a tick generator to be used
     */
    setTickGenerator(tickGenerator: TickGenerator | object): this;
    /**
     * Return a current tick generator
     */
    getTickGenerator(): TickGenerator;
    /**
     * Gets axis bounds
     */
    getBounds(): Rect | null;
    /**
     * Gets model limits
     */
    getModelLimits(): Rect;
    /**
     * Sets model limits
     * @param modelLimits model limits or rectangle where ticks are to be generated
     */
    setModelLimits(modelLimits: Rect): this;
    /**
     * Sets a axis bounds
     * @param bounds axis bounds
     */
    setBounds(bounds: Rect): this;
    /**
     * Set infinity mode flag to draw axis outside the model limits
     * @param infinityMode infinity mode flag
     */
    setInfiniteMode(infinityMode: boolean): this;
    /**
     * Return infinity mode flag
     */
    getInfiniteMode(): boolean;
    /**
     * Sets hide overlapped text flag
     * @param flag hide overlapped text flag
     */
    setHideOverlappedText(flag: boolean): this;
    /**
     * Gets hide overlapped text flag
     */
    getHideOverlappedText(): boolean;
    /**
     * Get title anchor
     */
    getTitleAnchor(): AnchorType;
    /**
     * Set title alignment
     * @param titleAnchor anchor
     */
    setTitleAnchor(titleAnchor: AnchorType): this;
    /**
     * Set title visibility state
     * @param visible visible title
     */
    setTitleVisible(visible: boolean): this;
    /**
     * Get title visibility state
     */
    getTitleVisible(): boolean;
    /**
     * Sets title text
     * @param titleText title text
     */
    setTitleText(titleText: string): this;
    /**
     * Set title
     * @param title axis title text or title object
     * @param title.text axis title text
     * @param title.visible visibility
     * @param title.offset offset
     * @param title.textstyle text style
     * @param title.alignment alignment
     * @param title.showellipsis enables/disables ellipsis in case if text is too long
     */
    setTitle(title: string | object | { text?: string; visible?: boolean; offset?: Dimension; textstyle?: TextStyle | string | object; alignment?: AnchorType; showellipsis?: boolean; } ): this;
    /**
     * Get axis title
     */
    getTitle(): string;
    /**
     * Returns title offset
     */
    getTitleOffset(): Dimension;
    /**
     * Sets title offset
     * @param titleOffset offset
     */
    setTitleOffset(titleOffset: Dimension): this;
    /**
     * Set axis title text style
     * @param titleTextStyle a new title text style
     * @param titleTextStyle.color text color
     * @param titleTextStyle.baseLine base line.
     * @param titleTextStyle.alignment alignment.
     * @param titleTextStyle.font font.
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setTitleTextStyle(titleTextStyle: TextStyle | string | object | { color?: string | RgbaColor; baseLine?: string; alignment?: string; font?: string; } , merge?: boolean): this;
    /**
     * The style associated with this axis title.
     */
    getTitleTextStyle(): TextStyle;
    /**
     * Sets axis orientation
     * @param orientation (It can be "Vertical" or "Horizontal");
     */
    setOrientation(orientation: string | Orientation): this;
    /**
     * Return axis orientation
     */
    getOrientation(): string;
    /**
     * Returns axis tick info
     */
    getTickInfo(): TickInfo;
    /**
     * Return tick position
     */
    getTickPosition(): TickPosition;
    /**
     * Sets tick position as text
     * @param position (Can be "left", "right", "leftandright", "between", "middle");
     */
    setTickPosition(position: string | TickPosition): this;
    /**
     * Sets auto rotation angle for vertical axis
     * @param angle angle of label auto rotation
     */
    setAutoLabelRotationAngle(angle: number): this;
    /**
     * Gets auto rotation angle for vertical axis
     */
    getAutoLabelRotationAngle(): number;
    /**
     * Set auto label rotation
     * @param enable enable automatic label rotation
     */
    setAutoLabelRotation(enable: boolean): this;
    /**
     * Get auto label rotation
     */
    getAutoLabelRotation(): boolean;
    /**
     * Check culling
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Specify desired layout style
     * @param layoutStyle desired layout style
     * @param merge true if you want to merge layoutStyle with existing attribute, false by default
     */
    setLayoutStyle(layoutStyle: LayoutStyle | object, merge?: boolean): this;
    /**
     * Transformation of inner contents to bounds
     */
    getContentsTransform(): Transformation | null;
    /**
     * Retrieves the local transformation of the node which represents multiplication of parent to bounds and
     * contents transformations.
     */
    getWorldTransform(): Transformation;
    /**
     * Invalidate parent area
     * @param bounds area to invalidate
     * @param force force
     */
    invalidateParent(bounds?: Rect, force?: boolean): this;
    /**
     * return desired layout style
     */
    getLayoutStyle(): LayoutStyle;
    /**
     * Gets maximum label size
     */
    getMaximumLabelSize(): number;
    /**
     * Sets maximum label size
     * @param maximumLabelSize maximum label size (in device space)
     */
    setMaximumLabelSize(maximumLabelSize: number): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {orientation: Orientation | string; modellimits: Rect; textstyle: TextStyle; tickgenerator: TickGenerator; tickposition: TickPosition | string; labelposition: LabelPosition; labeloffset: number; baselinestyle: LineStyle; autolabelrotation: boolean; visiblebaseline: boolean; hideoverlappedtext: boolean; labelmanualsettings: boolean; layoutstyle: LayoutStyle | object; title: object; labelpadding: number; maximumlabelsize: number; infinity: boolean; bounds: Rect} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.orientation axis orientation
     * @param properties.modellimits rectangle where to generate ticks
     * @param properties.textstyle labels textstyle
     * @param properties.tickgenerator instance of tick generator
     * @param properties.tickposition position of the tick
     * @param properties.labelposition position label position
     * @param properties.labeloffset offset the label offset
     * @param properties.baselinestyle base line style see {@link @int/geotoolkit/axis/Axis.Axis#setBaseLineStyle}
     * @param properties.autolabelrotation automatic label rotation
     * @param properties.visiblebaseline visibility of baseline
     * @param properties.hideoverlappedtext enable label filtering if labels are overlapped.
     * @param properties.labelmanualsettings enable / disable manual settings for labels like anchor
     * @param properties.layoutstyle desired layout style
     * @param properties.title see {@link @int/geotoolkit/axis/Axis.Axis#setTitle}
     * @param properties.labelpadding label padding size in pixels
     * @param properties.maximumlabelsize maximum label size (in device space), text will be wrapped, if it is bigger then maximum label size
     * @param properties.infinity infinity mode
     * @param properties.bounds axis bounds
     */
    setProperties(properties: object | { orientation?: Orientation | string; modellimits?: Rect; textstyle?: TextStyle; tickgenerator?: TickGenerator; tickposition?: TickPosition | string; labelposition?: LabelPosition; labeloffset?: number; baselinestyle?: object | string | LineStyle; autolabelrotation?: boolean; visiblebaseline?: boolean; hideoverlappedtext?: boolean; labelmanualsettings?: boolean; layoutstyle?: LayoutStyle | object; title?: object; labelpadding?: number; maximumlabelsize?: number; infinity?: boolean; bounds?: Rect; } ): this;
    /**
     * Sets axis dimension to synchronize tick generator parameters with external source
     * @param dimension dimension
     */
    setAxisDimension(dimension: AxisDimension | null): this;
    /**
     * Gets axis dimension to synchronize tick generator parameters with external source
     */
    getAxisDimension(): AxisDimension | null;
    /**
     * Update axis dimension for new data limits and optional device size of the axis
     * @param minValue minimum value
     * @param maxValue maximum value
     * @param size size of the axis in device space. if size is not provided
     * then size is calculated based on limits and current transformation.
     */
    updateAxisDimension(minValue: number, maxValue: number, size?: number): this;
    /**
     * Notify that layout is invalidated. Send event {@link @int/geotoolkit/layout/Events.Events.LayoutInvalidated}
     */
    invalidateLayout(): this;
    /**
     * This method is called if visibility is changed.  Send event {@link @int/geotoolkit/scene/Node.Events.VisibilityChanged}
     */
    protected onVisibilityChanged(): void;
    /**
     * Called if axis dimension is changed
     * @param dimension dimension
     */
    protected onAxisDimensionChanged(dimension: AxisDimension): void;
}
