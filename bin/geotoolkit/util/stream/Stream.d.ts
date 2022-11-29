import {IWritable} from './IWritable';

/**
 * Defines abstract representation of stream
 * @deprecated since 2021 (3.2) Use geotoolkit.util.stream.IWritable
 */
export class Stream implements IWritable {
    /**
     * Defines abstract representation of stream
     */
    constructor();
    /**
     * Put value to stream
     * @param data a data to save
     */
    out(data: any): number;
    /**
     * Close stream
     */
    close(): this;
    /**
     * Save stream
     * @param name file name/ string name
     */
    save(name: string): void;
    /**
     * Gets stream content
     */
    getContent(): any;
    /**
     * Disposes this stream, releasing all the resources used.
     */
    dispose(): void;
}
