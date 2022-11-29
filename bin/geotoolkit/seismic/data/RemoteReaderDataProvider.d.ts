import {ByteOrder} from './ByteOrder';

/**
 * Callback for geotoolkit.seismic.data.RemoteReaderDataProvider to success open. This is based on INTGeoServer
 * protocol version 1.
 */
export type openSuccess = (data: object | { version?: string; statistics: object | { min: number; max: number; average: number; rms: number; } ; ebcdic?: string[]; binary?: string[]; gridCoordinates?: object[]; indexType?: string; keys?: object[]; numberOfTraces: number; numberOfSamples: number; startValue?: number; sampleRate: number; outline?: object[]; traceHeader?: object | { fields?: object[]; } ; traceOrders?: number[]; volumeDefaultKeyNames?: object | { i?: string; j?: string; } ; volumeKeyNames?: object | { i?: string; j?: string; } ; zUnit?: string; xyKeyNames?: object | { xKeyName?: string; yKeyName?: string; } ; } ) => void;
/**
 * Callback for geotoolkit.seismic.data.RemoteReaderDataProvider to success queryTraces.
 * This is based on INTGeoServer protocol version 1.
 */
export type queryTracesSuccess = (data: object | { version?: string; statistics: object | { min: number; max: number; average: number; rms: number; } ; numberOfTraces: number; numberOfSamples: number; startValue?: number; sampleRate: number; } ) => void;
/**
 * Define abstract data provider for communication between  remote reader and server
 */
export class RemoteReaderDataProvider {
    /**
     * Define abstract data provider for communication between  remote reader and server
     */
    constructor();
    /**
     * Create an instance
     * @param options 
     */
    createInstance(options: any): RemoteReaderDataProvider;
    /**
     * Notify server that reader resources can be released on server
     * @param sourceId optional parameter id of the data source
     */
    close(sourceId?: string): void;
    /**
     * This method open connection and load data source information. The output data can be received via success callback {@link @int/geotoolkit/seismic/data/RemoteReaderDataProvider.openSuccess}
     * @param fileName 
     */
    open(fileName: string): Promise<any>;
    /**
     * This method query traces and returns information about traces {@link @int/geotoolkit/seismic/data/RemoteReaderDataProvider.queryTracesSuccess}
     * @param fileName 
     * @param query a query in JSON format. Should contain parameters relevant to the trace, such as "from", "to", "headers", and "samples"
     * @param query.headers result should have trace headers
     * @param query.samples result should have trace samples
     * @param query.from specify a start trace index from 0 to getTraceNumbers()-1
     * @param query.to specify end trace index from 0 to getTraceNumbers()-1
     * @param query.traceIndexes optional indices of traces from 0 to getTraceNumbers()-1
     */
    queryTraces(fileName: string, query?: object | { headers?: boolean; samples?: boolean; from?: number; to?: number; traceIndexes?: number[]; } ): Promise<any>;
    /**
     * This method reads traces
     * @param fileName 
     * @param options 
     * @param options.from start trace number
     * @param options.to end trace number
     * @param options.traceIndexes optional array ot traces indices
     * @param options.samples request samples
     * @param options.headers request samples
     * @param options.query query
     * @param options.sourceId optional id of the source
     * @param options.queryId optional id of the query
     * @param options.byteOrder byte order
     */
    readTraces(fileName: string, options?: object | { from?: number; to?: number; traceIndexes?: number[]; samples?: boolean; headers?: boolean; query?: object; sourceId?: string; queryId?: string; byteOrder?: string; } ): Promise<any>;
    /**
     * Notify server that reader resources can be released on server
     * @param sourceId 
     * @param queryId 
     */
    releaseQuery(sourceId?: string, queryId?: string): void;
    /**
     */
    getByteOrder(): ByteOrder;
}
