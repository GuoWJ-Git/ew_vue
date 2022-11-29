import {ElementStyle} from './ElementStyle';
import {AbstractUnit} from '../../../util/AbstractUnit';
import {SpaceStyle} from '../../../attributes/SpaceStyle';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {Rect} from '../../../util/Rect';

/**
 */
export class BorderStyle extends ElementStyle {
    /**
     * @param style 
     */
    constructor(style?: string);
    /**
     * Return border collapse state
     */
    isCollapsed(): boolean;
    /**
     * Return border radiuses
     * @param unit unit to convert
     */
    getRadius(unit: AbstractUnit | string): SpaceStyle | null;
    /**
     * Parse margin value
     * @param styleValue styleValue
     */
    parse(styleValue: string): this;
    /**
     * @param styleName styleName
     * @param styleValue styleValue
     */
    protected parseStyle(styleName: string, styleValue: string): string | ElementStyle | object;
    /**
     * @param styleName styleName
     * @param styleValue styleValue
     */
    protected createStyle(styleName: string, styleValue: string): string | ElementStyle | object;
    /**
     * Render border
     * @param context context
     * @param bounds bounds
     */
    drawBorder(context: RenderingContext, bounds: Rect): void;
    /**
     * Set border style properties
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: object): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): object | any;
}
