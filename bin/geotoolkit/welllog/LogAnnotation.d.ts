import {LogFrameVisual} from './LogFrameVisual';
import {Rect} from '../util/Rect';
import {FillStyle} from '../attributes/FillStyle';
import {TextStyle} from '../attributes/TextStyle';
import {SizeMode} from '../scene/shapes/Text';
import {AnchorType} from '../util/AnchorType';
import {SpaceStyle} from '../attributes/SpaceStyle';
import {RgbaColor} from '../util/RgbaColor';
import {RenderingContext} from '../renderer/RenderingContext';

/**
 * Defines annotation visual.
 * It is defined by a string and a rectangle to set its bounds.
 * @example
 * ```javascript
 * // How to create annotation
 * // Use setFixedHeight to false to locate
 * // annotation precisely by provided bounds
 * import {LogAnnotation} from '@int/geotoolkit/welllog/LogAnnotation';
 * import {AnchorType} from '@int/geotoolkit/util/AnchorType';
 * import {Rect} from '@int/geotoolkit/util/Rect';
 * ...
 * const annotation = new LogAnnotation({
 *       'bounds': new Rect(0, 100, 1, 200),
 *       'text': 'Text1',
 *       'textstyle': '#7cb342',
 *       'fillstyle': '#fdd835',
 *       'textposition': AnchorType.Center,
 *       'padding': '1mm'
 *    }).setFixedHeight(false)
 * ```
 */
export class LogAnnotation extends LogFrameVisual {
    /**
     * Defines annotation visual.
     * It is defined by a string and a rectangle to set its bounds.
     * @param options bounds of the visual or properties object
     * @param options.fillstyle FillStyle
     * @param options.fixedheight Enables height of the frame to be fixed in the device coordinates
     * @param options.text text to be displayed
     * @param options.textstyle the style of the text
     * @param options.textsizemode Enum of size modes
     * @param options.textellipsis text ellipsis
     * @param options.textorientation text orientation
     * @param options.textposition text anchor type specified position of the text inside the bounds and
     * it can be placed in any one of 9 places. These values include LeftTop, TopCenter, RightTop, LeftCenter, Center,RightCenter, LeftBottom, BottomCenter, RightBottom
     * @param options.padding It has properties for specifying the padding for each side
     * @param options.padding.top top padding in device space
     * @param options.padding.bottom top padding in device space
     * @param options.padding.right right padding in device space
     * @param options.padding.left left padding in device space
     * @param options.autoheight auto height flag
     * @param text the text to be displayed
     */
    constructor(options?: Rect | object | { fillstyle?: FillStyle | string | object; fixedheight?: boolean; text?: string; textstyle?: TextStyle | string | object; textsizemode?: SizeMode | string; textellipsis?: boolean; textorientation?: TextOrientation; textposition?: AnchorType; padding?: SpaceStyle | object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; }  | string | number; autoheight?: boolean; } , text?: string);
    /**
     * Sets text
     * @param text text to be displayed
     */
    setText(text: string): this;
    /**
     * Returns the current text
     */
    getText(): string;
    /**
     * Sets text orientation. if text orientation is regular then text follows the widgets orientation
     * if text is rotated then text is always rotated on 90 degree.
     * @param orientation text orientation
     */
    setTextOrientation(orientation: TextOrientation): this;
    /**
     * Return text orientation
     */
    getTextOrientation(): TextOrientation;
    /**
     * Specifies text position inside the bounds
     * @param anchorType text anchor type specified position of the text inside the bounds and
     * it can be placed in any one of 9 places. These values include LeftTop, TopCenter, RightTop, LeftCenter, Center,RightCenter, LeftBottom, BottomCenter, RightBottom
     */
    setTextPosition(anchorType: AnchorType): this;
    /**
     * Returns text position inside the bounds
     */
    getTextPosition(): AnchorType;
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
     * Returns text style
     */
    getTextStyle(): TextStyle;
    /**
     * Sets padding style
     * @param paddingStyle padding style
     * @param paddingStyle.top top padding
     * @param paddingStyle.bottom bottom padding
     * @param paddingStyle.right right padding
     * @param paddingStyle.left left padding
     * @param merge true if you want to merge paddingStyle with existing attribute, false by default
     */
    setPaddingStyle(paddingStyle: SpaceStyle | object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; } , merge?: boolean): this;
    /**
     * Returns padding style
     */
    getPaddingStyle(): SpaceStyle | null;
    /**
     * Sets text padding
     * @param padding It has properties for specifying the padding for each side
     * @param padding.top top padding in pixels
     * @param padding.bottom top padding  in pixels
     * @param padding.right right padding  in pixels
     * @param padding.left left padding  in pixels
     */
    setPadding(padding?: object | { top?: number; bottom?: number; right?: number; left?: number; } ): this;
    /**
     * Return text padding
     */
    getPadding(): {top: number; bottom: number; right: number; left: number} | object;
    /**
     * Set auto height flag
     * @param enable flag
     */
    setAutoHeight(enable: boolean): this;
    /**
     * Returns auto height flag
     */
    getAutoHeight(): boolean;
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
     * Set show ellipsis
     * @param showTextEllipsis if flag equal true then show ellipsis text
     */
    setShowEllipsis(showTextEllipsis: boolean): this;
    /**
     * Returns ellipsis flag
     */
    getShowEllipsis(): boolean;
    /**
     * Returns calculated bounds
     * @param context Rendering Context
     */
    getBounds(context?: RenderingContext): Rect;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {text: string; textstyle: TextStyle; textsizemode: SizeMode; textellipsis: boolean; textorientation: TextOrientation; textposition: AnchorType; padding: SpaceStyle | null; autoheight: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.text text to be displayed
     * @param properties.textstyle the style of the text
     * @param properties.textsizemode Enum of size modes
     * @param properties.textellipsis text ellipsis
     * @param properties.textorientation text orientation
     * @param properties.textposition text anchor type specified position of the text inside the box
     * @param properties.padding It has properties for specifying the padding for each side
     * @param properties.padding.top top padding in device space
     * @param properties.padding.bottom top padding in device space
     * @param properties.padding.right right padding in device space
     * @param properties.padding.left left padding in device space
     * @param properties.autoheight auto height flag
     */
    setProperties(properties?: object | { text?: string; textstyle?: TextStyle | string | object; textsizemode?: SizeMode | string; textellipsis?: boolean; textorientation?: TextOrientation; textposition?: AnchorType; padding?: SpaceStyle | object | { top?: number; bottom?: number; right?: number; left?: number; }  | string | number; autoheight?: boolean; } ): this;
}
/**
 * LogAnnotation TextOrientation
 */
export enum TextOrientation {
    /**
     * Regular
     */
    Regular = 'Regular',
    /**
     * Rotated
     */
    Rotated = 'Rotated'
}
