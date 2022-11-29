import {ComponentNode} from './ComponentNode';
import {Layer} from '../../scene/Layer';

/**
 * Basic multi-diameter component node.
 */
export class MultiDiameterComponentNode extends ComponentNode {
    /**
     * Basic multi-diameter component node.
     * @param options options
     */
    constructor(options?: object);
    /**
     * Initializes component shapes based on regular or compressed data
     * calculated by active view mode
     * @deprecated since 2021.1 (3.3)
     * @param geometry calculated geometry data or an array of geometry data
     */
    initializeGeometry(geometry: object | any[]): void;
    /**
     */
    protected getShapesLayer(): Layer;
    /**
     */
    protected getRangesLayer(): Layer;
    /**
     */
    protected getInnerRangesLayer(): Layer;
    /**
     */
    protected getLeftRangesLayer(): Layer;
    /**
     */
    protected getRightRangesLayer(): Layer;
    /**
     * Gets component's textual description. <br>
     * The returned string contains description (if available, name otherwise),
     * plus geometry information: 'depth' ('from' and 'to'), as well as 'diameter' ('outer' and 'inner')
     */
    toString(): string;
    /**
     * Validates geometry data.
     * @param geometryData geometry object or an array of such objects
     */
    validGeometryData(geometryData: object | any[]): boolean;
}
