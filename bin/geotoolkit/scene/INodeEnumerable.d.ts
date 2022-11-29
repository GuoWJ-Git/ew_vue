/**
 * Define an interface to support a simple iteration over a nodes
 */
export abstract class INodeEnumerable {
    /**
     * Enumerate children nodes
     * @param callback callback
     * @param target target
     */
    abstract enumerateNodes(callback: Function, target: any): void;
}
