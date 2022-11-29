/**
 * LAS Stream based Parser.<br>
 * <br>
 * This is the parent class of LAS parsers using a Stream paradigm.
 */
export class LasStreamParser {
    /**
     * LAS Stream based Parser.<br>
     * <br>
     * This is the parent class of LAS parsers using a Stream paradigm.
     */
    constructor();
    /**
     * Opens the LAS stream and parse its headers.<br>
     * <br>
     * The stream can also be opened in 'legacy mode' in order to be accessed like a non-stream based parser.<br>
     * However this is discouraged as it can lead to memory issues for huge datasets.<br>
     * <br>
     * Note that, for convenience, this function returns a Promise AND accepts callbacks (that do not contribute to the returned promise).<br>
     * One is free to use either the Promise or the callback to be 'notified' when the stream is ready.<br>
     * @param fullload If true, the stream will be fully read and parsed during its opening. (legacy mode)
     * @param success A function called when the headers have been parsed and the stream is ready
     * @param error A function called if the header parsing failed
     */
    open(fullload: boolean, success?: Function, error?: Function): Promise<any>;
    /**
     * Returns the LAS sections
     */
    getSections(): void;
    /**
     * Returns the LAS section groups
     */
    getSectionGroups(): void;
    /**
     * Reads data in the given range for the given mnemonics
     * @param rawDataStart The first line for the raw data in the stream
     * @param fromDepth The first depth to read (no interpolation or extrapolation)
     * @param toDepth The last depth to read (no interpolation or extrapolation)
     * @param mnemonics The mnemonics of the curves to retain, if null, all curves will be fetched
     * @param success A function called when the section has been loaded
     * @param error A function called if the parsing fails
     */
    protected readDataInRange(rawDataStart: number, fromDepth?: number, toDepth?: number, mnemonics?: string[], success?: Function, error?: Function): Promise<any>;
}
