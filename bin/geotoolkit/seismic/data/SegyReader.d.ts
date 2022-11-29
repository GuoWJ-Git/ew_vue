import {AbstractSegyReader} from './AbstractSegyReader';
import {LocalFile} from './LocalFile';
import {SeismicFormat} from './SeismicFormat';

/**
 * Defines reader of local SEG-Y files.
 */
export class SegyReader extends AbstractSegyReader {
    /**
     * Defines reader of local SEG-Y files.
     * @param file The file object
     * @param options options or instance of format to specify the  trace
     * data format and location of headers
     * @param options.segyFormat SEG-Y format
     * @param options.samplePower sample power
     * @param options.numberofparalleltasks number of parallel requests
     * @param options.synchronous synchronous requests
     * @param options.nullValue null value
     * @param samplePower sample power
     * @param nullValue null value
     */
    constructor(file: LocalFile, options?: object | { segyFormat?: SeismicFormat; samplePower?: number; numberofparalleltasks?: number; synchronous?: boolean; nullValue?: number; }  | SeismicFormat, samplePower?: number, nullValue?: number);
    /**
     * Returns file name
     */
    getSeismicFileName(): string;
    /**
     * Return file size in bytes
     */
    getFileSize(): number;
    /**
     * Returns file
     */
    protected getSeismicFile(): LocalFile;
    /**
     * Read a binary section
     * @param callback callback function
     * @param start start position in bytes
     * @param end end position in bytes
     */
    readBinarySection(callback: Function, start: number, end: number): void;
}
