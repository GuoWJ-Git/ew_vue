import {AbstractElement} from './AbstractElement';
import {TextStyle} from '../../../attributes/TextStyle';
import {RgbaColor} from '../../../util/RgbaColor';

/**
 * AbstractTextElement is an interface from which allow to specify text style;
 * for example, inheriting the same set of methods, or being testable in the same way.<br>
 * <br>
 */
export class AbstractTextElement extends AbstractElement {
    /**
     * AbstractTextElement is an interface from which allow to specify text style;
     * for example, inheriting the same set of methods, or being testable in the same way.<br>
     * <br>
     * @param options The options
     * @param options.textstyle text style
     */
    constructor(options?: object | { textstyle?: TextStyle; } );
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
     * Return text style
     */
    getTextStyle(): TextStyle | null;
    /**
     * Gets element properties
     */
    getProperties(): {textstyle: TextStyle} | any;
    /**
     * Sets the element properties
     * @param props props
     * @param props.textstyle text style
     */
    setProperties(props: object | { textstyle?: TextStyle; } ): this;
}
