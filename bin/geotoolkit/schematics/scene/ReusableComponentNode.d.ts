import {ComponentNode} from './ComponentNode';
import {Node} from '../../scene/Node';
import {Rect} from '../../util/Rect';

/**
 * Abstract extension of basic schematics component node.
 * It is base class for {geotoolkit.schematics.scene.RegularComponentNode}
 * and {geotoolkit.schematics.scene.FlippedComponentNode} implementations.
 */
export class ReusableComponentNode extends ComponentNode {
    /**
     * Abstract extension of basic schematics component node.
     * It is base class for {geotoolkit.schematics.scene.RegularComponentNode}
     * and {geotoolkit.schematics.scene.FlippedComponentNode} implementations.
     * @param options An object containing the properties to set
     * @param options.parentproxy parent proxy
     */
    constructor(options?: object | { parentproxy?: any; } );
    /**
     * Gets graphical styles associated with it.
     */
    getStyles(): any[];
    /**
     * Gets template node
     */
    getTemplateNode(): Node;
    /**
     * Gets template bounds
     */
    getTemplateBounds(): Rect;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {parentproxy: any} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.parentproxy parent proxy
     */
    setProperties(properties: object | { parentproxy?: any; } ): this;
}
