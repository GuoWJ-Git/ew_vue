import {IViewModeBuilder} from './IViewModeBuilder';
import {Iterator} from '../../util/iterator';
import {Rect} from '../../util/Rect';

/**
 * Abstract builder for schematics non-regular view modes
 */
export class AbstractViewModeBuilder implements IViewModeBuilder {
    /**
     * Abstract builder for schematics non-regular view modes
     */
    constructor();
    /**
     * Sets options
     * @param options options
     */
    setOptions(options: object): this;
    /**
     * Sets up components bounds
     * @param srcDepths srcDepths
     * @param dstDepths dstDepths
     * @param it component nodes iterator
     * @param markerValueMin min marker value (for drawing)
     * @param markerValueMax max marker value (for drawing)
     */
    setupComponentNodesBounds(srcDepths: any[], dstDepths: any[], it: Iterator, markerValueMin: number, markerValueMax: number): void;
    /**
     * Builds view mode
     * @param it component nodes iterator
     * @param limits limits to layout components within
     */
    build(it: Iterator, limits: Rect): object;
    /**
     * Gets options
     */
    getOptions(): object | any;
    /**
     * Gets component-to-geometry map
     */
    getComponentToGeometryMap(): object;
}
