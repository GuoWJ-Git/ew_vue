import {AbstractVisual} from './AbstractVisual';
import {NumberFormat} from '../../util/NumberFormat';
import {LineStyle} from '../../attributes/LineStyle';
import {TextStyle} from '../../attributes/TextStyle';
import {AbstractContourLabelingStrategy} from '../strategy/AbstractContourLabelingStrategy';
import {IsolineStylingStrategy} from '../strategy/IsolineStylingStrategy';
import {Point} from '../../util/Point';
import {Transformation} from '../../util/Transformation';
import {RenderingContext} from '../../renderer/RenderingContext';
import {ContourEvent} from '../events/ContourEvent';

/**
 * The Line Visual. This renders the isolines and their labels.
 * Constructor. Initialises to: VISIBLE_LINES | VISIBLE_LABELS, index step = 1, and
 * label format: no fractional digits, and no grouping.
 */
export class ContourLineVisual extends AbstractVisual {
    /**
     * The Line Visual. This renders the isolines and their labels.
     * Constructor. Initialises to: VISIBLE_LINES | VISIBLE_LABELS, index step = 1, and
     * label format: no fractional digits, and no grouping.
     * @param options An object containing the properties to set
     * @param options.linesvisible Visibility of all isolines
     * @param options.labelsvisible Visibility of labels
     * @param options.indexstep Index step for line visual
     * @param options.labelspacing Label spacing between nearby labels on a isoline
     * @param options.labelmargin Margin around labels in device coordinates
     * @param options.labelformat Label format
     * @param options.linestyle Style of line that is used to draw the isolines
     * @param options.textstyle Text style attribute that is used to draw the labels
     * @param options.usefontcolorforlabels Flag which indicates if font color is used for label text color
     * @param options.labelingstrategy Labeling strategy
     * @param options.isolinesstylingstrategy Isolines styling strategy
     */
    constructor(options?: object | { linesvisible?: boolean; labelsvisible?: boolean; indexstep?: number; labelspacing?: number; labelmargin?: number; labelformat?: NumberFormat; linestyle?: LineStyle; textstyle?: TextStyle; usefontcolorforlabels?: boolean; labelingstrategy?: AbstractContourLabelingStrategy; isolinesstylingstrategy?: IsolineStylingStrategy; } );
    /**
     * Sets the visibility for all isolines
     * @param visible Flag for determining if isolines should be visible.
     */
    setLinesVisible(visible: boolean): this;
    /**
     * Gets the visibility of all isolines
     */
    getLinesVisible(): boolean;
    /**
     * Sets the visibility for all isolines
     * @param visible Flag for determining if labels should be visible.
     */
    setLabelsVisible(visible: boolean): this;
    /**
     * Gets the visibility of all isolines
     */
    getLabelsVisible(): boolean;
    /**
     * Gets the index step for the line visual. Only contour lines with (index = step * i) will be displayed.
     * Where 'i' iterates through all available line indices.
     */
    getIndexStep(): number;
    /**
     * Sets the index step for the line visual. Only contour lines with (index = step * i) will be displayed.
     * Where 'i' iterates through all available line indices.
     * @param step Integer step interval
     */
    setIndexStep(step: number): this;
    /**
     * Gets the label spacing. This is the space between nearby labels on an isoLine.
     * Distance is specified in device space. Default is 200.
     */
    getLabelSpacing(): number;
    /**
     * Sets the label spacing. This is the space between nearby labels on an isoLine.
     * Distance is specified in device space. Default is 200.
     * @param spacing The label spacing.
     */
    setLabelSpacing(spacing: number): this;
    /**
     * Gets the label margin. The margin is specified in device coordinates. Default is 5.
     */
    getLabelMargin(): number;
    /**
     * Sets the label margin. The margin is specified in device coordinates. Default is 5.
     * @param margin The margin around labels in device coordinates.
     */
    setLabelMargin(margin: number): this;
    /**
     * Label Format. Use a standard C# format specifier. Default is "G" (general)
     */
    getLabelFormat(): NumberFormat;
    /**
     * Label Format. Use a standard C# format specifier. Default is "G" (general)
     * @param format Object holding the C# format specifier for the isoLine labels.
     */
    setLabelFormat(format: NumberFormat): void;
    /**
     * Gets the current LineStyle that is used to draw the isolines of this
     * line visual. The "line color" property of the attribute is ignored because it
     * is set directly from the colorMap. Ie. set such properties as "line style",
     * and they will be applied globally to all isolines in this visual, regardless of color.
     */
    getLineStyle(): LineStyle;
    /**
     * Sets the current LineStyle that is used to draw the isolines of this
     * line visual. The "line color" property of the attribute is ignored because it
     * is set directly from the colorMap. Ie. set such properties as "line style",
     * and they will be applied globally to all isolines in this visual, regardless of color.
     * @param lineStyle The line style.
     */
    setLineStyle(lineStyle: LineStyle): this;
    /**
     * Reset label grid mapping. The grid mapping is used for mapping triangle grid to model space.
     */
    resetLabelGridMapping(): void;
    /**
     * Gets the current text style attribute that is used to draw the labels for this
     * line visual. The "line color" property of the attribute is ignored because it
     * is set directly from the colormap. Ie. set such properties as "font style",
     * and they will be applied globally to all isolines in this visual, regardless of color.
     */
    getTextStyle(): TextStyle;
    /**
     * Sets the current text style attributes that is used to draw the labels for this line visual.
     * @param textStyle The text style.
     */
    setTextStyle(textStyle: TextStyle): this;
    /**
     * Sets the flag which indicates if font color should be used for label text color.
     * @param useFontColor Flag which indicates if font color should be used for label text color.
     */
    setUseFontColorForLabels(useFontColor: boolean): this;
    /**
     * Gets the flag which indicates if font color is used for label text color.
     */
    getUseFontColorForLabels(): boolean;
    /**
     * Gets the labeling strategy.
     */
    getLabelingStrategy(): AbstractContourLabelingStrategy;
    /**
     * Sets the labeling strategy.
     * @param strategy The labeling strategy.
     */
    setLabelingStrategy(strategy: AbstractContourLabelingStrategy): this;
    /**
     * Sets the isolines styling strategy. If set, style set in setLineStyle will be ignored. The "line color" property of the styles will overrides colorMap.
     * @param strategy strategy
     */
    setIsolinesStylingStrategy(strategy: IsolineStylingStrategy): this;
    /**
     * Gets the isolines styling strategy
     */
    getIsolinesStylingStrategy(): IsolineStylingStrategy;
    /**
     * Returns angle in degrees formed by p1-p0 when converted to device space.
     * @deprecated since 2021.1 (3.3)
     * @param p0 First point in model space.
     * @param p1 Second point in model space.
     * @param modelToDevice Model to device transformation.
     * @param sign The sign of the angle.
     */
    static getAngle(p0: Point, p1: Point, modelToDevice: Transformation, sign?: number): number;
    /**
     * Use this property to set the local reference to the line reservation array.
     * This array is actually stored in the contour shape, and is passed to each line visual.
     * All the elements of the array
     * 'reservation[lineIndex] = Math.Max( reservation[lineIndex], GetIndexStep() )'
     * Later, the implementation of the line visual may decide if
     * the isoline with some particular index should be drawn using
     * 'GetLineReservationFor' and 'GetIndexStep'
     * methods. Hence, major and minor isolines can be supported.
     * @param lineReservation The line reservation
     */
    setLineReservation(lineReservation: Int32Array): this;
    /**
     * Find the line reservation value for the isoline with the specified index.
     * This is used to determine if a a particular isoline should be drawn.
     * @param index Index for which line reservation should be computed.
     */
    getLineReservationFor(index: number): number;
    /**
     * Renders the line visual.
     * @param renderingContext The rendering context.
     */
    render(renderingContext: RenderingContext): void;
    /**
     * This method is invoked when the contour shape has been invalidated
     * (eg. the contour scale or data processor have changed)
     * @param args The event which has caused the shape to be invalidated.
     */
    contourInvalidated(args: ContourEvent): void;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {linesvisible: boolean; labelsvisible: boolean; indexstep: number; labelspacing: number; labelmargin: number; labelformat: NumberFormat; linestyle: LineStyle; textstyle: TextStyle; usefontcolorforlabels: boolean; labelingstrategy: AbstractContourLabelingStrategy; isolinesstylingstrategy: IsolineStylingStrategy} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.linesvisible Visibility of all isolines
     * @param properties.labelsvisible Visibility of labels
     * @param properties.indexstep Index step for line visual
     * @param properties.labelspacing Label spacing between nearby labels on a isoline
     * @param properties.labelmargin Margin around labels in device coordinates
     * @param properties.labelformat Label format
     * @param properties.linestyle Style of line that is used to draw the isolines
     * @param properties.textstyle Text style attribute that is used to draw the labels
     * @param properties.usefontcolorforlabels Flag which indicates if font color is used for label text color
     * @param properties.labelingstrategy Labeling strategy
     * @param properties.isolinesstylingstrategy Isolines styling strategy
     */
    setProperties(properties?: object | { linesvisible?: boolean; labelsvisible?: boolean; indexstep?: number; labelspacing?: number; labelmargin?: number; labelformat?: NumberFormat; linestyle?: LineStyle; textstyle?: TextStyle; usefontcolorforlabels?: boolean; labelingstrategy?: AbstractContourLabelingStrategy; isolinesstylingstrategy?: IsolineStylingStrategy; } ): this;
}
