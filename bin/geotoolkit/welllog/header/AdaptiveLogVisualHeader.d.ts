import {LogVisualHeader} from './LogVisualHeader';
import {LogAbstractVisual} from '../LogAbstractVisual';
import {TextStyle} from '../../attributes/TextStyle';
import {RgbaColor} from '../../util/RgbaColor';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {NumberFormat} from '../../util/NumberFormat';

/**
 * @example
 * ```javascript
 * import {AdaptiveLogVisualHeader} from '@int/geotoolkit/welllog/header/AdaptiveLogVisualHeader';
 * const header = new AdaptiveLogVisualHeader();
 * // Add custom 'ElementA' with a _static_ text 'MyCustomText'
 * // that can be cut on the left side (if no room for the whole string)
 * header.setElement('ElementA', { 'cut': 'left-to-right', 'text': 'MyCustomText' });
 * ```
 * @example
 * ```javascript
 * // 'updatemethod' format (for textual elements):
 *  ...
 * 'updatemethod': (header) => {
 *     // return name
 *  },
 * ...
 * ```
 * @example
 * ```javascript
 * // 'drawmethod' format (for graphical elements):
 * 'drawmethod': (header, rect, context) => {
 *    // rendering context draws header in the rect
 * }
 * ```
 */
export class AdaptiveLogVisualHeader extends LogVisualHeader {
    /**
     * @param options visual or properties object
     * @param options.gap gap
     * @param options.priority element priority list
     * @param options.order element order list
     * @param options.element element properties
     */
    constructor(options: LogAbstractVisual | object | { gap?: number; priority?: any[]; order?: any[]; element?: any; } );
    /**
     * Sets text style for all textual elements
     * @param textStyle a new shape text style
     * @param textStyle.color text color
     * @param textStyle.baseLine base line.
     * @param textStyle.alignment alignment.
     * @param textStyle.font font.
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setTextStyle(textStyle: TextStyle | string | object | { color?: string | RgbaColor; baseLine?: string; alignment?: string; font?: string; } , merge?: boolean): this;
    /**
     * Gets header elements with their parameters.
     * NOTE: deep copy of elements is created and returned.
     */
    getElements(): any[];
    /**
     * Gets header elements with their parameters.
     * NOTE: deep copy of elements is created and returned.
     */
    getSections(): any[];
    /**
     * Sets header element's parameters.
     * @param names names include<br>
     * (a) element name or <br>
     * (b) an array of element names or <br>
     * (c) JSON-object with entries in the form of: "an_element_name": { the_element_JSON_options }
     * (see second parameter description for details)
     * @param options options to set
     * @param options.visible visibility flag
     * @param options.text static text for textual element(s)
     * @param options.cut values supported: 'left-to-right', 'right-to-left' and undefined (no cut is allowed)
     * @param options.textstyle text style for textual element(s)
     * @param options.radius radius of the rounded box
     * @param options.linestyle line style for rounded box
     * @param options.fillstyle fill style for rounded box
     * @param options.paddings padding object
     * @param options.paddings.left left padding for rounded box
     * @param options.paddings.top top padding for rounded box
     * @param options.paddings.right right padding for rounded box
     * @param options.paddings.bottom bottom padding for rounded box
     * @param options.updatemethod callback for textual element's contents update
     * @param options.drawmethod callback for non-textual element's contents update
     * @param options.numberformat number format
     * @param options.verticalpos values supported: 'top', 'bottom', 'center'
     * @param options.horizontalpos values supported: 'left', 'right', 'center'
     */
    setElement(names: string | any[] | object, options?: object | { visible?: boolean; text?: string; cut?: string; textstyle?: TextStyle | string | object; radius?: number; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; paddings?: object | { left?: number; top?: number; right?: number; bottom?: number; } ; updatemethod?: Function; drawmethod?: Function; numberformat?: NumberFormat; verticalpos?: string; horizontalpos?: string; } ): this;
    /**
     * Sets header section's parameters. [known section names is 'top','middle','bottom]
     * @param names names include<br>
     * (a) section name or <br>
     * (b) an array of section names or <br>
     * (c) JSON-object with entries in the form of: "an_section_name": { the_section_JSON_options }
     * (see second parameter description for details)
     * @param options options to set
     * @param options.visible visibility flag
     * @param options.size section size in pixels or units
     */
    setSection(names: string | any[] | object, options?: object | { visible?: boolean; size?: number | string | Function; } ): this;
    /**
     * Gets general settings.
     * NOTE: deep copy of settings is created and returned.
     */
    getSettings(): object | any;
    /**
     * Sets settings element's parameters.
     * @param settings settings
     * @param settings.gap gap value in pixels
     * @param settings.order spatial order of textual elements:
     * first "Left-to-right" then "top-to-bottom":
     * @param settings.priority "least-to-most" important textual elements
     * @param settings.padding padding
     * @param settings.padding.left left padding
     * @param settings.padding.right right padding
     * @param settings.padding.top top padding
     * @param settings.padding.bottom bottom padding
     */
    setSettings(settings: object | { gap?: number; order?: any[]; priority?: any[]; padding?: object | { left?: number; right?: number; top?: number; bottom?: number; } ; } ): this;
    /**
     * Gets all the properties pertaining to the header
     */
    getProperties(): {gap: number; priority: any[]; order: any[]; element: any} | any;
    /**
     * Sets properties pertaining to this object
     * @param properties object containing properties to set
     * @param properties.gap gap
     * @param properties.priority element priority list
     * @param properties.order element order list
     * @param properties.element element properties see {@link @int/geotoolkit/welllog/header/AdaptiveLogVisualHeader.AdaptiveLogVisualHeader#setElement}
     */
    setProperties(properties: object | { gap?: number; priority?: any[]; order?: any[]; element?: any; } ): this;
    /**
     * Sets vertical header
     * @param vertical true, if vertical header, else false
     */
    setVertical(vertical: boolean): this;
}
