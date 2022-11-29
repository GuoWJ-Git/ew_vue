import {DocumentRenderingContext} from '../../renderer/DocumentRenderingContext';
import {Point} from '../../util/Point';
import {Rect} from '../../util/Rect';

/**
 * Abstract parent class used for PDF output.
 */
export class AbstractDocumentElement {
    /**
     * Abstract parent class used for PDF output.
     */
    constructor();
    /**
     * Compute the dimension in the layout, this dimension is described by a fixed dimension and a scaled dimension
     */
    getLayoutedDimension(): any;
    /**
     * render the document in the context
     * @param context rendering context
     * @param position position of current document element relative to the parent document
     */
    render(context: DocumentRenderingContext, position: Point): void;
    /**
     * Render document in asynchronous mode. Default implementation creates call method "render" inside
     * @param context rendering context
     * @param position position of current document element relative to the parent document
     * @param callback callback function
     */
    renderAsync(context: DocumentRenderingContext, position: Point, callback: Function): void;
    /**
     * Used to restore object's state after exporting
     */
    endExport(): void;
    /**
     * Used to prepare object before exporting
     */
    beginExport(): void;
    /**
     * Set the document bounds
     * @param rect document bounds
     */
    updateLayout(rect?: Rect): void;
    /**
     * set the document scale depending of the parameters isScaledVertically and isScaledHorizontally
     * @param sx scale factor in x direction
     * @param sy scale factor in y direction
     */
    setScale(sx: number, sy: number): this;
    /**
     * set the document translation
     * @param x offset x coordinate
     * @param y offset y coordinate
     */
    setTranslation(x: number, y: number): this;
}
