import {ComponentNodeFactoryRegistry} from './ComponentNodeFactoryRegistry';

/**
 * Schematics components factory registry with extra {@link @int/geotoolkit/schematics/scene/MultiDiameterComponentNode.MultiDiameterComponentNode} elements
 */
export class MultiDiameterComponentFactoryRegistry extends ComponentNodeFactoryRegistry {
    /**
     * Schematics components factory registry with extra {@link @int/geotoolkit/schematics/scene/MultiDiameterComponentNode.MultiDiameterComponentNode} elements
     * @param setupDefaults if "false" then the registry is created empty
     * @param aliases components names aliases
     */
    constructor(setupDefaults?: boolean, aliases?: object);
    /**
     * Populates the factory registry with default mapping for component factories
     */
    setupDefaults(): this;
}
