import {LogVisualHeader} from './LogVisualHeader';
import {CompositeNode} from '../../scene/CompositeNode';
import {AnchorType} from '../../util/AnchorType';
import {Rect} from '../../util/Rect';
import {TextStyle} from '../../attributes/TextStyle';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * Define header for LogTrack
 */
export class LogTrackVisualHeader extends LogVisualHeader {
    /**
     * Define header for LogTrack
     * @param options visual for logtrack or properties object
     * @param options.adaptiveheight height of the header
     * @param options.autolabelrotation define automatic label rotation if track is narrow
     * @param options.labelrotationangle define optional label rotation angle relative to header
     * @param options.anchortype define optional label anchor type
     */
    constructor(options: CompositeNode | object | { adaptiveheight?: boolean; autolabelrotation?: boolean; labelrotationangle?: number; anchortype?: AnchorType; } );
    /**
     * Set auto label rotation
     * @param value enable automatic label rotation
     */
    setAutoLabelRotation(value: boolean): this;
    /**
     * Get auto label rotation
     */
    getAutoLabelRotation(): boolean;
    /**
     * True if labels doesn't fit to header width
     */
    isRotationNeeded(): boolean;
    /**
     * Sets label rotation angle in radians
     * @example
     * ```javascript
     * // user can customize the label rotation angle
     * setLabelRotationAngle(-Math.PI / 2)
     * ```
     * @param angle label rotation angle, in radians
     */
    setLabelRotationAngle(angle: number): this;
    /**
     * Returns label rotation angle
     */
    getLabelRotationAngle(): number;
    /**
     * Sets label anchor type
     * @example
     * ```javascript
     * import {AnchorType} from '@int/geotoolkit/util/AnchorType';
     * header.setAnchorType(AnchorType.BottomCenter);
     * ```
     * @param anchorType title anchor type
     */
    setAnchorType(anchorType: AnchorType): this;
    /**
     * Returns title anchor type
     */
    getAnchorType(): AnchorType;
    /**
     * Set adaptive height flag
     * @param enable set adaptive height or not
     */
    setAdaptiveHeight(enable: boolean): this;
    /**
     * get adaptive height flag
     */
    getAdaptiveHeight(): boolean;
    /**
     * This method can be used to draw multiple lines. Each line is truncated to fit in the maxWidth
     * (You can use the getLines method to split a string up into multiple lines)
     * @deprecated since 2021.1 (3.3) not used anymore
     * @param maxWidth maxwidth of the model
     * @param lineBounds position of header inside of container
     * @param textStyle text style of title
     * @param context rendering context
     */
    drawLines(maxWidth: number, lineBounds: Rect, textStyle: TextStyle, context: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {adaptiveheight: boolean; autolabelrotation: boolean; labelrotationangle: number; anchortype: AnchorType} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.adaptiveheight height of the header
     * @param properties.autolabelrotation define automatic label rotation if track is narrow
     * @param properties.labelrotationangle define optional label rotation angle relative to header
     * @param properties.anchortype define optional label anchor type
     */
    setProperties(properties: object | { adaptiveheight?: boolean; autolabelrotation?: boolean; labelrotationangle?: number; anchortype?: AnchorType; } ): this;
    /**
     */
    updateState(): this;
    /**
     * Returns header title
     */
    protected getText(): string;
    /**
     * Return header desired height
     */
    getDesiredHeight(): number;
}
