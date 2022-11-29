/**
 * Define resource interface
 */
export abstract class IResource {
    /**
     */
    abstract isReady(): boolean;
    /**
     * Load resource
     */
    abstract load(): Promise<any>;
}
