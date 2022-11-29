import {Iterator} from '../../util/iterator';
import {Rect} from '../../util/Rect';

/**
 * Schematics view mode builder interface
 */
export abstract class IViewModeBuilder {
    /**
     * Builds view mode
     * @param it component nodes iterator
     * @param limits limits to layout components within
     */
    abstract build(it: Iterator, limits: Rect | null): object | null;
    /**
     * Gets options
     */
    abstract getOptions(): object | any;
    /**
     * Sets options
     * @param options options
     */
    abstract setOptions(options: object): this;
    /**
     * Gets component-to-geometry map
     */
    abstract getComponentToGeometryMap(): object;
}
