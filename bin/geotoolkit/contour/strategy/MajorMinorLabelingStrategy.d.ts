import {AbstractContourLabelingStrategy} from './AbstractContourLabelingStrategy';
import {TextStyle} from '../../attributes/TextStyle';
import {NumberFormat} from '../../util/NumberFormat';

/**
 * This is an abstract strategy class which defines how contour labels should be rendered.
 */
export class MajorMinorLabelingStrategy extends AbstractContourLabelingStrategy {
    /**
     * This is an abstract strategy class which defines how contour labels should be rendered.
     * @param options labeling strategy properties
     * @param options.majortextstyle Major label text style
     * @param options.minortextstyle Minor label text style
     * @param options.majorusefontcolorforlabels Flag which indicates if font color is used for major label text color
     * @param options.minorusefontcolorforlabels Flag which indicates if font color is used for minor label text color
     * @param options.majorlabelformat Major label format
     * @param options.minorlabelformat Minor label format
     * @param options.majorlabelmargin Label format for major isolines
     * @param options.minorlabelmargin Label format for minor isolines
     * @param options.majorlabelspacing Label spacing for major isolines
     * @param options.minorlabelspacing Label spacing for minor isolines
     * @param options.majorstep Step for major labels
     * @param options.minorstep Step for minor labels
     * @param options.majorlabelsvisible Major labels visibility
     * @param options.minorlabelsvisible Minor labels visibility
     */
    constructor(options?: object | { majortextstyle?: TextStyle; minortextstyle?: TextStyle; majorusefontcolorforlabels?: boolean; minorusefontcolorforlabels?: boolean; majorlabelformat?: NumberFormat; minorlabelformat?: NumberFormat; majorlabelmargin?: number; minorlabelmargin?: number; majorlabelspacing?: number; minorlabelspacing?: number; majorstep?: number; minorstep?: number; majorlabelsvisible?: boolean; minorlabelsvisible?: boolean; } );
    /**
     * Sets show major labels
     * @param visible visible
     */
    setMajorLabelsVisible(visible: boolean): this;
    /**
     * Sets show major labels
     * @param visible visible
     */
    setMinorLabelsVisible(visible: boolean): this;
    /**
     * Gets show major labels
     */
    getMajorLabelsVisible(): boolean;
    /**
     * Gets show minor labels
     */
    getMinorLabelsVisible(): boolean;
    /**
     * Sets text style for major isolines
     * @param style style
     */
    setMajorTextStyle(style: TextStyle): this;
    /**
     * Sets text style for minor isolines
     * @param style style
     */
    setMinorTextStyle(style: TextStyle): this;
    /**
     * Gets text style for major isolines
     */
    getMajorTextStyle(): TextStyle;
    /**
     * Gets text style for minor isolines
     */
    getMinorTextStyle(): TextStyle;
    /**
     * Gets major label format
     */
    getMajorLabelFormat(): NumberFormat;
    /**
     * Gets minor label format
     */
    getMinorLabelFormat(): NumberFormat;
    /**
     * Sets major label format
     * @param format Object holding the C# format specifier for the isoLine labels
     */
    setMajorLabelFormat(format: NumberFormat): this;
    /**
     * Sets minor label format
     * @param format Object holding the C# format specifier for the isoLine labels
     */
    setMinorLabelFormat(format: NumberFormat): this;
    /**
     * Gets label margin for major isolines
     */
    getMajorLabelMargin(): number;
    /**
     * Sets label margin for major isolines
     * @param margin label margin
     */
    setMajorLabelMargin(margin: number): this;
    /**
     * Gets label margin for minor isolines
     */
    getMinorLabelMargin(): number;
    /**
     * Sets label margin for minor isolines
     * @param margin label margin
     */
    setMinorLabelMargin(margin: number): this;
    /**
     * Gets label spacing for major isolines
     */
    getMajorLabelSpacing(): number;
    /**
     * Gets label spacing for minor isolines
     */
    getMinorLabelSpacing(): number;
    /**
     * Sets label spacing for major isolines
     * @param spacing label spacing
     */
    setMajorLabelSpacing(spacing: number): this;
    /**
     * Sets label spacing for minor isolines
     * @param spacing label spacing
     */
    setMinorLabelSpacing(spacing: number): this;
    /**
     * Gets if use font color for major labels
     */
    getMajorUseFontColorForLabels(): boolean;
    /**
     * Sets if use font color for major labels
     * @param use use
     */
    setMajorUseFontColorForLabels(use: boolean): this;
    /**
     * Gets if use font color for minor labels
     */
    getMinorUseFontColorForLabels(): boolean;
    /**
     * Sets if use font color for minor labels
     * @param use use
     */
    setMinorUseFontColorForLabels(use: boolean): this;
    /**
     * Gets if level is major
     * @param i level index
     */
    isMajorLevel(i: number): boolean;
    /**
     * Gets if level is minor
     * @param i level index
     */
    isMinorLevel(i: number): boolean;
    /**
     * Gets step for major labels
     */
    getMajorStep(): number;
    /**
     * Gets step for major labels
     */
    getMinorStep(): number;
    /**
     * Sets step for major labels
     * @param step step
     */
    setMajorStep(step: number): this;
    /**
     * Sets step for minor labels
     * @param step step
     */
    setMinorStep(step: number): this;
    /**
     * Gets labeling strategy properties
     */
    getProperties(): {majortextstyle: TextStyle; minortextstyle: TextStyle; majorusefontcolorforlabels: boolean; minorusefontcolorforlabels: boolean; majorlabelformat: NumberFormat; minorlabelformat: NumberFormat; majorlabelmargin: number; minorlabelmargin: number; majorlabelspacing: number; minorlabelspacing: number; majorstep: number; minorstep: number; majorlabelsvisible: boolean; minorlabelsvisible: boolean} | any;
    /**
     * Sets labeling strategy properties
     * @param props labeling strategy properties
     * @param props.majortextstyle Major label text style
     * @param props.minortextstyle Minor label text style
     * @param props.majorusefontcolorforlabels Flag which indicates if font color is used for major label text color
     * @param props.minorusefontcolorforlabels Flag which indicates if font color is used for minor label text color
     * @param props.majorlabelformat Major label format
     * @param props.minorlabelformat Minor label format
     * @param props.majorlabelmargin Label format for major isolines
     * @param props.minorlabelmargin Label format for minor isolines
     * @param props.majorlabelspacing Label spacing for major isolines
     * @param props.minorlabelspacing Label spacing for minor isolines
     * @param props.majorstep Step for major labels
     * @param props.minorstep Step for minor labels
     * @param props.majorlabelsvisible Major labels visibility
     * @param props.minorlabelsvisible Minor labels visibility
     */
    setProperties(props?: object | { majortextstyle?: TextStyle; minortextstyle?: TextStyle; majorusefontcolorforlabels?: boolean; minorusefontcolorforlabels?: boolean; majorlabelformat?: NumberFormat; minorlabelformat?: NumberFormat; majorlabelmargin?: number; minorlabelmargin?: number; majorlabelspacing?: number; minorlabelspacing?: number; majorstep?: number; minorstep?: number; majorlabelsvisible?: boolean; minorlabelsvisible?: boolean; } ): this;
}
