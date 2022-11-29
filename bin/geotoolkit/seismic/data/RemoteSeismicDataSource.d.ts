import {AbstractHttpService} from '../../http/AbstractHttpService';
import {SeismicMetaData} from './SeismicMetaData';
import {ByteOrder} from './ByteOrder';

/**
 * Defines remote seismic data source
 * <p>
 * The data source communicate with server using JSON format via HTTP. It uses the following sequence of calls:
 *  </p>
 *  <ul>
 *  <li>-get information about data source</li>
 *  <li>-make query</li>
 *  <li>-read a bunch of traces from creating query.</li>
 * </ul>
 * <p>
 * The supported query:
 * </p>
 * <ul>
 * <li>
 * 1. Get meta information about data set:
 * <pre>
 * Input:
 * {
 *    "file" : fileName,
 *    "type" : "info"
 * }
 * Output:
 * {
 *   "version": number,
 *   "sourceId": number, // Used for optimization
 *   "keys": [ {"key": name, "min":minValue, "max":maxValue, "increment":step } ],
 *   "numberOfSamples": value,
 *   "numberOfTraces": value,
 *   "sampleRate": value,
 *   "startValue": value,
 *     "zUnit": value,
 *   "statistics": { "min":value, "max":value, "average":value, "rms":value "percentiles":[value1, value2, ...] }, //percentiles only if available
 *   "units": value, //cgUnits value
 *   "traceHeader": {
 *        "fields": [ { "name":name, "id":number, "type":string, "size":bytes } ],"size":bytes
 *        }
 * },
 * Example:
 * http://loclahost:8080/seismicreader?json=%7B%22file%22:%22seismicdata/cdp_stack.sgy%22,%22type%22:%22info%22,%22query%22:%7B%7D,%22sourceId%22:-1%7D
 *  Where query string parameters:
 * json:{"file":"seismicdata/cdp_stack.sgy","type":"info","query":{},"sourceId":-1}
 * </pre>
 * </li>
 * <li>
 * 2. Get information about query.
 * <pre>
 * Input:
 * {
 *   "file" : fileName,
 *   "type" : "query",
 *   "sourceId": number, // Used for optimization. It is optional
 *   "queryId": number, // Used for optimization. it is optional
 *   "query": {
 *           // See available queries in 3. and 4.
 *    }
 *  }
 *  Output:
 *  {
 *     "version": number,
 *     "queryId": number, // Used for optimization
 *     "numberOfSamples": value,
 *     "numberOfTraces": value,
 *     "sampleRate": value,
 *     "startValue": value,
 *     "statistics": { "min":value, "max":value, "mean":value, "average":value, "rms":value, "percentiles":[value1, value2, ...] }, //percentiles only if available
 *  }
 *  Example of query string parameters:
 *  json:{"file":"seismicdata/cdp_stack.sgy","type":"query","query":{},"sourceId":1169947804}
 *  </pre>
 *  </li>
 *  <li>
 *  3. Get binary data from the trace range
 *  <pre>
 *  Input:
 *  {
 *     "file" : fileName,
 *     "type" : "traces",
 *     "queryId": number, // Used for optimization. It is optional
 *     "query": {
 *          "keys": [
 *          {
 *              "name" : KeyName,
 *              "min": minValue,
 *              "max": maxValue,
 *              "step": stepValue,
 *              "order": asc or desc
 *           },
 *           ...
 *          ]
 *     },
 *     "data" : {
 *            "startTrace": startTrace,
 *            "endTrace": endTrace,
 *            "samples": "true" or "false",
 *            "headers": "true" or "false"
 *            "byteOrder": "LITTLE_ENDIAN", "BIG_ENDIAN0"
 *    }
 *   }
 *   Output: Binary data. It returns block (endTrace-startTrace+1). Each trace has HEADER and SMAPLES.
 *   The header size equals to information from meta data, Samples size equals (4 * samplesCount)
 *   The full size of the data block is (endTrace - startTrace + 1) * (headerSize + samplesSize)
 *   The samples are returned as float
 *   Example of query string parameters:
 *   json:{"file":"seismicdata/cdp_stack.sgy","type":"traces","query":{},
 *   "data":{"startTrace":0,"endTrace":255,"samples":true,"headers":true,
 *   "byteOrder":"LITTLE_ENDIAN"},"sourceId":1169947804,"queryId":1169945598}
 *   </pre>
 *   </li>
 *  <li>
 *  4. Get binary data for an arbitrary path
 *  <pre>
 *  Input:
 *  {
 *     "file" : fileName,
 *     "type" : "traces",
 *     "queryId": number, // Used for optimization. It is optional
 *     "query": {
 *           "keys": [
 *              {"name" : KeyName1, "values": [values for key1]},
 *              {"name" : KeyName2, "values": [values for key2]},
 *           ],
 *           "queryType": "seismicPath",
 *           'emptyTraces': true,
 *     },
 *     "data" : {
 *            "startTrace": startTrace,
 *            "endTrace": endTrace,
 *            "samples": "true" or "false",
 *            "headers": "true" or "false"
 *            "byteOrder": "LITTLE_ENDIAN", "BIG_ENDIAN0"
 *    }
 *   }
 *   Output: Binary data. It returns block (endTrace-startTrace+1). Each trace has HEADER and SMAPLES.
 *   The header size equals to information from meta data, Samples size equals (4 * samplesCount)
 *   The full size of the data block is (endTrace - startTrace + 1) * (headerSize + samplesSize)
 *   The samples are returned as float
 *   Example of query string parameters:
 *   json:{"file":"seismicdata/cdp_stack.sgy","type":"traces","query":{},
 *   "data":{"startTrace":0,"endTrace":255,"samples":true,"headers":true,
 *   "byteOrder":"LITTLE_ENDIAN"},"sourceId":1169947804,"queryId":1169945598}
 *   </pre>
 *   </li>
 *   <li>
 *   5. Release data source and/or query collection
 *   <pre>
 *   {
 *     "sourceId": number,
 *     "queryId": number, // optional
 *     "type" : "release"
 *   }
 *   </pre>
 *   </li>
 * </ul>
 * @example
 * ```javascript
 * import {RemoteSeismicDataSource} from '@int/geotoolkit/seismic/data/RemoteSeismicDataSource';
 * const data = new RemoteSeismicDataSource({
 *       'host': 'https://demo.int.com/INTGeoServer/json',
 *       'file': 'data/seismic/Gullfaks_Amplitude.xgy',
 *       'version': 2
 *   });
 * // request data source
 * data.open(() => {
 *           // Create query object
 *           data.select(query, (reader) => {
 *               // Create pipeline
 *           });
 *       }, (err) => {
 *           // Error handling
 *       }
 * );
 * ```
 */
export class RemoteSeismicDataSource {
    /**
     * Defines remote seismic data source
     * <p>
     * The data source communicate with server using JSON format via HTTP. It uses the following sequence of calls:
     *  </p>
     *  <ul>
     *  <li>-get information about data source</li>
     *  <li>-make query</li>
     *  <li>-read a bunch of traces from creating query.</li>
     * </ul>
     * <p>
     * The supported query:
     * </p>
     * <ul>
     * <li>
     * 1. Get meta information about data set:
     * <pre>
     * Input:
     * {
     *    "file" : fileName,
     *    "type" : "info"
     * }
     * Output:
     * {
     *   "version": number,
     *   "sourceId": number, // Used for optimization
     *   "keys": [ {"key": name, "min":minValue, "max":maxValue, "increment":step } ],
     *   "numberOfSamples": value,
     *   "numberOfTraces": value,
     *   "sampleRate": value,
     *   "startValue": value,
     *     "zUnit": value,
     *   "statistics": { "min":value, "max":value, "average":value, "rms":value "percentiles":[value1, value2, ...] }, //percentiles only if available
     *   "units": value, //cgUnits value
     *   "traceHeader": {
     *        "fields": [ { "name":name, "id":number, "type":string, "size":bytes } ],"size":bytes
     *        }
     * },
     * Example:
     * http://loclahost:8080/seismicreader?json=%7B%22file%22:%22seismicdata/cdp_stack.sgy%22,%22type%22:%22info%22,%22query%22:%7B%7D,%22sourceId%22:-1%7D
     *  Where query string parameters:
     * json:{"file":"seismicdata/cdp_stack.sgy","type":"info","query":{},"sourceId":-1}
     * </pre>
     * </li>
     * <li>
     * 2. Get information about query.
     * <pre>
     * Input:
     * {
     *   "file" : fileName,
     *   "type" : "query",
     *   "sourceId": number, // Used for optimization. It is optional
     *   "queryId": number, // Used for optimization. it is optional
     *   "query": {
     *           // See available queries in 3. and 4.
     *    }
     *  }
     *  Output:
     *  {
     *     "version": number,
     *     "queryId": number, // Used for optimization
     *     "numberOfSamples": value,
     *     "numberOfTraces": value,
     *     "sampleRate": value,
     *     "startValue": value,
     *     "statistics": { "min":value, "max":value, "mean":value, "average":value, "rms":value, "percentiles":[value1, value2, ...] }, //percentiles only if available
     *  }
     *  Example of query string parameters:
     *  json:{"file":"seismicdata/cdp_stack.sgy","type":"query","query":{},"sourceId":1169947804}
     *  </pre>
     *  </li>
     *  <li>
     *  3. Get binary data from the trace range
     *  <pre>
     *  Input:
     *  {
     *     "file" : fileName,
     *     "type" : "traces",
     *     "queryId": number, // Used for optimization. It is optional
     *     "query": {
     *          "keys": [
     *          {
     *              "name" : KeyName,
     *              "min": minValue,
     *              "max": maxValue,
     *              "step": stepValue,
     *              "order": asc or desc
     *           },
     *           ...
     *          ]
     *     },
     *     "data" : {
     *            "startTrace": startTrace,
     *            "endTrace": endTrace,
     *            "samples": "true" or "false",
     *            "headers": "true" or "false"
     *            "byteOrder": "LITTLE_ENDIAN", "BIG_ENDIAN0"
     *    }
     *   }
     *   Output: Binary data. It returns block (endTrace-startTrace+1). Each trace has HEADER and SMAPLES.
     *   The header size equals to information from meta data, Samples size equals (4 * samplesCount)
     *   The full size of the data block is (endTrace - startTrace + 1) * (headerSize + samplesSize)
     *   The samples are returned as float
     *   Example of query string parameters:
     *   json:{"file":"seismicdata/cdp_stack.sgy","type":"traces","query":{},
     *   "data":{"startTrace":0,"endTrace":255,"samples":true,"headers":true,
     *   "byteOrder":"LITTLE_ENDIAN"},"sourceId":1169947804,"queryId":1169945598}
     *   </pre>
     *   </li>
     *  <li>
     *  4. Get binary data for an arbitrary path
     *  <pre>
     *  Input:
     *  {
     *     "file" : fileName,
     *     "type" : "traces",
     *     "queryId": number, // Used for optimization. It is optional
     *     "query": {
     *           "keys": [
     *              {"name" : KeyName1, "values": [values for key1]},
     *              {"name" : KeyName2, "values": [values for key2]},
     *           ],
     *           "queryType": "seismicPath",
     *           'emptyTraces': true,
     *     },
     *     "data" : {
     *            "startTrace": startTrace,
     *            "endTrace": endTrace,
     *            "samples": "true" or "false",
     *            "headers": "true" or "false"
     *            "byteOrder": "LITTLE_ENDIAN", "BIG_ENDIAN0"
     *    }
     *   }
     *   Output: Binary data. It returns block (endTrace-startTrace+1). Each trace has HEADER and SMAPLES.
     *   The header size equals to information from meta data, Samples size equals (4 * samplesCount)
     *   The full size of the data block is (endTrace - startTrace + 1) * (headerSize + samplesSize)
     *   The samples are returned as float
     *   Example of query string parameters:
     *   json:{"file":"seismicdata/cdp_stack.sgy","type":"traces","query":{},
     *   "data":{"startTrace":0,"endTrace":255,"samples":true,"headers":true,
     *   "byteOrder":"LITTLE_ENDIAN"},"sourceId":1169947804,"queryId":1169945598}
     *   </pre>
     *   </li>
     *   <li>
     *   5. Release data source and/or query collection
     *   <pre>
     *   {
     *     "sourceId": number,
     *     "queryId": number, // optional
     *     "type" : "release"
     *   }
     *   </pre>
     *   </li>
     * </ul>
     * @param options The options
     * @param options.host The service url, see example
     * @param options.file The filename or resource id
     * @param options.version default version of communication data provider. Supported: 1 and 2, ivaap or custom version
     * @param options.seismicdata web service url to provide meta data about an individual seismic dataset
     * @param options.seismicquery web service url to provide meta data about a selection of traces
     * @param options.seismictraces web service url to stream all trace header and sample values for a selection of traces
     * @param options.binaryheader web service url to provides the bytes that form the binary header, if any
     * @param options.requestheaders HTTP request headers as key-value pair. it it is specified then it will be applied
     * @param options.getrequestheaders a function to return request headers
     * @param options.httpservice http service to make any HTTP request
     * @param options.headerdescriptor a string to represent header descriptor to be sent to data provider if it is supported
     * @param options.enablenullsamples option to be provided to enable null samples processing if data provider is supported.
     */
    constructor(options: object | { host: string; file: string; version?: string | number; seismicdata?: string; seismicquery?: string; seismictraces?: string; binaryheader?: string; requestheaders?: any; getrequestheaders?: Function; httpservice?: AbstractHttpService; headerdescriptor?: string; enablenullsamples?: boolean; } );
    /**
     * Returns the data info
     */
    getDataInfo(): {decimation: any; compression: {types: object[]; map: boolean}} | object;
    /**
     * Returns host name
     */
    getHost(): string;
    /**
     * Returns file name
     */
    getSeismicFileName(): string;
    /**
     * This method open connection and load data source information
     * @param callback is called then file is open
     * @param error function with parameter data
     */
    open(callback: Function, error: Function): void;
    /**
     * Returns a reader that provides a subset of this seismic data.<br>
     * See class documentation for available queries.<br>
     * @example
     * ```javascript
     * // A query by INLINE to select all XLINE traces form the range [0,1000] with empty traces
     * datasource.select({'keys': [
     *  {
     *    'name': 'INLINE',
     *    'min': 500,
     *    'max': 500,
     *    'step': 1,
     *    'order': 'asc'
     *  },
     *  {
     *    'name': 'XLINE',
     *    'min': 0,
     *    'max': 1000,
     *    'step': 1,
     *    'order': 'asc'
     *  }
     * ],
     *  'emptyTracesKey' {
     *    'name': 'XLINE',
     *    'min': 0,
     *    'max': 1000
     *  }
     *  }, (reader) => {
     *   ...
     * });
     * ```
     * @example
     * ```javascript
     * // Query by path
     *  datasource.select({ 'emptyTraces': true,
     *       'queryType': 'seismicPath',
     *       'keys': [{
     *           'name': 'INLINE',
     *           "values": [100, 200, 200]
     *       }, {
     *           'name': 'XLINE',
     *           'values': [200, 400, 500]
     *       }]
     *   }, (reader) => {
     *     ...
     *   });
     * ```
     * @param query query object
     * @param query.keys optional array of keys to make a query
     * @param query.emptyTracesKey optional empty trace key
     * @param query.emptyTraces generated empty traces on server
     * @param query.queryType query type. It can be 'seismicPath' or null. if it is null then query is done by keys overwise by path.
     * @param query.options additional options to send to server
     * @param query.traceOrder define type of the query. A traceOrder of 1 indicates a XSection query. The Time key is
     * ignored for XSection queries. A trace order of 2 indicates a Map query. The Time key is required for Map queries, with identical min and max values (a time slice).
     * @param callback The callback function to be called on success, will be called with the resulting reader as a parameter
     * @param error The callback function to be called on error, will be called with the actual error as a parameter
     */
    select(query: object | { keys?: any[]; emptyTracesKey?: any; emptyTraces?: boolean; queryType?: string; options?: any; traceOrder?: number; }  | null, callback: Function, error?: Function): void;
    /**
     * Returns keys
     */
    getKeys(): object[];
    /**
     * Returns seismic meta data information
     */
    getMetaData(): SeismicMetaData;
    /**
     * Returns statistics
     */
    getStatistics(): {average: number; min: number; max: number; rms: number} | object;
    /**
     */
    getByteOrder(): ByteOrder;
    /**
     * Notify server that reader resources can be released on server
     */
    release(): void;
}
