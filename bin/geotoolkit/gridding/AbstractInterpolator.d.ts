/**
 * Abstract class for gridding interpolators
 */
export class AbstractInterpolator {
    /**
     * Abstract class for gridding interpolators
     * @param options options
     * @param options.filter filter duplicates before training - last data is used
     * @param options.wasm use WebAssembly implementation if possible
     */
    constructor(options?: object | { filter?: boolean; wasm?: boolean; } );
    /**
     * If this interpolator supports WebAssembly
     */
    protected isWasmSupported(): boolean;
    /**
     * Returns true if browser supports WebAssembly, this interpolator has such realisation and option enabled in this interpolator
     */
    isWasmEnabled(): boolean;
    /**
     * Prepare data and run training
     * @param xSeries x series
     * @param ySeries y series
     * @param zSeries z series
     */
    prepare(xSeries: number[], ySeries: number[], zSeries: number[]): Promise<any>;
    /**
     * Teach algorithm with existing points. Internal use.
     * @param xSeries x series
     * @param ySeries y series
     * @param zSeries z series
     */
    protected train(xSeries: number[], ySeries: number[], zSeries: number[]): Promise<any>;
    /**
     * Get interpolate z series by (x,y) pairs. Returns Promise, which resolves with array of z-series
     * @param xSeries x series
     * @param ySeries y series
     */
    getValues(xSeries: number[], ySeries: number[]): Promise<any>;
}
