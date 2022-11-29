/**
 * A connector for INTGeoServer 'Pillar' faults
 */
export class RemoteFaultPillarDataSource {
    /**
     * A connector for INTGeoServer 'Pillar' faults
     * @param options The options
     * @param options.server The server url
     * @param options.metaservice The metadata service name
     * @param options.dataservice The data service name
     * @param options.file The file path
     */
    constructor(options?: object | { server?: string; metaservice?: string; dataservice?: string; file?: string; } );
    /**
     * Retrieves asynchronously the metadata for the fault
     * @param callback Success callback function
     * @param error Error callback function
     */
    readMetadata(callback: Function, error: Function): XMLHttpRequest;
    /**
     * Retrieves asynchronously the data for the fault as json
     * @param callback Success callback function
     * @param error Error callback function
     */
    readData(callback: Function, error: Function): XMLHttpRequest;
}
