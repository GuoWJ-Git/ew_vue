import {ComponentNode} from '../scene/ComponentNode';
import {AnchorType} from '../../util/AnchorType';

/**
 * Label data structure to use by a LabelingStrategy.
 */
export class LabelData {
    /**
     * Label data structure to use by a LabelingStrategy.
     * @param parameters options to initialize the strategy
     * @param parameters.node component node to label
     * @param parameters.nodeInfo the node information
     * @param parameters.anchorType anchor type
     * @param parameters.xLabel label x-position
     * @param parameters.yLabel label y-position
     * @param parameters.xConnector connector x-position
     * @param parameters.yConnector connector y-position
     */
    constructor(parameters: object | { node: ComponentNode; nodeInfo?: string; anchorType?: AnchorType; xLabel?: number; yLabel?: number; xConnector?: any[]; yConnector?: any[]; } );
}
