import {Element} from './Element';
import {AbstractNode} from '../../scene/AbstractNode';

/**
 */
export class ShapeElement extends Element {
    /**
     * @param options contentElement or properties object
     * @param options.contentelement contentElement
     */
    constructor(options?: AbstractNode | object | { contentelement?: AbstractNode; } );
}
