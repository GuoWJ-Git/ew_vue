import {IWritable} from '../util/stream/IWritable';
import {AbstractDataTable} from './AbstractDataTable';

/**
 * <pre>
 *     Class defines CSVWriter for datatable or Array.
 *     'stream' defines instance of geotoolkit.util.stream.IWritable(). It must be passed as paramter to write to stream.
 *     User can provide their own stream or use stream such as geotoolkit.util.stream.TextStream().
 * </pre>
 * @example
 * ```javascript
 * import {CSVWriter} from '@int/geotoolkit/data/CSVWriter';
 * import {TextStream} from '@int/geotoolkit/util/stream/TextStream';
 * ...
 * new CSVWriter({
 *       'stream': new TextStream({
 *           'filename': 'csvfile.csv',
 *           'type': 'text\/csv',
 *           'save': true
 *       })
 *   })
 * .writeTable(table, {
 *           'includeHeaders': true
 *       })
 * .close();
 * ```
 */
export class CSVWriter {
    /**
     * <pre>
     *     Class defines CSVWriter for datatable or Array.
     *     'stream' defines instance of geotoolkit.util.stream.IWritable(). It must be passed as paramter to write to stream.
     *     User can provide their own stream or use stream such as geotoolkit.util.stream.TextStream().
     * </pre>
     * @param options options
     * @param options.stream stream
     * @param options.delimiter string used to separate fields.
     * @param options.lineterminator string used to terminate lines produced by writer.
     */
    constructor(options: object | { stream: IWritable; delimiter?: string; lineterminator?: string; } );
    /**
     * Set options for writer
     * @param options options
     * @param options.stream stream
     * @param options.delimiter string used to separate fields.
     * @param options.lineterminator string used to terminate lines produced by writer.
     */
    setOptions(options: object | { stream?: IWritable; delimiter?: string; lineterminator?: string; } ): this;
    /**
     * Get Options
     */
    getOptions(): object | any;
    /**
     * write Datatable to stream
     * @param datatable DataTable or DataTableView to write
     * @param options options
     * @param options.maxBuffer maxRows to save in memory before writing to stream
     * @param options.includeHeaders whether to include header or not
     */
    writeTable(datatable: AbstractDataTable, options?: object | { maxBuffer?: number; includeHeaders?: boolean; } ): this;
    /**
     * Write a row to stream
     * @param row row
     */
    writeRow(row: string[]): this;
    /**
     * Write array of rows to stream
     * @param rows array of rows
     * @param maxBuffer maxBuffer maxRows to save in memory before writing to stream
     */
    writeRows(rows: string[][], maxBuffer?: number): this;
    /**
     * Write text to stream
     * @param text text
     * @param eol indicate if it's end of line
     */
    writeText(text: string, eol?: boolean): this;
    /**
     * Closes writer. It is necessary to close the writer in order to save and stream
     */
    close(): this;
}
