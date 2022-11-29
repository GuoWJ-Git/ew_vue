import {AnnotationLocation} from '../layout/AnnotationLocation';
import {TickGenerator} from './TickGenerator';
import {Axis} from './Axis';

/**
 * Defines helper method(s) to create axis instance
 */
export class AxisFactory {
    /**
     * Defines helper method(s) to create axis instance
     */
    constructor();
    /**
     * Returns instance of the factory
     */
    static getInstance(): AxisFactory;
    /**
     * Creates axis
     * @param options axis options
     * @param options.location of the axis
     * @param options.tickgenerator optional tick generator (by default geotoolkit.axis.AdaptiveTickGenerator is used)
     * @param options.autolabelrotation auto label rotation {@link @int/geotoolkit/axis/Axis.Axis.setAutoLabelRotation}
     * @param options.autolabelrotationangle auto label rotation {@link @int/geotoolkit/axis/Axis.Axis.setAutoLabelRotationAngle}
     * @param options.title title properties {@link @int/geotoolkit/axis/Axis.Axis.setTitle}
     */
    create(options: object | { location: AnnotationLocation; tickgenerator?: TickGenerator; autolabelrotation?: boolean; autolabelrotationangle?: number; title?: object | string; } ): Axis;
}
