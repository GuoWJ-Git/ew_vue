import {AdaptiveLogVisualHeader} from './AdaptiveLogVisualHeader';
import {Log2DVisual} from '../Log2DVisual';
import {NumberFormat} from '../../util/NumberFormat';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {TextStyle} from '../../attributes/TextStyle';
import {RgbaColor} from '../../util/RgbaColor';
import {Pattern} from '../../attributes/Pattern';
import {Transformation} from '../../util/Transformation';

/**
 * Adaptive header for Log2d visual
 */
export class AdaptiveLog2DVisualHeader extends AdaptiveLogVisualHeader {
    /**
     * Adaptive header for Log2d visual
     * @param options visual or properties object
     * @param options.minvalueformat min value number format
     * @param options.maxvalueformat max value number format
     * @param options.cursor cursor properties
     * @param options.cursor.enabled cursor enabled/disabled flag
     * @param options.cursor.valueformat cursor value number format
     * @param options.cursor.linestyle cursor line style
     * @param options.cursor.fillstyle cursor pointer fill style
     * @param options.cursor.valuetextstyle cursor value text style
     * @param options.cursor.valuevisible cursor value visibility state
     */
    constructor(options: Log2DVisual | object | { minvalueformat?: NumberFormat; maxvalueformat?: NumberFormat; cursor?: object | { enabled?: boolean; valueformat?: NumberFormat; linestyle?: LineStyle | string | object | any; fillstyle?: FillStyle | object | string | any; valuetextstyle?: TextStyle | object | string; valuevisible?: boolean; } ; } );
    /**
     * Gets a flag indicating if cursor enabled or not
     */
    isCursorEnabled(): boolean;
    /**
     * Sets a flag indicating if cursor enabled or not
     * @param enabled cursor enabled/disabled flag
     */
    setCursorEnabled(enabled: boolean): this;
    /**
     * Gets a flag indicating if cursor value is visible or not
     */
    isCursorValueVisible(): boolean;
    /**
     * Sets a visible indicating if cursor value is visible or not
     * @param visible visibility state
     */
    setCursorValueVisible(visible: boolean): this;
    /**
     * Returns the number formatter for the cursor value
     */
    getCursorValueFormat(): NumberFormat;
    /**
     * Sets the number formatter for the current value
     * @param format number format
     */
    setCursorValueFormat(format: NumberFormat): this;
    /**
     * Returns the text style for the cursor value
     */
    getCursorValueTextStyle(): TextStyle;
    /**
     * Sets the text style for the current value
     * @param textStyle text style
     * @param textStyle.color text color
     * @param textStyle.font font.
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setCursorValueTextStyle(textStyle: TextStyle | object | { color?: string | RgbaColor; font?: string; }  | string, merge?: boolean): this;
    /**
     * Returns the cursor line style
     */
    getCursorLineStyle(): LineStyle | null;
    /**
     * Sets the cursor line style
     * @param lineStyle line style
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setCursorLineStyle(lineStyle: LineStyle | string | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | any, merge?: boolean): this;
    /**
     * Returns the cursor pointer fill style
     */
    getCursorFillStyle(): FillStyle | null;
    /**
     * Sets the cursor pointer fill style
     * @param fillStyle fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setCursorFillStyle(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string | any, merge?: boolean): this;
    /**
     * Return true if the representation is flipped horizontally
     */
    isHorizontalFlip(): boolean;
    /**
     * Set horizontal flip of the representation
     * @param enable enable flip
     */
    setHorizontalFlip(enable: boolean): this;
    /**
     * <code>getWorldTransform</code> retrieves the local transformation
     * of the node which represents multiplication of parent to bounds and
     * contents transformations.
     */
    getWorldTransform(): Transformation;
    /**
     * Returns the number formatter for the min value
     */
    getMinValueFormat(): NumberFormat;
    /**
     * Returns the number formatter for the max value
     */
    getMaxValueFormat(): NumberFormat;
    /**
     * Sets the number formatter for the min value
     * @param format number format
     */
    setMinValueFormat(format: NumberFormat): this;
    /**
     * Sets the number formatter for the max value
     * @param format number format
     */
    setMaxValueFormat(format: NumberFormat): this;
    /**
     * Sets all properties
     * @param properties properties
     * @param properties.minvalueformat min value number format
     * @param properties.maxvalueformat max value number format
     * @param properties.cursor cursor properties
     * @param properties.cursor.valueformat cursor value number format
     * @param properties.cursor.linestyle cursor line style
     * @param properties.cursor.fillstyle cursor pointer fill style
     * @param properties.cursor.valuetextstyle cursor value text style
     * @param properties.cursor.valuevisible cursor value visibility state
     * @param properties.cursor.enabled cursor enabled flag
     */
    setProperties(properties?: object | { minvalueformat?: NumberFormat; maxvalueformat?: NumberFormat; cursor?: object | { valueformat?: NumberFormat; linestyle?: LineStyle | string | object | any; fillstyle?: FillStyle | object | string | any; valuetextstyle?: TextStyle | object | string; valuevisible?: boolean; enabled?: boolean; } ; } ): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {minvalueformat: NumberFormat; maxvalueformat: NumberFormat; cursor: {valueformat: NumberFormat; linestyle: LineStyle; fillstyle: FillStyle; valuetextstyle: TextStyle; valuevisible: boolean; enabled: boolean}} | any;
}
