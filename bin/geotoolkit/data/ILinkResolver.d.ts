/**
 * Define resolver of the links
 */
export class ILinkResolver {
    /**
     * Define resolver of the links
     */
    constructor();
    /**
     * Accept data link
     * @param data data link
     */
    accept(data: string): boolean;
    /**
     * Resolve data link
     * @param data data link
     */
    resolve(data: string): void;
}
