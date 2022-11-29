import {Transformer2d} from './Transformer2d';
import {Trajectory2d} from './Trajectory2d';
import {Transformation} from '../util/Transformation';
import {DeviatedTransformation} from './DeviatedTransformation';

/**
 * TVDTransformer implementation
 */
export class TVDTransformer extends Transformer2d {
    /**
     * TVDTransformer implementation
     * @param options options
     * @param options.scaleWidth should transformer scale track's width on zooming?
     * @param options.minWidth minimum width of track for scaling
     * @param options.maxWidth maximum width of track for scaling
     * @param options.widthScaleX default scale by x position
     */
    constructor(options?: object | { scaleWidth?: boolean; minWidth?: number; maxWidth?: number; widthScaleX?: number; } );
    /**
     * Gets options
     * NOTE: copy of options is created and returned.
     */
    getOptions(): object | any;
    /**
     * Sets options
     * @param options options
     * @param options.scaleWidth should transformer scale track's width on zooming?
     * @param options.minWidth minimum width of track for scaling
     * @param options.maxWidth maximum width of track for scaling
     * @param options.widthScaleX default scale by x position
     */
    setOptions(options?: object | { scaleWidth?: boolean; minWidth?: number; maxWidth?: number; widthScaleX?: number; } ): void;
    /**
     * Creates a deviated transformation
     * @param transformerContext transformer context
     * @param transformerContext.trajectory trajectory along the path
     * @param transformation transformation applied
     */
    create(transformerContext: object | { trajectory: Trajectory2d; } , transformation: Transformation): DeviatedTransformation;
}
