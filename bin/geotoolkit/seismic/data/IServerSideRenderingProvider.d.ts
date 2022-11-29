import {Rect} from '../../util/Rect';
import {QueryType} from '../pipeline/QueryType';
import {TileResourceManager} from '../../scene/TileResourceManager';
import {Cancel} from '../../util/Cancel';

/**
 * Callback for getTile
 */
export type getTileCallback = (error: string, response: any) => void;
/**
 * Get tile. If it is not implemented the default loader is used
 */
export type getTileLoaderCallback = (data: object | { url?: string; deviceArea?: Rect; tileRect?: Rect; transformedModelRect?: Rect; options: object; condition: object | { from: number; to: number; traceIndexes?: number[]; type: QueryType; } ; resourceManager: TileResourceManager; } , callback: getTileCallback) => Cancel | Promise<any> | any;
/**
 */
export type getTileURLFormatterCallback = (data: object | { deviceArea: Rect; tileRect: Rect; transformedModelRect: Rect; options: object; condition: object | { from: number; to: number; traceIndexes?: number[]; type: QueryType; } ; } ) => {deviceArea: Rect; tileRect: Rect; transformedModelRect: Rect} | object;
/**
 * Callback for pickSample
 */
export type pickSampleCallback = (data: object | { traceId?: number; traceNumber: number; traceHeader: object | { header?: object | null; data?: object | null; }  | number; sampleIndex: number; sampleValue: string | object; location?: object | { x: number; y: number; } ; } ) => void;
/**
 * Define an interface for remote reader data provider with server side rendering.
 */
export abstract class IServerSideRenderingProvider {
    /**
     * Pick sample
     * @param x x coordinate for picking sample (in seismic model space)
     * @param y y coordinate for picking sample (in seismic model space)
     * @param target instance of callback owner
     * @param callback This function called when data is ready.
     * @param options additional options
     * @param options.strategyName picking strategy name
     */
    abstract pickSample(x: number, y: number, target: object, callback: pickSampleCallback, options?: object | { strategyName?: string; } ): void;
    /**
     * Get tile URL formatter function
     */
    abstract getTileURLFormatter(): getTileURLFormatterCallback;
    /**
     * Return function to load tile. If it returns null the default loader is used
     */
    abstract getTileLoader(): getTileLoaderCallback;
}
