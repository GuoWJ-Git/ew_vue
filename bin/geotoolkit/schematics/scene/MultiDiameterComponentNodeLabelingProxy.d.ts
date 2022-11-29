import {ComponentNode} from './ComponentNode';
import {MultiDiameterComponentNode} from './MultiDiameterComponentNode';
import {Rect} from '../../util/Rect';

/**
 * The proxy is intended for internal use only
 * @deprecated (since 2021.1 (3.2))
 */
export class MultiDiameterComponentNodeLabelingProxy extends ComponentNode {
    /**
     * The proxy is intended for internal use only
     * @param nodeMultiDiameter parent MultiDiameterComponentNode
     * @param index parent node's range index
     * @param isCompressed compressed flag
     */
    constructor(nodeMultiDiameter: MultiDiameterComponentNode, index: number, isCompressed: boolean);
    /**
     * Gets its multi-diameter component
     */
    getMultiDiameterComponentNode(): MultiDiameterComponentNode;
    /**
     * Return visibility of the node (meaning: visibility of the underlying MD-component).
     */
    getVisible(): boolean;
    /**
     * Sets selected state
     * @param selected selected state
     */
    setSelected(selected: boolean): this;
    /**
     * Gets selected state
     */
    getSelected(): boolean;
    /**
     * Gets underlying MultiDiameterComponentNode's identifier
     */
    getId(): number | string;
    /**
     * Gets underlying MultiDiameterComponentNode's name
     */
    getName(): string;
    /**
     * Gets description (Convenience method)
     * @param deepCopy a flag indicating if the data should be fully copied before returning or not
     */
    getDescription(deepCopy?: boolean): string | null;
    /**
     * Gets graphical styles associated with its underlying reusable component node.
     * (Not used in Labeling procedure)
     */
    getStyles(): any[];
    /**
     * Get the node bounds.
     */
    getBounds(): Rect;
}
