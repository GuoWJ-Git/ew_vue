import {CompositeNode} from '../../scene/CompositeNode';
import {DeviatedCompositeNode} from './DeviatedCompositeNode';
import {AnchorType} from '../../util/AnchorType';
import {Node} from '../../scene/Node';
import {Iterator} from '../../util/iterator';
import {Transformation} from '../../util/Transformation';

/**
 */
export class DeviatedHeader extends CompositeNode {
    /**
     * @param options options
     * @param options.deviatednode deviated node
     * @param options.alignment anchor type (default meaning: "header")
     * @param options.depth may be used to explicitely set header's depth position
     * @param options.height height pixels (along trajectory)
     * @param options.offset offset pixels (along trajectory)
     * @param options.children the child nodes to be added
     */
    constructor(options: object | { deviatednode: DeviatedCompositeNode; alignment?: AnchorType; depth?: number; height?: number; offset?: number; children?: Node | Node[] | Iterator; } );
    /**
     * @param localTransform local transformation for this node
     */
    setLocalTransform(localTransform: Transformation): this;
}
