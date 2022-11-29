import {AbstractStream} from './AbstractStream';

/**
 * A stream implementation using a browser File object and a browser FileReader.<br>
 * This implementation relies on the {@link https://w3c.github.io/FileAPI/ HTML5 File API}.<br>
 */
export class BrowserFileStream extends AbstractStream {
    /**
     * A stream implementation using a browser File object and a browser FileReader.<br>
     * This implementation relies on the {@link https://w3c.github.io/FileAPI/ HTML5 File API}.<br>
     * @param options The options
     * @param options.file The file to read from
     * @param options.stride The stride of this stream
     */
    constructor(options: object | { file: File; stride?: number; } );
}
