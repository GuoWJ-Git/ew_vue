import {CompositeDocumentElement} from './CompositeDocumentElement';
import {Dimension} from '../../util/Dimension';

/**
 * Layout class that represents an AnnotatedLayout
 */
export class AnnotatedLayout {
    /**
     * Layout class that represents an AnnotatedLayout
     * @param parent parent document element of this layout
     */
    constructor(parent: CompositeDocumentElement);
    /**
     * Set the parent of this annotated layout.
     * @param parent parent document element of this layout
     */
    setParent(parent: CompositeDocumentElement): this;
    /**
     * Compute the dimension in the layout this dimension is represented by a fixed dimension and a scaled dimension.
     */
    getLayoutedDimension(): {fixed: Dimension | null; scaled: Dimension | null} | object;
    /**
     * update the position of elements in the layout
     */
    updateLayout(): void;
}
