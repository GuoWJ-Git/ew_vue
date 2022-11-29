/**
 * A connector for INTGeoServer welllogs
 */
export class RemoteWelllogDataSource {
    /**
     * A connector for INTGeoServer welllogs
     * @param options The options
     * @param options.server The server url
     * @param options.metaservice The metadata service name
     * @param options.dataservice The data service name
     * @param options.file The file path
     */
    constructor(options?: object | { server?: string; metaservice?: string; dataservice?: string; file?: string; } );
    /**
     * Retrieves asynchronously the metadata for the gridwell
     * @param callback Success callback function
     * @param error Error callback function
     */
    readMetadata(callback: Function, error: Function): XMLHttpRequest;
    /**
     * Retrieves asynchronously the data for the well
     * @param curveId The curve to request id
     * @param callback Success callback function
     * @param error Error callback function
     */
    readCurve(curveId: string, callback: Function, error: Function): XMLHttpRequest;
}
