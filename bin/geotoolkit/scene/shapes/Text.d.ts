import {AnchoredShape} from './AnchoredShape';
import {TextStyle} from '../../attributes/TextStyle';
import {AnchorType} from '../../util/AnchorType';
import {Rect} from '../../util/Rect';
import {RgbaColor} from '../../util/RgbaColor';
import {RenderingContext} from '../../renderer/RenderingContext';
import {Point} from '../../util/Point';

/**
 * Defines text label. Text shapes support various kinds of text strings in the model. Anchoring technique allows developer to specify location of the text relative to anchor point.<br>
 * Other attributes like text size and style can also be set.
 */
export class Text extends AnchoredShape {
    /**
     * Defines text label. Text shapes support various kinds of text strings in the model. Anchoring technique allows developer to specify location of the text relative to anchor point.<br>
     * Other attributes like text size and style can also be set.
     * @param options text to display or object, which contains shape properties
     * @param options.text text to display
     * @param options.radius border radius in device coordinates
     * @param options.padding inner padding in device coordinates
     * @param options.textstyle textStyle to display
     * @param options.sizeisindevicespace size Is In Device Space
     * @param options.sizemode text size mode, default value depends on width and height settings
     * @param options.transform text-transform (uppercase, lowercase, capitalize)
     * @param options.userheight height
     * @param options.userwidth width
     * @param options.ellipsis ellipsis flag
     * @param options.ellipsisstring string ellipsis that renders if ellipsis is true
     * @param options.autosize automatically fit shape bounds to text size, default is true
     * Set it to false if you have more then one paragraph inside with different alignment
     * @param ax x coordinate of anchor
     * @param ay y coordinate of anchor
     * @param width desired width
     * @param height desired height
     * @param textStyle textStyle to display
     * @param sizeIsInDeviceSpace size Is In Device Space
     * @param alignment anchor type
     */
    constructor(options?: string | object | { text?: string; radius?: number; padding?: number; textstyle?: TextStyle | string | object; sizeisindevicespace?: boolean; sizemode?: SizeMode; transform?: Transform | string; userheight?: number; userwidth?: number; ellipsis?: boolean; ellipsisstring?: string; autosize?: boolean; } , ax?: number, ay?: number, width?: number, height?: number, textStyle?: TextStyle | string | object, sizeIsInDeviceSpace?: boolean, alignment?: AnchorType);
    /**
     * Calculates the size from text style
     * @deprecated since 2022 (3.4)
     * @param text to be measured
     * @param textStyle text style
     */
    recalculateLayout(text: string, textStyle: TextStyle): Rect;
    /**
     * Returns the text string that will be rendered depending on textStyle's wrapping value.
     */
    getDisplayableText(): string;
    /**
     * Set show ellipsis
     * @param showEllipsis showEllipsis boolean flag that enables/disables ellipsis in case if text is too long
     */
    setShowEllipsis(showEllipsis: boolean): this;
    /**
     * Returns ellipsis flag
     */
    getShowEllipsis(): boolean;
    /**
     * Sets ellipsis text to string under 15 characters
     * @param ellipsisValue value in the current section
     */
    setEllipsisString(ellipsisValue: string): this;
    /**
     * Get ellipsis text
     */
    getEllipsisString(): string;
    /**
     */
    getEllipsisOptions(): {visible: boolean; ellipsis: string; minlength: number | null} | object;
    /**
     * Sets text overflow ellipsis options
     * @param options text-overflow ellipsis options
     * @param options.visible ellipsis visibility
     * @param options.ellipsis ellipsis text
     * @param options.minlength minimum line symbols
     */
    setEllipsisOptions(options: object | { visible?: boolean; ellipsis?: string; minlength?: number | null; } ): this;
    /**
     * Return auto size mode
     */
    getAutoSize(): boolean;
    /**
     * Automatically fit shape bounds to text size, default is true
     * Set it to false if you have more then one paragraph inside with different alignment
     * @param autoSize auto size mode
     */
    setAutoSize(autoSize: boolean): this;
    /**
     * Sets how text size is computed
     * @param sizeMode Enum of size modes
     */
    setSizeMode(sizeMode: SizeMode | string): this;
    /**
     * Returns how the size is computed
     */
    getSizeMode(): SizeMode | string;
    /**
     * Get this text's contents as a string.
     */
    getText(): string;
    /**
     * The style associated with this text.
     */
    getTextStyle(): TextStyle;
    /**
     * Sets rectangle geometry.
     * @param x1 x coordinate of the top left corner
     * @param y1 y coordinate of the top left corner
     * @param x2 x coordinate of the bottom right corner
     * @param y2 y coordinate of the bottom right corner
     */
    setRect(x1: number, y1: number, x2: number, y2: number): this;
    /**
     * Update the string this text displays.
     * @example
     * ```javascript
     * text.setText('Temperature <b style="font-color:red">110&deg;</b> (<i style="font-color:gray">Fahrenheit</i>')
     * ```
     * @param text new text for this shape     *
     * can contains text formatting tags, <p> <font> <b> <strong> <i> <em> <mark> <small> <del> <ins> <sub> <sup>
     * see https://www.w3schools.com/html/html_formatting.asp
     * each tags except <br> can contains style attribute with set of 'font-size', 'font-family', 'font-weight', 'font-style', 'font-color' properties
     */
    setText(text: string): this;
    /**
     * Set size
     * @param width text width
     * @param height text height
     */
    setSize(width: number, height: number): this;
    /**
     * Called internally to save user size.
     * @param width width
     * @param height height
     */
    setUserSize(width: number, height: number): this;
    /**
     * Set text width. If width set to zero, text will accept size from font.
     * @param width text width
     */
    setWidth(width: number): this;
    /**
     * Set text height. If height set to zero, text will get its height from font.
     * @param height text height
     */
    setHeight(height: number): this;
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
     * Set border radius in device coordinates.
     * @param radius border radius in device coordinates
     */
    setCornerRadius(radius: number): this;
    /**
     * return corner radius
     */
    getCornerRadius(): number;
    /**
     * Set inner padding in device coordinates.
     * @param padding inner padding in device coordinates
     */
    setPadding(padding: number): this;
    /**
     * return inner padding
     */
    getPadding(): number;
    /**
     * Set text transformormation
     * @param textTransform Text transformation type
     */
    setTextTransform(textTransform: Transform | string): this;
    /**
     * Returns text transform type
     */
    getTextTransform(): Transform;
    /**
     * Update geometry
     * @deprecated since 2021 (3.2)
     * @param context Rendering Context
     */
    updateGeometry(context: RenderingContext): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {text: string; radius: number; padding: number; textstyle: TextStyle; layout: Rect; sizemode: SizeMode | string; transform: Transform; userheight: number; userwidth: number; ellipsis: boolean; ellipsisstring: string; autosize: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.text text
     * @param properties.radius border radius in device coordinates.
     * @param properties.padding padding
     * @param properties.textstyle JSON containing the properties to set TextStyle. See {geotoolkit.attributes.TextStyle#setProperties}
     * @param properties.sizeisindevicespace size Is In Device Space
     * @param properties.sizemode enum size mode
     * @param properties.transform text-transform (uppercase, lowercase, capitalize)
     * @param properties.userheight height
     * @param properties.userwidth width
     * @param properties.ellipsis ellipsis flag
     * @param properties.ellipsisstring string ellipsis that renders if ellipsis is true
     * @param properties.autosize auto size mode
     */
    setProperties(properties?: object | { text?: string; radius?: number; padding?: number; textstyle?: TextStyle | string | object; sizeisindevicespace?: boolean; sizemode?: SizeMode | string; transform?: Transform | string; userheight?: number; userwidth?: number; ellipsis?: boolean; ellipsisstring?: string; autosize?: boolean; } ): this;
    /**
     * Disposes the Text
     */
    dispose(): void;
    /**
     * invalidate Method
     */
    getInvalidateMethod(): Function;
    /**
     * Returns user defined width (if exists)
     */
    getUserWidth(): number;
    /**
     * Returns user defined height (if exists)
     */
    getUserHeight(): number;
    /**
     * Hit test in the device coordinate. This method checks if any point is intersects <html> node inside text
     * @param area model area or position
     * @param area.x optional array of x coordinates
     * @param area.y optional array of y coordinates
     * @param radius radius of selection
     */
    hitTest(area: Rect | Point | object | { x?: number[]; y?: number[]; } , radius?: number): {id: string; xml: string} | object;
}
/**
 * Enum of size modes (to specify that size mode depends from width and height use Text.SizeMode.FixedWidth | Text.SizeMode.FixedHeight)
 */
export enum SizeMode {
    /**
     * From Font: calculates text size based only on font
     */
    FromFont = 0,
    /**
     * Fixed Width: calculates text size based on width
     */
    FixedWidth = 1,
    /**
     * Fixed Height: calculates text size based on height
     */
    FixedHeight = 2,
    /**
     * From Font when possible: calculates text size based only on font. Makes it fit width/height if text too big.
     */
    FromFontWhenPossible = 4,
    /**
     * Wrapped Width: adds line breaks between words to fit it into a user defined width
Will not Split words that are larger than Width
*WARNING* This is an expensive operation and using it for very large pieces of texts is not advised
If you know your width and font and will not be changing these it is better to manually split the line yourself
     */
    WrappedWidth = 5,
    /**
     * WrappedWidthSplitWords: adds line breaks to text to fit it into a user defined width
Will Split words that are larger than remains line Width
*WARNING* This is an expensive operation and using it for very large pieces of texts is not advised
If you know your width and font and will not be changing these it is better to manually split the line yourself
     */
    WrappedWidthSplitWords = 6,
    /**
     * WrappedWidthWhenPossible: adds line breaks to text to fit it into a user defined width
Will Split words that are larger than shape Width
*WARNING* This is an expensive operation and using it for very large pieces of texts is not advised
If you know your width and font and will not be changing these it is better to manually split the line yourself
     */
    WrappedWidthWhenPossible = 7
}
/**
 * Text transform type
 */
export enum Transform {
    /**
     * Apply no transformation to text
     */
    None = 'none',
    /**
     * First letter of every word is capital
     */
    Capitalize = 'capitalize',
    /**
     * All letters are uppercase
     */
    Uppercase = 'uppercase',
    /**
     * All letters are lowercase
     */
    Lowercase = 'lowercase'
}
