import {ComponentNodeFactoryRegistry} from './ComponentNodeFactoryRegistry';

/**
 * Schematics components factory registry extension to make use of gray-scale elements representation
 */
export class GrayScaleComponentFactoryRegistry extends ComponentNodeFactoryRegistry {
    /**
     * Schematics components factory registry extension to make use of gray-scale elements representation
     * @param setupDefaults if "false" then the registry is created empty
     * @param aliases components names aliases
     */
    constructor(setupDefaults?: boolean, aliases?: object);
    /**
     * Populates the factory registry with default mapping for component factories
     */
    setupDefaults(): this;
}
