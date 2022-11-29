import {AbstractDocumentElement} from './AbstractDocumentElement';
import {ILayoutable} from '../../layout/ILayoutable';
import {AnnotatedLayout} from './AnnotatedLayout';
import {LinearLayout} from './LinearLayout';
import {Layout} from '../../layout/Layout';
import {IExportable} from './IExportable';
import {DocumentElement} from './DocumentElement';
import {DocumentRenderingContext} from '../../renderer/DocumentRenderingContext';
import {Point} from '../../util/Point';
import {FreeLayout} from './FreeLayout';
import {Rect} from '../../util/Rect';
import {LayoutStyle} from '../../layout/LayoutStyle';

/**
 * CompositeDocumentElement class contains layouts as children for PDF rendering
 */
export class CompositeDocumentElement extends AbstractDocumentElement implements ILayoutable {
    /**
     * CompositeDocumentElement class contains layouts as children for PDF rendering
     * @param list of {geotoolkit.scene.exports.AbstractDocumentElement}
     * DocumentElement
     * @param layout layout of elements
     */
    constructor(list: AbstractDocumentElement[], layout?: AnnotatedLayout | LinearLayout | Layout);
    /**
     * Add DocumentElement as child
     * @param child Document Element
     */
    addChild(child: AbstractDocumentElement | IExportable): AbstractDocumentElement;
    /**
     * Set child at specific index
     * @param index index where to set the child
     * @param child Document Element
     */
    setChild(index: number, child: AbstractDocumentElement): this;
    /**
     * Add child at specific index
     * @param index index where to insert the child
     * @param child Document Element
     */
    insertChildAtIndex(index: number, child: DocumentElement): void;
    /**
     * Clear all children
     */
    clearChild(): void;
    /**
     * Get child at index.
     * @param index index where to get the child
     */
    getChild(index: number): AbstractDocumentElement | null;
    /**
     * Get the number of children in the composite document element.
     */
    getChildrenCount(): number;
    /**
     * Get index of a specified element.
     * @param element document element
     */
    getIndex(element: DocumentElement): number;
    /**
     * Gets the list of children.
     */
    getList(): any[];
    /**
     * Compute dimensions in the layout, this dimension is described by a fixed dimension and a scaled dimension.
     */
    getLayoutedDimension(): object;
    /**
     * Render the document in the context.
     * @param context rendering context
     * @param position position of the current document relative to the parent document
     */
    render(context: DocumentRenderingContext, position: Point): void;
    /**
     * set the layout
     * @param layout current layout
     */
    setLayout(layout: AnnotatedLayout | LinearLayout | Layout | FreeLayout): this;
    /**
     * set the document scale depending of the parameters isScaledVertically and isScaledHorizontally
     * @param sx scale factor if scaledVertically
     * @param sy scale factor if ScaledHorizontally
     */
    setScale(sx: number, sy: number): this;
    /**
     * set the document translation
     * @param x offset x coordinate
     * @param y offset y coordinate
     */
    setTranslation(x: number, y: number): this;
    /**
     * Return preferred size to layout children
     * @param rect layout area of document
     */
    getPreferredSize(rect?: Rect): Rect | null;
    /**
     * Sets bounds of the document if it is a part of layout
     * @param bounds bound of the node
     */
    setBounds(bounds: Rect): this;
    /**
     * Return bounds
     */
    getBounds(): Rect;
    /**
     * Specify desired layout style
     * @param layoutStyle desired layout style
     */
    setLayoutStyle(layoutStyle: LayoutStyle | object): this;
    /**
     * Return desired layout style
     */
    getLayoutStyle(): LayoutStyle;
    /**
     * update the layout of the document
     * @param rect layout area of document
     */
    updateLayout(rect?: Rect): void;
}
