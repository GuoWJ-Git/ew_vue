import {FlippedComponentNode} from './FlippedComponentNode';
import {Group} from '../../scene/Group';
import {Node} from '../../scene/Node';
import {Rect} from '../../util/Rect';

/**
 * External geometry-based reusable component node extension.
 */
export class ExternalGeometryFlippedComponentNode extends FlippedComponentNode {
    /**
     * External geometry-based reusable component node extension.
     * @param options or externalGeometry geometry to define the component
     * @param options.externalgeometry or externalGeometry geometry to define the component
     * @param data JSON-data to define component
     * @param data.description component textual description
     * @param data.geometry component geometry (see {@link @int/geotoolkit/schematics/scene/RegularComponentNode.RegularComponentNode}'s "setGeometryData" for details)
     */
    constructor(options?: Group | object | { externalgeometry?: Group; } , data?: object | { description?: string; geometry?: any; } );
    /**
     * Sets properties
     * @param properties properties
     * @param properties.externalgeometry or externalGeometry geometry to define the component
     */
    setProperties(properties?: object | { externalgeometry?: Group; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {externalgeometry: Group} | any;
    /**
     * Gets template node.
     */
    getTemplateNode(): Node;
    /**
     * Gets template bounds
     */
    getTemplateBounds(): Rect;
    /**
     * Gets "resource-based" status.
     */
    isResourceBased(): boolean;
    /**
     * Sets "resource-based" status
     * @param resourceBased "resource-based" status
     */
    setResourceBased(resourceBased: boolean): this;
}
