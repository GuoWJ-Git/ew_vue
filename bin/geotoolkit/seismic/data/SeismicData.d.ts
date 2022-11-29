import {EventDispatcher} from '../../util/EventDispatcher';
import {SeismicMetaData} from './SeismicMetaData';
import {Rect} from '../../util/Rect';

/**
 * Defines an interface for seismic data source/source of traces.<br>
 * It implements methods like getMetaData() which returns {@link @int/geotoolkit/seismic/data/SeismicMetaData.SeismicMetaData} and <br>
 * Select() function to select and load relevant seismic trace sections .
 */
export class SeismicData extends EventDispatcher {
    /**
     * Defines an interface for seismic data source/source of traces.<br>
     * It implements methods like getMetaData() which returns {@link @int/geotoolkit/seismic/data/SeismicMetaData.SeismicMetaData} and <br>
     * Select() function to select and load relevant seismic trace sections .
     */
    constructor();
    /**
     * Return the value to indicate if data was changed
     */
    getTimeStamp(): number;
    /**
     * Update time stamp
     */
    protected updateTimeStamp(): void;
    /**
     * Returns seismic meta data information
     */
    getMetaData(): SeismicMetaData;
    /**
     * Select seismic trace sections and call "callback" method then section is loaded.
     * @param query a query in JSON format. Should contain parameters relevant to the trace, such as "from", "to", "headers", and "samples"
     * @param query.headers result should have trace headers
     * @param query.samples result should have trace samples
     * @param query.from specify a start trace index from 0 to getTraceNumbers()-1
     * @param query.to specify end trace index from 0 to getTraceNumbers()-1
     * @param query.traceIndexes optional indices of traces from 0 to getTraceNumbers()-1
     * @param callback callback to be called then section is loaded. This method has {geotoolkit.seismic.data.QueryResult}
     * as parameter
     */
    select(query: object | { headers?: boolean; samples?: boolean; from?: number; to?: number; traceIndexes?: number[]; } , callback: Function): void;
    /**
     * Invalidate data and notify that data is changed
     * @param rect optional area of tracers and samples to invalidate. It is not
     * supported now
     */
    invalidate(rect?: Rect): void;
}
/**
 * IndexType enumerator, describes the index type of the underlying seismic
 */
export enum Events {
    /**
     * Event type fired when a seismic data is modified and requires an update cycle to be done
     */
    Invalidate = 'Invalidate'
}
