import {Style} from '../../../attributes/Style';

/**
 */
export class ElementStyle extends Style {
    /**
     * @param style 
     */
    constructor(style: string);
    /**
     * set parent style
     * @param parent parent
     */
    setParent(parent: ElementStyle): this;
    /**
     * Set element style
     * @param style style
     * @param value value
     */
    setStyle(style: string | ElementStyle | any, value?: string | number | ElementStyle | any): this;
    /**
     * @param styleName styleName
     * @param styleValue styleValue
     */
    protected parseStyle(styleName: string, styleValue: string): string | this | object;
    /**
     * @param styleName styleName
     * @param styleValue styleValue
     */
    protected createStyle(styleName: string, styleValue: string): string | this | object;
    /**
     * @param styleName styleName 'border-left'|'fill-pattern-position'|'float'|.....
     */
    getStyle(styleName: string): string | number | object | ElementStyle;
    /**
     * Remove style attribute
     * @param styleName style name
     */
    removeStyle(styleName: string | string[]): this;
    /**
     * Convert Style attribute to string
     * @param styleName style name
     */
    toString(styleName?: string | any): string;
}
