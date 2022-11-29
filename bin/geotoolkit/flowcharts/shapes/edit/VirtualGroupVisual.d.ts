import {DiagramVisual} from '../DiagramVisual';
import {Node} from '../../../scene/Node';

/**
 * Class for group operations on shapes.
 * This is virtual group, and used only for logical selection and manipulations
 * over visuals
 */
export class VirtualGroupVisual extends DiagramVisual {
    /**
     * Class for group operations on shapes.
     * This is virtual group, and used only for logical selection and manipulations
     * over visuals
     * @param options 
     */
    constructor(options?: object);
    /**
     * Sets shapes array to the group
     * @param shapes the shapes to operate
     */
    setShapes(shapes: Node[]): this;
    /**
     * Tes shapes being operated by the virtual group
     */
    getShapes(): Node[] | any;
}
