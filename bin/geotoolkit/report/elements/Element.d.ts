import {Group} from '../../scene/Group';
import {IElement} from './IElement';
import {IWireElement} from './IWireElement';
import {ElementContent} from './ElementContent';
import {IElementRootContainer} from './IElementRootContainer';
import {Rect} from '../../util/Rect';
import {Transformation} from '../../util/Transformation';
import {Image} from '../../scene/shapes/Image';
import {ElementStyle} from './styles/ElementStyle';
import {Node} from '../../scene/Node';
import {LayoutStyle} from '../../layout/LayoutStyle';
import {Dimension} from '../../util/Dimension';
import {NodeParser} from '../parsers/NodeParser';
import {Element as DomElement} from '../dom/Element';

/**
 * Define representation of DOM element
 */
export class Element extends Group implements IElement, IWireElement {
    /**
     * Define representation of DOM element
     * @param options contentElement or properties object
     * @param options.contentelement contentElement
     */
    constructor(options?: ElementContent | object | { contentelement?: ElementContent; } );
    /**
     * Rebuild DOM layout
     * @param element element
     */
    static rebuildDomLayout(element: IElement): IElement;
    /**
     * Return element root container
     * @param element element
     */
    static getElementContainer(element: IElement): IElementRootContainer;
    /**
     * Rebuild element DOM layout
     */
    rebuildDomLayout(): IElement;
    /**
     * Update element from domElement
     * @param type event type
     * @param source event source
     * @param args argument args
     */
    protected onDomElementChanged(type: string, source: any, args: any): this;
    /**
     * Return array of transformations
     * @param bounds element bounds
     */
    protected getElementTransformations(bounds?: Rect | null): Transformation[] | null;
    /**
     * Export element to image (without rotation)
     * @param showWireBorder show wire border
     */
    exportToImage(showWireBorder?: boolean | null): Image;
    /**
     * @param adjustTransformation adjust transformation
     */
    protected setAdjustTransformation(adjustTransformation: Transformation): this;
    /**
     * Set element style
     * @param elementStyle element style
     * @param styleValue object of value for element style
     */
    setElementStyle(elementStyle: ElementStyle | string, styleValue?: object): this;
    /**
     * Return inner content element
     */
    getContentElement(): Node;
    /**
     * Calculate layout bounds
     * @param limits container limits
     * @param cssLayout element layout
     */
    protected getPreferredElementBounds(limits: Rect, cssLayout: LayoutStyle): Rect;
    /**
     * Return preferred layout
     * @param layout layout
     * @param layout.width width
     * @param layout.height height
     * @param layoutHints document print settings
     */
    getPreferredLayout(layout?: Rect | Dimension | object | { width?: number; height?: number; } , layoutHints?: object): object;
    /**
     * Rebuild layout
     */
    dropCache(): this;
    /**
     * Returns DOM element parser
     */
    getElementParser(): NodeParser;
    /**
     * Set DOM element parser
     * @param element DOM element parser
     */
    setElementParser(element: NodeParser): this;
    /**
     * Returns DOM element
     */
    getDomElement(): DomElement;
    /**
     * Set DOM element
     * @param element DOM element
     */
    setDomElement(element: DomElement): this;
    /**
     * Returns element style
     * @param elementStyle element style
     */
    getElementStyle(elementStyle?: ElementStyle): ElementStyle | string;
    /**
     * Set Wire mode
     * @param wireMode wire mode
     */
    setWireMode(wireMode: boolean): this;
    /**
     * Returns Wire mode
     */
    getWireMode(): boolean;
}
