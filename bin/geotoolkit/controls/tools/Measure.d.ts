import {Paint} from './Paint';
import {MeasureMode} from './MeasureMode';
import {Format} from '../../util/Format';
import {Text} from '../../scene/shapes/Text';
import {AnchoredShape} from '../../scene/shapes/AnchoredShape';
import {Node} from '../../scene/Node';

/**
 * Measure tool to measure data in model coordinates. Can measure distance or polygon area
 */
export class Measure extends Paint {
    /**
     * Measure tool to measure data in model coordinates. Can measure distance or polygon area
     * @param options tool options
     * @param options.name tool name
     * @param options.mode tool mode (distance/area)
     * @param options.format format instance to use for info labels
     * @param options.label text instance to use for labeling or label callout options
     * (see {@link @int/geotoolkit/controls/shapes/Callout.Callout} for more info)
     * @param options.label.arrowsize label callout arrow size in device coordinates
     * @param options.label.padding label callout inner padding in device coordinates
     * @param options.label.suffix label info suffix (to represent units)
     * @param options.directionsymbol direction symbol to show measuring direction
     * @param options.directionmode direction mode for direction symbol position(s)
     */
    constructor(options?: object | { name?: string; mode?: MeasureMode; format?: Format; label?: Text | object | { arrowsize?: number; padding?: number; suffix?: string; } ; directionsymbol?: AnchoredShape; directionmode?: number; } );
    /**
     * Returns distances that were measured
     */
    getDistances(): number[];
    /**
     * Returns measured area value
     */
    getArea(): number | any;
    /**
     * Returns label(s) that display distances or area
     */
    getLabels(): Node | Node[];
    /**
     * Sets measure mode (for what is measured)
     * @param mode measure mode
     */
    setMeasureMode(mode: MeasureMode): this;
    /**
     * Returns current measure mode
     */
    getMeasureMode(): MeasureMode;
}
