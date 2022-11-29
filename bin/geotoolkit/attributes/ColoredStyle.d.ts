import {Style} from './Style';
import {RgbaColor} from '../util/RgbaColor';
import {HsvColor} from '../util/HsvColor';

/**
 * Defines a base class to define a style that has a color attribute.
 */
export class ColoredStyle extends Style {
    /**
     * Defines a base class to define a style that has a color attribute.
     * @param color color in CSS form or properties object
     * @param color.color color in CSS form
     * @param color.shadow JSON for displaying shadow
     * @param color.shadow.color shadow color
     * @param color.shadow.blur shadow blur
     * @param color.shadow.offsetx shadow offset in x direction
     * @param color.shadow.offsety shadow offset in y direction
     * @param color.shadow.enable check if shadow is enable or not
     * @param shadow JSON for displaying shadow
     * @param shadow.color shadow color
     * @param shadow.blur shadow blur
     * @param shadow.offsetx shadow offset in x direction
     * @param shadow.offsety shadow offset in y direction
     * @param shadow.enable check if shadow is enable or not
     */
    constructor(color?: string | RgbaColor | HsvColor | object | { color?: string | RgbaColor | HsvColor; shadow?: object | { color?: string; blur?: number; offsetx?: number; offsety?: number; enable?: boolean; } ; } , shadow?: object | { color?: string; blur?: number; offsetx?: number; offsety?: number; enable?: boolean; } );
    /**
     * Return RGBA color
     */
    getRgbaColor(): RgbaColor;
    /**
     * Sets color
     * @param color in CSS string form or RgbaColor object
     */
    setColor(color: string | RgbaColor): this;
    /**
     * Returns color
     */
    getColor(): string;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {color: string | RgbaColor; shadow: {color: string; blur: number; offsetx: number; offsety: number; enable: boolean}} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.color The attribute color
     * @param properties.shadow data
     * @param properties.shadow.color color of shadow
     * @param properties.shadow.blur blur shadow
     * @param properties.shadow.offsetx x offset for shadow
     * @param properties.shadow.offsety y offset for shadow
     * @param properties.shadow.enable check if shadow is enable or not
     */
    setProperties(properties: object | { color?: string | RgbaColor | HsvColor; shadow?: object | { color?: string; blur?: number; offsetx?: number; offsety?: number; enable?: boolean; } ; } ): this;
    /**
     * Sets all properties pertaining to shadow
     * @param shadow data
     * @param shadow.color color of shadow
     * @param shadow.blur blur shadow
     * @param shadow.offsetx x offset for shadow
     * @param shadow.offsety y offset for shadow
     * @param shadow.enable check if shadow is enable or not
     */
    setShadow(shadow: object | { color?: string | RgbaColor; blur?: number; offsetx?: number; offsety?: number; enable?: boolean; } ): this;
    /**
     * Gets all properties pertaining to shadow
     */
    getShadow(): {color: string; blur: number; offsetx: number; offsety: number; enable: boolean} | object;
}
