import {DataHeader} from './DataHeader';
import {BinaryHeader} from './BinaryHeader';

/**
 * Defines abstract seismic Format
 */
export class SeismicFormat {
    /**
     * Defines abstract seismic Format
     */
    constructor();
    /**
     * Add header
     * @param header 
     */
    addHeader(header: DataHeader): DataHeader;
    /**
     * Return headers count
     */
    getHeadersCount(): number;
    /**
     * Return header by index
     * @param index index of the header
     */
    getHeader(index: number): DataHeader;
    /**
     * Add trace header
     * @param header 
     */
    addTraceHeader(header: BinaryHeader): BinaryHeader;
    /**
     * Return count of trace headers
     */
    getTraceHeadersCount(): number;
    /**
     * Return trace header by index
     * @param index 
     */
    getTraceHeader(index: number): BinaryHeader;
    /**
     * Return a size of the line headers in bytes
     */
    getLineHeadersSize(): number;
    /**
     * Return a size of the trace header in bytes
     */
    getTraceHeadersSize(): number;
}
