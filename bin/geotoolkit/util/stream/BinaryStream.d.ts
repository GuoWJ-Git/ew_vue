import {Stream} from './Stream';

/**
 * Defines representation of memory binary stream
 */
export class BinaryStream extends Stream {
    /**
     * Defines representation of memory binary stream
     * @param options options
     * @param options.filename full filename
     * @param options.type type
     * @param options.popupBlockedMessage message to alert if popup-blocker blocked opening file
     * @param options.save flag to save data directly to file or open dialog
     */
    constructor(options?: object | { filename?: string; type?: string; popupBlockedMessage?: string; save?: boolean; } );
    /**
     * Put value to stream
     * @param byte to be saved
     * @param offset offset
     * @param length length
     */
    out(byte: number | any[], offset?: number, length?: number): number;
    /**
     * Close stream
     */
    close(): this;
    /**
     * Gets current position
     */
    getPosition(): number;
    /**
     * Set saving options
     * @param options options
     * @param options.filename full filename
     * @param options.type type
     * @param options.popupBlockedMessage message to alert if popup-blocker blocked opening file
     * @param options.save flag to save data directly to file or open dialog
     */
    setSaveOptions(options?: object | { filename?: string; type?: string; popupBlockedMessage?: string; save?: boolean; } ): this;
    /**
     * Save stream
     * @param name the name of the file to be created
     * @param save flag to save the stream directly to file or open dialog
     */
    save(name?: string, save?: boolean): this;
    /**
     * Returns content
     */
    getContent(): Uint8Array;
}
