import {AbstractHttpService} from '../../http/AbstractHttpService';
import {Range} from '../../util/Range';

/**
 * Provide utility class to load reservoir data from IVAAP backend
 */
export class RemoteReservoirDataSource {
    /**
     * Provide utility class to load reservoir data from IVAAP backend
     * @param options options
     * @param options.requestheaders HTTP request headers as key-value pair. it it is specified then it will be applied
     * @param options.httpservice http service to make any HTTP request
     * @param options.zfp enable ZFP decompression. It is supported if browser supports it
     * @param options.error absolute errors for compression
     * @param options.error.value absolute error for compression of values
     * @param options.error.cell absolute error for compression of cells
     */
    constructor(options?: object | { requestheaders?: any; httpservice?: AbstractHttpService; zfp?: boolean; error?: object | { value?: number; cell?: number; } ; } );
    /**
     * Load reservoir cells
     * @param level level
     * @param idNode inode
     * @param filterSpec filter
     */
    loadCells(level?: number, idNode?: number, filterSpec?: string): Promise<any>;
    /**
     * Load reservoir values
     * @param ordinal ordinal
     * @param filterSpec filter
     */
    loadValues(ordinal: string, filterSpec: string): Promise<Values>;
    /**
     * Load meta data
     * @param url url of meta information
     */
    loadMeta(url: string): Promise<MetaInfo>;
    /**
     * Returns true if browser supports WebAssembly and ZFP is enabled
     */
    isZFPEnabled(): boolean;
    /**
     * Returns meta information from IVAAP backend
     */
    getMetaData(): MetaInfo;
    /**
     * Return links
     */
    getLinks(): any[];
    /**
     * Dispose
     */
    dispose(): void;
}
/**
 * Defines Cell properties
 */
export type Cell = { x: number[]; y: number[]; z: number[]; ijk: number[]; value: number}
/**
 * Defines Value properties
 */
export type Value = { ijk: number[]; value: number}
/**
 * Defines Values properties
 */
export type Values = { values: Value[]; valuesRange: Range}
/**
 * Defines meta information from backend
 */
export type MetaInfo = { name: string; nanvalue: number; infvalue: number; ni: number; nj: number; nk: number; origin: {  x: number;  y: number;  z: number }; unit: string; properties: any[]; levels: number[]; areaOfUseBBox: any; zfield: any}
