import {CompositeDocumentElement} from './CompositeDocumentElement';
import {LinearLocation} from './LinearLocation';
import {Dimension} from '../../util/Dimension';

/**
 */
export class LinearLayout {
    /**
     * @param parent 
     * @param orientation 'horizontal' or 'vertical'
     */
    constructor(parent: CompositeDocumentElement, orientation: LinearLocation);
    /**
     * set the parent
     * @param parent parent
     */
    setParent(parent: CompositeDocumentElement): this;
    /**
     * set the layout orientation
     * @param orientation layout orientation
     */
    setOrientation(orientation: LinearLocation): this;
    /**
     * compute the dimension in the layout this dimension is represented by a fixed dimension and a scaled dimension
     */
    getLayoutedDimension(): {fixed: Dimension; scaled: Dimension} | object;
    /**
     * update the position of elements in the layout
     * @param printSettings printSettings
     */
    updateLayout(printSettings: object): void;
}
