import {RegularComponentNode} from './RegularComponentNode';
import {Group} from '../../scene/Group';
import {Node} from '../../scene/Node';
import {Rect} from '../../util/Rect';

/**
 * External geometry-based reusable component node extension.
 */
export class ExternalGeometryComponentNode extends RegularComponentNode {
    /**
     * External geometry-based reusable component node extension.
     * @param options or externalGeometry geometry to define the component
     * @param options.externalgeometry geometry to define the component
     * @param options.asymmetry asymmetry options
     * @param options.asymmetry.left asymmetry on left side
     * @param options.asymmetry.top asymmetry on top
     * @param options.asymmetry.right asymmetry on right side
     * @param options.asymmetry.bottom asymmetry on bottom
     * @param data JSON-data to define component
     * @param data.description component textual description
     * @param data.geometry component geometry (see {@link @int/geotoolkit/schematics/scene/RegularComponentNode.RegularComponentNode}'s "setGeometryData" for details)
     * @param asymmetry asymmetry options
     * @param asymmetry.left asymmetry on left side
     * @param asymmetry.top asymmetry on top
     * @param asymmetry.right asymmetry on right side
     * @param asymmetry.bottom asymmetry on bottom
     */
    constructor(options?: Group | object | { externalgeometry?: Group; asymmetry?: object | { left?: string | number; top?: string | number; right?: string | number; bottom?: string | number; } ; } , data?: object | { description?: string; geometry?: any; } , asymmetry?: object | { left?: string | number; top?: string | number; right?: string | number; bottom?: string | number; } );
    /**
     * Sets properties
     * @param properties properties
     * @param properties.externalgeometry geometry to define the component
     * @param properties.asymmetry asymmetry options
     * @param properties.asymmetry.left asymmetry on left side
     * @param properties.asymmetry.top asymmetry on top
     * @param properties.asymmetry.right asymmetry on right side
     * @param properties.asymmetry.bottom asymmetry on bottom
     */
    setProperties(properties?: object | { externalgeometry?: Group; asymmetry?: object | { left?: string | number; top?: string | number; right?: string | number; bottom?: string | number; } ; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {externalgeometry: Group; asymmetry: {left: string | number; top: string | number; right: string | number; bottom: string | number}} | any;
    /**
     * Gets template node (there: external geometry)
     */
    getTemplateNode(): Node;
    /**
     * Gets template bounds (there: external geometry's model limits)
     */
    getTemplateBounds(): Rect;
    /**
     * Gets "resource-based" status
     */
    isResourceBased(): boolean;
    /**
     * Sets "resource-based" status
     * @param resourceBased "resource-based" status
     */
    setResourceBased(resourceBased: boolean): this;
}
