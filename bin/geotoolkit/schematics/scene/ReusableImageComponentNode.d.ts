import {RegularComponentNode} from './RegularComponentNode';
import {Node} from '../../scene/Node';
import {Rect} from '../../util/Rect';

/**
 * Image-based reusable component node extension.
 * @example
 * ```javascript
 * // This example shows how to use an image(INT logo) as a custom component.
 * // Register the factory to be customized
 * import {ComponentNodeFactoryRegistry} from '@int/geotoolkit/schematics/factory/ComponentNodeFactoryRegistry';
 * import {WellBoreData} from '@int/geotoolkit/schematics/data/WellBoreData';
 * import {WellBoreNode} from '@int/geotoolkit/schematics/scene/WellBoreNode';
 * import {ReusableImageComponentNode} from '@int/geotoolkit/schematics/scene/ReusableImageComponentNode';
 * const componentName = 'MySimpleComponent';
 * const factoryRegistry = new ComponentNodeFactoryRegistry();
 * factoryRegistry.setFactory(componentName, () => new ReusableImageComponentNode('./int.png'));
 * // data:
 * const wellBoreData = new WellBoreData();
 * wellBoreData.addComponent(componentName, {
 *        'geometry': {
 *            'depth': {'from': 50, 'to': 100},
 *            'diameter': {'outer': 50}
 *        }
 * });
 * // shape:
 * const wellBoreShape = new WellBoreNode({
 *        'data': wellBoreData,
 *        'registry': factoryRegistry
 * });
 * ```
 */
export class ReusableImageComponentNode extends RegularComponentNode {
    /**
     * Image-based reusable component node extension.
     * @param options options or image URL
     * @param options.url image URL
     */
    constructor(options?: string | object | { url?: string; } );
    /**
     * Sets properties
     * @param properties properties
     * @param properties.url image URL
     */
    setProperties(properties?: object | { url?: string; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {url: string} | any;
    /**
     * Gets template node
     */
    getTemplateNode(): Node;
    /**
     * Gets template bounds
     */
    getTemplateBounds(): Rect;
}
