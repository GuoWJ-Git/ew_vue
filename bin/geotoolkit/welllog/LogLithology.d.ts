import {LogFill} from './LogFill';
import {TextStyle} from '../attributes/TextStyle';
import {LogPointSet} from './LogPointSet';
import {FillStyle} from '../attributes/FillStyle';
import {LineStyle} from '../attributes/LineStyle';
import {SizeMode} from '../scene/shapes/Text';
import {RgbaColor} from '../util/RgbaColor';

/**
 * Welllog Lithology is a visual that fills a pattern between a set of depth ranges and two reference lines defined by {@link @int/geotoolkit/welllog/LogPointSet.LogPointSet}<br>
 * Users can define their own patterns for lithology fills.
 * @example
 * ```javascript
 * // This example shows how to create discontinuous range in lithology
 * import {LogLithology} from '@int/geotoolkit/welllog/LogLithology';
 * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
 * import {PatternFactory} from '@int/geotoolkit/attributes/PatternFactory';
 * import {FillStyle} from '@int/geotoolkit/attributes/FillStyle';
 * const linearTrack = widget.addTrack(TrackType.LinearTrack);
 * const depths = [128, 200, NaN, 320, 360];
 * const headerTitles = ['chert', 'lime'];
 * const fillStyles = [
 *     new FillStyle('green', PatternFactory.getInstance().getPattern(headerTitles[0]), 'lightgreen'),
 *     new FillStyle('yellow', PatternFactory.getInstance().getPattern(headerTitles[1]))
 * ];
 * const lithology = new LogLithology({
 *     'depths': depths,
 *     'fillstyles': fillStyles,
 *     'titles': headerTitles
 * });
 * linearTrack.addChild(lithology);
 * ```
 */
export class LogLithology extends LogFill {
    /**
     * Welllog Lithology is a visual that fills a pattern between a set of depth ranges and two reference lines defined by {@link @int/geotoolkit/welllog/LogPointSet.LogPointSet}<br>
     * Users can define their own patterns for lithology fills.
     * @param depths an array of the depths or properties object
     * @param depths.depths an array of the depths
     * @param depths.minheightforlabel min height where display of label can be turned off
     * @param depths.textstyle the text style
     * @param depths.left left points set or number between 0 and 1
     * @param depths.right right point set or number between 0 and 1
     * @param depths.fillstyles fill styles
     * @param depths.linestyles line styles
     * @param depths.textstyles lithology text styles
     * @param depths.text name of the lithology
     * @param depths.names array of the names
     * @param depths.titles array for the header titles
     * @param depths.linetypes array for the line type
     * @param depths.labelfillmode mode for how to back the name text
     * @param depths.bordermode mode for how to draw border around lithology
     * @param depths.labelfillstyle label fill style used if mode is set to SINGLECOLOR
     * @param depths.nameorientation lithology name orientation
     * @param depths.textellipsis ellipsis flag
     * @param depths.textexpand auto expand lithology rect to fit text flag
     * @param depths.textsizemode Enum of size modes
     * @param left left points set
     * @param right right point set
     * @param fillStyles fill styles
     * @param names array of the names
     * @param titles array for the header titles
     * @param labelfillstyle label fill style used if mode is set to SINGLECOLOR
     * @param labelfillmode mode for how to back the name text
     * @param nameorientation lithology name orientation
     */
    constructor(depths?: number[] | object | { depths?: number[]; minheightforlabel?: number; textstyle?: TextStyle | string | object; left?: LogPointSet | number; right?: LogPointSet | number; fillstyles?: (FillStyle | string | object)[]; linestyles?: (LineStyle | string | object)[] | any; textstyles?: (TextStyle | object | string)[]; text?: string; names?: string[]; titles?: string[]; linetypes?: LineType[]; labelfillmode?: LabelFillMode; bordermode?: BorderMode; labelfillstyle?: FillStyle | string | object; nameorientation?: NameOrientation; textellipsis?: boolean; textexpand?: boolean; textsizemode?: SizeMode | string; } , left?: LogPointSet, right?: LogPointSet, fillStyles?: (FillStyle | string | object)[], names?: string[], titles?: string[], labelfillstyle?: FillStyle | string | object, labelfillmode?: LabelFillMode, nameorientation?: NameOrientation);
    /**
     * Sets how text size is computed
     * @param textSizeMode Enum of size modes
     */
    setTextSizeMode(textSizeMode: SizeMode | string): this;
    /**
     * Returns how the size is computed
     */
    getTextSizeMode(): SizeMode | string;
    /**
     * Sets text expand mode
     * @param textExpand text expand flag, true if text can expand lithology bounds
     */
    setTextExpand(textExpand: boolean): this;
    /**
     * Returns true if text can expand lithology bounds
     */
    getTextExpand(): boolean;
    /**
     * Set show ellipsis
     * @param showTextEllipsis show ellipses
     */
    setShowEllipsis(showTextEllipsis: boolean): this;
    /**
     * Returns ellipsis flag
     */
    getShowEllipsis(): boolean;
    /**
     * Returns ellipsis options
     */
    getEllipsisOptions(): object;
    /**
     * Set ellipsis options
     * @param options ellipsis options
     */
    setEllipsisOptions(options: object): this;
    /**
     * Set border mode
     * @param mode border mode
     */
    setBorderMode(mode: BorderMode): this;
    /**
     * Returns current border mode
     */
    getBorderMode(): BorderMode;
    /**
     * sets the label fill style used if the mode is set to SINGLECOLOR
     * @param fillstyle label fill style
     */
    setLabelFillStyle(fillstyle: FillStyle | string | object): this;
    /**
     * Returns label fill style used if the mode is set to SINGLECOLOR
     */
    getLabelFillStyle(): FillStyle;
    /**
     * Sets lithology names
     * @param names lithology names
     */
    setNames(names: string[]): this;
    /**
     * Returns lithology names
     */
    getNames(): string[];
    /**
     * Returns name orientation
     */
    getNameOrientation(): NameOrientation;
    /**
     * Set name orientation
     * @param nameorientation name orientation
     */
    setNameOrientation(nameorientation: NameOrientation): this;
    /**
     * Sets lithology titles
     * @param titles track header titles
     */
    setTitles(titles: string[]): this;
    /**
     * Returns lithology titles
     */
    getTitles(): string[];
    /**
     * Sets text backing mode
     * @param mode Label fill mode
     */
    setLabelFillMode(mode: LabelFillMode): this;
    /**
     * Returns Label fill mode
     */
    getLabelFillMode(): LabelFillMode;
    /**
     * Returns array of fillstyles
     */
    getFillStyles(): FillStyle[];
    /**
     * Returns array of linestyles
     */
    getLineStyles(): LineStyle[];
    /**
     * Sets lithology line types
     * @param lineTypes array for the line type
     */
    setLineTypes(lineTypes?: LineType[]): this;
    /**
     * Return Lithology Line Types
     */
    getLineTypes(): LineType[];
    /**
     * Sets array of fillstyles
     * @param fillStyles array of fillstyles
     */
    setFillStyles(fillStyles: (FillStyle | string | object)[]): this;
    /**
     * Sets array of line styles
     * @param lineStyles array of line styles
     */
    setLineStyles(lineStyles: (LineStyle | string | object)[] | any): this;
    /**
     * Sets depths intervals
     * @param depths depths intervals
     */
    setDepths(depths: number[]): this;
    /**
     * Returns depths
     */
    getDepths(): number[];
    /**
     * Return text style
     */
    getTextStyle(): TextStyle;
    /**
     * Sets text style
     * @param textStyle a new shape text style
     * @param textStyle.color text color
     * @param textStyle.baseLine base line.
     * @param textStyle.alignment alignment.
     * @param textStyle.font font.
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setTextStyle(textStyle: TextStyle | string | object | { color?: string | RgbaColor; baseLine?: string; alignment?: string; font?: string; } , merge?: boolean): this;
    /**
     * Sets text styles list for the text labels
     * @param textStyles a new shape text style
     */
    setTextStyles(textStyles: (TextStyle | object | string)[]): this;
    /**
     * Returns list of the text styles for the lithology
     */
    getTextStyles(): TextStyle[];
    /**
     * Sets text
     * @param text Sets text to be displayed
     */
    setText(text: string): this;
    /**
     * Returns text
     */
    getText(): string;
    /**
     * Return minimum height for label
     */
    getMinHeightForLabel(): number;
    /**
     * Sets minimum height for label
     * @param min min height for label ( used to decide when to turn off display of label)
     */
    setMinHeightForLabel(min: number): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {depths: number[]; minheightforlabel: number; textstyle: TextStyle; fillstyles: FillStyle[]; linestyles: LineStyle[]; textstyles: TextStyle[]; text: string; names: string[]; titles: string[]; linetypes: LineType[]; labelfillmode: LabelFillMode; bordermode: BorderMode; labelfillstyle: FillStyle; nameorientation: NameOrientation; textellipsis: boolean; textsizemode: SizeMode | string; textexpand: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.depths depths intervals
     * @param properties.minheightforlabel min height where display of label can be turned off
     * @param properties.textstyle the text style
     * @param properties.left left points set or number between 0 and 1
     * @param properties.right right point set or number between 0 and 1
     * @param properties.fillstyles the fill styles
     * @param properties.linestyles the line styles
     * @param properties.textstyles lithology text styles
     * @param properties.text lithology names
     * @param properties.names lithology names
     * @param properties.titles track header titles
     * @param properties.linetypes array for the line type
     * @param properties.labelfillmode the label fill mode
     * @param properties.bordermode mode for how to draw border around lithology
     * @param properties.labelfillstyle the fill style used for mode SINGLECOLOR
     * @param properties.nameorientation lithology name orientation
     * @param properties.textellipsis ellipsis flag
     * @param properties.textsizemode Enum of size modes
     * @param properties.textexpand text expand flag
     */
    setProperties(properties: object | { depths?: number[]; minheightforlabel?: number; textstyle?: TextStyle | string | object; left?: LogPointSet | number; right?: LogPointSet | number; fillstyles?: (FillStyle | string | object)[]; linestyles?: (LineStyle | string | object)[]; textstyles?: (TextStyle | object | string)[]; text?: string; names?: string[]; titles?: string[]; linetypes?: LineType[]; labelfillmode?: LabelFillMode; bordermode?: BorderMode; labelfillstyle?: FillStyle | string | object; nameorientation?: NameOrientation; textellipsis?: boolean; textsizemode?: SizeMode | string; textexpand?: boolean; } ): this;
}
/**
 * LogLithology LineType
 */
export enum LineType {
    /**
     * CONTINUE
     */
    CONTINUE = 0,
    /**
     * DISCONTINUE
     */
    DISCONTINUE = 1
}
/**
 * LogLithology Label Fill Mode
 */
export enum LabelFillMode {
    /**
     * SINGLECOLOR - label fill will be a single color for all labels
     */
    SINGLECOLOR = 0,
    /**
     * FILLSTYLE - label fill will be the corresponding fill styles color
     */
    FILLSTYLE = 1,
    /**
     * NONE - no label fill
     */
    NONE = 2
}
/**
 * LogLithology border mode
 */
export enum BorderMode {
    /**
     * Inside - inside lithology
     */
    Inside = 'Inside',
    /**
     * Outside - outside lithology
     */
    Outside = 'Outside',
    /**
     * Middle - half border inside and half outside
     */
    Middle = 'Middle'
}
/**
 * LogLithology NameOrientation
 */
export enum NameOrientation {
    /**
     * Regular
     */
    Regular = 'Regular',
    /**
     * Rotated
     */
    Rotated = 'Rotated',
    /**
     * Automatic
     */
    Auto = 'Auto'
}
