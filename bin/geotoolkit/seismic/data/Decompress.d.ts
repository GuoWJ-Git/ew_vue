/**
 * The base class for data transformations.
 */
export class Decompress {
    /**
     * The base class for data transformations.
     */
    constructor();
    /**
     * Performs seismic data decompression.
     * @param config A json object containing the decompression configuration.
     * @param config.height The number of data rows.
     * @param config.width The number of data columns.
     * @param config.transf The list of transformation configurations.
     * @param data The seismic data that will be decompressed.
     */
    static decompress(config: object | { height?: number; width?: number; transf?: object[]; } , data: ArrayBuffer): ArrayBuffer;
}
