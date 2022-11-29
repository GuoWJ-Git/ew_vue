import {AbstractDocumentElement} from './AbstractDocumentElement';
import {Group} from '../Group';
import {DocumentRenderingContext} from '../../renderer/DocumentRenderingContext';
import {Point} from '../../util/Point';
import {Rect} from '../../util/Rect';

/**
 * Document Element class that is used to layout the pdf document
 */
export class DocumentElement extends AbstractDocumentElement {
    /**
     * Document Element class that is used to layout the pdf document
     * @param node node
     * @param isScaledVertically flag to scale vertically
     * @param isScaledHorizontally flag to scale horizontally
     */
    constructor(node: Group, isScaledVertically: boolean, isScaledHorizontally: boolean);
    /**
     * Compute dimensions in the layout, this dimension is described by a fixed dimension and a scaled dimension
     */
    getLayoutedDimension(): any;
    /**
     * get the Element node
     */
    getNode(): Group;
    /**
     * get if the document element is scaled vertically
     */
    isScaledVertically(): boolean;
    /**
     * get if the document element is scaled horizontally
     */
    isScaledHorizontally(): boolean;
    /**
     * Render node in asynchronous mode. Default implementation creates call method "render" inside
     * @param context PdfRendering Context
     * @param position position of the current document relative to the parent document
     * @param callback callback function
     */
    renderAsync(context: DocumentRenderingContext, position: Point, callback: Function): void;
    /**
     * render the document in the context
     * @param context PdfRendering Context
     * @param position position of the current document relative to the parent document
     */
    render(context: DocumentRenderingContext, position: Point): void;
    /**
     * set the document translation
     * @param x offset x
     * @param y offset y
     */
    setTranslation(x: number, y: number): this;
    /**
     * set the document scale depending of the parameters isScaledVertically and isScaledHorizontally
     * @param sx scale factor in x
     * @param sy scale factor in y
     */
    setScale(sx: number, sy: number): this;
    /**
     * update the layout of the document
     * @param rect rect to layout area
     */
    updateLayout(rect: Rect): void;
}
