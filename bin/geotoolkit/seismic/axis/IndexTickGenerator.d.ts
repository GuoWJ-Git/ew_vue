import {TickGenerator, labelFormatHandler} from '../../axis/TickGenerator';
import {SeismicPipeline} from '../pipeline/SeismicPipeline';
import {Format} from '../../util/Format';

/**
 * Defines a simple tick generator for seismic axis. This tick generator is specialized to display ticks for seismic shapes.
 */
export class IndexTickGenerator extends TickGenerator {
    /**
     * Defines a simple tick generator for seismic axis. This tick generator is specialized to display ticks for seismic shapes.
     * @param options An object containing the properties to set
     * @param options.minimumspan minimum span distance for labels and ticks
     * @param options.displayvaluetype display value type
     * @param options.pipeline seismic pipeline
     */
    constructor(options?: object | { minimumspan?: number; displayvaluetype?: DisplayValueType; pipeline?: SeismicPipeline; }  | SeismicPipeline);
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {minimumspan: number; displayvaluetype: DisplayValueType; pipeline: SeismicPipeline} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.minimumspan minimum span distance for labels and ticks
     * @param properties.displayvaluetype display value type
     * @param properties.pipeline seismic pipeline
     */
    setProperties(properties: object | { minimumspan?: number; displayvaluetype?: DisplayValueType; pipeline?: SeismicPipeline; } ): this;
    /**
     * Sets format label handler
     * @param handler Function called to generate the label of a value, or geotoolkit.util.Format instance
     */
    setFormatLabelHandler(handler: Function | labelFormatHandler | Format): this;
    /**
     * Returns min device step
     */
    getMinimumSpan(): number;
    /**
     * Set min device step
     * @param minimumSpan min span between ticks
     */
    setMinimumSpan(minimumSpan: number): this;
    /**
     * returns active pipeline
     */
    getPipeline(): SeismicPipeline;
    /**
     * set pipeline
     * @param pipeline Seismic Pipeline
     */
    setPipeline(pipeline: SeismicPipeline): this;
    /**
     * returns type of display value
     */
    getDisplayValueType(): SeismicPipeline;
    /**
     * set type of display value, support Original(trace number) and Mapped(trace position)
     * @param displayValueType type of display value
     */
    setDisplayValueType(displayValueType: DisplayValueType): this;
}
/**
 * An enumeration defining display value type
 */
export enum DisplayValueType {
    /**
     * Original
     */
    Original = 0,
    /**
     * Mapped
     */
    Mapped = 1
}
