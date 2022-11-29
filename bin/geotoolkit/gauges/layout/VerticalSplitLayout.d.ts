import {GaugeLayout} from './GaugeLayout';

/**
 * Defines layout for circular gauges
 */
export class VerticalSplitLayout extends GaugeLayout {
    /**
     * Defines layout for circular gauges
     * @param options options
     * @param options.innernorth inner north
     * @param options.innersouth inner south
     */
    constructor(options?: object | { innernorth?: number; innersouth?: number; } );
}
