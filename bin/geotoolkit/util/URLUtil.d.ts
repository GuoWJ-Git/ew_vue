/**
 * Defines helper methods to work with URL
 */
export class URLUtil {
    /**
     * Defines helper methods to work with URL
     */
    constructor();
    /**
     * Return host URL from document location
     */
    static getHost(): string;
    /**
     * Return base host URL from document location
     */
    static getBaseHost(): string;
    /**
     * Compress integer array by creating difference array and use RLE
     * @param data input array
     */
    static compressArray(data: number[]): string;
    /**
     * @param url URL to decompress
     */
    static decompressToArray(url: string): number[];
}
