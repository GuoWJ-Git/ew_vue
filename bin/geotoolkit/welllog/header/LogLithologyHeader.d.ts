import {LogVisualHeader} from './LogVisualHeader';
import {Node} from '../../scene/Node';
import {TextStyle} from '../../attributes/TextStyle';
import {SymbolShape} from '../../scene/shapes/SymbolShape';
import {SpaceStyle} from '../../attributes/SpaceStyle';
import {AnchorType} from '../../util/AnchorType';
import {RgbaColor} from '../../util/RgbaColor';

/**
 * Define visual to render curve header
 */
export class LogLithologyHeader extends LogVisualHeader {
    /**
     * Define visual to render curve header
     * @param options visual for the header or properties object
     * @param options.displayvaluetextstyle display value textstyle
     * @param options.symbol symbol to set
     * @param options.headertype Enum of header type
     * @param options.flexbox flexbox layout options
     * @param options.flexbox.enabled Enable/disable flexbox layout options
     * @param options.flexbox.margin Flexbox item margins
     * @param options.flexbox.lithology Flexbox lithology options
     * @param options.flexbox.lithology.width Flexbox lithology width
     * @param options.flexbox.lithology.height Flexbox lithology height
     * @param options.flexbox.title Flexbox item title options
     * @param options.flexbox.title.alignment Flexbox item title location
     * @param options.flexbox.title.maxwidth Flexbox item title maximum width
     * @param options.flexbox.title.margin Flexbox item title spaces from lithology box
     */
    constructor(options?: Node | object | { displayvaluetextstyle?: TextStyle | string | object; symbol?: SymbolShape; headertype?: HeaderType; flexbox?: object | { enabled?: boolean; margin?: SpaceStyle | object; lithology?: object | { width?: number; height?: number; } ; title?: object | { alignment?: AnchorType | string; maxwidth?: number; margin?: number; } ; } ; } );
    /**
     * Sets Header Type
     * @param type Enum of lithography header display types
     */
    setHeaderType(type: HeaderType): this;
    /**
     * Gets the current header type
     */
    getHeaderType(): HeaderType;
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
     * Set flexbox layout options
     * @param flexBox Flexbox layout options
     * @param flexBox.enabled Enable/disable flexbox layout options
     * @param flexBox.margin Flexbox item margins
     * @param flexBox.lithology Flexbox lithology options
     * @param flexBox.lithology.width Flexbox lithology width
     * @param flexBox.lithology.height Flexbox lithology height
     * @param flexBox.title Flexbox item title options
     * @param flexBox.title.alignment Flexbox item title location
     * @param flexBox.title.maxwidth Flexbox item title maximum width
     * @param flexBox.title.margin Flexbox item title spaces from lithology box
     */
    setFlexBoxOptions(flexBox: object | { enabled?: boolean; margin?: SpaceStyle | object; lithology?: object | { width?: number; height?: number; } ; title?: object | { alignment?: AnchorType | string; maxwidth?: number; margin?: number; } ; } ): this;
    /**
     * Get flexbox layout options
     */
    getFlexBoxOptions(): {enabled: boolean; margin: SpaceStyle; lithology: {width: number; height: number}; title: {alignment: AnchorType | string; maxwidth: number; margin: number}} | object;
    /**
     * Update state.
     */
    updateState(): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {displayvaluetextstyle: TextStyle; symbol: SymbolShape; headertype: HeaderType; flexbox: {enabled: boolean; margin: SpaceStyle; lithology: {width: number; height: number}; title: {alignment: AnchorType | string; maxwidth: number; margin: number}}} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.displayvaluetextstyle display value textstyle
     * @param properties.symbol symbol to set
     * @param properties.headertype Enum of header type
     * @param properties.flexbox flexbox layout options
     * @param properties.flexbox.enabled Enable/disable flexbox layout options
     * @param properties.flexbox.margin Flexbox item margins
     * @param properties.flexbox.lithology Flexbox lithology options
     * @param properties.flexbox.lithology.width Flexbox lithology width
     * @param properties.flexbox.lithology.height Flexbox lithology height
     * @param properties.flexbox.title Flexbox item title options
     * @param properties.flexbox.title.alignment Flexbox item title location
     * @param properties.flexbox.title.maxwidth Flexbox item title maximum width
     * @param properties.flexbox.title.margin Flexbox item title spaces from lithology box
     */
    setProperties(properties: object | { displayvaluetextstyle?: TextStyle | string | object; symbol?: SymbolShape; headertype?: HeaderType; flexbox?: object | { enabled?: boolean; margin?: SpaceStyle | object; lithology?: object | { width?: number; height?: number; } ; title?: object | { alignment?: AnchorType | string; maxwidth?: number; margin?: number; } ; } ; } ): this;
}
/**
 * Enum of lithography header display types
 */
export enum HeaderType {
    /**
     * Default (TextInside) display type
     */
    Default = 'default',
    /**
     * Text will appear centered and inside the key rectangles.
     */
    FullWidth = 'fullwidth',
    /**
     * Text will appear legend-style outside the key rectangles, with the boxes to the left
     */
    BoxesLeft = 'boxesleft',
    /**
     * Text will appear legend-style outside the key rectangles, with the boxes to the right
     */
    BoxesRight = 'boxesright',
    /**
     * Text will appear vertically legend-style outside the key rectangles, with the boxes to the top
     */
    VerticalBoxesRight = 'verticalboxesright'
}
