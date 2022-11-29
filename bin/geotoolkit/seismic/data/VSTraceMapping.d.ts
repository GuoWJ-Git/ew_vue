import {TraceMapping} from './TraceMapping';
import {SeismicPipeline} from '../pipeline/SeismicPipeline';
import {NumericalDataSeries} from '../../data/NumericalDataSeries';
import {NumericalDataSeriesView} from '../../data/NumericalDataSeriesView';
import {Range} from '../../util/Range';

/**
 * Defines variable space trace mapping
 */
export class VSTraceMapping extends TraceMapping {
    /**
     * Defines variable space trace mapping
     * @param pipeline 
     * @param positions positions of traces in
     * the model space (depths)
     * @param traceSpacing model trace spacing
     * @param traceRange model trace range
     */
    constructor(pipeline: SeismicPipeline, positions: NumericalDataSeries | NumericalDataSeriesView | number[], traceSpacing?: number, traceRange?: Range);
    /**
     * Returns model trace spacing
     */
    getModelTraceSpacing(): number;
}
