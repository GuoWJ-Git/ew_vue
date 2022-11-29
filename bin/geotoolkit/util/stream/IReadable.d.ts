/**
 * A data stream, typical implementation include FileStream or MemoryStream.<br>
 * This interface for class offers 'random' access to the underlying data without requiring to load the whole data in memory.
 */
export abstract class IReadable {
    /**
     * Read a chunk of data and calls the callback when it's done.
     * @param offset The position to start reading from
     * @param length The amount of bytes to read
     * @param callback The callback that will be called with the result
     */
    abstract readChunk(offset: number, length: number, callback: Function): this;
    /**
     * Returns the size of the underlying data
     */
    abstract getSize(): number;
    /**
     * Returns the stride of this stream
     */
    abstract getStride(): number;
    /**
     * Disposes this stream, releasing all the resources used.
     */
    abstract dispose(): this;
}
