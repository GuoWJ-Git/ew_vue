import {PatternService} from './PatternService';
import {Pattern} from './Pattern';
import {Group} from '../scene/Group';

/**
 * Service to provide reusable patterns
 */
export class PatternFactory {
    /**
     * Service to provide reusable patterns
     */
    constructor();
    /**
     * add a new category
     * @deprecated since 2021.1 (3.3)
     * @param categoryName name of category
     */
    add(categoryName: string): PatternService;
    /**
     * return an array with all the categories
     */
    getCategories(): string[];
    /**
     * return the service if exist otherwise null
     * @deprecated since 2021.1 (3.3)
     * @param categoryName unique name of category of patterns
     */
    getCategory(categoryName: string): PatternService | any;
    /**
     * remove a category
     * @deprecated since 2021 (3.2)
     * @param name name of the Pattern
     */
    remove(name: string): void;
    /**
     * Removes a category
     * @param name name of the Pattern
     */
    removeCategory(name: string): void;
    /**
     * Remove all patterns and categories
     */
    clear(): void;
    /**
     * Simply creates pattern by source without registering at factory
     * @param src image src
     * @param options pattern object, image url, image from DOM element or the image patterns options
     * @param options.userhandle additional info associated with current image pattern
     * @param options.url or url of the image to load
     * @param options.rawsize using image raw size
     * @param options.scalable Flag that sets scalability of the pattern
     * @param options.desiredWidth desired image width
     * @param options.desiredHeight desired image height
     */
    createPattern(src: Pattern | Group | HTMLImageElement | string, options?: object | { userhandle?: any; url?: string; rawsize?: boolean; scalable?: boolean; desiredWidth?: number; desiredHeight?: number; } ): Pattern;
    /**
     * Adds a new pattern with the specified options and registers it on factory. Requires pattern name
     * note: if the pattern already exist it will override it.
     * @param src image src
     * @param options pattern options or pattern name.
     * @param options.name name of the pattern
     * @param options.category pattern category
     * @param options.userhandle additional info associated with current image pattern
     * @param options.rawsize using image raw size. for string src type only
     * @param options.scalable Flag that sets scalability of the pattern
     * @param options.desiredWidth desired image width. for string src type only
     * @param options.desiredHeight desired image height. for string src type only
     */
    addPattern(src: Group | HTMLImageElement | string, options: object | { name?: string; category?: string; userhandle?: any; rawsize?: boolean; scalable?: boolean; desiredWidth?: number; desiredHeight?: number; }  | string): Pattern;
    /**
     * Removes a pattern from this service
     * @param name pattern name
     * @param category category name
     */
    removePattern(name: string, category?: string): void;
    /**
     * Returns the pattern of specific category and name. Creates a new one if it doesn't exist
     * @param name pattern name
     * @param category category name
     */
    getPattern(name: string, category?: string): Pattern | null;
    /**
     * Return the list of pattern names contained in all or specific category
     * @param category category name
     */
    getNames(category?: string): string[];
    /**
     * Returns all image patterns contained in all or specific category
     * @param category category name
     */
    getPatterns(category?: string): Pattern[];
    /**
     * Adds pattern alias to a specific or default category
     * @param base original pattern name
     * @param alias name(s) of the original name
     * @param category category name
     */
    addAlias(base: string, alias: string | string[], category?: string): void;
    /**
     * Removes a pattern alias from specific or default category
     * @param alias name
     * @param category category name
     */
    removeAlias(alias: string, category?: string): void;
    /**
     * Removes all or specified category aliases
     * @param category category name
     */
    clearAliases(category?: string): void;
    /**
     * Returns instance of the registry
     */
    static getInstance(): PatternFactory;
}
