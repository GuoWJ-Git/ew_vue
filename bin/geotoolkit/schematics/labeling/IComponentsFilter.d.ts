import {Iterator} from '../../util/iterator';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * Components filter interface
 */
export abstract class IComponentsFilter {
    /**
     * Gets iterator over filtered components
     * @param iterator input components iterator
     * @param context rendering context
     */
    abstract filterComponents(iterator: Iterator, context: RenderingContext): Iterator;
    /**
     * Resets itself
     * @param options options
     */
    abstract reset(options: any): this;
}
