import {Stream} from './Stream';

/**
 */
export class TextStream extends Stream {
    /**
     * @param options options options
     * @param options.filename full filename
     * @param options.type type
     * @param options.popupBlockedMessage popupBlockedMessage popupBlockedMessage
     * @param options.save save flag to save the stream directly to file or open dialog
     */
    constructor(options?: object | { filename?: string; type?: string; popupBlockedMessage?: string; save?: boolean; } );
    /**
     * @param data data to be written
     */
    out(data: string[] | string): number;
    /**
     * Close stream
     */
    close(): this;
    /**
     * @param name the name of the file to be created
     * @param save flag to save the stream directly to file or open dialog
     */
    save(name?: string, save?: boolean): void;
    /**
     * Returns content
     */
    getContent(): string[] | string;
}
