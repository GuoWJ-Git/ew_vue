import {Pattern} from './Pattern';
import {Group} from '../scene/Group';

/**
 * Service to provide patterns
 * @deprecated since 2021.1 (3.3) use geotoolkit.attributes.PatternFactory instead
 */
export class PatternService {
    /**
     * Service to provide patterns
     * @param options options
     * @param options.name name of the container of patterns
     * @param options.timeout timeout for image loading
     */
    constructor(options: object | { name?: string; timeout?: number; }  | string);
    /**
     * Returns this pattern service name
     */
    getName(): string;
    /**
     * Returns all image patterns contained in this service
     */
    getPatterns(): Pattern[];
    /**
     * Adds pattern alias
     * @param base original pattern name
     * @param alias name(s) of the original name
     */
    addAlias(base: string, alias: string | string[]): void;
    /**
     * Returns the pattern of specific name
     * @param name of the pattern
     */
    getPattern(name: string): Pattern | null;
    /**
     * Returns the pattern of specific name
     * @param name of the pattern
     */
    getImagePattern(name: string): Pattern;
    /**
     * Adds a new pattern with the specified pattern image.
     * note: if the pattern already exist it will override it.
     * This method specifies pattern name and container for registered pattern
     * @param name name of the pattern
     * @param pattern image from DOM element or The image patterns options or img url
     * @param pattern.src image from DOM element
     * @param pattern.userhandle additional info associated with current image pattern
     * @param pattern.url or url of the image to load
     * @param pattern.rawsize using image raw size
     * @param pattern.containername an optional container name, which creates an image pattern. This
     * parameter is used for serialization if you want to save are reference to pattern instead of the pattern itself
     * @param pattern.scalable Flag that sets scalability of the pattern
     * @param pattern.desiredWidth desired image width
     * @param pattern.desiredHeight desired image height
     */
    addImagePattern(name: string, pattern?: HTMLImageElement | object | { src?: HTMLImageElement; userhandle?: any; url?: string; rawsize?: boolean; containername?: string; scalable?: boolean; desiredWidth?: number; desiredHeight?: number; }  | string): Pattern;
    /**
     * Returns a promise which gets all the patterns
     */
    getAll(): Promise<any>;
    /**
     * Return the list of pattern names
     */
    getNames(): string[];
    /**
     * Return a promise which gets data urls of all patterns
     */
    getDataURLs(): Promise<any>;
    /**
     * Returns a promise which gets width of all patterns
     */
    getWidths(): Promise<any>;
    /**
     * Returns a promise which gets height of all patterns
     */
    getHeights(): Promise<any>;
    /**
     * Creates a new pattern with the specified options
     * @param pattern pattern object, image url, image from DOM element or the image patterns options
     * @param pattern.src image from DOM element
     * @param pattern.userhandle additional info associated with current image pattern
     * @param pattern.url or url of the image to load
     * @param pattern.rawsize using image raw size
     * @param pattern.containername an optional container name, which creates an image pattern. This
     * parameter is used for serialization if you want to save are reference to pattern instead of the pattern itself
     * @param pattern.scalable Flag that sets scalability of the pattern
     * @param pattern.desiredWidth desired image width
     * @param pattern.desiredHeight desired image height
     */
    createPattern(pattern?: Pattern | Group | HTMLImageElement | object | { src?: HTMLImageElement; userhandle?: any; url?: string; rawsize?: boolean; containername?: string; scalable?: boolean; desiredWidth?: number; desiredHeight?: number; }  | string): Pattern;
    /**
     * Adds a new pattern with the specified pattern image.
     * note: if the pattern already exist it will override it.
     * This method specifies pattern name and container for registered pattern
     * @param name name of the pattern
     * @param pattern see {@link @int/geotoolkit/attributes/PatternFactory.PatternFactory#createPattern}
     */
    addPattern(name: string, pattern?: Pattern | Group | HTMLImageElement | object | string): Pattern;
    /**
     * Adds a new pattern with the specified pattern image.
     * note: if the pattern already exist it will override it.
     * This method specifies pattern name and container for registered pattern
     * @param name name of the pattern
     * @param pattern pattern object or image url
     */
    add(name: string, pattern: Pattern | string): Pattern;
    /**
     * Removes a pattern from this service
     * @param name name of the pattern
     */
    remove(name: string): void;
    /**
     * Removes a pattern from this service
     * @param name name of the pattern
     */
    removePattern(name: string): void;
    /**
     * Removes a pattern alias
     * @param alias name
     */
    removeAlias(alias: string): void;
    /**
     * Removes all aliases
     */
    clearAliases(): void;
    /**
     * Removes all patterns and aliases
     */
    clear(): void;
}
