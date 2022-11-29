import {LasStreamParser} from './LasStreamParser';
import {LineReader} from '../../../util/stream/LineReader';
import {LasSectionGroup} from './LasSectionGroup';
import {LasSection} from './LasSection';

/**
 * This class implements a {@link http://www.cwls.org/wp-content/uploads/2014/09/LAS_20_Update_Jan2014.pdf LAS 2.0} parser using a stream paradigm.<br>
 * <br>
 * This parser implements an API similar to {@link @int/geotoolkit/welllog/data/las/Las20.Las20 Las20} for convenience.<br>
 * Therefore it will provide {@link @int/geotoolkit/welllog/data/las/LasSection.LasSection las sections} and {@link @int/geotoolkit/welllog/data/las/LasSectionGroup.LasSectionGroup las section group} like a regular {@link @int/geotoolkit/welllog/data/las/LasParser.LasParser LASParser}.<br>
 * <br>
 * However this stream parser has to be 'opened' to trigger the loading of the stream and the parsing of the sections.<br>
 * When opening the stream, only the header sections will be loaded and parsed (Version, Well, Curve, Parameter, Other).<br>
 * The data section won't be loaded nor parsed by default.<br>
 * <br>
 * As a result, 'bulk' access to the data using (for example) 'group.getCurveData' will not work.<br>
 * However the {@link @int/geotoolkit/welllog/data/las/LasStreamDataSection.LasStreamDataSection LasStreamDataSection} provides new ways of accessing the data like getDataInRange(startDepth, endDepth).<br>
 * <br>
 * Note that, as the LAS 2.0 format has no index, this parser will index it on the fly.<br>
 * As a consequence, initial getDataInRange calls on a this parser may take longer than subsequent ones.<br>
 * <br>
 * Also, to access the data in a not stream based way, it can be forced to read its content fully during the open().<br>
 * This is discouraged as the purpose of the LasStreamParser is to avoid loading the whole LAS data in memory (to prevent memory issues for large datasets).<br>
 * If opened in this 'full load' mode, the 'bulk' access to the data will work.<br>
 * <br>
 * See the documentation of the open() function for more details.
 */
export class Las20Stream extends LasStreamParser {
    /**
     * This class implements a {@link http://www.cwls.org/wp-content/uploads/2014/09/LAS_20_Update_Jan2014.pdf LAS 2.0} parser using a stream paradigm.<br>
     * <br>
     * This parser implements an API similar to {@link @int/geotoolkit/welllog/data/las/Las20.Las20 Las20} for convenience.<br>
     * Therefore it will provide {@link @int/geotoolkit/welllog/data/las/LasSection.LasSection las sections} and {@link @int/geotoolkit/welllog/data/las/LasSectionGroup.LasSectionGroup las section group} like a regular {@link @int/geotoolkit/welllog/data/las/LasParser.LasParser LASParser}.<br>
     * <br>
     * However this stream parser has to be 'opened' to trigger the loading of the stream and the parsing of the sections.<br>
     * When opening the stream, only the header sections will be loaded and parsed (Version, Well, Curve, Parameter, Other).<br>
     * The data section won't be loaded nor parsed by default.<br>
     * <br>
     * As a result, 'bulk' access to the data using (for example) 'group.getCurveData' will not work.<br>
     * However the {@link @int/geotoolkit/welllog/data/las/LasStreamDataSection.LasStreamDataSection LasStreamDataSection} provides new ways of accessing the data like getDataInRange(startDepth, endDepth).<br>
     * <br>
     * Note that, as the LAS 2.0 format has no index, this parser will index it on the fly.<br>
     * As a consequence, initial getDataInRange calls on a this parser may take longer than subsequent ones.<br>
     * <br>
     * Also, to access the data in a not stream based way, it can be forced to read its content fully during the open().<br>
     * This is discouraged as the purpose of the LasStreamParser is to avoid loading the whole LAS data in memory (to prevent memory issues for large datasets).<br>
     * If opened in this 'full load' mode, the 'bulk' access to the data will work.<br>
     * <br>
     * See the documentation of the open() function for more details.
     * @param options The options
     * @param options.reader The data source for this stream
     */
    constructor(options: object | { reader: LineReader; } );
    /**
     * Opens the LAS 2.0 stream and parse its headers.<br>
     * <br>
     * The stream can also be opened in 'legacy mode' in order to be accessed like a non-stream based parser.<br>
     * However this is discouraged as it can lead to memory issues for huge dataset.<br>
     * <br>
     * Once this stream has been opened, its 'header' sections can be accessed using getSections().<br>
     * See example for accessing the data in either 'legacy/non-stream' mode or 'stream' mode.<br>
     * <br>
     * Note that, for convenience, this function returns a Promise AND accepts callbacks (that do not contribute to the returned promise).<br>
     * One is free to use either the Promise or the callback to be 'notified' when the stream is ready.<br>
     * @example
     * ```javascript
     * import {Las20Stream} from '@int/geotoolkit/welllog/data/las/Las20Stream';
     * import {BrowserFileStream} from '@int/geotoolkit/util/stream/BrowserFileStream';
     * import {LineReader} from '@int/geotoolkit/util/stream/LineReader';
     * new Las20Stream({
     *     'reader': new LineReader({
     *         'stream': new BrowserFileStream({
     *             'file': file
     *         })
     *     })
     * })
     *     .open(true)
     *     .then((stream) => {
     *         // load table
     *     }).catch((e) => {
     *     // error
     *     });
     * ```
     * @param fullload If true, the stream will be fully read and parsed during its opening. (This is discouraged)
     * @param success A function called when the headers have been parsed and the stream is ready
     * @param error A function called if the header parsing failed
     */
    open(fullload: boolean, success?: Function, error?: Function): Promise<any>;
    /**
     * Gets all the section groups. Doesn't include sections not in groups.
     */
    getSectionGroups(): LasSectionGroup[];
    /**
     * Returns all sections not part of a group
     */
    getSections(): LasSection[];
    /**
     * Reads data in the given range for the given mnemonics.<br>
     * @param rawDataStart The line index of the data section
     * @param fromDepth The first depth to read (no interpolation or extrapolation)
     * @param toDepth The last depth to read (no interpolation or extrapolation)
     * @param mnemonics The mnemonics of the curves to retain, if null, all curves will be fetched
     * @param success A function called when the section has been loaded
     * @param error A function called if the parsing fails
     */
    protected readDataInRange(rawDataStart: number, fromDepth?: number, toDepth?: number, mnemonics?: string[], success?: Function, error?: Function): Promise<any>;
    /**
     * Reads data in the given range for the given mnemonics.<br>
     * @param rawDataStart The line index of the data section
     * @param fromDepth The first depth to read (no interpolation or extrapolation)
     * @param toDepth The last depth to read (no interpolation or extrapolation)
     * @param indexes The index of the curves to retain, if null, all curves will be fetched
     * @param success A function called when the section has been loaded
     * @param error A function called if the parsing fails
     */
    protected readDataInRangeByIndex(rawDataStart: number, fromDepth?: number, toDepth?: number, indexes?: number[], success?: Function, error?: Function): Promise<any>;
    /**
     * Tests if the given reader looks like a LAS 2.0<br>
     * Note that a success does not mean that the given reader is a LAS 2.0 but only that the type has been detected.<br>
     * To find out if it is a LAS 2.0, one should look at the result given in the promise/callback.<br>
     * {isLAS20:true, details:"Mode information about the isLAS20 result"}<br>
     * <br>
     * Note that, for convenience, this function returns a Promise AND accepts callbacks (that do not contribute to the returned promise).<br>
     * One is free to use either the Promise or the callback to be 'notified' when the stream is ready.<br>
     * <br>
     * @example
     * ```javascript
     * Las20Stream.isLAS20(lineReader).then( (result) => {
     *     if (result['isLAS20'] === true) {
     *         // Can be parsed using Las20Stream
     *     } else {
     *         // Can't be parsed using Las20Stream
     *     }
     * }).catch((e) => {
     *     // Can't be parsed using Las20Stream
     * });
     * ```
     * @param reader The reader to test
     * @param success A function called when the nature of the given reader has been detected
     * @param error A function called if a major error occurs
     */
    static isLAS20(reader: LineReader, success?: Function, error?: Function): Promise<any>;
}
