import {TextStyle} from '../../attributes/TextStyle';
import {NumberFormat} from '../../util/NumberFormat';
import {Transformation} from '../../util/Transformation';
import {Rect} from '../../util/Rect';

/**
 * This is an abstract strategy class which defines how contour labels should be rendered.
 */
export class AbstractContourLabelingStrategy {
    /**
     * This is an abstract strategy class which defines how contour labels should be rendered.
     * @param options labeling strategy properties
     * @param options.textstyle The text style for specified level
     * @param options.labelspacing The label spacing for specified level
     * @param options.labelmargin The label margin for specified level
     * @param options.usefontcolorforlabels Flag which indicates if font color is used for label text color
     * @param options.labelformat Label format
     */
    constructor(options?: object | { textstyle?: TextStyle; labelspacing?: number; labelmargin?: number; usefontcolorforlabels?: boolean; labelformat?: NumberFormat; } );
    /**
     * Returns if labels of specified level should be drawn
     * @param level level
     */
    getLabelsVisible(level: number): boolean;
    /**
     * Gets the labeling scale factor
     * @param modelToDevice Model to device transformation.
     * @param modelLimits Model limits of the contour.
     * @param height Height of non-scaled label in device coordinate space.
     */
    getLabelScale(modelToDevice: Transformation, modelLimits: Rect, height: number): number;
    /**
     * Desired number of labels on the isoline
     * @param modelToDevice Model to device transformation.
     * @param modelLimits Model limits of the contour.
     * @param isolineLength Length of isoline in device coordinate space.
     * @param labelGap Length of gap for a label on isoline in device coordinate space.
     */
    getDesiredLabelCount(modelToDevice: Transformation, modelLimits: Rect, isolineLength: number, labelGap: number): number;
    /**
     * Gets text style for specified level
     * @param level level index
     */
    getTextStyle(level?: number): TextStyle;
    /**
     * Gets label spacing for specified level
     * @param level level index
     */
    getLabelSpacing(level?: number): number;
    /**
     * Gets label margin for specified level
     * @param level level index
     */
    getLabelMargin(level?: number): number;
    /**
     * Gets the flag which indicates if font color is used for label text color.
     * @param level level index
     */
    getUseFontColorForLabels(level?: number): boolean;
    /**
     * Label Format. Use a standard C# format specifier. Default is "G" (general)
     * @param level level index
     */
    getLabelFormat(level?: number): NumberFormat;
    /**
     * Gets labeling strategy properties
     */
    getProperties(): {textstyle: TextStyle; labelspacing: number; labelmargin: number; usefontcolorforlabels: boolean; labelformat: NumberFormat} | any;
    /**
     * Sets labeling strategy properties
     * @param props labeling strategy properties
     * @param props.textstyle The text style for specified level
     * @param props.labelspacing The label spacing for specified level
     * @param props.labelmargin The label margin for specified level
     * @param props.usefontcolorforlabels Flag which indicates if font color is used for label text color
     * @param props.labelformat Label format
     */
    setProperties(props?: object | { textstyle?: TextStyle; labelspacing?: number; labelmargin?: number; usefontcolorforlabels?: boolean; labelformat?: NumberFormat; } ): this;
}
