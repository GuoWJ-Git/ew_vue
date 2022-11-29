import {ColoredStyle} from './ColoredStyle';
import {RgbaColor} from '../util/RgbaColor';
import {LineStyle} from './LineStyle';
import {FillStyle} from './FillStyle';
import {Node} from '../scene/Node';

/**
 * Defines a collection of text properties.
 * Constructor can be TextStyle(color,baseLine,alignment,font) or
 * TextStyle(font) or TextStyle(baseLine, alignment)
 */
export class TextStyle extends ColoredStyle {
    /**
     * Defines a collection of text properties.
     * Constructor can be TextStyle(color,baseLine,alignment,font) or
     * TextStyle(font) or TextStyle(baseLine, alignment)
     * @param color text color or a json object
     * @param color.font font see {@link @int/geotoolkit/attributes/TextStyle.TextStyle#setFont}
     * @param color.alignment alignment.
     * @param color.baseline base line.
     * @param color.outline outline style
     * @param color.background background style
     * @param color.underline underline style
     * @param color.underlineoffset underline offset distance
     * @param color.strikethrough strikethrough style
     * @param color.lineheight line height
     * @param color.multiline allow multi-line text
     * @param color.autosize auto font size on high definition display.
     * @param color.whitespace white space
     * @param color.wordbreak word break
     * @param color.overflowwrap overflow wrap
     * @param color.textoverflow text overflow
     * @param color.fonturl the place from which the font will be loaded, if null - uses system fonts. It can be base64 with url keyword
     * @param color.fill text fill style
     * @param baseLine base line.
     * @param alignment alignment.
     * @param font font.
     * @param autoSize auto font size on high definition display.
     * @param multiline allow multi-line text
     * @param shadow JSON for displaying shadow
     * @param shadow.color shadow color
     * @param shadow.blur shadow blur
     * @param shadow.offsetx shadow offset in x direction
     * @param shadow.offsety shadow offset in y direction
     * @param shadow.enable check if shadow is enable or not
     */
    constructor(color?: string | RgbaColor | object | { font?: string | object; alignment?: AlignmentStyle | string; baseline?: BaseLineStyle | string; outline?: string | object | LineStyle; background?: string | object | FillStyle; underline?: string | object | LineStyle; underlineoffset?: string | number; strikethrough?: string | object | LineStyle; lineheight?: string | number; multiline?: boolean; autosize?: boolean; whitespace?: WhiteSpaceStyle | string; wordbreak?: WordBreakStyle | string; overflowwrap?: OverflowWrapStyle | string; textoverflow?: TextOverflowStyle | string; fonturl?: string | ArrayBuffer; fill?: FillStyle; } , baseLine?: BaseLineStyle | string, alignment?: AlignmentStyle | string, font?: string, autoSize?: boolean, multiline?: boolean, shadow?: object | { color?: string; blur?: number; offsetx?: number; offsety?: number; enable?: boolean; } );
    /**
     * Allows text to be printed along multiple lines.
     * @param multiLine allow text to be printed along multiple lines or not
     */
    setMultiLine(multiLine: boolean): this;
    /**
     * true if text is multiline
     */
    getMultiLine(): boolean;
    /**
     * Sets line height
     * see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
     * @param lineHeight line height
     */
    setLineHeight(lineHeight: string | number): this;
    /**
     * Return line height
     * see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
     */
    getLineHeight(): string | number;
    /**
     * Return font
     */
    getFont(): string;
    /**
     * Sets font
     * @param font font in CSS or JSON format
     * @param font.family font family
     * @param font.size font size
     * @param font.weight font weight
     * @param font.style font style
     */
    setFont(font: string | object | { family?: string; size?: string; weight?: string; style?: string; } ): this;
    /**
     * Return Font family
     */
    getFontFamily(): string;
    /**
     * Set Font family
     * @param fontFamily font family
     */
    setFontFamily(fontFamily: string): this;
    /**
     * Return Font size
     */
    getFontSize(): string;
    /**
     * Set Font size
     * @param fontSize font size
     */
    setFontSize(fontSize: string): this;
    /**
     * Return Font weight
     */
    getFontWeight(): string;
    /**
     * Set Font weight
     * @param fontWeight font weight
     */
    setFontWeight(fontWeight: string): this;
    /**
     * Return Font style
     */
    getFontStyle(): string;
    /**
     * Set Font style
     * @param fontStyle font style
     */
    setFontStyle(fontStyle: string): this;
    /**
     * Gets outline style
     */
    getOutline(): LineStyle;
    /**
     * Sets outline style
     * @param style outline style
     */
    setOutline(style: string | object | LineStyle): this;
    /**
     * Return current text baseline
     */
    getBaseLine(): BaseLineStyle;
    /**
     * Sets base line, for alignment geotoolkit.scene.shapes.Text use AnchorType
     * @param baseLine in CSS format
     */
    setBaseLine(baseLine: BaseLineStyle | string): this;
    /**
     * Return text alignment
     */
    getAlignment(): string | AlignmentStyle;
    /**
     * Sets text alignment
     * @param alignment in CSS format
     */
    setAlignment(alignment: AlignmentStyle | string): this;
    /**
     * Return text white-space CSS rule
     */
    getWhiteSpace(): WhiteSpaceStyle;
    /**
     * Set text white-space CSS rule
     * @param whiteSpace white space in CSS format
     */
    setWhiteSpace(whiteSpace: WhiteSpaceStyle | string): this;
    /**
     * Return text word-break CSS rule
     */
    getWordBreak(): WordBreakStyle;
    /**
     * Set text word-break CSS rule
     * @param wordBreak word break in CSS format
     */
    setWordBreak(wordBreak: WordBreakStyle | string): this;
    /**
     * Return text overflow-wrap CSS rule
     */
    getOverflowWrap(): OverflowWrapStyle;
    /**
     * Set text overflow-wrap CSS rule
     * @param overflowWrap overflow wrap in CSS format
     */
    setOverflowWrap(overflowWrap: OverflowWrapStyle | string): this;
    /**
     * Return text text-overflow CSS rule
     */
    getTextOverflow(): TextOverflowStyle | string;
    /**
     * Set text text-overflow CSS rule
     * @param textOverflow text overflow in CSS format
     */
    setTextOverflow(textOverflow: TextOverflowStyle | string): this;
    /**
     * Sets background style
     * @param style background style
     */
    setBackground(style: string | object | FillStyle): this;
    /**
     * Gets background style
     */
    getBackground(): FillStyle;
    /**
     * Sets underline style
     * @param style underline style
     * use 'inherit' keyword as line style color, in case if color should inherit its value from text style.
     */
    setUnderline(style: string | object | LineStyle): this;
    /**
     * Gets underline style
     */
    getUnderline(): LineStyle;
    /**
     * Sets underline offset distance
     * see https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset
     * @param offset underline offset distance
     */
    setUnderlineOffset(offset: string | number): this;
    /**
     * Gets underline offset distance
     */
    getUnderlineOffset(): string | number;
    /**
     * Sets strikethrough style
     * @param style strikethrough style
     * use 'inherit' keyword as line style color, in case if color should inherit its value from text style.
     */
    setStrikethrough(style: string | object | LineStyle): this;
    /**
     * Gets strikethrough style
     */
    getStrikethrough(): LineStyle;
    /**
     * Sets auto size
     * @param autoSize autosize enable or not
     */
    setAutoSize(autoSize: boolean): this;
    /**
     * Return text auto size
     */
    getAutoSize(): boolean;
    /**
     * Return an object results of the {@link @int/geotoolkit/base.parseFont} of the inline font string.
     */
    getProcessedFont(): any;
    /**
     */
    toString(): string;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {font: string | null; baseline: BaseLineStyle | string; alignment: AlignmentStyle | string; lineheight: string | number; multiline: boolean; outline: LineStyle | null; background: FillStyle | null; underline: LineStyle | null; underlineoffset: string | number; strikethrough: LineStyle | null; autosize: boolean; whitespace: WhiteSpaceStyle; wordbreak: WordBreakStyle; overflowwrap: OverflowWrapStyle; textoverflow: TextOverflowStyle | string; fonturl: string | ArrayBuffer; fill: FillStyle} | any;
    /**
     * Sets all the properties pertaining to this object
     * <br>
     * <br>
     * <h5>CSS Descriptions:</h5>
     * <table class="params">
     *     <thead>
     *          <tr>
     *              <th>Property</th><th>Description</th><th>Example</th>
     *          </tr>
     *      </thead>
     *      <tbody>
     *          <tr>
     *              <td>textstyle-color</td><td>Change text style color</td><td>{  textstyle-color:  #000; }</td>
     *          </tr>
     *          <tr>
     *              <td>textstyle-baseline</td><td>Change baseline</td><td>{  textstyle-baseline:  alphabetic; }</td>
     *          </tr>
     *          <tr>
     *              <td>textstyle-font</td><td>Change font</td><td>{textstyle-font: 42px Roboto;}</td>
     *          </tr>
     *          <tr>
     *              <td>textstyle-alignment</td><td>Change text style alignment</td><td>{textstyle-alignment: center;}</td>
     *          </tr>
     *      <tbody>
     *  </table>
     * <br>
     * @param properties An object containing the properties to set
     * @param properties.font font in CSS format see {@link @int/geotoolkit/attributes/TextStyle.TextStyle#setFont}
     * @param properties.alignment alignment
     * @param properties.baseline baseLine in CSS
     * @param properties.outline outline style
     * @param properties.background background style
     * @param properties.underline underline style
     * @param properties.underlineoffset underline offset distance
     * @param properties.strikethrough style
     * @param properties.lineheight line height
     * @param properties.multiline multi line
     * @param properties.autosize auto size
     * @param properties.whitespace white space
     * @param properties.wordbreak word break
     * @param properties.overflowwrap overflow wrap
     * @param properties.textoverflow text overflow
     * @param properties.fonturl the place from which the font will be loaded, if null - uses system fonts. It can be base64 with url keyword
     * @param properties.fill text fill style
     */
    setProperties(properties?: object | { font?: string | object; alignment?: AlignmentStyle | string; baseline?: BaseLineStyle | string; outline?: string | object | LineStyle; background?: string | object | FillStyle; underline?: string | object | LineStyle; underlineoffset?: string | number; strikethrough?: string | object | LineStyle; lineheight?: string | number; multiline?: boolean; autosize?: boolean; whitespace?: WhiteSpaceStyle | string; wordbreak?: WordBreakStyle | string; overflowwrap?: OverflowWrapStyle | string; textoverflow?: TextOverflowStyle | string; fonturl?: string | ArrayBuffer; fill?: FillStyle; } ): this;
    /**
     * Create or get fill style from object
     * @param object object can be in format of constructor of
     * geotoolkit.attributes.TextStyle
     */
    static fromObject(object: object | string | TextStyle | any): TextStyle | any;
    /**
     * Merge css textstyle object with existing instance
     * @example
     * ```javascript
     * // after mergeFromObject() text shape will change only color property
     * import {Text} from '@int/geotoolkit/scene/shapes/Text';
     * import {TextStyle} from '@int/geotoolkit/attributes/TextStyle';
     * const t1 = new TextStyle({
     *   'color': KnownColors.Black,
     *   'alignment': 'center',
     *   'font': '42px Arial'
     * });
     * const t2 = {
     *   'color': 'red'
     * };
     * const textStyle = TextStyle.mergeFromObject(null, t1, t2, true);
     * const text = new Text({
     *   'text': 'Alphabetical',
     *   'ax': 185,
     *   'ay': 50,
     *   'textStyle': textStyle,
     *   'alignment': AnchorType.Center
     * });
     * ```
     * @param node node
     * @param textStyle instance of node property
     * @param object contains text style
     * @param merge merge flag
     * @param invalidateMethod optional invalidate method
     */
    static mergeFromObject(node: Node | null, textStyle: TextStyle | null, object: TextStyle | object | string, merge?: boolean, invalidateMethod?: Function): TextStyle;
    /**
     * Sets text fill style
     * @param fill text fill style
     */
    setFillStyle(fill: FillStyle): this;
    /**
     * Gets text fill style
     */
    getFillStyle(): FillStyle | null;
}
/**
 * Enum of base line
 */
export enum BaseLineStyle {
    /**
     * Alphabetic (Default)
     */
    Alphabetic = 'alphabetic',
    /**
     * Top
     */
    Top = 'top',
    /**
     * Hanging
     */
    Hanging = 'hanging',
    /**
     * Middle
     */
    Middle = 'middle',
    /**
     * Ideographic
     */
    Ideographic = 'ideographic',
    /**
     * Bottom
     */
    Bottom = 'bottom'
}
/**
 * Enum of alignment
 * https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
 */
export enum AlignmentStyle {
    /**
     * Start
The same as left if direction is left-to-right and right if direction is right-to-left.
     */
    Start = 'start',
    /**
     * End
The same as right if direction is left-to-right and left if direction is right-to-left.
     */
    End = 'end',
    /**
     * Left (Default)
The inline contents are aligned to the left edge of the line box.
     */
    Left = 'left',
    /**
     * Center
The inline contents are centered within the line box.
     */
    Center = 'center',
    /**
     * Right
The inline contents are aligned to the right edge of the line box.
     */
    Right = 'right',
    /**
     * Justify
The inline contents are justified. Text should be spaced to line up its left and right edges to the left and right edges of the line box, except for the last line.
     */
    Justify = 'justify'
}
/**
 * Enum of white-space
 * The white-space property sets how white space inside an element is handled.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/white-space
 */
export enum WhiteSpaceStyle {
    /**
     * Undefined (Default)
Backward compatibility
     */
    Undefined = 'undefined',
    /**
     * Normal
Sequences of white space are collapsed. Newline characters in the source are handled the same as other white space. Lines are broken as necessary to fill line boxes.
     */
    Normal = 'normal',
    /**
     * NoWrap
Collapses white space as for normal, but suppresses line breaks (text wrapping) within the source.
     */
    NoWrap = 'nowrap',
    /**
     * Pre
Sequences of white space are preserved. Lines are only broken at newline characters in the source and at <br> elements.
     */
    Pre = 'pre',
    /**
     * PreWrap
Sequences of white space are preserved. Lines are broken at newline characters, at <br>, and as necessary to fill line boxes.
     */
    PreWrap = 'pre-wrap',
    /**
     * PreLine
Sequences of white space are collapsed. Lines are broken at newline characters, at <br>, and as necessary to fill line boxes.
     */
    PreLine = 'pre-line',
    /**
     * BreakSpaces
The behavior is identical to that of pre-wrap, except that:
<ul>
<li>Any sequence of preserved white space always takes up space, including at the end of the line.</li>
<li>A line breaking opportunity exists after every preserved white space character, including between white space characters.</li>
<li>Such preserved spaces take up space and do not hang, and thus affect the box’s intrinsic sizes (min-content size and max-content size).<li>
</ul>
     */
    BreakSpaces = 'break-spaces'
}
/**
 * Enum of word-break
 * The word-break property sets whether line breaks appear wherever the text would otherwise overflow its content box.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/word-break
 */
export enum WordBreakStyle {
    /**
     * Undefined (Default)
Backward compatibility
     */
    Undefined = 'undefined',
    /**
     * Normal
Use the default line break rule.
     */
    Normal = 'normal',
    /**
     * BreakAll
To prevent overflow, word breaks should be inserted between any two characters (excluding Chinese/Japanese/Korean text).
     */
    BreakAll = 'break-all',
    /**
     * KeepAll (not supported yet)
Word breaks should not be used for Chinese/Japanese/Korean (CJK) text. Non-CJK text behavior is the same as for WordBreakStyle.Normal.
     */
    KeepAll = 'keep-all',
    /**
     * BreakWord
Has the same effect as WordBreak.Normal and OverflowWrap.Anywhere, regardless of the actual value of the OverflowWrap property.
     */
    BreakWord = 'break-word'
}
/**
 * Enum of overflow-wrap
 * The overflow-wrap property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap
 */
export enum OverflowWrapStyle {
    /**
     * Undefined (Default)
Backward compatibility
     */
    Undefined = 'undefined',
    /**
     * Normal (Default)
Lines may only break at normal word break points (such as a space between two words).
     */
    Normal = 'normal',
    /**
     * Anywhere
To prevent overflow, an otherwise unbreakable string of characters — like a long word or URL — may be broken at any point
if there are no otherwise-acceptable break points in the line. No hyphenation character is inserted at the break point.
Soft wrap opportunities introduced by the word break are considered when calculating min-content intrinsic sizes.
     */
    Anywhere = 'anywhere',
    /**
     * BreakWord
The same as the anywhere value, with normally unbreakable words allowed to be broken at arbitrary points
if there are no otherwise acceptable break points in the line, but soft wrap opportunities introduced by the word break
are NOT considered when calculating min-content intrinsic sizes.
     */
    BreakWord = 'break-word'
}
/**
 * Enum of text-overflow
 * The text-overflow CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('…'), or display a custom string.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow
 */
export enum TextOverflowStyle {
    /**
     * Undefined (Default)
Text does not clip by the limit of the user specified area
     */
    Undefined = 'undefined',
    /**
     * Clip
This keyword value will truncate the text at the limit of the content area,
therefore the truncation can happen in the middle of a character.
To clip at the transition between characters you can specify text-overflow as an empty string.
.setTextOverflow('')
     */
    Clip = 'clip',
    /**
     * Ellipsis
This keyword value will display an ellipsis ('…', U+2026 HORIZONTAL ELLIPSIS) to represent clipped text.
The ellipsis is displayed inside the content area, decreasing the amount of text displayed.
If there is not enough space to display the ellipsis, it is clipped.
     */
    Ellipsis = 'ellipsis'
}
