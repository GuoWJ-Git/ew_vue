import {Stream} from './Stream';

/**
 * Defines representation memory string stream
 */
export class StringStream extends Stream {
    /**
     * Defines representation memory string stream
     * @param features optional. A comma-separated list of items, no whitespaces, see https://www.w3schools.com/jsref/met_win_open.asp
     */
    constructor(features?: string);
    /**
     * Returns window features
     */
    getWindowFeatures(): string;
    /**
     * Sets window features
     * @param features a comma-separated list of items, no whitespaces, see https://www.w3schools.com/jsref/met_win_open.asp
     */
    setWindowFeatures(features: string | any): this;
    /**
     * write the data into the file
     * @param str string to be saved
     */
    out(str: string): number;
    /**
     * Set saving options
     * @param options options
     * @param options.filename full filename
     * @param options.type type
     * @param options.onError error callback
     * @param options.popupBlockedMessage message to alert if popup-blocker blocked opening file
     * @param options.save flag to save data directly to file or open dialog
     */
    setSaveOptions(options?: object | { filename?: string; type?: string; onError?: Function; popupBlockedMessage?: string; save?: boolean; } ): this;
    /**
     * Save stream
     * @param name the name of the file to be created
     * @param save flag to save the stream directly to file or open dialog
     */
    save(name?: string, save?: boolean): void;
    /**
     * Returns content
     */
    getContent(): Uint8Array;
    /**
     * Save content
     * @param options options
     * @param options.filename full filename
     * @param options.type type
     * @param options.onError error callback
     * @param options.popupBlockedMessage message to alert if popup-blocker blocked opening file
     * @param options.save flag to save data directly to file or open dialog
     * @param content content
     */
    static save(options: object | { filename?: string; type?: string; onError?: Function; popupBlockedMessage?: string; save?: boolean; } , content: string): void;
}
