import {Dimension} from '../../util/Dimension';
import {CompositeDocumentElement} from './CompositeDocumentElement';

/**
 */
export class FreeLayout {
    /**
     * @param width 
     * @param height 
     */
    constructor(width: number, height: number);
    /**
     * compute the dimension in the layout this dimension is represented by a fixed dimension and a scaled dimension
     */
    getLayoutedDimension(): {fixed: Dimension; scaled: Dimension} | object;
    /**
     * set the parent
     * @param parent parent document for this layout
     */
    setParent(parent: CompositeDocumentElement): this;
    /**
     * update the position of elements in the layout
     */
    updateLayout(): void;
}
