/**
 * Loads a resource from disk and stores it into a cache
 */
export class ResourceLoader {
    /**
     * Loads a resource from disk and stores it into a cache
     */
    constructor();
    /**
     * Loads a text from the specified url and caches it. If was previously loaded then cache will be used instead
     * @param url resource url
     */
    static loadText(url: string): Promise<any>;
}
