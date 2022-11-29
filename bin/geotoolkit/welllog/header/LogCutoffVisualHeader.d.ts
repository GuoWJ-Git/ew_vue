import {LogVisualHeader} from './LogVisualHeader';
import {LogAbstractVisual} from '../LogAbstractVisual';
import {HorizontalAlignment} from '../../util/HorizontalAlignment';
import {Range} from '../../util/Range';
import {SpaceStyle} from '../../attributes/SpaceStyle';
import {TextStyle} from '../../attributes/TextStyle';
import {RgbaColor} from '../../util/RgbaColor';
import {VerticalAlignment} from '../../util/VerticalAlignment';

/**
 * Define visual to render log cutoff visual header
 */
export class LogCutoffVisualHeader extends LogVisualHeader {
    /**
     * Define visual to render log cutoff visual header
     * @param options visual for discrete curve header or properties object
     * @param options.visual visual for discrete curve header
     */
    constructor(options?: LogVisualHeader | LogAbstractVisual | object | { visual?: LogAbstractVisual; } );
    /**
     * Set the visibility of curve name
     * @param visible The visibility of the curve name
     */
    setTitleVisible(visible: boolean): this;
    /**
     * Gets visibility of curve name
     */
    getTitleVisible(): boolean;
    /**
     * Return title horizontal alignment
     */
    getTitleAlignment(): HorizontalAlignment;
    /**
     * Set title horizontal alignment
     * @param horizontalAlignment title horizontal alignment
     */
    setTitleAlignment(horizontalAlignment: HorizontalAlignment): this;
    /**
     * Return title preferred height
     */
    getTitlePreferredSize(): Range | null;
    /**
     * Set title preferred height
     * @param min minimum height
     * @param min.min minimum height
     * @param min.max maximum height
     * @param max maximum height
     */
    setTitlePreferredSize(min: number | object | { min?: number | null; max?: number | null; }  | Range, max: number | null): this;
    /**
     * Sets title padding style
     * @param paddingStyle padding style
     * @param paddingStyle.top top padding
     * @param paddingStyle.bottom bottom padding
     * @param paddingStyle.right right padding
     * @param paddingStyle.left left padding
     * @param merge true if you want to merge paddingStyle with existing attribute, false by default
     */
    setTitlePaddingStyle(paddingStyle: SpaceStyle | object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; }  | string, merge?: boolean): this;
    /**
     * Returns title padding style
     */
    getTitlePaddingStyle(): SpaceStyle | null;
    /**
     * Sets a sub-title text style
     * @param textStyle a new sub-title text style
     * @param textStyle.color text color
     * @param textStyle.baseLine base line.
     * @param textStyle.alignment alignment.
     * @param textStyle.font font.
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setSubTitleTextStyle(textStyle: TextStyle | string | object | { color?: string | RgbaColor; baseLine?: string; alignment?: string; font?: string; } , merge?: boolean): this;
    /**
     * Return a sub-title text style
     */
    getSubTitleTextStyle(): TextStyle | null;
    /**
     * Returns sub-title vertical alignment
     */
    getSubTitleAlignment(): VerticalAlignment;
    /**
     * Set sub-title vertical alignment
     * @param verticalAlignment sub-title vertical alignment
     */
    setSubTitleAlignment(verticalAlignment: VerticalAlignment | string): this;
    /**
     * Sets sub-title padding style
     * @param paddingStyle padding style
     * @param paddingStyle.top top padding
     * @param paddingStyle.bottom bottom padding
     * @param paddingStyle.right right padding
     * @param paddingStyle.left left padding
     * @param merge true if you want to merge paddingStyle with existing attribute, false by default
     */
    setSubTitlePaddingStyle(paddingStyle: SpaceStyle | object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; }  | string, merge?: boolean): this;
    /**
     * Returns sub-title padding style
     */
    getSubTitlePaddingStyle(): SpaceStyle | null;
    /**
     * Gets visibility of fill icon
     */
    getSubTitleIconVisible(): boolean;
    /**
     * Set the visibility of fill icon
     * @param visible The visibility of the curve name
     */
    setSubTitleIconVisible(visible: boolean): this;
    /**
     * Return sub-title icon preferred size
     */
    getSubTitleIconSize(): number;
    /**
     * Set sub-title icon preferred size
     * @param iconSize sub-title icon size
     */
    setSubTitleIconSize(iconSize: number): this;
    /**
     * Return sub-title icon icon border radius in device coordinates
     */
    getSubTitleIconRadius(): number;
    /**
     * Set sub-title icon preferred radius
     * @param iconRadius sub-title icon border radius in device coordinates
     */
    setSubTitleIconRadius(iconRadius: number): this;
    /**
     * Returns sub-title-icon vertical alignment
     */
    getSubTitleIconAlignment(): VerticalAlignment;
    /**
     * Set sub-title-icon vertical alignment
     * @param verticalAlignment sub-title vertical alignment
     */
    setSubTitleIconAlignment(verticalAlignment: VerticalAlignment | string): this;
    /**
     * Return sub-title preferred height
     */
    getSubTitlePreferredSize(): Range | null;
    /**
     * Set sub-title preferred height
     * @param min minimum height
     * @param min.min minimum height
     * @param min.max maximum height
     * @param max maximum height
     */
    setSubTitlePreferredSize(min: number | object | { min?: number | null; max?: number | null; }  | Range, max: number | null): this;
    /**
     * Sets sub-title icon margins style
     * @param marginsStyle margins style
     * @param marginsStyle.top top margins
     * @param marginsStyle.bottom bottom margins
     * @param marginsStyle.right right margins
     * @param marginsStyle.left left margins
     * @param merge true if you want to merge marginsStyle with existing attribute, false by default
     */
    setSubTitleIconMarginsStyle(marginsStyle: SpaceStyle | object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; }  | string, merge?: boolean): this;
    /**
     * Returns sub-title icon margins style
     */
    getSubTitleIconMarginsStyle(): SpaceStyle | null;
    /**
     * Return true if the representation is flipped horizontally
     */
    isHorizontalFlip(): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {title: {visible: boolean; alignment: HorizontalAlignment; size: {min: number | null; max: number | null}; padding: SpaceStyle | null}; subtitle: {textstyle: TextStyle | string | object; alignment: VerticalAlignment; size: {min: number | null; max: number | null}; padding: SpaceStyle | null; icon: {visible: boolean; alignment: VerticalAlignment; size: number; radius: number; margins: SpaceStyle | null}}} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.title title properties
     * @param properties.title.visible title visibility flag
     * @param properties.title.alignment title horizontal alignment
     * @param properties.title.size title preferred size
     * @param properties.title.size.min title minumum height
     * @param properties.title.size.max title maximum height
     * @param properties.title.padding title padding style
     * @param properties.title.padding.top title top padding
     * @param properties.title.padding.bottom title top padding
     * @param properties.title.padding.right title right padding
     * @param properties.title.padding.left title left padding
     * @param properties.subtitle sub-title properties
     * @param properties.subtitle.textstyle the sub-title text style
     * @param properties.subtitle.alignment sub-title vertical alignment
     * @param properties.subtitle.size sub-title preferred size
     * @param properties.subtitle.size.min sub-title minumum height
     * @param properties.subtitle.size.max sub-title maximum height
     * @param properties.subtitle.padding sub-title padding style
     * @param properties.subtitle.padding.top sub-title top padding
     * @param properties.subtitle.padding.bottom sub-title top padding
     * @param properties.subtitle.padding.right sub-title right padding
     * @param properties.subtitle.padding.left sub-title left padding
     * @param properties.subtitle.icon sub-title icon properties
     * @param properties.subtitle.icon.visible sub-title icon visibility flag
     * @param properties.subtitle.icon.alignment sub-title icon vertical alignment
     * @param properties.subtitle.icon.size sub-title icon preferred size
     * @param properties.subtitle.icon.radius sub-title icon 'radius'
     * This defines if the icon has rounded border corners. 'radius' is the length denoting a radius for the rounded border of each icon corner.
     * @param properties.subtitle.icon.margins sub-title icon margins style
     * @param properties.subtitle.icon.margins.top sub-title icon top margin
     * @param properties.subtitle.icon.margins.bottom sub-title icon top margin
     * @param properties.subtitle.icon.margins.right sub-title icon right margin
     * @param properties.subtitle.icon.margins.left sub-title icon left margin
     */
    setProperties(properties: object | { title?: object | { visible?: boolean; alignment?: HorizontalAlignment; size?: object | { min?: number | null; max?: number | null; }  | null; padding?: SpaceStyle | object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; }  | string; } ; subtitle?: object | { textstyle?: TextStyle | string | object; alignment?: VerticalAlignment; size?: object | { min?: number | null; max?: number | null; }  | null; padding?: SpaceStyle | object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; }  | string; icon?: object | { visible?: boolean; alignment?: VerticalAlignment; size?: number; radius?: number; margins?: SpaceStyle | object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; }  | string; } ; } ; } ): this;
}
