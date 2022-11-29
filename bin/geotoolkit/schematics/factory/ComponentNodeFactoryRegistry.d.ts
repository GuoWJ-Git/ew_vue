import {EventDispatcher} from '../../util/EventDispatcher';
import {AbstractComponentNodeFactory} from './AbstractComponentNodeFactory';

/**
 * Schematics components factory registry
 */
export class ComponentNodeFactoryRegistry extends EventDispatcher {
    /**
     * Schematics components factory registry
     * @param setupDefaults when "false" the registry is created empty
     * @param aliases components names aliases
     */
    constructor(setupDefaults?: boolean, aliases?: object);
    /**
     * Gets aliases map<br>
     * Note that a copy of aliases map is returned.
     */
    getAliases(): any;
    /**
     * Sets component name(s) aliases map
     * @param jsonNamesToAliases aliases
     * @param extendExisting extend existing overlapping mapping nodes flag;
     * "false" stands for replacing existing mapping nodes if overlapped
     */
    setAliases(jsonNamesToAliases: any, extendExisting?: boolean): this;
    /**
     * Clears the content.
     */
    clear(): this;
    /**
     * Populates the factory registry with default mapping for component factories
     */
    setupDefaults(): this;
    /**
     * Set componentName-to-nodeFactory link.
     * @param componentName component name associated with node factory
     * @param parameter2 node factory OR method returning a ComponentNode implementation instance.
     * @param parameter3 method to validate component geometry data
     */
    setFactory(componentName: string, parameter2: AbstractComponentNodeFactory | Function, parameter3?: Function): this;
    /**
     * Checks if componentName is associatedwith a node factory
     * @param componentName component name associated with node factory
     */
    containsFactory(componentName: string): boolean;
    /**
     * Gets node factory associated with the componentName passed.
     * Return null if  node factory not found.
     * @param componentName component name associated with node factory
     */
    getFactory(componentName: string): AbstractComponentNodeFactory;
    /**
     * Gets array of registered component names
     */
    getRegisteredComponents(): any[];
    /**
     * Sets componentName-to-componentFactory mapping.
     * @example
     * ```javascript
     * factoryRegistry.setMapping([
     *     { name: 'MyComponent1', factory: new MyComponent1Factory()},
     *     { name: 'MyComponent2', factory: new MyComponent2Factory()},
     *     //...
     * ]);
     * ```
     * @param mapping array of pairs as follows:
     * { name: {string} componentName, factory: {geotoolkit.schematics.factory.AbstractComponentNodeFactory} componentFactory }
     */
    setMapping(mapping: any[]): this;
}
