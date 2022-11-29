import {ComponentNode} from '../scene/ComponentNode';

/**
 * Base schematics component node factory.
 */
export class AbstractComponentNodeFactory {
    /**
     * Base schematics component node factory.
     */
    constructor();
    /**
     * Creates component node and return it.
     * @param data to build the node of
     */
    createComponentNode(data: any): ComponentNode;
    /**
     * Validates geometry data. The implementation returns "true" always
     * @param geometryData geometry data to validate
     */
    validGeometryData(geometryData: any): boolean;
}
