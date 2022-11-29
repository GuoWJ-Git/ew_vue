import {AbstractNode} from './AbstractNode';
import {Transformation} from '../util/Transformation';

/**
 * Abstraction to formalize an input transformation adjustment
 */
export class ScaleScrollStrategy {
    /**
     * Abstraction to formalize an input transformation adjustment
     */
    constructor();
    /**
     * Adjusts input transformation
     * @param model model
     * @param newTr transformation to adjust
     */
    adjustTransformation(model: AbstractNode, newTr: Transformation): Transformation;
    /**
     * Gets properties
     */
    getProperties(): object | any;
    /**
     * Sets the projection properties
     * @param properties properties
     */
    setProperties(properties: object): this;
}
