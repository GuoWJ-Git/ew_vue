import {Sprite, Vector3, Vector2} from '../THREE';
import {TextStyle} from '../../geotoolkit/attributes/TextStyle';
import {RgbaColor} from '../../geotoolkit/util/RgbaColor';

/**
 * This class implements text as a 2D sprite.<br>
 * A 2D text is a text that will always face the camera and that is horizontal.<br>
 * Internally it uses a texture created using a regular canvas.<br>
 * <br>
 * It also offers a 'fixed size' mode that force the text to be always the same size on screen.<br>
 * Note that this mode introduces some blurriness as the texture is rescaled by the graphic card on the fly.<br>
 * If outline is set, the original font style might be overwritten.
 */
export class Text2d extends Sprite {
    /**
     * This class implements text as a 2D sprite.<br>
     * A 2D text is a text that will always face the camera and that is horizontal.<br>
     * Internally it uses a texture created using a regular canvas.<br>
     * <br>
     * It also offers a 'fixed size' mode that force the text to be always the same size on screen.<br>
     * Note that this mode introduces some blurriness as the texture is rescaled by the graphic card on the fly.<br>
     * If outline is set, the original font style might be overwritten.
     * @param text text
     * @param options options object
     * @param options.style text style
     * @param options.font font
     * @param options.color text color
     * @param options.issizeindevice True if the text should always be drawn with the same size, no matter of how far it is
     * @param options.outline if provided, text will have outline
     * @param options.outline.enable set to false to remove current outline
     * @param options.outline.innercolor inner color for text with outline
     * @param options.outline.outlinecolor outline color for text with outline
     * @param options.outline.thickness outline thickness
     */
    constructor(text: string, options?: object | { style?: TextStyle; font?: string; color?: string | RgbaColor; issizeindevice?: boolean; outline?: object | { enable?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; } );
    /**
     * Set text outline, or disable outline.
     * @param outlineOpt outline options
     * @param outlineOpt.enable set to false to remove current outline
     * @param outlineOpt.innercolor inner color for text with outline
     * @param outlineOpt.outlinecolor outline color for text with outline
     * @param outlineOpt.thickness outline thickness
     */
    setOutline(outlineOpt: object | { enable?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ): void;
    /**
     * Gets text
     */
    getText(): string;
    /**
     * Sets text
     * @param text text
     */
    setText(text: string): this;
    /**
     * Gets text style
     */
    getTextStyle(): TextStyle;
    /**
     * Sets text style
     * @param textStyle text style
     */
    setTextStyle(textStyle: TextStyle): this;
    /**
     * The given xyz vector will be used when computing the text location after scaling.<br>
     * It will translate the text in the given direction by half the text size.<br>
     * finalPosition = position + anchorOffsetRatio * (sizeInDevice/2 + offsetInDevice)
     * @param ratio The anchor offset factor to be applied when computing offset
     */
    setAnchorOffsetRatio(ratio: Vector3): this;
    /**
     * The given xyz vector will be used when computing the text location after scaling.<br>
     * It will be added to the offset value.<br>
     * finalPosition = position + anchorOffsetRatio * (sizeInDevice/2 + offsetInDevice)
     * @param offset The anchor offset in device to be applied when computing offset
     */
    setAnchorOffset(offset: Vector2): this;
    /**
     * Dispose this object
     */
    dispose(): void;
}
