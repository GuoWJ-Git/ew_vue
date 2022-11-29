import {SnapPickingStrategy} from './SnapPickingStrategy';
import {SeismicPipeline} from '../../pipeline/SeismicPipeline';

/**
 * This class provides utility function to retrieve a seismic sample from a pipeline at a given coordinate.
 * It will snap to the closest sample center.
 */
export class SnapPicker {
    /**
     * This class provides utility function to retrieve a seismic sample from a pipeline at a given coordinate.
     * It will snap to the closest sample center.
     */
    constructor();
    /**
     * Pick sample at specified coordinate
     * <p> If pipeline is set to be used server-side rendering then this method tries to
     * call pickSample of {@link @int/geotoolkit/seismic/data/IServerSideRenderingProvider.IServerSideRenderingProvider}.</p>
     * @param x x coordinate for picking sample (in seismic model space)
     * @param y y coordinate for picking sample (in seismic model space)
     * @param strategy used for picking
     * @param pipeline seismic pipeline
     * @param target instance of callback owner
     * @param callback This function called when data is ready. It accepts trace number, trace header, sample index, sample value
     */
    static pickSample(x: number, y: number, strategy: SnapPickingStrategy | string, pipeline: SeismicPipeline, target: any, callback: Function): void;
    /**
     * Pick sample at specified trace and sample index
     * @param traceIndex trace
     * @param sampleIndex index of the sample
     * @param strategy strategy used for picking
     * @param pipeline seismic pipeline
     * @param target instance of callback owner
     * @param callback This function is called when data is ready. It accepts trace number, trace header, sample index, sample value
     */
    static pickTraceSampleIndex(traceIndex: number, sampleIndex: number, strategy: SnapPickingStrategy, pipeline: SeismicPipeline, target: any, callback: Function): void;
}
