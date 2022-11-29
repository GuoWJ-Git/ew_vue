/**
 * A connector for INTGeoServer 'Stream' GridSurfaces
 */
export class RemoteGridSurfaceDataSource {
    /**
     * A connector for INTGeoServer 'Stream' GridSurfaces
     * @param options The options
     * @param options.server The server url
     * @param options.metaservice The metadata service name
     * @param options.dataservice The data service name
     * @param options.file The file path
     */
    constructor(options?: object | { server?: string; metaservice?: string; dataservice?: string; file?: string; } );
    /**
     * Retrieves asynchronously the metadata for the gridsurface
     * @param callback Success callback function
     * @param error Error callback function
     */
    readMetadata(callback: Function, error: Function): XMLHttpRequest;
    /**
     * Retrieves asynchronously the data for the gridsurface as Float32Array
     * @param callback Success callback function
     * @param error Error callback function
     */
    readDataArray(callback: Function, error: Function): XMLHttpRequest;
}
