import {IndexTickGenerator} from './IndexTickGenerator';
import {SeismicPipeline} from '../pipeline/SeismicPipeline';
import {FieldDesc} from '../data/FieldDesc';

/**
 * Defines a tick generator for seismic traces header values. This tick generator can display ticks for the seismic traces headers.<br>
 * It will retrieve the header values from the given {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline.SeismicPipeline} for the given {@link @int/geotoolkit/seismic/data/FieldDesc.FieldDesc} and display ticks for those trace headers.
 */
export class TraceHeaderTickGenerator extends IndexTickGenerator {
    /**
     * Defines a tick generator for seismic traces header values. This tick generator can display ticks for the seismic traces headers.<br>
     * It will retrieve the header values from the given {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline.SeismicPipeline} for the given {@link @int/geotoolkit/seismic/data/FieldDesc.FieldDesc} and display ticks for those trace headers.
     * @param options An object containing the properties to set
     * @param options.invalidatehandler invalidatehandler
     * @param options.headerfield header field or name of the header field, or id
     * @param headerField header field or name of the header field, or id
     * @param invalidateHandler invalidateHandler
     */
    constructor(options: object | { invalidatehandler?: Function; headerfield?: FieldDesc | string | number; }  | SeismicPipeline, headerField?: FieldDesc | string | number, invalidateHandler?: Function);
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {invalidatehandler: Function; headerfield: FieldDesc | string | number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.invalidatehandler invalidatehandler
     * @param properties.headerfield header field or name of the header field, or id
     */
    setProperties(properties?: object | { invalidatehandler?: Function; headerfield?: FieldDesc | string | number; } ): this;
}
