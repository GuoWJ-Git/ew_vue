import {CompositeDocumentElement} from './CompositeDocumentElement';
import {DocumentElement} from './DocumentElement';
import {AbstractPaperFormat} from './AbstractPaperFormat';
import {Transformation} from '../../util/Transformation';
import {Point} from '../../util/Point';
import {Node} from '../Node';
import {AbstractDocumentElement} from './AbstractDocumentElement';
import {Rect} from '../../util/Rect';

/**
 * Define context to be pass to check if page header or footer should be drawn
 */
export class PageContext {
    /**
     * Define context to be pass to check if page header or footer should be drawn
     * @param root Root document
     * @param pageInfo page info
     * @param pageInfo.Margin JSON Object
     * @param pageInfo.Margin.Top Top margin
     * @param pageInfo.Margin.Bottom Bottom margin
     * @param pageInfo.Margin.Left Left margin
     * @param pageInfo.Margin.Right Right margin
     * @param pageInfo.Page page
     * @param pageInfo.currentPage current page
     * @param pageInfo.numberPage amount of pages
     * @param pageTransformation page transformation
     * @param position position of the current page relative to the parent document
     */
    constructor(root: CompositeDocumentElement | DocumentElement, pageInfo: object | { Margin?: object | { Top?: number; Bottom?: number; Left?: number; Right?: number; } ; Page?: AbstractPaperFormat; currentPage?: number; numberPage?: number; } , pageTransformation: Transformation, position: Point);
    /**
     * Returns page info
     */
    getPageInfo(): {Margin: {Top: number; Bottom: number; Left: number; Right: number}; Page: AbstractPaperFormat; currentPage: number; numberPage: number} | object;
    /**
     * Return page element
     * @param element exported element
     */
    getPageElement(element: Node): AbstractDocumentElement | null;
    /**
     * Return page element bounds
     * @param element exported element
     */
    getElementBounds(element: Node): Rect | null;
    /**
     * Checks if the provided exported element in this page
     * @param element exported element
     */
    containsElement(element: Node): boolean;
    /**
     * Return model page area
     */
    getPageModelRect(): Rect;
    /**
     * Get root document
     */
    getRoot(): CompositeDocumentElement | DocumentElement;
    /**
     * Returns page transformation
     */
    getPageTransformation(): Transformation;
    /**
     * Returns position transfprmation
     */
    getPositionTransform(): Transformation;
    /**
     * Return position of the current page relative to the parent document
     */
    getPosition(): Point;
}
