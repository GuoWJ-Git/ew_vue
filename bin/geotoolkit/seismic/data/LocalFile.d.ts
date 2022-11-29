/**
 * Creates wrapper class for a file reader.
 */
export class LocalFile {
    /**
     * Creates wrapper class for a file reader.
     * @param fileName file names
     */
    constructor(fileName: string);
    /**
     * Returns file name
     */
    getFileName(): string;
    /**
     * Returns binary raw data
     * @param callback this is the function called when data is ready
     * @param from offset in bytes
     * @param to offset in bytes
     * @param context context
     */
    readBinarySection(callback: Function, from: number, to: number, context: any): void;
    /**
     * Return file size
     */
    getFileSize(): number;
    /**
     * Return true if local file is supported
     */
    static isSupported(): boolean;
}
