/**
 * Defines the utility class that returns browser info
 */
export class BrowserInfo {
    /**
     * Defines the utility class that returns browser info
     */
    constructor();
    /**
     * if IE browser
     */
    static isIE(): boolean;
    /**
     * if Edge browser
     */
    static isEdge(): boolean;
    /**
     * if Chrome browser
     */
    static isChrome(): boolean;
    /**
     * if Firefox browser
     */
    static isFirefox(): boolean;
    /**
     * if Opera browser
     */
    static isOpera(): boolean;
    /**
     * if Safari browser
     */
    static isSafari(): boolean;
    /**
     * if iOS's browser
     */
    static isIOS(): boolean;
    /**
     * Version
     */
    static getVersion(): string;
    /**
     * Language
     */
    static getLanguage(): string;
    /**
     * if PlatformPreview
     */
    static isPlatformPreview(): boolean;
    /**
     * if PlatformPreview6Plus
     */
    static isPPB6(): boolean;
    /**
     * if PlatformPreview6Plus
     */
    static supportWasm(): boolean;
    /**
     * if using browser
     */
    static isUsingBrowser(): boolean;
}
