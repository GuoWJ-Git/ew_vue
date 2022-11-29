/**
 * Simple factory
 */
export class SimpleFactory {
    /**
     * Simple factory
     */
    constructor();
    /**
     * Set componentName-to-nodeFactory link.
     * @param componentName component name associated with node factory
     * @param creationFunc method returning a ComponentNode implementation instance.
     */
    setFactory(componentName: string, creationFunc: Function): void;
    /**
     * Set componentName-to-nodeFactory link.
     * @param componentName component name associated with node factory
     * @param updateFunc method returning a ComponentNode implementation instance.
     */
    setUpdateFactory(componentName: string, updateFunc: Function): void;
    /**
     * Get instance of simple factory
     */
    static getInstance(): SimpleFactory;
}
