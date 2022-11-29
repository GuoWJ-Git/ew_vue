import {Measure as ToolsMeasure} from '../../controls/tools/Measure';
import {Unit} from '../../util/Unit';
import {GeodeticSystem} from '../GeodeticSystem';
import {AbstractSystem} from '../coordinatesystems/AbstractSystem';
import {MeasurePathMode} from './MeasurePathMode';

/**
 * Measure tool for measuring distances and areas on a map
 */
export class Measure extends ToolsMeasure {
    /**
     * Measure tool for measuring distances and areas on a map
     * @param options tool options
     * @param options.unit units for measuring
     * @param options.wrapped true if map should be wrapped, false otherwise
     * @param options.system map coordinate system
     * @param options.pathmode measure paths draw mode
     */
    constructor(options?: object | { unit?: Unit | string; wrapped?: boolean; system?: GeodeticSystem | AbstractSystem; pathmode?: MeasurePathMode; } );
    /**
     * Sets displaying paths mode
     * @param mode paths mode to use
     */
    setPathMode(mode: MeasurePathMode): this;
    /**
     * Returns current mode for paths
     */
    getPathMode(): MeasurePathMode;
    /**
     * Sets measuring units
     * @param unit unit for measuring
     */
    setUnit(unit: Unit | string): this;
    /**
     * Returns current measuring unit
     */
    getUnit(): Unit;
}
