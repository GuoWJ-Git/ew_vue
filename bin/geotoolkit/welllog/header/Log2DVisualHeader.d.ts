import {LogVisualHeader} from './LogVisualHeader';
import {Log2DVisual} from '../Log2DVisual';
import {TextStyle} from '../../attributes/TextStyle';
import {RgbaColor} from '../../util/RgbaColor';
import {Transformation} from '../../util/Transformation';
import {RenderingContext} from '../../renderer/RenderingContext';
import {NumberFormat} from '../../util/NumberFormat';

/**
 * Define visual to render curve header
 */
export class Log2DVisualHeader extends LogVisualHeader {
    /**
     * Define visual to render curve header
     * @param options visual for the header
     * @param options.displayvaluetextstyle Text Style
     */
    constructor(options?: Log2DVisual | object | { displayvaluetextstyle?: TextStyle | string | object; } );
    /**
     * Sets a current text style for displayed value
     * @param textStyle a new shape text style
     * @param textStyle.color text color
     * @param textStyle.baseLine base line.
     * @param textStyle.alignment alignment.
     * @param textStyle.font font.
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setDisplayValueTextStyle(textStyle: TextStyle | string | object | { color?: string | RgbaColor; baseLine?: string; alignment?: string; font?: string; } , merge?: boolean): this;
    /**
     * Return a current text style for displayed value
     */
    getDisplayValueTextStyle(): TextStyle;
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
     * Fill the rectangle (model limits)
     * @param context Rendering Context
     */
    fillRectangle(context: RenderingContext): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {displayvaluetextstyle: TextStyle} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.displayvaluetextstyle Text Style
     */
    setProperties(properties: object | { displayvaluetextstyle?: TextStyle | string | object; } ): this;
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
}
