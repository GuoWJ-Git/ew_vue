import {AbstractStream} from './AbstractStream';

/**
 * A stream implementation using a browser {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ArrayBuffer} as backing store.<br>
 * (Use BrowserMemoryStream.stringToArrayBuffer to convert a string into an ArrayBuffer).<br>
 * This implementation provides compatibility with stream-based mechanism for dataset that are already in memory.<br>
 * <br>
 * Note that this class relies on the {@link https://w3c.github.io/FileAPI/ HTML5 File API}.<br>
 */
export class BrowserMemoryStream extends AbstractStream {
    /**
     * A stream implementation using a browser {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ArrayBuffer} as backing store.<br>
     * (Use BrowserMemoryStream.stringToArrayBuffer to convert a string into an ArrayBuffer).<br>
     * This implementation provides compatibility with stream-based mechanism for dataset that are already in memory.<br>
     * <br>
     * Note that this class relies on the {@link https://w3c.github.io/FileAPI/ HTML5 File API}.<br>
     * @param options The options
     * @param options.buffer The buffer
     * @param options.stride The stride of this stream
     */
    constructor(options: object | { buffer: ArrayBuffer; stride?: number; } );
    /**
     * Converts a String in an ArrayBuffer using String.charCodeAt (encoding is forced to utf16).<br>
     * @param string The string to convert
     */
    static stringToArrayBuffer(string: string): ArrayBuffer;
}
