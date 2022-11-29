import {IReadable} from './IReadable';

/**
 * A data stream, typical implementation include FileStream or MemoryStream.<br>
 * This class offers 'random' access to the underlying data without requiring to load the whole data in memory.
 * @deprecated since 2021 (3.2) Use geotoolkit.util.stream.IReadable
 */
export class AbstractStream implements IReadable {
    /**
     * A data stream, typical implementation include FileStream or MemoryStream.<br>
     * This class offers 'random' access to the underlying data without requiring to load the whole data in memory.
     */
    constructor();
    /**
     * Read a chunk of data and calls the callback when it's done.
     * @param offset The position to start reading from
     * @param length The amount of bytes to read
     * @param callback The callback that will be called with the result
     */
    readChunk(offset: number, length: number, callback: Function): this;
    /**
     * Returns the size of the underlying data
     */
    getSize(): number;
    /**
     * Returns the stride of this stream
     */
    getStride(): number;
    /**
     * Disposes this stream, releasing all the resources used.
     */
    dispose(): this;
}
