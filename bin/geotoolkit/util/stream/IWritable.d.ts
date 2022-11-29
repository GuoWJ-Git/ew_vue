/**
 * Defines interface of stream to write
 */
export abstract class IWritable {
    /**
     * Put value to stream
     * @param data a data to save
     */
    abstract out(data: any): number;
    /**
     * Close stream
     */
    abstract close(): this;
    /**
     * Save stream
     * @param name file name/ string name
     */
    abstract save(name?: string): void;
    /**
     * Gets stream content
     */
    abstract getContent(): any;
    /**
     * Disposes this stream, releasing all the resources used.
     */
    abstract dispose(): void;
}
