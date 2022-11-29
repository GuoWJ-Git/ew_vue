import {Element} from '../Element';
import {FillStyle} from '../../../attributes/FillStyle';
import {LineStyle} from '../../../attributes/LineStyle';
import {SpaceStyle} from '../../../attributes/SpaceStyle';
import {LayoutStyle} from '../../../layout/LayoutStyle';
import {Orientation} from '../../../util/Orientation';

/**
 * Element is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly;
 * for example, inheriting the same set of methods, or being testable in the same way.<br>
 * <br>
 */
export class AbstractElement extends Element {
    /**
     * Element is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly;
     * for example, inheriting the same set of methods, or being testable in the same way.<br>
     * <br>
     * @param options The options
     * @param options.backgroundstyle background style
     * @param options.borderlinestyle border line style
     * @param options.marginstyle margin style
     * @param options.paddingstyle padding style
     * @param options.layoutstyle layout style
     * @param options.orientation orientation
     * @param options.flip flip
     */
    constructor(options?: object | { backgroundstyle?: FillStyle; borderlinestyle?: LineStyle; marginstyle?: SpaceStyle; paddingstyle?: SpaceStyle; layoutstyle?: LayoutStyle; orientation?: Orientation; flip?: boolean; } );
    /**
     * Set element visible state
     * @param visible element visibility flag
     */
    setVisible(visible: boolean | any): this;
    /**
     * Get element visible state
     */
    getVisible(): boolean | any;
    /**
     * Set element transform
     * @param transformOrigin transform origin
     * @param transformation transformations array
     */
    setElementTransform(transformOrigin: string | null, transformation?: string[][] | null): void;
    /**
     * Return transform origin
     */
    getTransformOrigin(): string | null;
    /**
     * Return array of transformation instructions
     */
    getElementTransform(): string[][] | null;
    /**
     * Sets layout style
     * @param layout layout style
     * @param merge true if you want to merge layoutStyle with existing attribute, false by default
     * @param silent silent setting
     */
    setLayoutStyle(layout?: LayoutStyle | any, merge?: boolean, silent?: boolean): this;
    /**
     * Return layout style
     */
    getLayoutStyle(): LayoutStyle | null;
    /**
     * Sets margins style
     * @param margins margins style
     * @param merge true if you want to merge marginsStyle with existing attribute, false by default
     */
    setMarginsStyle(margins?: SpaceStyle | any, merge?: boolean): this;
    /**
     * Return margins style
     */
    getMarginsStyle(): SpaceStyle | null;
    /**
     * Sets padding style
     * @param padding padding style
     * @param merge true if you want to merge paddingStyle with existing attribute, false by default
     */
    setPaddingStyle(padding?: SpaceStyle | any, merge?: boolean): this;
    /**
     * Return padding style
     */
    getPaddingStyle(): SpaceStyle | null;
    /**
     * Set background style
     * @param backgroundStyle background style
     * @param merge merge flag
     */
    setBackgroundStyle(backgroundStyle: FillStyle | string | any, merge: boolean): this;
    /**
     * Return background style
     */
    getBackgroundStyle(): FillStyle | null;
    /**
     * Sets border line style
     * Returns this
     * @param borderStyle line style or options
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setBorderLineStyle(borderStyle: LineStyle | string | any, merge?: boolean): this;
    /**
     * Return border line style
     */
    getBorderLineStyle(): LineStyle | null;
    /**
     * Return element layout orientation
     */
    getOrientation(): Orientation;
    /**
     * Set element layout orientation
     * @param orientation element layout orientation
     */
    setOrientation(orientation: Orientation): this;
    /**
     * Return element content flip flag
     */
    getFlip(): boolean;
    /**
     * Set element content flip orientation
     * @param flip element content flip
     */
    setFlip(flip: boolean): this;
    /**
     * Returns element page break
     */
    getPageBreak(): PageBreak | any;
    /**
     * Set element page break
     * @param pageBreak page break style
     */
    setPageBreak(pageBreak: PageBreak | any): this;
    /**
     * Gets the element properties
     */
    getProperties(): {backgroundstyle: FillStyle | any; borderlinestyle: LineStyle | any; marginstyle: SpaceStyle | any; paddingstyle: SpaceStyle | any; layoutstyle: LayoutStyle | any; orientation: Orientation; pagebreak: PageBreak | any; flip: boolean} | any;
    /**
     * Sets the element properties
     * @param props props
     * @param props.backgroundstyle background style
     * @param props.borderlinestyle border line style
     * @param props.marginstyle margin style
     * @param props.paddingstyle padding style
     * @param props.layoutstyle layout style
     * @param props.orientation orientation
     * @param props.flip flip
     * @param props.pagebreak page break
     */
    setProperties(props: object | { backgroundstyle?: FillStyle; borderlinestyle?: LineStyle; marginstyle?: SpaceStyle; paddingstyle?: SpaceStyle; layoutstyle?: LayoutStyle; orientation?: Orientation; flip?: boolean; pagebreak?: PageBreak; } ): this;
}
/**
 * Enum of page break
 */
export enum PageBreak {
    /**
     * Never page break
     */
    None = 'none',
    /**
     * Page break after element
     */
    After = 'after',
    /**
     * Page break before element
     */
    Before = 'before'
}
