import {ScaledShape} from './ScaledShape';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {Rect} from '../../util/Rect';

/**
 * Defines shape to draw a dynamic snapped rectangle which can be used to draw borders
 */
export class Border extends ScaledShape {
    /**
     * Defines shape to draw a dynamic snapped rectangle which can be used to draw borders
     * @param options options object
     * @param options.borders style applied on borders, by default is {'left': true, 'right': true, 'bottom': true, 'top': true}
     * @param options.borders.top visibility of top part
     * @param options.borders.bottom visibility of bottom part
     * @param options.borders.left visibility of left part
     * @param options.borders.right visibility of right part
     * @param options.borderstyle style applied on borders, "visible-bounds", "visible-width", "visible-height", "model-bounds" or "fixed-bounds"
     * @param options.linestyles object with line styles
     * @param fillstyle style applied on fill
     */
    constructor(options?: LineStyle | string | object | { borders?: object | { top?: boolean; bottom?: boolean; left?: boolean; right?: boolean; } ; borderstyle?: string; linestyles?: object; } , fillstyle?: FillStyle | string | object);
    /**
     * Sets the border style. Can be one from the list: "visible-bounds", "visible-width", "visible-height" or "model-bounds"
     * @param style border style
     */
    setBorderStyle(style: string): this;
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: Border): this;
    /**
     * Returns an object { left: {boolean}, right: {boolean}, bottom: {boolean}, top: {boolean} };
     */
    getBorders(): any;
    /**
     * Sets borders state
     * @param borders JSON which defines border settings
     * @param borders.top visibility of top part
     * @param borders.bottom visibility of bottom part
     * @param borders.left visibility of left part
     * @param borders.right visibility of right part
     */
    setBorders(borders: object | { top?: boolean; bottom?: boolean; left?: boolean; right?: boolean; } ): this;
    /**
     * Returns bounds
     */
    getBounds(): Rect;
    /**
     * Sets bounds
     * @param bounds bounds of the shape
     */
    setBounds(bounds: Rect): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {borders: {top: boolean; bottom: boolean; left: boolean; right: boolean}; borderstyle: string; linestyles: object | null} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.borders borders
     * @param properties.borders.top visibility of top part
     * @param properties.borders.bottom visibility of bottom part
     * @param properties.borders.left visibility of left part
     * @param properties.borders.right visibility of right part
     * @param properties.borderstyle border style to be set
     * @param properties.linestyles object with line styles
     */
    setProperties(properties: object | { borders?: object | { top?: boolean; bottom?: boolean; left?: boolean; right?: boolean; } ; borderstyle?: string; linestyles?: object; } ): this;
    /**
     * Sets line styles
     * @param styles object with line styles
     */
    setLineStyles(styles: object): this;
    /**
     * Gets line styles
     */
    getLineStyles(): object | null;
}
