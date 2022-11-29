import {Node} from '../../scene/Node';
import {IWellBehavior} from './IWellBehavior';

/**
 * Provide a standard behavior for wells and tracks
 */
export class WellBehaviorRegistry {
    /**
     * Provide a standard behavior for wells and tracks
     */
    constructor();
    /**
     * Returns behavior associated with type of node
     * @param node specified visual
     */
    getBehavior(node: Node): IWellBehavior | any;
    /**
     * Returns behavior associated with class name
     * @param className class name for visual
     */
    getBehaviorByClassName(className: string): IWellBehavior;
    /**
     * Sets header helper
     * @param className class name for visual
     * @param behavior behavior for the specified class name
     */
    registerBehavior(className: string, behavior: IWellBehavior): this;
    /**
     * Return default instance of the geotoolkit.welllog.multiwell.WellBehaviorRegistry
     */
    static getDefaultInstance(): WellBehaviorRegistry;
}
